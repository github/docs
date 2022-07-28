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

A API de Permissões do {% data variables.product.prodname_actions %} permite que você defina as permissões para o que empresas, organizações, e repositórios estão autorizados a executar {% data variables.product.prodname_actions %}, e quais ações{% ifversion actions-workflow-policy %} e fluxos de trabalho reutilizáveis{% endif %} estão autorizados a ser executados.{% ifversion fpt or ghec or ghes %} Para obter mais informações, consulte "[Limites de uso, cobrança e administração](/actions/reference/usage-limits-billing-and-administration#disabling-or-limiting-github-actions-for-your-repository-or-organization)".{% endif %}
