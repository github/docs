---
title: Informationen zu „Enterprise“ (Unternehmens)-Konten
intro: 'Mit {{ site.data.variables.product.prodname_ghe_cloud }} kannst Du ein Enterprise-Konto erstellen, um die Zusammenarbeit zwischen Deinen Organisationen zu ermöglichen und gleichzeitig den Administratoren einen zentralen Anlaufpunkt für Transparenz und Verwaltung zu bieten.'
product: '{{ site.data.reusables.gated-features.enterprise-accounts }}'
redirect_from:
  - /articles/about-github-business-accounts/
  - /articles/about-enterprise-accounts
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Informationen zu „Enterprise“ (Unternehmens)-Konten

Mit einem Unternehmens-Konto kannst Du mehrere {{ site.data.variables.product.prodname_dotcom }}-Organisationen und {{ site.data.variables.product.prodname_ghe_server }}-Instanzen verwalten. Dein Enterprise-Konto benötigt einen Anker, wie zum Beispiel eine Organisation oder ein persönliches Konto auf {{ site.data.variables.product.prodname_dotcom }}. Enterprise-Administratoren können Einstellungen und Voreinstellungen verwalten, darunter folgende:

- Mitgliederzugang und -verwaltung (Organisationsmitglieder, externe Mitarbeiter)
- Abrechnung und Nutzung ({{ site.data.variables.product.prodname_ghe_server }}-Instanzen, Benutzerlizenzen, {{ site.data.variables.large_files.product_name_short }}-Pakete)
- Sicherheit (Single-Sign-On, Zwei-Faktor-Authentifizierung)
- Anfragen und Support-Paket-Einreichung bei {{ site.data.variables.contact.enterprise_support }}

{{ site.data.reusables.enterprise-accounts.enterprise-accounts-billing }}

Weitere Informationen über die Unterschiede zwischen {{ site.data.variables.product.prodname_ghe_cloud }} und {{ site.data.variables.product.prodname_ghe_server }} findest Du auf „[Produkte von {{ site.data.variables.product.prodname_dotcom }}](/articles/githubs-products)." Um auf {{ site.data.variables.product.prodname_enterprise }} zu hochzustufen oder um mit einem Unternehmenskonto einzusteigen, kontaktiere bitte {{ site.data.variables.contact.contact_enterprise_sales }}.

Weitere Informationen zu Mitgliederzugang und -verwaltung findest Du unter „[Benutzer in Deinem Enterprise-Konto verwalten](/articles/managing-users-in-your-enterprise-account).“

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
For more information about managing enterprise accounts using the GraphQL API, see "[Enterprise accounts](/v4/guides/managing-enterprise-accounts)."
{% endif %}

### Mit Deinem Enterprise-Konto verknüpfte Organisationen verwalten

Organisationen sind gemeinsame Konten, in denen Personengruppen projektübergreifend zusammenarbeiten können. Inhaber können den Mitgliederzugang zu den Daten und Projekten der Organisation mit komplexen Sicherheits- und Administrationsfunktionen verwalten. Weitere Informationen finden Sie unter „[Informationen zu Organisationen](/articles/about-organizations)“.

Enterprise-Inhaber können Organisationen erstellen und mit dem Enterprise-Konto verknüpfen. Nachdem Du Organisationen zu Deinem Enterprise-Konto hinzugefügt hast, kannst Du die Richtlinien der Organisationen verwalten und erzwingen. Die spezifischen Optionen für das Erzwingen variieren je nach Einstellung. Im Allgemeinen kannst Du wählen, ob Du eine einzige Richtlinie für alle Organisationen in Deinem Enterprise-Konto erzwingen willst, oder ob Du es den Inhabern ermöglichen möchtest, Richtlinien auf Organisationsebene festzulegen.

Weitere Informationen findest Du unter „[Organisationen in Deinem Enterprise-Konto verwalten](/articles/managing-organizations-in-your-enterprise-account)“ und „[Richtlinien für Organisationen in Deinem Enterprise-Konto festlegen](/articles/setting-policies-for-organizations-in-your-enterprise-account).“

### {{ site.data.variables.product.prodname_ghe_server }}-Lizenzen verwalten, die mit Deinem Unternehmens-Konto verknüpft sind

{{ site.data.reusables.enterprise-accounts.admin-managing-licenses }}
