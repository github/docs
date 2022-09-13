---
title: Sobre a troca de base do Git
redirect_from:
  - /rebase
  - /articles/interactive-rebase
  - /articles/about-git-rebase
  - /github/using-git/about-git-rebase
  - /github/getting-started-with-github/about-git-rebase
  - /github/getting-started-with-github/using-git/about-git-rebase
intro: 'O comando `git rebase` permite alterar com facilidade uma variedade de commits, modificando o histórico do seu repositório. É possível reordenar, editar ou combinar commits por squash.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 5ffa3cbb1fcb6c8c37e56e434b08018582a0ff2b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145094795'
---
Normalmente, você usará `git rebase` para:

* Editar mensagens anteriores do commit
* Combinar vários commits em um
* Excluir ou reverter commits que não são mais necessários

{% warning %}

**Aviso**: como a alteração do seu histórico de commits pode dificultar as coisas para todos os outros que usam o repositório, é considerada uma prática inadequada fazer a troca de base de commits quando você já efetuou push deles para um repositório. Para saber como trocar a base com segurança no {% data variables.product.product_location %}, confira "[Sobre as mesclagens de solicitação de pull](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)".

{% endwarning %}

## Fazer rebase de commits em um branch

Para fazer rebase de todos os commits entre outro branch e o estado do branch atual, você pode inserir o seguinte comando no shell (ou o prompt de comando para Windows, ou o terminal para Mac e Linux):

```shell
$ git rebase --interactive <em>other_branch_name</em>
```

## Fazer rebase de commits em um momento específico

Para fazer rebase dos últimos commits em seu branch atual, você pode inserir o seguindo comando no shell:

```shell
$ git rebase --interactive HEAD~7
```

## Comandos disponíveis ao fazer rebase

Há seis comandos disponíveis para fazer rebase:

<dl>
<dt><code>pick</code></dt>
<dd><code>pick</code> significa simplesmente que o commit está incluído. A reorganização da ordem dos comandos <code>pick</code> altera a ordem dos commits quando a troca de base está em andamento. Se você optar por não incluir um commit, será preciso excluir a linha toda. </dd>

<dt><code>reword</code></dt>
<dd>O comando <code>reword</code> é semelhante a <code>pick</code>, mas depois que você usá-lo, o processo de troca de base será colocado em pausa e dará a você a chance de alterar a mensagem de commit. As alterações feitas pelo commit não são afetadas. </dd>

<dt><code>edit</code></dt>
<dd>Se você optar por <code>edit</code> um commit, terá a chance de alterar o commit, o que significa que pode adicionar ou alterar o commit por completo. Também é possível fazer mais commits antes de continuar com o rebase. Isso permite que você divida um commit grande em commits menores ou remova alterações equivocadas feitas em um commit. </dd>

<dt><code>squash</code></dt>
<dd>Esse comando permite combinar dois ou mais commits em um único commit. Um commit é combinado por squash no commit acima dele. O Git permite que você grave uma nova mensagem do commit descrevendo ambas as alterações.</dd>

<dt><code>fixup</code></dt>
<dd>Isso é semelhante a <code>squash</code>, mas o commit a ser mesclado tem a mensagem descartada. O commit simplesmente sofre merge no commit acima dele, e a mensagem do commit anterior é usado para descrever ambas as alterações.</dd>

<dt><code>exec</code></dt>
<dd>Permite que você execute comandos de shell arbitrários em um commit.</dd>
</dl>

## Um exemplo de uso de `git rebase`

Independentemente do comando usado, o Git iniciará [o editor de texto padrão](/github/getting-started-with-github/associating-text-editors-with-git) e abrirá um arquivo que fornece detalhes dos commits no intervalo escolhido. Esse arquivo é parecido com este:

```
pick 1fc6c95 Patch A
pick 6b2481b Patch B
pick dd1475d something I want to split
pick c619268 A fix for Patch B
pick fa39187 something to add to patch A
pick 4ca2acc i cant' typ goods
pick 7b36971 something to move before patch B

# Rebase 41a72e6..7b36971 onto 41a72e6
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# If you remove a line here THAT COMMIT WILL BE LOST.
# However, if you remove everything, the rebase will be aborted.
#
```

Ao dividir essas informações, de cima para baixo, observamos que:

- Sete commits são listados, o que indica que houve sete alterações entre nosso ponto de partida e o estado do nosso branch atual.
- Os commits escolhidos para rebase são classificados na ordem das alterações mais antigas (no topo) para as mais recentes (na base).
- Cada linha lista um comando (por padrão, `pick`), o SHA do commit e a mensagem de commit. Todo o procedimento `git rebase` gira em torno da manipulação dessas três colunas. As alterações feitas tem a *base trocada* no repositório.
- Após os commits, o Git informa o intervalo de commits com o qual estamos trabalhando (`41a72e6..7b36971`).
- Por fim, o Git fornece alguma ajuda informando a você os comandos que estão disponíveis ao fazer rebase dos commits.

## Leitura adicional

- "[Como usar a troca de base do Git](/articles/using-git-rebase)"
- [O capítulo "Ramificação do Git" do _livro Pro Git_](https://git-scm.com/book/en/Git-Branching-Rebasing)
- [O capítulo "Troca de base interativa" do _livro Pro Git_](https://git-scm.com/book/en/Git-Tools-Rewriting-History#_changing_multiple)
- "[Mesclagem squash de commits com a troca de base](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html)"
- "[Como sincronizar seu branch](/desktop/contributing-to-projects/syncing-your-branch)" na documentação do {% data variables.product.prodname_desktop %}
