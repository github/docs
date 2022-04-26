---
title: Permisos
intro: 'The Permissions API allows you to set permissions for what enterprises, organizations, and repositories are allowed to run {% data variables.product.prodname_actions %}, and what actions{% if actions-workflow-policy %} and reusable workflows{% endif %} are allowed to run.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## Permisos

La API de permisos te permite configurar los permisos que pueden ejecutar las empresas, organizaciones y repositorios {% data variables.product.prodname_actions %}, así como las acciones{% if actions-workflow-policy %} y flujos de trabajo reutilizables{% endif %} también pueden hacerlo.{% ifversion fpt or ghec or ghes %} Para obtener más información, consulta la sección "[Límites de uso, facturación y administración](/actions/reference/usage-limits-billing-and-administration#disabling-or-limiting-github-actions-for-your-repository-or-organization)".{% endif %}
