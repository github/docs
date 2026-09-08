---
title: Repository configuration for the GitHub Copilot app
shortTitle: Repository configuration
allowTitleToDifferFromFilename: true
intro: 'Define repository-specific instructions, scripts, and automation behavior for the {% data variables.copilot.github_copilot_app %}.'
product: '{% data reusables.gated-features.github-app %}<br><a href="https://github.com/features/ai/github-app" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Download {% data variables.copilot.github_copilot_app %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: reference
category:
  - Author and optimize with Copilot
  - Configure Copilot
---

Use `.github/github-app.yml` in your repository to define how the {% data variables.copilot.github_copilot_app %} should behave for that project.

You can also edit these project settings in the app UI. If `.github/github-app.yml` already exists, UI changes are written back to that file. If it does not exist yet, you can create it from current project settings in the app.

## About the config file location

Create the file at:

```text copy
.github/github-app.yml
```

The app also supports the legacy filename `.github/copilot-desktop.yml` for backward compatibility.

For UI-based customization steps, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/customize-github-copilot-app).

## Review and trust the configuration

When the app detects a configuration from the repository, it does not apply repository instructions, scripts, or other settings from the file until you review and accept the configuration. This protects you from running commands or applying settings that were added by another contributor. Configurations that you create or update through the app UI are trusted automatically.

> [!WARNING]
> Before accepting a repository configuration, review every configured command and the dependencies it runs. Scripts and their child processes receive the {% data variables.product.github %} credentials described later in this article, so never configure them to log or persist these environment variables.

If the file changes outside the app, including changes to whitespace or comments, you must review and accept the updated configuration before the app applies it. Until you accept the current version, the app continues to use the project settings that were previously configured in the app.

## Example configuration

```yaml copy
instructions: |
  Use bun instead of npm.

scripts:
  - name: Setup
    command: bun install
    triggers:
      - session.create
  - name: Run
    command: bun run dev
  - name: Archive cleanup
    command: rm -rf node_modules
    triggers:
      - session.archive

server_ready_pattern: '(?i)Local:\s+(https?://\S+)'
auto_open_in_browser: true

automation:
  auto_issue_session: true
  remote_control: false
```

## Configure instructions and scripts

### `instructions`

Use `instructions` to add repository-specific guidance to the system prompt for sessions in the project. If you also configure global instructions in the app, the global instructions are applied first, followed by the project instructions.

### `scripts`

Use `scripts` to define commands that appear in the app and can run manually or on specific triggers.

Each script item supports:

* `name` (`string`): Display name in the UI.
* `command` (`string`): Command to run.
* `triggers` (`string[]`, optional): Events that auto-run the script.

Scripts without `triggers` are manual.

### Trigger values

Use canonical trigger values in your file:

* `session.create`
* `session.archive`

The app also accepts these legacy aliases when parsing existing files:

* `workspace.create` (alias for `session.create`)
* `workspace.archive` (alias for `session.archive`)

When a triggered script runs, `COPILOT_SCRIPT_TRIGGER` is set to the canonical value:

* `session.create`
* `session.archive`

## Configure server detection and browser behavior

### `server_ready_pattern`

`server_ready_pattern` is a regular expression used to detect when a run script has started a server.

Patterns use the syntax supported by Rust's `regex` crate. For syntax details, see [Syntax](https://docs.rs/regex/1/regex/#syntax) in the crate documentation. If the pattern is invalid, the app uses its default server detection pattern.

Use a first capture group for the detected URL or port. The app reads capture group `1`:

* If the capture is a URL (`http://...` or `https://...`), the URL is used.
* If the capture is only a port number (for example `3000`), the app converts it to `http://localhost:3000`.

### `auto_open_in_browser`

If `auto_open_in_browser` is `true`, the app opens the detected run URL in the integrated browser. If this field is omitted, the effective default is `true`.

## Configure automation behavior

Set automation options under `automation`:

* `automation.auto_issue_session` (`boolean`) controls whether the app automatically starts a session with issue context. If omitted, the effective default is `true`.
* `automation.remote_control` (`boolean`) controls whether sessions can be accessed from the {% data variables.product.github %} web interface or {% data variables.product.prodname_mobile %}. If omitted, the effective default is `false`.

If your {% data variables.product.prodname_copilot_short %} seat comes from an organization, the applicable "Store local sessions in the Cloud" policy must be set to "View and control" for remote control to be available. Enterprise-managed `remoteControl` settings can further restrict remote control even when `automation.remote_control` is `true`. For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/about-remote-control) and [AUTOTITLE](/copilot/reference/enterprise-administrators/enterprise-managed-settings).

## Runtime environment variables for scripts

Scripts run with these app-provided environment variables:

| Variable | Description |
| --- | --- |
| `COPILOT_WORKSPACE_NAME` | Current workspace name. |
| `COPILOT_WORKSPACE_PATH` | Absolute path to the workspace. |
| `COPILOT_ROOT_PATH` | Absolute path to the project root checkout. |
| `COPILOT_DEFAULT_BRANCH` | Project default branch. |
| `COPILOT_PORT` | App WebSocket port for the current workspace context. |
| `COPILOT_SCRIPT_TRIGGER` | Trigger that launched the script (only set for triggered scripts). |
| `GH_TOKEN` | Token for the selected {% data variables.product.github %} account. |
| `GH_HOST` | Host for the selected {% data variables.product.github %} account. |
| `COPILOT_GH_ACCOUNT_*` | Host- and account-specific tokens for every signed-in account, including the selected account. |

For each `COPILOT_GH_ACCOUNT_*` variable, the app lowercases the host and login, leaves ASCII letters and digits unchanged, and replaces every other UTF-8 byte with its uppercase hexadecimal value surrounded by underscores. The variable name uses the format `COPILOT_GH_ACCOUNT_<HOST>_<LOGIN>`. For example, the token for `alice` on `github.com` is `COPILOT_GH_ACCOUNT_github_2E_com_alice`, and the token for `user` on `ghe-example.com` is `COPILOT_GH_ACCOUNT_ghe_2D_example_2E_com_user`.

## Legacy compatibility

For backward compatibility, the app can still parse the older object-based `scripts` shape:

```yaml copy
scripts:
  setup: bun install
  run: bun run dev
  archive: rm -rf node_modules
```

In this legacy shape:

* `setup` maps to a script with the create trigger.
* `archive` maps to a script with the archive trigger.
* `run` maps to manual script entries and can be either a single command string or a list of `{ name, command }` objects.
