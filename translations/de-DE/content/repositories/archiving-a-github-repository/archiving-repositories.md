---
title: Repositorys archivieren
intro: 'Du kannst ein Repository archivieren, damit es allen Benutzer*innen nur mit Lesezugriff zur Verfügung steht und damit klar ist, dass es nicht mehr aktiv unterhalten wird. Du kannst die Archivierung eines Repository auch wieder aufheben.'
redirect_from:
  - /articles/archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-repositories
  - /articles/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/about-archiving-repositories
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/archiving-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: a9d5b33b94e6067bb4decfa8f47da8aa25860da4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132477'
---
## Informationen zum Repositoryarchiv

{% ifversion fpt or ghec %} {% note %}

**Hinweis:** Wenn du einen alten Abrechnungsplan pro Repository hast, wird dir dein archiviertes Repository weiterhin in Rechnung gestellt. Wenn du keine Gebühren für ein archiviertes Repository entrichten möchtest, musst du ein Upgrade auf ein neues Produkt durchführen. Weitere Informationen findest du unter [{% data variables.product.prodname_dotcom %}-Produkte](/articles/github-s-products).

{% endnote %} {% endif %}

{% ifversion ghec or ghes > 3.4 or ghae-issue-6329 %} {% note %}

**Hinweis:** Kunden, die {% data variables.product.prodname_GH_advanced_security %} verwenden, können {% data variables.product.prodname_secret_scanning %} für archivierte Repositorys aktivieren. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-for-private-repositories).

{% endnote %} {% endif %}

{% data reusables.repositories.archiving-repositories-recommendation %}

Nach der Archivierung eines Repositorys kannst du keine Mitarbeiter oder Teams mehr hinzufügen oder entfernen. Mitarbeiter, die Zugriff auf das Repository haben, können dein Projekt nur forken oder mit einem Stern versehen.

Wenn ein Repository archiviert wird, werden seine Probleme, Pullanforderungen, Code, Bezeichnungen, Meilensteine, Projekte, Wiki, Versionen, Commits, Tags, Verzweigungen, Reaktionen, Codescanbenachrichtigungen, Kommentare und Berechtigungen schreibgeschützt. Um Änderungen in einem archivierten Repository vorzunehmen, musst du das Repository zunächst aus dem Archiv herausnehmen.

Du kannst nach archivierten Repositorys suchen. Weitere Informationen findest du unter [Suchen nach Repositorys](/search-github/searching-on-github/searching-for-repositories/#search-based-on-whether-a-repository-is-archived). Weitere Informationen findest du unter „<a href="/articles/searching-for-repositories/#search-based-on-whether-a-repository-is-archived">Nach Repositorys suchen</a>“. Weitere Informationen findest du unter [Durchsuchen von Issues und Pull Requests](/search-github/searching-on-github/searching-issues-and-pull-requests/#search-based-on-whether-a-repository-is-archived).  

## Repository archivieren

{% data reusables.repositories.archiving-repositories-recommendation %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Klicke unter „Gefahrenzone“ auf **Dieses Repository archivieren** oder **Archivieren dieses Repositorys aufheben**.
   ![Schaltfläche zum Archivieren dieses Repositorys](/assets/images/help/repository/archive-repository.png)
4. Lies die Warnungen.
5. Gib den Namen des Repositorys ein, das du archivieren beziehungsweise dessen Archivierung du aufheben möchtest.
  ![Warnungen beim Archivieren des Repositorys](/assets/images/help/repository/archive-repository-warnings.png)
6. Klicke auf **Ich verstehe die Folgen, dieses Repository archivieren**.
