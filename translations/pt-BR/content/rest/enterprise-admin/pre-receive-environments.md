---
title: Pre-receive Environments
intro: 'The Pre-receive Environments API allows you to create, list, update and delete environments for pre-receive hooks.'
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

*It is only available to [authenticated](/rest/overview/resources-in-the-rest-api#authentication) site administrators.* Normal users will receive a `404` response if they try to access it.

{% data reusables.user-settings.enterprise-admin-api-classic-pat-only %}

### Object attributes

#### Pre-receive Environment

| Name                  | Type      | Description                                                                |
|-----------------------|-----------|----------------------------------------------------------------------------|
| `name`                | `string`  | The name of the environment as displayed in the UI.                        |
| `image_url`           | `string`  | URL to the tarball that will be downloaded and extracted.                  |
| `default_environment` | `boolean` | Whether this is the default environment that ships with {% data variables.product.product_name %}. |
| `download`            | `object`  | This environment's download status.                                        |
| `hooks_count`         | `integer` | The number of pre-receive hooks that use this environment.                 |

#### Pre-receive Environment Download

| Name            | Type     | Description                                             |
|-----------------|----------|---------------------------------------------------------|
| `state`         | `string` | The state of the most recent download.                  |
| `downloaded_at` | `string` | The time when the most recent download started.         |
| `message`       | `string` | On failure, this will have any error messages produced. |

Possible values for `state` are `not_started`, `in_progress`, `success`, `failed`.
