---
title: Adicionar um projeto existente ao GitHub usando a linha de comando
intro: 'Colocar um trabalho que já existe no {% data variables.product.product_name %} pode permitir que você compartilhe e colabore de muitas maneiras.'
redirect_from:
  - /articles/add-an-existing-project-to-github/
  - /articles/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Adicionar um projeto localmente
---

## About adding existing projects to {% data variables.product.product_name %}

{% data reusables.repositories.migrating-from-codeplex %}

{% tip %}

**Dica:** se estiver mais familiarizado com uma interface de usuário de apontar e clicar, tente adicionar seu projeto com o {% data variables.product.prodname_desktop %}. Para obter mais informações, consulte "[Adicionar um repositório do seu computador local ao GitHub Desktop](/desktop/guides/contributing-to-projects/adding-a-repository-from-your-local-computer-to-github-desktop)" na Ajuda do *{% data variables.product.prodname_desktop %}*.

{% endtip %}

{% data reusables.repositories.sensitive-info-warning %}

## Adding a project to {% data variables.product.product_name %} with {% data variables.product.prodname_cli %}

{% data variables.product.prodname_cli %} é uma ferramenta de código aberto para usar {% data variables.product.product_name %} a partir da linha de comando do seu computador. {% data variables.product.prodname_cli %} can simplify the process of adding an existing project to {% data variables.product.product_name %} using the command line. To learn more about {% data variables.product.prodname_cli %}, see "[About {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)."

1. In the command line, navigate to the root directory of your project.
1. Inicialize o diretório local como um repositório Git.

    ```shell
    git init -b main
    ```

1. To create a repository for your project on {% data variables.product.product_name %}, use the `gh repo create` subcommand. Replace `project-name` with the desired name for your repository. If you want your project to belong to an organization instead of to your user account, specify the organization name and project name with `organization-name/project-name`.

   ```shell
   gh repo create <em>project-name</em>
   ```

1. Follow the interactive prompts. Alternatively, you can specify arguments to skip these prompts. For more information about possible arguments, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_repo_create).
1. Pull changes from the new repository that you created. (If you created a `.gitignore` or `LICENSE` file in the previous step, this will pull those changes to your local directory.)

    ```shell
    git pull --set-upstream origin main
    ```

1. Stage, commit, and push all of the files in your project.

    ```shell
    git add . && git commit -m "initial commit" && git push
    ```

## Adding a project to {% data variables.product.product_name %} without {% data variables.product.prodname_cli %}

{% mac %}

1. [Crie um repositório ](/repositories/creating-and-managing-repositories/creating-a-new-repository) no {% data variables.product.product_location %}. Para evitar erros, não inicialize o novo repositório com os arquivos *README*, de licença ou `gitignore`. É possível adicionar esses arquivos após push do projeto no {% data variables.product.product_name %}. ![Menu suspenso Create New Repository (Criar novo repositório)](/assets/images/help/repository/repo-create.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Altere o diretório de trabalho atual referente ao seu projeto local.
4. Inicialize o diretório local como um repositório Git.
  ```shell
  $ git init -b main
  ```
5. Adicione os arquivos ao novo repositório local. Isso faz stage deles para o primeiro commit.
  ```shell
  $ git add .
  # Adiciona os arquivos no repositório local e faz stage deles para commit. {% data reusables.git.unstage-codeblock %}
  ```
6. Faça commit dos arquivos com stage em seu repositório local.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. No topo da página Quick Setup (Configuração rápida) do repositório do {% data variables.product.product_name %}, clique em {% octicon "clippy" aria-label="The copy to clipboard icon" %} para copiar a URL do repositório remote. ![Campo Copy remote repository URL (Copiar URL do repositório remote)](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. No Terminal, [adicione a URL para o repositório remote](/github/getting-started-with-github/managing-remote-repositories) onde será feito push do seu repositório local.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Push the changes](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) (Faça push das alterações</0> no seu repositório local para o {% data variables.product.product_location %}.
  ```shell
  $ git push -u origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endmac %}

{% windows %}

1. [Crie um repositório ](/articles/creating-a-new-repository) no {% data variables.product.product_location %}. Para evitar erros, não inicialize o novo repositório com os arquivos *README*, de licença ou `gitignore`. É possível adicionar esses arquivos após push do projeto no {% data variables.product.product_name %}. ![Menu suspenso Create New Repository (Criar novo repositório)](/assets/images/help/repository/repo-create.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Altere o diretório de trabalho atual referente ao seu projeto local.
4. Inicialize o diretório local como um repositório Git.
  ```shell
  $ git init -b main
  ```
5. Adicione os arquivos ao novo repositório local. Isso faz stage deles para o primeiro commit.
  ```shell
  $ git add .
  # Adiciona os arquivos no repositório local e faz stage deles para commit. {% data reusables.git.unstage-codeblock %}
  ```
6. Faça commit dos arquivos com stage em seu repositório local.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. No topo da página Quick Setup (Configuração rápida) do repositório do {% data variables.product.product_name %}, clique em {% octicon "clippy" aria-label="The copy to clipboard icon" %} para copiar a URL do repositório remote. ![Campo Copy remote repository URL (Copiar URL do repositório remote)](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. No prompt de comando, [adicione a URL para o repositório remote](/github/getting-started-with-github/managing-remote-repositories) onde será feito push do seu repositório local.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Push the changes](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) (Faça push das alterações</0> no seu repositório local para o {% data variables.product.product_location %}.
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endwindows %}

{% linux %}

1. [Crie um repositório ](/articles/creating-a-new-repository) no {% data variables.product.product_location %}. Para evitar erros, não inicialize o novo repositório com os arquivos *README*, de licença ou `gitignore`. É possível adicionar esses arquivos após push do projeto no {% data variables.product.product_name %}. ![Menu suspenso Create New Repository (Criar novo repositório)](/assets/images/help/repository/repo-create.png)
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Altere o diretório de trabalho atual referente ao seu projeto local.
4. Inicialize o diretório local como um repositório Git.
  ```shell
  $ git init -b main
  ```
5. Adicione os arquivos ao novo repositório local. Isso faz stage deles para o primeiro commit.
  ```shell
  $ git add .
  # Adiciona os arquivos no repositório local e faz stage deles para commit. {% data reusables.git.unstage-codeblock %}
  ```
6. Faça commit dos arquivos com stage em seu repositório local.
  ```shell
  $ git commit -m "First commit"
  # Commits the tracked changes and prepares them to be pushed to a remote repository. {% data reusables.git.reset-head-to-previous-commit-codeblock %}
  ```
7. No topo da página Quick Setup (Configuração rápida) do repositório do {% data variables.product.product_name %}, clique em {% octicon "clippy" aria-label="The copy to clipboard icon" %} para copiar a URL do repositório remote. ![Campo Copy remote repository URL (Copiar URL do repositório remote)](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
8. No Terminal, [adicione a URL para o repositório remote](/github/getting-started-with-github/managing-remote-repositories) onde será feito push do seu repositório local.
  ```shell
  $ git remote add origin <em> &lt;REMOTE_URL> </em>
  # Sets the new remote
  $ git remote -v
  # Verifies the new remote URL
  ```
9. [Push the changes](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/) (Faça push das alterações</0> no seu repositório local para o {% data variables.product.product_location %}.
  ```shell
  $ git push origin main
  # Pushes the changes in your local repository up to the remote repository you specified as the origin
  ```

{% endlinux %}

## Leia mais

- "[Adicionar um arquivo a um repositório](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line)"
