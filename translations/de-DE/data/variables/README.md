---
ms.openlocfilehash: ad592a65f3aca30933dfd634f93abc0810015bf3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "145069036"
---
# Variablen

Variablen sind kurze Zeichenfolgen aus wiederverwendbarem Text.

Die YAML-Dateien in diesem Verzeichnis enthalten jeweils mehrere Variablen.

Der *Pfad*, der *Dateiname* und die *Schlüssel* in jeder YAML-Datei bestimmen, welcher Pfad für sie im Datenobjekt verwendet wird.

Wenn beispielsweise eine Datei `data/variables/foo/bar.yml` vorliegt:

```yaml
# multiple short strings in one file
meaning_of_life: 42

# and they can be nested if needed
nested:
  values:
    too: Yes!
```

Würde auf ihre Werte wie folgt zugegriffen werden:

```
{% data foo.bar.meaning_of_life %}

{% data foo.bar.nested.values.too %}
```
