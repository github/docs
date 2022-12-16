---
title: Eine Fußzeile oder Seitenleiste für Ihr Wiki erstellen
intro: 'Du kannst eine benutzerdefinierte Seitenleiste oder Fußzeile für Dein Wiki erstellen, um zusätzliche kontextbezogene Informationen für die Leser bereitzustellen.'
redirect_from:
  - /articles/creating-a-footer
  - /articles/creating-a-sidebar
  - /articles/creating-a-footer-or-sidebar-for-your-wiki
  - /github/building-a-strong-community/creating-a-footer-or-sidebar-for-your-wiki
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create footer or sidebar
ms.openlocfilehash: 0f65114a5258d312d5a81381a59149c589ee54a4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090331'
---
## Eine Fußzeile erstellen

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. Klicke im unteren Bereich der Seite auf **Add a custom footer** (Benutzerdefinierte Fußzeile hinzufügen).
  ![Abschnitt zum Hinzufügen einer Wiki-Fußzeile](/assets/images/help/wiki/wiki_add_footer.png)
4. Gib über den Texteditor den Inhalt für die Fußzeile ein.
  ![Wiki-WYSIWYG](/assets/images/help/wiki/wiki-footer.png)
5. Gib eine Commit-Mitteilung mit einer Beschreibung der neuen Fußzeile ein.
  ![Wiki-Commit-Mitteilung](/assets/images/help/wiki/wiki_commit_message.png)
6. Klicke zum Committen der Änderungen im Wiki auf **Save Page** (Seite speichern).

## Eine Seitenleiste erstellen

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. Klicke auf **Add a custom sidebar** (Benutzerdefinierte Seitenleiste hinzufügen).
  ![Abschnitt zum Hinzufügen einer Wiki-Seitenleiste](/assets/images/help/wiki/wiki_add_sidebar.png)
4. Verwende den Texteditor, um den Inhalt Deiner Seite einzufügen.
  ![Wiki-WYSIWYG](/assets/images/help/wiki/wiki-sidebar.png)
5. Gib eine Commit-Mitteilung mit einer Beschreibung der neuen Seitenleiste ein.
  ![Wiki-Commit-Mitteilung](/assets/images/help/wiki/wiki_commit_message.png)
6. Klicke zum Committen der Änderungen im Wiki auf **Save Page** (Seite speichern).

## Eine Fußzeile oder Seitenleiste lokal erstellen

Beim Erstellen einer Datei namens `_Footer.<extension>` oder `_Sidebar.<extension>`, wird diese zum Füllen der Fußzeile bzw. der Seitenleiste des Wikis verwendet. Wie bei allen Wiki-Seiten bestimmt auch hier die von Dir gewählte Dateierweiterung, wie wir sie darstellen werden.
