---
title: Filtrar arquivos em uma pull request
intro: 'Para ajudar você a revisar rapidamente as alterações em grande pull request, você pode filtrar arquivos alterados{% ifversion pr-tree-view %} ou usar a árvore de arquivos para navegar entre os arquivos{% endif %}.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request
  - /articles/filtering-files-in-a-pull-request-by-file-type
  - /articles/filtering-files-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/filtering-files-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Filter files
ms.openlocfilehash: 1ca50334e4329d40ee164cd01523abc69e127ab3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884170'
---
Você pode filtrar os arquivos em uma solicitação de pull por tipo de extensão de arquivo, como `.html` ou `.js`, falta de uma extensão, propriedade de código ou dotfiles.{% ifversion pr-tree-view %} Use também a árvore de arquivos para filtrar o conteúdo por caminho de arquivo, navegar entre arquivos ou ver uma exibição de alto nível dos arquivos alterados.{% endif %}

## Usando o menu de filtros de arquivo

{% tip %}

**Dica:** para simplificar a exibição de comparação de solicitações de pull, você também pode ocultar temporariamente os arquivos excluídos ou os arquivos que você já visualizou na comparação de solicitações de pull no menu suspenso do filtro de arquivos.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. Na lista de pull requests, clique na pull request que você gostaria de filtrar.
{% data reusables.repositories.changed-files %}
4. Use o menu suspenso File filter (Filtro de arquivo) e selecione, desmarque ou clique nos filtros desejados.
  ![Opção Filtro de arquivos acima da comparação de solicitações de pull](/assets/images/help/pull_requests/file-filter-option.png)
5. Opcionalmente, para limpar a seleção de filtro, na guia **Arquivos alterados**, clique em **Limpar**.
  ![Limpar a seleção de filtro de arquivos](/assets/images/help/pull_requests/clear-file-filter.png)

{% ifversion pr-tree-view %}
## Usando a árvore de arquivos

{% data reusables.repositories.sidebar-pr %}
1. Na lista de pull requests, clique na pull request que você gostaria de filtrar.
{% data reusables.repositories.changed-files %}

1. Clique em um arquivo na árvore de arquivos para ver o diff do arquivo correspondente. Se a árvore de arquivos estiver oculta, clique em {% octicon "sidebar-collapse" aria-label="The sidebar collapse icon" %} para que ela seja exibida.

   {% note %}

   **Observação**: a árvore de arquivos não será exibida se a largura da tela for muito estreita ou se a solicitação de pull incluir apenas um arquivo.

   {% endnote %}
   
   ![Captura de tela da caixa de pesquisa de arquivos alterados do filtro e da árvore de arquivos enfatizada](/assets/images/help/repository/file-tree.png)
1. Para filtrar o conteúdo por caminho do arquivo, insira uma parte ou todo o caminho do arquivo na caixa de pesquisa **Filtrar arquivos alterados**. Como alternativa, use o menu suspenso do filtro de arquivos. Para obter mais informações, confira "[Como usar o menu suspenso de filtro de arquivo](#using-the-file-filter-dropdown)".

{% endif %}

## Leitura adicional

- "[Sobre a comparação de branches em uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)"
- "[Como localizar funções e métodos alterados em uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request)"
