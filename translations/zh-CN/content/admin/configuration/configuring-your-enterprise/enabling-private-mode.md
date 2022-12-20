---
title: 启用私有模式
intro: '在私有模式下，{% data variables.product.prodname_ghe_server %} 要求每个用户必须登录才能访问安装。'
redirect_from:
  - /enterprise/admin/articles/private-mode
  - /enterprise/admin/guides/installation/security
  - /enterprise/admin/guides/installation/securing-your-instance
  - /enterprise/admin/installation/enabling-private-mode
  - /enterprise/admin/configuration/enabling-private-mode
  - /admin/configuration/enabling-private-mode
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Authentication
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
  - Privacy
  - Security
ms.openlocfilehash: 99488886b1da5b07c2ddb5d7054c10957f6c573b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332782'
---
如果 {% data variables.product.product_location %} 可通过 Internet 公开访问，就必须启用私密模式。 在私密模式下，用户不能通过 `git://` 匿名克隆存储库。 如果还启用了内置身份验证，管理员必须邀请新用户在实例上创建帐户。 有关详细信息，请参阅“[配置内置身份验证](/admin/identity-and-access-management/using-built-in-authentication/configuring-built-in-authentication)”。

{% data reusables.enterprise_installation.image-urls-viewable-warning %}

启用私密模式后，可以允许未验证的 Git 操作（以及对 {% data variables.product.product_location %} 具有网络访问权限的任何人）读取已启用匿名 Git 读取权限的实例上的公共存储库代码。 有关详细信息，请参阅“[允许管理员启用对公共存储库的匿名 Git 读取访问](/enterprise/admin/guides/user-management/allowing-admins-to-enable-anonymous-git-read-access-to-public-repositories)”。

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
4. 选择“私密模式”。
  ![启用私密模式的复选框](/assets/images/enterprise/management-console/private-mode-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}
