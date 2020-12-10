---
title: Sobre o Git rebase
redirect_from:
  - /rebase/
  - articles/interactive-rebase/
  - /articles/about-git-rebase
intro: 'O comando ''git rebase'' permite alterar com facilidade uma variedade de commits, modificando o histórico do seu repositório. É possível reordenar, editar ou combinar commits por squash.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---



Geralmente, `git rebase` é usado para:

* Editar mensagens anteriores do commit
* Combinar vários commits em um
* Excluir ou reverter commits que não são mais necessários

{% warning %}

**Aviso**: como a alteração do histórico de commits pode dificultar a vida de outras pessoas que usam o repositório, não é uma boa ideia fazer rebase de commits quando você já fez push em um repositório. Para saber como fazer rebase com segurança no {% data variables.product.product_location %}, consulte "[Sobre merges de pull request](/articles/about-pull-request-merges)".

{% endwarning %}

### Fazer rebase de commits em um branch

Para fazer rebase de todos os commits entre outro branch e o estado do branch atual, você pode inserir o seguinte comando no shell (ou o prompt de comando para Windows, ou o terminal para Mac e Linux):

```shell
$ git rebase --interactive <em>other_branch_name</em>
```

### Fazer rebase de commits em um momento específico

Para fazer rebase dos últimos commits em seu branch atual, você pode inserir o seguindo comando no shell:

```shell
$ git rebase --interactive HEAD~7
```

### Comandos disponíveis ao fazer rebase

Há seis comandos disponíveis para fazer rebase:

<dl>
<dt><code>pick</code></dt>
<dd><code>pick</code> simplesmente significa que o commit está incluído. Reorganizar a ordem de <code>pick</code> dos comandos altera a ordem dos commits quando o rebase está em andamento. Se você optar por não incluir um commit, será preciso excluir a linha toda. </dd>

<dt><code>reword</code></dt>
<dd>O comando <code>reword</code> é semelhante a <code>pick</code>, mas depois que você o usa, o processo de rebase pausa e dá a chance de você alterar a mensagem do commit. As alterações feitas pelo commit não são afetadas. </dd>

<dt><code>edit</code></dt>
<dd>Se optar por editar (<code>edit</code>) um commit, você terá a chance de corrigi-lo, o que significa que será possível adicionar ou alterar o commit por inteiro. Também é possível fazer mais commits antes de continuar com o rebase. Isso permite que você divida um commit grande em commits menores ou remova alterações equivocadas feitas em um commit. </dd>

<dt><code>combinação por squash</code></dt>
<dd>Esse comando permite combinar dois ou mais commits em um único commit. Um commit é combinado por squash no commit acima dele. O Git permite que você grave uma nova mensagem do commit descrevendo ambas as alterações.</dd>

<dt><code>fixup</code></dt>
<dd>Esse comando é semelhante ao <code>squash</code>, mas o commit a sofrer merge tem sua mensagem descartada. O commit simplesmente sofre merge no commit acima dele, e a mensagem do commit anterior é usado para descrever ambas as alterações.</dd>

<dt><code>exec</code></dt>
<dd>Permite que você execute comandos de shell arbitrários em um commit.</dd>
</dl>

### Um exemplo de uso de `git rebase`

Não importa o comando a ser usado, o Git iniciará [seu editor de texto padrão](/articles/associating-text-editors-with-git) e abrirá um arquivo que detalha os commits no intervalo escolhido. Esse arquivo é parecido com este:

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
# Comandos:
#  p, pick = usar commit
#  r, reword = usar commit, mas editar a mensagem do commit
#  e, edit = usar commit, mas interromper para correção
#  s, squash = usar commit, mas juntar  no commit anterior
#  f, fixup = como "squash", mas descartar mensagem de log desse commit
#  x, exec = executar comando (o restante da linha) usando shell
#
# Se você remover uma linha aqui ESSE COMMIT SERÁ PERDIDO.
# No entanto, se você remover tudo, o rebase será anulado.
#
```

Ao dividir essas informações, de cima para baixo, observamos que:

- Sete commits são listados, o que indica que houve sete alterações entre nosso ponto de partida e o estado do nosso branch atual.
- Os commits escolhidos para rebase são classificados na ordem das alterações mais antigas (no topo) para as mais recentes (na base).
- Cada linha lista um comando (por padrão, `pick`), o SHA do commit e a mensagem do commit. Todo o procedimento de `git rebase` gira em torno da manipulação dessas três colunas. As alterações feitas são *passadas por rebase* ao seu repositório.
- Depois dos commits, o Git informa a você o intervalo de commits com os quais estamos trabalhando (`41a72e6..7b36971`).
- Por fim, o Git fornece alguma ajuda informando a você os comandos que estão disponíveis ao fazer rebase dos commits.

### Leia mais

- "[Usar o Git rebase](/articles/using-git-rebase)"
- [O capítulo "Git Branching" no livro do _Pro Git_](https://git-scm.com/book/en/Git-Branching-Rebasing)
- [O capítulo "Interactive Rebasing" no livro do _Pro Git_](https://git-scm.com/book/en/Git-Tools-Rewriting-History#_changing_multiple)
- "[Combinar commits por squash com rebase](http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html)"
- "[Sincronizar seu branch](/desktop/contributing-to-projects/syncing-your-branch)" na documentação do {% data variables.product.prodname_desktop %}
