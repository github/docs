---
title: Взаимодействие с пользователем
shortTitle: User
allowTitleToDifferFromFilename: true
intro: 'API взаимодействия с пользователем позволяет временно ввести ограничения на то, какой тип пользователей может комментировать, открывать проблемы или создавать запросы на вытягивание в общедоступных репозиториях.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: e61096e6f09a9c17608e67846c138142c527c314
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066901'
---
## Сведения об API взаимодействия с пользователем

API взаимодействия с пользователем позволяет временно ввести ограничения на то, какой тип пользователей может комментировать, открывать проблемы или создавать запросы на вытягивание в общедоступных репозиториях. {% data reusables.interactions.interactions-detail %} Дополнительные сведения о типах пользователей {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} взаимодействие с вашими репозиториями.
* {% data reusables.interactions.contributor-user-limit-definition %} взаимодействие с вашими репозиториями.
* {% data reusables.interactions.collaborator-user-limit-definition %} взаимодействие с вашими репозиториями.

Установка ограничения взаимодействия на уровне пользователя перезапишет все ограничения взаимодействия, заданные для отдельных репозиториев, принадлежащих пользователю. Чтобы задать различные ограничения взаимодействия для отдельных репозиториев, принадлежащих пользователю, используйте конечные точки взаимодействия [репозитория](#repository).
