---
title: 'Vincular um repositório a um {% data variables.product.prodname_project_v1 %}'
intro: 'Você pode vincular um repositório ao {% data variables.projects.projects_v1_board %} da sua organização ou da sua conta pessoal.'
redirect_from:
  - /github/managing-your-work-on-github/managing-project-boards/linking-a-repository-to-a-project-board
  - /articles/linking-a-repository-to-a-project-board
  - /github/managing-your-work-on-github/linking-a-repository-to-a-project-board
versions:
  feature: projects-v1
topics:
  - Pull requests
shortTitle: Link repository to board
allowTitleToDifferFromFilename: true
ms.openlocfilehash: d0893b64551be80577547b9791e7a7ed6a432de0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108235'
---
{% data reusables.projects.project_boards_old %}

Qualquer pessoa com permissões de gravação para um {% data variables.projects.projects_v1_board %} pode vincular repositórios pertencentes a essa organização ou conta pessoal ao {% data variables.projects.projects_v1_board %}. Para obter mais informações, confira "[Permissões de {% data variables.product.prodname_project_v1_caps %} para uma organização](/articles/project-board-permissions-for-an-organization/)" ou "[Níveis de permissão para {% data variables.product.prodname_projects_v1 %} pertencentes a usuários](/articles/permission-levels-for-user-owned-project-boards/)".

{% data reusables.project-management.link-repos-to-project-board %} Você pode adicionar problemas e pull requests de quaisquer repositórios desvinculados digitando a URL do problema ou pull request em um cartão. Para obter mais informações, confira "[Adicionar problemas e solicitações de pull a um {% data variables.product.prodname_project_v1 %}](/articles/adding-issues-and-pull-requests-to-a-project-board)".

1. Navegue até o {% data variables.projects.projects_v1_board %} ao qual você deseja vincular um repositório.
{% data reusables.project-management.click-menu %} {% data reusables.project-management.access-collaboration-settings %}
4. Na barra lateral esquerda, clique em **Repositórios vinculados**.
![Menu Repositórios vinculados na barra lateral esquerda](/assets/images/help/projects/project-board-linked-repositories-setting.png)
5. Clique em **Vincular um repositório**.
![Botão Vincular um repositório na guia Repositórios vinculados](/assets/images/help/projects/link-repository-button.png)
6. Pesquise o repositório que você deseja vincular.
![Campo de pesquisa na janela Vincular um repositório](/assets/images/help/projects/search-to-link-repository.png)
7. Clique em **Vincular**. Para desvinculá-lo, clique em **Desvincular**.
![Botão Vincular](/assets/images/help/projects/link-button.png)

{% note %}

**Observação:** para vincular um repositório ao {% data variables.projects.projects_v1_board %} da sua organização ou pertencente a um usuário, o repositório precisa ter problemas habilitados. Ou seja, o repositório tem uma aba "Problemas" (os problemas nos repositórios bifurcados são desabilitados por padrão).  Para obter informações sobre como habilitar ou desabilitar problemas para um repositório, confira "[Como desabilitar problemas para um repositório](/github/managing-your-work-on-github/disabling-issues)".

{% endnote %}

## Leitura adicional

- "[Sobre {% data variables.product.prodname_projects_v1 %}](/articles/about-project-boards)"
