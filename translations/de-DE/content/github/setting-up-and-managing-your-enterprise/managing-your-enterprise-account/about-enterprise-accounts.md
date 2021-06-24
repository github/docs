---
title: Informationen zu „Enterprise“ (Unternehmens)-Konten
intro: 'Mit {% data variables.product.prodname_ghe_cloud %} können Sie ein Enterprise Konto erstellen, um die Zusammenarbeit zwischen Ihren Organisationen zu ermöglichen und gleichzeitig den Administratoren einen zentralen Anlaufpunkt für Transparenz und Verwaltung zu bieten.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
redirect_from:
  - /articles/about-github-business-accounts/
  - /articles/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise-account/about-enterprise-accounts
  - /github/setting-up-and-managing-your-enterprise/about-enterprise-accounts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Enterprise
---

### Informationen zu „Enterprise“ (Unternehmens)-Konten

Mit einem Unternehmens-Konto kannst Du mehrere {% data variables.product.prodname_dotcom %}-Organisationen und {% data variables.product.prodname_ghe_server %}-Instanzen verwalten. Ihr Enterprise-Konto benötigt einen Handle, beispielsweise eine Organisation oder ein persönliches Konto auf {% data variables.product.prodname_dotcom %}. Enterprise-Administratoren können Einstellungen und Voreinstellungen verwalten, darunter folgende:

- Mitgliederzugang und -verwaltung (Organisationsmitglieder, externe Mitarbeiter)
- Billing and usage ({% data variables.product.prodname_ghe_server %} instances, user licenses, {% data variables.large_files.product_name_short %} packs{% if currentVersion == "free-pro-team@latest" or ver_gt "enterprise-server@3.0" %}, {% data variables.product.prodname_GH_advanced_security %} usage{% endif %})
- Sicherheit (Single-Sign-On, Zwei-Faktor-Authentifizierung)
- Anfragen und Unterstützen von Bundle-Sharing mit {% data variables.contact.enterprise_support %}

{% data reusables.enterprise-accounts.enterprise-accounts-billing %} For more information about managing your {% data variables.product.prodname_ghe_cloud %} subscription, see "[Viewing the subscription and usage for your enterprise account](/articles/viewing-the-subscription-and-usage-for-your-enterprise-account)." For more information about managing your {% data variables.product.prodname_ghe_server %} billing settings, see "[Managing billing for your enterprise](/admin/overview/managing-billing-for-your-enterprise)."

Weitere Informationen über die Unterschiede zwischen {% data variables.product.prodname_ghe_cloud %} und {% data variables.product.prodname_ghe_server %} findest Du auf „[Produkte von {% data variables.product.prodname_dotcom %}](/articles/githubs-products)." Um auf {% data variables.product.prodname_enterprise %} zu hochzustufen oder um mit einem Unternehmenskonto einzusteigen, kontaktiere bitte {% data variables.contact.contact_enterprise_sales %}.

For more information about member access and management, see "{% if currentVersion == "free-pro-team@latest" %}[Managing users in your enterprise](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise){% elsif currentVersion == "enterprise-ae@latest" or enterpriseServerVersions contains currentVersion %}[Managing users, organizations, and repositories](/admin/user-management){% endif %}."

For more information about managing enterprise accounts using the GraphQL API, see "[Enterprise accounts](/graphql/guides/managing-enterprise-accounts)."

{% if currentVersion == "free-pro-team@latest" %}

### Mit Deinem Enterprise-Konto verknüpfte Organisationen verwalten

Organisationen sind gemeinsame Konten, in denen Personengruppen projektübergreifend zusammenarbeiten können. Inhaber können den Mitgliederzugang zu den Daten und Projekten der Organisation mit komplexen Sicherheits- und Administrationsfunktionen verwalten. Weitere Informationen finden Sie unter „[Informationen zu Organisationen](/articles/about-organizations)“.

Enterprise-Inhaber können Organisationen erstellen und mit dem Enterprise-Konto verknüpfen. Nachdem Du Organisationen zu Deinem Enterprise-Konto hinzugefügt hast, kannst Du die Richtlinien der Organisationen verwalten und erzwingen. Die spezifischen Optionen für das Erzwingen variieren je nach Einstellung. Im Allgemeinen können Sie wählen, ob Sie eine einzige Richtlinie für alle Organisationen in Ihrem Enterprise-Konto erzwingen oder es den Inhabern ermöglichen möchten, Richtlinien auf Organisationsebene festzulegen.

Weitere Informationen finden Sie unter „[Organisationen in Ihrem Enterprise-Konto verwalten](/articles/managing-organizations-in-your-enterprise-account)“ und „[Richtlinien für Organisationen in Ihrem Enterprise-Konto festlegen](/articles/setting-policies-for-organizations-in-your-enterprise-account)“.

{% endif %}

### {% data variables.product.prodname_ghe_server %}-Lizenzen verwalten, die mit Deinem Unternehmens-Konto verknüpft sind

{% data reusables.enterprise-accounts.admin-managing-licenses %}
