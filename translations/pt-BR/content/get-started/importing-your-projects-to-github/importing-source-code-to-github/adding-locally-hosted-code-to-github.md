---
title: Adicionando o código localmente hospedado no GitHub
intro: 'Aprenda a adicionar código-fonte ou repositórios existentes em {% data variables.product.product_name %} pela linha de comando usando {% data variables.product.prodname_cli %} ou Comandos do Git. Em seguida, compartilhe seu código e convide outras pessoas a trabalhar com você.'
redirect_from:
  - /articles/add-an-existing-project-to-github
  - /articles/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/adding-an-existing-project-to-github-using-the-command-line
  - /github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line
  - /get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Adicionar código hospedado localmente
---

## Sobre a adição do código-fonte existente para {% data variables.product.product_name %}

Se você tiver código-fonte ou repositórios armazenados localmente no computador ou em uma rede privada, você poderá adicioná-los a {% data variables.product.product_name %}, digitando comandos em um terminal. Você pode fazer isso digitando comandos do Git diretamente ou usando {% data variables.product.prodname_cli %}.

{% data variables.product.prodname_cli %} é uma ferramenta de código aberto para usar {% data variables.product.prodname_dotcom %} a partir da linha de comando do seu computador. {% data variables.product.prodname_cli %} pode simplificar o processo de adicionar um projeto existente a {% data variables.product.product_name %} usando a linha de comando. Para saber mais sobre {% data variables.product.prodname_cli %}, consulte "[Sobre {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)."

{% tip %}

**Dica:** se estiver mais familiarizado com uma interface de usuário de apontar e clicar, tente adicionar seu projeto com o {% data variables.product.prodname_desktop %}. Para obter mais informações, consulte "[Adicionar um repositório do seu computador local ao GitHub Desktop](/desktop/guides/contributing-to-projects/adding-a-repository-from-your-local-computer-to-github-desktop)" na Ajuda do *{% data variables.product.prodname_desktop %}*.

{% endtip %}

{% data reusables.repositories.sensitive-info-warning %}

## Adicionando um repositório local para {% data variables.product.product_name %} com {% data variables.product.prodname_cli %}

1. Na linha de comando, acesse o diretório raiz do seu projeto.
1. Inicialize o diretório local como um repositório Git.

    ```shell
    git init -b main
    ```

1. Faça o teste e commit de todos os arquivos do seu projeto

   ```shell
   git add . && git commit -m "initial commit"
   ```

1. Para criar um repositório para o seu projeto no GitHub, use o subcomando `gh repo create`. Quando solicitado, selecione **Fazer push de um repositório local existente para o GitHub** e digite o nome desejado para o repositório. Se você quiser que o seu projeto pertença a uma organização em vez de sua conta de usuário, especifique o nome da organização e o nome do projeto com `organization-name/project-name`.

1. Siga as instruções interativas. Para adicionar o controle remoto e fazer push do repositório, confirme sim quando solicitado para adicionar o controle remoto e enviar os commits para o branch atual.

1. Como alternativa, para pular todas as instruções, fornecer o caminho do repositório com o sinalizador `--source` e passar um sinalizador de visibilidade (`--public`, `--privado` ou `--interno`). Por exemplo, `gh repo create --source=. --public`. Especifique um controle remoto com o o sinalizador `--remote`. Para fazer push dos seus commits, passe o sinalizador `--push`. Para obter mais informações sobre possíveis argumentos, consulte o [manual da CLI do GitHub](https://cli.github.com/manual/gh_repo_create).

## Adicionando um repositório local para {% data variables.product.product_name %} usando o Git

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
7. Na parte superior do seu repositório na página de Configuração Rápida de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, clique em {% octicon "clippy" aria-label="The copy to clipboard icon" %} para copiar a URL do repositório remoto. ![Campo Copy remote repository URL (Copiar URL do repositório remote)](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
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
7. Na parte superior do seu repositório na página de Configuração Rápida de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, clique em {% octicon "clippy" aria-label="The copy to clipboard icon" %} para copiar a URL do repositório remoto. ![Campo Copy remote repository URL (Copiar URL do repositório remote)](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
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
7. Na parte superior do seu repositório na página de Configuração Rápida de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, clique em {% octicon "clippy" aria-label="The copy to clipboard icon" %} para copiar a URL do repositório remoto. ![Campo Copy remote repository URL (Copiar URL do repositório remote)](/assets/images/help/repository/copy-remote-repository-url-quick-setup.png)
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
