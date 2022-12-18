---
title: Dateien auf GitHub suchen
intro: 'Du kannst mit der Dateisuche eine Datei in einem Repository suchen. Verwende den [`filename`Qualifizierer für die Codesuche](/search-github/searching-on-github/searching-code#search-by-filename), um mehrere Repositorys auf {% data variables.product.product_name %} nach einer Datei zu durchsuchen.'
redirect_from:
  - /articles/finding-files-on-github
  - /github/searching-for-information-on-github/finding-files-on-github
  - /github/searching-for-information-on-github/searching-on-github/finding-files-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 7cecdfd58ecf56cac251bd77af3a4e1a7fcfd607
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880196'
---
{% tip %}

**Tipps:**

- Bei den Ergebnissen der Dateisuche werden einige Verzeichnisse standardmäßig ausgeschlossen. Hierzu zählen unter anderem `build`, `log`, `tmp` und `vendor`. Verwende den [`filename`Qualifizierer für die Codesuche](/search-github/searching-on-github/searching-code#search-by-filename), um diese Verzeichnisse nach Dateien zu durchsuchen.{% ifversion file-finder-exclusion-controls %} Alternativ kannst du [mithilfe einer `.gitattributes`-Datei](#customizing-excluded-files) anpassen, welche Verzeichnisse standardmäßig ausgeschlossen werden sollen.{% endif %}
- Du kannst die Dateisuche auch öffnen, indem du auf der Tastatur die Taste `t` drückst. Weitere Informationen findest du unter [Tastenkombinationen](/articles/keyboard-shortcuts).

{% endtip %}

## Dateisuche verwenden

{% data reusables.repositories.navigate-to-repo %}
2. Klicke über der Dateiliste auf **Zu Datei wechseln**.
![Schaltfläche für die Dateisuche](/assets/images/help/search/find-file-button.png)
3. Gib im Suchfeld den Namen der Datei ein, die Du suchen möchtest.
![Suchfeld für die Dateisuche](/assets/images/help/search/find-file-search-field.png)
4. Klicke in der Ergebnisliste auf die gewünschte Datei.

{% ifversion file-finder-exclusion-controls %}

## Ausgeschlossene Dateien anpassen

Die Ergebnisse der Dateisuche enthalten standardmäßig keine Dateien aus den folgenden Verzeichnissen, wenn sie im Repositorystamm vorhanden sind:

 - `.git`
 - `.hg`
 - `.sass-cache`
 - `.svn`
 - `build`
 - `dot_git`
 - `log`
 - `tmp`
 - `vendor`

Du kannst diese Standardausschlüsse überschreiben, indem du eine `.gitattributes`-Datei verwendest.

Erstelle oder aktualisiere dazu im Repositorystamm eine Datei namens `.gitattributes`, und lege das Attribut [`linguist-generated`](https://github.com/github/linguist/blob/master/docs/overrides.md) für jedes Verzeichnis, das in den Ergebnissen der Dateisuche enthalten sein soll, auf `false` fest.

Die folgende `.gitattributes`-Datei würde beispielsweise dazu führen, dass Dateien im Verzeichnis `build/` für die Dateisuche verfügbar sind:

```
build/** linguist-generated=false
```

Dabei ist zu beachten, dass diese Außerkraftsetzung die Verwendung des rekursiven Globmusters (`**`) erfordert. Weitere Informationen findest du in der Git-Dokumentation unter [Pattern Format](https://git-scm.com/docs/gitignore#_pattern_format). Komplexere Außerkraftsetzungen von Unterverzeichnissen in ausgeschlossenen Standardverzeichnissen werden nicht unterstützt.

{% endif %}

## Weiterführende Themen

- [Informationen zur Suche auf GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github){% ifversion file-finder-exclusion-controls %}
- [Darstellung geänderter Dateien auf GitHub anpassen](/repositories/working-with-files/managing-files/customizing-how-changed-files-appear-on-github)
- [`.gitattributes`](https://git-scm.com/docs/gitattributes) in der Git-Dokumentation{% endif %}
