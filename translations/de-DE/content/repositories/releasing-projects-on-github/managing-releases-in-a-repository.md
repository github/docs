---
title: Veröffentlichungen in einem Repository verwalten
intro: 'Du kennst Releases erstellen, um Iterationen eines Projektes zu bündeln und für Benutzer*innen bereitzustellen.'
redirect_from:
  - /articles/creating-releases
  - /articles/listing-and-editing-releases
  - /articles/editing-and-deleting-releases
  - /articles/managing-releases-in-a-repository
  - /github/administering-a-repository/creating-releases
  - /github/administering-a-repository/editing-and-deleting-releases
  - /github/administering-a-repository/managing-releases-in-a-repository
  - /github/administering-a-repository/releasing-projects-on-github/managing-releases-in-a-repository
permissions: 'Repository collaborators and people with write access to a repository can create, edit, and delete a release.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Manage releases
ms.openlocfilehash: d8a5f77941c7c46656c891c0892af95d0b1b8637
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107485'
---
## Informationen zur Releaseverwaltung

Du kannst neue Releases mit Versionshinweisen, @mentions von Mitwirkenden und Links zu Binärdateien erstellen sowie vorhandene Releases bearbeiten oder löschen. Mit der API für Releases kannst du außerdem Releases erstellen, ändern und löschen. Weitere Informationen findest du unter [Releases](/rest/releases/releases) in der Dokumentation zur REST-API.

{% ifversion fpt or ghec %} Du kannst eine Aktion aus einem bestimmten Release in {% data variables.product.prodname_marketplace %} veröffentlichen. Weitere Informationen findest du unter [Veröffentlichen einer Aktion im {% data variables.product.prodname_marketplace %}](/actions/creating-actions/publishing-actions-in-github-marketplace).

Du kannst auswählen, ob {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %})-Objekte in den ZIP-Dateien und Tarballs enthalten sein sollen, die {% data variables.product.product_name %} für jedes Release erstellt. Weitere Informationen findest du unter [Verwalten von {% data variables.large_files.product_name_short %}-Objekten in Archiven in deinem Repository](/github/administering-a-repository/managing-git-lfs-objects-in-archives-of-your-repository).
{% endif %}

## Einen Release erstellen

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
1. Klicke auf **Neues Release erstellen**.

   {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.4 %}![Schaltfläche für Release-Entwurf](/assets/images/help/releases/draft-release-button-with-search.png){% else %}![Schaltfläche für Release-Entwurf](/assets/images/help/releases/draft_release_button.png){% endif %}
1. Klicke auf **Tag auswählen**, gib eine Versionsnummer für deine Veröffentlichung ein, und drücke die **EINGABETASTE**. Alternativ kannst du ein vorhandenes Tag auswählen.

   ![Eingeben eines Tags](/assets/images/help/releases/releases-tag-create.png)
1. Wenn du ein neues Tag erstellst, klicke auf **Neues Tag erstellen**.

   ![Screenshot der Bestätigung zum Erstellen eines neuen Tags](/assets/images/help/releases/releases-tag-create-confirm.png)
   
1. Wenn du ein neues Tag erstellt hast, verwende das Dropdownmenü, um den Branch auszuwählen, der das zu veröffentlichende Projekt enthält.

   
   ![Screenshot der Dropdownliste zum Auswählen eines Branches](/assets/images/help/releases/releases-choose-branch.png)

   

{%- data reusables.releases.previous-release-tag %}
1. Gib einen Titel und eine Beschreibung für deinen Release ein.
   {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} Wenn du über @mention jemanden in der Beschreibung erwähnst, enthält die veröffentlichte Version einen Abschnitt **Mitwirkende** mit einer Avatarliste aller erwähnten Benutzer.
   {%- endif %} {% ifversion fpt or ghec or ghes > 3.3 %} Alternativ kannst du deine Versionshinweise automatisch generieren, indem du auf {% ifversion previous-release-tag %}**Versionshinweise generieren**{% else %}**Versionshinweise automatisch generieren**{% endif %} klickst.{% endif %}{% ifversion previous-release-tag %}

   ![Screenshot der Releasebeschreibung](/assets/images/help/releases/releases_description_auto.png){% else %}

   ![Screenshot der Releasebeschreibung](/assets/images/enterprise/3.5/releases/releases_description_auto.png){% endif %}

1. Um optional binäre Dateien wie kompilierte Programme in deinen Release einzubinden, ziehe die Dateien mit Drag-and-Drop herüber oder wähle die Dateien manuell im Feld für Binärdateien.

   ![Animierte GIF-Datei zum Bereitstellen einer DMG mit dem Release](/assets/images/help/releases/releases_adding_binary.gif)

1. Um Benutzer*innen darüber zu informieren, dass das Release nicht produktionsbereit und möglicherweise instabil ist, wähle **Dies ist eine Vorabversion** aus.

   ![Screenshot des Kontrollkästchens zum Markieren eines Releases als Vorabversion](/assets/images/help/releases/prerelease_checkbox.png)

{%- ifversion releases-set-latest-release %} 
1. Optional kannst du **Als neueste Version festlegen** auswählen. Wenn du diese Option nicht auswählst, wird die neueste Versionsbezeichnung automatisch auf Basis der semantischen Versionierung zugewiesen.

   ![Screenshot des Kontrollkästchens zum Markieren einer Version als neuestes Release](/assets/images/help/releases/latest-release-checkbox.png)

