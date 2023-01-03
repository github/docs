---
title: Удаление учетной записи организации
intro: 'При удалении организации удаляются все репозитории, вилки частных репозиториев, вики-сайты, проблемы, запросы на вытягивание и страницы проекта и организации. {% ifversion fpt or ghec %}Выставление счетов будет завершено, и через 90 дней название организации станет доступно для использования в новой учетной записи пользователя или организации.{% endif %}'
redirect_from:
  - /articles/deleting-an-organization-account
  - /github/setting-up-and-managing-organizations-and-teams/deleting-an-organization-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Delete organization
ms.openlocfilehash: 3d01844cca5247bf9f2704832632bbbe814150ed
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098527'
---
{% ifversion fpt or ghec %} {% tip %}

**Совет.** Если вы хотите отменить платную подписку, вы можете [понизить уровень организации до {% data variables.product.prodname_free_team %}](/articles/downgrading-your-github-subscription) вместо удаления организации и ее содержимого.

{% endtip %}

{% endif %}

## 1. Резервное копирование содержимого организации

{% ifversion not ghes %} После удаления организации {% data variables.product.company_short %} **не может восстановить ваше содержимое**. Таким образом, до{% else %}До{% endif %} удаления организации следует убедиться, что у вас есть копия всех репозиториев, вики-сайтов, проблем и панелей проектов из учетной записи.

{% ifversion ghes %} {% note %}

**Примечание:** При необходимости администратор сайта для {% данных variables.location.product_location %} может частично восстановить удаленную организацию. Дополнительные сведения см. в статье [Восстановление удаленной организации](/admin/user-management/managing-organizations-in-your-enterprise/restoring-a-deleted-organization).

{% endnote %} {% endif %}

## 2. Удаление организации

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. В нижней части страницы параметров организации нажмите на кнопку **Удалить эту организацию**.
   ![Кнопка «Удалить эту организацию»](/assets/images/help/settings/settings-organization-delete.png)
