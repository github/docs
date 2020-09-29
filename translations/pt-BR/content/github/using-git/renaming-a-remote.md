---
title: Renomear um remote
intro: Use o comando "git remote rename" para renomear um remote.
redirect_from:
  - /articles/renaming-a-remote
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

O comando `git remote rename` tem dois argumentos:

* O nome de um remote existente, como `origin`
* Um novo nome para o remote, como `destination`

### Exemplo

Estes exemplos assumem que você é [está efetuando o clone usando HTTPS](/articles/which-remote-url-should-i-use/#cloning-with-https-urls), o que é recomendado.

```shell
$ git remote -v
# Consulta os remotes existentes
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (push)

$ git remote rename origin destination
# Altera o nome do remote de 'origin' para 'destination'

$ git remote -v
# Confirma o novo nome do remote
> destination  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (push)
```

### Solução de Problemas

Você pode se deparar com os seguintes erros ao tentar renomear um remote.

#### Could not rename config section 'remote.[old name]' to 'remote.[new name]' (Não foi possível renomear a seção de configuração "remote.[old name]" como "remote.[new name]")

Esse erro informa que o nome do remote antigo que você inseriu não existe.

Você pode consultar os remotes existentes no momento com o comando `git remote -v`:

```shell
$ git remote -v
# Consulta os remotes existentes
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (push)
```

#### Remote [new name] already exists (Já existe um remote com o nome [novo nome]).

Esse erro informa que o nome de remote que você deseja usar já existe. Para resolver isso, use um nome de remote diferente ou renomeie o remote original.

### Leia mais

- ["Trabalhar com remotes" no livro _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
