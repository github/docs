---
title: Inhaberschaft an einer Organisation übertragen
intro: 'Wenn Du Deine Inhaberschaft an einem Organisationskonto auf eine andere Person übertragen möchtest, musst Du einen neuen Inhaber hinzufügen{% ifversion fpt %}, sicherstellen, dass die Abrechnungsinformationen aktualisiert werden{% endif %}, und Dich dann selbst aus dem Konto entfernen.'
redirect_from:
  - /articles/needs-polish-how-do-i-give-ownership-to-an-organization-to-someone-else/
  - /articles/transferring-organization-ownership
  - /github/setting-up-and-managing-organizations-and-teams/transferring-organization-ownership
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Organizations
  - Teams
shortTitle: Transfer ownership
---

{% ifversion fpt %}
{% note %}

**Note:** {% data reusables.enterprise-accounts.invite-organization %}

{% endnote %}{% endif %}

1. Wenn Du das einige Mitglied mit *Inhaber*-Berechtigungen bist, gib einem anderen Organisationsmitglied ebenfalls die Inhaberrolle. Weitere Informationen findest Du unter „[Ernennung eines Organisationsinhabers](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization#appointing-an-organization-owner)."
2. Kontaktiere den neuen Inhaber, um sicherzustellen, dass dieser [auf die Organisationseinstellungen zugreifen kann](/articles/accessing-your-organization-s-settings).
{% ifversion fpt %}
3. Wenn Du derzeit in Deiner Organisation für die Zahlung der Nutzung von GitHub verantwortlich bist, bitte den neuen Inhaber oder einen [Abrechnungsmanager](/articles/adding-a-billing-manager-to-your-organization/), die Zahlungsinformationen der Organisation zu aktualisieren. Weitere Informationen finden Sie unter „[Zahlungsmethode hinzufügen oder bearbeiten](/articles/adding-or-editing-a-payment-method)“.

  {% warning %}

  **Warnung**: Wenn Du Dich selbst aus der Organisation löschst, werden die für Dein Organisationskonto hinterlegten Abrechnungsinformationen **nicht** automatisch aktualisiert. Der neue Inhaber oder ein Abrechnungsmanager muss die hinterlegten Abrechnungsinformationen aktualisieren, um Deine Kreditkarten- oder PayPal-Daten zu entfernen.

  {% endwarning %}

{% endif %}
4. [Lösche Dich](/articles/removing-yourself-from-an-organization) aus der Organisation.
