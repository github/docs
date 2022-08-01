---
title: 'Managing visibility of your {% data variables.projects.projects_v2 %}'
shortTitle: 'Managing {% data variables.projects.project_v2 %} visibility'
intro: 'Learn about setting your {% data variables.projects.project_v2 %} to private or public visibility.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
permissions: Organization owners can manage the visibility of project boards in their organization. Organization owners can also allow collaborators with admin permissions to manage project visibility. Visibility of user projects can be managed by the owner of the project and collaborators with admin permissions.
---

## Sobre a visibilidade do projeto

Projects can be public or private. Para projetos públicos, todos na Internet podem ver o projeto. Para projetos privados, apenas usuários concedidos pelo menos acessos de leitura podem ver o projeto.

Apenas a visibilidade do projeto é afetada. Para ver um item no projeto, alguém deve ter as permissões necessárias para o repositório ao qual o item pertence. Se o seu projeto incluir itens de um repositório privado, pessoas que não forem colaboradores no repositório não poderão visualizar os itens desse repositório.

![Projeto com item oculto](/assets/images/help/projects/hidden-items.png)

Project admins and organization owners can control project visibility. Organization owners can restrict the ability to change project visibility to just organization owners.

In public and private projects, insights are only visible to users with write permissions for the project.

Em projetos privados, os avatares de usuários que estão fazendo atualizações para o projeto são exibidos na interface de usuário do projeto.

Os administradores do projeto também podem gerenciar o acesso de gravação e administração ao seu projeto e controlar o acesso de leitura para usuários individuais. For more information, see "[Managing access to your projects](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects)."

## Alterando a visibilidade do projeto

{% data reusables.projects.project-settings %}
1. Next to **Visibility** in the "Danger zone", select **Private** or **Public**. ![Screenshot showing the visibility controls](/assets/images/help/projects-v2/visibility.png)

## Leia mais

- [Allowing project visibility changes in your organization](/organizations/managing-organization-settings/allowing-project-visibility-changes-in-your-organization)
