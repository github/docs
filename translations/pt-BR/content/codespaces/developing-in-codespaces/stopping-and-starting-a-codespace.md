---
title: Parar e iniciar um codespace
intro: Você pode parar e iniciar o codespace para salvar recursos e pausar o trabalho.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Stop a codespace
ms.openlocfilehash: 82e547b62593a74bb201dddd4992f41417d686f9
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108013'
---
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

 ## Leitura adicional
- "[Ciclo de vida dos codespaces](/codespaces/developing-in-codespaces/codespaces-lifecycle)"
