---
title: Enterprise managed settings
intro: 'Understand the enterprise managed settings schema used by {% data variables.product.prodname_copilot_short %} clients.'
versions:
  feature: copilot
contentType: reference
redirect_from:
  - /copilot/reference/enterprise-managed-settings-reference
category:
  - Configure Copilot
---

Use this reference to understand enterprise managed settings for {% data variables.product.prodname_copilot_short %}. Most settings can be configured in `{% data variables.copilot.managed_setting_file %}`. Settings that require device management are noted below.

For instructions on creating the file, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started).

## Supported keys

{% rowheaders %}

| Key | Purpose |
| --- | --- |
| `permissions.disableBypassPermissionsMode` | Disables bypass or YOLO-style allow-all behavior |
| `permissions.deny` | Blocks specific operations |
| `permissions.ask` | Requires a fresh human approval before specific operations can proceed |
| `permissions.allow` | Permits specific operations to proceed without a prompt |
| `permissions.disableAssistedPermissionsMode` | Prevents users from enabling {% data variables.copilot.assisted_permissions %} |
| `permissions.defaultMode` | Controls the default permission mode for new sessions |
| `features.computerUse` | Controls whether users can enable computer use |
| `model` | Sets your preferred model as the default for new conversations |
| `fusionTier` | Sets the default effort level for new conversations when the selected model is `fusion` |
| `autoTier` | Sets the default Auto routing tier for new conversations |
| `enabledPlugins` | Enables or disables specific plugins by key |
| `extraKnownMarketplaces` | Adds plugin marketplaces that users can access |
| `strictKnownMarketplaces` | Restricts plugin installation to explicitly listed marketplaces |
| `telemetry` | Configures OpenTelemetry export, routing {% data variables.product.prodname_copilot_short %} usage data to a collector of your choice |
| `remoteControl` | Restricts whether sessions hosted on this device can be remotely controlled, based on the controlling client's SSO authorization status for the listed organizations. Doesn't affect the user's ability to remotely control sessions hosted on other devices |
| `forceRemoteSettingsRefresh` | Requires a fresh server-managed settings fetch on client startup |
| `allowedMcpServers` | Defines an allowlist of MCP servers permitted to run. Any server not matched is blocked. Omit to allow all servers, subject to any deny rules |
| `deniedMcpServers` | Defines MCP servers that are unconditionally blocked, even if they also match an entry in `allowedMcpServers` |
| `sandbox` | Enforces minimum local sandbox restrictions for command execution, filesystem and network access, credentials, and local MCP and LSP servers. Subject to minimum client version requirements. |

{% endrowheaders %}

## Client support by key

{% rowheaders %}

| Key | {% data variables.copilot.copilot_cli_short %} | {% data variables.product.prodname_vscode_shortname %} | The {% data variables.copilot.github_copilot_app %} | {% data variables.copilot.copilot_in_the_cloud_short %} (sandbox) | {% data variables.copilot.copilot_in_the_cloud_short %} ({% data variables.product.prodname_actions %}) | {% data variables.product.prodname_jetbrains_ides %} |
| --- | --- | --- | --- | --- | --- | --- |
| `permissions.disableBypassPermissionsMode` | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |
| `permissions.deny` | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| `permissions.ask` | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| `permissions.allow` | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| `permissions.disableAssistedPermissionsMode` | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| `permissions.defaultMode` | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| `features.computerUse` | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| `model` | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| `fusionTier` | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| `autoTier` | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| `enabledPlugins` | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| `extraKnownMarketplaces` | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| `strictKnownMarketplaces` | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| `telemetry` | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |
| `remoteControl` | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| `forceRemoteSettingsRefresh` | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| `allowedMcpServers` | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |
| `deniedMcpServers` | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |
| `sandbox` | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |

{% endrowheaders %}

