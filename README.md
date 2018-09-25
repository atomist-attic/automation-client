# @atomist-seeds/automation-client

[![npm version](https://img.shields.io/npm/v/@atomist/automation-seed.svg)](https://www.npmjs.com/package/@atomist/automation-seed)

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

Before you can run this project, you will need an Atomist workspace
linked to a Slack workspace.  See the [Atomist Getting Started
Guide][atomist-start] for instructions on how to get an Atomist
workspace and connect it to your source code repositories, continuous
integration, chat platform, etc.

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

Once the prerequisites are met on your system, you can use the Atomist
CLI to install dependencies, build the project, and start the client.

```
$ atomist start
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

To see this handler in action, you must first link a GitHub repository
to a Slack channel.  You can do this by inviting the Atomist bot to
the channel you want to link, sending it the message "repo", i.e.,
`@atomist repo`, and answering its questions.

## Support

General support questions should be discussed in the `#support`
channel in the [Atomist community Slack workspace][slack].

If you find a problem, please create an [issue][].

[issue]: https://github.com/atomist/automation-seed-ts/issues

## Development

You will need to install [Node.js][node] to build and test this
project.

[node]: https://nodejs.org/ (Node.js)

### Build and test

Install dependencies.

```
$ npm install
```

Use the `build` package script to compile, test, lint, and build the
documentation.

```
$ npm run build
```

### Release

Releases are handled via the [Atomist SDM][atomist-sdm].  Just press
the 'Approve' button in the Atomist dashboard or Slack.

[atomist-sdm]: https://github.com/atomist/atomist-sdm (Atomist Software Delivery Machine)

---

Created by [Atomist][atomist].
Need Help?  [Join our Slack workspace][slack].

[atomist]: https://atomist.com/ (Atomist - How Teams Deliver Software)
[slack]: https://join.atomist.com/ (Atomist Community Slack)
