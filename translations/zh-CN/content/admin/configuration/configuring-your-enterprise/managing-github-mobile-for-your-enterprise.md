---
title: 管理企业的 GitHub Mobile
intro: '可以决定用户是否可以使用 {% data variables.product.prodname_mobile %} 连接到 {% data variables.product.product_location %}。'
permissions: 'Enterprise owners can manage {% data variables.product.prodname_mobile %} for a {% data variables.product.product_name %} instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Mobile
redirect_from:
  - /admin/configuration/configuring-your-enterprise/managing-github-for-mobile-for-your-enterprise
  - /admin/configuration/managing-github-for-mobile-for-your-enterprise
shortTitle: Manage GitHub Mobile
ms.openlocfilehash: f46673c16611a7f1ced6d0476c6ad3d79807f6d9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062264'
---
## 关于 {% data variables.product.prodname_mobile %}

在身份验证成功后，借助 {% data variables.product.prodname_mobile %} 可从移动设备会审、协作和管理 {% data variables.product.product_location %} 上的工作。 {% data reusables.mobile.about-mobile %}有关详细信息，请参阅“[{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile)”。

可允许或禁止用户使用 {% data variables.product.prodname_mobile %} 向 {% data variables.product.product_location %} 进行身份验证并访问实例的数据。 默认情况下，{% data variables.product.prodname_mobile %} {% ifversion ghes > 3.3 %}为使用 {% data variables.product.product_location %} 的用户启用。{% else %}不为使用 {% data variables.product.product_location %} 的用户启用。 若要允许使用 {% data variables.product.prodname_mobile %} 连接到实例，必须为实例启用该功能。{% endif %}

{% ifversion ghes < 3.6 %} {% note %}

注意：如果升级到 {% data variables.product.prodname_ghe_server %} 3.4.0 或更高版本，并且以前未禁用或启用 {% data variables.product.prodname_mobile %}，则默认情况下将启用 {% data variables.product.prodname_mobile %}。 如果以前为实例禁用或启用了 {% data variables.product.prodname_mobile %}，则升级后将保留首选项。 有关升级实例的详细信息，请参阅“[升级 {% data variables.product.product_name %}](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)”。

{% endnote %} {% endif %}

## 启用或禁用 {% data variables.product.prodname_mobile %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %}
1. 在左边栏中，单击“移动”。
  ![{% data variables.product.prodname_ghe_server %} 管理控制台左边栏中的“移动”](/assets/images/enterprise/management-console/click-mobile.png)
1. 在“GitHub Mobile”下，选择或取消选择“启用 GitHub Mobile 应用”。
  ![{% data variables.product.prodname_ghe_server %} 管理控制台中的“启用 GitHub Mobile 应用”复选框](/assets/images/enterprise/management-console/select-enable-github-mobile-apps.png) {% data reusables.enterprise_management_console.save-settings %}
