---
title: GitHub Actions Permissions
allowTitleToDifferFromFilename: true
shortTitle: Permisos
intro: 'La API de permisos de {% data variables.product.prodname_actions %} te permite configurar los permisos para cuáles empresas, organizaciones y repositorios pueden ejecutar {% data variables.product.prodname_actions %} y qué acciones{% ifversion actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %} pueden ejecutarse.'
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
