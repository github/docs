---
title: '오류: user/repo에 부여된 권한이 user/other-repo에 거부됨'
intro: 이 오류는 푸시에 사용하는 키가 다른 리포지토리에 배포 키로 연결되어 있으며 푸시하려는 리포지토리에 대한 액세스 권한이 없음을 의미합니다.
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-user-other-repo
  - /articles/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-to-userrepo-denied-to-userother-repo
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied other-repo
ms.openlocfilehash: 4d4898e947338e39c5ade86b5ea0a71f54f36f03
ms.sourcegitcommit: 872c4751a3fc255671295a5dea6a2081c66b7b71
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 08/30/2022
ms.locfileid: '145088204'
---
문제를 해결하려면 리포지토리에서 배포 키를 제거하고 대신 [개인 계정에 키를 추가](/articles/adding-a-new-ssh-key-to-your-github-account)합니다.

사용 중인 키가 배포 키로 의도된 경우 자세한 내용은 [배포 키에 대한 가이드](/guides/managing-deploy-keys)를 확인하세요.
