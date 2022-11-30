---
ms.openlocfilehash: dcc6cf1e8adf15c4997d4d62cd34bde99f7d37cd
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "145101456"
---
# Learning Tracks (aka Lernpfade)

Learning Tracks sind eine Sammlung von Artikeln, die Dir helfen, ein bestimmtes Thema zu erlernen. Learning Tracks werden auf einer Produktbasis definiert. Ein Beispiel findest du unter https://docs.github.com/en/actions/guides.

## Funktionsweise

Learning Track Daten für ein Produkt werden an zwei Stellen definiert:

1. Ein einfaches Array mit den Namen der Lernpfade wird auf der Indexseite der Produktleitfäden im Frontmatter definiert.

    Gehen Sie beispielsweise in `content/actions/guides/index.md` folgendermaßen vor:
    ```
    learningTracks:
      - getting_started
      - continuous_integration
      - continuous_deployment
      - deploy_to_the_cloud
      - hosting_your_own_runners
      - create_actions
    ```

2. Zusätzliche Daten für jeden Track werden in einer YAML-Datei definiert, die nach dem **Produkt** im `data` Verzeichnis benannt ist.

    Beispielsweise wird in `data/learning-tracks/actions.yml`, jedes Element aus dem `learningTracks`Array der Inhaltsdatei mit zusätzlichen Daten wie `title`, `description`, und einem Array von `guides`Links dargestellt.

    Ein Lernpfad in dieser YAML **pro Version** muss über als „hervorgehobener“ Lernpfad `featured_track: true`gekennzeichnet werden, damit er oben auf der Seite der Produktleitlinien erscheint. Ein Test schlägt fehl, wenn diese Eigenschaft fehlt.

    Die `featured_track` Eigenschaft kann eine einfache boolesche (z `featured_track: true`. B. ) oder eine Zeichenfolge sein, die Versionsanweisungen enthält (z `featured_track: '{% ifversion fpt %}true{% else %}false{% endif %}'`. B. ). Wenn Du die Versionsverwaltung verwendest, wirst Du mehrere `featured_track`s pro YML-Datei haben, aber stelle sicher, dass nur eine in jeder aktuell unterstützten Version gerendert wird. Ein Test schlägt fehl, wenn für jede Version mehr oder weniger als ein hervorgehobener Link vorhanden ist.

## Versionsverwaltung

Die Versionierung für Lernpfade wird zum Zeitpunkt des Renderns der Seite verarbeitet. Der Code befindet sich in [`lib/learning-tracks.js`](lib/learning-tracks.js), der von `page.render()` aufgerufen wird. Die bearbeiteten Lernpfade werden dann von `components/guides` gerendert.

Flüssigkeitsbedingungen müssen **nicht** für die Versionsverwaltung in der YAML-Datei für Anleitungen verwendet werden. Nur die Lernpfadlinien, die für die aktuelle Version gelten, werden automatisch gerendert. Wenn es keine Tracks mit Leitfäden gibt, die zur aktuellen Version gehören, wird der Abschnitt mit den Lernpfaden überhaupt nicht angezeigt.

Die explizite Versionsverwaltung in den YML-Daten der Lernpfade eines Produkts wird ebenfalls unterstützt. Das Format und die zulässigen Werte entsprechen der [Frontmatter-Versionseigenschaft](/content#versions).

Beispiel:

```
learning_track_name:
  title: 'Learning track title'
  description: 'Learning track description'
  featured_track: true
  versions:
    ghes: '>=3.0'
  guides:
   - /path/to/guide1
   - /path/to/guide2
```

Wenn die `versions` Eigenschaft nicht enthalten ist, wird davon ausgegangen, dass der Track in allen Versionen verfügbar ist.

## Schemaerzwingung

Das Schema für die Überprüfung des Lernpfads YAML befindet sich in [`tests/helpers/schemas/learning-tracks-schema.js`](tests/helpers/schemas/learning-tracks-schema.js) und wird ausgeübt von [`tests/content/lint-files.js`](tests/content/lint-files.js).
