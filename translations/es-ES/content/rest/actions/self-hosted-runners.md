---
title: Self-hosted runners
intro: 'The Self-hosted Runners API allows you to register, view, and delete self-hosted runners.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
--- 

## Self-hosted runners

The Self-hosted Runners API allows you to register, view, and delete self-hosted runners. {% data reusables.actions.about-self-hosted-runners %} For more information, see "[Hosting your own runners](/actions/hosting-your-own-runners)."

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} must have the `administration` permission for repositories the `organization_self_hosted_runners` permission for organizations. Authenticated users must have admin access to repositories or organizations, or the `manage_runners:enterprise` scope for enterprises to use this API.