---
title: Criar um repositório de modelos
intro: 'Você pode fazer um repositório existente um modelo, assim você e outros podem gerar novos repositórios com a mesma estrutura de diretório{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2. 0" %}, branches,{% endif %} e arquivos.'
permissions: Anyone with admin permissions to a repository can make the repository a template.
redirect_from:
  - /articles/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-template-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
{% note %}

**Observação**: Seu repositório de modelo não pode incluir arquivos armazenados usando {% data variables.large_files.product_name_short %}.

{% endnote %}

Para criar um repositório de modelos, é preciso criar um repositório e, em seguida, torná-lo um modelo. Para obter mais informações sobre como criar um repositório, consulte "[Criar um repositório](/articles/creating-a-new-repository)".

After you make your repository a template, anyone with access to the repository can generate a new repository with the same directory structure and files as your default branch.{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %} They can also choose to include all the other branches in your repository. Branches created from a template have unrelated histories, so you cannot create pull requests or merge between the branches.{% endif %} For more information, see "[Creating a repository from a template](/articles/creating-a-repository-from-a-template)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Selecione **Template repository** (Repositório de modelos). ![Caixa de seleção para transformar um repositório em modelo](/assets/images/help/repository/template-repository-checkbox.png)
