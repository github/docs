---
title: Сведения о хранилище больших файлов Git Large File Storage
intro: 'На {% data variables.product.product_name %} допустимый размер файлов в репозиториях ограничен. Чтобы отслеживать файлы, размер которых превышает заданное ограничение, можно использовать {% data variables.large_files.product_name_long %}.'
redirect_from:
  - /articles/about-large-file-storage
  - /articles/about-git-large-file-storage
  - /github/managing-large-files/about-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/about-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Git Large File Storage
ms.openlocfilehash: f0ab54791645dc5c36cce2880ba3ae5c9b705f35
ms.sourcegitcommit: 06726d24e73f1175f10749d6fdcf143d6094c9a5
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/28/2022
ms.locfileid: '148118749'
---
## Сведения о {% data variables.large_files.product_name_long %}

{% data variables.large_files.product_name_short %} обрабатывает большие файлы, сохраняя ссылки на файл в репозитории, но не сам файл. Для обхода архитектуры Git {% data variables.large_files.product_name_short %} создает файл указателя, который выступает в качестве ссылки на фактический файл (хранящийся в другом месте). {% data variables.product.product_name %} управляет этим файлом указателя в репозитории. При клонировании репозитория {% data variables.product.product_name %} использует файл указателя в качестве карты для перехода и поиска большого файла.

{% ifversion fpt or ghec %} С помощью {% data variables.large_files.product_name_short %} можно хранить файлы следующего размера:

| Продукт | Максимальный размер файла |
|------- | ------- |
| {% data variables.product.prodname_free_user %} | 2 ГБ |
| {% data variables.product.prodname_pro %} | 2 ГБ |
| {% data variables.product.prodname_team %} | 4 ГБ |
| {% data variables.product.prodname_ghe_cloud %} | 5 ГБ |{% else %}
С помощью {% data variables.large_files.product_name_short %} можно хранить в репозитории файлы до 5 ГБ.
{% endif %} 

{% data reusables.repositories.git-lfs %}

Вы также можете использовать {% data variables.large_files.product_name_short %} с {% data variables.product.prodname_desktop %}. Дополнительные сведения о клонировании репозиториев Git LFS в {% data variables.product.prodname_desktop %} см. в разделе [Клонирование репозитория из GitHub в GitHub Desktop](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop).

{% data reusables.large_files.can-include-lfs-objects-archives %}

## Формат файла указателя

Файл указателя {% data variables.large_files.product_name_short %} выглядит следующим образом:

```
version {% data variables.large_files.version_name %}
oid sha256:4cac19622fc3ada9c0fdeadb33f88f367b541f38b89102a3f1261ac81fd5bcb5
size 84977953
```

Он отслеживает значение `version` используемого {% data variables.large_files.product_name_short %}, за которым следует уникальный идентификатор файла (`oid`). Он также сохраняет `size` окончательного файла.

{% note %}

**Примечания**
- {% data variables.large_files.product_name_short %} нельзя использовать с сайтами {% data variables.product.prodname_pages %}.
- {% data variables.large_files.product_name_short %} нельзя использовать с репозиториями шаблонов.
  
{% endnote %}

## Дополнительные материалы

- [Совместная работа с помощью {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage)
