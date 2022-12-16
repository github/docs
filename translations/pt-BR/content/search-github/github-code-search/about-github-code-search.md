---
title: Sobre a Pesquisa de Código do GitHub (beta)
intro: 'É possível pesquisar, navegar e entender códigos no GitHub com a nova Pesquisa de Código (beta).'
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
ms.openlocfilehash: 8bf3232e87de2fc773f69bf5047e75ab0e52c7e2
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159397'
---
{% note %}

**Observação:** {% data reusables.search.code-search-code-view-beta-note %}

{% data reusables.search.code-view-link %}

{% endnote %}

## Sobre a nova Pesquisa de Código (beta)

A nova Pesquisa de Código (beta) permite pesquisar, navegar e entender rapidamente seu código, o código da sua equipe e o código da comunidade de código aberto no {% data variables.product.prodname_dotcom_the_website %}. Esse mecanismo de pesquisa foi projetado para ser escalonável, oferecer reconhecimento de código e dar suporte à pesquisa de códigos no GitHub por meio de expressões regulares, operações boolianas, qualificadores especializados e pesquisas de símbolos. Para saber mais sobre a sintaxe da nova Pesquisa de Código (beta), confira "[Noções básicas sobre a sintaxe da Pesquisa de Código do GitHub (beta)](/search-github/github-code-search/understanding-github-code-search-syntax)".

Além do novo mecanismo de pesquisa de código, a Pesquisa de Código (beta) inclui novos recursos na interface de pesquisa do {% data variables.product.prodname_dotcom_the_website %}, como sugestões, conclusões e a capacidade de salvar pesquisas. A nova interface de pesquisa permite encontrar com mais rapidez e facilidade o que está sendo procurado. Para saber mais, confira "[Como usar a Pesquisa de Código do GitHub (beta)](/search-github/github-code-search/using-github-code-search)".

{% data reusables.search.non-code-search-explanation %}

A nova Pesquisa de Código (beta) é totalmente integrada a uma exibição de código reprojetada (beta) no {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.search.code-view-link %}

Para ter acesso à nova Pesquisa de Código (beta) e à nova exibição de código, inscreva-se na [lista de espera](https://github.com/features/code-search-code-view/signup). 

## Habilitar e desabilitar a nova exibição de código e a nova Pesquisa de Código (beta)

{% data reusables.search.enabling-and-disabling-code-search-and-view-beta %}

## Limitações

Muitos repositórios públicos já foram indexados para a nova Pesquisa de Código (beta) e outros serão em breve. Além disso, os repositórios privados dos usuários do GitHub na versão beta são indexados e podem ser pesquisados por participantes beta que já têm acesso a eles no GitHub.com. No entanto, é possível que repositórios muito grandes ainda não estejam indexados no momento, assim como o código completo. 

As limitações atuais em códigos indexados são as seguintes:
   - Códigos gerados e de fornecedores são excluídos (conforme determinado pelo [Enry](https://github.com/go-enry/go-enry))
   - Arquivos vazios e arquivos com mais de 350 KiB são excluídos
   - Apenas arquivos codificados em UTF-8 são incluídos
   - Repositórios muito grandes podem não ser indexados

Atualmente, só há suporte à Pesquisa de Código no branch padrão de um repositório.

Os resultados de qualquer pesquisa com a nova Pesquisa de Código (beta) são restritos a 100 ocorrências (10 páginas). No momento, não há suporte para a classificação dos resultados da Pesquisa de Código. Essa limitação só se aplica à pesquisa de código com a nova Pesquisa de Código (beta), não a outros tipos de pesquisas.

A nova Pesquisa de Código (beta) dá suporte à pesquisa de definições de símbolo no código, como definições de função ou classe, por meio do qualificador `symbol:`. No entanto, observe que o qualificador `symbol:` procura apenas definições, não referências, e que nem todos os tipos de símbolos ou linguagens têm suporte completo no momento. Para obter uma lista das linguagens compatíveis, confira "[Qualificador de símbolo](/search-github/github-code-search/understanding-github-code-search-syntax#symbol-qualifier)".

## Comentários e suporte

É possível exibir e compartilhar comentários sobre a nova Pesquisa de Código (beta) no [fórum de discussão](https://github.com/orgs/community/discussions/categories/code-search-and-navigation).
