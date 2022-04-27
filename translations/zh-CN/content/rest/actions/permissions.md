---
title: 权限
intro: 'The Permissions API allows you to set permissions for what enterprises, organizations, and repositories are allowed to run {% data variables.product.prodname_actions %}, and what actions{% if actions-workflow-policy %} and reusable workflows{% endif %} are allowed to run.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## 权限

The Permissions API allows you to set permissions for what enterprises, organizations, and repositories are allowed to run {% data variables.product.prodname_actions %}, and what actions{% if actions-workflow-policy %} and reusable workflows{% endif %} are allowed to run.{% ifversion fpt or ghec or ghes %} For more information, see "[Usage limits, billing, and administration](/actions/reference/usage-limits-billing-and-administration#disabling-or-limiting-github-actions-for-your-repository-or-organization)."{% endif %}
