---
title: Anpassen des Profils deiner Organisation
intro: 'Du kannst Informationen zu deiner Organisation freigeben, indem du das Profil deiner Organisation anpasst.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
topics:
  - Organizations
shortTitle: Customize organization profile
ms.openlocfilehash: 66f234427f6e47213578e8f906e123d98c07a092
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147447930'
---
## Informationen zur Profilseite deiner Organisation

{% ifversion org-profile-pin-private %} Du kannst die Übersichtsseite deiner Organisation anpassen, um eine README-Datei und angeheftete Repositorys anzuzeigen, die für öffentliche Benutzer*innen oder Mitglieder der Organisation bestimmt sind.

![Abbildung der öffentlichen Profilseite einer Organisation](/assets/images/help/organizations/public_profile.png)

Bei {% data variables.product.prodname_dotcom %} angemeldete Mitglieder deiner Organisation können für die Ansicht der README-Datei und der angehefteten Repositorys `member` oder `public` auswählen, wenn sie die Profilseite deiner Organisation besuchen. 

![Abbildung der Kontextumschaltung für die Ansicht der öffentlichen Profilseite einer Organisation](/assets/images/help/organizations/profile_view_switcher_public.png)

Bei Vorhandensein einer auf Mitglieder beschränkten README-Datei oder auf Mitglieder beschränkter angehefteter Repositorys wird die Ansicht standardmäßig auf `member` festgelegt. Anderenfalls lautet die Einstellung `public`.

![Abbildung einer auf Mitglieder beschränkten Profilseite einer Organisation](/assets/images/help/organizations/member_only_profile.png)

Benutzer*innen, die keine Mitglieder deiner Organisation sind, wird die Ansicht in der Einstellung `public` angezeigt.

### Angeheftete Repositorys

Du kannst Benutzern mühelos Zugriff auf wichtige oder häufig verwendete Repositorys gewähren, indem du bis zu sechs Repositorys für öffentliche Benutzer und sechs Repositorys für Mitglieder der Organisation auswählst. Sobald du Repositorys deinem Organisationsprofil anheftest, wird der Abschnitt „Angeheftet“ oberhalb des Abschnitts „Repositorys“ der Profilseite angezeigt.

Nur Organisationsbesitzer können Repositorys anheften. Weitere Informationen findest du unter [Anheften von Repositorys an das Profil deiner Organisation](#pinning-repositories-to-your-organizations-profile).

### INFODATEIEN zum Organisationsprofil

{% endif %}

Du kannst Informationen über das mögliche Engagement in deiner Organisation weitergeben, indem du sowohl für öffentliche Benutzer als auch für Mitglieder der Organisation eine Organisationsprofil-INFODATEI erstellst. {% data variables.product.prodname_dotcom %} zeigt deine Organisationsprofil-INFODATEI in der Registerkarte „Übersicht“ deiner Organisation an.

Du kannst auswählen, welche Informationen in deine Organisationsprofil-INFODATEI aufgenommen werden sollen. Hier sind einige Beispiele für hilfreiche Informationen.

- Ein „Info“-Abschnitt, der deine Organisation beschreibt
- Anleitungen zum Abrufen von Hilfe in der Organisation

Du kannst mithilfe von {% data variables.product.company_short %}-Markdown Text formatieren und Emojis, Bilder und GIFs in die README-Datei deines Organisationsprofils einfügen. Weitere Informationen findest du unter [Erste Schritte beim Schreiben und Formatieren auf {% data variables.product.prodname_dotcom %}](/github/writing-on-github/getting-started-with-writing-and-formatting-on-github).

## Hinzufügen einer öffentlichen Organisationsprofil-INFODATEI

1. Wenn deine Organisation noch kein öffentliches `.github`-Repository besitzt, erstelle ein öffentliches `.github`-Repository.
2. Erstelle im `.github`-Repository deiner Organisation eine `README.md`-Datei im `profile`-Ordner.
3. Committe die Änderungen an die `README.md`-Datei. Der Inhalt der `README.md`-Datei wird im öffentlichen Profil deiner Organisation angezeigt.

   ![Abbildung der öffentlichen INFODATEI einer Organisation](/assets/images/help/organizations/org_public_readme.png)

{% ifversion org-profile-pin-private %}

## Hinzufügen einer nur für Mitglieder bestimmten Organisationsprofil-INFODATEI

1. Wenn deine Organisation noch kein `.github-private`-Repository besitzt, erstelle ein privates Repository namens `.github-private`. 
2. Erstelle im `.github-private`-Repository deiner Organisation eine `README.md`-Datei im `profile`-Ordner.
3. Committe die Änderungen an die `README.md`-Datei. Der Inhalt von `README.md` wird in der Mitgliedsansicht des Profils deiner Organisation angezeigt.

   ![Abbildung der auf Mitglieder beschränkten README-Datei einer Organisation](/assets/images/help/organizations/org_member_readme.png)

## Anheften von Repositorys an das Profil deiner Organisation

Du kannst Repositorys, die du besonders hervorheben möchtest, z. B. solche, die häufig genutzt werden, der Profilseite deiner Organisation anheften. Um auszuwählen, welche Repositorys dem Profil deiner Organisation angeheftet werden sollen, musst du ein*e Organisationsinhaber*in oder -administrator*in sein.

1. Navigiere zur Profilseite deiner Organisation.
2. Wähle in der rechten Randleiste der Seite im {% octicon "eye" aria-label="The eye octicon" %}-„Anzeigen als“-Link die Profilansicht **Öffentlich** oder **Mitglied** im Dropdownmenü aus.

   ![Abbildung des Organisationsprofilansicht-Dropdownmenüs](/assets/images/help/organizations/org_profile_view.png)

3. Wähle im Abschnitt der angehefteten Repositorys **Pins anpassen** aus.

   ![Abbildung des Links „Pins anpassen“](/assets/images/help/organizations/customize_pins_link.png)

   - Wenn du dem Profil deiner Organisation noch keine Repositorys angeheftet hast, musst du stattdessen in der rechten Randleiste der Profilseite auf **Repositorys anheften** klicken.
   ![Abbildung des Links „Repositorys anheften“ in der rechten Randleiste](/assets/images/help/organizations/pin_repositories_link.png)

4. Wähle im Dialogfeld „Angeheftete Repositorys bearbeiten“ eine Kombination von bis zu sechs öffentlichen, {% ifversion not fpt %}privaten oder internen{% else %}oder privaten{% endif %} Repositorys zur Anzeige aus.

   ![Abbildung des Dialogfelds „Angeheftete Repositorys bearbeiten“](/assets/images/help/organizations/pinned_repo_dialog.png)

5. Klicke auf **Pins speichern**.

{% endif %}
