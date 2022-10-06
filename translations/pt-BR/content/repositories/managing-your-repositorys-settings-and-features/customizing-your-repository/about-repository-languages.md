---
title: Sobre linguagens do repositório
intro: Os arquivos e diretórios em um repositório determinam as linguagens que compõem o repositório. É possível exibir linguagens de um repositório para obter uma visão geral rápida do repositório.
redirect_from:
  - /articles/my-repository-is-marked-as-the-wrong-language
  - /articles/why-isn-t-my-favorite-language-recognized
  - /articles/my-repo-is-marked-as-the-wrong-language
  - /articles/why-isn-t-sql-recognized-as-a-language
  - /articles/why-isn-t-my-favorite-language-recognized-by-github
  - /articles/about-repository-languages
  - /github/creating-cloning-and-archiving-repositories/about-repository-languages
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repository-languages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Repository languages
ms.openlocfilehash: 3796ec1828bb8f64072f62255d76ca79c4467457
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145127062'
---
O {% data variables.product.product_name %} usa a [biblioteca Linguist](https://github.com/github/linguist) de código aberto para determinar as linguagens do arquivo para realce de sintaxe e estatísticas de repositório. As estatísticas da linguagem serão atualizadas após você fazer push de alterações no seu branch-padrão.

Alguns arquivos são difíceis de identificar e, às vezes, os projetos contêm mais arquivos de fornecedor e biblioteca do que código primário. Se você estiver recebendo resultados incorretos, confira o [guia de solução de problemas](https://github.com/github/linguist/blob/master/docs/troubleshooting.md) do Linguist para obter ajuda.

## Linguagens markup

As linguagens de marcação são renderizadas em HTML e exibidas em linha por meio da nossa [biblioteca de marcação](https://github.com/github/markup) de código aberto. Neste momento, não estamos aceitando novas linguagens markup a serem mostradas no {% data variables.product.product_name %}. No entanto, mantemos de maneira ativa nossas linguagens markup atuais. Se você observar um problema, [crie um problema](https://github.com/github/markup/issues/new).
