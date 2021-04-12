---
title: Fazer push de commits para um repositório remote
intro: Use `git push` para fazer push de commits de seu branch local para um repositório remote.
redirect_from:
  - /articles/pushing-to-a-remote/
  - /articles/pushing-commits-to-a-remote-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

O comando `git push` usa dois argumentos:

* Um nome de remote, por exemplo, `origin`
* Um nome de branch, por exemplo, `principal`

Por exemplo:

```shell
git push <em> &lt;REMOTENAME> &lt;BRANCHNAME> </em>
```

Como exemplo, você normalmente executa o `git push origin main` para fazer push das suas alterações locais para o seu repositório on-line.

### Renomear branches

Para renomear um branch, você usaria o mesmo comando `git push`, mas adicionaria mais um argumento: o nome do novo branch. Por exemplo:

```shell
git push <em> &lt;REMOTENAME> &lt;LOCALBRANCHNAME></em>:<em>&lt;REMOTEBRANCHNAME> </em>
```

Isso faz push do `LOCALBRANCHNAME` para seu `REMOTENAME`, mas ele é renomeado para `REMOTEBRANCHNAME`.

### Lidar com erros "non-fast-forward"

Se a cópia local de um repositório não está sincronizada, ou está "atrasada", com o repositório upstream que você está fazendo push, você receberá uma mensagem informando que `non-fast-forward updates were rejected` (as atualizações non-fast-forward foram rejeitadas). Isso significa que você deve recuperar ou fazer "fetch" das alterações upstream, antes de conseguir fazer push das alterações locais.

Para obter mais informações sobre esse erro, consulte "[Lidar com erros non-fast-forward](/articles/dealing-with-non-fast-forward-errors)".

### Fazer push de tags

Por padrão, e sem parâmetros adicionais, `git push` envia todos os branches correspondentes que têm os mesmos nomes de branches remote.

Para fazer push de uma única tag, você pode usar o mesmo comando usado para fazer push de um branch:

```shell
git push <em> &lt;REMOTENAME> &lt;TAGNAME> </em>
```

Para fazer push de todas as suas tags, digite o comando:

```shell
git push <em> &lt;REMOTENAME></em> --tags
```

### Excluir uma tag ou branch remote

À primeira vista, a sintaxe para excluir um branch é um pouco enigmática:

```shell
git push <em> &lt;REMOTENAME></em> :<em>&lt;BRANCHNAME> </em>
```

Observe que há um espaço antes dos dois pontos. O comando se parece com as mesmas etapas que você usaria para renomear um branch. No entanto, aqui você está dizendo ao Git para fazer push de _nada_ no `BRANCHNAME` em `REMOTENAME`. Por causa disso, `git push` exclui o branch no repositório remote.

### Remotes e bifurcações

Você já deve saber que [é possível "bifurcar" repositórios](https://guides.github.com/overviews/forking/) no GitHub.

Ao clonar um repositório de sua propriedade, você fornece um URL remoto que informa o Git onde fazer fetch e push de atualizações. Se deseja colaborar com o repositório original, você deve adicionar uma nova URL remota, normalmente denominado `upstream`, em seu clone do Git local:

```shell
git remote add upstream <em> &lt;THEIR_REMOTE_URL> </em>
```

Agora, é possível fazer fetch de atualizações e branches da bifurcação *deles*:

```shell
git fetch upstream
# Captura os branches dos remotes upstream
> remote: Contando objetos: 75, concluído.
> remote: Compactação de objetos: 100% (53/53), concluída.
> remote: Total 62 (delta 27), reutilizados 44 (delta 9)
> Descompactação de objetos: 100% (62/62), concluída.
> From https://{% data variables.command_line.codeblock %}/<em>octocat</em>/<em>repo</em>
>  * [new branch]      main     -> upstream/main
```

Quando finalizar as alterações locais, você pode fazer push do seu branch local para o GitHub e [iniciar uma pull request](/articles/about-pull-requests).

Para obter mais informações sobre como trabalhar com bifurcações, consulte "[Sincronizar uma bifurcação](/articles/syncing-a-fork)".

### Leia mais

- [Capítulo "Remotes" do livro "Pro Git"](https://git-scm.com/book/ch5-2.html)
- [Página do manual `git remote`](https://git-scm.com/docs/git-remote.html)
- "[Folha de consultas Git](/articles/git-cheatsheet)"
- "[Fluxos de trabalho Git](/articles/git-workflows)"
- "[Manual do Git](https://guides.github.com/introduction/git-handbook/)"
