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

Use this reference to understand the currently supported keys in `{% data variables.copilot.managed_setting_file %}`.

For instructions on creating the file, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started).

## Supported keys

{% rowheaders %}

| Key | Purpose | {% data variables.copilot.copilot_cli_short %} | {% data variables.product.prodname_vscode_shortname %} | {% data variables.copilot.github_copilot_app %} | {% data variables.copilot.copilot_cloud_agent %} | {% data variables.product.prodname_jetbrains_ides %} |
| --- | --- | --- | --- | --- | --- | --- |
| `permissions.disableBypassPermissionsMode` | Disables bypass or YOLO-style allow-all behavior | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |
| `permissions.deny` | Blocks specific operations | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| `permissions.ask` | Requires a fresh human approval before specific operations can proceed | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| `permissions.allow` | Permits specific operations to proceed without a prompt | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| `model` | Sets your preferred model as the default for new conversations | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| `enabledPlugins` | Enables or disables specific plugins by key | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| `extraKnownMarketplaces` | Adds plugin marketplaces that users can access | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| `strictKnownMarketplaces` | Restricts plugin installation to explicitly listed marketplaces | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| `telemetry` | Configures OpenTelemetry export, routing {% data variables.product.prodname_copilot_short %} usage data to a collector of your choice | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |
| `remoteControl` | Restricts whether sessions hosted on this device can be remotely controlled, based on the controlling client's SSO authorization status for the listed organizations. Doesn't affect the user's ability to remotely control sessions hosted on other devices | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| `allowedMcpServers` | Defines an allowlist of MCP servers permitted to run. Any server not matched is blocked. Omit to allow all servers, subject to any deny rules | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |
| `deniedMcpServers` | Defines MCP servers that are unconditionally blocked, even if they also match an entry in `allowedMcpServers` | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |
| `sandbox` | Enforces minimum local sandbox restrictions for command execution, filesystem and network access, credentials, and local MCP and LSP servers | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |

{% endrowheaders %}


## Example configuration

The following example shows these keys in one managed settings file.

