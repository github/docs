---
title: Настройка пользовательских нижних колонтитулов
intro: 'Вы можете предоставить пользователям простой и удобный доступ к ссылкам предприятия, добавив настраиваемые нижние колонтитулы в {% data variables.product.product_name %}.'
versions:
  ghec: '*'
  ghes: '>=3.4'
  ghae: '>= 3.4'
type: how_to
topics:
  - Enterprise
  - Fundamentals
shortTitle: Configure custom footers
ms.openlocfilehash: d051e2399841e90291de62e496c534520465235a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120704'
---
Владельцы предприятия могут настроить {% data variables.product.product_name %} для отображения пользовательских нижних колонтитулов, содержащих до пяти дополнительных ссылок.

![Пользовательский нижний колонтитул](/assets/images/enterprise/custom-footer/octodemo-footer.png)

Пользовательский нижний колонтитул отображается над нижним колонтитулом {% data variables.product.prodname_dotcom %} {% ifversion ghes or ghae %}для всех пользователей, на всех страницах {% data variables.product.product_name %}{% elsif ghec %}для всех членов предприятия и участников совместной работы на всех страницах репозитория и организации для репозиториев и организаций, принадлежащих организации{% endif %}.

## Настройка пользовательских нижних колонтитулов для предприятия

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}

1. В разделе "Параметры" щелкните **Профиль**.
{%- ifversion ghec %} ![Параметры профиля предприятия](/assets/images/enterprise/custom-footer/enterprise-profile-ghec.png) {%- else %} ![Параметры профиля предприятия](/assets/images/enterprise/custom-footer/enterprise-profile-ghes.png) {%- endif %}

1. В верхней части раздела "Профиль" щелкните **Пользовательский нижний колонтитул**.
![Раздел "Пользовательский нижний колонтитул"](/assets/images/enterprise/custom-footer/custom-footer-section.png)

1. Добавьте до пяти ссылок в отображаемых полях.
![Добавление ссылок нижнего колонтитула](/assets/images/enterprise/custom-footer/add-footer-links.png)

1. Нажмите **Обновить пользовательский нижний колонтитул**, чтобы сохранить содержимое и отобразить пользовательский нижний колонтитул.
![Обновление пользовательского нижнего колонтитула](/assets/images/enterprise/custom-footer/update-custom-footer.png)
