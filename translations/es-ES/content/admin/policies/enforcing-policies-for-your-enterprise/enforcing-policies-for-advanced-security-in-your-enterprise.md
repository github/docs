---
title: Requerir políticas para la seguridad avanzada en tu empresa
intro: 'Puedes requerir políticas para administrar las características de {% data variables.product.prodname_GH_advanced_security %} dentro de las organizaciones de tu empresa o permitir que se configuren las políticas en cada organización.'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_GH_advanced_security %} in an enterprise.'
product: '{% data reusables.gated-features.ghas %}'
versions:
  ghec: '*'
  ghes: '>=3.1'
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
shortTitle: Políticas de seguridad avanzada
---

## Acerca de las políticas para la {% data variables.product.prodname_GH_advanced_security %} en tu empresa

{% data reusables.advanced-security.ghas-helps-developers %} Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)".

{% ifversion ghes or ghec %}Si compras una licencia para la {% data variables.product.prodname_GH_advanced_security %}, cualquier{% else %}Cualquier{% endif %} organización en {% data variables.product.product_location %} podrá utilizar las características de la {% data variables.product.prodname_advanced_security %}. Puedes requerir políticas que controlen cómo los miembros de tu empresa de {% data variables.product.product_name %} utilizan la {% data variables.product.prodname_advanced_security %}.

## Requerir una política para utilizar la {% data variables.product.prodname_GH_advanced_security %} en tu empresa

{% data reusables.advanced-security.about-ghas-organization-policy %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.advanced-security-policies %}
{% data reusables.enterprise-accounts.advanced-security-organization-policy-drop-down %}
{% data reusables.enterprise-accounts.advanced-security-individual-organization-policy-drop-down %}
