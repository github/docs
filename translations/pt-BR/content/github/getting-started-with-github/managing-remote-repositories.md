---
title: Gerenciar repositórios remotos
intro: 'Aprenda a trabalhar com seus repositórios locais no seu computador e repositórios remotos hospedados no {% data variables.product.product_name %}.'
redirect_from:
  - /categories/18/articles/
  - /remotes/
  - /categories/managing-remotes/
  - /articles/managing-remote-repositories
  - /articles/adding-a-remote
  - /github/using-git/adding-a-remote
  - /articles/changing-a-remote-s-url
  - /articles/changing-a-remotes-url
  - /github/using-git/changing-a-remotes-url
  - /articles/renaming-a-remote
  - /github/using-git/renaming-a-remote
  - /articles/removing-a-remote
  - /github/using-git/removing-a-remote
  - /github/using-git/managing-remote-repositories
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Adding a remote repository

To add a new remote, use the `git remote add` command on the terminal, in the directory your repository is stored at.

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

For more information on which URL to use, see "[About remote repositories](/github/getting-started-with-github/about-remote-repositories)."

#### Troubleshooting: Remote origin already exists

Esse erro significa que você tentou adicionar um remote com um nome que já existe no repositório local.

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife.git
> fatal: remote origin already exists.
```

Para corrigir isso, é possível:
* Usar um nome diferente para o novo remote
* Rename the existing remote repository
* Delete the existing remote repository

### Changing a remote repository's URL

The `git remote set-url` command changes an existing remote repository URL.

{% tip %}

**Tip:** For information on the difference between HTTPS and SSH URLs, see "[About remote repositories](/github/getting-started-with-github/about-remote-repositories)."

{% endtip %}

O comando `git remote set-url` usa dois argumentos:

* Um nome remote existente. Por exemplo, `origin` ou `upstream` são duas escolhas comuns.
* Uma nova URL para o remote. Por exemplo:
  * Se estiver atualizando para usar HTTPS, a URL poderá ser parecida com esta:
```shell
https://{% data variables.command_line.backticks %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
```
  * Se estiver atualizando para usar SSH, a URL poderá ser parecida com esta:
```shell
git@{% data variables.command_line.codeblock %}:<em>USERNAME</em>/<em>REPOSITORY</em>.git
```

#### Alternar URLs remotes de SSH para HTTPS

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Altere o diretório de trabalho atual referente ao seu projeto local.
3. Liste seus remotes existentes para obter o nome do remote que deseja alterar.
  ```shell
  $ git remote -v
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (push)
  ```
4. Altere a URL do remote de SSH para HTTPS com o comando `git remote set-url`.
  ```shell
  $ git remote set-url origin https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
  ```
5. Verifique se o URL remote foi alterado.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (push)
  ```

Na próxima vez que você aplicar `git fetch`, `git pull` ou `git push` no repositório remote, precisará fornecer seu nome de usuário e a senha do GitHub. {% data reusables.user_settings.password-authentication-deprecation %}

Você pode [usar um auxiliar de credenciais](/github/getting-started-with-github/caching-your-github-credentials-in-git) para que o Git lembre seu nome de usuário e token de acesso pessoal toda vez que conversar com o GitHub.

#### Mudar as URLs remotas de HTTPS para SSH

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Altere o diretório de trabalho atual referente ao seu projeto local.
3. Liste seus remotes existentes para obter o nome do remote que deseja alterar.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/<em>USERNAME/REPOSITORY</em>.git (push)
  ```
4. Altere a URL do remote de HTTPS para SSH com o comando `git remote set-url`.
  ```shell
  $ git remote set-url origin git@{% data variables.command_line.codeblock %}:<em>USERNAME</em>/<em>REPOSITORY</em>.git
  ```
5. Verifique se o URL remote foi alterado.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}:<em>USERNAME/REPOSITORY</em>.git (push)
  ```

#### Troubleshooting: No such remote '[name]'

Este erro informa que o remote que você tentou alterar não existe:

```shell
$ git remote set-url sofake https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: No such remote 'sofake'
```

Verifique se você inseriu corretamente o nome do remote.

### Renaming a remote repository

Use the `git remote rename` command to rename an existing remote.

O comando `git remote rename` tem dois argumentos:
* O nome de um remote existente, como `origin`
* Um novo nome para o remote, como `destination`

### Exemplo

Estes exemplos supõem que você está [clonando usando HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls), que é o método recomendado.

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

#### Troubleshooting: Could not rename config section 'remote.[old name]' to 'remote.[new name]'

Esse erro informa que o nome do remote antigo que você inseriu não existe.

Você pode consultar os remotes existentes no momento com o comando `git remote -v`:

```shell
$ git remote -v
# Consulta os remotes existentes
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/<em>OWNER</em>/<em>REPOSITORY</em>.git (push)
```

#### Troubleshooting: Remote [new name] already exists

Esse erro informa que o nome de remote que você deseja usar já existe. To solve this, either use a different remote name, or rename the original remote.

### Removing a remote repository

Use the `git remote rm` command to remove a remote URL from your repository.

O comando `git remote rm` tem um argumento:
* O nome de um remote, como `destination`

### Exemplo

Estes exemplos supõem que você está [clonando usando HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls), que é o método recomendado.

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

#### Troubleshooting: Could not remove config section 'remote.[name]'

Esse erro informa que o remote que você tentou excluir não existe:

```shell
$ git remote rm sofake
> error: Could not remove config section 'remote.sofake'
```

Verifique se você inseriu corretamente o nome do remote.

### Leia mais

- "[Working with Remotes" (Trabalhar com remotes) no livro _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
