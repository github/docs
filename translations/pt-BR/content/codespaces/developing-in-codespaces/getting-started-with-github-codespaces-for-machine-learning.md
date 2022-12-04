---
title: Introdução ao GitHub Codespaces para aprendizado de máquina
shortTitle: Machine learning
intro: 'Saiba mais sobre como trabalhar em projetos de aprendizado de máquina com o {% data variables.product.prodname_github_codespaces %} e as ferramentas prontas para uso dele.'
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Codespaces
  - Developer
ms.openlocfilehash: 905d5b14bfba5e47d1fdfdd7f0be75b16750652d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158914'
---
## Introdução

Este guia apresenta o aprendizado de máquina com o {% data variables.product.prodname_github_codespaces %}. Você criará um classificador de imagens simples, aprenderá sobre algumas das ferramentas que vêm pré-instaladas em {% data variables.product.prodname_github_codespaces %}, vai configurar seu ambiente de desenvolvimento para o NVIDIA CUDA e abrirá seu codespace no JupyterLab.

## Criar um classificador de imagens simples

Usaremos um Jupyter Notebook para criar um classificador de imagens simples. 

Os notebooks do Jupyter são conjuntos de células que você pode executar uma após a outra. O notebook que usaremos inclui várias células que criam um classificador de imagens usando o [PyTorch](https://pytorch.org/). Cada célula é uma fase diferente desse processo: baixe um conjunto de dados, configure uma rede neural, treine um modelo e depois teste esse modelo.

Executaremos todas as células em sequência para realizar todas as fases de criação do classificador de imagens. Quando fazemos isso, o Jupyter salva a saída de volta no notebook para que você possa examinar os resultados.

### Criar um codespace

1. Acesse o repositório de modelos [github/codespaces-jupyter](https://github.com/github/codespaces-jupyter).
{% data reusables.codespaces.open-template-in-codespace-step %}

Por padrão, um codespace para esse modelo será aberto em uma versão baseada na Web do {% data variables.product.prodname_vscode %}.

### Abrir o notebook do classificador de imagens 

A imagem de contêiner padrão usada por {% data variables.product.prodname_github_codespaces %} inclui um conjunto de bibliotecas de aprendizado de máquina que são pré-instaladas em seu codespace. Por exemplo, Numpy, pandas, SciPy, Matplotlib, seaborn, scikit-learn, Keras, PyTorch, Requests e Plotly. Para obter mais informações sobre a imagem padrão, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)" e [ao repositório `devcontainers/images`](https://github.com/devcontainers/images/tree/main/src/universal).

1. No editor {% data variables.product.prodname_vscode_shortname %}, feche as guias "Introdução" exibidas.
1. Abrir o arquivo do notebook `notebooks/image-classifier.ipynb`.

### Compilar o classificador de imagens

O notebook do classificador de imagens contém todo o código necessário para baixar um conjunto de dados, treinar uma rede neural e avaliar seu desempenho.

1. Clique em **Executar tudo** para executar todas as células do notebook.

   ![Captura de tela do botão Executar tudo](/assets/images/help/codespaces/jupyter-run-all.png)

1. Role para baixo para visualizar a saída de cada célula.

   ![Captura de tela da Etapa 3 no editor](/assets/images/help/codespaces/jupyter-notebook-step3.png)

## Configurar o NVIDIA CUDA para seu codespace

Alguns softwares exigem que você instale o NVIDIA CUDA para usar a GPU do seu codespace. Quando esse for o caso, você pode criar uma configuração personalizada usando um arquivo `devcontainer.json` e especificar que o CUDA deve ser instalado. Para obter mais informações sobre como criar uma configuração personalizada, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#creating-a-custom-dev-container-configuration)".

{% note %}

**Observação**: para obter detalhes completos do script executado ao adicionar o recurso `nvidia-cuda`, confira o [repositório de recursos/devcontainers](https://github.com/devcontainers/features/tree/main/src/nvidia-cuda).

{% endnote %}

1. Em um codespace, abra o arquivo `.devcontainer/devcontainer.json` no editor.
1. Adicione um objeto `features` de nível superior com o seguinte conteúdo:

   ```json{:copy}
     "features": {
       "ghcr.io/devcontainers/features/nvidia-cuda:1": { 
         "installCudnn": true
       }
     }
   ```

   Para obter mais informações sobre o objeto `features`, confira a [especificação de contêineres de desenvolvimento](https://containers.dev/implementors/features/#devcontainer-json-properties).

   Se você estiver usando o arquivo `devcontainer.json` do repositório do classificador de imagens criado para este tutorial, seu arquivo `devcontainer.json` agora terá a seguinte aparência:

   ```json
   {
     "customizations": {
       "vscode": {
         "extensions": [
           "ms-python.python",
           "ms-toolsai.jupyter"
         ]
       }
     },
     "features": {
       "ghcr.io/devcontainers/features/nvidia-cuda:1": { 
         "installCudnn": true
       }
     }
   }
   ```

1. Salve a alteração.
{% data reusables.codespaces.rebuild-command %} O contêiner de codespace será recriado. Isso levará alguns minutos. Quando a recriação for concluída, o codespace será reaberto automaticamente.
1. Publique sua alteração a um repositório para que o CUDA seja instalado em quaisquer codespaces criados por meio desse repositório no futuro. Para saber mais, confira "[Como criar um codespace com base em um modelo](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-from-vs-code)".

## Como abrir seu codespace no JupyterLab

Você pode abrir seu codespace no JupyterLab na página "Seus codespaces" em [github.com/codespaces](https://github.com/codespaces) ou usando {% data variables.product.prodname_cli %}. Para saber mais, confira "[Como abrir um codespace existente](/codespaces/developing-in-codespaces/opening-an-existing-codespace)".

{% data reusables.codespaces.jupyterlab-installed-in-codespace %}
