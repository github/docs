---
title: 템플릿에서 codespace 만들기
intro: 새 프로젝트를 시작하는 경우 빈 템플릿에서 codespace를 만들거나 수행하려는 작업 유형에 맞게 특별히 설계된 템플릿을 선택할 수 있습니다.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Create a codespace from a template
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 9e7ee0d110e962fa755f5f57cc70bc3cab341808
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188314'
---
## {% data variables.product.prodname_github_codespaces %}에 대한 템플릿 정보

새 프로젝트를 시작하는 경우 템플릿에서 codespace를 만들어 개발 작업을 빠르게 시작할 수 있습니다. 클라우드 기반 개발 환경에서 프로젝트를 작업하고, 파일을 클라우드에 저장하고, 다른 사용자와 공유하거나 로컬 컴퓨터에 복제할 수 있는 새 원격 리포지토리에 작업을 게시할 수 있습니다.

{% note %}

**참고**: 리포지토리가 아닌 템플릿에서 만든 Codespace는 항상 개인 계정에 청구됩니다. 자세한 내용은 “[{% data variables.product.prodname_github_codespaces %} 청구 정보](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)”를 참조하세요.

{% endnote %}

빈 템플릿에서 시작하거나, React 또는 Jupyter Notebook 같은 인기 있는 기술에 대해 {% data variables.product.company_short %}에서 유지 관리하는 템플릿 중에서 선택하거나 {% data variables.product.prodname_dotcom %}의 템플릿 리포지토리에서 codespace를 시작할 수 있습니다. 빈 템플릿을 사용하면 클라우드 기반 컴퓨팅 리소스와 기본 codespace 이미지로 미리 설치된 도구, 언어 및 런타임 환경에 액세스할 수 있는 빈 디렉터리로 시작합니다. 다른 템플릿을 사용하면 작업 중인 기술에 대한 시작 파일과 일반적으로 일부 사용자 지정 환경 구성을 포함하는 추가 정보 파일, `.gitignore` 파일 및 개발 컨테이너 구성 파일과 같은 몇 가지 추가 파일을 얻을 수 있습니다. 개발 컨테이너 및 기본 이미지에 대한 자세한 내용은 "[개발 컨테이너 소개"를 참조하세요.](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)

예를 들어 {% data variables.product.company_short %}의 React 템플릿에서 codespace를 만드는 경우 , , `app.js`등의 `package.json`간단한 애플리케이션`index.js`에 대한 템플릿 파일이 포함된 작업 영역에 도착합니다. codespace가 열리면 개발 서버가 자동으로 시작되고 {% data variables.product.prodname_vscode_shortname %} 웹 클라이언트 내의 간단한 브라우저 탭에서 실행 중인 애플리케이션을 볼 수 있습니다.

![codespace에서 실행되는 React 템플릿의 스크린샷](/assets/images/help/codespaces/react-template.png)

템플릿에 포함된 파일 및 구성은 템플릿 리포지토리에 정의됩니다. codespace를 만들 때 템플릿 리포지토리가 codespace에 복제됩니다. 그런 다음 링크가 끊어지고 codespace는 하나의 리포지토리에 게시할 때까지 원격 리포지토리에 연결되지 않습니다. 

{% tip %}

**팁:** 사용자가 프레임워크, 라이브러리 또는 기타 프로젝트를 시작할 수 있도록 {% data variables.product.prodname_github_codespaces %}에 사용할 템플릿 리포지토리를 설정할 수 있습니다. 자세한 내용은 "[{% data variables.product.prodname_github_codespaces %}에 대한 템플릿 리포지토리 설정](/codespaces/setting-up-your-project-for-codespaces/setting-up-a-template-repository-for-github-codespaces)"을 참조하세요.

{% endtip %}

## {% data variables.product.company_short %} 템플릿에서 codespace 만들기

빈 템플릿을 포함하여 {% data variables.product.company_short %}에서 유지 관리하는 템플릿은 "사용자 codespaces" 페이지에서 사용할 수 있습니다.

