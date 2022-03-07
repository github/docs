---
title: Introdução ao GitHub Actions para GitHub AE
shortTitle: Começar
intro: 'Saiba mais sobre como configurar {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_managed %}.'
permissions: 'Enterprise owners can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
redirect_from:
  - /admin/github-actions/getting-started-with-github-actions-for-github-ae
  - /admin/github-actions/using-github-actions-in-github-ae/getting-started-with-github-actions-for-github-ae
---


## Sobre {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_managed %}

Por padrão, {% data variables.product.prodname_actions %} está habilitado para {% data variables.product.product_name %}. Para começar a usar {% data variables.product.prodname_actions %} na sua empresa, você deverá gerenciar as permissões de acesso para {% data variables.product.prodname_actions %} e adicionar executores para executar fluxos de trabalho.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Gerenciar as permissões de acesso para {% data variables.product.prodname_actions %} na sua empres

Você pode usar políticas para gerenciar o acesso a {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Aplicando as políticas do GitHub Actions para sua empresa](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)".

## Adicionar executores

You must configure and host your own machines to run jobs for your enterprise on {% data variables.product.product_name %}. {% data reusables.actions.about-self-hosted-runners %} For more information, see "[Getting started with self-hosted runners for your enterprise](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)" and "[Hosting your own runners](/actions/hosting-your-own-runners)."

{% data reusables.actions.general-security-hardening %}
