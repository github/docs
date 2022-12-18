---
title: 리포지토리의 codespaces에서 자동으로 파일 열기
shortTitle: Automatically opening files
intro: '누군가가 리포지토리에 대한 codespace를 만들고 {% data variables.product.prodname_vscode %} 웹 클라이언트에서 codespace를 열 때마다 특정 파일을 자동으로 열도록 설정할 수 있습니다.'
permissions: People with write permissions to a repository can create or edit the codespace configuration.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: a57b76eda4bfc47071f3cfeade8f50afde9e01e6
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114106'
---
## 개요

사용자가 리포지토리에 대한 codespace를 만들 때 볼 수 있는 특정 파일이 있는 경우 이 파일을 {% data variables.product.prodname_vscode_shortname %} 웹 클라이언트에서 자동으로 열도록 설정할 수 있습니다. 리포지토리에 대한 개발 컨테이너 구성 파일에서 이를 설정합니다. 

지정한 파일 또는 파일은 codespace가 웹 클라이언트에서 처음 열릴 때만 열립니다. 사용자가 지정된 파일을 닫으면 다음에 codespace를 열거나 다시 시작할 때 해당 파일이 자동으로 다시 열리지 않습니다.

{% note %}

**참고**: 이 자동화는 {% data variables.product.prodname_vscode_shortname %} 데스크톱 애플리케이션이나 지원되는 다른 편집기가 아닌 {% data variables.product.prodname_vscode_shortname %} 웹 클라이언트에만 적용됩니다.

{% endnote %}

## 파일을 자동으로 열도록 설정

{% data reusables.codespaces.edit-devcontainer-json %}
1. `devcontainer.json` 속성을 추가하여 파일을 편집합니다`customizations.codespaces.openFiles`. 속성은 `customizations` 바깥쪽 JSON 개체 내에서 파일의 최상위 수준에 상주합니다. 예를 들면 다음과 같습니다.

   ```json{:copy}
   "customizations": {
     "codespaces": {
       "openFiles": [
         "README.md",
         "scripts/tsconfig.json",
         "docs/main/CODING_STANDARDS.md"
       ]
     }
   }
   ```

   속성 값 `openFiles` 은 리포지토리에 있는 하나 이상의 파일 배열입니다. 경로는 리포지토리의 루트를 기준으로 합니다(절대 경로는 지원되지 않음). 지정된 순서대로 웹 클라이언트에서 파일이 열리고 배열의 첫 번째 파일이 편집기에서 표시됩니다.
   
1. 파일을 저장하고 리포지토리의 필요한 분기에 변경 내용을 커밋합니다.

## 추가 참고 자료

- “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”
