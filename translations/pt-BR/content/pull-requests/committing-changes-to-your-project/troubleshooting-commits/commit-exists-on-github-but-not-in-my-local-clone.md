---
title: 'O commit aparece no GitHub, mas não no meu clone local'
intro: 'Às vezes, um commit poderá ser visto no {% data variables.product.product_name %}, mas não existirá no clone local do repositório.'
redirect_from:
  - /articles/commit-exists-on-github-but-not-in-my-local-clone
  - /github/committing-changes-to-your-project/commit-exists-on-github-but-not-in-my-local-clone
  - /github/committing-changes-to-your-project/troubleshooting-commits/commit-exists-on-github-but-not-in-my-local-clone
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Commit missing in local clone
ms.openlocfilehash: 9374b17a111bc3f88bf81d60de97e354c0bcf8ac
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145127159'
---
Ao usar `git show` para ver um commit específico na linha de comando, talvez você receba um erro fatal.

Por exemplo, você poderá receber um erro `bad object` localmente:

```shell
$ git show 1095ff3d0153115e75b7bca2c09e5136845b5592
> fatal: bad object 1095ff3d0153115e75b7bca2c09e5136845b5592
```

No entanto, ao exibir o commit no {% data variables.product.product_location %}, você poderá vê-lo sem qualquer problema:

`github.com/$account/$repository/commit/1095ff3d0153115e75b7bca2c09e5136845b5592`

Há várias explicações possíveis:

* O repositório local está desatualizado.
* O branch que contém o commit foi excluído, de modo que o commit não é mais referenciado.
* Alguém fez push forçado no commit.

## O repositório local está desatualizado

O repositório local pode não ter o commit ainda. Para obter informações do repositório remoto para o clone local, use `git fetch`:

```shell
$ git fetch <em>remote</em>
```

Isso copia com segurança as informações do repositório remoto para o clone local sem fazer nenhuma alteração nos arquivos dos quais você fez check-out. Use `git fetch upstream` para obter informações de um repositório com fork ou `git fetch origin` para obter informações de um repositório que você apenas clonou.

{% tip %}

**Dica**: para obter mais informações, leia [como gerenciar repositórios remotos e buscar dados](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes) no livro [Pro Git](https://git-scm.com/book).

{% endtip %}

## O branch que continha o commit foi excluído

Se um colaborador no repositório tiver excluído o branch contendo o commit ou tiver forçado o push no branch, o commit ausente poderá ter ficado órfão (ou seja, não poderá ser acessado de nenhuma referência) e, portanto, o fetch dele não poderá ser feito no clone local.

A boa notícia é que, se um colaborador tiver um clone local do repositório com o commit ausente, ele poderá efetuar push dele de volta no {% data variables.product.product_name %}.  Ele precisa garantir que o commit é referenciado por um branch local e efetuar push dele como um novo branch para o {% data variables.product.product_name %}.

Suponha que a pessoa ainda tenha um branch local (vamos chamá-lo de `B`) que contém o commit.  Isso pode estar rastreando o branch que teve o push forçado ou que foi excluído, e ela simplesmente ainda não o atualizou.  Para preservar o commit, ela pode efetuar push desse branch local para um novo branch (vamos chamá-lo de `recover-B`) no {% data variables.product.product_name %}.  Para este exemplo, vamos supor que ela tenha um repositório remoto chamado `upstream` por meio do qual tem acesso de push em `github.com/$account/$repository`.

A outra pessoa executa:

```shell
$ git branch recover-B B
# Create a new local branch referencing the commit
$ git push upstream B:recover-B
# Push local B to new upstream branch, creating new reference to commit
```

Agora, *você* pode executar:

```shell
$ git fetch upstream recover-B
# Fetch commit into your local repository.
```

## Evitar pushes forçados

Evite o push forçado em um repositório, a menos que seja absolutamente necessário. Isso se aplica especialmente quando mais de uma pessoa pode fazer push no repositório. Se alguém fizer push forçado em um repositório, ele poderá sobrescrever commits em que outras pessoas basearam seu trabalho. O push forçado faz alterações no histórico do repositório e pode corromper pull requests.

## Leitura adicional

- ["Como trabalhar com repositórios remotos" do livro _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
- ["Recuperação de dados" do livro _Pro Git_](https://git-scm.com/book/en/Git-Internals-Maintenance-and-Data-Recovery)
