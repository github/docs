---
title: Primeiros passos com GitHub code para aprendizado de máquina
shortTitle: Aprendizado de máquina
intro: 'Aprenda como trabalhar em projetos de aprendizado de máquina com {% data variables.product.prodname_github_codespaces %} e suas ferramentas inovadoras.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Codespaces
  - Developer
---

## Introdução

Este guia apresenta você ao aprendizado de máquina com {% data variables.product.prodname_github_codespaces %}. Você vai construir um simples classificador de imagem, aprender sobre algumas das ferramentas que vêm pré-instaladas em {% data variables.product.prodname_github_codespaces %}, configurar o seu ambiente de desenvolvimento para NVIDIA CUDA e usar {% data variables.product.prodname_cli %} para abrir o seu código em JupyterLab.

## Pré-requisito

Você tem acesso a {% data variables.product.prodname_github_codespaces %}. Para obter mais informações, consulte "[Criando um codespace](/codespaces/developing-in-codespaces/creating-a-codespace#access-to-github-codespaces)".

## Criar um simples classificador de imagem

Usaremos um caderno de anotações do Jupyter para construir um classificador de imagem simples.

Os Jupyter notebooks são conjuntos de células que você pode executar um após o outro. O caderno no bloco de notas que cria um número de células que constroem um classificador de imagem usando [PyToch](https://pytorch.org/). Cada célula é uma fase diferente desse processo: faça o download de um conjunto de dados, configure uma rede neural, treine um modelo e, em seguida, teste esse modelo.

Vamos executar todas as células, em sequência, para executar todas as fases da construção do classificador de imagem. Quando fazemos isso, o Jupyter salva a saída de volta no notebook para que você possa examinar os resultados.

### Criando um repositório e um codespace

1. Acesse o repositório de modelo [github/codespaces-getting-started-ml](https://github.com/github/codespaces-getting-started-ml) e clique em **Usar este modelo**.
{% data reusables.codespaces.open-codespace-from-template-repo %}

   Por padrão, um codespaces para este repositório abre em uma versão {% data variables.product.prodname_vscode %} baseada na web.

### Abrir o notebook classificador de imagem

A imagem padrão de contêiner usada por {% data variables.product.prodname_github_codespaces %} inclui um conjunto de bibliotecas de aprendizado de máquina pré-instaladas no seu codespace. Por exemplo, Numpy, pandas, SciPy, Matplotlib, seaborn, scikit-learn, TensorFlow, Keras, PyTorch, Requests e Plotly. Para obter mais informações sobre a imagem padrão, consulte "[Introdução a contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)" e [o repositório `devcontainers/imagens`](https://github.com/devcontainers/images/tree/main/src/codespaces#github-codespaces-default-linux-universal).

1. No editor {% data variables.product.prodname_vscode_shortname %}, feche qualquer guia "Primeiros passos" que for exibida.
1. Abra o arquivo do notebook `image-classifier.ipynb`.
1. Clique no link do kernel do Python no canto superior direito do editor.

   ![Captura de tela do link do kernal do Python](/assets/images/help/codespaces/jupyter-python-kernel-link.png)

1. No menu suspenso, escolha o kernel no diretório `/opt/python/latest/bin/python`.

   ![Screenshot do menu suspenso do kernal do Python](/assets/images/help/codespaces/jupyter-python-kernel-dropdown.png)

### Crie o classificador de imagem

O caderno classificador de imagem contém todo o código que você precisa para baixar, um conjunto de dados, treinar uma rede neural e avaliar seu desempenho.

1. Clique **Executar todos** para executar todas as células do caderno.

   ![Captura de tela do botão Executar Todos](/assets/images/help/codespaces/jupyter-run-all.png)

1. Role para baixo para ver a saída de cada célula.

   ![Captura de tela da etapa 3 no editor](/assets/images/help/codespaces/jupyter-notebook-step3.png)

## Configurar NVIDIA CUDA para o seu codespace

Alguns softwares, como o TensorFlow, exigem a instalação do NVIDIA CUDA para usar a GPU do seu codespace. Quando esse for o caso, você pode criar sua própria configuração personalizada, usando um arquivo `devcontainer.json` e especificar que o CUDA deve ser instalado. Para obter mais informações sobre como criar uma configuração personalizada, consulte "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#creating-a-custom-dev-container-configuration)."

{% note %}

**Observação**: Para obter detalhes completos do script que é executado quando você adiciona o recurso `nvidia-cuda`, consulte [o devcontainers/features repository](https://github.com/devcontainers/features/tree/main/src/nvidia-cuda).

{% endnote %}

1. Dentro de um codespace, abra o arquivo `.devcontainer/devcontainer.json` no editor.
1. Adicione um objeto `funcionalidades` de alto nível com os seguintes conteúdos:

   ```json{:copy}
     “features”: {
       "ghcr.io/devcontainers/features/nvidia-cuda:1": { 
         "installCudnn": true
       }
     }
   ```

   Para obter mais informações sobre o objeto `funcionalidades`, consulte a [especificação dos contêineres de desenvolvimento](https://containers.dev/implementors/features/#devcontainer-json-properties).

   Se você estiver usando o arquivo `devcontainer.json` do repositório de imagens classificado que você criou para este tutorial, seu arquivo `devcontainer.json` agora irá se parecer com isto:

   ```
   {
     "customizations": {
       "vscode": {
         "extensions": [
           "ms-python.python",
           "ms-toolsai.jupyter"
         ]
       }
     },
     “features”: {
       "ghcr.io/devcontainers/features/nvidia-cuda:1": { 
         "installCudnn": true
       }
     }
   }
   ```

1. Salve a alteração.
{% data reusables.codespaces.rebuild-command %}
   O contêiner do codespace será recriado. Isso levará vários minutos. Quando a recriação for concluída, o codespace será reaberto automaticamente.
1. Faça o commit da alteração no repositório para que o CUDA seja instalado em qualquer codespace novo que você criar a partir deste repositório no futuro.

## Abra seu codespace no JupyterLab

The default container image that's used by {% data variables.product.prodname_github_codespaces %} includes JupyterLab, the web-based Jupyter IDE. You can use {% data variables.product.prodname_cli %} to open your codespace in JupyterLab without having to install anything else on your codespace.

1. In the terminal, enter the {% data variables.product.prodname_cli %} command `gh cs jupyter`.
1. Choose the codespace you want to open.

   ![Screenshot of opening a codespace from the terminal](/assets/images/help/codespaces/open-codespace-in-jupyter.png)

