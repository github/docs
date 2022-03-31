---
title: Primeiros passos com o GitHub Actions para GitHub Enterprise Cloud
shortTitle: Começar
intro: 'Aprenda como configurar {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_cloud %}.'
permissions: 'Enterprise owners can configure {% data variables.product.prodname_actions %}.'
versions:
  ghec: '*'
type: how_to
topics:
  - Actions
  - Enterprise
---

## Sobre {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_cloud %}

{% data variables.product.prodname_actions %} está habilitado por padrão para sua empresa. Para começar a usar {% data variables.product.prodname_actions %} na sua empresa, você pode gerenciar as políticas que controlam como os instegrantes corporativos usam o {% data variables.product.prodname_actions %} e, opcionalmente, adicionar executores auto-hospedados para executar fluxos de trabalho.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Gerenciando políticas para {% data variables.product.prodname_actions %}

Você pode usar políticas para controlar como os integrantes corporativos usam {% data variables.product.prodname_actions %}. Por exemplo, você pode restringir quais ações são permitidas e configurar a retenção de artefato e de registro. Para obter mais informações, consulte "[Aplicando as políticas do GitHub Actions para sua empresa](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)".

## Adicionar executores

Para executar fluxos de trabalho de {% data variables.product.prodname_actions %}, você deve usar executores. {% data reusables.actions.about-runners %} se você usar corredores hospedados {% data variables.product.company_short %}, você será cobrado com base no consumo após esgotar os minutos incluídos em {% data variables.product.product_name %}, ao passo que os executores auto-hospedados são grátis. Para obter mais informações, consulte "[Sobre a cobrança do {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)."

Para obter mais informações, consulte "[Sobre os executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners)."

Se você escolher executores auto-hospedados, você poderá adicionar os executores aos níveis da empresa, organização ou repositório. Para obter mais informações, consulte "[Adicionando executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".

{% data reusables.actions.general-security-hardening %}
