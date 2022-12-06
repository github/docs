---
title: 'Gerenciar o acesso aos {% data variables.projects.projects_v2 %}'
shortTitle: 'Managing {% data variables.projects.project_v2 %} access'
intro: 'Saiba como gerenciar o acesso individual e de equipe ao seu {% data variables.projects.project_v2 %}.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/managing-access-to-projects
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 9c414ab3bfbbd9bbf488a73e5dd2600458074914
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107913'
---
## Sobre o acesso ao projeto

Os administradores de projetos no nível de organização podem gerenciar acesso para toda a organização, equipes, integrantes individuais da organização e para colaboradores externos. 

Os administradores de projetos de nível de usuário podem convidar colaboradores individuais e gerenciar seu acesso.

Administradores do projeto também podem controlar a visibilidade do seu projeto para todos na internet. Para obter mais informações, confira "[Como gerenciar a visibilidade dos seus projetos](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects)".

## Gerenciar acesso para projetos no nível da organização

### Gerenciando o acesso para todos na sua organização

A função base padrão é `write`, o que significa que todos na organização podem ver e editar seu projeto. Para alterar o acesso ao projeto para todos da organização, você pode alterar a função-base. As alterações na função-base afetam apenas os integrantes da organização que não são proprietários da organização e a quem não é concedido acesso individual.

{% data reusables.projects.project-settings %}
1. Clique em **Gerenciar acesso**.
   ![Captura de tela mostrando o item "Gerenciar acesso"](/assets/images/help/projects-v2/manage-access.png)
2. Na **função Base**, selecione a função padrão.
   ![Captura de tela mostrando o menu Função base](/assets/images/help/projects-v2/base-role.png)
   - **Sem acesso**: somente os proprietários e os usuários da organização que receberam acesso individual podem ver o projeto. Os proprietários da organização também são administradores do projeto.
   - **Leitura**: todos na organização podem ver o projeto. Os proprietários da organização também são administradores do projeto.
   - **Gravação**: todos na organização podem ver e editar o projeto. Os proprietários da organização também são administradores do projeto.
   - **Administrador**: todos na organização são administradores do projeto.

### Gerenciando o acesso de equipes e integrantes individuais da sua organização

Também é possível adicionar equipes, colaboradores externos e integrantes da organização individuais como colaboradores em um projeto no nível da organização. Para obter mais informações, confira "[Sobre as equipes](/organizations/organizing-members-into-teams/about-teams)".

{% ifversion projects-v2-add-to-team %}

Se você conceder a uma equipe permissões de leitura ou superiores em um projeto, o projeto também será exibido na página de projetos da equipe. Você também pode adicionar projetos a uma equipe na página de projetos da equipe. Para obter mais informações, confira "[Como adicionar um projeto a uma equipe](/issues/planning-and-tracking-with-projects/managing-your-project/adding-your-project-to-a-team)".  

{% endif %}

Você pode apenas convidar um usuário individual para colaborar no projeto a nível da organização se ele já for integrante da organização ou colaborador externo em pelo menos um repositório na organização.

{% data reusables.projects.project-settings %}
1. Clique em **Gerenciar acesso**.
   ![Captura de tela mostrando o item "Gerenciar acesso"](/assets/images/help/projects-v2/manage-access.png)
2. Em **Convidar colaboradores**, procure a equipe ou o usuário individual que deseja convidar.
   ![Captura de tela mostrando a pesquisa de um colaborador](/assets/images/help/projects-v2/access-search.png)
3. Selecione a função para o colaborador.
   ![Captura de tela mostrando a seleção de uma função](/assets/images/help/projects-v2/access-role.png)
   - **Leitura**: a equipe ou a pessoa pode ver o projeto.
   - **Gravação**: a equipe ou a pessoa pode ver e editar o projeto.
   - **Administrador**: a equipe ou a pessoa pode ver, editar e adicionar novos colaboradores ao projeto.
4. Clique em **Convidar**.
   ![Captura de tela mostrando o botão Convidar](/assets/images/help/projects-v2/access-invite.png)

### Gerenciando o acesso de um colaborador existente no seu projeto

{% data reusables.projects.project-settings %}
1. Clique em **Gerenciar acesso**.
   ![Captura de tela mostrando o item "Gerenciar acesso"](/assets/images/help/projects-v2/manage-access.png)
1. Em **Gerenciar acesso**, localize os colaboradores cujas permissões você deseja modificar.

   Use os menus suspensos **Tipo** e **Função** para filtrar a lista de acesso.
   ![Captura de tela mostrando um colaborador](/assets/images/help/projects-v2/access-find-member.png)

1. Edite a função dos colaboradores.
   ![Captura de tela mostrando a alteração da função de um colaborador](/assets/images/help/projects-v2/access-change-role.png)
1. Como opção, clique em **Remover** para remover os colaboradores.
   ![Captura de tela mostrando a remoção de um colaborador](/assets/images/help/projects-v2/access-remove-member.png)

## Gerenciando acesso para projetos no nível do usuário

### Concedendo acesso de colaborador ao seu projeto

{% note %}

Isto afeta apenas os colaboradores do projeto, não os repositórios do projeto. Para visualizar um item no projeto, alguém deverá ter as permissões necessárias para o repositório ao qual o item pertence. Se o seu projeto incluir itens de um repositório privado, pessoas que não forem colaboradores no repositório não poderão visualizar os itens desse repositório. Para obter mais informações, confira "[Como configurar a visibilidade do repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)" e "[Como gerenciar equipes e pessoas com acesso no seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)".

{% endnote %}

{% data reusables.projects.project-settings %}
1. Clique em **Gerenciar acesso**.
   ![Captura de tela mostrando o item "Gerenciar acesso"](/assets/images/help/projects-v2/manage-access.png)
2. Em **Convidar colaboradores**, procure o usuário que deseja convidar.
   ![Captura de tela mostrando a pesquisa de um colaborador](/assets/images/help/projects-v2/access-search.png)
3. Selecione a função para o colaborador.
   ![Captura de tela mostrando a seleção de uma função](/assets/images/help/projects-v2/access-role.png)
   - **Leitura**: a pessoa pode ver o projeto.
   - **Gravação**: a pessoa pode ver e editar o projeto.
   - **Administrador**: a pessoa pode ver, editar e adicionar novos colaboradores ao projeto.
4. Clique em **Convidar**.
   ![Captura de tela mostrando o botão Convidar](/assets/images/help/projects-v2/access-invite.png)

### Gerenciando o acesso de um colaborador existente no seu projeto

{% data reusables.projects.project-settings %}
1. Clique em **Gerenciar acesso**.
   ![Captura de tela mostrando o item "Gerenciar acesso"](/assets/images/help/projects-v2/manage-access.png)
1. Em **Gerenciar acesso**, localize os colaboradores cujas permissões você deseja modificar.

   Use os menus suspensos **Tipo** e **Função** para filtrar a lista de acesso.
   ![Captura de tela mostrando um colaborador](/assets/images/help/projects-v2/access-find-member.png)

1. Edite a função dos colaboradores.
   ![Captura de tela mostrando a alteração da função de um colaborador](/assets/images/help/projects-v2/access-change-role.png)
1. Como opção, clique em **Remover** para remover os colaboradores.
   ![Captura de tela mostrando a remoção de um colaborador](/assets/images/help/projects-v2/access-remove-member.png)
