---
title: Pre-receive Hooks
intro: 'The Pre-receive Hooks API allows you to create, list, update and delete pre-receive hooks.'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

*It is only available to [authenticated](/rest/overview/resources-in-the-rest-api#authentication) site administrators.* Normal users will receive a `404` response if they try to access it.

{% data reusables.user-settings.enterprise-admin-api-classic-pat-only %}

### Object attributes

#### Pre-receive Hook

| Name                             | Type      | Description                                                     |
|----------------------------------|-----------|-----------------------------------------------------------------|
| `name`                           | `string`  | The name of the hook.                                           |
| `script`                         | `string`  | The script that the hook runs.                                  |
| `script_repository`              | `object`  | The GitHub repository where the script is kept.                 |
| `environment`                    | `object`  | The pre-receive environment where the script is executed.       |
| `enforcement`                    | `string`  | The state of enforcement for this hook.                         |
| `allow_downstream_configuration` | `boolean` | Whether enforcement can be overridden at the org or repo level. |

Possible values for *enforcement* are `enabled`, `disabled` and`testing`. `disabled` indicates the pre-receive hook will not run. `enabled` indicates it will run and reject
any pushes that result in a non-zero status. `testing` means the script will run but will not cause any pushes to be rejected.
