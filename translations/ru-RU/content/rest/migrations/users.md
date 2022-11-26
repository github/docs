---
title: Миграции пользователей
allowTitleToDifferFromFilename: true
shortTitle: Users
intro: ''
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 500f1c4d73dc3bab613641072387e42d5f8894d4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125139'
---
## Сведения об API миграции пользователей

API миграции пользователей доступен только для владельцев учетных записей, прошедших проверку подлинности. Дополнительные сведения см. в разделе [Другие способы проверки подлинности](/rest/overview/other-authentication-methods).

{% data variables.migrations.user_migrations_intro %} Список данных миграции, доступных для загрузки, см. в разделе [Загрузка архива миграции пользователей](#download-a-user-migration-archive).

Чтобы скачать архив, сначала необходимо запустить миграцию пользователей. Когда миграция перейдет в статус `exported`, вы сможете загрузить миграцию.

После создания архива миграции он будет доступен для загрузи в течение семи дней. Однако при необходимости вы можете удалить архив миграции пользователей раньше. Можно разблокировать репозиторий, когда миграция получит статус `exported`, чтобы снова начать использовать репозиторий или удалить его, если вам больше не нужны исходные данные.
