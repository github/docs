---
title: OrganizationのSSH認証局を管理する
intro: Organizationから、SSH認証局を追加または削除することができます。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145130688'
---
SSH CAをOrganizationに追加すると、メンバーはあなたが提供したSSH証明書を使用してOrganizationにアクセスできるようになります。 {% data reusables.organizations.can-require-ssh-cert %} 詳細については、「[SSH 認証局について](/articles/about-ssh-certificate-authorities)」を参照してください。

{% data reusables.organizations.ssh-ca-ghec-only %}

{% data reusables.organizations.add-extension-to-cert %}

## SSH認証局を追加する

Enterprise に SSH 証明書が必要な場合、Enterprise メンバーは SSH 経由の Git 操作に特別な URL を使用する必要があります。 詳細については、「[SSH 認証局について](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates)」を参照してください。

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.new-ssh-ca %} {% data reusables.organizations.require-ssh-cert %}

## SSH認証局を削除する

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.delete-ssh-ca %}
