---
title: 조직의 SSH 인증 기관 관리
intro: 조직에서 SSH 인증 기관을 추가하거나 삭제할 수 있습니다.
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
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145134943'
---
조직에 SSH CA를 추가하여 사용자가 제공한 SSH 인증서를 사용하여 멤버가 조직의 리포지토리에 액세스하도록 허용할 수 있습니다. {% data reusables.organizations.can-require-ssh-cert %} 자세한 내용은 “[SSH 인증 기관 정보](/articles/about-ssh-certificate-authorities)”를 참조하세요.

{% data reusables.organizations.ssh-ca-ghec-only %}

{% data reusables.organizations.add-extension-to-cert %}

## SSH 인증 기관 추가

엔터프라이즈에 SSH 인증서가 필요한 경우 엔터프라이즈 구성원은 SSH를 통해 Git 작업에 특별한 URL을 사용해야 합니다. 자세한 내용은 “[SSH 인증 기관 정보](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates)”를 참조하세요.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.new-ssh-ca %} {% data reusables.organizations.require-ssh-cert %}

## SSH 인증 기관 삭제

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.organizations.delete-ssh-ca %}
