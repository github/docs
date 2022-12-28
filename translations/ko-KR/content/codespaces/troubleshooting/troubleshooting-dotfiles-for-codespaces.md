---
title: GitHub Codespaces에 대한 dotfile 문제 해결
allowTitleToDifferFromFilename: true
intro: 일반적인 dot 파일 이슈에 대한 문제 해결 단계
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Dotfiles
ms.openlocfilehash: 699f790e45c71e685ac6b301e8dea1eca2ee6f15
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158687'
---
codespace가 dot 파일에서 구성 설정을 선택하지 못하는 경우 다음 디버깅 단계를 수행해야 합니다.

1. [개인 {% data variables.product.prodname_github_codespaces %} 설정](https://github.com/settings/codespaces)에서 **자동으로 dotfile 설치를 선택하여 dotfiles** 를 사용하도록 설정합니다.

   !['dot 파일 자동 설치' 옵션](/assets/images/help/codespaces/automatically-install-dotfiles.png)

1. `/workspaces/.codespaces/.persistedshare/dotfiles`에서 dot 파일이 복제되었는지 확인합니다.
   - dot 파일이 복제된 경우 설치 스크립트를 수동으로 다시 실행하여 실행 가능한지 확인합니다.
   - dot 파일이 복제되지 않은 경우 `/workspaces/.codespaces/.persistedshare/EnvironmentLog.txt`를 확인하여 복제에 문제가 있는지 확인합니다.
1. `/workspaces/.codespaces/.persistedshare/creation.log` 확인합니다. 자세한 내용은 [만들기 로그](/codespaces/troubleshooting/codespaces-logs#creation-logs)를 참조하세요.

dot 파일의 구성이 올바르게 선택되었지만 구성의 일부가 codespace와 호환되지 않는 경우 환경 변수를 사용하여 `$CODESPACES` codespace별 구성 설정에 대한 조건부 논리를 추가합니다.
