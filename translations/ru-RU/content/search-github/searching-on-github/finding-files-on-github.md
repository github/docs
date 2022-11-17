---
title: Поиск файлов на GitHub
intro: 'Файл в репозитории также можно найти с помощью средства поиска файлов. Чтобы найти файл в нескольких репозиториях в {% data variables.product.product_name %}, используйте [`filename` квалификатор поиска кода](/search-github/searching-on-github/searching-code#search-by-filename).'
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
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880199'
---
{% tip %}

**Советы**

- По умолчанию из результатов в средстве поиска файлов исключаются такие каталоги, как `build`, `log`, `tmp` и `vendor`. Чтобы выполнить поиск файлов в этих каталогах, используйте [квалификатор поиска кода `filename`](/search-github/searching-on-github/searching-code#search-by-filename).{% ifversion file-finder-exclusion-controls %} Кроме того, [с помощью файла `.gitattributes`](#customizing-excluded-files) можно указать, какие каталоги исключаются по умолчанию.{% endif %}
- Чтобы открыть средство поиска файлов, можно также нажать на клавиатуре клавишу `t`. Дополнительные сведения см. в разделе [Сочетания клавиш](/articles/keyboard-shortcuts).

{% endtip %}

## Использование средства поиска файлов

{% data reusables.repositories.navigate-to-repo %}
2. Над списком файлов нажмите кнопку **Перейти к файлу**.
![Кнопка поиска файла](/assets/images/help/search/find-file-button.png)
3. В поле поиска введите имя файла, который нужно найти.
![Поле поиска файлов](/assets/images/help/search/find-file-search-field.png)
4. В списке результатов щелкните искомый файл.

{% ifversion file-finder-exclusion-controls %}

## Настройка исключаемых файлов

По умолчанию из результатов в средстве поиска файлов исключаются файлы в следующих каталогах, если они существуют в корне репозитория:

 - `.git`
 - `.hg`
 - `.sass-cache`
 - `.svn`
 - `build`
 - `dot_git`
 - `log`
 - `tmp`
 - `vendor`

Эти исключения по умолчанию можно переопределить с помощью файла `.gitattributes`.

Для этого создайте или обновите файл под названием `.gitattributes` в корне репозитория, задав атрибуту [`linguist-generated`](https://github.com/github/linguist/blob/master/docs/overrides.md) значение `false` для каждого каталога, который необходимо включить в результаты поиска файлов.

Например, следующий файл `.gitattributes` указывает, что файлы в каталоге `build/` будут доступны средству поиска файлов:

```
build/** linguist-generated=false
```

Обратите внимание, что для такого переопределения требуется рекурсивная стандартная маска (`**`). Дополнительные сведения см. в разделе "[Формат шаблонов](https://git-scm.com/docs/gitignore#_pattern_format)" в документации по Git. Более сложные переопределения подкаталогов в каталогах, исключаемых по умолчанию, не поддерживаются.

{% endif %}

## Дополнительные материалы

- "[Сведения о поиске в GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github)"{% ifversion file-finder-exclusion-controls %}
- "[Настройка отображения измененных файлов в GitHub](/repositories/working-with-files/managing-files/customizing-how-changed-files-appear-on-github)"
- [`.gitattributes`](https://git-scm.com/docs/gitattributes) в документации по Git{% endif %}
