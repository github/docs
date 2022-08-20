---
title: Aplicar políticas de Segurança Avançada na sua empresa
intro: 'Você pode exigir políticas para gerenciar as funcionalidades de {% data variables.product.prodname_GH_advanced_security %} dentro das organizações de sua empresa ou permitir que as políticas sejam definidas em cada organização.'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_GH_advanced_security %} in an enterprise.'
product: '{% data reusables.gated-features.ghas %}'
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - Enterprise
  - Policies
  - Secret scanning
  - Security
redirect_from:
  - /admin/policies/enforcing-policies-for-advanced-security-in-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-policies-for-advanced-security-in-your-enterprise-account
shortTitle: Políticas de segurança avançadas
---

## Sobre as políticas para {% data variables.product.prodname_GH_advanced_security %} na sua empresa

{% data reusables.advanced-security.ghas-helps-developers %} Para obter mais informações, consulte "[Sobre o {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security).

{% ifversion ghes or ghec %}Se você comprar uma licença para {% data variables.product.prodname_GH_advanced_security %}, qualquer{% else %}Qualquer organização de{% endif %} em {% data variables.product.product_location %} pode usar funcionalidades de {% data variables.product.prodname_advanced_security %}. Você pode aplicar políticas para controlar como os integrantes da sua empresa em {% data variables.product.product_name %} usam {% data variables.product.prodname_advanced_security %}.

## Aplicando uma política para o uso de {% data variables.product.prodname_GH_advanced_security %} na sua empresa

{% data reusables.advanced-security.about-ghas-organization-policy %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.advanced-security-policies %}
{% data reusables.enterprise-accounts.advanced-security-organization-policy-drop-down %}
{% data reusables.enterprise-accounts.advanced-security-individual-organization-policy-drop-down %}
