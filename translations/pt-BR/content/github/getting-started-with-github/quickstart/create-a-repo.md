---
title: Criar um repositório
redirect_from:
  - /create-a-repo/
  - /articles/create-a-repo
  - /github/getting-started-with-github/create-a-repo
intro: 'Para colocar seu projeto no {% data variables.product.product_location %}, você precisará criar um repositório no qual ele residirá.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---
### Criar um repositório

{% if currentVersion == "free-pro-team@latest" %}

Você pode armazenar vários projetos nos repositórios do {% data variables.product.product_name %}, incluindo projetos de código aberto. Com os [projetos de código aberto](http://opensource.org/about), é possível compartilhar código para criar softwares melhores e mais confiáveis.

{% elsif enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

Você pode armazenar uma série de projetos em repositórios de {% data variables.product.product_name %}, incluindo projetos de innersource. Com o innersource, você pode compartilhar código para criar um software melhor e mais confiável. Para obter mais informações sobre innersource, consulte o white paper de {% data variables.product.company_short %}"[Uma introdução ao innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)".

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**Observação:** você pode criar repositórios públicos para um projeto de código aberto. Ao criar um repositório público, certifique-se de incluir um [arquivo de licença](https://choosealicense.com/) que determina como deseja que seu projeto seja compartilhado com outras pessoas. {% data reusables.open-source.open-source-guide-repositories %} {% data reusables.open-source.open-source-learning-lab %}

{% endnote %}

{% endif %}

{% data reusables.repositories.create_new %}
2. Digite um nome curto e fácil de memorizar para seu repositório. Por exemplo, "olá mundo". ![Campo para inserir um nome de repositório](/assets/images/help/repository/create-repository-name.png)
3. Se desejar, adicione uma descrição do repositório. Por exemplo, "Meu primeiro repositório no
{% data variables.product.product_name %}."
  ![Campo para inserir uma descrição do repositório](/assets/images/help/repository/create-repository-desc.png)
{% data reusables.repositories.choose-repo-visibility %}
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}

Parabéns! Você criou com êxito seu primeiro repositório e o inicializou com um arquivo *README*.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% tip %}

**Dica**: Você também pode criar repositórios usando {% data variables.product.prodname_cli %}. Para obter mais informações, consulte "[`criar repositório gh`](https://cli.github.com/manual/gh_repo_create)" na documentação do {% data variables.product.prodname_cli %}.

{% endtip %}
{% endif %}

### Fazer commit da primeira alteração

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

### Comemore

Parabéns! Você criou um repositório, incluindo um arquivo *README*, assim como seu primeiro commit no {% data variables.product.product_location %}. O que quer fazer agora?

- "[Configurar o Git](/articles/set-up-git)"
- **Criar um repositório**
- "[Bifurcar um repositório](/articles/fork-a-repo)"
- "[Socializar](/articles/be-social)"
- {% data reusables.support.connect-in-the-forum-bootcamp %}
