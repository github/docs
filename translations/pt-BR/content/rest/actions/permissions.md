---
title: Permissões do GitHub Actions
allowTitleToDifferFromFilename: true
shortTitle: Permissões
intro: 'A API de Permissões do {% data variables.product.prodname_actions %} permite que você defina as permissões para o que empresas, organizações, e repositórios estão autorizados a executar {% data variables.product.prodname_actions %}, e quais ações{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %} porem ser executados.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## Sobre a API de permissões

The {% data variables.product.prodname_actions %} Permissions API allows you to set permissions for what enterprises, organizations, and repositories are allowed to run {% data variables.product.prodname_actions %}, and what actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %} are allowed to run.{% ifversion fpt or ghec or ghes %} For more information, see "[Usage limits, billing, and administration](/actions/reference/usage-limits-billing-and-administration#disabling-or-limiting-github-actions-for-your-repository-or-organization)."{% endif %}
