---
title: Understanding filesystem policies for local sandboxing in {% data variables.copilot.copilot_cli %}
shortTitle: Understanding local sandboxing
allowTitleToDifferFromFilename: true
intro: 'When local sandboxing is enabled, {% data variables.copilot.copilot_cli_short %} runs each sandboxed process or operation under a filesystem policy that controls which files and directories it can read and write. Learn how that policy is built and how to check the access it grants.'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
  - Learn about Copilot CLI
docsTeamMetrics:
  - copilot-cli
---

## Introduction

When you enable local sandboxing, {% data variables.copilot.copilot_cli_short %} runs the commands it invokes on your behalf inside an operating-system sandbox. The sandbox enforces a **filesystem policy**: a set of rules that decide which paths a sandboxed process or operation can read, which it can write, and which it cannot touch at all.

Most of this policy is assembled automatically, so that everyday commands keep working without setup. This article explains how {% data variables.product.prodname_copilot_short %} arrives at the policy, and how to check the access it grants in a particular directory.

For an overview of local sandboxing, including how to turn it on and off, see [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes) and [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing). For details of how to configure local sandboxing, see [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings).

## What the policy applies to

The filesystem policy covers the work {% data variables.product.prodname_copilot_short %} does on your behalf, but it is enforced in different ways depending on the kind of work:

* **Shell commands and built-in searches** run as sandboxed child processes, so the operating system enforces the policy directly. The `grep` and `glob` tools, for example, run ripgrep as a sandboxed child process.
* **Local MCP and language server processes (LSP)** run inside the sandbox by default, so the operating system enforces the policy on them too. You can change this in the sandbox settings unless a managed policy requires it.
* **Built-in file-reading and file-editing tools** run as part of {% data variables.copilot.copilot_cli_short %} itself rather than as a sandboxed child process. They check the same filesystem policy before reading or writing a file, but because the operating-system sandbox never sees these operations, the check is a software-only safeguard rather than one the operating system enforces.
* **Remote MCP servers** run outside your machine, so there is no local child process to sandbox and the filesystem policy does not constrain them. Their connections from the CLI can still be restricted by the network policy when **Sandbox MCP servers** is enabled.
* **Subagents** use other tools to do their work. Whether the policy applies, and how, depends on the tool a subagent invokes.

A sandboxed **process** is therefore constrained by the operating system, while an in-process **operation** enforces the same policy in software—which is why this article refers to a sandboxed process or operation rather than only to commands.

## Permission levels

The sandbox is **deny-by-default**: unless a path is explicitly granted, a command cannot use it. Every path in the policy has one of three permission levels:

* **Read/write** — the command can read and modify files at this path.
* **Read-only** — the command can read files at this path, but not change them.
* **Denied** — the command cannot read or write at this path, even if a broader rule would otherwise allow it.

Because access is denied unless granted, {% data variables.product.prodname_copilot_short %} must grant a command everything it legitimately needs—your project files, the tools it runs, and supporting locations such as temporary directories—while keeping everything else off-limits.

> [!NOTE]
> These permission levels apply to every sandboxed process or operation, but they are enforced differently: for sandboxed child processes the operating system enforces them directly, while the CLI's own built-in file-reading and file-editing tools check the same levels in software, without an operating-system backstop.

## How the policy is built

Before each sandboxed process starts, {% data variables.copilot.copilot_cli_short %} resolves the effective policy for that process using the current working directory, environment, settings, and automatic grants. This includes common locations needed by tools, so you don't have to grant each one yourself. Tools can also receive access to selected session files and installed skills they need to use.

### Your working directory

When **Include working directory** is enabled in the filesystem settings for local sandboxing—as it is by default—the current working directory is granted read/write access. In a Git repository, {% data variables.product.prodname_copilot_short %} also adds the associated Git grants. Turning this setting off suppresses all of those automatic grants so you must add allow rules for the required project and Git paths manually. See [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings).

