---
title: Wiki-Seiten hinzufügen oder bearbeiten
intro: 'Du kannst Wiki-Seiten direkt auf {% data variables.product.product_name %} oder lokal über die Befehlszeile hinzufügen und bearbeiten.'
redirect_from:
  - /articles/adding-wiki-pages-via-the-online-interface
  - /articles/editing-wiki-pages-via-the-online-interface
  - /articles/adding-and-editing-wik-pages-locally
  - /articles/adding-and-editing-wiki-pages-locally
  - /articles/adding-or-editing-wiki-pages
  - /github/building-a-strong-community/adding-or-editing-wiki-pages
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Manage wiki pages
ms.openlocfilehash: f163818a903d7c8261bd4c0b0268d748f578702f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147425264'
---
## Wiki-Seiten hinzufügen

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. Klicke in der oberen rechte Ecke der Seite auf **Neue Seite**.
  ![Schaltfläche „Neue Seite“ für Wiki](/assets/images/help/wiki/wiki_new_page_button.png)
4. Wenn du ein anderes Format als Markdown verwenden möchtest, kannst du wahlweise im Bearbeitungsmodus über das Dropdownmenü ein anderes Format auswählen.
  ![Wiki-Markup-Auswahl](/assets/images/help/wiki/wiki_dropdown_markup.gif)
5. Verwende den Text-Editor, um den Inhalt deiner Seite hinzuzufügen.
  ![Wiki-WYSIWYG](/assets/images/help/wiki/wiki_wysiwyg.png)
6. Erstelle eine Commit-Mitteilung, welche die neue Datei beschreibt, die du hinzufügst.
  ![Wiki-Commit-Mitteilung](/assets/images/help/wiki/wiki_commit_message.png)
7. Klicke zum Committen der Änderungen im Wiki auf **Seite speichern**.

## Wiki-Seiten bearbeiten

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
4. Navigiere über die Wiki-Seitenleiste zu der Seite, die du ändern möchtest. Klicke in der oberen rechte Ecke der Seite auf **Bearbeiten**.
   ![Schaltfläche „Bearbeiten“ für Wiki-Seite](/assets/images/help/wiki/wiki_edit_page_button.png)
5. Verwende den Text-Editor, um den Inhalt der Seite zu bearbeiten.
   ![Wiki-WYSIWYG](/assets/images/help/wiki/wiki_wysiwyg.png)
6. Erstelle eine Commit-Mitteilung, in der du deine Änderungen beschreibst.
   ![Wiki-Commit-Mitteilung](/assets/images/help/wiki/wiki_commit_message.png)
7. Klicke zum Committen der Änderungen im Wiki auf **Seite speichern**.

## Wiki-Seiten lokal hinzufügen oder bearbeiten

Wikis sind Teil der Git-Repositorys. Du kannst also Änderungen lokal vornehmen und sie dann mit einem Git-Workflow per Push an dein Repository übergeben.

### Klonen von Wikis auf deinen Computer

Jedes Wiki bietet eine einfache Möglichkeit, seinen Inhalt auf deinen Computer zu klonen.
Sobald du eine erste Seite auf {% data variables.product.product_name %} erstellt hast, kannst du das Repository mit der angegebenen URL auf deinem Computer klonen:

```shell
$ git clone https://github.com/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.wiki.git
# Clones the wiki locally
```

Wenn du das Wiki geklont hast, kannst du neue Dateien hinzufügen, vorhandene bearbeiten und deine Änderungen freigeben. Wenn du an Wikis arbeitest, können du und deine Mitarbeiter Branches erstellen. Aber nur die Änderungen, die per Push an den Standardbranch übergeben werden, werden veröffentlicht und für Leser bereitgestellt.

## Informationen zu Wiki-Dateinamen

Der Dateiname bestimmt den Titel deiner Wiki-Seite und die Dateierweiterung bestimmt, wie dein Wiki-Inhalt dargestellt wird.

Wikis nutzen [unsere Open-Source Markup-Bibliothek](https://github.com/github/markup) für die Markup-Umwandlung. Durch die Dateierweiterung wird bestimmt, welcher Konverter verwendet wird. Wenn du z. B. eine Datei *foo.md* oder *foo.markdown* nennen, nutzt Wiki den Markdown-Konverter. Bei einer Datei mit dem Namen *foo.textile* wird der Textile-Konverter verwendet.

Verwende die folgenden Zeichen nicht in Titeln von Wiki-Seiten: `\ / : * ? " < > |`. Benutzer mit bestimmten Betriebssystemen können Dateinamen mit diesen Zeichen nicht verwenden. Stelle sicher, für deinen Inhalt eine Markup-Sprache zu verwenden, die der Dateierweiterung entspricht. Andernfalls wird dein Inhalt nicht korrekt dargestellt.
