---
title: Gerenciando acesso a projetos (beta)
intro: 'Você pode controlar quem pode visualizar, editar ou gerenciar seus projetos.'
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Projects
  - Organizations
---

{% data reusables.projects.projects-beta %}

## Sobre o acesso ao projeto

Os administradores de projetos no nível da organização podem gerenciar acesso para toda a organização, para equipes e para integrantes da organização individual.

Os administradores de projetos de nível de usuário podem convidar colaboradores individuais e gerenciar seu acesso.

Administradores do projeto também podem controlar a visibilidade do seu projeto para todos na internet. Para obter mais informações, consulte "[Gerenciando a visibilidade de seus projetos](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects)".

## Gerenciar acesso para projetos no nível da organização

### Gerenciando o acesso para todos na sua organização

A função base padrão é `gravar`, o que significa que todos na organização podem ver e editar o seu projeto. Para alterar o acesso ao projeto para todos da organização, você pode alterar a função-base. As alterações na função-base afetam apenas os integrantes da organização que não são proprietários da organização e a quem não é concedido acesso individual.

{% data reusables.projects.project-settings %}
1. Clique em **Gerenciar acesso**.
2. Em **Função-base**, selecione a função-padrão.
   - **Sem acesso**: Somente os proprietários e usuários da organização com acesso individual pode ver o projeto. Os proprietários da organização também são administradores do projeto.
   - **Leitura**: Todos na organização podem ver o projeto. Os proprietários da organização também são administradores do projeto.
   - **Gravação**: Todos os integrantes da organização podem ver e editar o projeto. Os proprietários da organização também são administradores do projeto.
   - **Administrador**: Todos os integrantes da organização são administradores do projeto.

### Gerenciando o acesso de equipes e integrantes individuais da sua organização

Você também pode adicionar equipes e integrantes das organizações individuais, como colaboradores. Para obter mais informações, consulte "[Sobre equipes](/organizations/organizing-members-into-teams/about-teams)".

Você só pode convidar um usuário individual para colaborar no seu projeto no nível da organização se ele for integrante da organização.

{% data reusables.projects.project-settings %}
1. Clique em **Gerenciar acesso**.
1. Em **Convidar colaboradores**, pesquise o integrante da equipe ou organização que você deseja convidar.
1. Selecione a função para o colaborador.
   - **Leitura**: A equipe ou indivíduo pode visualizar o projeto.
   - **Gravação**: A equipe ou indivíduo pode visualizar e editar o projeto.
   - **Administrador**: A equipe ou indivíduo pode visualizar, editar e adicionar novos colaboradores ao projeto.
1. Clique em **Convidar**.

### Gerenciando o acesso de um colaborador existente no seu projeto

{% data reusables.projects.project-settings %}
1. Clique em **Gerenciar acesso**.
1. Em **Gerenciar acesso**, encontre o(s) colaborador(es) cujas permissões você deseja modificar.

   Você pode usar o menu suspenso **Tipo** e **Função** para filtrar a lista de acesso.

1. Editar a função para o(s) colaborador(es) ou clique em {% octicon "trash" aria-label="the trash icon" %} para remover o colaborador.

## Gerenciando acesso para projetos no nível do usuário

### Concedendo acesso de colaborador ao seu projeto

{% note %}

Isto afeta apenas os colaboradores do projeto, não os repositórios do projeto. Para visualizar um item no projeto, alguém deverá ter as permissões necessárias para o repositório ao qual o item pertence. Se o seu projeto incluir itens de um repositório privado, pessoas que não forem colaboradores no repositório não poderão visualizar os itens desse repositório. Para obter mais informações, consulte "[Configurando a visibilidade do repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)" e "[Gerenciando equipes e pessoas com acesso ao seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)".

{% endnote %}

{% data reusables.projects.project-settings %}
1. Clique em **Gerenciar acesso**.
2. Em **Convidar colaboradores**, pesquise o usuário que você deseja convidar.
3. Selecione a função para o colaborador.
   - **Leitura**: O indivíduo pode visualizar o projeto.
   - **Gravação**: O indivíduo pode visualizar e editar o projeto.
   - **Administrador**: O indivíduo pode visualizar, editar e adicionar novos colaboradores ao projeto.
4. Clique em **Convidar**.

### Gerenciando o acesso de um colaborador existente no seu projeto

{% data reusables.projects.project-settings %}
1. Clique em **Gerenciar acesso**.
1. Em **Gerenciar acesso**, encontre o(s) colaborador(es) cujas permissões você deseja modificar.

   Você pode usar o menu suspenso **Função** para filtrar a lista de acesso.

1. Editar a função para o(s) colaborador(es) ou clique em {% octicon "trash" aria-label="the trash icon" %} para remover o colaborador.
