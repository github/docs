---
title: Adicionar um remote
intro: 'Para adicionar um novo remote, use o comando ''git remote add'' no terminal, no diretório em que se repositório está armazenado.'
redirect_from:
  - /articles/adding-a-remote
  - /github/using-git/adding-a-remote
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
O comando `git remote add` usa dois argumentos:

* Um nome de remote, por exemplo, `origin`
* Uma URL remota, por exemplo `https://{% data variables.command_line.backticks %}/user/repo.git`

Por exemplo:

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git
# Defina um novo remote

$ git remote -v
# Verifique  o novo remote
> origin  https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>user</em>/<em>repo</em>.git (push)
```

Não tem certeza de qual URL usar?  Confira "[Qual URL remota devo usar?](/articles/which-remote-url-should-i-use)"

### Solução de Problemas

Você pode se deparar com estes erros ao tentar adicionar um remote.

#### O remote `name` já existe

Esse erro significa que você tentou adicionar um remote com um nome que já existe no repositório local:

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife.git
> fatal: remote origin already exists.
```

Para corrigir isso, é possível

* Usar um nome diferente para o novo remote
* [Renomear o remote existente](/articles/renaming-a-remote)
* [Excluir o remote existente](/articles/removing-a-remote)

### Leia mais

- "[Working with Remotes" (Trabalhar com remotes) no livro _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
