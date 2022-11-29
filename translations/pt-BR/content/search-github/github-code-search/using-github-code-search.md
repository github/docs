---
title: Usar a Pesquisa de Código do GitHub (beta)
intro: 'É possível usar sugestões, conclusões e pesquisas salvas na interface de pesquisa atualizada para encontrar rapidamente o que você está procurando no {% data variables.product.prodname_dotcom_the_website %}.'
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
ms.openlocfilehash: 7578dd05f251b1df23fbd64c63d04e533f7fa9ef
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159391'
---
{% note %}

**Observação:** {% data reusables.search.code-search-code-view-beta-note %}

{% data reusables.search.code-search-link %} {% data reusables.search.code-view-link %}

{% endnote %}

## Sobre como usar a nova Pesquisa de Código (beta)

Depois que você obter acesso à nova Pesquisa de Código (beta), o GitHub indexará todos os repositórios de sua propriedade e quaisquer repositórios em organizações das quais você é membro, sejam elas públicas, privadas ou internas. Isso significa que é possível pesquisar em todos os seus repositórios, além de nos repositórios públicos no {% data variables.product.prodname_dotcom_the_website %} que já foram indexados. Somente usuários com permissão para exibir seu código no {% data variables.product.prodname_dotcom_the_website %} poderão vê-lo nos resultados da pesquisa. Os forks são indexados e podem ser pesquisados da mesma forma que outros repositórios.

Nem todo código é indexado e, atualmente, só é possível pesquisar os branches padrão dos repositórios. Para saber mais sobre limitações conhecidas, confira "[Sobre a Pesquisa de Código do GitHub (beta)](/search-github/github-code-search/about-github-code-search#limitations)".

A nova Pesquisa de Código (beta) é integrada à nova exibição de código (beta). {% data reusables.search.code-view-link %}

## Usar a barra de pesquisa

Além do novo mecanismo de pesquisa de código, a versão beta inclui uma interface de pesquisa atualizada no {% data variables.product.prodname_dotcom_the_website %}. Usando sugestões, conclusões e pesquisas salvas, é possível encontrar rapidamente o que você está procurando, frequentemente sem precisar digitar totalmente uma consulta ou exibir a página de resultados da pesquisa.

Para saber mais sobre a sintaxe de pesquisa da nova Pesquisa de Código (beta), confira "[Noções básicas sobre a sintaxe da Pesquisa de Código do GitHub (beta)](/search-github/github-code-search/understanding-github-code-search-syntax)".

{% data reusables.search.non-code-search-explanation %}

1. Na navegação superior do {% data variables.product.prodname_dotcom_the_website %}, clique na barra de pesquisa.
1. Lá, você verá uma lista de sugestões organizadas por categoria, incluindo pesquisas recentes e repositórios, equipes e projetos sugeridos aos quais você tem acesso. Também é possível ver uma lista com as pesquisas salvas que você criou. Para saber mais sobre pesquisas salvas, confira "[Criar e gerenciar pesquisas salvas](#creating-and-managing-saved-searches)".

    ![Barra de pesquisa com sugestões e pesquisas salvas](/assets/images/help/search/code-search-beta-search-bar.png)

    Se você clicar em qualquer uma das sugestões específicas, será direcionado diretamente para a página dessa sugestão (por exemplo, a página do repositório ou projeto). Se você clicar em uma pesquisa recente ou salva, dependendo do tipo dela, a consulta de pesquisa aparecerá na barra de pesquisa ou você será direcionado à página de resultados da pesquisa com relação ao termo da pesquisa.

1. Depois de começar a digitar uma consulta de pesquisa, você verá uma lista de conclusões e sugestões que correspondem a ela. É possível clicar em uma sugestão para ir para um local específico. Ao digitar mais qualificadores, você verá sugestões mais específicas, como arquivos de código que você pode acessar diretamente.
   
   ![Barra de pesquisa com uma consulta e sugestões de código](/assets/images/help/search/code-search-beta-search-bar-code-suggestions.png)

1.  Depois de digitar sua consulta, também é possível pressionar Enter para acessar a exibição completa dos resultados da pesquisa, a fim de ver cada correspondência e uma interface visual para a aplicação de filtros. Para saber mais, confira "[Usar a exibição de resultados da pesquisa](#using-the-search-results-view)".

## Criar e gerenciar pesquisas salvas

1. Na navegação superior do {% data variables.product.prodname_dotcom_the_website %}, clique na barra de pesquisa e comece a digitar uma consulta de pesquisa (ou qualquer letra).
1. Agora, a seção "Pesquisas salvas" deve aparecer abaixo da barra de pesquisa. Clique em {% octicon "plus-circle" aria-label="The plus-circle icon" %} **Criar pesquisa salva**.

    ![Botão "Criar pesquisa salva" na barra de pesquisa](/assets/images/help/search/code-search-beta-create-saved-search.png)

1. Na janela pop-up, preencha a consulta que você deseja salvar e o nome desejado para ela. Clique em **Criar pesquisa salva**.

    ![Janela "Criar pesquisa salva"](/assets/images/help/search/code-search-beta-create-saved-search-window.png)

1. Agora, ao clicar novamente na barra de pesquisa, será possível ver a pesquisa salva na seção "Pesquisas salvas" abaixo dela. Clicar em uma entrada de pesquisa salva adicionará a consulta à barra de pesquisa e filtrará as sugestões adequadamente.

  ![Usar a pesquisa salva na barra de pesquisa](/assets/images/help/search/code-search-beta-saved-search-in-search-bar.png)

    - Para editar uma pesquisa salva, na seção "Pesquisas salvas", clique em {% octicon "pencil" aria-label="The pencil icon" %} à direita da pesquisa salva. 
    - Para excluir uma pesquisa salva, clique em {% octicon "trash" aria-label="The trash icon" %} à direita dela.

  ![Botões para editar ou excluir uma pesquisa salva](/assets/images/help/search/code-search-beta-edit-or-delete-saved-search.png)

## Usar a exibição de resultados da pesquisa

A exibição de resultados da pesquisa já existe para a pesquisa clássica no GitHub e a funcionalidade é a mesma para a maioria dos tipos de pesquisa, exceto códigos. Com a nova pesquisa de código beta habilitada, a página de resultados da pesquisa tem uma IU remodelada e inclui filtros compatíveis com o novo mecanismo de pesquisa de código, como filtros de caminho e símbolo.

Para criar uma consulta de pesquisa usando uma interface visual, bem como exibir e filtrar resultados, é possível usar {% data variables.search.search_page_url %} ou {% data variables.search.advanced_url %}. Se você pressionar Enter depois de digitar uma consulta de pesquisa na barra de pesquisa, também será direcionado para a exibição de resultados da pesquisa.

Nessa exibição, será possível navegar entre diferentes tipos de resultados, incluindo códigos, problemas, solicitações de pull, repositórios e muito mais. Também é possível exibir e usar filtros.

![Exibição dos resultados da pesquisa](/assets/images/help/search/code-search-beta-results-view.png)
