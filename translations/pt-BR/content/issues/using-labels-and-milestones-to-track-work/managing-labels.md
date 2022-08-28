---
title: Gerenciar etiquetas
intro: 'Você pode classificar {% if currentVersion == "free-pro-team@latest" %}problemas, pull requests e discussões{% else %}problemas e pull requests{% endif %} criando, editando, aplicando e excluindo etiquetas.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/managing-labels
  - /articles/managing-Labels
  - /articles/labeling-issues-and-pull-requests
  - /github/managing-your-work-on-github/labeling-issues-and-pull-requests
  - /articles/about-labels
  - /github/managing-your-work-on-github/about-labels
  - /articles/creating-and-editing-labels-for-issues-and-pull-requests
  - /articles/creating-a-label
  - /github/managing-your-work-on-github/creating-a-label
  - /articles/customizing-issue-labels/
  - /articles/applying-labels-to-issues-and-pull-requests
  - /github/managing-your-work-on-github/applying-labels-to-issues-and-pull-requests
  - /articles/editing-a-label
  - /github/managing-your-work-on-github/editing-a-label
  - /articles/deleting-a-label
  - /github/managing-your-work-on-github/deleting-a-label
  - /github/managing-your-work-on-github/managing-labels
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
  ### Sobre etiquetas

Você pode gerenciar seu trabalho em {% data variables.product.product_name %} criando etiquetas para classificar {% if currentVersion == "free-pro-team@latest" %}problemas, pull requests e discussões{% else %}problemas e pull requests{% endif %}. Você pode aplicar etiquetas no repositório em que foram criadas. Uma vez criada uma etiqueta, você poderá usá-la em qualquer {% if currentVersion == "free-pro-team@latest" %}problema, pull request ou discussão{% else %}problema ou pull request{% endif %} dentro desse repositório.

Qualquer pessoa com acesso de leitura a um repositório pode exibir e pesquisar etiquetas do repositório. Qualquer pessoa com acesso de triagem a um repositório pode aplicar/ignorar etiquetas existentes. Para criar, editar, aplicar ou excluir uma etiqueta, é preciso ter acesso de gravação ao repositório.

### Sobre as etiquetas padrão

O {% data variables.product.product_name %} fornece etiquetas padrão para todos os repositórios novos. Você pode usar essas etiquetas padrão para ajudar com a criação de um fluxo de trabalho padronizado em um repositório.

| Etiqueta           | Descrição                                                                                                                                                                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bug`              | Indica um problema inesperado ou um comportamento não intencional{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}
| `documentation`    | Indica a necessidade de aprimoramentos ou adições à documentação{% endif %}
| `duplicate`        | Indica {% if currentVersion == "free-pro-team@latest" %}problemas, pull requests ou discussões{% else %}problemas ou pull requests{% endif %}
| `enhancement`      | Indica novas solicitações de recurso                                                                                                                                         |
| `good first issue` | Indica um bom problema para contribuidores principiantes                                                                                                                     |
| `help wanted`      | Indica que um mantenedor deseja ajudar em um problema ou uma pull request                                                                                                    |
| `invalid`          | Indica que um {% if currentVersion == "free-pro-team@latest" %}problema, pull request ou discussão{% else %}problema ou pull request{% endif %} já não é relevante           |
| `question`         | Indica que um {% if currentVersion == "free-pro-team@latest" %}problema, pull request ou discussão{% else %}problema ou pull request{% endif %} precisa de mais informações  |
| `wontfix`          | Indica que o trabalho não continuará em um {% if currentVersion == "free-pro-team@latest" %}problema, pull request ou discussão{% else %}problema ou pull request{% endif %}

Etiquetas padrão são incluídas em todos os novos repositórios quando criados, mas você pode editar ou excluir as etiquetas posteriormente.

Problemas com a etiqueta `good first issue` são usados para preencher a página de `contribute` do repositório. Para obter um exemplo da página de `contribuir`, consulte [github/docs/contribua](https://github.com/github/docs/contribute).

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
Os proprietários da organização podem personalizar as etiquetas padrão para repositórios na organização. Para obter mais informações, consulte "[Gerenciar etiquetas padrão nos repositórios da organização](/articles/managing-default-labels-for-repositories-in-your-organization)".
{% endif %}

### Criar uma etiqueta

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
4. À direita do campo de pesquisa, clique em **New label** (Nova etiqueta).
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.create-label %}

### Aplicando uma etiqueta

1. Acesse {% if currentVersion == "free-pro-team@latest" %}problema, pull request ou discussão{% else %}problema ou pull request{% endif %}.
1. Na barra lateral direita, à direita de "Etiquetas", clique em {% octicon "gear" aria-label="The gear icon" %} e, em seguida, clique em uma etiqueta. ![Menu suspenso "Etiquetas"](/assets/images/help/issues/labels-drop-down.png)

### Editar uma etiqueta

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.edit-label %}
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.save-label %}

### Excluir uma etiqueta

Excluir uma etiqueta removerá a etiqueta dos problemas e pull requests.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.delete-label %}

### Leia mais
- "[Filtrar problemas e pull requests por etiquetas](/articles/filtering-issues-and-pull-requests-by-labels)"{% if currentVersion == "free-pro-team@latest" ou enterpriseServerVersions contém currentVersion %}
- "[Gerenciar etiquetas padrão para repositórios na organização](/articles/managing-default-labels-for-repositories-in-your-organization)"{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- "[Incentivar contribuições úteis para o seu projeto com etiquetas](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels)"{% endif %}
