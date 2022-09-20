---
title: 管理组织的 SSH 认证中心
intro: 可在组织中添加或删除 SSH 认证中心。
redirect_from:
  - /articles/managing-your-organizations-ssh-certificate-authorities
  - /github/setting-up-and-managing-organizations-and-teams/managing-your-organizations-ssh-certificate-authorities
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage SSH authorities
permissions: Organization owners can manage an organization's SSH certificate authorities (CA).
ms.openlocfilehash: d2f5b946e854accd68a3e6293f8e384996a261d7
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145127459'
---
您可以通过向组织添加 SSH CA 来允许成员使用提供的 SSH 证书访问组织的仓库。 {% data reusables.organizations.can-require-ssh-cert %} 有关详细信息，请参阅“[关于 SSH 证书颁发机构](/articles/about-ssh-certificate-authorities)”。

{% data reusables.organizations.ssh-ca-ghec-only %}

{% data reusables.organizations.add-extension-to-cert %}

## 添加 SSH 认证中心

如果您的企业需要 SSH 证书，企业成员应使用特殊的 URL 通过 SSH 进行 Git 操作。 有关详细信息，请参阅“[关于 SSH 证书颁发机构](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates)”。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.new-ssh-ca %} {% data reusables.organizations.require-ssh-cert %}

## 删除 SSH 认证中心

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.delete-ssh-ca %}
