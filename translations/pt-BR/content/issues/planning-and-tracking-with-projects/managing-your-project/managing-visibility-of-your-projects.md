---
title: 'Gerenciar a visibilidade dos {% data variables.projects.projects_v2 %}'
shortTitle: 'Managing {% data variables.projects.project_v2 %} visibility'
intro: 'Saiba mais sobre como definir {% data variables.projects.project_v2 %} para visibilidade pública ou privada.'
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
ms.openlocfilehash: fbe4f0943010129b14ace21f6071b99e1160053b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108265'
---
## Sobre a visibilidade do projeto

Os projetos podem ser públicos ou privados. Para projetos públicos, todos na Internet podem ver o projeto. Para projetos privados, apenas usuários concedidos pelo menos acessos de leitura podem ver o projeto.

Apenas a visibilidade do projeto é afetada. Para ver um item no projeto, alguém deve ter as permissões necessárias para o repositório ao qual o item pertence. Se o seu projeto incluir itens de um repositório privado, pessoas que não forem colaboradores no repositório não poderão visualizar os itens desse repositório.

![Projeto com item oculto](/assets/images/help/projects/hidden-items.png)

Os administradores do projeto e os proprietários da organização podem controlar a visibilidade do projeto. Proprietários de organização {% ifversion project-visibility-policy %} e proprietários de empresa {% endif %} podem restringir a capacidade de alterar a visibilidade do projeto apenas para proprietários de organização.

Em projetos públicos e privados, os insights só são visíveis para usuários com permissões de gravação para o projeto.

Em projetos privados, os avatares de usuários que estão fazendo atualizações para o projeto são exibidos na interface de usuário do projeto.

Os administradores do projeto também podem gerenciar o acesso de gravação e administração ao seu projeto e controlar o acesso de leitura para usuários individuais. Para obter mais informações, confira "[Gerenciar o acesso aos projetos](/issues/planning-and-tracking-with-projects/managing-your-project/managing-access-to-your-projects)".

## Alterando a visibilidade do projeto

{% data reusables.projects.project-settings %}
1. Ao lado de **Visibilidade** na "Zona de perigo", selecione **Privado** ou **Público**.
   ![Captura de tela mostrando os controles de visibilidade](/assets/images/help/projects-v2/visibility.png)

## Leitura adicional

- [Permitir alterações de visibilidade do projeto em sua organização](/organizations/managing-organization-settings/allowing-project-visibility-changes-in-your-organization)
