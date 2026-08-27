---
title: Changing settings with the `/settings` command
shortTitle: Change settings
allowTitleToDifferFromFilename: true
intro: 'View and change your personal settings for {% data variables.copilot.copilot_cli %} with the `/settings` slash command.'
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot # Copilot discovery page
  - Configure Copilot CLI # Copilot CLI bespoke page
docsTeamMetrics:
  - copilot-cli
---

You can use the `/settings` slash command to view and change your settings from within an interactive CLI session. This command controls user-level settings such as whether {% data variables.copilot.copilot_cli_short %} updates itself automatically, which color palette the interface uses, what's displayed in the footer, and many other options.

Use `/settings` to:

* **Browse and edit settings interactively** — Run `/settings` on its own to open a searchable editor that lists every setting with a description and its current value.
* **Change a setting with a single command** — Run `/settings KEY VALUE` to change a particular setting without opening the editor.
* **Check a setting's value** — Run `/settings show KEY` to display the current value of a setting.

You can also use `/config`, which is an alias of `/settings`.

Changes you make with `/settings` or `/config` are written to your personal settings file (by default, `~/.copilot/settings.json`) and persist across sessions.

## Opening the settings editor

To browse and edit settings interactively, enter the slash command with no arguments:

```copilot copy
/settings
```

The editor lists every setting you can change, and the setting's current value. As you move up or down through the list, a short description of the highlighted setting is shown at the bottom of the editor. This allows you to browse and edit settings without needing to know their exact names.

For more information about the available settings, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-config-dir-reference#user-settings-copilotsettingsjson).

While the editor is open, you can use the following keyboard shortcuts:

<!-- Force table-layout: auto so the first column shrinks to its content width on all viewports. The site applies table-layout: fixed below 544px, which would otherwise collapse the first column and make its keys overflow. -->

<table style="table-layout: auto;">
  <thead>
    <tr>
      <th style="white-space: nowrap;">Key</th>
      <th style="width: 100%;">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="white-space: nowrap;"><kbd>↑</kbd> / <kbd>↓</kbd></td>
      <td>Move between settings.</td>
    </tr>
    <tr>
      <td style="white-space: nowrap;"><kbd>/</kbd></td>
      <td>Search and filter the list by a setting's name or description.</td>
    </tr>
    <tr>
      <td style="white-space: nowrap;"><kbd>Enter</kbd></td>
      <td>Toggle a boolean setting, or edit other types of values.</td>
    </tr>
    <tr>
      <td style="white-space: nowrap;"><kbd>Ctrl</kbd>+<kbd>R</kbd></td>
      <td>Reset the highlighted setting to its default.</td>
    </tr>
    <tr>
      <td style="white-space: nowrap;"><kbd>Ctrl</kbd>+<kbd>E</kbd></td>
      <td>Open <code>settings.json</code> in your configured terminal editor to make advanced changes.</td>
    </tr>
    <tr>
      <td style="white-space: nowrap;"><kbd>Esc</kbd></td>
      <td>Clear the current search, or close the editor.</td>
    </tr>
  </tbody>
</table>

Most changes take effect immediately—for example, switching the color palette updates the interface as soon as you select a new value.

## Changing a single setting inline

If you already know which setting you want to change, you can set it directly from the CLI's prompt box, without opening the editor:

```copilot
/settings KEY VALUE
```

For example:

```copilot copy
/settings autoUpdate off
```

{% data variables.product.prodname_copilot_short %} writes the value and confirms it, for example: `Set autoUpdate = false.`

> [!NOTE]
> * **Boolean settings** accept `on`/`off` or `true`/`false`. For example, `/settings renderMarkdown on`.
> * **Settings with a fixed set of choices** accept one of those values. For example, `/settings theme dim` or `/settings banner never`.
> * **Nested settings** use a dotted path. For example, `/settings footer.showBranch off` hides the Git branch in the footer.

You can configure settings that take set values without needing to remember the exact key or value, just by using the navigation and <kbd>Enter</kbd> keys. For example, to prevent the agent from asking clarifying questions:

1. Type `/settings`, without pressing <kbd>Enter</kbd>, to display a list of options.
1. Use the <kbd>↓</kbd> key to move down the list until `❯` points to `/settings askUser  Allow the agent to ask clarifying questions`, then press <kbd>Enter</kbd>.
1. Use the <kbd>↓</kbd> key to move down the list of options for this setting until `❯` points to `/settings askUser off`, then press <kbd>Enter</kbd>.
1. Press <kbd>Enter</kbd> again to submit the `/settings askUser off` command.

   The CLI confirms the change: `Set askUser = false.`

## Viewing valid values for a setting

To display the valid values that are available for a setting, enter `/settings KEY` with no value. For example, to see the valid values for `theme`:

```copilot copy
/settings theme
```

## Viewing the current value of a setting

To display a setting's current value, use `show`. For example:

```copilot copy
/settings show theme
```

This outputs a line such as `theme = high-contrast`. The `show` form is useful for quickly checking a value, or for capturing settings in logs.

## Changing settings that require a restart

Most settings apply right away, but a few only take full effect after {% data variables.copilot.copilot_cli_short %} restarts—for example, `experimental` and the proxy settings. When you change one of these, {% data variables.product.prodname_copilot_short %} tells you a restart is needed, and may restart the session for you.

## Settings you can't change from the command line

Not every setting is editable through the inline `/settings KEY VALUE` method:

* **Security-sensitive settings**—such as those that change how credentials are stored or that run a shell command—are deliberately excluded, because flipping them in a single line with no confirmation is risky.
* **List and structured settings** can't be set inline. Enter `/settings` then press <kbd>Ctrl</kbd>+<kbd>E</kbd> to open `settings.json` in your configured terminal editor, then edit the setting there.
* **Settings managed by your repository or organization** are shown for reference, but their values come from those sources and override your personal value. Changing them in your user settings has no effect.

In each of these cases, {% data variables.product.prodname_copilot_short %} explains why the change wasn't applied and points you to the right place to make it.

## Commands replaced by `/settings`

Some older slash commands have been folded into `/settings`. They still work, but display a notice telling you about the equivalent `/settings` command.

## Settings you might want to change

Some commonly used settings include:

* `autoUpdate` — Automatically download updated CLI versions.
* `theme` — Color palette (`default`, `github`, `dim`, `high-contrast`, or `colorblind`).
* `renderMarkdown` — Render Markdown in the terminal.
* `banner` — How often to show the startup banner (`always`, `once`, or `never`).
* `beep` — Beep when {% data variables.product.prodname_copilot_short %} needs your attention.
* `includeCoAuthoredBy` — Add a `Co-authored-by` trailer to commits.
* `footer.showBranch` — Show the current Git branch in the footer.

For the full list of available settings and how user, repository, and organization settings combine, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-config-dir-reference).

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli/set-up-copilot-cli/configure-copilot-cli)
* [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/overview)
