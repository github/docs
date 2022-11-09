---
title: 'Migrar de {% data variables.product.prodname_projects_v1 %}'
intro: 'Você pode migrar seu {% data variables.projects.projects_v1_board %} para a nova experiência de {% data variables.product.prodname_projects_v2 %}.'
miniTocMaxHeadingLevel: 3
versions:
  feature: projects-v2
redirect_from:
  - /issues/trying-out-the-new-projects-experience/migrating-your-project
type: tutorial
topics:
  - Projects
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 2efe16be4b865e4315bce1fee633c313a3d7e512
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108232'
---
{% note %}

**Observações:**

- Se o projeto que você está migrando contiver mais de 1.200 itens, os problemas abertos serão priorizados seguidos por solicitações de pull abertas e, em seguida, anotações. O espaço restante será usado para problemas fechados, solicitações de pull mescladas e solicitações de pull fechadas. Os itens que não podem ser migrados devido a esse limite serão movidos para a camada de armazenamento de arquivos. Se o limite de arquivamento de 10.000 itens for atingido, os itens adicionais não serão migrados.
- Os cartões de observação são convertidos em problemas de rascunho e o conteúdo é salvo no corpo do problema do rascunho. Se informações parecerem ausentes, torne os campos ocultos visíveis. Para ver mais informações, confira "[Como mostrar e ocultar campos](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view#showing-and-hiding-fields)".
- A automação não será migrada.
- A triagem, arquivação e a atividade não serão migrados.
- Após a migração, o novo projeto migrado e o projeto antigo não serão mantidos em sincronia.

{% endnote %}

## Sobre a migração de projeto

Você pode migrar seus quadros de projetos para a nova experiência de {% data variables.product.prodname_projects_v2 %} e experimentar tabelas, várias exibições, novas opções de automação e tipos de campo avançados. Para obter mais informações, confira "[Sobre projetos](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)".

## Como migrar um painel de projetos da organização

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}
1. À esquerda, clique em **Projetos (clássico)** .
  ![Captura de tela mostrando a opção de menu Projetos (clássico) }](/assets/images/help/issues/projects-classic-org.png){% data reusables.projects.migrate-project-steps %}

## Como migrar um painel de projetos de usuário

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_profile %}
1. Na parte superior da página de perfil, no menu de navegação principal, clique em {% octicon "project" aria-label="The project board icon" %} **Projetos**.
![Guia do Projeto](/assets/images/help/projects/user-projects-tab.png)
1. Acima da lista de projetos, clique em **Projetos (clássico)** .
  ![Captura de tela mostrando a opção de menu Projetos (clássico) }](/assets/images/help/issues/projects-classic-user.png){% data reusables.projects.migrate-project-steps %}

## Como migrar um painel de projetos do repositório

{% note %}

**Observação:** o {% data variables.projects.projects_v2_caps %} não dá suporte a projetos de nível de repositório. Ao migrar um painel de projeto de repositório, ele será migrado para a organização ou conta pessoal proprietária do projeto de repositório, e o projeto migrado será fixado no repositório original.

{% endnote %}

{% data reusables.projects.enable-migration %} {% data reusables.repositories.navigate-to-repo %}
1. Abaixo do nome do repositório, clique em {% octicon "project" aria-label="The project board icon" %} **Projetos**.
![Guia do Projeto](/assets/images/help/projects/repo-tabs-projects.png)
1. Clique **em Projetos (clássico)** .
  ![Captura de tela mostrando a opção de menu Projetos (clássico) }](/assets/images/help/issues/projects-classic-org.png){% data reusables.projects.migrate-project-steps %}
