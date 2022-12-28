---
title: Настройка отображения измененных файлов на GitHub
intro: 'Чтобы по умолчанию отдельные файлы отображались в diff или учитывались в языке репозитория, их можно пометить атрибутом `linguist-generated` в файле *gitattributes*.'
redirect_from:
  - /articles/customizing-how-changed-files-appear-on-github
  - /github/administering-a-repository/customizing-how-changed-files-appear-on-github
  - /github/administering-a-repository/managing-repository-settings/customizing-how-changed-files-appear-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: How changed files appear
ms.openlocfilehash: 2ba6dc8286cab0ef493289d8ae39283209dae8b4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136568'
---
Используйте файл *GITATTRIBUTES*, чтобы пометить файлы, соответствующие заданному шаблону, указанными атрибутами. Файл *GITATTRIBUTES* использует те же правила сопоставления, что и файл _GITIGNORE_. Дополнительные сведения см. в разделе [Формат шаблона](https://www.git-scm.com/docs/gitignore#_pattern_format) документации GIT.

1. Если файла *GITATTRIBUTES* еще нет, создайте файл *GITATTRIBUTES* в корне репозитория.
2. Используйте атрибут `linguist-generated`, чтобы пометить или отменить пометку путей, которые следует игнорировать при вычислении статистики по языкам репозитория и скрывать по умолчанию в различиях.

  Например, чтобы пометить `search/index.json` как сгенерированный файл, добавьте в *GITATTRIBUTES* следующую строку:

  ```
search/index.json linguist-generated=true
  ```

## Дополнительные материалы
- Раздел [Сгенерированный код](https://github.com/github/linguist/blob/master/docs/overrides.md#generated-code) в документации по Linguist
- [Создание файлов](/articles/creating-new-files/)