```json
{
  "model": "auto",
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

## enabledPlugins

Defines plugins that are automatically installed or blocked for all enterprise users. Each entry uses the format `PLUGIN-NAME@MARKETPLACE-NAME` as the key, with a boolean value: `true` to require the plugin to be enabled, or `false` to require it to be disabled. See [AUTOTITLE](/copilot/concepts/agents/about-enterprise-plugin-standards).

## extraKnownMarketplaces

Defines additional plugin marketplaces available to users. Each entry is a named marketplace object containing a `source` property and an optional `autoUpdate` boolean.

Set `autoUpdate` to `true` to require clients to periodically refresh that marketplace and update installed plugins sourced from it. Set it to `false` to require automatic updates to remain disabled for that marketplace. If you omit `autoUpdate`, clients use their existing default or user-configured behavior.

Because managed settings take precedence, users cannot override a defined `autoUpdate` value. The setting applies only to that marketplace, and any restrictions in `strictKnownMarketplaces` still apply before refresh and update operations.

The following source types are supported:

* `"github"` — requires `repo` in `OWNER/REPO` format; optional `ref` (branch, tag, or SHA) and `path` (subdirectory)
* `"git"` — requires `url`; optional `ref` and `path`
* `"directory"` — requires `path`

See [AUTOTITLE](/copilot/concepts/agents/about-enterprise-plugin-standards).

## strictKnownMarketplaces

Restricts plugin installation to only the marketplaces explicitly defined by the enterprise. An empty array means complete lockdown. Each entry is a marketplace object with a `source` property indicating the source type. The following source types are supported:

* `"github"` — requires `repo` in `OWNER/REPO` format; optional `ref` and `path`
* `"git"` — requires `url`; optional `ref` and `path`
* `"url"` — requires `url`; optional `headers` object
* `"npm"` — requires `package`
* `"file"` — requires `path`
* `"directory"` — requires `path`
* `"hostPattern"` — requires `hostPattern` (regex matching marketplace hosts)
* `"pathPattern"` — requires `pathPattern` (regex matching marketplace paths)

## model

Sets your preferred model as the default for new conversations. This lets you choose the default model that best fits your enterprise's workflows. Users can still select a different model on a per-conversation basis.
* Set `model` to `"auto"` to use {% data variables.copilot.copilot_auto_model_selection_short %} as the default, so new sessions choose a model automatically unless the user specifies a different model on a per-conversation basis. See [AUTOTITLE](/copilot/concepts/models/auto-model-selection).
* Set `model` to a specific model and version to make that model the default for new conversations, for example `"kimi-k-3"`.

This key is overridable by enterprise team mapping. In your `{% data variables.copilot.managed_setting_file %}`, use the `{ "overridable": "auto" }` syntax to specialize the key's configuration on a per-team basis. You can then set `"model": "unmanaged"` in a team settings file, providing a specialization that takes precedence over `{% data variables.copilot.managed_setting_file %}` for members of the subject team.

> [!NOTE]
> `model` was originally documented as `permissions.model`. Clients still read the nested `permissions.model` value when the top-level `model` key is absent, but you should use the top-level `model` key in new configurations.

## permissions

### deny, ask, allow

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

Each subkey is overridable for enterprise teams. Set the enterprise value to `{ "overridable": <VALUE> }`, replacing `<VALUE>` with the rule array. Then use the regular syntax to define replacement rules in each team's file.

### disableBypassPermissionsMode

Prevents users from enabling bypass mode (also known as "YOLO mode"). Bypass mode lets an agent run commands, access files, and fetch URLs without asking for approval.

When you set `disableBypassPermissionsMode` to `"disable"`, users cannot turn on bypass mode:

* In {% data variables.copilot.copilot_cli_short %}, all of the command line options for allowing all permissions (`--yolo`, `--allow-all`, and the individual `--allow-all-tools`, `--allow-all-paths`, and `--allow-all-urls` options) are suppressed at startup and cannot grant elevated permissions. The `/yolo` and `/allow-all` slash commands are also blocked.
* In {% data variables.product.prodname_vscode_shortname %}, the global auto-approve setting (`chat.tools.global.autoApprove`) is turned off and cannot be re-enabled.
* In the {% data variables.copilot.github_copilot_app %}, the "Allow all" setting for "Tool Permissions" is blocked in the sessions settings.
* This key is overridable by enterprise team mapping. In your `{% data variables.copilot.managed_setting_file %}`, use the `{ "overridable": "disable" }` syntax to specialize the key's configuration on a per-team basis. You can then set `"disableBypassPermissionsMode": "unmanaged"` in a team settings file, providing a specialization that takes precedence over `{% data variables.copilot.managed_setting_file %}` for members of the subject team.

## telemetry

Configures OpenTelemetry export, routing {% data variables.product.prodname_copilot_short %} usage data to a collector of your choice.

This property is supported for {% data variables.copilot.copilot_cli_short %} and {% data variables.product.prodname_vscode_shortname %}.

When you set the `telemetry` property, {% data variables.product.prodname_copilot_short %} telemetry is sent to the endpoint you specify. The following sub-properties are supported:

* `enabled`: Set to `true` to turn on telemetry export, or `false` to turn it off.
* `endpoint`: The URL of your OTLP collector (for example, `https://otel-collector.example.com`).
* `protocol`: The transport protocol for telemetry export. Accepted values are `"http/json"` and `"http/protobuf"`.
* `captureContent`: Set to `true` to include prompt and response content in the telemetry payload, or `false` to exclude it.
* `lockCaptureContent`: Set to `true` to prevent users from changing the `captureContent` setting.
* `serviceName`: A label for the telemetry service name (for example, `"copilot"`).
* `resourceAttributes`: An object of OpenTelemetry resource attributes to attach to all exported telemetry (for example, `{"deployment.environment": "production"}`).
* `headers`: An object of HTTP headers to include with each telemetry request (for example, an `Authorization` header for your collector).

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
| `serverName` | Matches the user-assigned server label exactly. Wildcards are not supported. Because users choose server names, use `serverUrl` or `serverCommand` when you need to enforce the identity of a server. | Any server. In-memory servers can only use `serverName`. |
| `serverUrl` | Matches a remote server URL. Supports `*` wildcards for subdomains or path prefixes—for example, `https://mcp.example.com/*` or `https://*.internal.example.com/*`. | Remote servers that connect over HTTP or server-sent events (SSE). This property does not apply to local servers, even if they have a URL. |
| `serverCommand` | Matches the exact command and each argument for a local server—for example, `["npx", "-y", "my-mcp-server"]`. Wildcards and command-line expansion are not supported. | Local servers that use standard input and output (`stdio`). This property does not apply to remote servers, even if they have a command. |

