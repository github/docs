---
title: Dependabot secrets
shortTitle: Segredos
intro: 'With the {% data variables.product.prodname_dependabot %} secrets API, you can manage and control {% data variables.product.prodname_dependabot %} secrets for an organization or repository.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '>=3.4'
  ghec: '*'
allowTitleToDifferFromFilename: true
---

## About the {% data variables.product.prodname_dependabot %} secrets API

The {% data variables.product.prodname_dependabot %} secrets API lets you create, update, delete, and retrieve information about encrypted secrets. {% data reusables.actions.about-secrets %} Para obter mais informações, consulte "[Gerenciar segredos criptografados para o dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)."

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} deve ter a permissão `dependabot_secrets` para usar esta API. Os usuários autenticados devem ter acesso de colaborador em um repositório para criar, atualizar ou ler segredos.
