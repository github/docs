---
title: GitHub Actions Permissions
allowTitleToDifferFromFilename: true
shortTitle: Permissões
intro: 'The {% data variables.product.prodname_actions %} Permissions API allows you to set permissions for what enterprises, organizations, and repositories are allowed to run {% data variables.product.prodname_actions %}, and what actions{% if actions-workflow-policy %} and reusable workflows{% endif %} are allowed to run.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## About the Permissions API

The {% data variables.product.prodname_actions %} Permissions API allows you to set permissions for what enterprises, organizations, and repositories are allowed to run {% data variables.product.prodname_actions %}, and what actions{% if actions-workflow-policy %} and reusable workflows{% endif %} are allowed to run.{% ifversion fpt or ghec or ghes %} For more information, see "[Usage limits, billing, and administration](/actions/reference/usage-limits-billing-and-administration#disabling-or-limiting-github-actions-for-your-repository-or-organization)."{% endif %}
