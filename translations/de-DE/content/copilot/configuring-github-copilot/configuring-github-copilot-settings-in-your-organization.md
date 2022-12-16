---
title: Konfigurieren der GitHub Copilot-Einstellungen in deiner Organisation
intro: 'Du kannst {% data variables.product.prodname_copilot %} in deiner Organisation konfigurieren, um beispielsweise Personen und Teams Zugriff zu erteilen oder diesen zu widerrufen und zu entscheiden, ob Vorschläge blockiert werden sollen, die mit öffentlichem Code identisch sind.'
product: '{% data reusables.gated-features.copilot %}'
miniTocMaxHeadingLevel: 3
permissions: 'Organization owners and members with admin permissions can configure {% data variables.product.prodname_copilot %} in their organization.'
versions:
  ghec: '*'
topics:
  - Copilot
shortTitle: Organization settings
ms.openlocfilehash: 345d0a48aa3f48e453fd8455027f683ee78a7640
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193360'
---
## Informationen zu {% data variables.product.prodname_copilot %}-Einstellungen in deiner Organisation

{% data reusables.copilot.about-copilot %}

Um die Verwendung von {% data variables.product.prodname_copilot %} in deiner Organisation konfigurieren zu können, muss sich die Organisation im Besitz eines {% data variables.product.prodname_ghe_cloud %}-Kontos befinden, und ein*e Unternehmensadministrator*in muss zuerst {% data variables.product.prodname_copilot_business_short %} für die Organisation aktivieren. Organisationsadministrator*innen können dann die Arbeitsplatzzuweisung innerhalb der Organisation verwalten. 

Abhängig von den auf Unternehmensebene konfigurierten Richtlinieneinstellungen kann ein*e Organisationsadministrator*in auch festlegen, ob {% data variables.product.prodname_copilot %}-Vorschläge zugelassen oder blockiert werden sollen, die mit öffentlichem Code identisch sind. Weitere Informationen findest du unter [Erzwingen von Richtlinien für {% data variables.product.prodname_copilot %} in deinem Unternehmen](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-copilot-in-your-enterprise).

## Konfigurieren des Zugriffs auf {% data variables.product.prodname_copilot %} in deiner Organisation

Sobald ein*e {% data variables.product.prodname_ghe_cloud %}-Administrator*in ein {% data variables.product.prodname_copilot_business_short %}-Abonnement in deiner Organisation aktiviert, können Personen und Teams in der Organisation {% data variables.product.prodname_copilot %}-Arbeitsplätze zugewiesen werden.

