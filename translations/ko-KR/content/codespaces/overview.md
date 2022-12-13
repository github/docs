---
title: GitHub Codespaces 개요
shortTitle: Overview
intro: '이 가이드에서는 {% data variables.product.prodname_github_codespaces %}를 소개하고 그 작동 방식과 사용 방법에 대한 세부 정보를 제공합니다.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/about-codespaces
  - /github/developing-online-with-github-codespaces/about-github-codespaces
  - /github/developing-online-with-codespaces/about-codespaces
  - /codespaces/getting-started-with-codespaces/about-codespaces
  - /codespaces/about-codespaces
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
ms.openlocfilehash: 9d01df3f8dae7ceb788e2dd57b02fb3cc977400d
ms.sourcegitcommit: 1529de77bfcbe45519131b5f5fb3ab319758c2d2
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148164325'
---
## codespace란?

codespace는 클라우드에서 호스트되는 개발 환경입니다. 프로젝트의 모든 사용자에 대해 반복 가능한 codespace 구성을 만드는 리포지토리(종종 Configuration-as-Code라고도 함)에 [구성 파일](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)을 커밋하여 {% data variables.product.prodname_github_codespaces %}에 대한 프로젝트를 사용자 지정할 수 있습니다.

각 codespace는 {% data variables.product.prodname_dotcom %}에서 호스트되는 가상 머신에서 실행됩니다. 필요한 리소스에 따라 사용할 컴퓨터 유형을 선택할 수 있습니다. 2코어 프로세서, 4GB RAM 및 32GB 스토리지부터 다양한 유형의 컴퓨터를 사용할 수 있습니다. 

브라우저에서, {% data variables.product.prodname_vscode %}에서, JetBrains Gateway 애플리케이션에서 또는 {% data variables.product.prodname_cli %}를 사용하여 codespace에 연결할 수 있습니다.

![{% data variables.product.prodname_github_codespaces %}의 작동 방식을 보여 주는 다이어그램](/assets/images/help/codespaces/codespaces-diagram.png)

## {% data variables.product.prodname_github_codespaces %} 사용하기

클라우드 기반 컴퓨팅 리소스를 사용하여 개발을 시작하려면 템플릿 또는 분기에서 codespace를 만들거나 리포지토리에서 커밋할 수 있습니다. 템플릿에서 codespace를 만들 때 빈 템플릿에서 시작하거나 수행 중인 작업에 적합한 템플릿을 선택할 수 있습니다.

{% data reusables.codespaces.links-to-get-started %}

### 개인 계정이 소유한 codespace 사용

모든 개인 {% 데이터 variables.product.prodname_dotcom_the_website %} 계정에는 무료 또는 Pro 요금제에 포함된 {% data variables.product.prodname_github_codespaces %}의 무료 사용 할당량이 매월 있습니다. 설정을 변경하거나 결제 세부 정보를 제공하지 않고 개인 계정에서 {% data variables.product.prodname_github_codespaces %}을(를) 사용할 수 있습니다.

복제할 수 있는 모든 리포지토리에 대한 codespace를 만들고 사용할 수 있습니다. 템플릿을 사용하여 리포지토리와 처음 연결되지 않은 codespace를 만들 수도 있습니다. 조직 소유 리포지토리에서 codespace를 만드는 경우 codespace 사용은 조직(조직이 구성한 경우) 또는 개인 계정에 청구됩니다. 템플릿에서 만든 Codespace는 항상 개인 계정에 청구됩니다. 

{% data reusables.codespaces.codespaces-continue-by-paying %} 

### 조직 소유 codespace 사용

조직 소유자는 조직 또는 엔터프라이즈 계정에 청구할 수 있는 {% 데이터 variables.product.prodname_github_codespaces %}을(를) 사용하도록 설정할 수 있습니다. 이는 조직이 소유한 리포지토리에서 만든 codespace에 적용됩니다. 자세한 내용은 “[조직에 {% data variables.product.prodname_github_codespaces %} 사용](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)”을 참조하세요. 조직 또는 엔터프라이즈 계정에서 {% data variables.product.prodname_github_codespaces %}을(를) 사용하기 위한 지출 한도를 설정할 수 있습니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %}에 대한 지출 한도 관리](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)”를 참조하세요.

codespace 사용이 조직 또는 엔터프라이즈에 청구되는 경우 codespace를 만들 때 표시됩니다. 자세한 내용은 "[리포지토리에 대한 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository). 조직 또는 부모 엔터프라이즈에 청구되는 Codespace는 조직이 소유하고 있으며 조직 소유자가 삭제할 수 있습니다. 자세한 내용은 “[codespace 삭제](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization)”를 참조하세요. 

### {% data variables.product.prodname_github_codespaces %} 사용자 지정

Codespace에서 런타임과 도구를 사용자 지정하기 위해 리포지토리에 대한 하나 이상의 개발 컨테이너 구성을 만들 수 있습니다. 리포지토리에 개발 컨테이너 구성을 추가하면 사용자가 리포지토리에서 수행하는 작업에 적합한 다양한 개발 환경을 정의할 수 있습니다. 

개발 컨테이너 구성 없이 리포지토리에서 codespace를 만드는 경우 {% data variables.product.prodname_github_codespaces %}는 많은 도구, 언어 및 런타임 환경을 포함하는 기본 codespace 이미지를 사용하여 리포지토리를 환경에 복제합니다. 템플릿에서 codespace를 만드는 경우 기본 이미지 위에 몇 가지 초기 구성으로 시작할 수 있습니다. 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”를 참조하세요.

공용 [dotfiles](https://dotfiles.github.io/tutorials/) 리포지토리를 사용하여 codespace 환경의 측면을 개인 설정할 수 있습니다. dotfiles를 사용하여 셸 별칭 및 기본 설정을 지정하거나 사용하려는 도구의 개인 기본 설정을 설치할 수 있습니다. 브라우저 또는 {% data variables.product.prodname_vscode %}에서 {% data variables.product.prodname_github_codespaces %}를 사용하는 경우 [설정 동기화](https://code.visualstudio.com/docs/editor/settings-sync) 를 사용하여 Codespace 편집기에서 {% data variables.product.prodname_vscode %}의 로컬 설치에서 설정한 것과 동일한 설정, 바로 가기 키, 코드 조각 및 확장을 제공할 수 있습니다. 

자세한 내용은 “[codespace 사용자 지정](/codespaces/customizing-your-codespace)”을 참조하세요.

## {% data variables.product.prodname_codespaces %}에 대한 청구

{% data variables.product.prodname_github_codespaces %}의 가격 책정, 스토리지 및 사용량에 대한 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %}에 대한 청구 정보"를 참조하세요](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

{% data reusables.codespaces.codespaces-monthly-billing %} 조직 소유자와 청구 관리자가 조직의 {% data variables.product.prodname_github_codespaces %}에 대한 지출 한도를 관리하는 방법에 대한 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %}에 대한 지출 한도 관리"를](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces) 참조하세요.
