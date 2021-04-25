---
title: Eine Organisation im Namen eines Kunden erstellen und bezahlen
intro: 'Sie können im Namen eines Kunden eine {% data variables.product.prodname_dotcom %}-Organisation erstellen und bezahlen.'
redirect_from:
  - /articles/creating-and-paying-for-an-organization-on-behalf-of-a-client
versions:
  free-pro-team: '*'
topics:
  - Abrechnung
---

### Anforderungen

Bevor Du startest, stelle sicher, dass Dir Folgendes vorliegt:
- Der {% data variables.product.prodname_dotcom %}-Benutzername des Kunden, der Inhaber der Organisation werden soll, die Du erstellst
- Der Name, den Dein Kunde für die Organisation verwenden möchte
- Die E-Mail-Adresse, an die die Quittungen gesendet werden sollen
- Das [Produkt](/articles/github-s-products), das Dein Kunde erwerben möchte
- Die Anzahl an [bezahlten Benutzern](/articles/about-per-user-pricing/), die Du für Deinen Kunden für die Organisation erwerben sollst

### Schritt 1: Erstelle Dein persönliches {% data variables.product.prodname_dotcom %}-Konto

Du wirst Dein persönliches Konto benutzen, um die Organisation einzurichten. Du musst Dich bei diesem Konto anmelden, um in Zukunft das Abonnement Deines Kunden zu verlängern oder zu ändern.

Wenn Du bereits ein persönliches {% data variables.product.prodname_dotcom %}-Benutzerkonto hast, fahre gleich mit [Schritt 2](#step-2-create-the-organization) fort.

1. Rufe die Seite [Join GitHub](https://github.com/join) (GitHub beitreten) auf.
2. Gib unter „Create your personal account“ (Dein persönliches Konto erstellen) Deinen Benutzernamen, Deine E-Mail-Adresse und ein Passwort ein, und klicke dann auf **Create an account** (Ein Konto erstellen). ![Eintragsformular zum Erstellen eines persönlichen Kontos](/assets/images/help/billing/billing_create_your_personal_account_form.png)
3. Wähle {% data variables.product.prodname_free_user %} für Dein persönliches Konto aus.
4. Klicke auf **Finish sign up** (Registrierung fertigstellen).

### Schritt 2: Die Organisation erstellen

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.organizations %}
{% data reusables.organizations.new-organization %}
3. Klicke unter „Choose a plan“ (Plan auswählen) auf **Choose {% data variables.product.prodname_free_team %}** (auswählen). Im nächsten Schritt wirst Du die Organisation heraufstufen.
{% data reusables.organizations.organization-name %}
5. Gib unter „Contact email“ (Kontakt-E-Mail-Adresse) eine Kontakt-E-Mail-Adresse für Deinen Kunden ein. ![Feld für Kontakt-E-Mail-Adresse](/assets/images/help/organizations/contact-email-field.png)
{% data reusables.dotcom_billing.owned_by_business %}
8. Klicke auf **Next** (Weiter).

### Schritt 3: Die Organisation auf ein jährlich bezahltes Abonnement hochstufen

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.dotcom_billing.upgrade_org %}
{% data reusables.dotcom_billing.choose_org_plan %} (Im nächsten Schritt kannst Du weitere Benutzer in die Organisation aufnehmen.)
6. Wähle unter „Upgrade summary“ (Übersicht der Aktualisierung) **Pay yearly** (Jährlich bezahlen) aus, um jährlich für die Organisation zu zahlen. ![Optionsfeld für jährliche Abrechnung](/assets/images/help/billing/choose-annual-billing-org-resellers.png)
{% data reusables.dotcom_billing.show-plan-details %}
{% data reusables.dotcom_billing.add-payment-method %}
1. Gib unter „Pay with“ (Zahlung mit) Deine Kreditkartendaten ein. ![Formular zum Eingeben der Kreditkartendaten](/assets/images/help/billing/settings_billing_upgrade_with_credit_card.png)
1. Klicke auf **Update credit card** (Kreditkarte aktualisieren).
{% data reusables.dotcom_billing.finish_upgrade %}

### Schritt 4: Die Anzahl an bezahlten Benutzern in der Organisation hochstufen

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.billing %}
{% data reusables.dotcom_billing.add-seats %}
{% data reusables.dotcom_billing.number-of-seats %}
{% data reusables.dotcom_billing.confirm-add-seats %}

### Schritt 5: Deinen Kunden zum Beitritt in die Organisation einladen

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
{% data reusables.organizations.invite_member_from_people_tab %}
5. Gib den {% data variables.product.prodname_dotcom %}-Benutzernamen Deines Kunden ein, und drücke die **Eingabetaste**. ![Feld zum Eingeben des Benutzernamens des Kunden](/assets/images/help/organizations/org-invite-modal.png)
6. Wähle die *Inhaber*-Rolle für Deinen Kunden aus, und klicke dann auf **Send invitation** (Einladung versenden). ![Optionsfeld „Owner“ (Inhaber) und Schaltfläche „Send invitation“ (Einladung versenden)](/assets/images/help/organizations/add-owner-send-invite-reseller.png)
7. Dein Kunde erhält per E-Mail eine Einladung zur Organisation. Er muss die Einladung annehmen, bevor Du mit dem nächsten Schritt fortfahren kannst.

### Schritt 6: Die Organisationsinhaberschaft an Deinen Kunden übertragen

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.people %}
4. Bestätige, dass Dein Kunde unter den Mitgliedern der Organisation aufgeführt ist und ihm die *Inhaber*-Rolle zugewiesen ist.
5. Klicke rechts neben dem Benutzernamen im {% octicon "gear" aria-label="The Settings gear" %}-Dropdownmenü auf **Manage** (Verwalten). ![Link zur Zugriffsverwaltung](/assets/images/help/organizations/member-manage-access.png)
6. Klicke links auf **Remove from organization** (Aus Organisation entfernen). ![Schaltfläche „Remove from organization“ (Aus Organisation entfernen)](/assets/images/help/organizations/remove-from-org-button.png)
7. Bestätige Deine Auswahl, und klicke auf **Remove members** (Mitglieder entfernen). ![Schaltfläche „Remove members“ (Mitglieder entfernen) zum Bestätigen der Löschung von Mitgliedern](/assets/images/help/organizations/confirm-remove-from-org.png)

### Nächste Schritte:

1. Bitte Deinen Kunden darum, Dich [als Abrechnungsmanager zur Organisation hinzuzufügen](/articles/adding-a-billing-manager-to-your-organization). Du musst Abrechnungsmanager für die Organisation sein, um in Zukunft das Abonnement Deines Kunden verlängern oder ändern zu können.
2. Wenn Sie die Kreditkarte Ihrer Organisation aus der Organisation entfernen möchten, damit sie nicht mehr belastet wird, wenden Sie sich an {% data variables.contact.contact_support %}.
3. Informationen zum Verlängern des bezahlten Abonnements Deines Kunden findest Du unter „[Eine bezahlte Organisation Deines Kunden erneuern](/articles/renewing-your-client-s-paid-organization).“

### Weiterführende Informationen

- „[Informationen zu Organisationen für Beschaffungsunternehmen](/articles/about-organizations-for-procurement-companies)“
- „[Eine bezahlte Organisation Ihres Kunden hoch- oder herabstufen](/articles/upgrading-or-downgrading-your-client-s-paid-organization)“
- „[Eine bezahlte Organisation Deines Kunden erneuern](/articles/renewing-your-client-s-paid-organization)“
