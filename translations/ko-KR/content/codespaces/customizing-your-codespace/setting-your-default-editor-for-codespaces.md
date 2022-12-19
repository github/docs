---
title: Codespaces의 기본 편집기 설정
shortTitle: Set the default editor
intro: 개인 설정 페이지에서 {% data variables.product.prodname_codespaces %}에 대한 기본 편집기를 설정할 수 있습니다.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
- /codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces
topics:
- Codespaces
type: how_to
ms.openlocfilehash: 3c2fe809a749244efd8ffe76cde31646f984bea3
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 07/13/2022
ms.locfileid: "146681303"
---
설정 페이지에서 새로 만든 Codespace가 웹용 {% data variables.product.prodname_vscode %} 또는 {% data variables.product.prodname_vscode %} 데스크톱 애플리케이션에서 자동으로 열리도록 편집기 기본 설정을 지정할 수 있습니다.

{% data variables.product.prodname_vscode %}를 {% data variables.product.prodname_codespaces %}의 기본 편집기로 사용하려면 {% data variables.product.prodname_vscode %} 및 {% data variables.product.prodname_vscode %}에 대한 {% data variables.product.prodname_github_codespaces %} 확장을 설치해야 합니다. 자세한 내용은 [{% data variables.product.prodname_vscode %} 다운로드 페이지](https://code.visualstudio.com/download/) 및 [{% data variables.product.prodname_vscode %} 마켓플레이스의 {% data variables.product.prodname_github_codespaces %} 확장](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces)을 참조하세요.

## <a name="setting-your-default-editor"></a>기본 편집기 설정

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. “편집기 기본 설정”에서 원하는 옵션을 선택합니다.
   ![편집기 설정](/assets/images/help/codespaces/select-default-editor.png) **{% data variables.product.prodname_vscode %}** 를 선택할 경우 다음에 Codespace를 만들면 {% data variables.product.prodname_codespaces %}가 데스크톱 애플리케이션으로 자동으로 열립니다. 성공적으로 열려면 브라우저와 {% data variables.product.prodname_vscode %}에 대한 액세스를 모두 허용해야 할 수 있습니다.
   ![편집기 설정](/assets/images/help/codespaces/launch-default-editor.png)
