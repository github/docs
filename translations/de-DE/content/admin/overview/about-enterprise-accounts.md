---
title: Informationen zu „Enterprise“ (Unternehmens)-Konten
intro: 'With {% data variables.product.product_name %}, you can use an enterprise account to give administrators a single point of visibility and management{% if enterpriseServerVersions contains currentVersion %} for billing and license usage{% endif %}.'
redirect_from:
  - /enterprise/admin/installation/about-enterprise-accounts
  - /enterprise/admin/overview/about-enterprise-accounts
versions:
  enterprise-server: '>=2.20'
  github-ae: '*'
type: overview
topics:
  - Accounts
  - Enterprise
  - Fundamentals
---

### Informationen zu Unternehmenskonten auf {% data variables.product.product_name %}

An enterprise account allows you to manage multiple organizations{% if enterpriseServerVersions contains currentVersion %} and {% data variables.product.prodname_ghe_server %} instances{% else %} on {% data variables.product.product_name %}{% endif %}. Ihr Enterprise-Konto benötigt einen Handle, beispielsweise eine Organisation oder ein persönliches Konto auf {% data variables.product.prodname_dotcom %}. Enterprise-Administratoren können Einstellungen und Voreinstellungen verwalten, darunter folgende:

- Member access and management (organization members, outside collaborators){% if enterpriseServerVersions contains currentVersion %}
- Billing and usage ({% data variables.product.prodname_ghe_server %} instances, user licenses, {% data variables.large_files.product_name_short %} packs){% endif %}
- Security {% if enterpriseServerVersions contains currentVersion %}(single sign-on, two factor authentication)
- Requests {% if enterpriseServerVersions contains currentVersion %}and support bundle sharing {% endif %}with {% data variables.contact.enterprise_support %}{% endif %}

{% if enterpriseServerVersions contains currentVersion %}{% data reusables.enterprise-accounts.enterprise-accounts-billing %} For more information about the management of your {% data variables.product.prodname_ghe_cloud %} subscription, see "[Viewing the subscription and usage for your enterprise account](/articles/viewing-the-subscription-and-usage-for-your-enterprise-account)." {% endif %}For more information about managing your {% data variables.product.product_name %} billing settings, see "[Managing billing for your enterprise](/admin/overview/managing-billing-for-your-enterprise)."

For more information about the management of users, organizations, data, and policies for {% data variables.product.product_location %}, see "[Managing users, organizations, and repositories](/admin/user-management)" and "[Setting policies for your enterprise](/admin/policies)."

For more information about the management of enterprise accounts using the GraphQL API, see "[Enterprise accounts](/graphql/guides/managing-enterprise-accounts)."

{% if enterpriseServerVersions contains currentVersion %}

Weitere Informationen über die Unterschiede zwischen {% data variables.product.prodname_ghe_cloud %} und {% data variables.product.prodname_ghe_server %} findest Du auf „[Produkte von {% data variables.product.prodname_dotcom %}](/articles/githubs-products)." Um auf {% data variables.product.prodname_enterprise %} zu hochzustufen oder um mit einem Unternehmenskonto einzusteigen, kontaktiere bitte {% data variables.contact.contact_enterprise_sales %}.

### {% data variables.product.prodname_ghe_server %}-Lizenzen verwalten, die mit Deinem Unternehmens-Konto verknüpft sind

{% data reusables.enterprise-accounts.admin-managing-licenses %}

{% endif %}
