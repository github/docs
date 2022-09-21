---
title: 升级或降级站点管理员
redirect_from:
  - /enterprise/admin/articles/promoting-a-site-administrator
  - /enterprise/admin/articles/demoting-a-site-administrator
  - /enterprise/admin/user-management/promoting-or-demoting-a-site-administrator
  - /admin/user-management/promoting-or-demoting-a-site-administrator
intro: 站点管理员可以将任何普通用户升级为站点管理员，也可以将其他站点管理员降级为普通用户。
versions:
  ghes: '*'
type: how_to
topics:
  - Access management
  - Accounts
  - User account
  - Enterprise
shortTitle: Manage administrators
ms.openlocfilehash: 19daa56cf7d750d69495a6ff52655784411f56ff
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/12/2022
ms.locfileid: '146331694'
---
{% tip %}

注意：如果[启用了 LDAP 同步](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync)，并在[为用户配置 LDAP 访问](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance)时设置了 `Administrators group` 属性，这些用户将自动获得你的实例的站点管理员访问权限。 在这种情况下，您无法按照下面的步骤手动升级用户；您必须将其添加到 LDAP 管理员组中。

{% endtip %}

有关将用户升级为组织所有者的信息，请参阅“[命令行实用工具](/enterprise/admin/guides/installation/command-line-utilities#ghe-org-admin-promote)”的 `ghe-org-admin-promote` 部分。

## 从企业设置升级用户

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
5. 在页面的右上角，单击“添加所有者”。
  ![用于添加管理员的按钮](/assets/images/help/business-accounts/business-account-add-admin-button.png)
6. 在搜索字段中，键入用户的名称，然后单击“添加”。
  ![用于添加管理员的搜索字段](/assets/images/help/business-accounts/business-account-search-to-add-admin.png)

## 从企业设置降级站点管理员

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %} {% data reusables.enterprise-accounts.administrators-tab %}
1. 在页面左上角的“Find an administrator（查找管理员）”搜索字段中，输入您想要降级的人员的用户名。
  ![用于查找管理员的搜索字段](/assets/images/help/business-accounts/business-account-search-for-admin.png)

1. 在搜索结果中，查找想要降级的人员的用户名，然后使用 {% octicon "gear" %} 下拉菜单选择“删除所有者”。
  ![“从企业中删除”选项](/assets/images/help/business-accounts/demote-admin-button.png)

## 从命令行升级用户

1. 通过 [SSH](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/) 登录设备。
2. 使用用户名运行 [ghe-user-promote](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-promote) 以升级用户。
  ```shell
  $ ghe-user-promote <em>username</em>
  ```

## 从命令行降级站点管理员

1. 通过 [SSH](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/) 登录设备。
2. 使用用户名运行 [ghe-user-demote](/enterprise/admin/guides/installation/command-line-utilities#ghe-user-demote) 以降级用户。
  ```shell
  $ ghe-user-demote <em>username</em>
  ```
