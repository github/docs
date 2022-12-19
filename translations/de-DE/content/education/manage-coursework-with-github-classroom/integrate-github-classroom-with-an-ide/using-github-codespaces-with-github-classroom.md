---
title: Verwenden von GitHub Codespaces mit GitHub Classroom
shortTitle: Using Codespaces with GitHub Classroom
product: '{% data reusables.gated-features.codespaces-classroom-articles %}'
intro: 'Du kannst {% data variables.product.prodname_github_codespaces %} als bevorzugten Editor in deinen Arbeitsaufträgen konfigurieren, um den Kursteilnehmern Zugriff auf eine browserbasierte Visual Studio Code-Umgebung mit 1-Klick-Setup zu gewähren.'
versions:
  fpt: '*'
permissions: 'Organization owners who are admins for a classroom can enable {% data variables.product.prodname_github_codespaces %} for their organization and integrate {% data variables.product.prodname_github_codespaces %} as the supported editor for an assignment. {% data reusables.classroom.classroom-admins-link %}'
ms.openlocfilehash: 832ab470d13cc741bc4a71e77840c99da5ff3de6
ms.sourcegitcommit: a35d85531445980b5f04d3fc70180a29dad37f89
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/01/2022
ms.locfileid: '148189913'
---
## Informationen zu {% data variables.product.prodname_github_codespaces %}

{% data variables.product.prodname_github_codespaces %} ist eine sofort einsetzbare, cloudbasierte Entwicklungsumgebung, die einen Container nutzt, um dir gängige Sprachen, Tools und Dienstprogramme für die Entwicklung zur Verfügung zu stellen. {% data variables.product.prodname_github_codespaces %} ist außerdem konfigurierbar, sodass du eine angepasste Entwicklungsumgebung erstellen kannst, die für alle Benutzer deines Projekts gleich ist. Weitere Informationen findest du unter [Übersicht über {% data variables.product.prodname_github_codespaces %}](/codespaces/overview).

Sobald {% data variables.product.prodname_github_codespaces %} in einer Organisation oder einem Unternehmen aktiviert ist, können Benutzer einen Codespace aus einem beliebigen Branch oder Commit in einem Organisations- oder Unternehmensrepository erstellen und mit der Entwicklung unter Verwendung von cloudbasierten Computeressourcen beginnen. Du kannst über den Browser oder lokal mit Visual Studio Code eine Verbindung mit einem Codespace herstellen. 

{% data reusables.codespaces.links-to-get-started %}

Das Festlegen von {% data variables.product.prodname_github_codespaces %} als bevorzugtem Editor für GitHub Classroom-Aufgaben ist sowohl für Kursteilnehmer als auch für Lehrkräfte von Vorteil. {% data variables.product.prodname_github_codespaces %} ist eine gute Option für Kursteilnehmer, die Leihgeräte verwenden oder keinen Zugang zu einer lokalen IDE haben, da jeder Codespace cloudbasiert ist und keine lokale Einrichtung erfordert. Kursteilnehmer können einen Codespace für ein Aufgabenrepository in Visual Studio Code direkt in ihrem Browser starten und sofort mit der Entwicklung beginnen, ohne dass eine weitere Konfiguration erforderlich ist.  

Für Aufgaben mit komplexen Setupumgebungen können Lehrkräfte die Konfiguration des Entwicklungscontainers für die Codespaces eines Repositorys anpassen. Dadurch wird sichergestellt, dass ein Kursteilnehmer, der einen Codespace erstellt, diesen automatisch mit der von der Lehrkraft konfigurierten Entwicklungsumgebung öffnet. Weitere Informationen zu Entwicklungscontainern findest du unter [Einführung in Entwicklungscontainer](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers).

{% note %}

**Hinweis**: Einzelne Codespaces werden automatisch gelöscht, wenn sie beendet und für einen längeren Zeitraum nicht verwendet werden. Weitere Informationen findest du unter [Konfigurieren des automatischen Löschens deiner Codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces).

{% endnote %}

{% data reusables.education.student-codespaces-benefit %}

{% note %}

**Hinweis:** {% data reusables.education.note-on-student-codespaces-usage %} 

{% endnote %}

## Informationen zum {% data variables.product.prodname_codespaces %} Education-Vorteil für verifizierte Lehrkräfte

Der {% data variables.product.prodname_codespaces %} Education-Vorteil bietet verifizierten Lehrkräften ein kostenloses monatliches Kontingent von {% data variables.product.prodname_github_codespaces %}-Stunden zur Verwendung in {% data variables.product.prodname_classroom %}. Das kostenlose Kontingent reicht schätzungsweise für einen Kurs mit 50 Teilnehmern und 5 Aufgaben pro Monat auf einem 2-Kern-Rechner, auf dem pro Teilnehmer 1 Codespace gespeichert ist.

