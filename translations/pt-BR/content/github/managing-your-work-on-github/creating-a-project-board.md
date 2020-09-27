---
title: Criar um quadro de projeto
intro: 'Os quadros de projeto podem ser usados para criar fluxos de trabalho personalizados adequados às suas necessidades, como rastreamento e priorização de trabalho de recursos específicos, roteiros abrangentes ou, até mesmo, checklists de versão.'
redirect_from:
  - /articles/creating-a-project/
  - /articles/creating-a-project-board
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{{ site.data.reusables.project-management.use-automated-template }}

{{ site.data.reusables.project-management.copy-project-boards }}

{{ site.data.reusables.project-management.link-repos-to-project-board }} Para obter mais informações, consulte "[Vincular um repositório a um quadro de projeto](/articles/linking-a-repository-to-a-project-board)."

Após a criação do quadro de projeto, você poderá adicionar a ele problemas, pull requests e observações. Para obter mais informações, consulte "[Adicionar problemas e pull requests a um quadro de projeto](/articles/adding-issues-and-pull-requests-to-a-project-board)" e "[Adicionar observações a um quadro de projeto](/articles/adding-notes-to-a-project-board)".

Também é possível configurar automações de fluxo de trabalho para manter seu quadro de projeto em sincronia com o status de problemas e pull requests. Para obter mais informações, consulte "[Sobre a automação para quadros de projeto](/articles/about-automation-for-project-boards)".

{{ site.data.reusables.project-management.project-board-import-with-api }}

### Criar um quadro de projeto de propriedade do usuário

{{ site.data.reusables.profile.access_profile }}
2. Na parte superior da sua página de perfil, na navegação principal, clique em
{% octicon "project" aria-label="The project board icon" %} **Projetos**.
![Aba Project (Projeto)](/assets/images/help/projects/user-projects-tab.png)
{{ site.data.reusables.project-management.click-new-project }}
{{ site.data.reusables.project-management.create-project-name-description }}
{{ site.data.reusables.project-management.choose-template }}
{{ site.data.reusables.project-management.linked-repositories }}
{{ site.data.reusables.project-management.create-project-button }}
{{ site.data.reusables.project-management.add-column-new-project }}
{{ site.data.reusables.project-management.name-project-board-column }}
{{ site.data.reusables.project-management.select-column-preset }}
{{ site.data.reusables.project-management.select-automation-options-new-column }}
{{ site.data.reusables.project-management.click-create-column }}
{{ site.data.reusables.project-management.add-more-columns }}

{{ site.data.reusables.project-management.edit-project-columns }}

### Criar um quadro de projeto em toda a organização

{{ site.data.reusables.profile.access_profile }}
{{ site.data.reusables.profile.access_org }}
{{ site.data.reusables.organizations.organization-wide-project }}
{{ site.data.reusables.project-management.click-new-project }}
{{ site.data.reusables.project-management.create-project-name-description }}
{{ site.data.reusables.project-management.choose-template }}
{{ site.data.reusables.project-management.linked-repositories }}
{{ site.data.reusables.project-management.create-project-button }}
{{ site.data.reusables.project-management.add-column-new-project }}
{{ site.data.reusables.project-management.name-project-board-column }}
{{ site.data.reusables.project-management.select-column-preset }}
{{ site.data.reusables.project-management.select-automation-options-new-column }}
{{ site.data.reusables.project-management.click-create-column }}
{{ site.data.reusables.project-management.add-more-columns }}

{{ site.data.reusables.project-management.edit-project-columns }}

### Criar um quadro de projeto de repositório

{{ site.data.reusables.repositories.navigate-to-repo }}
2. Abaixo do nome do seu repositório, clique em
{% octicon "project" aria-label="The project board icon" %} **Projetos**.
![Aba Project (Projeto)](/assets/images/help/projects/repo-tabs-projects.png)
{{ site.data.reusables.project-management.click-new-project }}
{{ site.data.reusables.project-management.create-project-name-description }}
{{ site.data.reusables.project-management.choose-template }}
{{ site.data.reusables.project-management.create-project-button }}
{{ site.data.reusables.project-management.add-column-new-project }}
{{ site.data.reusables.project-management.name-project-board-column }}
{{ site.data.reusables.project-management.select-column-preset }}
{{ site.data.reusables.project-management.select-automation-options-new-column }}
{{ site.data.reusables.project-management.click-create-column }}
{{ site.data.reusables.project-management.add-more-columns }}

{{ site.data.reusables.project-management.edit-project-columns }}

### Leia mais

- "[Sobre quadros de projetos](/articles/about-project-boards)"
- "[Editar um quadro de projeto](/articles/editing-a-project-board)"{% if currentVersion == "free-pro-team@latest" %}
- "[Copiar um quadro de projeto](/articles/copying-a-project-board)"{% endif %}
- "[Fechar um quadro de projeto](/articles/closing-a-project-board)"
- "[Sobre a automação para quadros de projeto](/articles/about-automation-for-project-boards)"
