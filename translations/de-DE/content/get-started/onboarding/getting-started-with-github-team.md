---
title: Erste Schritte mit GitHub Team
intro: 'Mit {% data variables.product.prodname_team %} können mehrere Gruppen von Personen projektübergreifend und gleichzeitig in einem Organisationskonto arbeiten.'
versions:
  fpt: '*'
ms.openlocfilehash: 46b5376b72ce30f7c526f693f2adb9253853cf1d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '146139160'
---
Dieser Leitfaden führt dich durch die Einrichtung, Konfiguration und Verwaltung deines {% data variables.product.prodname_team %}-Kontos als Besitzer einer Organisation.

## Teil 1: Konfigurieren deines Kontos auf {% data variables.product.product_location %}
Bei den ersten Schritten mit {% data variables.product.prodname_team %} musst du ein persönliches Konto erstellen oder dich bei deinem vorhandenen Konto auf {% data variables.product.prodname_dotcom %} anmelden, eine Organisation erstellen und die Abrechnung einrichten.

### 1. Informationen zu Organisationen
Organisationen sind gemeinsam genutzte Konten, mit denen Unternehmen und Open-Source-Projekte an vielen Projekten gleichzeitig zusammenarbeiten können. Besitzer und Administratoren können den Zugriff von Mitgliedern auf die Daten und Projekte der Organisation mithilfe ausgereifter Sicherheits- und Verwaltungsfeatures verwalten. Weitere Informationen zu den Features von Organisationen findest du unter [Informationen zu Organisationen](/organizations/collaborating-with-groups-in-organizations/about-organizations#terms-of-service-and-data-protection-for-organizations).

### 2. Erstellen einer Organisation und Registrieren für {% data variables.product.prodname_team %}
Bevor du eine Organisation erstellst, musst du ein persönliches Konto erstellen oder dich bei deinem vorhandenen Konto auf {% data variables.product.product_location %} anmelden. Weitere Informationen findest du unter [Registrieren für ein neues {% data variables.product.prodname_dotcom %}-Konto](/get-started/signing-up-for-github/signing-up-for-a-new-github-account).

Nachdem dein persönliches Konto eingerichtet wurde, kannst du eine Organisation erstellen und einen Plan auswählen. Dort kannst du ein {% data variables.product.prodname_team %}-Abonnement für deine Organisation auswählen. Weitere Informationen findest du unter [Erstellen einer neuen Organisation von Grund auf](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).

### 3. Verwalten der Abrechnung für eine Organisation
Du musst die Abrechnungseinstellungen, die Zahlungsmethode sowie die kostenpflichtigen Features und Produkte für alle deine persönlichen Konten und Organisationen separat verwalten. Über den Kontextwechsel in deinen Einstellungen kannst du zwischen den Einstellungen für die verschiedenen Konten wechseln. Weitere Informationen findest du unter [Wechseln zwischen Einstellungen für deine verschiedenen Konten](/billing/managing-your-github-billing-settings/about-billing-on-github#switching-between-settings-for-your-different-accounts).

Auf der Seite mit den Abrechnungseinstellungen deiner Organisation kannst du Einstellungen wie die Zahlungsmethode, den Abrechnungszyklus und die E-Mail-Adresse für die Abrechnung verwalten oder Informationen wie dein Abonnement, das Abrechnungsdatum und den Zahlungsverlauf anzeigen. Du kannst auch deinen Speicher und GitHub Actions-Minuten anzeigen und aktualisieren. Weitere Informationen zum Verwalten deiner Abrechnungseinstellungen findest du unter [Verwalten deiner {% data variables.product.prodname_dotcom %}-Abrechnungseinstellungen](/billing/managing-your-github-billing-settings).

Nur Organisationsmitglieder mit der Rolle *Besitzer* oder *Abrechnungsmanager* können auf die Abrechnungseinstellungen für deine Organisation zugreifen oder diese ändern. Abrechnungsmanager*innen sind Benutzer*innen, die die Abrechnungseinstellungen für deine Organisation verwalten und keine bezahlte Lizenz im Abonnement deiner Organisation verwenden. Weitere Informationen zum Hinzufügen von Abrechnungsmanager*innen zu deiner Organisation findest du unter [Hinzufügen von Abrechnungsmanager*innen zu deiner Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization).


## Teil 2: Hinzufügen von Mitgliedern und Einrichten von Teams
Nachdem du deine Organisation erstellt hast, kannst du Mitglieder einladen und Berechtigungen und Rollen festlegen. Du kannst auch verschiedene Teamebenen erstellen und angepasste Berechtigungsstufen für die Repositorys, Projektboards und Apps deiner Organisation festlegen.

### 1. Verwalten von Mitgliedern deiner Organisation
{% data reusables.getting-started.managing-org-members %}

### 2. Organisationsberechtigungen und -rollen
{% data reusables.getting-started.org-permissions-and-roles %}

### 3. Informationen zu Teams und deren Erstellung
{% data reusables.getting-started.about-and-creating-teams %}
### 4. Verwalten von Teameinstellungen
{% data reusables.getting-started.managing-team-settings %}

### 5. Gewähren des Zugriffs auf Repositorys, Projektboards und Apps für Personen und Teams
{% data reusables.getting-started.giving-access-to-repositories-projects-apps %}
## Teil 3: Verwalten der Sicherheit für deine Organisation
Du kannst die Sicherheit deiner Organisation verbessern, indem du Mitgliedern deiner Organisation die zweistufige Authentifizierung empfiehlst bzw. diese dazu verpflichtest, Sicherheitsfeatures konfigurierst sowie das Überwachungsprotokoll und die Integrationen deiner Organisation überprüfst.

### 1. Erzwingen der zweistufigen Authentifizierung
{% data reusables.getting-started.requiring-2fa %}

### 2. Konfigurieren von Sicherheitsfeatures für deine Organisation
{% data reusables.getting-started.configuring-security-features %}

### 3. Überprüfen des Überwachungsprotokolls und der Integrationen deiner Organisation
{% data reusables.getting-started.reviewing-org-audit-log-and-integrations %}

## Teil 4: Festlegen von Richtlinien auf Organisationsebene
### 1. Verwalten von Organisationsrichtlinien
{% data reusables.getting-started.managing-org-policies %}
### 2. Verwalten von Repositoryänderungen
{% data reusables.getting-started.managing-repo-changes %}
### 3. Verwenden von Communityintegritätsdateien und Moderationstools auf Organisationsebene
{% data reusables.getting-started.using-org-community-files-and-moderation-tools %}
## Teil 5: Anpassen und Automatisieren deiner Arbeit auf {% data variables.product.product_name %}

{% data reusables.getting-started.customizing-and-automating %}
### 1. Verwenden von {% data variables.product.prodname_marketplace %}
{% data reusables.getting-started.marketplace %}
### 2. Verwenden der {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}-API
{% data reusables.getting-started.api %}

### 3. Erstellen von {% data variables.product.prodname_actions %}-Aktionen
{% data reusables.getting-started.actions %}

### 4. Veröffentlichen und Verwalten von {% data variables.product.prodname_registry %} 
{% data reusables.getting-started.packages %}

## Teil 6: Mitwirken in der {% data variables.product.prodname_dotcom %}-Community
{% data reusables.getting-started.participating-in-community %}
### 1. Beitragen zu Open-Source-Projekten
{% data reusables.getting-started.open-source-projects %}

### 2. Interagieren mit dem {% data variables.product.prodname_gcf %}
{% data reusables.support.ask-and-answer-forum %}

### 3. Lesen über {% data variables.product.prodname_team %} auf {% data variables.product.prodname_docs %}
Du kannst die Dokumentation zu den mit {% data variables.product.prodname_team %} verfügbaren Features lesen. Weitere Informationen findest du unter [Informationen zu Versionen von {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs).

### 4. Lernen mit {% data variables.product.prodname_learning %}
{% data reusables.getting-started.learning %}

### 5. Unterstützen der Open-Source-Community
{% data reusables.getting-started.sponsors %}

### 6. Kontaktieren von {% data variables.contact.github_support %}
{% data reusables.getting-started.contact-support %}
## Weitere Informationsquellen

- [Erste Schritte mit deinem GitHub-Konto](/get-started/onboarding/getting-started-with-your-github-account)