> [!NOTE]
> If you get {% data variables.product.prodname_copilot_short %} from an enterprise-owned organization, an administrator can turn off the **Include working directory** setting and lock it, so you can't turn it back on. See [AUTOTITLE](/copilot/reference/enterprise-administrators/enterprise-managed-settings#sandbox).

### Tools on your PATH

To run a program such as `python` or `git`, the sandbox has to let the command see the directory the program lives in. When **Allow dev tool access** is enabled—as it is by default—{% data variables.product.prodname_copilot_short %} grants **read-only** access to the directories listed in your `PATH` environment variable, along with directories named by related tool variables such as `GOPATH`, `JAVA_HOME`, and `PYTHONPATH`. Read-only is the right level for external tools: a command needs to run `git`, not modify it. If you turn **Allow dev tool access** off, these directories are no longer granted automatically and must come from your own allow rules. For the complete list of the `PATH` and toolchain environment variables the sandbox inspects, and how each one is interpreted, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#sandbox-tool-directory-grants).

### System and profile locations

On macOS, standard system locations are granted read-only permission so that commands can load shared libraries and read system configuration without being able to change them. The application directories in your user profile (for example, the subdirectories of `%LOCALAPPDATA%\Programs` on Windows, or the `~/.local/bin` and `~/.local/lib` directories on macOS and Linux) are also granted read-only permission when **Allow dev tool access** is enabled, so that commands can read the tools you have installed there without being able to modify them.

### Package-manager caches

When **Allow dev tool access** is enabled, {% data variables.product.prodname_copilot_short %} grants access to the caches and registries used by common package managers and toolchains. Most locations are read-only. Selected locations, such as npm's cache, build caches, and some dependency stores, are writable so installs and builds can work.

These grants depend on the command and the tools detected in your project. They can follow cache locations you have configured outside the usual directories. Some granted configuration files contain registry credentials, and writable caches can be shared with commands you run outside the sandbox. Turn off **Allow dev tool access** if you prefer to grant these locations yourself.

In the `/sandbox policy` report, the **Dev tools** section lists the detected tools and their paths. Selected writable caches are created when a command needs them, so they may not appear in the report before the first use.

### Git repositories

When you work in a subdirectory of a Git repository, {% data variables.product.prodname_copilot_short %} grants **read** access to the whole repository so that commands can see the full project, while limiting **writes** to your current working directory and the repository's Git metadata (its `.git` directory). This lets a command read across the repository but keeps changes focused on where you are working.

Because read access spans the whole repository, a sandboxed command can read files outside your current subdirectory, including anything sensitive stored elsewhere in the project. To keep specific paths out of reach, you can add deny rules. See [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings).

## When access rules overlap

Because {% data variables.product.prodname_copilot_short %} grants several locations, and you can add your own, the rules can overlap. When read-only and read/write grants overlap, the **more specific path wins**. For example, if `/project` is writable but you mark `/project/secrets` read-only, everything in `/project` stays writable except `/project/secrets`. Denied paths take precedence over both kinds of grant.

Discovered tool-directory grants give way to read/write access that already covers them. Consider a Python project with a local virtual environment (`.venv`) that appears on your `PATH`. Treating that directory as an ordinary read-only tool location would make it read-only—even though it sits inside your writable project—and a command such as `pip install` could then fail when it tried to update the environment. {% data variables.product.prodname_copilot_short %} leaves it writable as part of your workspace. Other read-only rules, including ones you configure yourself, are not discarded this way.

