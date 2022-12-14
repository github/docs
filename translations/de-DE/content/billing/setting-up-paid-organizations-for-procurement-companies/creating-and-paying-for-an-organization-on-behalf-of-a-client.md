---
title: Eine Organisation im Namen eines Kunden gründen und bezahlen
intro: 'Du kannst im Namen von Kund*innen eine {% data variables.product.prodname_dotcom %}-Organisation erstellen und bezahlen.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/creating-and-paying-for-an-organization-on-behalf-of-a-client
  - /articles/creating-and-paying-for-an-organization-on-behalf-of-a-client
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-up-paid-organizations-for-procurement-companies/creating-and-paying-for-an-organization-on-behalf-of-a-client
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - User account
  - Organizations
  - Upgrades
shortTitle: On behalf of a client
ms.openlocfilehash: 6c0cdaa09d3e2bf476b6314c38d369ec89840aad
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085595'
---
## Requirements (Anforderungen)

Bevor du startest, stelle sicher, dass Dir Folgendes vorliegt:
- Der {% data variables.product.prodname_dotcom %}-Benutzername des Kunden, der Inhaber der Organisation werden soll, die du erstellst
- Der Name, den dein Kunde für die Organisation verwenden möchte
- Die E-Mail-Adresse, an die die Quittungen gesendet werden sollen
- Das [Produkt](/articles/github-s-products), das dein Kunde kaufen möchte
- Die Anzahl der [bezahlten Arbeitsplätze](/articles/about-per-user-pricing/), die dein Kunde für die Organisation kaufen möchte

## Schritt 1: Erstellen deines persönlichen {% data variables.product.prodname_dotcom %}-Kontos

Du wirst dein persönliches Konto benutzen, um die Organisation einzurichten. Du musst Dich bei diesem Konto anmelden, um in Zukunft das Abonnement deines Kunden zu verlängern oder zu ändern.

Wenn du bereits ein persönliches Konto auf {% data variables.product.prodname_dotcom %} hast, fahre mit [Schritt 2](#step-2-create-the-organization) fort.

1. Gehe zur Seite [GitHub beitreten](https://github.com/join).
2. Gib unter „Erstellen deines persönlichen Kontos“ deinen Benutzernamen, deine E-Mail-Adresse und dein Kennwort ein, und klicke dann auf **Ein Konto erstellen**.
![Eintragsformular zum Erstellen eines persönlichen Kontos](/assets/images/help/billing/billing_create_your_personal_account_form.png)
3. Wähle {% data variables.product.prodname_free_user %} für dein persönliches Konto aus.
4. Klicke auf **Registrieren beenden**.

## Schritt 2: Die Organisation erstellen

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.organizations %} {% data reusables.organizations.new-organization %}
3. Klicke unter „Plan auswählen“ auf **{% data variables.product.prodname_free_team %} auswählen**. Im nächsten Schritt wirst du die Organisation heraufstufen.
{% data reusables.organizations.organization-name %}
5. Gib unter „Contact email“ (Kontakt-E-Mail-Adresse) eine Kontakt-E-Mail-Adresse für deinen Kunden ein.
  ![Feld „Kontakt-E-Mail-Adresse“](/assets/images/help/organizations/contact-email-field.png) {% data reusables.dotcom_billing.owned_by_business %}
8. Klicken Sie auf **Weiter**.

## Schritt 3: Die Organisation auf ein jährlich bezahltes Abonnement hochstufen


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.dotcom_billing.upgrade_org %} {% data reusables.dotcom_billing.choose_org_plan %} (Im nächsten Schritt kannst du der Organisation weitere Arbeitsplätze hinzufügen.)
6. Wähle unter „Upgrade-Übersicht“ **Jährlich bezahlen** aus, um jährlich für die Organisation zu zahlen.
![Optionsfeld für jährliche Abrechnung](/assets/images/help/billing/choose-annual-billing-org-resellers.png) {% data reusables.dotcom_billing.enter-payment-info %} {% data reusables.dotcom_billing.finish_upgrade %}

## Schritt 4: Die Anzahl an bezahlten Benutzern in der Organisation hochstufen

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %} {% data reusables.dotcom_billing.add-seats %} {% data reusables.dotcom_billing.number-of-seats %} {% data reusables.dotcom_billing.confirm-add-seats %}

## Schritt 5: Einladen von Kund*innen zum Beitritt in deine Organisation

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.invite_member_from_people_tab %}
5. Gib den {% data variables.product.prodname_dotcom %}-Benutzernamen deines Kunden ein, und drücke die **Eingabetaste**.
![Feld zum Eingeben des Benutzernamens des Kunden](/assets/images/help/organizations/org-invite-modal.png)
6. Wähle die Rolle *Besitzer* für deinen Client aus, und klicke dann auf **Einladung senden**.
![Optionsfeld „Besitzer“ und Schaltfläche „Einladung senden“](/assets/images/help/organizations/add-owner-send-invite-reseller.png)
7. Dein Kunde erhält per E-Mail eine Einladung zur Organisation. Er muss die Einladung annehmen, bevor du mit dem nächsten Schritt fortfahren kannst.

## Schritt 6: Die Organisationsinhaberschaft an deinen Kunden übertragen

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %}
4. Bestätige, dass dein Kunde unter den Mitgliedern der Organisation aufgeführt ist und ihm die Rolle *Besitzer* zugewiesen ist.
5. Klicke rechts neben dem Benutzernamen im {% octicon "gear" aria-label="The Settings gear" %}-Dropdownmenü auf **Verwalten**.
  ![Link zur Zugriffsverwaltung](/assets/images/help/organizations/member-manage-access.png)
6. Klicke links auf **Aus Organisation entfernen**.
  ![Schaltfläche „Aus Organisation entfernen“](/assets/images/help/organizations/remove-from-org-button.png)
7. Bestätige deine Wahl, und klicke auf **Mitglieder entfernen**.
  ![Bestätigungsschaltfläche „Mitglieder entfernen“](/assets/images/help/organizations/confirm-remove-from-org.png)

## Nächste Schritte

1. Wende dich an deinen Kunden, und bitte ihn, [dich der Organisation als Abrechnungsmanager hinzuzufügen](/articles/adding-a-billing-manager-to-your-organization). Du musst Abrechnungsmanager für die Organisation sein, um in Zukunft das Abonnement deines Kunden verlängern oder ändern zu können.
2. Wenn du die Kreditkarte deiner Organisation aus der Organisation entfernen möchtest, damit sie nicht mehr belastet wird, wende dich an {% data variables.contact.contact_support %}.
3. Wenn es Zeit ist, das kostenpflichtige Abonnement deines Kunden zu verlängern, lies [Verlängern der kostenpflichtigen Organisation deines Kunden](/articles/renewing-your-client-s-paid-organization).

## Weitere Informationsquellen

- [Informationen zu Organisationen für Beschaffungsunternehmen](/articles/about-organizations-for-procurement-companies)
- [Durchführen eines Upgrades oder Downgrades für die kostenpflichtige Organisation deiner Kund*innen](/articles/upgrading-or-downgrading-your-client-s-paid-organization)
- [Verlängern der kostenpflichtigen Organisation deiner Kund*innen](/articles/renewing-your-client-s-paid-organization)
