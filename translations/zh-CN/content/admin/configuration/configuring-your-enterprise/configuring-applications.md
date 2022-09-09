---
title: 配置应用程序
intro: '你可以为 {% data variables.product.product_location %} 配置内部应用程序设置。'
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
ms.openlocfilehash: bcc51bdabb5dc0b5ecdd4f77db9246a60c8df496
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145100074'
---
## 调整图像缓存

可以选择 {% data variables.product.product_location %} 缓存头像的时长。 如果您增加缓存时间，则会增加加载用户头像所需的时长。 将缓存时间值配置为过小的值会导致 {% data variables.product.product_location %} 工作进程过载。 

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
3. 在左侧边栏中，单击“应用程序”。
![设置边栏中的“应用程序”选项卡](/assets/images/enterprise/management-console/sidebar-applications.png)
4. 在“头像图像缓存时间(秒)”下，输入希望 {% data variables.product.product_location %} 缓存头像图像的秒数。
![头像图像缓存表单字段](/assets/images/enterprise/management-console/add-image-caching-value-field.png) {% data reusables.enterprise_management_console.save-settings %}
