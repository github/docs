---
title: Criar um repositório de modelos
intro: 'Você pode converter um repositório existente em um modelo, para que você e outras pessoas possam gerar novos repositórios com a mesma estrutura de diretório{% ifversion fpt or ghae or ghes %}, branches,{% endif %} e arquivos.'
permissions: Anyone with admin permissions to a repository can make the repository a template.
redirect_from:
  - /articles/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-template-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Repositories
shortTitle: Criar um repositório de modelo
---

{% note %}

**Observação**: Seu repositório de modelo não pode incluir arquivos armazenados usando {% data variables.large_files.product_name_short %}.

{% endnote %}

Para criar um repositório de modelos, é preciso criar um repositório e, em seguida, torná-lo um modelo. Para obter mais informações sobre como criar um repositório, consulte "[Criar um repositório](/articles/creating-a-new-repository)".

Depois de fazer o seu repositório um modelo, qualquer pessoa com acesso ao repositório poderá gerar um novo repositório com a mesma estrutura de diretório e arquivos do branch padrão.{% ifversion fpt or ghae or ghes %} Eles também podem optar por incluir todos os outros branches no seu repositório. Os branches criados a partir de um modelo têm histórico não relacionado. Portanto, você não pode criar pull requests ou fazer merge entre os branches.{% endif %} Para obter mais informações, consulte "[Criar um repositório a partir de um modelo](/articles/creating-a-repository-from-a-template)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Selecione **Template repository** (Repositório de modelos). ![Caixa de seleção para transformar um repositório em modelo](/assets/images/help/repository/template-repository-checkbox.png)
