---
title: Remover um remote
intro: Use o comando "git remote rm" para remover a URL de um remote do repositório.
redirect_from:
  - /articles/removing-a-remote
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

O comando `git remote rm` tem um argumento:

* O nome de um remote, como `destination`

### Exemplo

Estes exemplos assumem que você é [está efetuando o clone usando HTTPS](/articles/which-remote-url-should-i-use/#cloning-with-https-urls), o que é recomendado.

```shell
$ git remote -v
# Ver remotes atuais
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER/REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER/REPOSITORY</em>.git (push)
> destination  https://{% data variables.command_line.codeblock %}/<em>FORKER/REPOSITORY</em>.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/<em>FORKER/REPOSITORY</em>.git (push)

$ git remote rm destination
# Remover remote
$ git remote -v
# Confirmar a remoção
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER/REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER/REPOSITORY</em>.git (push)
```

{% warning %}

**Observação**: o comando `git remote rm` não exclui o repositório do remote no servidor.  Ele simplesmente remove o remote e suas referências do repositório local.

{% endwarning %}

### Solução de Problemas

Você pode se deparar com os seguintes erros ao tentar remover um remote.

#### Could not remove config section 'remote.[name]' (Não foi possível remover a seção de configuração "remote.[name]")

Esse erro informa que o remote que você tentou excluir não existe:

```shell
$ git remote rm sofake
> error: Could not remove config section 'remote.sofake'
```

Verifique se você inseriu corretamente o nome do remote.

### Leia mais

- ["Trabalhar com remotes" no livro _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
