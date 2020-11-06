---
title: Criar um quadro de projeto
intro: 'Os quadros de projeto podem ser usados para criar fluxos de trabalho personalizados adequados às suas necessidades, como rastreamento e priorização de trabalho de recursos específicos, roteiros abrangentes ou, até mesmo, checklists de versão.'
redirect_from:
  - /articles/creating-a-project/
  - /articles/creating-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.project-management.use-automated-template %}

{% data reusables.project-management.copy-project-boards %}

{% data reusables.project-management.link-repos-to-project-board %} Para obter mais informações, consulte "[Vincular um repositório a um quadro de projeto](/articles/linking-a-repository-to-a-project-board)."

Após a criação do quadro de projeto, você poderá adicionar a ele problemas, pull requests e observações. Para obter mais informações, consulte "[Adicionar problemas e pull requests a um quadro de projeto](/articles/adding-issues-and-pull-requests-to-a-project-board)" e "[Adicionar observações a um quadro de projeto](/articles/adding-notes-to-a-project-board)".

Também é possível configurar automações de fluxo de trabalho para manter seu quadro de projeto em sincronia com o status de problemas e pull requests. Para obter mais informações, consulte "[Sobre a automação para quadros de projeto](/articles/about-automation-for-project-boards)".

{% data reusables.project-management.project-board-import-with-api %}

### Criar um quadro de projeto de propriedade do usuário

{% data reusables.profile.access_profile %}
2. Na parte superior da sua página de perfil, na navegação principal, clique em
{% octicon "project" aria-label="The project board icon" %} **Projetos**.
![Aba Project (Projeto)](/assets/images/help/projects/user-projects-tab.png)
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.linked-repositories %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

### Criar um quadro de projeto em toda a organização

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.organization-wide-project %}
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.linked-repositories %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

### Criar um quadro de projeto de repositório

{% data reusables.repositories.navigate-to-repo %}
2. Abaixo do nome do seu repositório, clique em
{% octicon "project" aria-label="The project board icon" %} **Projetos**.
![Aba Project (Projeto)](/assets/images/help/projects/repo-tabs-projects.png)
{% data reusables.project-management.click-new-project %}
{% data reusables.project-management.create-project-name-description %}
{% data reusables.project-management.choose-template %}
{% data reusables.project-management.create-project-button %}
{% data reusables.project-management.add-column-new-project %}
{% data reusables.project-management.name-project-board-column %}
{% data reusables.project-management.select-column-preset %}
{% data reusables.project-management.select-automation-options-new-column %}
{% data reusables.project-management.click-create-column %}
{% data reusables.project-management.add-more-columns %}

{% data reusables.project-management.edit-project-columns %}

### Leia mais

- "[Sobre quadros de projetos](/articles/about-project-boards)"
- "[Editar um quadro de projeto](/articles/editing-a-project-board)"{% if currentVersion == "free-pro-team@latest" %}
- "[Copiar um quadro de projeto](/articles/copying-a-project-board)"{% endif %}
- "[Fechar um quadro de projeto](/articles/closing-a-project-board)"
- "[Sobre a automação para quadros de projeto](/articles/about-automation-for-project-boards)"
