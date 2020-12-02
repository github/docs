---
title: Managing labels
intro: 'You can classify issues and pull requests by creating, editing, applying, and deleting labels.'
redirect_from:
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
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Sobre etiquetas

Você pode gerenciar seu trabalho no {% data variables.product.product_name %} criando etiquetas para classificar problemas e pull requests. You can apply labels in the repository the label was created in. Once a label exists, you can use the label on any issue or pull request within that repository.

Qualquer pessoa com acesso de leitura a um repositório pode exibir e pesquisar etiquetas do repositório. Para criar, editar, aplicar ou excluir uma etiqueta, é preciso ter acesso de gravação ao repositório.

### About default labels

O {% data variables.product.product_name %} fornece etiquetas padrão para todos os repositórios novos. Você pode usar essas etiquetas padrão para ajudar com a criação de um fluxo de trabalho padronizado em um repositório.

| Etiqueta           | Descrição                                                                                                                                                 |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bug`              | Indicates an unexpected problem or unintended behavior{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}
| `documentation`    | Indica a necessidade de aprimoramentos ou adições à documentação{% endif %}
| `duplicate`        | Indica problemas ou pull requests semelhantes                                                                                                             |
| `enhancement`      | Indica novas solicitações de recurso                                                                                                                      |
| `good first issue` | Indica um bom problema para contribuidores principiantes                                                                                                  |
| `help wanted`      | Indica que um mantenedor deseja ajudar em um problema ou uma pull request                                                                                 |
| `invalid`          | Indica que um problema ou uma pull request não é mais relevante                                                                                           |
| `question`         | Indica que um problema ou uma pull request precisa de mais informações                                                                                    |
| `wontfix`          | Indica que o trabalho não continuará em um problema ou uma pull request                                                                                   |

Etiquetas padrão são incluídas em todos os novos repositórios quando criados, mas você pode editar ou excluir as etiquetas posteriormente.

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

### Aplicar etiquetas a problemas e pull requests


{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.repositories.select-items-in-issue-or-pr-list %}
4. No canto superior direito, clique em **Label** (Etiqueta) e comece a digitar o nome de uma etiqueta existente. Clique no nome da etiqueta para associá-la aos itens selecionados. ![Menu suspenso atribuição Marco Problemas](/assets/images/help/issues/issues_applying_labels_dropdown.png)

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
Deleting a label will remove the label from issues and pull requests.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
{% data reusables.project-management.delete-label %}

### Leia mais
- "[Sobre etiquetas](/articles/about-labels)"
- "[Filtering issues and pull requests by labels](/articles/filtering-issues-and-pull-requests-by-labels)"{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
- "[Managing default labels for repositories in your organization](/articles/managing-default-labels-for-repositories-in-your-organization)"{% endif %}{% if currentVersion == "free-pro-team@latest" %}
- "[Encouraging helpful contributions to your project with labels](/github/building-a-strong-community/encouraging-helpful-contributions-to-your-project-with-labels)"{% endif %}
