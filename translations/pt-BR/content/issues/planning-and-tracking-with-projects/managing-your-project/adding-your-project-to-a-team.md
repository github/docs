---
title: 'Adicionar o {% data variables.projects.project_v2 %} a uma equipe'
shortTitle: 'Adding a {% data variables.projects.project_v2 %} to a team'
intro: Você pode adicionar projetos a equipes para gerenciar permissões e aprimorar a capacidade de descoberta do projeto.
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2-add-to-team
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
permissions: Organization owners or people with the team maintainer role and admin permissions on a project can add a project to a team.
ms.openlocfilehash: 21e0944c95949aedf9a0039ef7b576b8840635b1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107768'
---
## Como adicionar projetos às equipes

Você pode adicionar projetos à equipe para dar acesso de colaborador dos projetos à equipe inteira. Quando você adiciona um projeto a uma equipe, esse projeto é listado na página de projetos da equipe, permitindo que os membros identifiquem facilmente quais projetos uma equipe específica usa.

As equipes recebem permissões de leitura para todos os projetos em que são adicionadas. Essa permissão é adicionada às permissões existentes do projeto e aos membros individuais da equipe, garantindo que as permissões mais altas sejam mantidas. Para obter mais informações de como definir permissões para equipes e colaboradores individuais, confira "[Como gerenciar o acesso aos projetos](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects)".

## Como adicionar um projeto a uma equipe

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.specific_team %}
1. Clique em {% octicon "project" aria-label="The Projects icon" %} **Projetos**.
   
   ![Captura de tela mostrando a guia Projetos da equipe.](/assets/images/help/organizations/team-project-board-button.png)
   
1. Clique em **Adicionar projeto**.
   
   ![Captura de tela mostrando o botão "Adicionar projeto".](/assets/images/help/organizations/team-project-add-project.png)
   
1. Comece a digitar o nome do projeto que deseja adicionar e selecione-o na lista de correspondências.  
   
   {% note %}
   
   **Observação:** se essa alteração for aumentar as permissões dos membros da equipe no projeto, o {% data variables.product.product_name %} solicitará que você confirme a escolha.
   
   {% endnote %}
   
   ![Captura de tela mostrando o formulário "Adicionar projeto".](/assets/images/help/organizations/team-project-search.png)
   

## Remover um projeto de uma equipe

{% data reusables.projects.project-settings %}
1. Clique em **Gerenciar acesso**.
   
   ![Captura de tela mostrando o item "Gerenciar acesso"](/assets/images/help/projects-v2/manage-access.png)
   
1. Ao lado da equipe que você quer remover do projeto, clique em **Remover**.
   
   ![Captura de tela mostrando a remoção de um colaborador](/assets/images/help/projects-v2/access-remove-member.png)
   

{% ifversion projects-v1 %}

## Leitura adicional

- [Gerenciar o acesso de uma equipe ao {% data variables.product.prodname_project_v1 %} de uma organização](/organizations/managing-access-to-your-organizations-project-boards/managing-team-access-to-an-organization-project-board)

{% endif %}