{% data reusables.classroom.free-limited-codespaces-for-verified-teachers-beta-note %}

Um als verifizierte Lehrkraft anerkannt zu werden, musst du für einen Dozenten- oder Lehrervorteil qualifiziert sein. Weitere Informationen findest du unter [Antrag bei {% data variables.product.prodname_global_campus %} als Lehrkraft](/education/explore-the-benefits-of-teaching-and-learning-with-github-education/github-global-campus-for-teachers/apply-to-github-global-campus-as-a-teacher). 

Nachdem du als verifizierte Lehrkraft bestätigt wurdest, besuche den [{% data variables.product.prodname_global_campus %} für Lehrkräfte](https://education.github.com/globalcampus/teacher), um die Organisation auf GitHub Team zu aktualisieren. Weitere Informationen findest du unter [GitHub-Produkte](/get-started/learning-about-github/githubs-products#github-team). 

Wenn du Anspruch auf den {% data variables.product.prodname_codespaces %} Education-Vorteil hast, fügt GitHub bei der Aktivierung von {% data variables.product.prodname_github_codespaces %} in {% data variables.product.prodname_classroom %} für deine Organisation automatisch eine Codespacerichtlinie hinzu, die die Computertypen für alle Codespaces in der Organisation auf Computer mit 2 Kernen beschränkt. Das hilft dir, dein kostenloses {% data variables.product.prodname_github_codespaces %}-Kontingent optimal zu nutzen. Du kannst diese Richtlinien jedoch in den Einstellungen deiner Organisation ändern oder entfernen. Weitere Informationen findest du unter [Einschränken des Zugriffs auf Computertypen](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types).

Wenn sich der {% data variables.product.prodname_codespaces %} Education-Vorteil nicht mehr in der Betaphase befindet, wird deiner Organisation die zusätzliche Nutzung in Rechnung gestellt, wenn das kostenlose Kontingent für {% data variables.product.prodname_github_codespaces %} überschritten wird. Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

## Aktivieren von {% data variables.product.prodname_codespaces %} für deine Organisation

Organisationen, die {% data variables.product.prodname_team %} verwenden, können {% data variables.product.prodname_github_codespaces %} gemeinsam mit {% data variables.product.prodname_classroom %} nutzen. Wenn du Anspruch auf den {% data variables.product.prodname_codespaces %} Education-Vorteil hast, musst du {% data variables.product.prodname_github_codespaces %} über {% data variables.product.prodname_classroom %} aktivieren, anstatt es direkt in deinen Organisationseinstellungen zu aktivieren. Andernfalls wird deiner Organisation die gesamte Nutzung von {% data variables.product.prodname_github_codespaces %} direkt in Rechnung gestellt.

### Aktivieren von Codespaces für eine Organisation beim Erstellen eines neuen Kursraums
{% data reusables.classroom.sign-into-github-classroom %}
1. Klicke auf **Neuer Kursraum**.
   
  ![Schaltfläche „Neuer Kursraum löschen“](/assets/images/help/classroom/click-new-classroom-button.png)

1. Klicke in der Liste der Organisationen auf die Organisation, die du für deinen Kursraum verwenden möchtest. Organisationen, die für {% data variables.product.prodname_github_codespaces %} qualifiziert sind, erhalten einen entsprechenden Hinweis. Optional kannst du eine neue Organisation erstellen. Weitere Informationen findest du unter [Erstellen einer neuen Organisation von Grund auf](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch).

  ![Auswählen einer Organisation für den Kursraum mit Anspruch auf Codespaces](/assets/images/help/classroom/org-view-codespaces-eligibility.png)

1. Klicke auf der Seite „Kursraum benennen“ unter „{% data variables.product.prodname_codespaces %} in deinem Kursraum“ auf **Aktivieren**. Beachte, dass {% data variables.product.prodname_github_codespaces %} dadurch für alle Repositorys und Benutzer in der Organisation aktiviert wird.

  ![Aktivieren von Codespaces für Organisationen auf der Seite „Basiseinstellungen für Kursraum festlegen“](/assets/images/help/classroom/setup-classroom-enable-codespaces-button.png)

1. Wenn du bereit bist, den neuen Kursraum zu erstellen, klicke auf **Kursraum erstellen**.

### Aktivieren von Codespaces für eine Organisation mit einem vorhandenen Kursraum

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. Klicke unter „{% data variables.product.prodname_github_codespaces %}“ auf **Aktivieren**. Dadurch wird {% data variables.product.prodname_github_codespaces %} für alle Repositorys und Benutzer in der Organisation aktiviert. Außerdem wird eine neue Codespacerichtlinie hinzugefügt, die die Computertypen für alle Codespaces in der Organisation auf Computer mit 2 Kernen beschränkt. 
  
  ![Aktivieren von Codespaces für eine Organisation in den Einstellungen eines vorhandenen Kursraums](/assets/images/help/classroom/classroom-settings-enable-codespaces-button.png)

Du kannst die gleichen Methoden wie oben verwenden, um {% data variables.product.prodname_github_codespaces %} für dein Unternehmen zu deaktivieren. Beachte, dass {% data variables.product.prodname_github_codespaces %} dadurch für alle Benutzer und Repositorys in der Organisation deaktiviert wird. 

## Konfigurieren einer Aufgabe zur Verwendung von {% data variables.product.prodname_codespaces %}
Um den Kursteilnehmern {% data variables.product.prodname_github_codespaces %} für eine Aufgabe zur Verfügung zu stellen, kannst du {% data variables.product.prodname_github_codespaces %} als unterstützten Editor für die Aufgabe auswählen. Wähle beim Erstellen einer neuen Aufgabe auf der Seite „Startcode hinzufügen und optionale Online-IDE auswählen“ unter „Unterstützten Editor hinzufügen“ die Option **{% data variables.product.prodname_github_codespaces %}** aus dem Dropdownmenü aus. 

![Auswählen von Codespaces als unterstützter Editor für eine Aufgabe](/assets/images/help/classroom/select-supported-editor-including-codespaces.png)

Wenn du ein Vorlagenrepository für eine Aufgabe verwendest, kannst du einen Entwicklungscontainer im Repository definieren, um die Tools und Runtimes anzupassen, die den Kursteilnehmern zur Verfügung stehen, wenn sie einen Codespace starten, um an der Aufgabe zu arbeiten. Wenn du keinen Entwicklungscontainer definierst, verwendet {% data variables.product.prodname_github_codespaces %} eine Standardkonfiguration, die viele der gängigen Tools enthält, die deine Kursteilnehmer möglicherweise für die Entwicklung benötigen. Weitere Informationen zur Definition eines Entwicklungscontainers findest du unter [Hinzufügen einer Entwicklungscontainerkonfiguration zu deinem Repository](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces).

## Starten einer Aufgabe zur Verwendung von {% data variables.product.prodname_github_codespaces %}

Wenn ein Kursteilnehmer eine Aufgabe öffnet, enthält die README-Datei des Repositorys eine Empfehlung der Lehrkraft, welche IDE für die Arbeit verwendet werden sollte.

![Screenshot des Codespaces-Hinweises in der README-Datei zum Aufgabenrepository für Kursteilnehmer](/assets/images/help/classroom/student-codespaces-readme-link.png)

Kursteilnehmer können einen neuen oder vorhandenen Codespace starten, indem sie in der Infodatei auf die Schaltfläche **In GitHub Codespace öffnen** klicken oder auf der Hauptseite des Zuordnungsrepositorys auf die Schaltfläche **{% octicon "code" aria-label="The code icon" %} Code** klicken und dann die Registerkarte **Codespaces** auswählen. Auf der Registerkarte **Codespaces** können sie einen vorhandenen Codespace auswählen oder einen neuen erstellen. Weitere Informationen findest du unter [Erstellen eines Codespaces für ein Repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).

![Starten eines neuen Codespace im Aufgabenrepository](/assets/images/help/classroom/student-launch-new-codespace.png)

Lehrkräfte können den Codespace jedes Kursteilnehmers für eine Aufgabe auf der Seite mit der Aufgabenübersicht einsehen. Du kannst auf das Symbol für Codespaces rechts neben jeder Kursteilnehmerzeile klicken, um den Codespace zu starten. 

![Aufgabenübersicht für die Lehrkraft mit den Codespaces der Kursteilnehmer](/assets/images/help/classroom/teacher-assignment-view-with-codespaces.png)

Wenn du dich über einen Browser mit einem Codespace verbindest, wird das automatische Speichern automatisch aktiviert. Wenn du Änderungen am Repository speichern möchtest, musst du die Änderungen committen und sie an einen Remotebranch pushen. Wenn dein Codespace 30 Minuten lang ohne Interaktion ausgeführt wird, kommt es standardmäßig zu einem Timeout, und der Codespace wird angehalten. Hierbei werden deine Daten zum Zeitpunkt der letzten Änderung beibehalten. Weitere Informationen zum Lebenszyklus eines Codespace findest du unter [Der Codespace-Lebenszyklus](/codespaces/getting-started/the-codespace-lifecycle).
