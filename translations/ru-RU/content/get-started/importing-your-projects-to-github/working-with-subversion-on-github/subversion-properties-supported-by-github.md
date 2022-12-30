---
title: 'Свойства Subversion, поддерживаемые GitHub'
intro: 'Существует несколько рабочих процессов и свойств Subversion, аналогичных существующим функциям в {% data variables.product.product_name %}.'
redirect_from:
  - /articles/subversion-properties-supported-by-github
  - /github/importing-your-projects-to-github/subversion-properties-supported-by-github
  - /github/importing-your-projects-to-github/working-with-subversion-on-github/subversion-properties-supported-by-github
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Properties supported by GitHub
ms.openlocfilehash: 48c041509100455f6ffcf02d262fd12eafbbffbc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135743'
---
## Исполняемые файлы (`svn:executable`)

Мы преобразуем свойства `svn:executable`, обновляя режим файла непосредственно перед добавлением файла в репозиторий Git.

## Типы MIME (`svn:mime-type`)

{% data variables.product.product_name %} внутренне отслеживает свойства mime-type файлов и фиксации, которые их добавили.

## Игнорирование элементов, не добавленных в систему управления версиями (`svn:ignore`)

Если вы задали файлы и каталоги, которые будут игнорироваться в Subversion, {% data variables.product.product_name %} будет выполнять их внутреннее отслеживание. Файлы, игнорируемые клиентами subversion, полностью отличаются от записей в файле *.gitignore*.

## Свойства, которые сейчас не поддерживаются

{% data variables.product.product_name %} сейчас не поддерживает `svn:externals`, `svn:global-ignores` и любые свойства, не указанные выше, включая пользовательские свойства.
