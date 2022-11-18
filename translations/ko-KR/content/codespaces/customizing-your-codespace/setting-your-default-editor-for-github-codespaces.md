---
title: Github Codespaces의 기본 편집기 설정
shortTitle: Set the default editor
intro: '{% data reusables.codespaces.about-changing-default-editor %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces
  - /codespaces/customizing-your-codespace/setting-your-default-editor-for-codespaces
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: 5c286ffe8f96d275dc0b20949a87b7ced411c9af
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159934'
---
설정 페이지에서 codespace를 만들거나 기존 codespace를 열 때 원하는 방식으로 열리도록 편집기 기본 설정을 지정할 수 있습니다.
* {% data variables.product.prodname_vscode %} (데스크톱 애플리케이션)
* {% data variables.product.prodname_vscode %} (웹 클라이언트 애플리케이션)
* JetBrains 게이트웨이 - JetBrains IDE에서 codespace를 열기 위한
* JupyterLab - Project Jupyter의 웹 인터페이스 

{% data reusables.codespaces.template-codespaces-default-editor %}

{% data variables.product.prodname_vscode %}을(를) {% data variables.product.prodname_github_codespaces %}의 기본 편집기로 사용하려면 {% data variables.product.prodname_vscode %} 및 {% data variables.product.prodname_vscode %}에 대한 {% data variables.product.prodname_github_codespaces %} 확장을 설치해야 합니다. 자세한 내용은 [{% data variables.product.prodname_vscode %} 다운로드 페이지](https://code.visualstudio.com/download/) 및 [{% data variables.product.prodname_vscode %} 마켓플레이스의 {% data variables.product.prodname_github_codespaces %} 확장](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces)을 참조하세요.

JetBrains IDE의 codespace에서 작업하려면 JetBrains 게이트웨이를 설치해야 합니다. 자세한 내용은 "[JetBrains IDE에서 {% data variables.product.prodname_github_codespaces %} 사용"을 참조하세요](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide).

## 기본 편집기 설정

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. “편집기 기본 설정”에서 원하는 옵션을 선택합니다.

   ![편집기 설정](/assets/images/help/codespaces/select-default-editor.png)

   * {% data reusables.codespaces.application-installed-locally %}<br><br>

   * **{% data variables.product.prodname_vscode %}** 을(를) 선택하면 다음에 codespace를 만들거나 열 때 {% data variables.product.prodname_github_codespaces %}이(가) 데스크톱 애플리케이션에서 자동으로 열립니다. 

     성공적으로 열려면 브라우저와 {% data variables.product.prodname_vscode %}에 대한 액세스를 모두 허용해야 할 수 있습니다.<br><br>
     
   * **JetBrains Gateway** 를 선택하면 다음에 codespace를 만들거나 열 때 게이트웨이 애플리케이션이 자동으로 열립니다. 

     이런 방식으로 codespace를 처음 열 때 애플리케이션을 열 수 있는 권한을 부여해야 합니다. 

     게이트웨이 애플리케이션이 열리고 codespace가 자동으로 선택됩니다. 그런 다음 이전에 수행하지 않은 경우 JetBrains IDE를 선택하고 **연결을** 클릭하여 JetBrains 클라이언트에서 codespace를 열 수 있습니다. 자세한 내용은 "[JetBrains IDE에서 {% data variables.product.prodname_github_codespaces %} 사용"을 참조하세요](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide).
     
     게이트웨이 애플리케이션에서 codespace에 연결하려면 codespace에서 실행되는 SSH 서버가 있어야 합니다. {% indented_data_reference reusables.codespaces.ssh-server-installed spaces=5 %}

   * **JupyterLab을** 선택하는 경우 열려 있는 codespace에 JupyterLab 애플리케이션을 설치해야 합니다. {% data reusables.codespaces.jupyterlab-in-default-image %}
