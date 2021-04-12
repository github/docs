---
title: Inhaberschaft an einer Organisation übertragen
redirect_from:
  - /articles/needs-polish-how-do-i-give-ownership-to-an-organization-to-someone-else/
  - /articles/transferring-organization-ownership
intro: 'To make someone else the owner of an organization account, you must add a new owner{% if currentVersion == "free-pro-team@latest" %}, ensure that the billing information is updated,{% endif %} and then remove yourself from the account.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - organisationen
  - teams
---

1. Wenn Du das einige Mitglied mit *Inhaber*-Berechtigungen bist, gib einem anderen Organisationsmitglied ebenfalls die Inhaberrolle. Weitere Informationen findest Du unter „[Ernennung eines Organisationsinhabers](/github/setting-up-and-managing-organizations-and-teams/maintaining-ownership-continuity-for-your-organization#appointing-an-organization-owner)."
2. Kontaktiere den neuen Inhaber, um sicherzustellen, dass dieser [auf die Organisationseinstellungen zugreifen kann](/articles/accessing-your-organization-s-settings).
{% if currentVersion == "free-pro-team@latest" %}
3. Wenn Du derzeit in Deiner Organisation für die Zahlung der Nutzung von GitHub verantwortlich bist, bitte den neuen Inhaber oder einen [Abrechnungsmanager](/articles/adding-a-billing-manager-to-your-organization/), die Zahlungsinformationen der Organisation zu aktualisieren. Weitere Informationen finden Sie unter „[Zahlungsmethode hinzufügen oder bearbeiten](/articles/adding-or-editing-a-payment-method)“.

  {% warning %}

  **Warnung**: Wenn Du Dich selbst aus der Organisation löschst, werden die für Dein Organisationskonto hinterlegten Abrechnungsinformationen **nicht** automatisch aktualisiert. Der neue Inhaber oder ein Abrechnungsmanager muss die hinterlegten Abrechnungsinformationen aktualisieren, um Deine Kreditkarten- oder PayPal-Daten zu entfernen.

  {% endwarning %}

{% endif %}
4. [Lösche Dich](/articles/removing-yourself-from-an-organization) aus der Organisation.
