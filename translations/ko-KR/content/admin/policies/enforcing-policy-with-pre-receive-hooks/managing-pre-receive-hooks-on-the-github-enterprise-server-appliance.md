---
title: GitHub Enterprise Server 어플라이언스에서 사전 수신 후크 관리
intro: '사용자가 {% data variables.product.prodname_ghe_server %} 어플라이언스 내에서 사전 수신 후크를 사용하는 방법을 구성합니다.'
redirect_from:
  - /enterprise/admin/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /enterprise/admin/guides/developer-workflow/managing-pre-receive-hooks-on-the-github-enterprise-appliance
  - /enterprise/admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
  - /admin/policies/managing-pre-receive-hooks-on-the-github-enterprise-server-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Pre-receive hooks
shortTitle: Manage pre-receive hooks
ms.openlocfilehash: 0e57f86b9a15d5001d6ab0d9f20578690ab5361f
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112503'
---
## 사전 수신 후크 만들기

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
4. **사전 수신 후크 추가** 를 클릭합니다.
![사전 수신 후크 추가](/assets/images/enterprise/site-admin-settings/add-pre-receive-hook.png)
5. **후크 이름** 필드에 만들려는 후크의 이름을 입력합니다.
![사전 수신 후크 이름](/assets/images/enterprise/site-admin-settings/hook-name.png)
6. **환경** 드롭다운 메뉴에서 후크를 실행할 환경을 선택합니다.
![후크 환경](/assets/images/enterprise/site-admin-settings/environment.png)
7. **스크립트** 아래의 **후크 리포지토리 선택** 드롭다운 메뉴에서 사전 수신 후크 스크립트가 포함된 리포지토리를 선택합니다. **파일 선택** 드롭다운 메뉴에서 사전 수신 후크 스크립트의 파일 이름을 선택합니다.
![후크 스크립트](/assets/images/enterprise/site-admin-settings/hook-script.png)
8. **종료 상태를 사용하여 푸시 허용 또는 거부** 를 선택하여 스크립트를 적용합니다. 이 옵션을 선택 취소하면 종료 상태 값이 무시되는 동안 스크립트를 테스트할 수 있습니다. 이 모드에서는 스크립트의 출력이 명령줄에서 사용자에게 표시되지만 웹 인터페이스에서는 표시되지 않습니다.
![종료 상태 사용](/assets/images/enterprise/site-admin-settings/use-exit-status.png)
9. 사전 수신 후크를 모든 리포지토리에서 실행하려면 **기본적으로 모든 리포지토리에서 이 사전 수신 후크 사용** 을 선택합니다.
![모든 리포지토리에서 후크 사용](/assets/images/enterprise/site-admin-settings/enable-hook-all-repos.png)
10. **관리자가 이 후크를 사용하거나 사용하지 않도록 설정할 수 있음** 을 선택하여 관리자 또는 소유자 권한이 있는 조직 구성원이 이 사전 수신 후크를 사용할지 선택하도록 허용합니다.
![관리자가 후크를 사용하거나 사용하지 않도록 설정](/assets/images/enterprise/site-admin-settings/admins-enable-hook.png)

## 사전 수신 후크 편집

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
1. 편집하려는 사전 수신 후크 옆에 있는 {% octicon "pencil" aria-label="The edit icon" %} 아이콘을 클릭합니다.
![사전 수신 편집](/assets/images/enterprise/site-admin-settings/edit-pre-receive-hook.png)

## 사전 수신 후크 삭제

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
2. 삭제하려는 사전 수신 후크 옆에 있는 {% octicon "x" aria-label="X symbol" %}를 클릭합니다.
![사전 수신 편집](/assets/images/enterprise/site-admin-settings/delete-pre-receive-hook.png)

## 조직에 대한 사전 수신 후크 구성

사이트 관리자가 사전 수신 후크를 만들 때 **관리자가 이 후크를 사용하거나 사용하지 않도록 설정할 수 있음** 옵션을 선택한 경우에만 조직 관리자는 조직에 대한 후크 권한을 구성할 수 있습니다. 리포지토리에 대한 사전 수신 후크를 구성하려면 조직 관리자 또는 소유자여야 합니다.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. 왼쪽 사이드바에서 **후크** 를 클릭합니다.
![후크 사이드바](/assets/images/enterprise/orgs-and-teams/hooks-sidebar.png)
5. 구성하려는 사전 수신 후크 옆에 있는 **후크 권한** 드롭다운 메뉴를 클릭합니다. 사전 수신 후크를 사용하거나 사용하지 않도록 설정하거나 리포지토리 관리자가 구성할 수 있도록 허용할지 선택합니다.
![후크 권한](/assets/images/enterprise/orgs-and-teams/hook-permissions.png)

## 리포지토리에 대한 사전 수신 후크 구성

사이트 관리자가 사전 수신 후크를 만들 때 **관리자가 이 후크를 사용하거나 사용하지 않도록 설정할 수 있음** 옵션을 선택한 경우에만 리포지토리 소유자는 후크를 구성할 수 있습니다. 조직에서 조직 소유자는 **구성 가능한** 후크 권한도 선택해야 합니다. 리포지토리에 대한 사전 수신 후크를 구성하려면 리포지토리 소유자여야 합니다.

{% data reusables.profile.enterprise_access_profile %}
2. **리포지토리** 를 클릭하고 사전 수신 후크를 구성할 리포지토리를 선택합니다.
![리포지토리](/assets/images/enterprise/repos/repositories.png) {% data reusables.repositories.sidebar-settings %}
4. 왼쪽 사이드바에서 **후크 및 서비스** 를 클릭합니다.
![후크 및 서비스](/assets/images/enterprise/repos/hooks-services.png)
5. 구성하려는 사전 수신 후크 옆에 있는 **후크 권한** 드롭다운 메뉴를 클릭합니다. 사전 수신 후크를 사용하거나 사용하지 않도록 설정할지 선택합니다.
![리포지토리 후크 권한](/assets/images/enterprise/repos/repo-hook-permissions.png)
