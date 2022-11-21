---
title: 자체 호스팅 실행기 그룹
intro: 자체 호스트 실행기 그룹 API를 사용하면 자체 호스팅 실행기 그룹을 관리할 수 있습니다.
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: ca08d05414764250a11dc94bac763f5aa56060be
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064372'
---
## 자체 호스팅 실행기 그룹 API 정보

자체 호스트 실행기 그룹 API를 사용하여 자체 호스팅 실행기 그룹을 관리할 수 있습니다. 자세한 내용은 “[그룹을 사용하여 자체 호스트 실행기에 대한 액세스 관리](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)”를 참조하세요.

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %}에는 리포지토리에 대한 `administration` 권한 또는 조직에 대한 `organization_self_hosted_runners` 권한이 있어야 합니다. 인증된 사용자는 리포지토리 또는 조직에 대한 관리자 액세스 권한이 있어야 하며 엔터프라이즈에서 이 API를 사용하려면 `manage_runners:enterprise` 범위가 있어야 합니다.
