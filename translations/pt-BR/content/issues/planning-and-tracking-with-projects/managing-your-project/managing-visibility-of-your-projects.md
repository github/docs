---
title: 'Gerenciando a visibilidade do seu {% data variables.projects.projects_v2 %}'
shortTitle: 'Gerenciando a visibilidade de {% data variables.projects.project_v2 %}'
intro: 'Saiba mais sobre como configurar sua {% data variables.projects.project_v2 %} para visibilidade pública ou privada.'
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

Os projetos podem ser públicos ou privados. Para projetos públicos, todos na Internet podem ver o projeto. Para projetos privados, apenas usuários concedidos pelo menos acessos de leitura podem ver o projeto.

Apenas a visibilidade do projeto é afetada. Para ver um item no projeto, alguém deve ter as permissões necessárias para o repositório ao qual o item pertence. Se o seu projeto incluir itens de um repositório privado, pessoas que não forem colaboradores no repositório não poderão visualizar os itens desse repositório.

![Projeto com item oculto](/assets/images/help/projects/hidden-items.png)

Os administradores do projeto e proprietários da organização podem controlar a visibilidade do projeto. Os proprietários da organização podem restringir a capacidade de alterar a visibilidade do projeto para apenas os proprietários da organização.

Em projetos públicos e privados, as ideias são visíveis apenas para usuários com permissões de gravação no projeto.

Em projetos privados, os avatares de usuários que estão fazendo atualizações para o projeto são exibidos na interface de usuário do projeto.

Os administradores do projeto também podem gerenciar o acesso de gravação e administração ao seu projeto e controlar o acesso de leitura para usuários individuais. Para obter mais informações, consulte "[Gerenciando o acesso aos seus projetos](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects)".

## Alterando a visibilidade do projeto

{% data reusables.projects.project-settings %}
1. Ao lado de **Visibilidade** na "Zona de perigo", selecione **Privado** ou **Público**. ![Captura de tela que mostra os controles de visibilidade](/assets/images/help/projects-v2/visibility.png)

## Leia mais

- [Permitindo alterações de visibilidade de projeto na sua organização](/organizations/managing-organization-settings/allowing-project-visibility-changes-in-your-organization)
