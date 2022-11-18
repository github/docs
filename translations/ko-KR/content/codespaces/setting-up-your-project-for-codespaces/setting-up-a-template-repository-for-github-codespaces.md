---
title: GitHub Codespaces에 대한 템플릿 리포지토리 설정
shortTitle: Set up a template repo
intro: '{% data variables.product.prodname_github_codespaces %}에 사용할 템플릿 리포지토리를 설정하여 사람들이 프로젝트를 시작할 수 있도록 도울 수 있습니다.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: 155aa9bf839301439d2746b4b6f0f0575d2e60ff
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159913'
---
## 소개

템플릿 리포지토리를 설정하면 사용자가 {% data variables.product.prodname_github_codespaces %}에서 프레임워크, 라이브러리 또는 기타 프로젝트를 시작할 수 있습니다. 사용자는 리포지토리를 복제하거나 도구 또는 기타 종속성을 설치하는 것에 대해 걱정할 필요 없이 클라우드 기반 개발 환경에서 즉시 템플릿 파일 작업을 시작할 수 있습니다. 일부 구성을 사용하면 편집을 위해 이미 열려 있는 중요한 파일이 있는 codespace에서 사용자를 설정할 수 있으며, {% data variables.product.prodname_vscode_shortname %} 웹 편집기 내의 미리 보기 브라우저 탭에서 이미 실행 중인 애플리케이션을 사용할 수 있습니다.

템플릿 리포지토리에 대한 읽기 권한이 있는 사용자는 {% data variables.product.product_name %}의 리포지토리 페이지에서 codespace를 만들 수 있습니다. 기존 리포지토리를 템플릿으로 전환할 수 있으며 사용자가 템플릿 리포지토리에서 codespace를 만들 수 있도록 설정을 변경할 필요가 없습니다. 리포지토리를 템플릿으로 전환하는 방법에 대한 자세한 내용은 "[템플릿 리포지토리 만들기"를 참조하세요](/repositories/creating-and-managing-repositories/creating-a-template-repository).

서식 파일의 "새 codespace 만들기" 페이지로 직접 사용자를 안내하는 형식 `https://github.com/codespaces/new?template_repository=OWNER/TEMPLATE-REPO` 의 링크를 제공할 수 있습니다.

!["새 codespace 만들기" 페이지의 스크린샷](/assets/images/help/codespaces/create-a-new-codespace-page.png)

예를 들어 프레임워크를 시작하기 위한 자습서에서 이 링크를 제공할 수 있습니다. 링크에서 를 템플릿 리포지토리의 이름(예`monalisa/octo-template`: )으로 바꿉 `OWNER/TEMPLATE-REPO` 있습니다.

누군가가 템플릿에서 codespace를 만들면 템플릿 리포지토리의 내용이 해당 codespace에 복제됩니다. 사용자가 준비가 되면 개인 계정에 속한 {% data variables.product.product_name %}의 새 리포지토리에 작업을 게시할 수 있습니다. codespace에 대한 모든 사용 요금은 codespace를 만든 사용자에게 청구됩니다. 자세한 내용은 "[템플릿에서 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template).

## 템플릿 설명

템플릿이 없는 경우 템플릿 리포지토리에 대한 추가 정보 만들기를 만들어 템플릿의 목적과 템플릿을 시작하는 방법을 설명합니다. 자세한 내용은 “[추가 정보](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)”를 참조하세요.

사용자가 링크를 따를 때 표시되는 "새 codespace 만들기" 페이지에 템플릿에 대한 간단한 설명이 `https://github.com/codespaces/new?template_repository=OWNER/TEMPLATE-REPO` 표시됩니다. 이 설명은 리포지토리를 만들 때 설정할 수 있는 **설명** 필드에서 가져옵니다. 언제든지 리포지토리의 페이지로 이동하고 페이지 오른쪽의 **정보** 섹션 옆에 있는 **{% octicon "gear" aria-label="The Settings gear" %}를** 클릭하여 언제든지 이 설명을 편집할 수 있습니다.