### Erteilen des Zugriffs auf {% data variables.product.prodname_copilot %} für alle aktuellen und zukünftigen Benutzer*innen in der Organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Klicke im Abschnitt „Codeplanung und Automatisierung“ auf der Randleiste auf **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}** und dann auf **Zugriff**.
1. Wähle unter „Benutzerberechtigungen“ die Option **Für alle Mitglieder zulassen** aus, um {% data variables.product.prodname_copilot %} für alle aktuellen und zukünftigen Benutzer*innen in der Organisation zu aktivieren.

   ![Screenshot: Benutzerberechtigungen für {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/allow-all-members.png)

1. Klicke im Dialogfeld „Arbeitsplatzzuweisung bestätigen“ auf **Bestätigen**, um zu bestätigen, dass du {% data variables.product.prodname_copilot %} für alle aktuellen und zukünftigen Benutzer*innen in der Organisation zu aktivieren möchtest.

   ![Screenshot: Dialogfeld zum Bestätigen der Arbeitsplatzzuweisung](/assets/images/help/copilot/confirm-seat-assignment.png)

1. Klicke auf **Speichern**, um die Änderungen zu speichern.

   ![Screenshot: Schaltfläche „Speichern“ in den Benutzerberechtigungen für {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/user-permissions-save.png)

### Erteilen des Zugriffs auf {% data variables.product.prodname_copilot %} für bestimmte Benutzer*innen in der Organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Klicke im Abschnitt „Codeplanung und Automatisierung“ auf der Randleiste auf **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}** und dann auf **Zugriff**.
1. Wähle unter „Benutzerberechtigungen“ die Option **Ausgewählte Teams/Benutzer*innen** aus, und klicke auf **Speichern**, um {% data variables.product.prodname_copilot %} für ausgewählte Teams oder Benutzer*innen in der Organisation zu aktivieren.

   ![Screenshot: {% data variables.product.prodname_copilot %}-Berechtigungen für ausgewählte Benutzer*innen oder Teams](/assets/images/help/copilot/selected-users-teams.png)

1. Wenn der Benutzerzugriff zuvor auf **Für alle Mitglieder zulassen** festgelegt war, musst du im Dialogfeld „Arbeitsplatzzuweisung bestätigen“ auswählen, wie der Zugriff nun zugewiesen werden soll.
    - Du kannst **Alles zurücksetzen** auswählen, um die Zuweisung aller Mitglieder aufzuheben und diejenigen auszuwählen, die Zugriff erhalten sollen.
    - Wenn du **Alle Benutzer*innen beibehalten** auswählst, werden die Zugriffsberechtigungen aller Mitglieder zunächst beibehalten, und du kannst auswählen, wer keinen Zugriff haben soll.

      ![Screenshot: Dialogfeld zum Bestätigen der Arbeitsplatzzuweisung](/assets/images/help/copilot/confirm-seat-assignment-selected.png)

1. Wenn du **Alles zurücksetzen** ausgewählt hast, kannst du auf **Benutzer*innen hinzufügen** oder **Teams hinzufügen** klicken, um einzelne Benutzer*innen oder ganze Teams hinzuzufügen.

   ![Screenshot der Schaltflächen „Benutzer*innen hinzufügen“ und „Teams hinzufügen“](/assets/images/help/copilot/add-people-add-teams.png)

1. Wenn du **Benutzer*innen hinzufügen** ausgewählt hast, kannst du im Dialogfeld „GitHub Copilot-Zugriff für ausgewählte Mitglieder von <ORGANISATION>“ entweder nach einzelnen Mitgliedern suchen oder diese per Massenupload mithilfe einer CSV-Datei hinzufügen.
 
   ![Screenshot des Dialogfelds „Zugriff für ausgewählte Mitglieder aktivieren“](/assets/images/help/copilot/enable-access-for-selected-members.png)

    - Um nach Mitgliedern zu suchen, gib den Benutzernamen, den vollständigen Namen oder die E-Mail-Adresse des Mitglieds in die Suchleiste ein.
    - Um Mitglieder per Massenupload hinzuzufügen, klicke auf **CSV-Datei hochladen**, und lade dann eine CSV-Datei hoch, die entweder den Benutzernamen oder die E-Mail-Adresse jedes Mitglieds enthält, die hinzugefügt werden sollen. Diese Werte müssen durch ein Komma getrennt sein.

        {% warning %}

      **Warnung:** Wenn du eine CSV-Datei hochlädst, durchsucht {% data variables.product.prodname_copilot %} alle Benutzer*innen auf {% data variables.product.prodname_dotcom_the_website %} nach Übereinstimmungen. Wenn die CSV-Datei Benutzer*innen enthält, die keine Mitglieder deiner Organisation sind, werden diese eingeladen, der Organisation beizutreten, wenn du auf **XX Mitglieder hinzufügen** klickst.

      {% endwarning %}

    - Überprüfe die Liste der Benutzer*innen, die aus deiner CSV-Datei generiert wurden. Klicke auf **XX Mitglied(er) zur Zugriffsliste hinzufügen**, um zu bestätigen, dass den aufgeführten Mitgliedern der Zugriff erteilt werden soll, oder auf **Abbrechen**, um die Liste abzulehnen.

     ![Screenshot der Ergebnisse der CSV-Liste](/assets/images/help/copilot/csv-results.png)

1. Wenn du **Teams hinzufügen** ausgewählt hast, gib im Dialogfeld „GitHub Copilot-Zugriff für ausgewählte Teams in <ORGANISATION>“ einen Teamnamen in die Suchleiste ein, wähle das Team aus, das du hinzufügen möchtest, und klicke auf **Team aus der Liste auswählen**.

   ![Screenshot des Dialogfelds „Zugriff für ausgewählte Teams aktivieren“](/assets/images/help/copilot/add-teams.png)

1. Wenn du **Alle Benutzer*innen beibehalten** ausgewählt hast, überprüfe die vollständige Liste der Organisationsmitglieder, und wähle die Personen aus, deren {% data variables.product.prodname_copilot %}-Zugriff du widerrufen möchtest.

   ![Screenshot der Liste „Alle Benutzer*innen beibehalten“](/assets/images/help/copilot/access-removal-list.png)

1. Klicke auf die Dropdownliste **XX Mitglieder ausgewählt** und dann auf **Entfernen**.

   ![Screenshot der Schaltfläche „Zugriff entfernen“](/assets/images/help/copilot/remove-access.png)

### Deaktivieren des Zugriffs auf {% data variables.product.prodname_copilot %} für die gesamte Organisation

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Klicke im Abschnitt „Codeplanung und Automatisierung“ auf der Randleiste auf **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}** und dann auf **Zugriff**.
1. Wähle unter „Benutzerberechtigungen“ die Option **Deaktivieren** aus, um {% data variables.product.prodname_copilot %} für alle Benutzer*innen in deiner Organisation zu deaktivieren.

   ![Screenshot: Benutzerberechtigungen für {% data variables.product.prodname_copilot %} deaktiviert](/assets/images/help/copilot/disable-access.png)

1. Klicke auf **Speichern**, um die Änderungen zu speichern.
   
   ![Screenshot: Schaltfläche „Speichern“ in den Benutzerberechtigungen für {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/save-disabled.png)

### Entziehen des Zugriffs auf {% data variables.product.prodname_copilot %} für bestimmte Benutzer*innen in der Organisation

Wenn ein*e Benutzer*in aus einer oder mehreren Organisationen entfernt wird, in denen diesem oder dieser ein {% data variables.product.prodname_copilot %}-Arbeitsplatz zugewiesen war, wird diese Zuweisung automatisch aufgehoben. Alternativ kannst du die Zuweisung eines {% data variables.product.prodname_copilot %}-Arbeitsplatzes auch aufheben, ohne die Mitgliedschaft zu entziehen. Diese Änderungen werden ab Beginn des nächsten Abrechnungszeitraums wirksam.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Klicke im Abschnitt „Codeplanung und Automatisierung“ auf der Randleiste auf **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}** und dann auf **Zugriff**.
1. Wähle unter „Benutzerberechtigungen“ die Option **Ausgewählte Teams/Benutzer*innen** aus, und klicke dann auf **Speichern**. 

   ![Screenshot: {% data variables.product.prodname_copilot %}-Berechtigungen für ausgewählte Benutzer*innen oder Teams](/assets/images/help/copilot/selected-users-teams.png)

    - Wähle im Popupdialogfeld „Arbeitsplatzzuweisung bestätigen“ die Option **Alle Benutzer*innen beibehalten** aus.

      ![Screenshot: Dialogfeld zum Bestätigen der Arbeitsplatzzuweisung](/assets/images/help/copilot/confirm-seat-assignment-selected.png)
  
1. Gib in der Suchleiste unter „Zugriff verwalten“ den Benutzernamen, den vollständigen Namen oder die E-Mail-Adresse des Mitglieds ein.

   ![Screenshot: Suchleiste](/assets/images/help/copilot/manage-access-search.png)

1. Klicke auf **Entfernen**, um ein Mitglied aus der Liste der Benutzer*innen mit Zugriff auf {% data variables.product.prodname_copilot %} zu entfernen.

   ![Screenshot der Schaltfläche „Zugriff entfernen“](/assets/images/help/copilot/remove-access-button.png)

## Konfigurieren von Richtlinien für den Vorschlagsabgleich für {% data variables.product.prodname_copilot %} in deiner Organisation

{% data variables.product.prodname_copilot %} enthält einen Filter, der Codevorschläge erkennt, die öffentlichem Code auf {% data variables.product.prodname_dotcom %} entsprechen. Wenn der Filter aktiviert ist, vergleicht {% data variables.product.prodname_copilot %} Codevorschläge einschließlich des umgebenden Codes von ca. 150 Zeichen mit öffentlichem Code auf {% data variables.product.prodname_dotcom %}. Wenn es eine Übereinstimmung oder Fast-Übereinstimmung gibt, wird der Vorschlag nicht angezeigt.

Wenn der oder die Unternehmensadministrator*in **Keine Richtlinie (jede Organisation selbst entscheiden lassen)** für den Vorschlagsabgleich auf Unternehmensebene ausgewählt hat, kannst du für deine Organisation eine Richtlinie für den Vorschlagsabgleich festlegen. Wenn einem Organisationsmitglied Arbeitsplätze von mehreren Organisationen mit unterschiedlichen Richtlinien für den Vorschlagsabgleich für dasselbe Unternehmen zugewiesen werden, verwendet {% data variables.product.prodname_copilot %} die strikteste Richtlinie.


{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
1. Klicke im Abschnitt „Codeplanung und Automatisierung“ auf der Randleiste auf **{% octicon "copilot" aria-label="The copilot icon" %} {% data variables.product.prodname_copilot_short %}** und dann auf **Richtlinien**.
1. Wähle in der Dropdownliste „Mit öffentlichem Code identische Vorschläge“ die Option **Zulassen** oder **Blockieren** aus, um Vorschläge zuzulassen oder zu blockieren, die mit öffentlichem Code identisch sind.

   ![Screenshot der Dropdownliste „Mit öffentlichem Code identische Vorschläge“](/assets/images/help/copilot/duplication-detection-org-policy.png)

## Weitere Informationsquellen

- [Datenschutzerklärung für {% data variables.product.prodname_copilot_for_business %}](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement)
