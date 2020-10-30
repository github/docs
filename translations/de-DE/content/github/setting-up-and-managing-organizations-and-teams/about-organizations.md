---
title: Informationen zu Organisationen
intro: Organisationen sind gemeinsame Konten, in denen Unternehmen und Open-Source-Projekte übergreifend über mehrere Projekte gleichzeitig zusammenarbeiten können. Inhaber und Administratoren können den Mitgliederzugriff auf Daten und Projekte der Organisation mit komplexen Sicherheits- und Administrationsfunktionen verwalten.
redirect_from:
  - /articles/about-organizations
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.organizations.organizations_include %}

{% if currentVersion == "free-pro-team@latest" %}
### Organisationen und Enterprise-Konten

Mit Enterprise-Konten können Inhaber Richtlinien und Abrechnungen für mehrere {% data variables.product.prodname_dotcom_the_website %}-Organisationen zentral verwalten.

Bei Organisationen, die einem Enterprise-Konto angehören, wird die Abrechnung auf der Ebene des Enterprise-Kontos verwaltet, und die Abrechnungseinstellungen sind auf der Organisationsebene nicht verfügbar. Enterprise-Inhaber können Richtlinien für alle Organisationen im Enterprise-Konto festlegen oder den Organisationsinhabern erlauben, die Richtlinien auf Organisationsebene festzulegen. Organisationsinhaber können die für Deine Organisation erzwungenen Einstellungen auf der Ebene des Enterprise-Kontos nicht ändern. Wenn Du Fragen zu einer Richtlinie oder einer Einstellung für Deine Organisation hast, wende Dich an den Inhaber Deines Enterprise-Kontos.

{% data reusables.gated-features.enterprise-accounts %}

{% data reusables.organizations.org-ownership-recommendation %} Weitere Informationen findest Du unter „[Die Inhaber-Kontinuität für Deine Organisation aufrechterhalten](/github/setting-up-and-managing-organizations-and-teams/maintaining-ownership-continuity-for-your-organization)."

### Nutzungsbedingungen und Datenschutz für Organisationen

Eine Entität, beispielsweise ein Unternehmen, eine gemeinnützige Organisation oder eine Gruppe, kann die Standardnutzungsbedingungen oder die Unternehmensnutzungsbedingungen für ihre Organisation akzeptieren. Weitere Informationen findest Du unter „[Auf Unternehmensnutzungsbedingungen umstellen](/articles/upgrading-to-the-corporate-terms-of-service).“

{% endif %}
