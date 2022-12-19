---
title: Diferenças entre exibições de commit
intro: Você pode observar diferenças no histórico de commit dependendo do método de visualização escolhido.
redirect_from:
  - /articles/differences-between-commit-views
  - /github/committing-changes-to-your-project/differences-between-commit-views
  - /github/committing-changes-to-your-project/viewing-and-comparing-commits/differences-between-commit-views
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Commit views
ms.openlocfilehash: 2b5d59d385f815bd09c853e398d372bb4c861650
ms.sourcegitcommit: 770ed406ec075528ec9c9695aa4bfdc8c8b25fd3
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/12/2022
ms.locfileid: '145127154'
---
No {% data variables.product.product_name %}, é possível ver o histórico de commits de um repositório:

- Navegando diretamente até [a página de commits](https://github.com/mozilla/rust/commits/master) de um repositório
- Clicando em um arquivo e em **Histórico** para acessar [o histórico de commit de um arquivo específico](https://github.com/mozilla/rust/commits/master/README.md)

Às vezes, essas duas exibições de commit podem mostrar informações _diferentes_. O histórico referente a um único arquivo pode omitir commits encontrados no histórico de commits do repositório.

O Git tem várias formas diferentes de mostrar o histórico de um repositório. Quando o Git mostra o histórico de um só arquivo, ele simplifica o histórico omitindo os commits que não alteraram o arquivo. Em vez de analisar cada commit para decidir se ele alterou o arquivo, o Git omitirá um branch inteiro se esse branch, quando mesclado, não tiver afetado o conteúdo final do arquivo. Os commits no branch que alteraram o arquivo não serão mostrados.

O {% data variables.product.product_name %} segue explicitamente essa estratégia simples no histórico de commits de um arquivo. Ele simplifica o histórico ao remover commits que não contribuem para o resultado final. Por exemplo, se um branch lateral tiver feito uma alteração e depois revertido, esse commit não aparecerá no histórico do branch. Isso torna a análise de branches mais eficiente, já que você só visualiza os commits que afetam o arquivo.

Talvez essa exibição truncada nem sempre contenha as informações que você procura. Caso você deseje ver o histórico inteiro, o {% data variables.product.product_name %} oferece uma exibição com mais informações na página de commits de um repositório.

Para obter mais informações sobre como o Git considera o histórico de commits, confira a seção ["Simplificação do histórico"](https://git-scm.com/docs/git-log#_history_simplification) do artigo de ajuda de `git log`.

## Leitura adicional

- "[Como assinar commits](/articles/signing-commits)"
- "[Pesquisa de commits](/search-github/searching-on-github/searching-commits)"
