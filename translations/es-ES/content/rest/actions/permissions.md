---
title: GitHub Actions Permissions
allowTitleToDifferFromFilename: true
shortTitle: Permisos
intro: 'The {% data variables.product.prodname_actions %} Permissions API allows you to set permissions for what enterprises, organizations, and repositories are allowed to run {% data variables.product.prodname_actions %}, and what actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %} are allowed to run.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## About the Permissions API

La API de permisos de {% data variables.product.prodname_actions %} te permite configurar permisos sobre cuáles empresas, organizaciones y repositorios pueden ejecutar {% data variables.product.prodname_actions %} y qué acciones{% ifversion actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %} pueden ejecutarse.{% ifversion fpt or ghec or ghes %} Para obtener más información, consulta la sección "[Límites de uso, facturación y administración](/actions/reference/usage-limits-billing-and-administration#disabling-or-limiting-github-actions-for-your-repository-or-organization)".{% endif %}