![리포지토리 페이지의 "정보" 섹션 스크린샷](/assets/images/help/repository/repository-settings-icon.png)

## 시작 파일 추가

템플릿 리포지토리에는 일반적으로 사용자가 라이브러리, 프레임워크 또는 기타 기술을 빠르게 시작할 수 있도록 상용구 코드가 포함된 시작 파일이 포함되어 있습니다.

포함할 파일 종류에 대한 지침은 다음과 같이 {% data variables.product.prodname_github_codespaces %}에 대한 공식 {% data variables.product.company_short %} 템플릿에 포함된 시작 파일을 확인할 수 있습니다.

{% data reusables.codespaces.your-codespaces-procedure-step %} {% data reusables.codespaces.view-all-templates-step %}
1. 템플릿에 대한 파일이 포함된 템플릿 리포지토리를 보려면 템플릿의 이름을 클릭합니다.

   !["React"이 강조 표시된 "빠른 시작 템플릿 탐색" 섹션의 스크린샷](/assets/images/help/codespaces/react-template-name.png)

## 컨테이너 이미지 구성

템플릿 리포지토리에 개발 컨테이너 구성 파일을 추가하여 {% data variables.product.prodname_github_codespaces %}와 함께 템플릿을 사용하는 사용자를 위한 개발 환경을 사용자 지정할 수 있습니다. {% data variables.product.prodname_vscode %}의 미리 정의된 구성 설정 목록에서 선택하거나 사용자 고유 `devcontainer.json` 의 파일을 작성하여 사용자 지정 구성을 만들 수 있습니다. 구성 파일을 추가하지 않으면 기본 컨테이너 이미지가 사용됩니다. 자세한 내용은 "[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)" 및 "[리포지토리에 개발 컨테이너 구성 추가"를 참조하세요](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces).

{% note %}

**참고:** {% data reusables.codespaces.configuration-choice-templates %}

{% endnote %}

사용자에게 템플릿에 대한 최상의 환경을 제공하기 위해 도구 및 사용자 지정을 사용하여 개발 컨테이너를 구성해야 합니다. 예를 들어 파일에서 다음을 수행합니다 `devcontainer.json` . 
- 속성을 사용하여 `openFiles` 템플릿에서 codespace를 만들 때 {% data variables.product.prodname_vscode_shortname %} 웹 클라이언트에서 자동으로 열 파일 목록을 정의할 수 있습니다.
- 템플릿에 웹 애플리케이션에 대한 파일이 포함된 경우 애플리케이션이 사용자의 codespace에서 자동으로 실행되도록 할 수 있습니다. 이 작업을 수행하려면 속성을 사용하여 `postAttachCommand` {% data variables.product.prodname_vscode_shortname %} 웹 클라이언트가 codespace에 연결하는 즉시 로컬 서버에서 애플리케이션을 시작하는 스크립트를 실행하고 포트의 `openPreview` 속성을 설정 `onAutoForward` 하여 {% data variables.product.prodname_vscode_shortname %} 웹 클라이언트에 포함된 간단한 브라우저에서 해당 포트에서 실행되는 애플리케이션을 표시할 수 있습니다.

React 템플릿에 대한 다음 구성 설정은 사용자의 편집기에서 파일을 열고`app.js`, (파일에 정의됨`package.json`) 를 실행 `npm start` 하여 로컬 서버를 시작하고, codespace의 미리 보기 브라우저 탭으로 포트 `3000` 를 전달합니다.

```JSON
{
    "postAttachCommand": {
      "server": "npm start",
    },

    "portsAttributes": {
      "3000": {
        "label": "Application",
        "onAutoForward": "openPreview"
      }
    },

    "customizations": {
      "codespaces": {
        "openFiles": ["src/App.js"]
      }
    }
}
```
자세한 내용은 "[리포지토리의 codespaces에서 자동으로 파일 열기](/codespaces/setting-up-your-project-for-codespaces/automatically-opening-files-in-the-codespaces-for-a-repository)" 및 containers.dev [개발 컨테이너 사양을](https://containers.dev/implementors/json_reference/#general-properties) 참조하세요.
