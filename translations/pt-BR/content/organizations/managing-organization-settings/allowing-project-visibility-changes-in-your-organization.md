---
title: Permitindo alterações de visibilidade de projeto na sua organização
intro: 'Os proprietários da organização podem permitir que os integrantes com permissões de administrador ajustem a visibilidade de {% data variables.projects.projects_v2_and_v1 %} na sua organização.'
versions:
  feature: classic-project-visibility-permissions-or-projects-v2
topics:
  - Organizations
  - Projects
shortTitle: Permissões de visibilidade do projeto
allowTitleToDifferFromFilename: true
permissions: 'Organization owners can allow {% data variables.projects.project_v2_and_v1 %} visibility changes for an organization.'
---

Você pode restringir quem tem a capacidade de alterar a visibilidade de {% data variables.projects.projects_v2_and_v1 %} na sua organização e impedir que os integrantes alterem {% data variables.projects.projects_v2_and_v1 %} de privado para público.

Você pode limitar a capacidade de alterar a visibilidade de {% data variables.projects.project_v2_and_v1 %} para apenas os proprietários da organização ou você pode permitir que qualquer pessoa conceda permissões de administrador altere a visibilidade.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. Na seção "código, planejamento e automação" na barra lateral, clique em **Projetos de {% octicon "table" aria-label="The table icon" %}**.
1. Para permitir que os integrantes ajustem a visibilidade do projeto, selecione **Permitir que os integrantes alterem a visibilidade do projeto para esta organização**. ![Captura de tela que mostra a caixa de seleção para definir alterações de visibilidade](/assets/images/help/projects-v2/visibility-change-checkbox.png)
1. Clique em **Salvar**.

## Leia mais

{% ifversion projects-v2 %}
- "[Gerenciando a visibilidade do seu {% data variables.projects.projects_v2 %}](/issues/planning-and-tracking-with-projects/managing-your-project/managing-visibility-of-your-projects)"
{%- endif %}{%- ifversion projects-v1 %}
- "[Alterando a visibilidade de {% data variables.product.prodname_project_v1 %}](/issues/organizing-your-work-with-project-boards/managing-project-boards/changing-project-board-visibility)"
{% endif %}
