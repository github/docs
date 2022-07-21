---
title: Segredos do GitHub Actions
allowTitleToDifferFromFilename: true
shortTitle: Segredos
intro: 'A API de Segredos {% data variables.product.prodname_actions %} permite criar, atualizar, excluir e recuperar informações sobre segredos criptografados que podem ser usados nos fluxos de trabalho de {% data variables.product.prodname_actions %}.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

## Sobre a API de segredos

A API de Segredos {% data variables.product.prodname_actions %} permite criar, atualizar, excluir e recuperar informações sobre segredos criptografados que podem ser usados nos fluxos de trabalho de {% data variables.product.prodname_actions %}. {% data reusables.actions.about-secrets %} Para obter mais informações, consulte "[Criando e usando segredos encriptados](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)".

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} deve ter a permissão `segredos` para usar esta API. Os usuários autenticados devem ter acesso de colaborador em um repositório para criar, atualizar ou ler segredos.
