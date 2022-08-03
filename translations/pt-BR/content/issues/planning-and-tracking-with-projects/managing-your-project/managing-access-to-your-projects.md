---
title: 'Managing access to your {% data variables.projects.projects_v2 %}'
shortTitle: 'Managing {% data variables.projects.project_v2 %} access'
intro: 'Learn how to manage team and individual access to your {% data variables.projects.project_v2 %}.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-access-to-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
---


## Sobre o acesso ao projeto

Os administradores de projetos no nível de organização podem gerenciar acesso para toda a organização, equipes, integrantes individuais da organização e para colaboradores externos.

Os administradores de projetos de nível de usuário podem convidar colaboradores individuais e gerenciar seu acesso.

Administradores do projeto também podem controlar a visibilidade do seu projeto para todos na internet. Para obter mais informações, consulte "[Gerenciando a visibilidade de seus projetos](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects)".

## Gerenciar acesso para projetos no nível da organização

### Gerenciando o acesso para todos na sua organização

A função base padrão é `gravar`, o que significa que todos na organização podem ver e editar o seu projeto. Para alterar o acesso ao projeto para todos da organização, você pode alterar a função-base. As alterações na função-base afetam apenas os integrantes da organização que não são proprietários da organização e a quem não é concedido acesso individual.

{% data reusables.projects.project-settings %}
1. Clique em **Gerenciar acesso**. ![Screenshot showing the "Manage access" item](/assets/images/help/projects-v2/manage-access.png)
2. Em **Função-base**, selecione a função-padrão. ![Screenshot showing the base role menu](/assets/images/help/projects-v2/base-role.png)
   - **Sem acesso**: Somente os proprietários e usuários da organização com acesso individual pode ver o projeto. Os proprietários da organização também são administradores do projeto.
   - **Leitura**: Todos na organização podem ver o projeto. Os proprietários da organização também são administradores do projeto.
   - **Gravação**: Todos os integrantes da organização podem ver e editar o projeto. Os proprietários da organização também são administradores do projeto.
   - **Administrador**: Todos os integrantes da organização são administradores do projeto.

### Gerenciando o acesso de equipes e integrantes individuais da sua organização

Também é possível adicionar equipes, colaboradores externos e integrantes da organização individuais como colaboradores em um projeto no nível da organização. Para obter mais informações, consulte "[Sobre equipes](/organizations/organizing-members-into-teams/about-teams)".

Você pode apenas convidar um usuário individual para colaborar no projeto a nível da organização se ele já for integrante da organização ou colaborador externo em pelo menos um repositório na organização.

{% data reusables.projects.project-settings %}
1. Clique em **Gerenciar acesso**. ![Screenshot showing the "Manage access" item](/assets/images/help/projects-v2/manage-access.png)
2. Em **Convidar colaboradores**, pesquisa a equipe ou usuário individual que você deseja convidar. ![Screenshot showing searching for a collaborator](/assets/images/help/projects-v2/access-search.png)
3. Select the role for the collaborator. ![Screenshot showing selecting a role](/assets/images/help/projects-v2/access-role.png)
   - **Leitura**: A equipe ou indivíduo pode visualizar o projeto.
   - **Gravação**: A equipe ou indivíduo pode visualizar e editar o projeto.
   - **Administrador**: A equipe ou indivíduo pode visualizar, editar e adicionar novos colaboradores ao projeto.
4. Clique em **Convidar**. ![Screenshot showing the invite button](/assets/images/help/projects-v2/access-invite.png)

### Gerenciando o acesso de um colaborador existente no seu projeto

{% data reusables.projects.project-settings %}
1. Clique em **Gerenciar acesso**. ![Screenshot showing the "Manage access" item](/assets/images/help/projects-v2/manage-access.png)
1. Em **Gerenciar acesso**, encontre o(s) colaborador(es) cujas permissões você deseja modificar.

   Você pode usar o menu suspenso **Tipo** e **Função** para filtrar a lista de acesso. ![Screenshot showing a collaborator](/assets/images/help/projects-v2/access-find-member.png)

1. Edit the role for the collaborator(s). ![Screenshot showing changing a collaborator's role](/assets/images/help/projects-v2/access-change-role.png)
1. Optionally, click **Remove** to remove the collaborator(s). ![Screenshot showing removing a collaborator](/assets/images/help/projects-v2/access-remove-member.png)

## Gerenciando acesso para projetos no nível do usuário

### Concedendo acesso de colaborador ao seu projeto

{% note %}

Isto afeta apenas os colaboradores do projeto, não os repositórios do projeto. Para visualizar um item no projeto, alguém deverá ter as permissões necessárias para o repositório ao qual o item pertence. Se o seu projeto incluir itens de um repositório privado, pessoas que não forem colaboradores no repositório não poderão visualizar os itens desse repositório. Para obter mais informações, consulte "[Configurando a visibilidade do repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)" e "[Gerenciando equipes e pessoas com acesso ao seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)".

{% endnote %}

{% data reusables.projects.project-settings %}
1. Clique em **Gerenciar acesso**. ![Screenshot showing the "Manage access" item](/assets/images/help/projects-v2/manage-access.png)
2. Em **Convidar colaboradores**, pesquise o usuário que você deseja convidar. ![Screenshot showing searching for a collaborator](/assets/images/help/projects-v2/access-search.png)
3. Select the role for the collaborator. ![Screenshot showing selecting a role](/assets/images/help/projects-v2/access-role.png)
   - **Leitura**: O indivíduo pode visualizar o projeto.
   - **Gravação**: O indivíduo pode visualizar e editar o projeto.
   - **Administrador**: O indivíduo pode visualizar, editar e adicionar novos colaboradores ao projeto.
4. Clique em **Convidar**. ![Screenshot showing the invite button](/assets/images/help/projects-v2/access-invite.png)

### Gerenciando o acesso de um colaborador existente no seu projeto

{% data reusables.projects.project-settings %}
1. Clique em **Gerenciar acesso**. ![Screenshot showing the "Manage access" item](/assets/images/help/projects-v2/manage-access.png)
1. Em **Gerenciar acesso**, encontre o(s) colaborador(es) cujas permissões você deseja modificar.

   Você pode usar o menu suspenso **Tipo** e **Função** para filtrar a lista de acesso. ![Screenshot showing a collaborator](/assets/images/help/projects-v2/access-find-member.png)

1. Edit the role for the collaborator(s). ![Screenshot showing changing a collaborator's role](/assets/images/help/projects-v2/access-change-role.png)
1. Optionally, click **Remove** to remove the collaborator(s). ![Screenshot showing removing a collaborator](/assets/images/help/projects-v2/access-remove-member.png)
