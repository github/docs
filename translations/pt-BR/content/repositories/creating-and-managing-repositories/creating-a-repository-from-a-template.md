---
title: Criar um repositório a partir de um modelo
intro: Você pode gerar um novo repositório com os mesmos arquivos e estrutura de diretório de um repositório que já existe.
redirect_from:
  - /articles/creating-a-repository-from-a-template
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Criar a partir de um modelo
---

## Sobre modelos de repositório

Qualquer pessoa com permissões de leitura em um repositório de modelos pode criar um repositório a partir desse modelo. Para obter mais informações, consulte "[Criar um repositório de modelos](/articles/creating-a-template-repository)".

{% tip %}

**Dica**: Você também pode criar um repositório a partir de um modelo usando o {% data variables.product.prodname_cli %}. Para obter mais informações, consulte "[`criar repositório gh`](https://cli.github.com/manual/gh_repo_create)" na documentação do {% data variables.product.prodname_cli %}.

{% endtip %}

Você pode optar por incluir a estrutura do diretório e os arquivos apenas a partir do branch-padrão do repositório de modelos ou incluir todos os branches. Os branches criados a partir de um modelo têm histórico não relacionado, o que significa que você não pode criar pull requests ou fazer merge entre os branches.

Criar um repositório a partir de um modelo é semelhante a bifurcar um repositório, mas há diferenças importantes:
- Uma nova bifurcação inclui o histórico de commits inteiro do repositório principal, enquanto um repositório criado de um modelo começa com um único commit.
- Os commits em uma bifurcação não aparecem no gráfico de contribuições, enquanto os commits em um repositório criado de um modelo aparecem no gráfico de contribuição.
- Uma bifurcação pode ser uma maneira temporária de contribuir com código em um projeto existente, enquanto criar um repositório de um modelo inicia um novo projeto rapidamente.

Para obter mais informações sobre bifurcações, consulte "[Sobre bifurcações](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)".

## Criar um repositório a partir de um modelo

{% data reusables.repositories.navigate-to-repo %}
2. Acima da lista de arquivos, clique em **Use this template** (Usar este modelo). ![Botão Use this template (Usar este modelo)](/assets/images/help/repository/use-this-template-button.png)
{% data reusables.repositories.owner-drop-down %}
{% data reusables.repositories.repo-name %}
{% data reusables.repositories.choose-repo-visibility %}
6. Opcionalmente, para incluir a estrutura de diretório e arquivos de todos os branches no modelo, e não apenas o branch-padrão, selecione **Incluir todos os branches**. ![Incluir caixa de seleção de branches](/assets/images/help/repository/include-all-branches.png)
{% data reusables.repositories.select-marketplace-apps %}
8. Clique em **Create repository from template** (Criar repositório a partir do modelo).
