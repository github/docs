---
title: Eine Repository-Vorlage erstellen
intro: 'Du kannst ein vorhandenes Repository zu einer Vorlage machen, damit du und andere Benutzer*innen neue Repositorys mit derselben Verzeichnisstruktur, denselben Branches und denselben Dateien erstellen können.'
permissions: Anyone with admin permissions to a repository can make the repository a template.
redirect_from:
  - /articles/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-template-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Create a template repo
ms.openlocfilehash: 1ae0c562f1d92e8184ae749199f609bb223748d4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132339'
---
{% note %}

**Hinweis**: Dein Vorlagenrepository darf keine Dateien enthalten, die mit {% data variables.large_files.product_name_short %} gespeichert wurden.

{% endnote %}

Um eine Repository-Vorlage zu erstellen, musst du ein Repository erstellen und es anschließend zu einer Vorlage machen. Weitere Informationen zum Erstellen eines Repositorys findest du unter „[Erstellen eines neuen Repositorys](/articles/creating-a-new-repository)“.

Nachdem du dein Repository als Vorlage erstellt hast, kann jeder, der Zugriff auf das Repository hat, ein neues Repository mit derselben Verzeichnisstruktur und -dateien wie dein Standardbranch generieren. Du kannst auch auswählen, dass alle anderen Branches in dein Repository einbezogen werden. Von einer Vorlage erstellte Branches verfügen über nicht verwandte Historien, sodass du keine Pull Requests erstellen oder zwischen den Branches zusammenführen kannst. Weitere Informationen findest du unter „[Erstellen eines Vorlagenrepositorys](/articles/creating-a-repository-from-a-template)“.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Wähle **Vorlagenrepository** aus.
  ![Kontrollkästchen zum Umwandeln eines Repositorys in eine Vorlage](/assets/images/help/repository/template-repository-checkbox.png)
