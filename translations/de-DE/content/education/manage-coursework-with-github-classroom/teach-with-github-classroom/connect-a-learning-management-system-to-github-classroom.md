---
title: Verknüpfen eines Lernverwaltungssystems mit GitHub Classroom
intro: Du kannst ein LTI-kompatibles Lernmanagementsystem (LMS) so konfigurieren, dass es eine Verbindung mit {% data variables.product.prodname_classroom %} herstellt, damit du eine Liste für dein Klassenzimmer importieren kannst.
versions:
  fpt: '*'
permissions: Organization owners who are admins for a classroom can connect learning management systems to {% data variables.product.prodname_classroom %}. {% data reusables.classroom.classroom-admins-link %}
redirect_from:
- /education/manage-coursework-with-github-classroom/configuring-a-learning-management-system-for-github-classroom
- /education/manage-coursework-with-github-classroom/connect-to-lms
- /education/manage-coursework-with-github-classroom/generate-lms-credentials
- /education/manage-coursework-with-github-classroom/setup-canvas
- /education/manage-coursework-with-github-classroom/setup-generic-lms
- /education/manage-coursework-with-github-classroom/setup-moodle
- /education/manage-coursework-with-github-classroom/connect-a-learning-management-system-to-github-classroom
shortTitle: Connect an LMS
ms.openlocfilehash: e97a90ee822e779ecdf6ca94b7d35c29ddab5e5e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: "147717829"
---
## Informationen zur Konfiguration deines Lernverwaltungssystems

Du kannst ein Lernverwaltungssystem (Learning Management System, LMS) mit {% data variables.product.prodname_classroom %} verknüpfen, und {% data variables.product.prodname_classroom %} kann eine Liste von Kursteilnehmerbezeichnern aus dem LMS importieren. Um dein LMS mit {% data variables.product.prodname_classroom %} zu verknüpfen, musst du Konfigurationsanmeldeinformationen für {% data variables.product.prodname_classroom %} in deinem LMS eingeben.

## Voraussetzungen

Um ein LMS für die Verknüpfung mit {% data variables.product.prodname_classroom %} zu konfigurieren, musst du zuerst einen Kursraum erstellen. Weitere Informationen findest du unter [Verwalten von Klassenzimmern](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-classroom).

## Unterstützte LMS

{% note %}

**Hinweis:** {% data variables.product.prodname_classroom %} unterstützte bisher das Importieren von Kurslistendaten aus Lernverwaltungssystemen, die die LTI-Versionen 1.0 und 1.1 (Learning Tools Interoperability) implementieren. Am 30. Juni 2022 hat das Instructional Management System (IMS) Global Learning Consortium die [Unterstützung für die LTI-Versionen 1.0 und 1.1 eingestellt](https://www.imsglobal.org/lti-security-announcement-and-deprecation-schedule). Zum Schutz vertraulicher Kursteilnehmerdaten hat {% data variables.product.company_short %} den Import von Kurslistendaten aus LTI-konformen Lernverwaltungssystemen vorübergehend deaktiviert.<br><br>

An der Unterstützung für die neueste LTI-Version, [LTI 1.3](https://www.imsglobal.org/activity/learning-tools-interoperability), wird derzeit gearbeitet, sie wird in Kürze in {% data variables.product.prodname_classroom %} zur Verfügung stehen.

{% endnote %}

Es handelt sich dabei um ein Branchenstandardprotokoll, und die Verwendung der LTI durch GitHub Classroom ist durch das IMS Global Learning Consortium (Instructional Management System) zertifiziert. Weitere Informationen findest du in den Artikeln zur [Lerntoolinteroperabilität](https://www.imsglobal.org/activity/learning-tools-interoperability) und dem [IMS Global Learning Consortium](http://www.imsglobal.org/aboutims.html) auf der Website des IMS Global Learning Consortium.

{% data variables.product.company_short %} hat den Import von Kurslistendaten aus den folgenden LMS in {% data variables.product.prodname_classroom %} getestet.

- Google Classroom


## Herstellen einer Verbindung mit Google Classroom

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-students %}
1. Wenn dein Kursraum bereits über eine Liste verfügt, kannst du sie entweder aktualisieren oder löschen und eine neue Liste erstellen.
    - Weitere Informationen zum Löschen und Erstellen einer Liste findest du unter [Löschen einer Liste für einen Kursraum](/education/manage-coursework-with-github-classroom/manage-classrooms#deleting-a-roster-for-a-classroom) und [Erstellen einer Liste für deinen Kursraum](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom).
    - Weitere Informationen zum Aktualisieren einer Liste findest du unter [Hinzufügen von Kursteilnehmer*innen zur Liste für deinen Kursraum](/education/manage-coursework-with-github-classroom/manage-classrooms#adding-students-to-the-roster-for-your-classroom).
1. Klicke in der Liste der Lernverwaltungssysteme auf „Google Classroom“.
  ![Google Classroom](/assets/images/help/classroom/classroom-settings-click-google-classroom.png)
1. Melde dich bei Google an, und wähle dann die Classroom-Instanz aus, mit der du dich verbinden möchtest.


## Herstellen einer Verbindung mit Canvas, Moodle, Sakai und anderen Lernverwaltungssystemen

Die Verbindung mit anderen Lernverwaltungssystemen ist vorübergehend nicht verfügbar, da {% data variables.product.company_short %} auf LTI-Version 1.3 aktualisiert wird. Weitere Informationen findest du unter [Unterstützte LMS](#supported-lmses).

In der Zwischenzeit kannst du die Liste für deinen Kurs manuell eingeben. Weitere Informationen zum manuellen Importieren der Kursliste aus deinem LMS in {% data variables.product.prodname_classroom %} findest du unter [Verwalten von Kursräumen](/education/manage-coursework-with-github-classroom/manage-classrooms#creating-a-roster-for-your-classroom).

## Trennen des LMS

{% data reusables.classroom.sign-into-github-classroom %} {% data reusables.classroom.click-classroom-in-list %} {% data reusables.classroom.click-settings %}
1. Klicke unter „Mit einem Lernverwaltungssystem (LMS) verknüpfen“ auf **Verbindungseinstellungen**.
  ![Link „Verbindungseinstellungen“ in den Kursraumeinstellungen](/assets/images/help/classroom/classroom-settings-click-connection-settings.png)
1. Klicke unter „Verknüpfung mit deinem Lernverwaltungssystem löschen“ auf **Verknüpfung mit Lernverwaltungssystem löschen**.
  ![Schaltfläche „Verknüpfung mit Lernverwaltungssystem löschen“ in den Verbindungseinstellungen für den Kursraum](/assets/images/help/classroom/classroom-settings-click-disconnect-from-your-lms-button.png)
