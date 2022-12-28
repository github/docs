---
title: Gerenciando acesso a projetos (beta)
intro: Você pode controlar quem pode visualizar, editar ou gerenciar seus projetos.
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: 2c50343bfe8e3fd4e65a9a39b798f355cf0f13bb
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145126572"
---
{% data reusables.projects.projects-beta %}

## <a name="about-project-access"></a>Sobre o acesso ao projeto

Os administradores de projetos no nível de organização podem gerenciar acesso para toda a organização, equipes, integrantes individuais da organização e para colaboradores externos. 

Os administradores de projetos de nível de usuário podem convidar colaboradores individuais e gerenciar seu acesso.

Administradores do projeto também podem controlar a visibilidade do seu projeto para todos na internet. Para obter mais informações, confira "[Como gerenciar a visibilidade dos seus projetos](/issues/trying-out-the-new-projects-experience/managing-the-visibility-of-your-projects)".

## <a name="managing-access-for-organization-level-projects"></a>Gerenciar acesso para projetos no nível da organização

### <a name="managing-access-for-everyone-in-your-organization"></a>Gerenciando o acesso para todos na sua organização

A função base padrão é `write`, o que significa que todos na organização podem ver e editar seu projeto. Para alterar o acesso ao projeto para todos da organização, você pode alterar a função-base. As alterações na função-base afetam apenas os integrantes da organização que não são proprietários da organização e a quem não é concedido acesso individual.

{% data reusables.projects.project-settings %}
1. Clique em **Gerenciar acesso**.
2. Na **função Base**, selecione a função padrão.
   - **Sem acesso**: somente os proprietários e os usuários da organização que receberam acesso individual podem ver o projeto. Os proprietários da organização também são administradores do projeto.
   - **Leitura**: todos na organização podem ver o projeto. Os proprietários da organização também são administradores do projeto.
   - **Gravação**: todos na organização podem ver e editar o projeto. Os proprietários da organização também são administradores do projeto.
   - **Administrador**: todos na organização são administradores do projeto.

### <a name="managing-access-for-teams-and-individual-members-of-your-organization"></a>Gerenciando o acesso de equipes e integrantes individuais da sua organização

Também é possível adicionar equipes, colaboradores externos e integrantes da organização individuais como colaboradores em um projeto no nível da organização. Para obter mais informações, confira "[Sobre as equipes](/organizations/organizing-members-into-teams/about-teams)".

Você pode apenas convidar um usuário individual para colaborar no projeto a nível da organização se ele já for integrante da organização ou colaborador externo em pelo menos um repositório na organização.

{% data reusables.projects.project-settings %}
1. Clique em **Gerenciar acesso**.
2. Em **Convidar colaboradores**, procure a equipe ou o usuário individual que deseja convidar.
3. Selecione a função para o colaborador.
   - **Leitura**: a equipe ou a pessoa pode ver o projeto.
   - **Gravação**: a equipe ou a pessoa pode ver e editar o projeto.
   - **Administrador**: a equipe ou a pessoa pode ver, editar e adicionar novos colaboradores ao projeto.
4. Clique em **Convidar**.

### <a name="managing-access-of-an-existing-collaborator-on-your-project"></a>Gerenciando o acesso de um colaborador existente no seu projeto

{% data reusables.projects.project-settings %}
1. Clique em **Gerenciar acesso**.
1. Em **Gerenciar acesso**, localize os colaboradores cujas permissões você deseja modificar.

   Use os menus suspensos **Tipo** e **Função** para filtrar a lista de acesso.

1. Editar a função para o(s) colaborador(es) ou clique em {% octicon "trash" aria-label="the trash icon" %} para remover o colaborador.

## <a name="managing-access-for-user-level-projects"></a>Gerenciando acesso para projetos no nível do usuário

### <a name="granting-a-collaborator-access-to-your-project"></a>Concedendo acesso de colaborador ao seu projeto

{% note %}

Isto afeta apenas os colaboradores do projeto, não os repositórios do projeto. Para visualizar um item no projeto, alguém deverá ter as permissões necessárias para o repositório ao qual o item pertence. Se o seu projeto incluir itens de um repositório privado, pessoas que não forem colaboradores no repositório não poderão visualizar os itens desse repositório. Para obter mais informações, confira "[Como configurar a visibilidade do repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility)" e "[Como gerenciar equipes e pessoas com acesso no seu repositório](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository)".

{% endnote %}

{% data reusables.projects.project-settings %}
1. Clique em **Gerenciar acesso**.
2. Em **Convidar colaboradores**, procure o usuário que deseja convidar.
3. Selecione a função para o colaborador.
   - **Leitura**: a pessoa pode ver o projeto.
   - **Gravação**: a pessoa pode ver e editar o projeto.
   - **Administrador**: a pessoa pode ver, editar e adicionar novos colaboradores ao projeto.
4. Clique em **Convidar**.

### <a name="managing-access-of-an-existing-collaborator-on-your-project"></a>Gerenciando o acesso de um colaborador existente no seu projeto

{% data reusables.projects.project-settings %}
1. Clique em **Gerenciar acesso**.
1. Em **Gerenciar acesso**, localize os colaboradores cujas permissões você deseja modificar.

   Use os menus suspensos **Função** para filtrar a lista de acesso.

1. Editar a função para o(s) colaborador(es) ou clique em {% octicon "trash" aria-label="the trash icon" %} para remover o colaborador.
