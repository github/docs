---
title: Introdução ao GitHub Actions para GitHub AE
shortTitle: Começar
intro: 'Saiba mais sobre como configurar {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_managed %}.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
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

Este artigo explica como os administradores do site podem configurar {% data variables.product.prodname_ghe_managed %} para usar {% data variables.product.prodname_actions %}.

Por padrão, {% data variables.product.prodname_actions %} está habilitado para {% data variables.product.prodname_ghe_managed %}. Para começar a usar {% data variables.product.prodname_actions %} na sua empresa, você deverá gerenciar as permissões de acesso para {% data variables.product.prodname_actions %} e adicionar executores para executar fluxos de trabalho.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Gerenciar as permissões de acesso para {% data variables.product.prodname_actions %} na sua empres

Você pode usar políticas para gerenciar o acesso a {% data variables.product.prodname_actions %}. Para obter mais informações, consulte "[Aplicando as políticas do GitHub Actions para sua empresa](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)".

## Adicionar executores

Você pode configurar e hospedar servidores para executar trabalhos para sua empresa em {% data variables.product.product_name %}. {% data reusables.actions.about-self-hosted-runners %} Para obter mais informações, consulte "[Hospedando seus próprios executores](/actions/hosting-your-own-runners)".

{% data reusables.actions.general-security-hardening %}
