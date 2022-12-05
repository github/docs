---
title: 리포지토리 초대
allowTitleToDifferFromFilename: true
shortTitle: Invitations
intro: 리포지토리 초대 API를 사용하여 리포지토리에서 협업하기 위한 초대를 보고 관리할 수 있습니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 8096f49ce586f3f56a686b99a688a6894653d9b4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065796'
---
## 리포지토리 초대 API 정보

리포지토리 초대 API를 사용하여 리포지토리에서 협업하기 위한 초대를 보고 관리할 수 있습니다. 초대된 사용자(또는 초대된 사용자를 대신하는 외부 서비스)는 초대를 수락하거나 거부할 수 있습니다.

사용자를 협력자로 추가하려면 대신 협력자 API를 사용합니다. 자세한 내용은 “[리포지토리 협력자 추가](/rest/collaborators/collaborators#add-a-repository-collaborator)”를 참조하세요.

`repo:invite` [OAuth 범위](/developers/apps/scopes-for-oauth-apps)는 리포지토리 코드에 대한 액세스 권한을 **부여하지 않고** 초대에 대한 대상 액세스 권한을 부여하는 반면 `repo` 범위는 초대뿐 아니라 코드에 대한 권한도 부여합니다.
