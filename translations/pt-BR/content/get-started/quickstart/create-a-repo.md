---
title: Criar um repositório
redirect_from:
  - /create-a-repo/
  - /articles/create-a-repo
  - /github/getting-started-with-github/create-a-repo
  - /github/getting-started-with-github/quickstart/create-a-repo
intro: 'Para colocar seu projeto no {% data variables.product.prodname_dotcom %}, você precisará criar um repositório no qual ele residirá.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---

## Criar um repositório

{% ifversion fpt or ghec %}

Você pode armazenar vários projetos nos repositórios do {% data variables.product.prodname_dotcom %}, incluindo projetos de código aberto. Com os [projetos de código aberto](http://opensource.org/about), é possível compartilhar código para criar softwares melhores e mais confiáveis. Você pode usar repositórios para colaborar com outras pessoas e acompanhar seu trabalho. Para obter mais informações, consulte "[Sobre repositórios](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)".

{% elsif ghes or ghae %}

Você pode armazenar uma série de projetos em repositórios de {% data variables.product.product_name %}, incluindo projetos de innersource. Com o innersource, você pode compartilhar código para criar um software melhor e mais confiável. Para obter mais informações sobre innersource, consulte o white paper de {% data variables.product.company_short %}"[Uma introdução ao innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)".

{% endif %}

{% ifversion fpt or ghec %}

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

1. Na linha de comando, acesse o diretório onde você gostaria de criar um clone local do seu novo projeto.
2. Para criar um repositório para o seu projeto, use o subcomando `gh repo create`. Substitua `project-name` pelo nome desejado para o repositório. Se você quiser que o seu projeto pertença a uma organização em vez de sua conta de usuário, especifique o nome da organização e o nome do projeto com `organization-name/project-name`.

   ```shell
   gh repo create <em>project-name</em>
   ```

3. Siga as instruções interativas. Para clonar o repositório localmente, marque sim quando perguntarem se você deseja clonar o diretório do projeto remoto. Como alternativa, você pode especificar argumentos para pular essas instruções. Para obter mais informações sobre possíveis argumentos, consulte [o manual de {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_repo_create).

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

Agora que você criou um projeto, você pode começar a fazer commit das alterações.

Os arquivos *README* são um excelente local para descrever seu projeto mais detalhadamente ou para adicionar alguma documentação, por exemplo, como instalar ou usar seu projeto. O conteúdo do arquivo *README* é mostrado automaticamente na primeira página do repositório. Siga estas etapas para adicionar um arquivo *README*.

1. Na linha de comando, acesse o diretório raiz do seu novo projeto. (Este diretório foi criado quando você executou o repositório `gh repo create`.)
1. Crie um arquivo *README* com algumas informações sobre o projeto.

    ```shell
    echo "info about this project" >> README.md
    ```

1. Insira `git status`. Você verá que você tem um arquivo `README.md` não rastreado.

    ```shell
    $ git status

    Untracked files:
      (use "git add <file>..." to include in what will be committed)
      README.md

    nothing added to commit but untracked files present (use "git add" to track)
    ```

1. Stage e commit do arquivo.

    ```shell
    git add README.md && git commit -m "Add README"
    ```

1. Faça push das alterações para seu branch.

    ```shell
    git push --set-upstream origin HEAD
    ```

{% endcli %}

## Comemore

Parabéns! Você criou um repositório, incluindo um arquivo *README*, assim como seu primeiro commit no {% data variables.product.product_location %}.

{% webui %}

Agora você pode clonar um repositório de {% data variables.product.prodname_dotcom %} para criar uma cópia local no seu computador. A partir do seu repositório local, você pode fazer commit e criar um pull request para atualizar as alterações no repositório upstream. Para obter mais informações, consulte "[Clonando um repositório](/github/creating-cloning-and-archiving-repositories/cloning-a-repository)" e "[Configurar o Git](/articles/set-up-git)".

{% endwebui %}

Você pode encontrar projetos e repositórios interessantes em {% data variables.product.prodname_dotcom %} e fazer alterações neles criando uma bifurcação no repositório. Para obter mais informações, "[Bifurcar um repositório](/articles/fork-a-repo)".

Cada repositório em {% data variables.product.prodname_dotcom %} pertence a uma pessoa ou organização. Você pode interagir com as pessoas, repositórios e organizações, conectando-se e seguindo-as em {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Seja social](/articles/be-social)".

{% data reusables.support.connect-in-the-forum-bootcamp %}
