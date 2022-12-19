---
title: '오류: user/repo에 부여된 권한이 other-user에 거부됨'
intro: 이 오류는 푸시에 사용하는 키가 리포지토리에 액세스할 수 없는 계정에 연결되어 있음을 의미합니다.
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-other-user
  - /articles/error-permission-to-userrepo-denied-to-other-user
  - /github/authenticating-to-github/error-permission-to-userrepo-denied-to-other-user
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-to-userrepo-denied-to-other-user
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied other-user
ms.openlocfilehash: b46df8f9e8671008b37d3db69e2094e96e0413b8
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145088207'
---
문제를 해결하려면 리포지토리 소유자(`user`)가 리포지토리의 협력자로 또는 리포지토리에 대한 쓰기 권한이 있는 팀에 사용자 계정(`other-user`)을 추가해야 합니다.