Support for `telemetry` varies by sub-property and harness. See [Capture controls](#capture-controls) for the clients that support fine-grained capture.

### More information on {% data variables.copilot.copilot_in_the_cloud_short %}

Cloud sessions can run in sandboxes or on {% data variables.product.prodname_actions %}. {% data reusables.copilot.agent-env-support-caveat %}

The keys defined in the table for **{% data variables.copilot.copilot_in_the_cloud_short %} (sandbox)** are supported from all surfaces that support starting sessions in cloud sandboxes. As an exception, the `model` key is only supported for cloud sessions started from the {% data variables.product.github %} website, {% data variables.copilot.copilot_cli_short %}, and {% data variables.product.prodname_vscode_shortname %}.

{% data reusables.copilot.cloud-agent.mcp-allowlist-caveat %}

## Example configuration

The following example shows these keys in one managed settings file.

```json
{
  "features": {
    "computerUse": false
  },
  "model": "auto",
  "autoTier": "intelligence",
  "permissions": {
    "disableBypassPermissionsMode": "disable",
    "deny": [
      "Shell(rm -rf *)",
      "Read(~/.ssh/**)",
      "Edit(//etc/**)",
      "Domain(*.unapproved.example)"
    ],
    "ask": [
      "Shell(git push *)",
      "Edit(/src/**)",
      "Domain(api.github.com)"
    ],
    "allow": [
      "Shell(npm test *)",
      "Read(/src/**)",
      "Domain(registry.npmjs.org)"
    ]
  },
  "enabledPlugins": {
    "my-plugin@agent-skills": true
  },
  "extraKnownMarketplaces": {
    "agent-skills": {
      "source": {
        "source": "github",
        "repo": "OWNER/REPO"
      },
      "autoUpdate": true
    }
  },
  "strictKnownMarketplaces": [
    {
      "source": "github",
      "repo": "OWNER/REPO"
    }
  ],
  "telemetry": {
    "enabled": true,
    "endpoint": "https://otel-collector.example.com",
    "protocol": "http/protobuf",
    "capture": {
      "identity": true,
      "prompts": false,
      "responses": false,
      "toolArguments": false,
      "toolOutput": false,
      "policyDetail": false
    },
    "captureContent": false,
    "lockCaptureContent": true,
    "serviceName": "copilot",
    "resourceAttributes": {
      "deployment.environment": "production"
    },
    "headers": {
      "Authorization": "Bearer TOKEN"
    }
  },
  "remoteControl": {
    "mode": "requireSSO",
    "githubDotComOrganizations": ["ORG-NAME"]
  },
  "allowedMcpServers": [
    { "serverUrl": "https://api.githubcopilot.com/*" },
    { "serverCommand": ["npx", "@playwright/mcp@latest"] },
    { "serverCommand": ["cmd", "/c", "uvx", "markitdown-mcp"] }
  ],
  "deniedMcpServers": [
    {
      "serverCommand": [
        "npx",
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/"
      ]
    }
  ],
  "sandbox": {
    "enabled": true,
    "failIfUnavailable": true,
    "allowBypass": false,
    "sandboxMcpServers": true,
    "sandboxLspServers": true
  }
}
```

## features.computerUse

Controls whether users can enable computer use in {% data variables.copilot.copilot_cli %} and the {% data variables.copilot.github_copilot_app %}. Set `features.computerUse` to `false` to prevent users from enabling computer use. A local setting cannot override this restriction. Set the value to `true`, or omit the key, to allow users to control computer use through their local settings.

## enabledPlugins

Defines plugins that are automatically installed or blocked for all enterprise users. Each entry uses the format `PLUGIN-NAME@MARKETPLACE-NAME` as the key, with a boolean value: `true` to require the plugin to be enabled, or `false` to require it to be disabled. See [AUTOTITLE](/copilot/concepts/enterprise/plugin-standards).

Managed values always take precedence over repository defaults and member preferences. Repository defaults cannot enable a plugin that managed policy blocks or use a marketplace that policy disallows.

## extraKnownMarketplaces

Defines additional plugin marketplaces available to users. Each entry is a named marketplace object containing a `source` property and an optional `autoUpdate` boolean.

Set `autoUpdate` to `true` to require clients to periodically refresh that marketplace and update installed plugins sourced from it. Set it to `false` to require automatic updates to remain disabled for that marketplace. If you omit `autoUpdate`, clients use their existing default or user-configured behavior.

Because managed settings take precedence, users cannot override a defined `autoUpdate` value. The setting applies only to that marketplace, and any restrictions in `strictKnownMarketplaces` still apply before refresh and update operations.

The following source types are supported:

* `"github"` — requires `repo` in `OWNER/REPO` format; optional `ref` (branch, tag, or SHA) and `path` (subdirectory)
* `"git"` — requires `url`; optional `ref` and `path`
* `"directory"` — requires `path`

See [AUTOTITLE](/copilot/concepts/enterprise/plugin-standards).

For server-managed enterprise team overrides, wrap the complete marketplace map in `overridable`:

```json
{
  "extraKnownMarketplaces": {
    "overridable": {
      "enterprise-plugins": {
        "source": {
          "source": "github",
          "repo": "OWNER/REPO"
        }
      }
    }
  }
}
```

An enterprise team file can then provide a regular marketplace map to replace this default. Include any default marketplaces that the enterprise team should retain. If the enterprise team omits the key, the enterprise default remains.

## strictKnownMarketplaces

Restricts plugin installation to only the marketplaces explicitly defined by the enterprise. Setting this key disables the built-in marketplaces. An empty array means complete lockdown. Each entry is a marketplace object with a `source` property indicating the source type. The following source types are supported:

* `"github"` — requires `repo` in `OWNER/REPO` format; optional `ref` and `path`
* `"git"` — requires `url`; optional `ref` and `path`
* `"url"` — requires `url`; optional `headers` object
* `"npm"` — requires `package`
* `"file"` — requires `path`
* `"directory"` — requires `path`
* `"hostPattern"` — requires `hostPattern` (regex matching marketplace hosts)
* `"pathPattern"` — requires `pathPattern` (regex matching marketplace paths)

This key is overridable for enterprise teams. Wrap the complete allowlist in `overridable` at the enterprise level:

```json
{
  "strictKnownMarketplaces": {
    "overridable": [
      { "source": "github", "repo": "OWNER/REPO" }
    ]
  }
}
```

Use a regular array in the enterprise team file to replace the default allowlist. Omitting the key retains the enterprise default. An explicit empty array, `[]`, means complete lockdown, not an unmanaged policy.

## model

Sets your preferred model as the default for new conversations. This lets you choose the default model that best fits your enterprise's workflows. Users can still select a different model on a per-conversation basis.
* Set `model` to `"fusion"` to use {% data variables.copilot.copilot_fusion_short %} as the default, so new sessions choose a model or execution pattern automatically unless the user specifies a different model on a per-conversation basis. See [AUTOTITLE](/copilot/concepts/models/copilot-fusion).
* Set `model` to `"auto"` to use {% data variables.copilot.copilot_auto_model_selection_short %} as the default, so new sessions choose a model automatically unless the user specifies a different model on a per-conversation basis. See [AUTOTITLE](/copilot/concepts/models/auto-model-selection).
* Set `model` to a specific model and version to make that model the default for new conversations, for example `"kimi-k3"`.

This key is overridable by enterprise team mapping. In your `{% data variables.copilot.managed_setting_file %}`, use the `{ "overridable": "auto" }` syntax to specialize the key's configuration for an enterprise team. You can then set `"model": "unmanaged"` in an enterprise team settings file, providing a specialization that takes precedence over `{% data variables.copilot.managed_setting_file %}` for members of that enterprise team.

> [!NOTE]
> `model` was originally documented as `permissions.model`. Clients still read the nested `permissions.model` value when the top-level `model` key is absent, but you should use the top-level `model` key in new configurations.

## fusionTier

Sets the default effort level for new conversations when the selected model is `"fusion"`. Accepted values, from most restrictive to least restrictive, are `"standard"`, `"high"`, `"max"`, and `"unmanaged"`. This setting does not select the model itself.

This settings requires these versions: 
* In {% data variables.copilot.copilot_cli_short %}, it requires version 1.0.104-3 or later. 
* In {% data variables.product.prodname_vscode_shortname %}, it requires version 1.144.0 or later.
* In {% data variables.copilot.github_copilot_app %}, it requires  1.1.33-4 or later.

Set `fusionTier` to a string other than `"unmanaged"` to lock the effort level against user and repository overrides. To provide a default that enterprise teams can override, use `overridable`:

```json
{
  "model": "fusion",
  "fusionTier": { "overridable": "standard" }
}
```

For example, a team settings file can set `"fusionTier": "high"`. If the team does not set `fusionTier`, the enterprise default applies.

## autoTier

Sets the default routing tier for new conversations when the selected model is `"auto"`. Accepted values, from most restrictive to least restrictive, are `"efficiency"`, `"balance"`, `"intelligence"`, and `"unmanaged"`. This setting does not select the model itself.

In {% data variables.copilot.copilot_cli_short %}, this setting requires version 1.0.87-0 or later. In {% data variables.product.prodname_vscode_shortname %}, it requires version 1.140.0 or later.

Set `autoTier` to a string other than `"unmanaged"` to lock the tier against user and repository overrides. To provide a default that enterprise teams can override, use `overridable`:

```json
{
  "model": "auto",
  "autoTier": { "overridable": "balance" }
}
```

For example, an enterprise team settings file can set `"autoTier": "intelligence"`. If the enterprise team does not set `autoTier`, the enterprise default applies.

## forceRemoteSettingsRefresh

Requires a fresh download of server-managed settings at startup in {% data variables.copilot.copilot_cli_short %}, {% data variables.product.prodname_vscode_shortname %}, and the {% data variables.copilot.github_copilot_app %}. Set `forceRemoteSettingsRefresh` to `true` to enable this requirement.

In {% data variables.copilot.copilot_cli_short %} and the {% data variables.copilot.github_copilot_app %}, this skips the normal one-hour cache and prevents fallback to an older cached policy if the download fails. An unsuccessful refresh leaves the policy unconfirmed, so affected operations are restricted. In {% data variables.product.prodname_vscode_shortname %}, {% data variables.product.prodname_copilot_short %} features are blocked until the required refresh succeeds. Users therefore need a network connection when starting the client.

For the requirement to apply from a device's first startup, deliver it through MDM-managed or file-based settings. A server-managed value can require refreshes on subsequent startups after the client has received it. Policy helper scripts cannot set this key.

In `{% data variables.copilot.managed_setting_file %}`, use a JSON Boolean, for example `"forceRemoteSettingsRefresh": true`. When configuring {% data variables.copilot.copilot_cli_short %} through the Windows registry or macOS managed preferences, store this value as a string containing `true` or `false`. Do not use a DWORD or native Boolean.

## permissions

### deny, ask, allow

In {% data variables.product.prodname_vscode_shortname %}, these granular permission rules apply to {% data variables.product.prodname_copilot_short %} sessions that use Agent Host. The `permissions.disableBypassPermissionsMode` setting has broader {% data variables.product.prodname_vscode_shortname %} support and isn't limited to Agent Host.

The `permissions.deny`, `permissions.ask`, and `permissions.allow` keys use **deny > ask > allow** precedence. If an MDM-managed, server-managed, or file-based source defines any permission rule—or if any applicable source declares an `allow` list—an unmatched supported operation defaults to requiring approval. Otherwise, it follows the ordinary permission flow.

* `deny` blocks specific operations, regardless of whether they also match an `ask` or `allow` rule. A deny rule set by any managed settings source blocks the operation for all users regardless of rules in the other sources.
* `ask` requires fresh, one-time approval before a specific operation can proceed, even if the operation would otherwise be allowed. A managed `ask` rule can't be satisfied by bypass mode (also known as allow-all or YOLO mode), an auto-approval setting, a hook or other approval shortcut, or a grant persisted from an earlier approval. The same operation prompts again the next time it's requested.
* `allow` permits a specific operation to proceed without a prompt. The effective allowlist is the intersection of all sources that declare one, not the union. A source that doesn't declare an `allow` list places no restriction of its own on this key.

Rules use the following selectors:

| Selector | Matches |
| --- | --- |
| `Shell(...)` | Shell commands. Use `<command> *` (for example, `git push *`) to match a command prefix; otherwise the rule matches exact text. `Bash(...)` is a compatibility alias for `Shell(...)`. `PowerShell(...)` uses the same selector family with case-insensitive command matching. |
| `Read(...)` | File read and view paths. Supports glob patterns and these roots: `//` for the filesystem root, `/` for the workspace root, `~/` for the home directory, and `./` for the current working directory.|
| `Edit(...)` | File write and edit paths, matched the same way as `Read(...)`. `Write(...)` is an alias for `Edit(...)`. |
| `Domain(...)` | Network origins. A bare host defaults to HTTPS, and host matching is case-insensitive. Use `*.` to include subdomains; for example, `*.example.com` matches both example.com and its subdomains. |

Each subkey is overridable for enterprise teams. Set the enterprise value to `{ "overridable": <VALUE> }`, replacing `<VALUE>` with the rule array. Then use the regular syntax to define replacement rules in each enterprise team's file.

### disableBypassPermissionsMode

Use this to prevent users from enabling bypass mode. Bypass mode lets an agent run commands, access files, and fetch URLs without asking for approval.

Set this key to `"disable"` to turn off bypass mode.

This setting does not prevent {% data variables.copilot.assisted_permissions %}. Read-only operations and requests allowed by applicable permission rules can still proceed without a prompt. Managed `deny` and `ask` rules continue to apply. For more information about {% data variables.copilot.assisted_permissions %}, see [AUTOTITLE](/copilot/concepts/customizations/allowing-safe-commands).

When you set `disableBypassPermissionsMode` to `"disable"`, users cannot turn on bypass mode:

* In {% data variables.copilot.copilot_cli_short %}, all of the command line options for allowing all permissions (`--yolo`, `--allow-all`, and the individual `--allow-all-tools`, `--allow-all-paths`, and `--allow-all-urls` options) have no effect at startup and cannot grant elevated permissions. The `/permissions allow-all` slash command, and its aliases `/allow-all` and `/yolo`, are also blocked. This setting does not block `/permissions assisted` or `/allow-all auto`. The `permissions.disableAssistedPermissionsMode` setting controls whether users can enable {% data variables.copilot.assisted_permissions %}.
* In {% data variables.product.prodname_vscode_shortname %}, the global auto-approve setting (`chat.tools.global.autoApprove`) is turned off and cannot be re-enabled.
* In the {% data variables.copilot.github_copilot_app %}, sessions cannot use **Approve all** for **Tool permissions**, even if a user selects it as their default in **Settings** > **Sessions**.

For this key, the most restrictive value across all policy layers wins. A `"disable"` set by any layer takes effect and cannot be relaxed. A lower-authority layer or a per-team override cannot set this key back to unmanaged once any layer disables bypass mode.

> [!NOTE]
> If `disableBypassPermissionsMode` is set to a value that {% data variables.copilot.copilot_cli_short %} doesn't recognize, the CLI logs the problem and enforces `"disable"` as a fail-closed default.

### disableAssistedPermissionsMode

Set `permissions.disableAssistedPermissionsMode` to `true` to prevent users from enabling {% data variables.copilot.assisted_permissions %}. This setting does not disable bypass mode.

### defaultMode

Set `permissions.defaultMode` to `"manual"`, `"assisted"`, or `"allow-all"` to choose the default permission mode for new sessions. If the selected mode is unavailable or blocked by policy, the session starts with manual approval.

This setting selects a default, not a locked mode. An explicit permitted choice for a session takes precedence over the managed default. Resumed sessions keep their saved mode, subject to current policy restrictions.

In {% data variables.copilot.copilot_cli_short %}, this managed default takes precedence over the user's `defaultPermissionMode` setting.

## telemetry

Configures OpenTelemetry export, routing {% data variables.product.prodname_copilot_short %} usage data to a collector of your choice.

See the [supported keys table](#supported-keys) for client support.

When you set the `telemetry` property, {% data variables.product.prodname_copilot_short %} telemetry is sent to the endpoint you specify. The following sub-properties are supported:

* `enabled`: Set to `true` to turn on telemetry export, or `false` to turn it off.
* `endpoint`: The URL of your OTLP collector (for example, `https://otel-collector.example.com`).
* `protocol`: The transport protocol for telemetry export. Accepted values are `"http/json"` and `"http/protobuf"`.
* `capture`: An object with independent, fine-grained controls for identity and sensitive content. Every sub-property defaults to `false`. For details, see [Capture controls](#capture-controls).
* `captureContent`: Legacy shorthand that enables or disables the `prompts`, `responses`, `toolArguments`, `toolOutput`, and `policyDetail` capture classes together. It does not affect `identity`. An explicitly configured `capture` sub-property takes precedence over `captureContent` for that class.
* `lockCaptureContent`: Set to `true` to prevent local settings from enabling a legacy content class unless you explicitly configure that class or `captureContent` in the managed `telemetry` object. This property does not govern identity.
* `serviceName`: A label for the telemetry service name (for example, `"copilot"`).
* `resourceAttributes`: An object of OpenTelemetry resource attributes to attach to all exported telemetry (for example, `{"deployment.environment": "production"}`).
* `headers`: An object of literal HTTP headers to include with each telemetry request (for example, an `Authorization` header for your collector). You must configure `endpoint` in the same `telemetry` object. Header values are not included in logs or status output. Use HTTPS when headers contain credentials because HTTP sends values in plaintext.
* `headersProvider`: An object that runs a command to supply fresh OTLP headers, or `false` to disable dynamic headers. A managed helper overrides a user helper, and managed static `headers` take precedence over user helper output. This property applies to {% data variables.copilot.copilot_cli_short %}. For fields and behavior, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-command-reference#dynamic-authentication-headers).

Managed `telemetry` values take precedence over local settings, SDK configuration, and environment variables. If more than one managed source defines `telemetry`, the highest-precedence source supplies the complete managed `telemetry` object. Objects from lower-precedence managed sources are not merged into it.

### Capture controls

Use `capture.identity` when you need to attribute agent activity without collecting prompts, responses, or tool content. Use the other capture classes to collect only the additional content required for your audit or investigation.

Fine-grained capture controls are supported in {% data variables.copilot.copilot_cli_short %}, the {% data variables.copilot.github_copilot_app %}, and {% data variables.product.prodname_vscode_shortname %} sessions using Agent Host. {% data variables.product.prodname_vscode_shortname %}'s local agent harness supports `capture.identity` and the legacy `captureContent` setting, but does not independently apply `prompts`, `responses`, `toolArguments`, `toolOutput`, or `policyDetail`.

{% rowheaders %}

| Key | Captured data |
| --- | --- |
| `identity` | The authenticated {% data variables.product.prodname_copilot_short %} account name as `user.name`, the local operating-system account as `process.user.name`, and the local machine name as `host.name`. The account name is currently the {% data variables.product.prodname_dotcom %} login. This setting does not affect the pseudonymous `enduser.pseudo.id` attribute. |
| `prompts` | User, system, and developer prompt text and associated model input, including supported attachments, compaction summaries, skill content, and workspace context. |
| `responses` | Assistant response text and supported reasoning content from the top-level agent and subagents. |
| `toolArguments` | Raw tool arguments, commands, denied resources, process names, tool descriptions and schemas, and raw identifiers for MCP servers, plugins, hooks, servers, and tools. |
| `toolOutput` | Tool result content and execution error details from tools, hooks, MCP servers, and subagents. |
| `policyDetail` | Unbounded policy details such as raw sandbox filesystem path arrays. Bounded policy posture, counts, outcomes, and classifications remain available when this setting is `false`. |

{% endrowheaders %}

For example, the following configuration attributes traces to a user and machine without capturing prompts, responses, tool content, or raw policy details:

```json
{
  "telemetry": {
    "capture": {
      "identity": true
    }
  }
}
```

> [!WARNING]
> Captured content can include source code, file contents, prompts, commands, tool results, MCP identifiers, and paths to workspaces, user profiles, or files that may contain secrets. Enable only the capture classes required for your use case, and send the data to an approved collector.

## remoteControl

Restricts whether {% data variables.product.prodname_copilot_short %} sessions hosted on a device can be remotely controlled. This doesn't affect a user's ability to remotely control their sessions hosted on other devices.

* `mode`: Set to `"disabled"` to prevent remote control of sessions on the device, `"requireSSO"` to only allow remote control from a client that is SSO-authorized for the organizations listed in `githubDotComOrganizations`, or `"enabled"` to allow it unrestricted.
* `githubDotComOrganizations`: An array of organization logins. Required when `mode` is `"requireSSO"`.

## allowedMcpServers

Defines an allowlist of MCP servers permitted to run. When set, only servers matching at least one entry are allowed. Any server that is not matched is blocked.

Omit this key entirely to allow all servers, subject to any entries in `deniedMcpServers`. Set it to an empty array to block all servers except built-in default servers.

When multiple settings sources define `allowedMcpServers`, the effective allowlist is the intersection of all sources. A server must be permitted by every source to run.

Each entry must contain exactly one matcher property.

| Property | Matching behavior | Applicable servers |
| --- | --- | --- |
| `serverName` | Matches the user-assigned server label exactly. Wildcards are not supported. Allowlist entries are case-sensitive and limited to letters, numbers, and the characters `_`, `.`, `/`, and `-`, so registry names such as `microsoft/playwright-mcp` are accepted. Because users choose server names, use `serverUrl` or `serverCommand` when you need to enforce the identity of a server. | Any server. In-memory servers can only use `serverName`. |
| `serverUrl` | Matches a remote server URL. Supports `*` wildcards for subdomains or path prefixes—for example, `https://mcp.example.com/*` or `https://*.internal.example.com/*`. | Remote servers that connect over HTTP or server-sent events (SSE). This property does not apply to local servers, even if they have a URL. |
| `serverCommand` | Matches the exact command and each argument for a local server—for example, `["npx", "-y", "my-mcp-server"]`. Wildcards and command-line expansion are not supported. | Local servers that use standard input and output (`stdio`). This property does not apply to remote servers, even if they have a command. |

This key is overridable for enterprise teams. Wrap the matcher objects under `overridable` at the enterprise level, then use the regular syntax to define allowlists and denylists in each enterprise team's file.

### URL canonicalization

Before comparing a `serverUrl` pattern with a server URL, the client normalizes both values:

* Converts the scheme and host to lowercase.
* Converts internationalized or Unicode host names to Punycode.
* Removes the default port, `:80` for HTTP or `:443` for HTTPS.
* Decodes percent-encoded host octets. For example, `%65vil` becomes `evil`.
* Removes URL fragments and trailing dots from DNS names.
* Prevents wildcards in the authority component from matching across the `/` boundary into the path.

## deniedMcpServers

Defines MCP servers that are unconditionally blocked. A server matching any entry is blocked even if it also matches an entry in `allowedMcpServers`. Deny rules always take precedence over allow rules.

First-party {% data variables.product.prodname_copilot_short %} servers, such as the built-in {% data variables.product.github %} MCP server, are exempt from deny rules and cannot be blocked.

When multiple settings sources define `deniedMcpServers`, the effective denylist is the union of all sources. A server blocked by any source is blocked for all.

Each entry uses the same `serverName`, `serverUrl`, or `serverCommand` properties described in [`allowedMcpServers`](#allowedmcpservers).

## `sandbox`

Enforces minimum local sandbox restrictions for {% data variables.copilot.copilot_cli_short %}, {% data variables.product.prodname_copilot_short %} Agent Host sessions in {% data variables.product.prodname_vscode_shortname %}, and the {% data variables.copilot.github_copilot_app %}. Managed sandbox settings impose restrictions rather than defaults:

* For force-on settings, a managed value of `true` enforces the setting. `false` or omission leaves the user's configuration unchanged.
* For capability settings, a managed value of `false` prohibits the capability. `true` or omission leaves the user's configuration unchanged.
* Managed read/write and read-only path lists restrict user-configured grants, while managed denied paths add to user-configured denials.

In {% data variables.product.prodname_vscode_shortname %} 1.138.0 and later, these settings apply to {% data variables.product.prodname_copilot_short %} sessions that use Agent Host's built-in sandbox. This support does not extend to every type of chat session or terminal in {% data variables.product.prodname_vscode_shortname %}. In {% data variables.product.prodname_vscode_shortname %} 1.140.0 and later, setting `sandbox.enabled` to `true` prevents users from turning sandboxing off with the session's sandbox toggle. If your policy permits bypass, users can still turn it off for the current session when responding to a sandbox-bypass permission prompt. This does not change your organization's policy.

For sessions in the {% data variables.copilot.github_copilot_app_short %}, the embedded runtime parses, combines, and enforces the complete managed `sandbox` object, including properties that are not available in the app's repository settings. The app displays the user's repository settings, not the complete effective managed policy, and does not show per-setting managed locks.

The following sub-properties are supported:

* `enabled`: `true` requires sandboxing by default. Users cannot disable it through their configuration or the CLI's `--no-sandbox` option. In the {% data variables.copilot.github_copilot_app %}, the repository setting and `/sandbox off` command cannot override it. If the effective policy permits bypass, a user can still disable sandboxing for the rest of the current session from an active sandbox-bypass permission prompt. In {% data variables.copilot.copilot_cli_short %}, they can also use `/sandbox disable` for this session-only opt-out. Neither changes the saved policy.
* `failIfUnavailable`: `true`, combined with `enabled: true`, makes the managed sandbox mandatory. If {% data variables.product.prodname_copilot_short %} cannot validate, compile, or enforce the sandbox policy with an available sandbox backend, it blocks model and tool execution instead of allowing commands to fail or run unsandboxed. This property does not enable sandboxing by itself.
* `allowBypass`: `false` prevents individual commands from running outside the sandbox and prevents users from disabling sandboxing for the rest of the current session from an active sandbox-bypass permission prompt. In {% data variables.copilot.copilot_cli_short %}, it also prevents users from disabling sandboxing with `/sandbox disable`.
* `addCurrentWorkingDirectory`: `false` prevents the runtime from automatically adding the current working directory to the sandbox's read/write paths.
* `sandboxMcpServers`: `true` requires local MCP servers started in the session to run in the sandbox. Remote MCP servers do not run in the local sandbox.
* `sandboxLspServers`: `true` requires language servers started in the session to run in the sandbox.
* `auth.git`: `false` prevents the runtime from injecting a {% data variables.product.github %} token for authenticated Git HTTPS operations in the sandbox.
* `auth.gh`: `false` prevents the runtime from injecting a {% data variables.product.github %} token for {% data variables.product.prodname_cli %} in the sandbox.
* `allowDevToolAccess`: `false` prevents automatic access to development-tool configuration, caches, registries, and toolchains. These locations can contain package registry credentials or tokens. Disabling access can cause package restoration, authenticated registry operations, or builds that use shared caches to fail unless you explicitly grant the required paths.
* `learningMode`: Controls whether sandboxed commands on supported Windows hosts record blocked access or record and allow it. See [`sandbox.learningMode`](#sandboxlearningmode).
* `userPolicy`: An object that configures filesystem, network, and macOS-specific Seatbelt restrictions. The supported properties are described in the following sections.

On an unsupported CLI host, server-managed `enabled: true` can be declined unless `failIfUnavailable: true` also requires enforcement. Native MDM, file-based managed settings, and policy-helper settings still enforce `enabled: true`, so sandboxed commands fail rather than running without a sandbox. When both `enabled` and `failIfUnavailable` are required, the CLI blocks model and tool execution if it cannot establish enforcement. Resolve the reported host or policy problem, then start a new session.

For server-managed enterprise team overrides, wrap the entire sandbox object in `overridable`:

```json
{
  "sandbox": {
    "overridable": {
      "enabled": true,
      "allowBypass": false
    }
  }
}
```

The wrapper must be the only property directly inside `sandbox`. Individual sub-properties, such as `sandbox.enabled`, cannot use their own `overridable` wrappers. An enterprise team file's regular sandbox object replaces the entire wrapped default, so include every restriction that should remain. Omitting `sandbox` retains the enterprise default.

### `sandbox.learningMode`

Controls access recording for sandboxed commands on Windows. This setting has no effect when sandboxing is off or the Windows host does not support access recording.

* `"deny"` (default): Enforces filesystem and process restrictions and records blocked access.
* `"allow"`: Records and allows filesystem and process access that would otherwise be blocked. Network restrictions remain in place. This mode does not provide normal filesystem and process protection.

The `"allow"` value is accepted only through native Windows device management, such as Intune or the Windows registry. It is ignored in `{% data variables.copilot.managed_setting_file %}`. A `"deny"` value from any managed source takes precedence.

### `sandbox.userPolicy.filesystem`

Configures filesystem access for sandboxed processes. Paths should be absolute. Managed grant lists are matched against user-configured lists by exact path string, not by parent or child path coverage.

* `readwritePaths`: An array of paths that sandboxed processes can read and write. A user-configured path remains available only if its exact string also appears in every managed source that specifies this property. An empty managed array removes all user-configured read/write path grants, but does not remove access assembled separately, such as temporary directories or the current working directory.
* `readonlyPaths`: An array of paths that sandboxed processes can read but not write. A user-configured path remains available only if its exact string also appears in every managed source that specifies this property. An empty managed array removes all user-configured read-only path grants, but does not remove access assembled separately.
* `deniedPaths`: An array of paths that sandboxed processes cannot access. A managed value adds to, rather than replaces, a user's denied paths.

### `sandbox.userPolicy.network`

Configures network access for sandboxed processes.

* `allowOutbound`: `false` blocks outbound network access.
* `allowLocalNetwork`: `false` restricts local network access. Its effect on sandboxed commands differs by operating system. Windows proxying and host rules require local network access, so a policy that combines them with `false` prevents those commands from starting.
* `allowedHosts`: An array of hostnames or IP addresses that sandboxed processes are allowed to reach. A non-empty list blocks hosts that do not match. Entries can be exact hostnames, exact IP addresses, `*.example.com` for subdomains but not the root domain, or `*` for every host. Do not include URLs or ports. User and managed allowlists are combined restrictively. If they have no overlapping hosts, all hosts are denied.
* `blockedHosts`: An array of hostnames or IP addresses that sandboxed processes cannot reach. Blocked hosts take precedence over allowed hosts, and blocking a domain also blocks its subdomains.
* `proxy`: An object that routes sandboxed network traffic through an upstream HTTP proxy. Set `proxy.url` to the proxy URL. Platform support and enforcement vary.

In {% data variables.copilot.copilot_cli_short %}, host rules and upstream proxies use a built-in local proxy. On macOS and Linux, the sandbox prevents programs from bypassing it with direct connections. On Windows, the sandbox relies on programs honoring the proxy settings. As a result, on Windows, these controls do not provide the same protection against direct connections. For platform requirements and limitations, see [Configuring network settings](/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings#configuring-network-settings).

### `sandbox.userPolicy.seatbelt`

Configures macOS-specific Seatbelt options.

* `keychainAccess`: `false` prevents sandboxed processes from accessing the macOS Keychain.

### Minimum client version enforcement for `sandbox`

When you add the `sandbox` key to managed settings, {% data variables.product.prodname_copilot_short %} enforces a local sandbox for all users in scope. These users must use a {% data variables.product.prodname_copilot_short %} client version that supports local sandbox. Until a user updates their client to at least the minimum supported version, their connections to {% data variables.product.prodname_copilot_short %} are blocked.

| Supported client | Minimum version |
| --- | --- |
| VS Code | [1.141.0](https://github.com/microsoft/vscode/releases/tag/1.141.0) |
| Copilot CLI | [1.0.93](https://github.com/github/copilot-cli/releases/tag/v1.0.93) |
| GitHub Copilot App | [1.1.26](https://github.com/github/app/releases#release-v1.1.26) |
