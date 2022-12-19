---
title: Ein neues Repository erstellen
intro: 'Du kannst ein neues Repository in deinem persönlichen Konto oder in jeder Organisation erstellen, für die du ausreichend Berechtigungen hast.'
redirect_from:
  - /creating-a-repo
  - /articles/creating-a-repository-in-an-organization
  - /articles/creating-a-new-organization-repository
  - /articles/creating-a-new-repository
  - /articles/creating-an-internal-repository
  - /github/setting-up-and-managing-your-enterprise-account/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-internal-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-new-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: c399ac1a0881fe593087dada707296b226a5d9d8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145132345'
---
{% tip %}

**Tipp:** Besitzer können die Berechtigungen zum Erstellen von Repositorys in einer Organisation einschränken. Weitere Informationen findest du unter [Einschränken der Erstellung von Repositorys in deiner Organisation](/articles/restricting-repository-creation-in-your-organization).

{% endtip %}

{% tip %}

**Tipp:** Du kannst ein Repository auch mithilfe der {% data variables.product.prodname_cli %} erstellen. Weitere Informationen findest du unter „[`gh repo create`](https://cli.github.com/manual/gh_repo_create)“ in der Dokumentation zur {% data variables.product.prodname_cli %}.

{% endtip %}

{% data reusables.repositories.create_new %}
2. Um ein Repository mit der Verzeichnisstruktur und den Dateien eines vorhandenen Repositorys zu erstellen, kannst du optional auch eine Repositoryvorlage aus der Dropdownliste **Eine Vorlage auswählen** auswählen. Angezeigt werden Repository-Vorlagen, die im Besitz von Dir und von Organisationen sind, bei denen du Mitglied bist, oder die du bereits früher verwendet hast. Weitere Informationen findest du unter [Erstellen eines Repositorys aus einer Vorlage](/articles/creating-a-repository-from-a-template).
  ![Dropdownmenü „Vorlage“](/assets/images/help/repository/template-drop-down.png)
3. Wenn du dich für eine Vorlage entschieden hast, kannst du optional die Verzeichnisstruktur und Dateien aller Verzweigungen in die Vorlage aufnehmen, anstatt nur den Standardbranch, indem du **Alle Verzweigungen einbeziehen** auswählst.
    ![Kontrollkästchen "Alle Verzweigungen einschließen"](/assets/images/help/repository/include-all-branches.png)
3. Wähle im Dropdownmenü „Owner“ (Inhaber) das Konto aus, unter dem du das Repository erstellen möchtest.
   ![Besitzer-Dropdownmenü](/assets/images/help/repository/create-repository-owner.png) {% data reusables.repositories.repo-name %} {% data reusables.repositories.choose-repo-visibility %}
6. Wenn du keine Vorlage verwendest, kannst du dein Repository mit einigen optionalen Elementen vorab befüllen. Wenn du ein vorhandenes Repository in {% data variables.product.product_name %} importierst, wähle keine dieser Optionen aus, da dies zu Mergekonflikten führen könnte. Du kannst mit der Benutzeroberfläche neue Dateien erstellen oder hinzufügen oder später mit der Befehlszeile neue Dateien hinzufügen. Weitere Informationen findest du unter [Importieren eines Git-Repositorys mithilfe der Befehlszeile](/articles/importing-a-git-repository-using-the-command-line/), [Hinzufügen einer Datei zu einem Repository](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line) und [Behandeln von Mergekonflikten](/articles/addressing-merge-conflicts/).
    - Du kannst eine README-Datei erstellen, die eine Beschreibung deines Projekts enthält. Weitere Informationen findest du unter [Informationen zu README-Dateien](/articles/about-readmes/).
    - Du kannst eine *.gitignore*-Datei erstellen, die Regeln für das Ignorieren enthält. Weitere Informationen findest du unter [Ignorieren von Dateien](/github/getting-started-with-github/ignoring-files).{% ifversion fpt or ghec %}
    - Du kannst bei Bedarf eine Softwarelizenz zu deinem Projekt hinzufügen. Weitere Informationen findest du unter [Lizenzieren eines Repositorys](/articles/licensing-a-repository).{% endif %} {% data reusables.repositories.select-marketplace-apps %} {% data reusables.repositories.create-repo %} {% ifversion fpt or ghec %}
9. Unten auf der daraufhin angezeigten Seite zur Schnelleinrichtung kannst du unter „Import code from an old repository“ (Code von einem alten Repository importieren) ein Projekt in dein neues Repository importieren. Klicke dazu auf **Code importieren**.
{% endif %}

## Weiterführende Themen

- [Verwalten des Zugriffs auf die Repositorys deiner Organisation](/articles/managing-access-to-your-organization-s-repositories)
- [Open-Source-Leitfäden](https://opensource.guide/){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
