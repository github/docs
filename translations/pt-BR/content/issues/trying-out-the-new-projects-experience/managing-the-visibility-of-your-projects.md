---
title: Gerenciando a visibilidade dos seus projetos (beta)
intro: Você pode controlar quem pode ver seus projetos.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Projects
  - Organizations
---

{% data reusables.projects.projects-beta %}

## Sobre a visibilidade do projeto

Os projetos (beta) podem ser públicos ou privados. Para projetos públicos, todos na Internet podem ver o projeto. Para projetos privados, apenas usuários concedidos pelo menos acessos de leitura podem ver o projeto.

Apenas a visibilidade do projeto é afetada. Para ver um item no projeto, alguém deve ter as permissões necessárias para o repositório ao qual o item pertence. Se o seu projeto incluir itens de um repositório privado, pessoas que não forem colaboradores no repositório não poderão visualizar os itens desse repositório.

![Projeto com item oculto](/assets/images/help/projects/hidden-items.png)

Somente os administradores do projeto podem controlar a visibilidade do projeto.

In private, organization-owned projects, the avatars of users who are current making updates to the project are displayed in the project UI.

Os administradores do projeto também podem gerenciar o acesso de gravação e administração ao seu projeto e controlar o acesso de leitura para usuários individuais. Para obter mais informações, consulte "[Gerenciando o acesso aos projetos](/issues/trying-out-the-new-projects-experience/managing-access-to-projects)".

## Alterando a visibilidade do projeto

{% data reusables.projects.project-settings %}
1. Em **Visibilidade**, selecione **Privado** ou **Público**.
