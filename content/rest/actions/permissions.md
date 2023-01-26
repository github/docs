---
title: GitHub Actions Permissions
allowTitleToDifferFromFilename: true
shortTitle: Permissions
intro: 'Use the REST API to interact with permissions for {% data variables.product.prodname_actions %}.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## About permissions for {% data variables.product.prodname_actions %}

You can use the REST API to set permissions for what enterprises, organizations, and repositories are allowed to run {% data variables.product.prodname_actions %}, and what actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %} are allowed to run.{% ifversion fpt or ghec or ghes %} For more information, see "[Usage limits, billing, and administration](/actions/reference/usage-limits-billing-and-administration#disabling-or-limiting-github-actions-for-your-repository-or-organization)."{% endif %}