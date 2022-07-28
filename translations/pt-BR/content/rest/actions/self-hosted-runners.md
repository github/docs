---
title: Executores auto-hospedados
intro: 'A API de executores auto-hospedados permite que você registre, visualize e exclua executores auto-hospedados.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---
 

## Sobre a API de executores auto-hospedados

A API de executores auto-hospedados permite que você registre, visualize e exclua executores auto-hospedados. {% data reusables.actions.about-self-hosted-runners %} Para obter mais informações, consulte "[Hospedando seus próprios executores](/actions/hosting-your-own-runners)".

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} deve ter a permissão de administração `` para repositórios ou a permissão `organization_self_hosted_runners` para as organizações. Os usuários autenticados devem ter acesso de administrador a repositórios ou organizações ou ao escopo `manage_runners:corporativo` para que as empresas usem esta API.
