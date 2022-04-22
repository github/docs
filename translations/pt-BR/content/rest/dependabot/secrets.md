---
title: Segredos
intro: 'With the Dependabot Secrets API, you can manage and control Dependabot secrets for an organization or repository.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '>=3.4'
  ghec: '*'
allowTitleToDifferFromFilename: true
---

A API de segredos {% data variables.product.prodname_dependabot %} permite criar, atualizar, excluir e recuperar informações sobre segredos criptografados. {% data reusables.actions.about-secrets %} Para obter mais informações, consulte "[Gerenciar segredos criptografados para o dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)."

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} deve ter a permissão `dependabot_secrets` para usar esta API. Os usuários autenticados devem ter acesso de colaborador em um repositório para criar, atualizar ou ler segredos.
