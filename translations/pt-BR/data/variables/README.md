---
ms.openlocfilehash: ad592a65f3aca30933dfd634f93abc0810015bf3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145066079"
---
# Variáveis

As variáveis são cadeias de caracteres curtas de texto reutilizável.

Os arquivos YAML deste diretório contêm várias variáveis.

O *caminho*, o *nome de arquivo* e as *chaves* de cada arquivo YAML determinam qual será o caminho dele no objeto de dados.

Por exemplo, considerando um arquivo `data/variables/foo/bar.yml`:

```yaml
# multiple short strings in one file
meaning_of_life: 42

# and they can be nested if needed
nested:
  values:
    too: Yes!
```

Os valores deles poderão ser acessados como:

```
{% data foo.bar.meaning_of_life %}

{% data foo.bar.nested.values.too %}
```
