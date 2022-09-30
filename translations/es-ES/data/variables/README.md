---
ms.openlocfilehash: ad592a65f3aca30933dfd634f93abc0810015bf3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145070119"
---
# variables

Las variables son cadenas cortas de texto reutilizable.

Cada uno de los archivos YAML de este directorio contiene varias variables.

La *ruta*, el *nombre de archivo* y las *claves* de cada archivo YAML determinan cuál será su ruta en el objeto de datos.

Por ejemplo, dado un archivo `data/variables/foo/bar.yml`:

```yaml
# multiple short strings in one file
meaning_of_life: 42

# and they can be nested if needed
nested:
  values:
    too: Yes!
```

Sus valores serían accesibles como:

```
{% data foo.bar.meaning_of_life %}

{% data foo.bar.nested.values.too %}
```