This key is overridable for enterprise teams. Wrap the matcher objects under `overridable` at the enterprise level, then use the regular syntax to define allowlists and denylists in each team's file.

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

Enforces minimum local sandbox restrictions for {% data variables.copilot.copilot_cli_short %}. Managed sandbox settings impose restrictions rather than defaults:

* For force-on settings, a managed value of `true` enforces the setting. `false` or omission leaves the user's configuration unchanged.
* For capability settings, a managed value of `false` prohibits the capability. `true` or omission leaves the user's configuration unchanged.
* Managed read/write and read-only path lists restrict user-configured grants, while managed denied paths add to user-configured denials.

The following sub-properties are supported:

* `enabled`: `true` requires sandboxing by default. Users cannot disable it through their configuration, the `--no-sandbox` command line option, or the `/sandbox disable` command. If the effective policy permits bypass, a user can still explicitly disable sandboxing for the rest of the current session from an active sandbox-bypass permission prompt.
* `failIfUnavailable`: `true`, combined with `enabled: true`, makes the managed sandbox mandatory. If {% data variables.product.prodname_copilot_short %} cannot validate, compile, or enforce the sandbox policy with an available sandbox backend, it blocks model and tool execution instead of allowing commands to fail or run unsandboxed. This property does not enable sandboxing by itself.
* `allowBypass`: `false` prevents both individual commands from running outside the sandbox and users from disabling sandboxing for the rest of the current session from an active sandbox-bypass permission prompt.
* `addCurrentWorkingDirectory`: `false` prevents {% data variables.copilot.copilot_cli_short %} from automatically adding the current working directory to the sandbox's read/write paths.
* `sandboxMcpServers`: `true` requires local MCP servers started by {% data variables.copilot.copilot_cli_short %} to run in the sandbox. Remote MCP servers do not run in the local sandbox.
* `sandboxLspServers`: `true` requires language servers started by {% data variables.copilot.copilot_cli_short %} to run in the sandbox.
* `gitAuth`: `false` prevents {% data variables.copilot.copilot_cli_short %} from injecting a {% data variables.product.github %} token for authenticated Git HTTPS operations in the sandbox.
* `ghAuth`: `false` prevents {% data variables.copilot.copilot_cli_short %} from injecting a {% data variables.product.github %} token for {% data variables.product.prodname_cli %} in the sandbox.
* `allowDevToolAccess`: `false` prevents automatic access to development-tool configuration, caches, registries, and toolchains. These locations can contain package registry credentials or tokens. Disabling access can cause package restoration, authenticated registry operations, or builds that use shared caches to fail unless you explicitly grant the required paths.
* `userPolicy`: An object that configures filesystem, network, and macOS-specific Seatbelt restrictions. The supported properties are described in the following sections.

### `sandbox.userPolicy.filesystem`

Configures filesystem access for sandboxed processes. Paths should be absolute. Managed grant lists are matched against user-configured lists by exact path string, not by parent or child path coverage.

* `readwritePaths`: An array of paths that sandboxed processes can read and write. A user-configured path remains available only if its exact string also appears in every managed source that specifies this property. An empty managed array removes all user-configured read/write path grants, but does not remove access assembled separately, such as temporary directories or the current working directory.
* `readonlyPaths`: An array of paths that sandboxed processes can read but not write. A user-configured path remains available only if its exact string also appears in every managed source that specifies this property. An empty managed array removes all user-configured read-only path grants, but does not remove access assembled separately.
* `deniedPaths`: An array of paths that sandboxed processes cannot access. A managed value adds to, rather than replaces, a user's denied paths.

### `sandbox.userPolicy.network`

Configures network access for sandboxed processes.

* `allowOutbound`: `false` blocks outbound network access.
* `allowLocalNetwork`: `false` prevents access to the local network.

Network behavior varies by operating system. In particular, a proxy is not a complete egress-control boundary because some applications can ignore proxy settings.

### `sandbox.userPolicy.seatbelt`

Configures macOS-specific Seatbelt options.

* `keychainAccess`: `false` prevents sandboxed processes from accessing the macOS Keychain.
