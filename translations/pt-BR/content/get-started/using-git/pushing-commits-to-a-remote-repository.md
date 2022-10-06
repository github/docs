---
title: Fazer push de commits para um repositório remote
intro: Use `git push` para fazer push de commits de seu branch local para um repositório remoto.
redirect_from:
  - /articles/pushing-to-a-remote
  - /articles/pushing-commits-to-a-remote-repository
  - /github/using-git/pushing-commits-to-a-remote-repository
  - /github/getting-started-with-github/pushing-commits-to-a-remote-repository
  - /github/getting-started-with-github/using-git/pushing-commits-to-a-remote-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Push commits to a remote
ms.openlocfilehash: 61a3eb3e0b0147810b561b59b58879688dd4ba36
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145097285'
---
## Sobre o `git push`
O comando `git push` usa dois argumentos:

* Um nome de repositório remoto, por exemplo, `origin`
* Um nome de branch, por exemplo, `main`

Por exemplo:

```shell
git push <em> &lt;REMOTENAME> &lt;BRANCHNAME> </em>
```

Por exemplo, em geral, `git push origin main` é executado para efetuar push das alterações locais para o repositório online.

## Renomear branches

Para renomear um branch, use o mesmo comando `git push`, mas adicione mais um argumento: o nome do novo branch. Por exemplo:

```shell
git push <em> &lt;REMOTENAME> &lt;LOCALBRANCHNAME></em>:<em>&lt;REMOTEBRANCHNAME> </em>
```

Isso efetua push do `LOCALBRANCHNAME` para o `REMOTENAME`, mas ele é renomeado como `REMOTEBRANCHNAME`.

## Lidar com erros "non-fast-forward"

Se a cópia local de um repositório estiver fora de sincronia ou "atrasado" em relação ao repositório upstream do qual você está efetuando push, você receberá a mensagem `non-fast-forward updates were rejected`.
Isso significa que você precisa recuperar ou "buscar" as alterações upstream antes de conseguir efetuar push das alterações locais.

Para obter mais informações sobre esse erro, confira "[Como tratar erros que não são de avanço rápido](/github/getting-started-with-github/dealing-with-non-fast-forward-errors)".

## Fazer push de tags

Por padrão, e sem parâmetros adicionais, `git push` envia todos os branches correspondentes que têm os mesmos nomes dos branches remotos.

Para fazer push de uma única tag, você pode usar o mesmo comando usado para fazer push de um branch:

```shell
git push <em> &lt;REMOTENAME> &lt;TAGNAME> </em>
```

Para fazer push de todas as suas tags, digite o comando:

```shell
git push <em> &lt;REMOTENAME></em> --tags
```

## Excluir uma tag ou branch remote

À primeira vista, a sintaxe para excluir um branch é um pouco enigmática:

```shell
git push <em> &lt;REMOTENAME></em> :<em>&lt;BRANCHNAME> </em>
```

Observe que há um espaço antes dos dois pontos. O comando se parece com as mesmas etapas que você usará para renomear um branch. No entanto, aqui, você está informando o Git para não efetuar push de _nada_ para `BRANCHNAME` no `REMOTENAME`. Por isso, `git push` exclui o branch do repositório remoto.

## Remotes e bifurcações

Talvez você já saiba que [pode "criar forks" de repositórios](https://guides.github.com/overviews/forking/) no GitHub.

Ao clonar um repositório de sua propriedade, você fornece uma URL remota que informa ao Git o local em que ele deve efetuar fetch e push das atualizações. Caso deseje colaborar com o repositório original, adicione uma nova URL remota, normalmente chamada `upstream`, ao clone do Git local:

```shell
git remote add upstream <em> &lt;THEIR_REMOTE_URL> </em>
```

Agora, você pode buscar as atualizações e os branches do fork *deles*:

```shell
git fetch upstream
# Grab the upstream remote's branches
> remote: Counting objects: 75, done.
> remote: Compressing objects: 100% (53/53), done.
> remote: Total 62 (delta 27), reused 44 (delta 9)
> Unpacking objects: 100% (62/62), done.
> From https://{% data variables.command_line.codeblock %}/<em>octocat</em>/<em>repo</em>
>  * [new branch]      main     -> upstream/main
```

Quando terminar de fazer alterações locais, efetue push do branch local para o GitHub e [inicie uma solicitação de pull](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).

Para obter mais informações sobre como trabalhar com forks, confira "[Como sincronizar um fork](/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)".

## Leitura adicional

- [Capítulo "Repositórios remotos" do livro "Pro Git"](https://git-scm.com/book/ch5-2.html)
- [Página principal de `git remote`](https://git-scm.com/docs/git-remote.html)
- "[Folha de referências do Git](/articles/git-cheatsheet)"
- "[Fluxos de trabalho do Git](/github/getting-started-with-github/git-workflows)"
- "[Manual do Git](https://guides.github.com/introduction/git-handbook/)"
