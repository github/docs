---
title: Alterar o remote do URL
redirect_from:
  - /articles/changing-a-remote-s-url
  - /articles/changing-a-remotes-url
intro: O comando 'git remote set-url' altera o URL de um repositório remote existente.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% tip %}

**Dica:** para obter informações sobre a diferença entre URLs HTTPS e SSH, consulte "[Qual URL remote devo usar?](/articles/which-remote-url-should-i-use)"

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

### Alternar URLs remotes de SSH para HTTPS

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

Você pode [usar um auxiliar de credenciais](/github/using-git/caching-your-github-credentials-in-git) para que o Git lembre seu nome de usuário e token de acesso pessoal toda vez que conversar com o GitHub.

### Mudar as URLs remotas de HTTPS para SSH

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

### Solução de Problemas

Você pode se deparar com os seguintes erros ao tentar alterar um remote:

#### No such remote '[name]'

Este erro informa que o remote que você tentou alterar não existe:

```shell
$ git remote set-url sofake https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: No such remote 'sofake'
```

Verifique se você inseriu corretamente o nome do remote.

### Leia mais

- ["Trabalhar com remotes" no livro _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
