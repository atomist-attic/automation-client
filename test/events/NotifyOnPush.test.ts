/*
 * Copyright © 2018 Atomist, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as assert from "power-assert";

import {
    EventFired,
    HandlerContext,
    SlackDestination,
} from "@atomist/automation-client";

import { NotifyOnPush } from "../../lib/events/NotifyOnPush";
import { PushWithRepo } from "../../lib/typings/types";

describe("NotifyOnPush", () => {

    const nop = new NotifyOnPush();
    const sha = "ad31a1182a194c09b960d75b0f4002be1bbca288";
    const channels: PushWithRepo.Channels[] = [
        { name: "10-day" },
        { name: "acid-rap" },
        { name: "coloring-book" },
    ];

    it("should send a notification to a channel", async () => {
        const pushEvent: EventFired<PushWithRepo.Subscription> = {
            data: {
                Push: [{
                    after: {
                        sha,
                    },
                    repo: {
                        channels: [channels[0]],
                    },
                }],
            },
        } as any;
        let responseMessage: string;
        let responseChannels: string[];
        const ctx: HandlerContext = {
            graphClient: {
                query: () => Promise.resolve({ ChatTeam: [{ id: "T79TH" }] }),
            },
            messageClient: {
                send(msg: string, dest: SlackDestination): Promise<any> {
                    responseMessage = msg;
                    responseChannels = dest.channels;
                    return Promise.resolve(msg);
                },
            },
        } as any;

        const result = await nop.handle(pushEvent, ctx);
        assert(result.code === 0);
        assert(responseMessage.indexOf(sha) > 0);
        assert(responseChannels.length === 1);
        assert(responseChannels[0] === channels[0].name);
    });

    it("should send a notification to all repo channels", async () => {
        const pushEvent: EventFired<PushWithRepo.Subscription> = {
            data: {
                Push: [{
                    after: {
                        sha,
                    },
                    repo: {
                        channels,
                    },
                }],
            },
        } as any;
        let responseMessage: string;
        let responseChannels: string[];
        const ctx: HandlerContext = {
            graphClient: {
                query: () => Promise.resolve({ ChatTeam: [{ id: "T79TH" }] }),
            },
            messageClient: {
                send(msg: string, dest: SlackDestination): Promise<any> {
                    responseMessage = msg;
                    responseChannels = dest.channels;
                    return Promise.resolve(msg);
                },
            },
        } as any;

        const result = await nop.handle(pushEvent, ctx);
        assert(result.code === 0);
        assert(responseMessage.indexOf(sha) > 0);
        assert.deepEqual(responseChannels, channels.map(c => c.name));
    });

    it("should send no notifications if no channels", async () => {
        const pushEvent: EventFired<PushWithRepo.Subscription> = {
            data: {
                Push: [{
                    after: {
                        sha,
                    },
                    repo: {
                        channels: [],
                    },
                }],
            },
        } as any;
        let responseMessage: string;
        let responseChannels: string[];
        const ctx: HandlerContext = {
            graphClient: {
                query: () => Promise.resolve({ ChatTeam: [{ id: "T79TH" }] }),
            },
            messageClient: {
                addressChannels(msg: string, dest: SlackDestination): Promise<any> {
                    responseMessage = msg;
                    responseChannels = dest.channels;
                    return Promise.resolve(msg);
                },
            },
        } as any;

        const result = await nop.handle(pushEvent, ctx);
        assert(result.code === 0);
        assert(responseMessage === undefined);
        assert(responseChannels === undefined);
    });

});
