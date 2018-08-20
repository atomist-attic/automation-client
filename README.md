# @atomist/automation-seed

[![npm version](https://badge.fury.io/js/%40atomist%2Fautomation-seed.svg)](https://badge.fury.io/js/%40atomist%2Fautomation-seed)

This repository contains examples demonstrating use of the
[Atomist][atomist] API for software.  You will find examples
illustrating:

-   Creating bot commands using _command handlers_
-   Responding to DevOps events, e.g., commits pushed to a repository,
    using _event handlers_

These examples use the [`@atomist/automation-client`][client] node
module to implement a local client that connects to the Atomist API
for software.  See the [Atomist documentation][atomist-doc] for more
information about Atomist, software delivery machines (SDM), and the
Atomist API for software.

[client]: https://github.com/atomist/automation-client-ts (@atomist/automation-client Node Module)
[atomist-doc]: https://docs.atomist.com/ (Atomist Documentation)

## Prerequisites

Before you can run this project, you will need an Atomist workspace.
See the [Atomist Getting Started Guide][atomist-start] for
instructions on how to get an Atomist workspace and connect it to your
source code repositories, continuous integration, chat platform, etc.

You will also need several other prerequisites to successfully run
this project.  See the [Atomist Developer Guide][atomist-dev] for
instructions on setting up your development environment.  Briefly, you
will need [Git][git], [Node.js][node], and the [Atomist
CLI][atomist-cli] installed and properly configured on your system.

[atomist-start]: https://docs.atomist.com/user/ (Atomist - Getting Started)
[atomist-dev]: https://docs.atomist.com/developer/prerequisites/ (Atomist - Developer Prerequisites)
[git]: https://git-scm.com/ (Git)
[atomist-cli]: https://github.com/atomist/cli (Atomist Command-Line Interface)

## Running

Once the prerequisites are met on your system, use `npm` to install
dependencies and build the project.

```
$ npm install
$ npm run build
```

You can start up your SDM in the usual `npm` way.

```
$ npm start
```

The [Atomist API Client documentation][atomist-client] has more
complete instructions for running an SDM or other Atomist API client.

[atomist-client]: https://docs.atomist.com/developer/client/ (Atomist - API Client)

## Using

### Invoking a command handler from Slack

This project contains the code to create and respond to a simple
`hello world` bot command.  The code that defines the bot command and
implements responding to the command, i.e., the _command handler_, can
be found in [`HelloWorld.ts`][hello].  Once you have your local
automation client running (the previous step in this guide), you can
invoke the command handler by sending the Atomist bot the command as a
message.  Be sure the Atomist bot is in the channel before sending it
the message.

```
/invite @atomist
@atomist hello world
```

Once you've submitted the command in Slack, you'll see the incoming
and outgoing messages show up in the logs of your locally running
automation-client.  Ultimately, you should see the response from the
bot in Slack.

[hello]: https://github.com/atomist/automation-seed-ts/blob/master/src/commands/HelloWorld.ts (HelloWorld Command Handler)

Feel free to modify the code in the `HelloWorld` command handler,
Node.js will automatically reload the client, and see what happens!

### Triggering an event handler

While command handlers respond to commands you send the Atomist bot,
_event handlers_ take action when different types of events occur in
your development and operations environment.  Some examples of events
are commits pushed to a repo, or a CI build that fails, or an instance
of a running service that becomes unhealthy.  Example responses to those
events are showing the commits in a Slack message, automatically
restarting the build, and triggering a PagerDuty alert, respectively.

The sample event handler in this project, [NotifyOnPush][nop-handler],
will notice when someone pushes new commits to a repository in the
GitHub organization and send a notice of that push to all Slack
channels associated with that repository.

If you have followed the instructions above and are running these
automations against the atomist-playground Slack team and GitHub
organization, go ahead and edit the [notify-on-push][nop-repo]
repository by adding some text to its [README][nop-readme].  Once you
have saved your changes, you should see that event appear in the
console logs of your locally running automation client, followed by a
log of the actions the event handler is taking.  Once those actions
are complete, you should see a new message in the
[`#notify-on-push`][nop-channel] channel in the atomist-playground
Slack team.

[nop-handler]: https://github.com/atomist/automation-seed-ts/blob/master/src/events/NotifyOnPush.ts (Atomist NotifyOnPush Event Handler)
[nop-repo]: https://github.com/atomist-playground/notify-on-push (Atomist NotifyOnPush Repository)
[nop-readme]: https://github.com/atomist-playground/notify-on-push/edit/master/README.md (Edit NotifyOnPush README)
[nop-channel]: https://atomist-playground.slack.com/messages/C7GNF6743/ (NotifyOnPush Slack Channel)

## Support

General support questions should be discussed in the `#support`
channel in the [Atomist community Slack workspace][slack].

If you find a problem, please create an [issue][].

[issue]: https://github.com/atomist/automation-seed-ts/issues

## Development

You will need to install [node][] to build and test this project.

[node]: https://nodejs.org/ (Node.js)

### Build and Test

Use the following package scripts to build, test, and perform other
development tasks.

Command | Reason
------- | ------
`npm install` | install project dependencies
`npm run build` | compile, test, lint, and generate docs
`npm start` | start the Atomist API client
`npm run autostart` | run the client, refreshing when files change
`npm run lint` | run TSLint against the TypeScript
`npm run compile` | generate types from GraphQL and compile TypeScript
`npm test` | run tests
`npm run autotest` | run tests every time a file changes
`npm run clean` | remove files generated during the build

### Release

Releases are managed by the [Atomist SDM][atomist-sdm].  Press the
release button in the Atomist dashboard or Slack.

[atomist-sdm]: https://github.com/atomist/atomist-sdm (Atomist Software Delivery Machine)

---

Created by [Atomist][atomist].
Need Help?  [Join our Slack workspace][slack].

[atomist]: https://atomist.com/ (Atomist - How Teams Deliver Software)
[slack]: https://join.atomist.com/ (Atomist Community Slack)
