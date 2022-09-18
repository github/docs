---
title: Comparar commits
intro: 'Você pode comparar o estado de seu repositório entre os branches, tags, commits, bifurcações e datas.'
redirect_from:
  - /articles/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits-across-time
  - /github/committing-changes-to-your-project/comparing-commits
  - /github/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 2ebf1a3cc83463e97d9a4d60401277bb844135b1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145127156'
---
Para comparar diferentes versões do repositório, acrescente `/compare` ao caminho do repositório.

Demonstraremos o poder da exibição Comparar dando uma olhada na página de comparação de [um fork do repositório Linguist](https://github.com/octocat/linguist), localizado em [https://github.com/octocat/linguist/compare/master...octocat:master](https://github.com/octocat/linguist/compare/master...octocat:master).

A exibição Comparar de cada repositório contém dois menus suspensos: `base` e `compare`.

`base` deve ser considerado o ponto de partida da comparação, e `compare` é o ponto de extremidade. Durante uma comparação, você sempre pode alterar os pontos `base` e `compare` clicando em **Editar**.

## Comparar branches

O uso mais comum de Compare é comparar os branches, como quando você está iniciando um novo pull request. Você sempre será levado para a exibição de comparação de branch ao iniciar [uma nova solicitação de pull](/articles/creating-a-pull-request).

Para comparar os branches, selecione o nome de um branch no menu suspenso `compare` na parte superior da página.

Veja um exemplo de uma [comparação entre dois branches](https://github.com/octocat/linguist/compare/master...octocat:an-example-comparison-for-docs).

## Comparar tags

A comparação de tags de versão irá mostrar alterações no seu repositório desde a última versão. Para obter mais informações, confira "[Como comparar versões](/github/administering-a-repository/comparing-releases)".

Para comparar marcações, selecione o nome de uma ramificação no menu suspenso `compare` na parte superior da página.

Veja um exemplo de uma [comparação entre duas tags](https://github.com/octocat/linguist/compare/v2.2.0...octocat:v2.3.3).

## Comparar commits

Você também pode comparar dois commits arbitrários em seu repositório ou suas bifurcações no {% data variables.product.prodname_dotcom %} em uma comparação de diff de dois pontos.

Para comparar rapidamente dois commits ou IDs de objeto do Git (OIDs, Object IDs) diretamente entre si em uma comparação de diff de dois pontos no {% data variables.product.prodname_dotcom %}, edite a URL da página "Comparar alterações" do seu repositório.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

Para saber mais sobre outras opções de comparação, confira "[Comparações de três pontos e de dois pontos](/articles/about-comparing-branches-in-pull-requests#three-dot-and-two-dot-git-diff-comparisons)".

## Comparação entre bifurcações

Você pode comparar seu repositório base e qualquer repositório bifurcado. Essa é a exibição que é apresentada quando um usuário executa uma pull request em um projeto.

Para comparar branches em repositórios diferentes, anteceda os nomes do branch com nomes de usuários. Por exemplo, especificando `octocat:main` para `base` e `octo-org:main` para `compare`, você pode comparar o branch `main` dos repositórios pertencentes a `octocat` e a `octo-org`, respectivamente.

Veja um exemplo de uma [comparação entre dois repositórios](https://github.com/github/linguist/compare/master...octocat:master).

## Comparações entre commits

Como atalho, o Git usa a notação `^` para indicar "um commit antes".

Você pode usar essa notação para comparar um único commit ou branch com seus antecessores imediatos. Por exemplo, `96d29b7^^^^^` indica cinco commits antes de `96d29b7`, porque há cinco tags `^`. Se você digitar `96d29b7^^^^^` no branch `base` e `96d29b7` no branch `compare`, será realizada a comparação dos cinco commits feitos antes de `96d29b7` com o commit `96d29b7`.

Veja um exemplo de uma [comparação usando a notação `^`](https://github.com/octocat/linguist/compare/octocat:96d29b7%5E%5E%5E%5E%5E...octocat:96d29b7).

## Leitura adicional

- "[Como alterar o branch base de uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)"
