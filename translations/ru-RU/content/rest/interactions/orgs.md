---
title: Взаимодействие с организацией
shortTitle: Organization
intro: 'API взаимодействия с организацией позволяет владельцам организации временно ввести ограничения на то, какие типы пользователей могут комментировать, открывать проблемы или создавать запросы на вытягивание в общедоступных репозиториях организации.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: f06bfbe50c7fa43d03329d69bba8816e4559565a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062469'
---
## Сведения об API взаимодействия с организацией

API взаимодействия с организацией позволяет владельцам организации временно ввести ограничения на то, какие типы пользователей могут комментировать, открывать проблемы или создавать запросы на вытягивание в общедоступных репозиториях организации. {% data reusables.interactions.interactions-detail %} Дополнительные сведения о типах пользователей {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} в организации.
* {% data reusables.interactions.contributor-user-limit-definition %} в организации.
* {% data reusables.interactions.collaborator-user-limit-definition %} в организации.

Установка ограничения взаимодействия на уровне организации перезапишет все ограничения взаимодействия, заданные для отдельных репозиториев, принадлежащих организации. Чтобы задать различные ограничения взаимодействия для отдельных репозиториев, принадлежащих организации, используйте конечные точки взаимодействия [репозитория](#repository).
