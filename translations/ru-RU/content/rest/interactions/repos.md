---
title: Взаимодействия с репозиторием
shortTitle: Repository
intro: 'API взаимодействий с репозиторием позволяет пользователям с доступом владельца или администратора временно ограничить, какой тип пользователей может комментировать, открывать проблемы или создавать запросы на вытягивание в общедоступном репозитории.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e1d7d0137ddc2334bb08e17a0c8d7069c13d982d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '147064669'
---
## Сведения об API взаимодействий с репозиторием

API взаимодействий с репозиторием позволяет пользователям с доступом владельца или администратора временно ограничить, какой тип пользователей может комментировать, открывать проблемы или создавать запросы на вытягивание в общедоступном репозитории. {% data reusables.interactions.interactions-detail %} Дополнительные сведения об этих типах пользователей {% data variables.product.product_name %}:

* {% data reusables.interactions.existing-user-limit-definition %} in the respository.
* {% data reusables.interactions.contributor-user-limit-definition %} in the respository.
* {% data reusables.interactions.collaborator-user-limit-definition %} in the respository.

Если ограничение взаимодействия включено для пользователя или организации, владеющей репозиторием, его невозможно изменить для отдельного репозитория. Вместо этого используйте конечные точки взаимодействий [пользователей](#user) или [организации](#organization), чтобы изменить ограничение взаимодействия.
