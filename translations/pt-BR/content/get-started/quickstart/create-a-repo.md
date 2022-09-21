---
title: Criar um repositório
redirect_from:
  - /create-a-repo
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
ms.openlocfilehash: 66db99def4463929236197fdc4903f82bfc1cbe2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146682289'
---
## Criar um repositório

{% ifversion fpt or ghec %}

Você pode armazenar uma variedade de projetos nos repositórios do {% data variables.product.prodname_dotcom %}, incluindo projetos de código aberto. Com os projetos de código aberto, você pode compartilhar o código para tornar um software melhor e mais confiável. Você pode usar repositórios para colaborar com outras pessoas e acompanhar seu trabalho. Para obter mais informações, confira "[Sobre os repositórios](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories)". Para saber mais sobre projetos de código aberto, visite [OpenSource.org](https://opensource.org/about).

{% elsif ghes or ghae %}

Você pode armazenar uma série de projetos em repositórios de {% data variables.product.product_name %}, incluindo projetos de innersource. Com o innersource, você pode compartilhar código para criar um software melhor e mais confiável. Para obter mais informações sobre o InnerSource, confira o white paper "[Uma introdução ao InnerSource](https://resources.github.com/whitepapers/introduction-to-innersource/)" do {% data variables.product.company_short %}.

{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Observações:** 
- você pode criar repositórios públicos para um projeto de código aberto. Ao criar seu repositório público, lembre-se de incluir um [arquivo de licença](https://choosealicense.com/) que determina como deseja que o seu projeto seja compartilhado com outras pessoas. {% data reusables.open-source.open-source-guide-repositories %} 
- {% data reusables.open-source.open-source-learning %} 
- Você também pode adicionar arquivos de integridade da comunidade aos seus repositórios para definir diretrizes sobre como contribuir, manter seus repositórios seguros e muito mais. Para obter mais informações, confira "[Como criar um arquivo padrão de integridade da comunidade](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)". 

{% endnote %}

{% endif %}

{% webui %}

{% data reusables.repositories.create_new %}
2. Digite um nome breve e memorável para o repositório. Por exemplo, "olá mundo".
  ![Campo usado para inserir um nome de repositório](/assets/images/help/repository/create-repository-name.png)
3. Opcionalmente, adicione uma descrição do repositório. Por exemplo, "Meu primeiro repositório no {% data variables.product.product_name %}".
  ![Campo usado para inserir uma descrição do repositório](/assets/images/help/repository/create-repository-desc.png) {% data reusables.repositories.choose-repo-visibility %} {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}

Parabéns! Você criou com sucesso seu primeiro repositório e o inicializou com um arquivo *LEIAME*.

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

1. Na linha de comando, acesse o diretório onde você gostaria de criar um clone local do seu novo projeto.
2. Para criar um repositório para seu projeto, use o subcomando `gh repo create`. Quando solicitado, selecione **Criar um repositório no GitHub do zero** e insira o nome do novo projeto. Caso você deseje que o seu projeto pertença a uma organização em vez da sua conta pessoal, especifique o nome da organização e o nome do projeto com `organization-name/project-name`. 
3. Siga as instruções interativas. Para clonar o repositório localmente, marque sim quando perguntarem se você deseja clonar o diretório do projeto remoto.  
4. Como alternativa, para ignorar os prompts, forneça o nome do repositório e um sinalizador de visibilidade (`--public`, `--private` ou `--internal`). Por exemplo, `gh repo create project-name --public`. Para clonar o repositório localmente, transmita o sinalizador `--clone`.  Para obter mais informações sobre os possíveis argumentos, confira o [manual da CLI do GitHub](https://cli.github.com/manual/gh_repo_create).

{% endcli %}

## Fazer commit da primeira alteração

{% webui %}

Um *[commit](/articles/github-glossary#commit)* é como um instantâneo de todos os arquivos do seu projeto em determinado momento.

Na criação do repositório, você o inicializou com um arquivo *LEIAME*. Os arquivos *LEIAME* são um ótimo lugar para descrever o projeto com mais detalhes ou adicionar alguma documentação (por exemplo, como instalar ou usar o projeto). O conteúdo do arquivo *LEIAME* é mostrado automaticamente na página inicial do repositório.

Vamos fazer commit de uma alteração no arquivo *README*.

1. Na lista de arquivos do repositório, clique em ***README.md***.
  ![Arquivo README na lista de arquivos](/assets/images/help/repository/create-commit-open-readme.png)
2. Acima do conteúdo do arquivo, clique em {% octicon "pencil" aria-label="The edit icon" %}.
3. Na guia **Editar arquivo**, digite algumas informações sobre você mesmo.
  ![Novo conteúdo no arquivo](/assets/images/help/repository/edit-readme-light.png) {% data reusables.files.preview_change %}
5. Revise as alterações feitas no arquivo. Você verá o novo conteúdo em verde.
  ![Exibição de visualização de arquivo](/assets/images/help/repository/create-commit-review.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_file_change %}

{% endwebui %}

{% cli %}

Agora que você criou um projeto, você pode começar a fazer commit das alterações.

Os arquivos *LEIAME* são um ótimo lugar para descrever o projeto com mais detalhes ou adicionar alguma documentação (por exemplo, como instalar ou usar o projeto). O conteúdo do arquivo *LEIAME* é mostrado automaticamente na página inicial do repositório. Siga estas etapas para adicionar um arquivo *README*.

1. Na linha de comando, acesse o diretório raiz do seu novo projeto. (Esse diretório foi criado quando você executou o comando `gh repo create`).
1. Crie um arquivo *README* com algumas informações sobre o projeto.

    ```shell
    echo "info about this project" >> README.md
    ```

1. Insira `git status`. Você verá que tem um arquivo `README.md` não controlado.

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

## Próximas etapas

Você acabou de criar um repositório, incluindo um arquivo *README*, e seu primeiro commit no {% data variables.product.product_location %}.

{% webui %}

* Você já pode clonar um repositório do {% data variables.product.prodname_dotcom %} para criar uma cópia local no computador. A partir do seu repositório local, você pode fazer commit e criar um pull request para atualizar as alterações no repositório upstream. Para obter mais informações, confira "[Como clonar um repositório](/github/creating-cloning-and-archiving-repositories/cloning-a-repository)" e "[Configurar o Git](/articles/set-up-git)".

{% endwebui %}

* Encontre projetos e repositórios interessantes no {% data variables.product.prodname_dotcom %} e faça alterações neles criando um fork do repositório. {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}

* {% data reusables.support.connect-in-the-forum-bootcamp %}
