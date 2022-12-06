---
title: E-Mail-Adresse für die Abrechnung festlegen
intro: 'Die E-Mail-Adresse deines Kontos für die Abrechnung ist die Adresse, an die {% data variables.product.product_name %} Quittungen und andere Benachrichtigungen zur Abrechnung sendet.'
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/setting-your-billing-email
  - /articles/setting-your-personal-account-s-billing-email
  - /articles/can-i-change-what-email-address-received-my-github-receipt
  - '/articles/how-do-i-change-the-billing-email,setting-your-billing-email'
  - /articles/setting-your-organization-s-billing-email
  - /articles/setting-your-billing-email
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-your-github-billing-settings/setting-your-billing-email
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Organizations
  - User account
shortTitle: Billing email
ms.openlocfilehash: 35b340a697bafd0c7e3047983496b71048cbe0ac
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145085639'
---
## E-Mail-Adresse für die Abrechnung für dein persönliches Konto festlegen

{% data variables.product.product_name %} sendet Quittungen und andere Benachrichtigungen zur Abrechnung an die primäre E-Mail-Adresse deines persönlichen Kontos.

Deine primäre E-Mail-Adresse ist die erste E-Mail-Adresse, die in den E-Mail-Einstellungen deines Kontos aufgeführt ist.
Die primäre E-Mail-Adresse deines Kontos wird auch als E-Mail-Adresse für die Abrechnung verwendet.

Wenn du deine E-Mail-Adresse für die Abrechnung ändern möchtest, lies [Ändern deiner primären E-Mail-Adresse](/articles/changing-your-primary-email-address).

## E-Mail-Adresse für die Abrechnung für deiner Organisation festlegen

{% data variables.product.product_name %} sendet Quittungen und andere Benachrichtigungen zur Abrechnung an die für deine Organisation festgelegte E-Mail-Adresse für die Abrechnung. Die E-Mail-Adresse muss nicht für das Organisationskonto eindeutig sein.

{% data reusables.dotcom_billing.org-billing-perms %}

{% data reusables.organizations.billing-settings %}
1. Klicke unter „Abrechnungsverwaltung“ rechts neben der E-Mail-Adresse für die Abrechnung auf **Bearbeiten**.
  ![Aktuelle E-Mail-Adressen für die Abrechnung](/assets/images/help/billing/billing-change-email.png)
2. Gib eine gültige E-Mail-Adresse ein, und klicke dann auf **Aktualisieren**.
  ![Ändern der modalen E-Mail-Adresse der Abrechnung](/assets/images/help/billing/billing-change-email-modal.png)

## Verwalten zusätzlicher Empfänger*innen für die E-Mail-Adresse für die Abrechnung deiner Organisation

Wenn es in deiner Organisation Benutzer*innen gibt, die Abrechnungsberichte erhalten möchten, kannst du ihre E-Mail-Adressen als E-Mail-Empfänger*innen für die Abrechnung hinzufügen. Dieses Feature ist nur für Organisationen verfügbar, die nicht von einem Unternehmen verwaltet werden.

{% data reusables.dotcom_billing.org-billing-perms %}

### Hinzufügen von Empfänger*innen für Abrechnungsbenachrichtigungen

{% data reusables.organizations.billing-settings %}
1. Klicke unter „Abrechnungsverwaltung“ rechts neben „E-Mail-Empfänger“ auf **Hinzufügen**.
  ![Hinzufügen eines Empfängers](/assets/images/help/billing/billing-add-email-recipient.png)
1. Gib die Empfänger-E-Mail-Adresse ein, und klicke dann auf **Hinzufügen**.
  ![Hinzufügen von modalen Empfänger*innen](/assets/images/help/billing/billing-add-email-recipient-modal.png)

### Ändern von primären Empfänger*innen für Abrechnungsbenachrichtigungen

Eine Adresse muss immer als primäre*r Empfänger*in festgelegt werden. Die Adresse mit dieser Bezeichnung kann erst entfernt werden, wenn ein*e neue*r primäre*r Empfänger*in ausgewählt ist.

{% data reusables.organizations.billing-settings %}
1. Suche unter „Abrechnungsverwaltung“ die E-Mail-Adresse, die du als primäre*n Empfänger*in festlegen möchtest.
1. Klicke rechts neben der E-Mail-Adresse auf das Dropdownmenü „Bearbeiten“ und dann auf **Als Primär markieren**.
  ![Markieren von primären Empfänger*innen](/assets/images/help/billing/billing-change-primary-email-recipient.png)

### Entfernen von Empfänger*innen aus Abrechnungsbenachrichtigungen

