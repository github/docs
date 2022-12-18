---
title: Navegar por arquivos com a nova exibição de código (beta)
intro: 'Com a nova exibição de código (beta), é possível exibir códigos contextualmente com uma árvore de arquivos de fácil navegação e uma pesquisa de símbolos integrada.'
allowTitleToDifferFromFilename: true
versions:
  feature: file-tree-view
topics:
  - Repositories
shortTitle: New code view (beta)
ms.openlocfilehash: 0c0fe588c92f67c92d7f3ffaa09716da39ac4551
ms.sourcegitcommit: 57bef7d45acfa987d82e320c7581c87df320a28a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172184'
---
{% note %}

**Observação**: {% data reusables.search.code-search-code-view-beta-note %} 

{% data reusables.search.code-search-link %}

{% endnote %}

## Sobre a nova exibição de código (beta)
A nova exibição de código (beta) aprimora a navegação com um modo de exibição de árvore de arquivos, além de simplificar a edição de arquivos, apresentar um painel de símbolos para pesquisa de símbolos e navegação e atualizar a exibição de identificação para manter o contexto do arquivo. A nova exibição de código é integrada a um novo mecanismo de pesquisa de código e a uma interface de pesquisa em uma versão beta pública limitada no {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.search.code-search-link %}

Para ter acesso à nova exibição de código (beta) com a nova pesquisa de código, inscreva-se na [lista de espera](https://github.com/features/code-search-code-view/signup).

Para fornecer comentários sobre a nova exibição de código beta, confira o [fórum de discussão](https://github.com/orgs/community/discussions/categories/repositories).

## Habilitar e desabilitar a nova exibição de código e a nova pesquisa de código (beta)

{% data reusables.search.enabling-and-disabling-code-search-and-view-beta %}

## Usar o modo de exibição de árvore de arquivos
O novo modo de exibição de árvore de arquivos é um painel que exibe os diretórios e arquivos de um repositório em uma árvore de fácil navegação. É possível percorrer diretórios e arquivos rapidamente e entender o contexto de cada item exibido.

1. Selecione um repositório e clique em um diretório ou arquivo dentro dele para abrir o modo de exibição de árvore de arquivos.

  ![Captura de tela do repositório "github/docs" com ênfase no modo de exibição de árvore de arquivos](/assets/images/help/repository/file-tree-view-directory-selected.png)

1. Para pesquisar um diretório ou arquivo específico, clique na barra de pesquisa {% octicon "filter" aria-label="The filter icon" %} **Acessar arquivo**, digite o nome do diretório ou arquivo e selecione-o nos resultados. É possível exibir o caminho de um diretório ou arquivo abaixo de cada resultado da pesquisa.

  ![Captura de tela do modo de exibição de árvore de arquivos com ênfase na barra de pesquisa "Acessar arquivo"](/assets/images/help/repository/file-tree-view-jump-to-file.png)

     - Para pesquisar no repositório usando a barra de pesquisa do {% data variables.product.prodname_dotcom %}, clique em {% octicon "search" aria-label="The search icon" %}.

        ![Captura de tela do modo de exibição de árvore de arquivos com ênfase no ícone de pesquisa](/assets/images/help/repository/file-tree-view-search-icon.png)

1. Para alternar entre branches, selecione o menu suspenso de branches {% octicon "git-branch" aria-label="The branch icon" %} e clique no branch desejado nos resultados. Para exibir todos os branches de um repositório, clique em **Exibir todos os branches**.

  ![Captura de tela do modo de exibição de árvore de arquivos com ênfase na guia "Branches" do menu suspenso de branches](/assets/images/help/repository/file-tree-view-branch-dropdown.png)

1. Para alternar entre marcas, selecione o menu suspenso de branches {% octicon "git-branch" aria-label="The branch icon" %}, clique na guia **Marcas** e, em seguida, escolha a marca desejada nos resultados. Para exibir todas as marcas de um repositório, clique em **Exibir todas as marcas**.

  ![Captura de tela do modo de exibição de árvore de arquivos com ênfase na guia "Marcas" do menu suspenso de branches](/assets/images/help/repository/file-tree-view-branch-dropdown-tags.png)

## Trabalhando com arquivos
A nova exibição de código também inclui atualizações nas formas de trabalhar com arquivos. As funcionalidades existentes, como editar, criar, carregar e excluir um arquivo ou diretório, foram simplificadas. Agora você tem acesso rápido para editar um arquivo no github.dev ou no {% data variables.product.prodname_desktop %} e uma função integrada de pesquisa no arquivo. 

1. Selecione um repositório e clique em um arquivo dentro dele para abrir a nova exibição de código.

  ![Captura de tela do repositório "github/docs" com ênfase em um arquivo selecionado no modo de exibição de árvore de arquivos](/assets/images/help/repository/file-tree-view-file-selected.png)

1. Para editar um arquivo no editor de arquivos integrado, clique em {% octicon "pencil" aria-label="The pencil icon" %}.

  ![Captura de tela do editor de arquivos na nova exibição de código com ênfase no ícone de edição](/assets/images/help/repository/code-view-edit-icon.png)

1. Para editar um arquivo no github.dev {% data variables.codespaces.serverless %} ou {% data variables.product.prodname_desktop %}, selecione {% octicon "triangle-down" aria-label="The downwards-facing triangle icon" %} ao lado de {% octicon "pencil" aria-label="The pencil icon" %} e clique em **github.dev** ou em **{% data variables.product.prodname_desktop %}** .

  {% note %}

  **Observação:** atualmente, o github.dev {% data variables.codespaces.serverless %} está em versão prévia beta. É possível fornecer feedback [nas discussões](https://github.com/community/community/discussions/categories/general).

  {% endnote %}

  ![Captura de tela do editor de arquivos na nova exibição de código com ênfase no menu suspenso de edição](/assets/images/help/repository/code-view-edit-dropdown.png)

1. Para localizar caracteres específicos em um arquivo, exiba o código bruto dele clicando no botão **Código**. Em seguida, pressione <kbd>Command</kbd>+<kbd>F</kbd> (Mac) ou<kbd>Ctrl</kbd>+<kbd>F</kbd> (Windows/Linux) e digite os caracteres que você deseja encontrar. É possível navegar pelos resultados pressionando <kbd>Return</kbd> (Mac) ou <kbd>Enter</kbd> (Windows/Linux) ou clicando em {% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} e em {% octicon "chevron-up" aria-label="The upwards-facing chevron icon" %}.

  {% note %}

  **Observação:** para usar a função de localização padrão do navegador, pressione <kbd>Command</kbd>+<kbd>F</kbd> (Mac) ou <kbd>Ctrl</kbd>+<kbd>F</kbd> (Windows/Linux) duas vezes. Lembre-se de que a função de localização padrão do navegador não poderá pesquisar a totalidade de um arquivo grande, diferentemente da pesquisa integrada na nova exibição de código.

  {% endnote %}

  ![Captura de tela da função "Localizar no arquivo" na nova exibição de código](/assets/images/help/repository/code-view-find-in-file.png)

1. Para adicionar um arquivo a um diretório específico, clique nesse diretório e em {% octicon "plus" aria-label="The plus sign icon" %} **Novo arquivo** ou clique em {% octicon "plus" aria-label="The plus sign icon" %} no modo de exibição de árvore de arquivos.

  ![Captura de tela do modo de exibição de árvore de arquivos com foco no ícone de adição](/assets/images/help/repository/file-tree-view-new-file-icon.png)

1. Para excluir um diretório ou arquivo, acesse-o e clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} . Em seguida, clique em **Excluir diretório** ou em **Excluir arquivo**.

  ![Captura de tela do menu de opções na nova exibição de código com ênfase na opção "Excluir diretório"](/assets/images/help/repository/code-view-delete-directory.png)

1. Para carregar um arquivo, acesse o diretório escolhido e clique em {% octicon "upload" aria-label="The upload icon" %} **Carregar arquivos** ou arraste e solte o arquivo no navegador.

  ![Captura de tela do botão "Carregar arquivos" na nova exibição de código](/assets/images/help/repository/code-view-upload-files.png)

## Usar o painel de símbolos
Agora, com o painel de símbolos, é possível exibir e navegar rapidamente por símbolos como funções ou classes no código. É possível pesquisar um símbolo em um único arquivo, em todos os arquivos de um repositório ou até mesmo em todos os repositórios públicos no {% data variables.product.prodname_dotcom %}.

A pesquisa de símbolo é um recurso da nova Pesquisa de Código (beta). Para saber mais, confira "[Noções básicas sobre a sintaxe da Pesquisa de Código do GitHub (beta)](/search-github/github-code-search/understanding-github-code-search-syntax#symbol-qualifier)".

1. Selecione um repositório e navegue até um arquivo que contenha símbolos.
2. Para abrir o painel de símbolos, clique em {% octicon "code-square" aria-label="The code square icon" %}.

  ![Captura de tela do ícone do painel de símbolos na nova exibição de código](/assets/images/help/repository/code-view-symbols-pane-icon.png)

  Como alternativa, é possível abrir o painel de símbolos clicando em um símbolo elegível no arquivo. Os símbolos clicáveis são realçados em amarelo quando você passa o mouse sobre eles.

  ![Captura de tela de um arquivo na nova exibição de código com ênfase em um símbolo clicável](/assets/images/help/repository/code-view-clickable-symbol.png)

1. Clique no símbolo que você deseja encontrar no painel de símbolos ou no próprio arquivo.

  ![Captura de tela do painel de símbolos com ênfase em um símbolo preenchido automaticamente](/assets/images/help/repository/code-view-symbols-pane-symbol.png)

   - Para pesquisar um símbolo no repositório como um todo, clique em **Pesquisar este símbolo neste repositório**. Para procurar um símbolo em todos os repositórios no {% data variables.product.prodname_dotcom %}, clique em **Todos os repositórios**.

      ![Captura de tela do painel de símbolos com ênfase nas opções para ampliar o escopo da pesquisa por um símbolo](/assets/images/help/repository/code-view-symbols-pane-expand-search.png)

1. Para navegar entre as referências de um símbolo, clique em {% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} ou em {% octicon "chevron-up" aria-label="The upwards-facing chevron icon" %}.

  ![Captura de tela do painel de símbolos com ênfase nas divisas da navegação de pesquisa](/assets/images/help/repository/code-view-symbol-result-navigation.png)

1. Para navegar para uma referência específica a um símbolo, clique em um resultado da pesquisa de símbolo em {% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} **Neste arquivo**.

  ![Captura de tela do painel de símbolos com ênfase em um resultado da pesquisa de símbolo](/assets/images/help/repository/code-view-symbol-search-result.png)

1. Para sair da pesquisa de um símbolo específico, clique em {% octicon "arrow-left" aria-label="The left arrow icon" %} **Todos os símbolos**.

  ![Captura de tela do painel de símbolos com ênfase no botão "Todos os símbolos"](/assets/images/help/repository/code-view-symbols-pane-all-symbols.png)

## Usar a exibição de identificação
Em vez de perder o contexto do arquivo ao entrar na exibição de identificação, agora é possível usar a nova exibição de código para alternar rapidamente entre a exibição de identificação, de código bruto e de um arquivo (dependendo do tipo dele).

1. Selecione um repositório e clique em um arquivo dentro dele para abrir a nova exibição de código.

  ![Captura de tela do repositório "github/docs" com ênfase em um arquivo selecionado no modo de exibição de árvore de arquivos](/assets/images/help/repository/file-tree-view-file-selected.png)

1. Para ver o histórico de revisões do arquivo, clique em **Identificar**. Essa exibição fornece um histórico de revisão linha por linha, com o código em um arquivo separado por commit. Cada commit lista o autor, a descrição e a data de realização relacionados a ele.

  ![Captura de tela da nova exibição de código com ênfase no botão "Identificar"](/assets/images/help/repository/code-view-blame-button.png)

   - Para ver as versões de um arquivo antes de um determinado commit, clique em {% octicon "versions" aria-label="The versions icon" %}.

      ![Captura de tela de um commit na exibição de identificação com ênfase no ícone de versões](/assets/images/help/repository/code-view-blame-hide-commit.png)

   - Para ver mais detalhes sobre commits específicos, clique na descrição do commit.

      ![Captura de tela de um commit na exibição de identificação com ênfase na descrição do commit](/assets/images/help/repository/code-view-blame-commit-description.png)

1. Para retornar à exibição de código bruto, clique em **Código**.

  ![Captura de tela da barra de ferramentas de exibição de código com ênfase no botão de exibição de código](/assets/images/help/repository/code-view-button.png)

   - No caso da exibição de um arquivo markdown, também é possível clicar em **Pré-visualização** para retornar à exibição com a formatação de markdown aplicada.

      ![Captura de tela da barra de ferramentas de exibição de código com ênfase no botão de exibição de markdown](/assets/images/help/repository/code-view-preview-button.png)

## Leitura adicional

- "[Mover um arquivo para um novo local](/repositories/working-with-files/managing-files/moving-a-file-to-a-new-location)"
- "[Sobre a Pesquisa de Código do GitHub (beta)](/search-github/github-code-search/about-github-code-search)"
