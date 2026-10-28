---
title: Customization discovery locations
shortTitle: Customization Locations
intro: >-
  GitHub Copilot can discover versioned skills, agents, instructions, and file
  hooks directly from package installations, submodules, and vendored
  directories. You don't need to copy them into conventional directories.
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
---

<!-- markdownlint-disable GHD046 GHD005 -->
<!-- Suppressed: GHD046 (outdated release terminology), GHD005 (hardcoded data variable) -->

<!-- Copyright (c) Microsoft Corporation. All rights reserved. -->


## Repository settings

Declare checkout-relative directories in `.github/copilot/settings.json`:

```json
{
  "skillDirectories": ["node_modules/@example/team/skills"],
  "agentDirectories": ["vendor/team/agents"],
  "instructionDirectories": ["vendor/team/instructions"],
  "hookDirectories": ["vendor/team/hooks"]
}
```

Each list adds discovery locations for its own customization type. Conventional locations continue to work. A key in `.github/copilot/settings.local.json` replaces only that repository list; an empty list removes its repository contribution. Omitted keys inherit the checked-in list. Repository lists don't replace SDK inputs or existing user skill directories.

Repository paths must be nonempty, literal directories within the declaring checkout. Absolute paths, home or environment-variable expansion, globs, and escapes outside the checkout are rejected. Links and junctions are allowed only when their resolved roots and discovered descendants remain inside the checkout. A missing directory is reported and can be discovered after installation and an explicit customization reload. Copilot doesn't install packages or watch these directories.

File content from repository-defined discovery locations is read through a validated, opened file handle. Retargeting a link outside the checkout between discovery and invocation doesn't authorize reading its new target.

Repository locations require trust covering the declaring checkout root and remain subject to each customization type's existing discovery switches, disabled entries, and managed policy. Persisted trust for only a subdirectory doesn't authorize its parent checkout's settings. Listing a location doesn't enable a disabled customization type or grant filesystem access.

In the CLI, remembered folder trust refreshes repository customizations in the current session, even if model catalog initialization failed. `/skills reload` also rechecks persisted trust and repository discovery settings.

## SDK inputs

Session creation, resume, and option updates accept the same four lists. TypeScript and Java use `skillDirectories`, `agentDirectories`, `instructionDirectories`, and `hookDirectories`. Python and Rust use snake case; Go and .NET use Pascal case.

SDK directories can be outside the checkout. Leading and trailing whitespace is trimmed, and blank entries are ignored. Relative SDK paths resolve once against the request's effective working directory when supplied. Changing the working directory doesn't move retained SDK roots. Supplying a new relative list uses the new effective working directory. An empty list clears only the explicit SDK contribution; omission or `null` leaves it unchanged during an update.

If adopting a `hookDirectories` replacement fails or is canceled before the new hook service takes ownership, the previous directory option and live hook service remain in place. Overlapping failed updates restore the retained value rather than another failed update's directories. A failed update doesn't roll back a newer accepted update.

Explicit agent and file-hook directories don't require ambient configuration discovery. `enableFileHooks` controls repository-origin hooks, including conventional `.github/hooks`, but not explicit SDK hook directories or callback `hooks`. Managed restrictions and hook disables still apply.

Directory inputs are discovery configuration, not general filesystem grants. They don't widen `additionalDirectories`. Existing file-hook sandbox rules remain in effect.

Loading active local skills adds read-only grants for their contributing SDK skill directories under the runtime's skill-resource policy. Empty, ignored, and disabled skill sources don't add those grants. Repository-defined skill directories don't add them.

## File formats and precedence

| Type | Discovered content |
| --- | --- |
| Skills | A direct `SKILL.md` bundle or recursively discovered topmost bundles |
| Agents | Existing Markdown agent definitions |
| Repository instructions | Recursive `*.instructions.md` files, with existing frontmatter and `applyTo` matching |
| Hooks | Existing hook JSON configurations |

Repository instruction directories don't import package `AGENTS.md` hierarchies or `.claude/rules`. Existing SDK instruction-directory formats remain supported. Each subsystem preserves its existing source precedence. Overlapping hook file references are deduplicated; distinct authored actions aren't collapsed because their commands happen to match.

File-backed command hooks receive `COPILOT_HOOK_DIR`, the directory containing their configuration file. Use it to locate adjacent scripts and resources. Hook working-directory semantics don't change: they remain anchored to the consuming workspace. `COPILOT_HOOK_DIR` is an execution environment variable, not JSON template expansion; `COPILOT_PLUGIN_ROOT` retains its separate plugin-root behavior. Inline hooks and SDK callbacks don't gain a fabricated configuration directory.
