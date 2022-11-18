---
title: Автоматическое открытие файлов в codespaces для репозитория
shortTitle: Automatically opening files
intro: 'Вы можете настроить автоматическое открытие определенных файлов при создании codespace для репозитория и открытии пространства кода в веб-клиенте {% data variables.product.prodname_vscode %}.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: a57b76eda4bfc47071f3cfeade8f50afde9e01e6
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114108'
---
## Общие сведения

Если существует определенный файл, который удобно видеть пользователям при создании пространства кода для репозитория, можно настроить автоматическое открытие этого файла в веб-клиенте {% data variables.product.prodname_vscode_shortname %}. Это можно настроить в файле конфигурации контейнера разработки для репозитория. 

Указанные файлы открываются только при первом открытии codespace в веб-клиенте. Если пользователь закрывает указанные файлы, эти файлы не открываются автоматически при следующем открытии или перезапуске codespace.

{% note %}

**Примечание.** Эта автоматизация применяется только к веб-клиенту {% data variables.product.prodname_vscode_shortname %}, а не к классическому приложению {% data variables.product.prodname_vscode_shortname %} или другим поддерживаемым редакторам.

{% endnote %}

## Настройка автоматического открытия файлов

{% data reusables.codespaces.edit-devcontainer-json %}
1. Измените `devcontainer.json` файл, добавив `customizations.codespaces.openFiles` свойство . Свойство `customizations` находится на верхнем уровне файла во включаемом объекте JSON. Например:

   ```json{:copy}
   "customizations": {
     "codespaces": {
       "openFiles": [
         "README.md",
         "scripts/tsconfig.json",
         "docs/main/CODING_STANDARDS.md"
       ]
     }
   }
   ```

   Значение `openFiles` свойства — это массив из одного или нескольких файлов в репозитории. Пути относятся к корню репозитория (абсолютные пути не поддерживаются). Файлы открываются в веб-клиенте в указанном порядке, а первый файл в массиве отображается в редакторе.
   
1. Сохраните файл и зафиксируйте изменения в требуемой ветви репозитория.

## Дополнительные материалы

- [Основные сведения о контейнерах разработки](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)
