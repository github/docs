---
title: Setting permissions for GitHub Apps
intro: '{% data reusables.shortdesc.permissions_github_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-permissions-for-github-apps/
  - /apps/building-github-apps/permissions-for-github-apps/
  - /apps/building-github-apps/setting-permissions-for-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

When you create a GitHub App, you can select the permissions it needs to access end user data. Permissions can also be added and removed. For more information, see "[Editing a GitHub App's permissions](/apps/managing-github-apps/editing-a-github-app-s-permissions/)."

### Metadata permissions

By default, GitHub Apps have `Read-only` access to metadata endpoints. Metadata is a collection of read-only endpoints that provide general information about resources that the authorized installation can access.

{% data reusables.apps.metadata-permissions %} For a list of metadata endpoints, see "[Metadata permissions](/rest/reference/permissions-required-for-github-apps#metadata-permissions)."
