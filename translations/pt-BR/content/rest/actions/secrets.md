---
title: GitHub Actions Secrets
allowTitleToDifferFromFilename: true
shortTitle: Segredos
intro: 'The {% data variables.product.prodname_actions %} Secrets API lets you create, update, delete, and retrieve information about encrypted secrets that can be used in {% data variables.product.prodname_actions %} workflows.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## About the Secrets API

The {% data variables.product.prodname_actions %} Secrets API lets you create, update, delete, and retrieve information about encrypted secrets that can be used in {% data variables.product.prodname_actions %} workflows. {% data reusables.actions.about-secrets %} Para obter mais informações, consulte "[Criando e usando segredos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} deve ter a permissão `segredos` para usar esta API. Os usuários autenticados devem ter acesso de colaborador em um repositório para criar, atualizar ou ler segredos.
