---
title: 'O commit aparece no GitHub, mas não no meu clone local'
intro: 'Às vezes, um commit poderá ser visto no {% data variables.product.product_name %}, mas não existirá no clone local do repositório.'
redirect_from:
  - /articles/commit-exists-on-github-but-not-in-my-local-clone
  - /github/committing-changes-to-your-project/commit-exists-on-github-but-not-in-my-local-clone
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Quando você usa `git show` para exibir um commit específico na linha de comando, é possível que veja um erro fatal.

Por exemplo, talvez você receba um erro de `bad object` no local:

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

### O repositório local está desatualizado

O repositório local pode não ter o commit ainda. Para levar informações de seu repositório remote para o clone local, use `git fetch`:

```shell
$ git fetch <em>remote</em>
```

Isso copia informações com segurança do repositório remote para o clone local sem fazer alterações nos arquivos em que você fez checkout. É possível usar `git fetch upstream` para obter informações de um repositório bifurcado ou `git fetch origin` para obter informações de um repositório que você apenas clonou.

{% tip %}

**Dica**: para obter mais informações, leia sobre [como gerenciar remotes e fazer fetch de dados](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes) no livro [Pro Git](https://git-scm.com/book).

{% endtip %}

### O branch que continha o commit foi excluído

Se um colaborador no repositório tiver excluído o brach contendo o commit ou tiver forçado o push no branch, o commit ausente poderá ter ficado órfão (isto é, não poderá ser alcançado de qualquer referência) e, portanto, o fetch dele não poderá ser feito no clone local.

Felizmente, se algum colaborador tiver um clone local do repositório com o commit ausente, ele poderá fazer push dele de volta no {% data variables.product.product_name %}.  Ele precisa ter certeza de que o commit é referenciado por um branch local e, em seguida, fazer push dele como um novo branch para o {% data variables.product.product_name %}.

Vamos dizer que a pessoa ainda tem um branch local (chame-o de `B`) que contém o commit.  Isso pode estar rastreando o branch que teve push forçado ou excluído e ele simplesmente ainda não foi atualizado.  Para preservar o commit, ele pode fazer push desse branch local em um novo branch (chame-o de `recover-B`) no {% data variables.product.product_name %}.  Para este exemplo, vamos supor que ele tenha um remote chamado `upstream` pelo qual ele tem acesso push a `github.com/$account/$repository`.

A outra pessoa executa:

```shell
$ git branch recover-B B
# Criar um branch local fazendo referência ao commit
$ git push upstream B:recover-B
# Fazer push do local B para o novo branch upstream, criando referência ao commit
```

Agora, *você* pode executar:

```shell
$ git fetch upstream recover-B
# Fazer fetch de commit no repositório local.
```

### Evitar pushes forçados

Evite o push forçado em um repositório, a menos que seja absolutamente necessário. Isso se aplica especialmente quando mais de uma pessoa pode fazer push no repositório.

### Leia mais

- ["Trabalhar com remotes" no livro _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
- ["Recuperação de dados" no livro _Pro Git_](https://git-scm.com/book/en/Git-Internals-Maintenance-and-Data-Recovery)