{% data reusables.organizations.billing-settings %}
1. Suche unter „E-Mail-Empfänger“ die E-Mail-Adresse, die du entfernen möchtest.
1. Klicke für den entsprechenden Eintrag in der Liste auf **Bearbeiten**.
  ![Bearbeiten von Empfänger*innen](/assets/images/help/billing/billing-edit-email-recipient.png)
1. Verwende rechts neben der E-Mail-Adresse das Dropdownmenü „Bearbeiten“, und klicke auf **Entfernen**.
  ![Entfernen von Empfänger*innen](/assets/images/help/billing/billing-remove-email-recipient.png)
1. Überprüfe die Bestätigungsaufforderung, und klicke dann auf **Entfernen**.

{% ifversion ghec %}
## Festlegen der E-Mail-Adresse für die Abrechnung für dein Unternehmen

Die für die Abrechnung verwendete E-Mail-Adresse deines Unternehmens ist die Adresse, an die {% data variables.product.product_name %} Belege und andere Benachrichtigungen zu deiner Abrechnung sendet. Die E-Mail-Adresse muss nicht für das Unternehmenskonto eindeutig sein.

Nur Unternehmensmitglieder mit der Rolle „Besitzer“ oder „Abrechnungsmanager“ können auf Abrechnungseinstellungen für dein Unternehmen zugreifen oder diese ändern. Weitere Informationen findest du unter [Verwalten von Benutzer*innen in deinem Unternehmen](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise).

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Klicke auf **Abrechnungs-E-Mails**. 
2. Klicke unter „E-Mail-Empfänger“ rechts neben der Abrechnungs-E-Mail-Adresse auf **Bearbeiten**.
  ![Screenshot der aktuellen Abrechnungs-E-Mail mit hervorgehobener Schaltfläche „Bearbeiten“](/assets/images/help/billing/billing-change-email.png)
2. Gib eine gültige E-Mail-Adresse ein, und klicke dann auf **Aktualisieren**.
  ![Screenshot des modalen Fensters zum Bearbeiten der E-Mail-Adresse für die Abrechnung mit einer eingegebenen Beispiel-E-Mail-Adresse](/assets/images/help/billing/billing-change-email-modal.png)

## Verwalten zusätzlicher Empfänger*innen für die Abrechnungs-E-Mail deines Unternehmens

Wenn es in deiner Organisation Benutzer*innen gibt, die Abrechnungsberichte erhalten möchten, kannst du ihre E-Mail-Adressen als E-Mail-Empfänger*innen für die Abrechnung hinzufügen. 

Nur Unternehmensmitglieder mit der Rolle „Besitzer“ oder „Abrechnungsmanager“ können auf Abrechnungseinstellungen für dein Unternehmen zugreifen oder diese ändern. Weitere Informationen findest du unter [Verwalten von Benutzer*innen in deinem Unternehmen](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise).

### Hinzufügen von Empfänger*innen für Abrechnungsbenachrichtigungen

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Klicke auf **Abrechnungs-E-Mails**. 
2. Klicke unter „E-Mail-Empfänger“ rechts neben der Abrechnungs-E-Mail-Adresse auf **Hinzufügen**.
   ![Screenshot der aktuellen Abrechnungs-E-Mail mit hervorgehobener Schaltfläche „Hinzufügen“](/assets/images/help/billing/billing-add-email-recipient.png)
3. Gib die Empfänger-E-Mail-Adresse ein, und klicke dann auf **Hinzufügen**.
   ![Screenshot des modalen Fensters zum Hinzufügen der E-Mail-Adresse für die Abrechnung ohne einer eingegebenen Beispiel-E-Mail-Adresse](/assets/images/help/billing/billing-add-email-recipient-modal.png)

### Entfernen von Empfänger*innen aus Abrechnungsbenachrichtigungen

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.billing-tab %}
1. Klicke auf **Abrechnungs-E-Mails**. 
2. Suche unter „E-Mail-Empfänger“ die E-Mail-Adresse, die du entfernen möchtest.
3. Klicke für den entsprechenden Eintrag in der Liste auf **Bearbeiten**.
   ![Screenshot der Empfänger-E-Mail-Adresse mit hervorgehobener Schaltfläche „Bearbeiten“](/assets/images/help/billing/billing-edit-email-recipient.png)
4. Verwende rechts neben der E-Mail-Adresse das Dropdownmenü „Bearbeiten“, und klicke auf **Entfernen**.
   ![Screenshot der Empfänger-E-Mail-Adresse mit hervorgehobener Schaltfläche „Entfernen“](/assets/images/help/billing/billing-remove-email-recipient.png)
5. Überprüfe die Bestätigungsaufforderung, und klicke dann auf **Entfernen**.
{% endif %}
