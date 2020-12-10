---
title: Sobre contas corporativas
intro: 'With {% data variables.product.product_name %}, you can use an enterprise account to give administrators a single point of visibility and management{% if enterpriseServerVersions contains currentVersion %} for billing and license usage{% endif %}.'
redirect_from:
  - /enterprise/admin/installation/about-enterprise-accounts
  - /enterprise/admin/overview/about-enterprise-accounts
versions:
  enterprise-server: '>=2.20'
  github-ae: '*'
---

### Sobre as contas corporativas do {% data variables.product.product_name %}

An enterprise account allows you to manage multiple organizations{% if enterpriseServerVersions contains currentVersion %} and {% data variables.product.prodname_ghe_server %} instances{% else %} on {% data variables.product.product_name %}{% endif %}. Sua conta corporativa deve ter um manipulador, como uma conta pessoal ou organizacional no {% data variables.product.prodname_dotcom %}. Os administradores corporativos podem gerenciar configurações e preferências, como:

- Member access and management (organization members, outside collaborators){% if enterpriseServerVersions contains currentVersion %}
- Billing and usage ({% data variables.product.prodname_ghe_server %} instances, user licenses, {% data variables.large_files.product_name_short %} packs){% endif %}
- Security{% if enterpriseServerVersions contains currentVersion %}(single sign-on, two factor authentication)
- Requests {% if enterpriseServerVersions contains currentVersion %}and support bundle sharing {% endif %}with {% data variables.contact.enterprise_support %}{% endif %}

{% if enterpriseServerVersions contains currentVersion %}{% data reusables.enterprise-accounts.enterprise-accounts-billing %} For more information about managing your {% data variables.product.prodname_ghe_cloud %} subscription, see "[Viewing the subscription and usage for your enterprise account](/articles/viewing-the-subscription-and-usage-for-your-enterprise-account)." {% endif %}For more information about managing your {% data variables.product.product_name %} billing settings, see "[Managing billing for your enterprise](/admin/overview/managing-billing-for-your-enterprise)."

{% if enterpriseServerVersions contains currentVersion %}

Para obter mais informações sobre o {% data variables.product.prodname_ghe_cloud %} e {% data variables.product.prodname_ghe_server %}, consulte "[Produtos do {% data variables.product.prodname_dotcom %}](/articles/github-s-products)". Para atualizar para {% data variables.product.prodname_enterprise %} ou para começar com uma conta corporativa, entre em contato com {% data variables.contact.contact_enterprise_sales %}.

### Gerenciando as licenças {% data variables.product.prodname_ghe_server %} vinculadas à sua conta corporativa

{% data reusables.enterprise-accounts.admin-managing-licenses %}

{% endif %}
