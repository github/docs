---
title: 验证域设置
intro: '首次启动 {% data variables.product.product_location %} 之前，请确保域设置已正确配置。'
redirect_from:
  - /enterprise/admin/installation/validating-your-domain-settings
  - /enterprise/admin/configuration/validating-your-domain-settings
  - /admin/configuration/validating-your-domain-settings
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Validate domain settings
ms.openlocfilehash: 113f7b3d3f335e73627cebf90a91cbf326c40c99
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '145100078'
---
{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.hostname-menu-item %}
4. 要测试设备的 DNS 和 SSL 设置，请单击“测试域设置”。
  ![“测试域设置”按钮](/assets/images/enterprise/management-console/test-domain-settings.png) {% data reusables.enterprise_management_console.test-domain-settings-failure %} {% data reusables.enterprise_management_console.save-settings %}
