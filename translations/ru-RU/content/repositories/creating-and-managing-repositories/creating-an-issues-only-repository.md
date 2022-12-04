---
title: Создание репозитория только для проблем
intro: '{% data variables.product.product_name %} не предоставляет разрешения для доступа только к проблемам, однако это можно сделать с помощью второго репозитория, который содержит только проблемы.'
redirect_from:
  - /articles/issues-only-access-permissions
  - /articles/is-there-issues-only-access-to-organization-repositories
  - /articles/creating-an-issues-only-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-issues-only-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-an-issues-only-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Issues-only repository
ms.openlocfilehash: 76450c6d3bddd02ab3e389b35e6ce67d01ffd771
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145136910'
---
1. Создайте **частный** репозиторий для размещения исходного кода из проекта.
2. Создайте второй репозиторий с разрешениями, необходимыми для размещения средства отслеживания проблем.
3. Добавьте файл README в репозиторий проблем с описанием назначения этого репозитория и привязкой к разделу проблем.
4. Настройте участников совместной работы или команды, чтобы предоставить доступ к нужным репозиториям.

Пользователи с доступом на запись могут ссылаться на проблемы в репозиториях и закрывать их, но пользователи без необходимых разрешений будут видеть только ссылки с минимальными сведениями.

Например, если вы отправляете фиксацию в ветвь по умолчанию частного репозитория с сообщением `Fixes organization/public-repo#12`, проблема будет закрыта, но только пользователи с соответствующими разрешениями увидят ссылку между репозиториями, указывающую на фиксацию, которая закрыла проблему. Без разрешений ссылка по-прежнему будет отображаться, но без подробных сведений.
