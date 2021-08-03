---
title: Criar um repositório a partir de um modelo
intro: Você pode gerar um novo repositório com os mesmos arquivos e estrutura de diretório de um repositório que já existe.
redirect_from:
  - /articles/creating-a-repository-from-a-template
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
### Sobre modelos de repositório

Qualquer pessoa com permissões de leitura em um repositório de modelos pode criar um repositório a partir desse modelo. Para obter mais informações, consulte "[Criar um repositório de modelos](/articles/creating-a-template-repository)".

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Dica**: Você também pode criar um repositório a partir de um modelo usando o {% data variables.product.prodname_cli %}. Para obter mais informações, consulte "[`criar repositório gh`](https://cli.github.com/manual/gh_repo_create)" na documentação do {% data variables.product.prodname_cli %}.

{% endtip %}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
Você pode optar por incluir a estrutura do diretório e os arquivos apenas a partir do branch-padrão do repositório de modelos ou incluir todos os branches. Branches created from a template have unrelated histories, which means you cannot create pull requests or merge between the branches.
{% endif %}

Criar um repositório a partir de um modelo é semelhante a bifurcar um repositório, mas há diferenças importantes:
- Uma nova bifurcação inclui o histórico de commits inteiro do repositório principal, enquanto um repositório criado de um modelo começa com um único commit.
- Os commits em uma bifurcação não aparecem no gráfico de contribuições, enquanto os commits em um repositório criado de um modelo aparecem no gráfico de contribuição.
- Uma bifurcação pode ser uma maneira temporária de contribuir com código em um projeto existente, enquanto criar um repositório de um modelo inicia um novo projeto rapidamente.

Para obter mais informações sobre bifurcações, consulte "[Sobre bifurcações](/articles/about-forks)".

### Criar um repositório a partir de um modelo

{% data reusables.repositories.navigate-to-repo %}
2. Acima da lista de arquivos, clique em **Use this template** (Usar este modelo). ![Botão Use this template (Usar este modelo)](/assets/images/help/repository/use-this-template-button.png)
{% data reusables.repositories.owner-drop-down %}
{% data reusables.repositories.repo-name %}
{% data reusables.repositories.choose-repo-visibility %}{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.20" %}
6. Opcionalmente, para incluir a estrutura de diretório e arquivos de todos os branches no modelo, e não apenas o branch-padrão, selecione **Incluir todos os branches**. ![Include all branches checkbox](/assets/images/help/repository/include-all-branches.png){% endif %}
{% data reusables.repositories.select-marketplace-apps %}
8. Clique em **Create repository from template** (Criar repositório a partir do modelo).
