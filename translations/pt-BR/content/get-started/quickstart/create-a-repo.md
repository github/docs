---
title: Criar um repositório
redirect_from:
  - /create-a-repo/
  - /articles/create-a-repo
  - /github/getting-started-with-github/create-a-repo
  - /github/getting-started-with-github/quickstart/create-a-repo
intro: 'Para colocar seu projeto no {% data variables.product.product_location %}, você precisará criar um repositório no qual ele residirá.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---

## Criar um repositório

{% ifversion fpt %}

Você pode armazenar vários projetos nos repositórios do {% data variables.product.product_name %}, incluindo projetos de código aberto. Com os [projetos de código aberto](http://opensource.org/about), é possível compartilhar código para criar softwares melhores e mais confiáveis. Você pode usar repositórios para colaborar com outras pessoas e acompanhar seu trabalho. Para obter mais informações, consulte "[Sobre repositórios](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)".

{% elsif ghes or ghae %}

Você pode armazenar uma série de projetos em repositórios de {% data variables.product.product_name %}, incluindo projetos de innersource. Com o innersource, você pode compartilhar código para criar um software melhor e mais confiável. Para obter mais informações sobre innersource, consulte o white paper de {% data variables.product.company_short %}"[Uma introdução ao innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)".

{% endif %}

{% ifversion fpt %}

{% note %}

**Observação:** você pode criar repositórios públicos para um projeto de código aberto. Ao criar um repositório público, certifique-se de incluir um [arquivo de licença](https://choosealicense.com/) que determina como deseja que seu projeto seja compartilhado com outras pessoas. {% data reusables.open-source.open-source-guide-repositories %} {% data reusables.open-source.open-source-learning-lab %}

{% endnote %}

{% endif %}

{% include tool-switcher %}

{% webui %}

{% data reusables.repositories.create_new %}
2. Digite um nome curto e fácil de memorizar para seu repositório. Por exemplo, "olá mundo". ![Campo para inserir um nome de repositório](/assets/images/help/repository/create-repository-name.png)
3. Se desejar, adicione uma descrição do repositório. Por exemplo, "Meu primeiro repositório no {% data variables.product.product_name %}". ![Campo para inserir uma descrição do repositório](/assets/images/help/repository/create-repository-desc.png)
{% data reusables.repositories.choose-repo-visibility %}
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}

Parabéns! Você criou com êxito seu primeiro repositório e o inicializou com um arquivo *README*.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. In the command line, navigate to the directory where you would like to create a local clone of your new project.
2. To create a repository for your project, use the `gh repo create` subcommand. Replace `project-name` with the desired name for your repository. If you want your project to belong to an organization instead of to your user account, specify the organization name and project name with `organization-name/project-name`.

   ```shell
   gh repo create <em>project-name</em>
   ```

3. Follow the interactive prompts. To clone the repository locally, confirm yes when asked if you would like to clone the remote project directory. Alternatively, you can specify arguments to skip these prompts. For more information about possible arguments, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_repo_create).

{% endcli %}

## Fazer commit da primeira alteração

{% include tool-switcher %}

{% webui %}

Um *[commit](/articles/github-glossary#commit)* é como um instantâneo de todos os arquivos no seu projeto em um determinado momento.

Na criação do repositório, você o inicializou com um arquivo *README*. Os arquivos *README* são um excelente local para descrever seu projeto mais detalhadamente ou para adicionar alguma documentação, por exemplo, como instalar ou usar seu projeto. O conteúdo do arquivo *README* é mostrado automaticamente na primeira página do repositório.

Vamos fazer commit de uma alteração no arquivo *README*.

1. Na lista de arquivos do repositório, clique em ***README.m***. ![Arquivo README na lista de arquivos](/assets/images/help/repository/create-commit-open-readme.png)
2. Acima do conteúdo do arquivo, clique em {% octicon "pencil" aria-label="The edit icon" %}.
3. Na guia **Edit file** (Editar arquivo), digite algumas informações sobre si mesmo. ![Novo conteúdo no arquivo](/assets/images/help/repository/edit-readme-light.png)
{% data reusables.files.preview_change %}
5. Revise as alterações feitas no arquivo. Você verá o novo conteúdo em verde. ![Visualização de arquivo](/assets/images/help/repository/create-commit-review.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

{% endwebui %}

{% cli %}

Now that you have created a project, you can start committing changes.

Os arquivos *README* são um excelente local para descrever seu projeto mais detalhadamente ou para adicionar alguma documentação, por exemplo, como instalar ou usar seu projeto. O conteúdo do arquivo *README* é mostrado automaticamente na primeira página do repositório. Follow these steps to add a *README* file.

1. In the command line, navigate to the root directory of your new project. (This directory was created when you ran the `gh repo create` command.)
1. Create a *README* file with some information about the project.

    ```shell
    echo "info about this project" >> README.md
    ```

1. Enter `git status`. You will see that you have an untracked `README.md` file.

    ```shell
    $ git status

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
      README.md

    nothing added to commit but untracked files present (use "git add" to track)
    ```

1. Stage and commit the file.

    ```shell
    git add README.md && git commit -m "Add README"
    ```

1. Push the changes to your branch.

    ```shell
    git push --set-upstream origin HEAD
    ```

{% endcli %}

## Comemore

Parabéns! Você criou um repositório, incluindo um arquivo *README*, assim como seu primeiro commit no {% data variables.product.product_location %}.

{% webui %}

Agora você pode clonar um repositório de {% data variables.product.product_name %} para criar uma cópia local no seu computador. A partir do seu repositório local, você pode fazer commit e criar um pull request para atualizar as alterações no repositório upstream. Para obter mais informações, consulte "[Clonando um repositório](/github/creating-cloning-and-archiving-repositories/cloning-a-repository)" e "[Configurar o Git](/articles/set-up-git)".

{% endwebui %}

Você pode encontrar projetos e repositórios interessantes em {% data variables.product.product_name %} e fazer alterações neles criando uma bifurcação no repositório. Para obter mais informações, "[Bifurcar um repositório](/articles/fork-a-repo)".

Cada repositório em {% data variables.product.product_name %} pertence a uma pessoa ou organização. Você pode interagir com as pessoas, repositórios e organizações, conectando-se e seguindo-as em {% data variables.product.product_name %}. Para obter mais informações, consulte "[Seja social](/articles/be-social)".

{% data reusables.support.connect-in-the-forum-bootcamp %}