{%- endif %}  
{%- ifversion discussions %}
1. Wenn {% data variables.product.prodname_discussions %} in deinem Repository aktiviert sind, kannst du alternativ **Erstellen einer Diskussion für dieses Release** und dann das Dropdownmenü **Kategorie** auswählen und auf eine Kategorie für die Releasediskussion klicken.

   ![Screenshot des Kontrollkästchens zum Erstellen einer Releasediskussion und des Dropdownmenüs zum Auswählen einer Kategorie](/assets/images/help/releases/create-release-discussion.png)

{%- endif %}
1. Wenn du dein Release veröffentlichen möchtest, klicke auf **Release veröffentlichen**. Wenn du später an dem Release arbeiten möchtest, klicke auf **Entwurf speichern**.
   ![Die Schaltflächen „Release veröffentlichen“ und „Entwurf speichern“](/assets/images/help/releases/release_buttons.png)

   {%- ifversion fpt or ghec or ghae > 3.3 %} Du kannst die veröffentlichten Releases oder die Entwürfe anschließend im Releasefeed deines Repositorys anzeigen. Weitere Informationen findest du unter [Screenshot der Versionen und Tags deines Repositorys](/github/administering-a-repository/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags).

   {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.3 %} ![Veröffentlichtes Release mit @mentionedMitwirkenden](/assets/images/help/releases/refreshed-releases-overview-with-contributors.png) {% else %} ![Veröffentlichtes Release mit @mentionedMitwirkenden](/assets/images/help/releases/releases-overview-with-contributors.png) {% endif %} {%- endif %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. Verwende den Unterbefehl `gh release create`, um ein Release zu erstellen. Ersetze `tag` durch das gewünschte Tag für das Release.

   ```shell
   gh release create TAG
   ```

2. Befolge die interaktiven Eingabeaufforderungen. Du kannst Argumente angeben, um diese Eingabeaufforderungen zu überspringen. Weitere Informationen zu möglichen Argumenten findest du [im {% data variables.product.prodname_cli %}-Handbuch](https://cli.github.com/manual/gh_release_create). Mit diesem Befehl wird beispielsweise ein Vorabrelease mit dem angegebenen Titel und den entsprechenden Hinweisen erstellt.

   ```shell
   gh release create v1.3.2 --title "v1.3.2 (beta)" --notes "this is a beta release" --prerelease
   ```
{% ifversion fpt or ghes > 3.3 or ghae > 3.3 or ghec %} Wenn du @mention{% data variables.product.product_name %}-Benutzer in den Hinweisen erwähnst, enthält das veröffentlichte Release auf {% data variables.product.prodname_dotcom_the_website %} den Abschnitt **Mitwirkende**, in dem eine Avatarliste aller erwähnten Benutzer enthalten ist.
{% endif %}

{% endcli %}

## Einen Release bearbeiten

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.3 %}
3. Klicke im rechten Abschnitt der Seite neben dem Release, das du bearbeiten möchtest, auf {% octicon "pencil" aria-label="The edit icon" %}.
  ![Bearbeiten eines Releases](/assets/images/help/releases/edit-release-pencil.png) {% else %}
3. Klicke im rechten Abschnitt der Seite neben dem Release, das du bearbeiten möchtest, auf **Release bearbeiten**.
  ![Bearbeiten eines Releases](/assets/images/help/releases/edit-release.png) {% endif %}
4. Bearbeite die Details des Releases im Formular, und klicke dann auf **Release aktualisieren**.{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} Wenn du eine der Erwähnungen (@mentions) der GitHub-Benutzer in der Beschreibung entfernst bzw. hinzufügst, werden diese Benutzer aus der Avatarliste im Abschnitt **Mitwirkende** des Releases entfernt oder ihr hinzugefügt.{% endif %} ![Aktualisieren eines Releases](/assets/images/help/releases/update-release.png)

{% endwebui %}

{% cli %}

Releases können derzeit nicht mit {% data variables.product.prodname_cli %} bearbeitet werden.

{% endcli %}

## Einen Release löschen

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %} {% ifversion fpt or ghec or ghes > 3.4 or ghae > 3.3 %}
3. Klicke im rechten Abschnitt der Seite neben dem Release, das du löschen möchtest, auf {% octicon "trash" aria-label="The trash icon" %}.
  ![Löschen eines Releases](/assets/images/help/releases/delete-release-trash.png) {% else %}
3. Klicke auf den Namen des Release, den du löschen willst.
  ![Link zur Ansicht des Releases](/assets/images/help/releases/release-name-link.png)
4. Klicke in der oberen rechte Ecke der Seite auf **Löschen**.
  ![Schaltfläche „Release löschen“](/assets/images/help/releases/delete-release.png) {% endif %}
5. Klicke auf **Dieses Release löschen**.
  ![Bestätigen des Löschens des Releases](/assets/images/help/releases/confirm-delete-release.png)

{% endwebui %}

{% cli %}

1. Verwende den Unterbefehl `gh release delete`, um ein Release zu löschen. Ersetze `tag` durch das Tag des Releases, das gelöscht werden soll. Verwende das Flag `-y`, um das Bestätigen zu überspringen.

   ```shell
   gh release delete TAG -y
   ```

{% endcli %}
