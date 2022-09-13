---
title: Usar rebase do Git na linha de comando
redirect_from:
  - /articles/using-git-rebase
  - /articles/using-git-rebase-on-the-command-line
  - /github/using-git/using-git-rebase-on-the-command-line
  - /github/getting-started-with-github/using-git-rebase-on-the-command-line
  - /github/getting-started-with-github/using-git/using-git-rebase-on-the-command-line
intro: Veja um breve tutorial sobre como usar `git rebase` na linha de comando.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Git rebase
ms.openlocfilehash: e0d2d2d10da187d6cc38a72a44e8235ec1f6f73f
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145126341'
---
## Usando rebase do Git

Neste exemplo, abordaremos todos os comandos `git rebase` disponíveis, exceto `exec`.

Vamos começar nossa troca de base inserindo `git rebase --interactive HEAD~7` no terminal. O editor de texto exibirá as seguintes linhas:

```
pick 1fc6c95 Patch A
pick 6b2481b Patch B
pick dd1475d something I want to split
pick c619268 A fix for Patch B
pick fa39187 something to add to patch A
pick 4ca2acc i cant' typ goods
pick 7b36971 something to move before patch B
```

Neste exemplo, vamos:

* Faça uma mesclagem squash do quinto commit (`fa39187`) no commit `"Patch A"` (`1fc6c95`) usando `squash`.
* Mova o último commit (`7b36971`) para cima antes do commit `"Patch B"` (`6b2481b`) e mantenha-o como `pick`.
* Mescle o commit `"A fix for Patch B"` (`c619268`) no commit `"Patch B"` (`6b2481b`) e desconsidere a mensagem do commit usando `fixup`.
* Divida o terceiro commit (`dd1475d`) em dois commits menores usando `edit`.
* Corrija a mensagem do commit digitado incorretamente (`4ca2acc`) usando `reword`.

Ufa! Parece muito trabalho, mas, executando uma etapa de cada vez, podemos fazer essas alterações facilmente.

Para começar, precisamos modificar os comandos no arquivo para que fiquem assim:

```
pick 1fc6c95 Patch A
squash fa39187 something to add to patch A
pick 7b36971 something to move before patch B
pick 6b2481b Patch B
fixup c619268 A fix for Patch B
edit dd1475d something I want to split
reword 4ca2acc i cant' typ goods
```

Alteramos o comando de cada linha de `pick` para o comando no qual estamos interessados.

Agora, salve e feche o editor. Isso iniciará o rebase interativo.

O Git ignora o primeiro comando de troca de base, `pick 1fc6c95`, pois ele não precisa fazer nada. Ele vai para o próximo comando, `squash fa39187`. Como essa operação requer entrada de dados, o Git abre o editor de texto novamente. O arquivo aberto é parecido com este:

```
# This is a combination of two commits.
# The first commit's message is:

Patch A

# This is the 2nd commit message:

something to add to patch A

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# Not currently on any branch.
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
# modified:   a
#
```

Este arquivo é a maneira do Git de dizer: "Ei, é isto o que vou fazer com este `squash`". Ele lista a mensagem do primeiro commit (`"Patch A"`) e a mensagem do segundo commit (`"something to add to patch A"`). Se você estiver satisfeito com essas mensagens, salve o arquivo e feche o editor. Caso contrário, tem a opção de alterar a mensagem do commit simplesmente mudando o texto.

Depois que o editor é fechado, o rebase continua:

```
pick 1fc6c95 Patch A
squash fa39187 something to add to patch A
pick 7b36971 something to move before patch B
pick 6b2481b Patch B
fixup c619268 A fix for Patch B
edit dd1475d something I want to split
reword 4ca2acc i cant' typ goods
```

O Git processa os dois comandos `pick` (para `pick 7b36971` e `pick 6b2481b`). Ele *também* processa o comando `fixup` (`fixup c619268`), pois não exige nenhuma interação. `fixup` mescla as alterações de `c619268` no commit antes dele, `6b2481b`. As duas alterações terão a mesma mensagem de commit: `"Patch B"`.

O Git chega à operação `edit dd1475d`, para e imprime a seguinte mensagem no terminal:

```shell
You can amend the commit now, with

        git commit --amend

Once you are satisfied with your changes, run

        git rebase --continue
```

Neste ponto, você pode editar qualquer arquivo no projeto para fazer outras alterações. Para cada alteração feita, você precisará executar um novo commit e poderá fazer isso inserindo o comando `git commit --amend`. Quando terminar de fazer todas as alterações, execute `git rebase --continue`.

Em seguida, o Git chega ao comando `reword 4ca2acc`.  Ele abre o editor de texto mais uma vez e apresenta as seguintes informações:

```
i cant' typ goods

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# Not currently on any branch.
# Changes to be committed:
#   (use "git reset HEAD^1 <file>..." to unstage)
#
# modified:   a
#
```

Como antes, o Git mostra a mensagem do commit para você editar. Você pode alterar o texto (`"i cant' typ goods"`), salvar o arquivo e fechar o editor. O Git terminará o rebase e retornará para o terminal.

## Fazer push de código com rebase para o GitHub

Como você alterou o histórico do Git, a `git push origin` normal **não funcionará**. É preciso modificar o comando forçando o push das alterações mais recentes:

```shell
# Don't override changes
$ git push origin main --force-with-lease

# Override changes
$ git push origin main --force
```

{% warning %}

Forçar push tem implicações sérias, pois ele muda a sequência histórica de commits para o branch. Use-o com cuidado, especialmente se o repositório estiver sendo acessado por várias pessoas.

{% endwarning %}

## Leitura adicional

* "[Como resolver conflitos de mesclagem após uma troca de base do GitHub](/github/getting-started-with-github/resolving-merge-conflicts-after-a-git-rebase)"