Rules that **you** configure are not removed just because the same path was discovered automatically. You can use them to restrict access to a sensitive location, such as an existing `.env` file. Missing paths and symbolic links need additional care, as described in [Troubleshooting filesystem access](#troubleshooting-filesystem-access).

## Checking what the current policy allows

Because the policy is assembled for each directory and command, the simplest way to see the access you have is to ask {% data variables.copilot.copilot_cli_short %}. In a session, enter:

```shell copy
/sandbox policy
```

{% data variables.product.prodname_copilot_short %} prints the **effective** policy for your current directory. Paths are grouped by source, such as **User-configured paths** and **Dev tools**, and by access level. The report also includes network settings and a **Capabilities** section covering settings such as bypass, MCP/LSP sandboxing, and authentication. This is the result after automatic grants, your settings, and managed restrictions have been combined—not just a copy of your saved settings.

To inspect the developer-tool access for a particular command, add the command after `policy`. For example:

```shell copy
/sandbox policy npm install
```

This does not run `npm install`. It shows the tool access the command would receive. The preview creates no directories, including missing denied paths and tool caches.

A few things to keep in mind when you read the report:

* It reflects your **current directory**. Because grants are discovered per directory, the same settings can resolve to different paths depending on where you run.
* Check **Notes** for configured paths that could not be included. Missing read/write or read-only grants are omitted. On Linux, missing denied paths are omitted from this preview, but launch preparation creates them before applying the policy. The preview retains them on macOS and on Windows hosts that support denied paths.
* If sandboxing is turned off, `/sandbox policy` tells you so instead of printing a policy, because no restrictions are in force.

To check only whether sandboxing is currently on, use `/sandbox status`. For more about these commands, see [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing).

## Troubleshooting filesystem access

If a configured read/write or read-only path does not exist, create it outside the sandbox before starting the command again. A running child process keeps the policy it received at launch. Creating a path later does not add a missing grant to that process. Restart a long-running server if it needs the updated access.

Before a sandboxed process starts, {% data variables.copilot.copilot_cli_short %} creates missing denied paths and their parent directories on your machine. This includes paths intended for files, so a missing `.env` becomes a directory. The directories remain after the process exits.

If a denied path cannot be prepared, the process does not start. The read-only `/sandbox policy` preview does not perform this preparation, which is why missing denied paths are omitted there on Linux. For troubleshooting, see [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing#troubleshooting-blocked-paths-that-do-not-exist).

A symbolic link inside an allowed directory does not guarantee access to a target outside that directory. If a denial message names such a target, inspect it and grant access only if intended. Adding a resolvable symbolic link itself through `/sandbox config` also adds its current target for read/write or read-only access. Handwritten path rules and automatically discovered developer-tool grants do not automatically add that target.

Denied paths are handled differently from grants: the CLI resolves their written path and current target. On Linux, a denied symbolic link protects its target, but does not reliably prevent the link itself from being replaced. Prefer denying the actual sensitive directory rather than relying on a symbolic-link rule alone.

For network failures, managed restrictions, and bypass choices, see [Troubleshooting blocked commands](/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing#troubleshooting-blocked-commands).

## Customizing the policy

You can grant extra read/write or read-only paths, deny paths, and change other filesystem behavior, either from the `/sandbox config` dialog or in your settings file. After you make a change, run `/sandbox policy` to confirm the result. For step-by-step instructions, see [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings).

## Enterprise-managed policies

If you get {% data variables.product.prodname_copilot_short %} through an enterprise-owned organization, an administrator can enforce a filesystem policy through managed settings. Managed settings act as a restrictive baseline: they can require sandboxing, add denied paths, and limit which paths you are allowed to grant. Where a managed setting applies, the `/sandbox config` dialog shows it as a locked **(managed)** value, and `/sandbox policy` reflects it in the resolved policy. If the effective policy permits sandbox bypass, a user can explicitly disable sandboxing for the rest of the current session, either from an active bypass permission prompt or by running `/sandbox disable`. This session opt-out does not loosen the saved policy.

Unlike most settings, where a single source wins, the sandbox policy is composed from every source in force at once. Managed settings can arrive through more than one channel simultaneously—server-managed, MDM, and file-based—and these combine with each other, and with your own settings, in the **most restrictive** direction rather than one source overriding another: a required toggle stays on, denied paths from all sources add up, and the paths you are allowed to grant can only be narrowed. For more information, see [AUTOTITLE](/copilot/reference/enterprise-administrators/enterprise-managed-settings#sandbox).

## Further reading

* [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes)
* [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing)
* [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings)
