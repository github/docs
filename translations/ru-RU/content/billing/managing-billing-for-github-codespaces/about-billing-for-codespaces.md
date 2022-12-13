---
title: Сведения о выставлении счетов в Codespaces
shortTitle: About billing
intro: Просмотрите цены и узнайте, как управлять выставлением счетов за {% data variables.product.prodname_codespaces %} для вашей организации.
permissions: To manage billing for Codespaces for an organization, you must be an organization owner or a billing manager.
versions:
  fpt: '*'
  ghec: '*'
type: overview
product: '{% data reusables.gated-features.codespaces %}'
topics:
- Codespaces
- Billing
ms.openlocfilehash: bb2b22ce9f34122656134076d4d1e5b49b86e3ce
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 07/13/2022
ms.locfileid: "146381078"
---
## <a name="-data-variablesproductprodname_codespaces--pricing"></a>Цены на {% data variables.product.prodname_codespaces %}

Плата за использование {% data variables.product.prodname_codespaces %} взимается со всех организаций и корпоративных учетных записей в {% data variables.product.prodname_team %} и {% data variables.product.prodname_enterprise %}, у которых нет бесплатных минут или хранилища. С личных учетных записей в настоящее время плата за использование {% data variables.product.prodname_codespaces %} не взимается. 

Плата за использование {% data variables.product.prodname_codespaces %} взимается в соответствии с единицами измерения в следующей таблице:

| Продукт             | номер SKU      | Единица измерения | Цена |
| ------------------- | -------- | --------------- | ----- |
| Вычислительные ресурсы Codespaces  |  2 ядра  | 1 час          | 0,18 долл. США |
|                     |  4 ядра  | 1 час          | 0,36 долл. США |
|                     |  8 ядер  | 1 час          | 0,72 долл. США |
|                     |  16 ядер | 1 час          | 1,44 долл. США |
|                     |  32 ядра | 1 час          | 2,88 долл. США |
| Хранилище Codespaces  |  Память | 1 ГБ в месяц      | 0,07 долл. США |

## <a name="about-billing-for--data-variablesproductprodname_codespaces-"></a>Сведения о выставлении счетов для {% data variables.product.prodname_codespaces %}

{% data reusables.codespaces.codespaces-billing %}

Данные об использовании {% data variables.product.prodname_codespaces %} включают существующую дату выставления счетов учетной записи, метод оплаты и квитанцию. {% data reusables.dotcom_billing.view-all-subscriptions %}

{% ifversion ghec %} Если вы приобрели {% data variables.product.prodname_enterprise %} в рамках Соглашения Microsoft Enterprise, то можете подключить свой идентификатор подписки Azure к корпоративной учетной записи, чтобы включить {% data variables.product.prodname_codespaces %} и оплачивать использование этой функции. Дополнительные сведения см. в разделе [Подключение подписки Azure к организации](/billing/managing-billing-for-your-github-account/connecting-an-azure-subscription-to-your-enterprise).
{% endif %}

{% data reusables.dotcom_billing.pricing_calculator.pricing_cal_codespaces %}

### <a name="billing-for--data-variablesproductprodname_codespaces--prebuilds"></a>Выставление счетов для предварительных сборок {% data variables.product.prodname_codespaces %}


{% data reusables.codespaces.billing-for-prebuilds %} 

## <a name="setting-a-spending-limit"></a>Установка предельной суммы расходов

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

Сведения об изменении предельной суммы расходов и управлении ею см. в статье [Управление предельной суммой расходов для {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces).

{% data reusables.codespaces.exporting-changes %}

## <a name="limiting-the-choice-of-machine-types"></a>Ограничение выбора типов компьютеров

По умолчанию при создании codespace используется тип компьютера с наименьшим допустимым объемом ресурсов. Однако пользователи могут выбрать тип компьютера с большим объемом ресурсов. Это можно сделать при создании codespace, либо можно изменить тип компьютера для существующего пространства codespace. Дополнительные сведения см. в разделах [Создание codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace) и [Изменение типа компьютера для codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace).

Если выбран тип компьютера с большим объемом ресурсов, это повлияет на плату за минуту использования этого пространства codespace, как показано выше. 

Владельцы организации могут создать политику, ограничивающую доступные пользователям типы компьютеров. Дополнительные сведения см. в разделе [Ограничение доступа по типам компьютеров](/codespaces/managing-codespaces-for-your-organization/restricting-access-to-machine-types).

## <a name="how-billing-is-handled-for-forked-repositories"></a>Выставление счетов за вилки репозиториев

{% data variables.product.prodname_codespaces %} можно использовать только в организациях, где определен владелец для выставления счетов. Чтобы с организации взималась плата, пользователь должен быть членом или участником совместной работы, иначе он не сможет создать codespace. 

Например, пользователь в частной организации может создать вилку репозитория в ней, а затем использовать пространство codespace, счета за которое будут выставляться организации. Причина в том, что организация является владельцем родительского репозитория и может удалить доступ пользователя, вилку репозитория и пространство codespace.
  
## <a name="how-billing-is-handled-when-a-repository-is-transferred"></a>Выставление счетов при передаче репозитория

Плата за использование рассчитывается и сообщается каждый час. Таким образом, вы платите за любое использование, если репозиторий находится в вашей организации. При передаче репозитория за пределы вашей организации все пространства codespace в нем удаляются.

## <a name="what-happens-when-users-are-removed"></a>Что происходит при удалении пользователей

Если пользователь удаляется из организации или репозитория, его пространства codespace удаляются автоматически. 
