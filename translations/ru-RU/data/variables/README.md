---
ms.openlocfilehash: ad592a65f3aca30933dfd634f93abc0810015bf3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "145070120"
---
# Переменные

Переменные — это короткие строки многократно используемого текста.

Каждый файл YAML в этом каталоге содержит несколько переменных.

Переменные *path*, *filename* и *keys* в каждом файле YAML определяют его путь в объекте данных.

Например, возьмем файл `data/variables/foo/bar.yml`:

```yaml
# multiple short strings in one file
meaning_of_life: 42

# and they can be nested if needed
nested:
  values:
    too: Yes!
```

Доступ к его значениям можно получить следующим образом:

```
{% data foo.bar.meaning_of_life %}

{% data foo.bar.nested.values.too %}
```
