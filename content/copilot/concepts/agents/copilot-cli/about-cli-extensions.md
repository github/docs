---
title: About extensions for {% data variables.copilot.copilot_cli %}
shortTitle: CLI extensions
allowTitleToDifferFromFilename: true
intro: 'Extensions let you add your own tools and slash commands to {% data variables.copilot.copilot_cli %}, using only the SDK that ships with the CLI.'
product: '{% data reusables.gated-features.copilot-cli %}'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot # Copilot discovery page
  - Learn about Copilot CLI # Copilot CLI bespoke page
docsTeamMetrics:
  - copilot-cli
---

{% data reusables.copilot.copilot-cli.cli-extensions-experimental %}

An extension lets you add your own capabilities to {% data variables.copilot.copilot_cli_short %}. Each extension is a small Node.js module that runs as a separate process alongside your interactive session and connects back to it. Through that connection an extension can add:

* **Tools** that {% data variables.product.prodname_copilot_short %} can call while it works on your behalf.
* **Slash commands** that you run yourself.

Because an extension runs real code on your machine, you can add capabilities the built-in tools don't have. For example, an extension can watch what happens in a session and keep a running total across tool calls, which a one-off shell command can't do.

This article explains how extensions work and how {% data variables.copilot.copilot_cli_short %} handles them. For a hands-on guide to building your own extensions, see [AUTOTITLE](/copilot/tutorials/create-an-extension).

> [!WARNING]
> Extensions execute on your computer with your privileges. Only load extension code that you trust, in the same way you would only run any other script you didn't write yourself.

## How extensions are discovered

When {% data variables.copilot.copilot_cli_short %} starts, it looks for extensions in several locations. Each extension lives in its own subdirectory, and that subdirectory must contain an entry file named `extension.mjs`, `extension.cjs`, or `extension.js`. These are all JavaScript files: the {% data variables.copilot.copilot_cli_short %} runs the entry file directly with Node.js, so an extension must be written in JavaScript—TypeScript and other languages are currently not supported.

The name of the subdirectory becomes the name of the extension.

| Source | Location | Availability |
| --- | --- | --- |
| **Project** | `.github/extensions/NAME/` in the current repository | Available to anyone working in that repository. |
| **User** | `~/.copilot/extensions/NAME/` | Available in all your CLI sessions, in every directory. |
| **Plugin** | An installed plugin | Available wherever the plugin is enabled. |

## Choosing where an extension lives

Where you put the extension directory determines who can use it:

* Put it in **`.github/extensions/`** in a repository when the extension is specific to that project and you want to share it with everyone who works there.
* Put it in **`~/.copilot/extensions/`** when you want the extension available in all of your own sessions, regardless of which directory you start the CLI in.

The two locations follow exactly the same structure—a named subdirectory containing an `extension.mjs` file—so you can move an extension from one to the other simply by relocating its folder.

## Enabling extensions

Extensions are currently an experimental feature, so you need to turn on experimental features. You can do this by doing either of the following:

* Start the CLI with the `--experimental` flag.
* Run the `/experimental on` slash command inside an interactive session.

## Changing how the CLI handles extensions

You can limit {% data variables.product.prodname_copilot_short %}'s access to extensions, or turn them off entirely, by using the `/extensions mode` command. When you use this command you get three options:

* **Load & Augment** (the default)—the CLI runs your extensions, _and_ {% data variables.product.prodname_copilot_short %} can manage them.
* **Load Only**—the CLI runs your extensions, but {% data variables.product.prodname_copilot_short %} cannot manage them.
* **Disabled**—extensions are turned off entirely in the current session and will remain disabled in future sessions until you switch to one of the other two settings. Other current sessions are not affected.

Any change you make takes effect immediately in the current session:

* Switching **to Disabled** stops any extensions that are currently running. Their processes are shut down and their tools are no longer available.
* Switching **from Disabled** to either of the other settings starts your extensions.
* Switching between **Load Only** and **Load & Augment** just changes whether {% data variables.product.prodname_copilot_short %} can manage your extensions.

### What "managing extensions" means

In **Load & Augment** mode, {% data variables.product.prodname_copilot_short %} is given a small set of extra tools that let it work on the extension system directly, as part of carrying out your requests. Using these tools, {% data variables.product.prodname_copilot_short %} can:

* **List** the extensions it has discovered and see their status.
* **Inspect** an extension, including a tail of its log file, to help diagnose one that has failed or is misbehaving.
* **Scaffold** a new extension—generate a starter `extension.mjs` file for you to build on.
* **Reload** extensions, so that code it (or you) has just written takes effect without restarting the session.

This is what makes it possible for you to ask {% data variables.product.prodname_copilot_short %} to build an extension for you. {% data variables.product.prodname_copilot_short %} can create the file, write the code, and reload it, all without leaving the session.

Choose **Load Only** when you want to keep a known, trusted set of extensions running but don't want {% data variables.product.prodname_copilot_short %} creating, reloading, or otherwise changing extension code—which runs on your machine—as a side effect of its work. Your existing extensions still run, and {% data variables.product.prodname_copilot_short %} can still call the tools they provide; it simply can't manage the extensions themselves.

## Extensions compared with plugins

Both extensions and plugins add functionality to {% data variables.copilot.copilot_cli_short %}, but they serve different purposes:

* An **extension** is a single JavaScript module that you write to add tools and slash commands, backed by code that runs in your session.
* A **plugin** is an installable package that bundles reusable components—such as agents, skills, hooks, and integrations—and can be distributed through a marketplace.

For more information about plugins, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/about-cli-plugins).

## Further reading

* [AUTOTITLE](/copilot/tutorials/create-an-extension)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#slash-commands-in-the-interactive-interface)
* [AUTOTITLE](/copilot/how-tos/copilot-cli)
