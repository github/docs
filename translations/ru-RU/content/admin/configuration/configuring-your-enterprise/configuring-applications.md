---
title: Настройка приложений
intro: 'Внутренние параметры приложения можно настроить для {% данных variables.location.product_location %}.'
redirect_from:
  - /enterprise/admin/installation/configuring-applications
  - /enterprise/admin/configuration/configuring-applications
  - /admin/configuration/configuring-applications
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 166206b891f1137e4b69fed702f5b6f1a1bb7a9e
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098059'
---
## Настройка кэширования изображений

Вы можете выбрать период времени, когда {% данных variables.location.product_location %} кэширует аватары. При увеличении времени кэша увеличивается время загрузки аватара пользователя. Настройка времени кэша с слишком низким значением может перегружать рабочие процессы {% данных variables.location.product_location %}. 

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
3. На левой боковой панели щелкните **Приложения**.
![Вкладка "Приложения" на боковой панели параметров](/assets/images/enterprise/management-console/sidebar-applications.png)
4. В разделе "Время кэша изображений аватара (в секундах)" введите количество секунд, в которых требуется {% данных variables.location.product_location %} для кэширования изображений аватаров.
![Поле формы кэширования изображения аватара](/assets/images/enterprise/management-console/add-image-caching-value-field.png) {% data reusables.enterprise_management_console.save-settings %}