{% data reusables.codespaces.your-codespaces-procedure-step %} {% data reusables.codespaces.view-all-templates-step %}
1. 필요에 따라 템플릿에 대한 파일이 포함된 템플릿 리포지토리를 보려면 템플릿의 이름을 클릭합니다.

   !["React"이 강조 표시된 "빠른 시작 템플릿 탐색" 섹션의 스크린샷](/assets/images/help/codespaces/react-template-name.png)

1. 시작하려는 템플릿 아래에서 **이 템플릿 사용을** 클릭합니다.
   
   ![React 템플릿 아래에 "이 템플릿 사용" 단추가 강조 표시된 빠른 시작 템플릿의 스크린샷](/assets/images/help/codespaces/react-template-button.png)

{% data reusables.codespaces.template-codespaces-default-editor %}

## 템플릿 리포지토리에서 codespace 만들기

모든 템플릿 리포지토리에서 codespace를 만든 다음 준비가 되면 새 리포지토리에 작업을 게시할 수 있습니다. 템플릿 리포지토리에 대한 자세한 내용은 "[템플릿에서 리포지토리 만들기"를](/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#about-repository-templates) 참조하세요.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.codespaces.open-template-in-codespace-step %}

   {% note %}

   **참고:** 템플릿 리포지토리의 유지 관리자이고 템플릿 리포지토리 자체에 대한 변경 내용을 커밋하려는 경우 **{% octicon "code" aria-label="The code icon" %} 코드** 드롭다운에서 codespace를 만들어야 합니다. 자세한 내용은 "[리포지토리에 대한 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository).

   {% endnote %}

{% data reusables.codespaces.template-codespaces-default-editor %}

## {% data variables.product.product_name %}의 리포지토리에 게시

{% data reusables.codespaces.about-publishing-templates %}

### {% data variables.product.prodname_vscode_shortname %}에서 게시 

{% data reusables.codespaces.publishing-template-codespaces %}

codespace가 게시되면 {% data variables.product.prodname_github_codespaces %} 환경을 사용자 지정할 수 있는 다양한 옵션에 액세스할 수 있습니다. 예를 들어 다음을 수행할 수 있습니다.

- codespace의 컴퓨터 유형을 변경하여 수행 중인 작업에 적합한 리소스를 사용하고 있는지 확인합니다("[codespace에 대한 컴퓨터 유형 변경](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)"참조).
- {% data variables.product.prodname_dotcom %}에서 자동으로 GPG를 사용하여 codespace에서 커밋에 서명하도록 허용합니다("[{% data variables.product.prodname_github_codespaces %}에 대한 GPG 확인 관리](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces)"참조).
- codespace와 암호화된 비밀을 공유합니다("[codespaces에 대한 암호화된 비밀 관리](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"참조).

### {% data variables.product.prodname_dotcom_the_website %}에서 게시 

{% data variables.product.prodname_dotcom_the_website %}의 "사용자 codespaces" 페이지에서 게시되지 않은 codespace를 게시할 수 있습니다. 현재 브라우저에서 열려 있지 않은 codespace를 게시하려는 경우에 유용합니다. 이렇게 하면 작업이 리포지토리에 유지되지만 기존 codespace와 새 리포지토리 사이에는 링크가 없습니다. 그러나 새 리포지토리로 이동하여 여기에서 codespace를 만들 수 있으며 이 codespace는 리포지토리에 연결됩니다.

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. 게시되지 않은 codespace 옆에 있는 줄임표(**...**)를 클릭한 다음 **새 리포지토리에 게시를** 선택합니다.

   !["새 리포지토리에 게시" 단추의 스크린샷](/assets/images/help/codespaces/publish-to-new-repository.png)
1. 새 리포지토리의 이름을 선택하고 **퍼블릭** 또는 **프라이빗** 으로 설정하고 **리포지토리 만들기** 를 클릭합니다.

   !["새 리포지토리에 게시" 드롭다운의 스크린샷](/assets/images/help/codespaces/template-new-repository-settings.png)
1. 필요에 따라 새 리포지토리를 보려면 **리포지토리 보기를** 클릭합니다.

## 추가 정보

- "[리포지토리에 대한 codespace 만들기](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)"
- "[codespace 수명 주기](/codespaces/getting-started/the-codespace-lifecycle)"
- "[codespace에서 소스 제어 사용](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)"
