---
title: 계정에 맞게 GitHub Codespaces 개인 설정
shortTitle: Personalize your codespaces
intro: '{% data variables.product.product_name %}의 리포지토리를 사용하거나 설정 동기화를 사용하여 `dotfiles` {% data variables.product.prodname_github_codespaces %}를 개인 설정할 수 있습니다.'
redirect_from:
  - /github/developing-online-with-github-codespaces/personalizing-github-codespaces-for-your-account
  - /github/developing-online-with-codespaces/personalizing-codespaces-for-your-account
  - /codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account
  - /codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
  - Fundamentals
ms.openlocfilehash: 80b6cd1ee982150c1b3c0a66e1247f6098a97bcb
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160258'
---
## {% data variables.product.prodname_codespaces %} 사용자 지정 정보

개발 환경을 사용하는 경우 기본 설정 및 워크플로에 설정 및 도구를 사용자 지정하는 것이 중요한 단계입니다. {% data variables.product.prodname_github_codespaces %}을(를) 사용하면 codespace를 개인 설정할 수 있는 두 가지 주요 방법을 사용할 수 있습니다.

- [설정 동기화](#settings-sync) - 데스크톱 애플리케이션과 {% data variables.product.prodname_vscode_shortname %} 웹 클라이언트 간에 {% data variables.product.prodname_vscode %} 설정을 동기화할 수 있습니다.
- [Dot 파일](#dotfiles) – `dotfiles` 리포지토리를 사용하여 스크립트, 셸 기본 설정, 기타 구성을 지정할 수 있습니다.

{% data variables.product.prodname_github_codespaces %} 개인 설정은 사용자가 만든 모든 codespace에 적용됩니다.

프로젝트 유지 관리자는 누구나 만든 리포지토리의 모든 코드스페이스에 적용되는 기본 구성을 정의할 수도 있습니다. 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”를 참조하세요.

## 설정 동기화

설정 동기화를 사용하면 {% data variables.product.prodname_vscode_shortname %}의 컴퓨터 및 인스턴스에서 설정, 바로 가기 키, 코드 조각, 확장 및 UI 상태와 같은 구성을 동기화할 수 있습니다.

설정 동기화를 사용하도록 설정하려면 {% data variables.product.prodname_vscode %}의 작업 표시줄의 왼쪽 아래 모서리에서 {% octicon "gear" aria-label="The gear icon" %}을 선택하고 **설정 동기화 켜기...** 를 클릭합니다. 대화 상자에서 동기화하려는 설정을 선택합니다.

![관리 메뉴의 설정 동기화 옵션](/assets/images/help/codespaces/codespaces-manage-settings-sync.png)

자세한 내용은 {% data variables.product.prodname_vscode_shortname %} 설명서의 [설정 동기화 가이드](https://code.visualstudio.com/docs/editor/settings-sync) 를 참조하세요.

## Dot 파일

Dot 파일은 시스템의 애플리케이션 및 셸 구성을 제어하는 `.`로 시작하는 Unix와 유사한 시스템의 파일 및 폴더입니다. {% data variables.product.prodname_dotcom %}의 리포지토리에 dot 파일을 저장하고 관리할 수 있습니다. dot 파일 리포지토리에 포함할 항목에 대한 조언과 자습서는 [GitHub에서 dot 파일 실행](https://dotfiles.github.io/)을 참조하세요.

dot 파일 리포지토리에는 셸 별칭 및 기본 설정, 설치하려는 도구 또는 만들려는 다른 코드스페이스 사용자 지정이 포함될 수 있습니다.

개인 {% data variables.product.prodname_github_codespaces %} 설정에서 해당 리포지토리를 선택하여 소유한 리포지토리의 dotfile을 사용하도록 [{% data variables.product.prodname_github_codespaces %}](https://github.com/settings/codespaces)을(를) 구성할 수 있습니다.

새 codespace를 만들면 {% data variables.product.prodname_dotcom %}는 선택한 dot 파일 리포지토리를 codespace 환경에 복제하고 환경을 설정하기 위해 다음 파일 중 하나를 찾습니다.

* _install.sh_
* _install_
* _bootstrap.sh_
* _bootstrap_
* _script/bootstrap_
* _setup.sh_
* _setup_
* _script/setup_

해당 파일을 찾을 수 없는 경우 `.`로 시작하는 선택한 dot 파일 리포지토리의 모든 파일 또는 폴더가 codespace의 `~` 또는 `$HOME` 디렉터리로 symlink 됩니다.

선택한 dot 파일 리포지토리에 대한 변경 내용은 각 새 codespace에만 적용되며 기존 codespace에는 영향을 주지 않습니다.

{% note %}

**참고:** 현재 {% data variables.product.prodname_codespaces %}은(는) 리포지토리를 사용하여 {% data variables.product.prodname_vscode_shortname %}에 대한 사용자 범위 설정을 개인 설정할 수 `dotfiles` 없습니다. 프로젝트 리포지토리의 특정 프로젝트에 대한 기본 작업 영역 및 원격 [Codespace] 설정을 설정할 수 있습니다.  자세한 내용은 “[개발 컨테이너 소개](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration)”를 참조하세요.

{% endnote %}

### {% data variables.product.prodname_codespaces %}에 대한 dot 파일 리포지토리 사용

선택한 dotfiles 리포지토리를 사용하여 {% data variables.product.prodname_github_codespaces %} 환경을 개인 설정할 수 있습니다. dot 파일 리포지토리를 선택하면 스크립트, 기본 설정, 구성을 추가할 수 있습니다. 그런 다음 개인 {% data variables.product.prodname_github_codespaces %} 설정 페이지에서 dotfiles를 사용하도록 설정해야 합니다.

{% warning %}

**경고:** Dot 파일에는 예기치 않은 코드 또는 악성 코드가 포함될 수 있는 임의의 스크립트를 실행하는 기능이 있습니다. dot 파일 리포지토리를 설치하기 전에 스크립트가 예기치 않은 작업을 수행하지 않도록 하는 것이 좋습니다.

{% endwarning %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. "Dotfiles"에서 자동으로 **dotfiles 설치를** 선택하여 {% data variables.product.prodname_github_codespaces %}이 만드는 모든 새 codespace에 dotfile을 자동으로 설치합니다.
   ![dot 파일 설치](/assets/images/help/codespaces/install-custom-dotfiles.png)
2. dot 파일을 설치하려는 리포지토리를 선택합니다.
   ![dot 파일 리포지토리 선택](/assets/images/help/codespaces/select-dotfiles-repo.png)

스크립트, 기본 설정, 구성 파일을 dot 파일 리포지토리에 추가하거나 원할 때마다 기존 파일을 편집할 수 있습니다. 설정 변경 내용은 새 codespace에서만 선택됩니다.

codespace가 dotfiles에서 구성 설정을 선택하지 못하는 경우 "[{% data variables.product.prodname_github_codespaces %}에 대한 dotfile 문제 해결"을](/codespaces/troubleshooting/troubleshooting-dotfiles-for-codespaces) 참조하세요.

## 기타 사용 가능한 설정

[개인 설정](https://github.com/settings/codespaces)의 추가 옵션을 사용하여 {% data variables.product.prodname_github_codespaces %}을(를) 개인 설정할 수도 있습니다.

- GPG 확인을 사용하려면 “[{% data variables.product.prodname_github_codespaces %}에 대한 GPG 확인 관리](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)”를 참조하세요.
- 편집기를 설정하려면 “[{% data variables.product.prodname_github_codespaces %}에 대한 기본 편집기 설정](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)”을 참조하세요.
- codespace가 자동으로 중지되기 전에 사용하지 않는 상태로 유지할 수 있는 기간을 설정하려면 "[{% data variables.product.prodname_github_codespaces %}에 대한 시간 제한 기간 설정](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-github-codespaces)"을 참조하세요.
- 사용하지 않는 codespace가 보존되는 기간을 설정하려면 “[codespace의 자동 삭제 구성](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)”을 참조하세요.
- 기본 지역을 설정하려면 “[{% data variables.product.prodname_github_codespaces %}에 대한 기본 영역 설정](/codespaces/customizing-your-codespace/setting-your-default-region-for-github-codespaces)”을 참조하세요.

## 추가 참고 자료

* “[새 리포지토리 만들기](/github/creating-cloning-and-archiving-repositories/creating-a-new-repository)”
* "[{% data variables.product.prodname_github_codespaces %}에 대한 심층 분석](/codespaces/getting-started/deep-dive#personalizing-your-codespace-with-extensions-or-plugins)"
