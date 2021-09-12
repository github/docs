---
title: Definir seu nome de usuário no Git
intro: 'O Git usa um nome de usuário para associar os commits a uma identidade. O nome de usuário do Git é diferente do nome de usuário do {% data variables.product.product_name %}.'
redirect_from:
  - /articles/setting-your-username-in-git
  - /github/using-git/setting-your-username-in-git
  - /github/getting-started-with-github/setting-your-username-in-git
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Você pode alterar o nome associado aos commits do Git usando o comando `git config`. O novo nome configurado ficará visível em todos os commits futuros cujo push é feito para o {% data variables.product.product_name %} usando a linha de comando. Se não quiser usar seu nome verdadeiro, use qualquer texto como o nome de usuário do Git.

Alterar o nome associado aos commits do Git usando o `git config` afeta somente os commits futuros e não altera o nome usado em commits antigos.

### Configurar o nome de usuário do Git para *todos* os repositórios no computador

{% data reusables.command_line.open_the_multi_os_terminal %}

2. {% data reusables.user_settings.set_your_git_username %}
   ```shell
   $ git config --global user.name "<em>Mona Lisa</em>"
   ```

3. {% data reusables.user_settings.confirm_git_username_correct %}
   ```shell
   $ git config --global user.name
   > Mona Lisa
   ```

### Configurar o nome de usuário do Git para um repositório específico

{% data reusables.command_line.open_the_multi_os_terminal %}

2. Altere o diretório de trabalho atual para o repositório local no qual deseja configurar o nome associado aos commits do Git.

3. {% data reusables.user_settings.set_your_git_username %}
   ```shell
   $ git config user.name "<em>Mona Lisa</em>"
   ```

3. {% data reusables.user_settings.confirm_git_username_correct %}
   ```shell
   $ git config user.name
   > Mona Lisa
   ```

### Leia mais

- "[Configurar endereço de e-mail do commit](/articles/setting-your-commit-email-address)"
- ["Configuração do Git" no livro _Pro Git_](https://git-scm.com/book/en/Customizing-Git-Git-Configuration)
