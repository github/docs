---
title: GitHub Actions 权限
allowTitleToDifferFromFilename: true
shortTitle: 权限
intro: '{% data variables.product.prodname_actions %} 权限 API 可让您设置权限，允许哪些企业、组织和存储库运行 {% data variables.product.prodname_actions %}，以及允许哪些操作{% if actions-workflow-policy %} 和可重用工作流程{% endif %}运行。'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## 关于权限 API

{% data variables.product.prodname_actions %} 权限 API 可让您设置权限，允许哪些企业、组织和存储库运行 {% data variables.product.prodname_actions %}，以及允许哪些操作{% if actions-workflow-policy %} 和可重用工作流程{% endif %}运行。{% ifversion fpt or ghec or ghes %} 更多信息请参阅“[使用限制、计费和管理](/actions/reference/usage-limits-billing-and-administration#disabling-or-limiting-github-actions-for-your-repository-or-organization)”。{% endif %}
