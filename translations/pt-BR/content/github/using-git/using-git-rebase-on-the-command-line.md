---
title: Usar rebase do Git na linha de comando
redirect_from:
  - /articles/using-git-rebase/
  - /articles/using-git-rebase-on-the-command-line
intro: Veja um breve tutorial sobre como usar `git rebase` na linha de comando.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Neste exemplo, abordaremos todos os comandos `git rebase` disponíveis, exceto `exec`.

Vamos começar digitando `git rebase --interactive HEAD~7` no terminal. O editor de texto exibirá as seguintes linhas:

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

* Combinar por squash o quinto commit (`fa39187`) no commit `"Patch A"` (`1fc6c95`) usando `squash`.
* Mover o último commit (`7b36971`) para antes do commit `"Patch B"` (`6b2481b`) e mantê-lo como `pick`.
* Fazer merge do commit `"A fix for Patch B"` (`c619268`) no commit `"Patch B"` (`6b2481b`) e desconsiderar a mensagem do commit usando `fixup`.
* Dividir o terceiro commit (`dd1475d`) em dois commits menores usando `edit`.
* Corrigir a mensagem do commit que apresenta erro ortográfico (`4ca2acc`) usando `reword`.

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

Alteramos o comando de cada linha de `pick` para o comando em que estamos interessados.

Agora, salve e feche o editor. Isso iniciará o rebase interativo.

O Git ignora o primeiro comando rebase `pick 1fc6c95`, já que não precisa fazer nada, e segue para o próximo comando, `squash fa39187`. Como essa operação requer entrada de dados, o Git abre o editor de texto novamente. O arquivo aberto é parecido com este:

```
# Esta é uma combinação de dois commits.
# A mensagem do primeiro commit é:

Patch A

# Esta é a mensagem do segundo commit:

something to add to patch A

# Insira a mensagem do commit para as alterações. Linhas começando
# com '#' serão ignoradas, e uma mensagem vazia anula o commit.
# Não atualmente em qualquer branch.
# Alterações a receberem commit:
#   (use "git reset HEAD <file>..." para remover o stage)
#
# modificado:   a
#
```

Este arquivo é a maneira de o Git dizer: "Veja o que estou prestes a fazer com este `squash`". Ele lista a mensagem do primeiro commit (`"Patch A"`) e a mensagem do segundo commit (`"something to add to patch A"`). Se você estiver satisfeito com essas mensagens, salve o arquivo e feche o editor. Caso contrário, tem a opção de alterar a mensagem do commit simplesmente mudando o texto.

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

O Git processa os dois comandos `pick` (para `pick 7b36971` e `pick 6b2481b`). Ele *também* processa o comando `fixup` (`fixup c619268`), já que não requer interação. `fixup` faz merge das alterações de `c619268` para o commit antes dele, `6b2481b`. As duas alterações têm a mesma mensagem do commit: `"Patch B"`.

O Git obtém a operação `edit dd1475d`, para e imprime a seguinte mensagem no terminal:

```shell
Você pode corrigir o commit agora com

        git commit --amend

Quando estiver satisfeito com as alterações, execute

        git rebase --continue
```

Neste ponto, você pode editar qualquer arquivo no projeto para fazer outras alterações. É necessário realizar um novo commit para cada alteração feita. Você pode fazer isso digitando o comando `git commit --amend`. Quando terminar de fazer as alterações, execute `git rebase --continue`.

O Git então obtém o comando `reword 4ca2acc`.  Ele abre o editor de texto mais uma vez e apresenta as seguintes informações:

```
i cant' typ goods

# Insira a mensagem do commit para as alterações. Linhas começando
# com '#' serão ignoradas, e uma mensagem vazia anula o commit.
# Não atualmente em qualquer branch.
# Alterações a receberem commit:
#   (use "git reset HEAD <file>..." para remover o stage)
#
# modificado:   a
#
```

Como antes, o Git mostra a mensagem do commit para você editar. Altere o texto (`"i cant' typ goods"`), salve o arquivo e feche o editor. O Git terminará o rebase e retornará para o terminal.

### Fazer push de código com rebase para o GitHub

Como você alterou o histórico do Git, o `git push origin` normal **não** funcionará. É preciso modificar o comando forçando o push das alterações mais recentes:

```shell
$ git push origin master --force
```

{% warning %}

Forçar push tem implicações sérias, pois ele muda a sequência histórica de commits para o branch. Use-o com cuidado, especialmente se o repositório estiver sendo acessado por várias pessoas.

{% endwarning %}

### Leia mais

* "[Resolver conflitos de merge após rebase do GitHub](/articles/resolving-merge-conflicts-after-a-git-rebase)"
