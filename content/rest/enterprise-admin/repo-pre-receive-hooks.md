---
title: Repository Pre-receive Hooks
intro: The Repository Pre-receive Hooks API allows you to view and modify enforcement of the pre-receive hooks that are available to a repository.
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
---

### Object attributes

| Name                | Type     | Description                                               |
|---------------------|----------|-----------------------------------------------------------|
| `name`              | `string` | The name of the hook.                                     |
| `enforcement`       | `string` | The state of enforcement for the hook on this repository. |
| `configuration_url` | `string` | URL for the endpoint where enforcement is set.            |

Possible values for *enforcement* are `enabled`, `disabled` and`testing`. `disabled` indicates the pre-receive hook will not run. `enabled` indicates it will run and reject any pushes that result in a non-zero status. `testing` means the script will run but will not cause any pushes to be rejected.

`configuration_url` may be a link to this repository, it's organization owner or global configuration. Authorization to access the endpoint at `configuration_url` is determined at the owner or site admin level.
