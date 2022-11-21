---
ms.openlocfilehash: 3e44864fd82617c799cc4af8a3ab31b9279ed950
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879156"
---
## Featurebasierte Versionsverwaltung

Die featurebasierte Versionsverwaltung ermöglicht es uns, die Versionen eines willkürlich benannten „Features“ an einem Ort zu definieren und zu steuern.

**Hinweis**: Lösche `data/features/placeholder.yml` nicht, weil sie von Tests verwendet wird.

## Funktionsweise

Füge eine neue YAML-Datei mit dem Featurenamen hinzu, den du in diesem Verzeichnis verwenden möchtest. Für ein Feature mit dem Namen `meow` wäre das `data/features/meow.yml`.

Füge der YML-Datei einen Block `versions` hinzu, in dem die Kurznamen der Versionen verfügbar sind, in der das Feature verfügbar ist. Beispiel:

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  ghae: '*'
```

Das Format und die zulässigen Werte entsprechen der [Frontmatter-Versionseigenschaft](/content#versions).

### Flüssigkeitsbedingte Bedingungen

Jetzt kannst du `{% ifversion meow %} ... {% endif %}` in Inhaltsdateien verwenden!

### Frontmatter

Du kannst das Feature auch im Frontmatter in Inhaltsdateien verwenden:

```yaml
versions:
  fpt: '*'
  ghes: '>3.1'
  feature: 'meow'
```

Du kannst nicht mehrere gleichzeitige Versionen mit `feature:` angeben, da dies nicht unterstützt wird. Alternativ kannst du eine neue featurebasierte Versionierungsdatei mit der erforderlichen Versionierung erstellen.

## Schemaerzwingung

Das Schema zum Überprüfen der Featureversionsverwaltung befindet sich in [`tests/helpers/schemas/feature-versions-schema.js`](/tests/helpers/schemas/feature-versions-schema.js) und wird ausgeübt von [`tests/linting/lint-versioning.js`](/tests/linting/lint-versioning.js).

## Skript zum Entfernen von Featuretags

Noch nicht festgelegt!
