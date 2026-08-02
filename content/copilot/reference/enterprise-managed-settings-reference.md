---
title: Enterprise managed settings reference
shortTitle: Managed settings reference
intro: 'Reference for the enterprise managed settings schema used by {% data variables.product.prodname_copilot_short %} clients.'
versions:
  feature: copilot
contentType: reference
category:
  - Configure Copilot
---

Use this reference to understand the currently supported keys in `{% data variables.copilot.managed_setting_file %}`.

For deployment methods and supported clients, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-managed-settings).

## Precedence rules

When multiple settings sources are present, settings earlier in this list take precedence over settings later in the list:

1. MDM-managed settings
1. Server-managed settings
1. File-based settings
1. User-level settings

## Supported keys

{% rowheaders %}

| Key | Purpose | {% data variables.copilot.copilot_cli_short %} | {% data variables.product.prodname_vscode_shortname %} | {% data variables.copilot.github_copilot_app %} | {% data variables.copilot.copilot_cloud_agent %} |
| --- | --- | --- | --- | --- | --- |
| `permissions.disableBypassPermissionsMode` | Disables bypass or YOLO-style allow-all behavior | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| `permissions.model` | Sets auto model selection as the default for new conversations | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| `enabledPlugins` | Enables or disables specific plugins by key | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| `extraKnownMarketplaces` | Adds plugin marketplaces that users can access | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| `strictKnownMarketplaces` | Restricts plugin installation to explicitly listed marketplaces | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| `telemetry` | Configures OpenTelemetry export, routing {% data variables.product.prodname_copilot_short %} usage data to a collector of your choice | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| `remoteControl` | Restricts whether sessions hosted on this device can be remotely controlled, based on the controlling client's SSO authorization status for the listed organizations. Doesn't affect the user's ability to remotely control sessions hosted on other devices | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |

{% endrowheaders %}

## Example configuration

The following example shows these keys in one managed settings file.

```json
{
  "permissions": {
    "disableBypassPermissionsMode": "disable",
    "model": "auto"
  },
  "enabledPlugins": {
    "my-plugin@agent-skills": true
  },
  "extraKnownMarketplaces": {
    "agent-skills": {
      "source": {
        "source": "github",
        "repo": "OWNER/REPO"
      }
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
  }
}
```

## `enabledPlugins`

Defines plugins that are automatically installed or blocked for all enterprise users. Each entry uses the format `PLUGIN-NAME@MARKETPLACE-NAME` as the key, with a boolean value: `true` to require the plugin to be enabled, or `false` to require it to be disabled. See [AUTOTITLE](/copilot/concepts/agents/about-enterprise-plugin-standards).

## `extraKnownMarketplaces`

Defines additional plugin marketplaces available to users. Each entry is a named marketplace object containing a `source` property. The following source types are supported:

* `"github"` — requires `repo` in `OWNER/REPO` format; optional `ref` (branch, tag, or SHA) and `path` (subdirectory)
* `"git"` — requires `url`; optional `ref` and `path`
* `"directory"` — requires `path`

See [AUTOTITLE](/copilot/concepts/agents/about-enterprise-plugin-standards).

## `strictKnownMarketplaces`

Restricts plugin installation to only the marketplaces explicitly defined by the enterprise. An empty array means complete lockdown. Each entry is a marketplace object with a `source` property indicating the source type. The following source types are supported:

* `"github"` — requires `repo` in `OWNER/REPO` format; optional `ref` and `path`
* `"git"` — requires `url`; optional `ref` and `path`
* `"url"` — requires `url`; optional `headers` object
* `"npm"` — requires `package`
* `"file"` — requires `path`
* `"directory"` — requires `path`
* `"hostPattern"` — requires `hostPattern` (regex matching marketplace hosts)
* `"pathPattern"` — requires `pathPattern` (regex matching marketplace paths)

## `permissions`

### `disableBypassPermissionsMode`

Prevents users from enabling bypass mode (also known as "YOLO mode"). Bypass mode lets an agent run commands, access files, and fetch URLs without asking for approval.

When you set `disableBypassPermissionsMode` to `"disable"`, users cannot turn on bypass mode:

* In {% data variables.copilot.copilot_cli_short %}, all of the command line options for allowing all permissions (`--yolo`, `--allow-all`, and the individual `--allow-all-tools`, `--allow-all-paths`, and `--allow-all-urls` options) are suppressed at startup and cannot grant elevated permissions. The `/yolo` and `/allow-all` slash commands are also blocked.
* In {% data variables.product.prodname_vscode_shortname %}, the global auto-approve setting (`chat.tools.global.autoApprove`) is turned off and cannot be re-enabled.
* In the {% data variables.copilot.github_copilot_app %}, the "Allow all" setting for "Tool Permissions" is blocked in the sessions settings.

### `model`

Sets auto model selection as the default for new conversations. See [AUTOTITLE](/copilot/concepts/models/auto-model-selection).

When you set `permissions.model` to `"auto"`, new sessions use Auto model unless the user specifies a different model on a per-conversation basis.

## `telemetry`

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

## `remoteControl`

Restricts whether {% data variables.product.prodname_copilot_short %} sessions hosted on a device can be remotely controlled. This doesn't affect a user's ability to remotely control their sessions hosted on other devices.

* `mode`: Set to `"disabled"` to prevent remote control of sessions on the device, `"requireSSO"` to only allow remote control from a client that is SSO-authorized for the organizations listed in `githubDotComOrganizations`, or `"enabled"` to allow it unrestricted.
* `githubDotComOrganizations`: An array of organization logins. Required when `mode` is `"requireSSO"`.
