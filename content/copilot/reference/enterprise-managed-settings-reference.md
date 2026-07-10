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

> [!NOTE]
> This feature is in {% data variables.release-phases.public_preview %} and subject to change.

Use this reference to understand the currently supported keys in `{% data variables.copilot.managed_setting_file %}`.

For deployment methods, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-managed-settings#choosing-a-deployment-method).

## Precedence rules

When multiple settings sources are present, clients apply settings in this order:

1. Server-managed settings
1. MDM-managed settings
1. File-based settings
1. User-level settings

MDM-managed settings take precedence. If MDM-managed settings are not available, clients apply server-managed settings before file-based settings.

## Supported keys

{% rowheaders %}

| Key | Type | Accepted values | Purpose |
| --- | --- | --- | --- |
| `permissions.disableBypassPermissionsMode` | `string` | `"disable"` | Disables bypass or YOLO-style allow-all behavior |
| `enabledPlugins` | `object` | Key format: `PLUGIN-NAME@MARKETPLACE-NAME`; value: `true` | Enables specific plugins by key |
| `extraKnownMarketplaces` | `object` | Named marketplace object with `source.source` (`"github"`) and `source.repo` (`OWNER/REPO`) | Adds plugin marketplaces that users can access |
| `strictKnownMarketplaces` | `array` | Array of marketplace objects with `source` values (`"github"` with `repo`, or `"git"` with `url`) | Restricts plugin installation to explicitly listed marketplaces |
| `model` | `object` | `default` set to a supported model name | Defines default model governance settings |
| `telemetry` | `object` | `enabled` (`boolean`), `endpoint` (`string`), `protocol` (`"otlp-http"` or `"otlp-grpc"`), `captureContent` (`boolean`), `lockCaptureContent` (`boolean`), `serviceName` (`string`), `resourceAttributes` (`object`), `headers` (`object`) | Configures OpenTelemetry export for {% data variables.product.prodname_vscode_shortname %} |

{% endrowheaders %}

## Example configuration

The following example shows these keys in one managed settings file.

```json
{
  "permissions": {
    "disableBypassPermissionsMode": "disable"
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
  "model": {
    "default": "MODEL-NAME"
  },
  "telemetry": {
    "enabled": true,
    "endpoint": "https://otel-collector.example.com",
    "protocol": "otlp-http",
    "captureContent": false,
    "lockCaptureContent": true,
    "serviceName": "copilot",
    "resourceAttributes": {
      "deployment.environment": "production"
    },
    "headers": {
      "Authorization": "Bearer TOKEN"
    }
  }
}
```
