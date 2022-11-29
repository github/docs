---
title: Parar e iniciar um codespace
intro: Você pode parar e iniciar o codespace para salvar recursos e pausar o trabalho.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Stop a codespace
ms.openlocfilehash: 290a39d9d60420230bd9b11d5e2d10119ccc1c72
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158802'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## Como parar e iniciar um codespace

{% data reusables.codespaces.stopping-a-codespace %}

Independentemente de onde você criou ou acessou os codespaces, eles podem ser vistos e gerenciados no navegador em https://github.com/codespaces. 

## Interrompendo um codespace

{% webui %}

{% data reusables.codespaces.navigate-to-codespaces-page %}
 1. À direita do codespace que você deseja parar, clique na elipse ( **...** ).
 1. Clique em **Parar codespace**.
   ![Captura de tela da opção para interromper um codespace](/assets/images/help/codespaces/stop-codespace-webui.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

 Para parar um codespace, use o subcomando `gh codespace stop` e escolha um codespace na lista exibida.

 ```shell{:copy}
 gh codespace stop
 ```

{% endcli %}

{% vscode %}

{% data reusables.vs-code.open-command-palette %}
1. Digite `stop` e selecione **Codespaces: Parar o Codespace** na lista de opções.
1. Na lista de codespaces, selecione o codespace que você deseja parar.

{% endvscode %}

{% jetbrains %}

{% data reusables.codespaces.jetbrains-open-codespace-plugin %}
1. Na janela de ferramentas {% data variables.product.prodname_github_codespaces %}, clique no ícone parar.

   ![Captura de tela do botão de log](/assets/images/help/codespaces/jetbrains-plugin-icon-stop.png)

{% endjetbrains %}

## Como reiniciar um codespace

{% webui %}

{% data reusables.codespaces.navigate-to-codespaces-page %}
1. Clique no nome do codespace que você deseja reiniciar.
![Captura de tela de codespaces parados](/assets/images/help/codespaces/restart-codespace-webui.png)

{% endwebui %}

{% cli %}

Ao reiniciar um codespace, você pode optar por abri-lo no {% data variables.product.prodname_vscode %} ou no navegador. 

 - Para reiniciar um codespace e abri-lo no {% data variables.product.prodname_vscode %}, use o subcomando `gh codespace code` e escolha o codespace que você deseja reiniciar na lista exibida.

 ```shell{:copy} 
 gh codespace code
 ```

 - Para reiniciar um codespace e abri-lo no navegador, use o subcomando `gh codespace open --web` e escolha o codespace que você deseja reiniciar na lista exibida.

 ```shell{:copy}
 gh codespace open --web
 ```

{% endcli %}

{% vscode %}

{% data reusables.vs-code.open-command-palette %}
1. Digite `connect` e selecione **Codespaces: Conectar-se ao Codespace** na lista de opções.
1. Na lista de codespaces, selecione o codespace que você deseja reiniciar.

{% endvscode %}

{% jetbrains %}

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

{% endjetbrains %}

## Leitura adicional

- "[O ciclo de vida do codespace](/codespaces/developing-in-codespaces/the-codespace-lifecycle)"
