---
title: Como migrar seu projeto para o Projects (beta)
intro: Você pode migrar seus projetos da experiência de projetos antigos para o Projects (beta).
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
- Projects
- Organizations
ms.openlocfilehash: 9361f3f28d3d365ecbb6053e908644cc8f34f1d0
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "147079498"
---
{% note %}

**Observações:**

- Os Projects (beta) estão atualmente em versão beta pública e sujeitos a alterações.
- Se o projeto que você está migrando contiver mais de 1.200 itens, os problemas abertos serão priorizados seguidos por solicitações de pull abertas e, em seguida, anotações. O espaço restante será usado para problemas fechados, solicitações de pull mescladas e solicitações de pull fechadas. Os itens que não podem ser migrados devido a esse limite serão movidos para a camada de armazenamento de arquivos. Se o limite de arquivamento de 10.000 itens for atingido, os itens adicionais não serão migrados.
- Os cartões de observação são convertidos em problemas de rascunho e o conteúdo é salvo no corpo do problema do rascunho. Se informações parecerem ausentes, torne os campos ocultos visíveis. Para ver mais informações, confira "[Como mostrar e ocultar campos](/issues/trying-out-the-new-projects-experience/customizing-your-project-views#showing-and-hiding-fields)".
- A automação não será migrada.
- A triagem, arquivação e a atividade não serão migrados.
- Após a migração, o novo projeto migrado e o projeto antigo não serão mantidos em sincronia.

{% endnote %}

## <a name="about-project-migration"></a>Sobre a migração de projeto

Você pode migrar seus painéis de projeto para a experiência de todos os novos projetos (beta) e experimentar tabelas, várias exibições, novas opções de automação e tipos de campo avançados. Para obter mais informações, confira "[Sobre os projetos (beta)](/issues/trying-out-the-new-projects-experience/about-projects)".

## <a name="migrating-an-organization-project-board"></a>Como migrar um painel de projetos da organização

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.organization-wide-project %}
1. À esquerda, clique em **Projetos (clássico)** .
  ![Captura de tela mostrando a opção de menu Projetos (clássico) }](/assets/images/help/issues/projects-classic-org.png){% data reusables.projects.migrate-project-steps %}

## <a name="migrating-a-user-project-board"></a>Como migrar um painel de projetos de usuário

{% data reusables.projects.enable-migration %} {% data reusables.profile.access_profile %}
1. Na parte superior da página de perfil, no menu de navegação principal, clique em {% octicon "project" aria-label="The project board icon" %} **Projetos**.
![Guia do Projeto](/assets/images/help/projects/user-projects-tab.png)
1. Acima da lista de projetos, clique em **Projetos (clássico)** .
  ![Captura de tela mostrando a opção de menu Projetos (clássico) }](/assets/images/help/issues/projects-classic-user.png){% data reusables.projects.migrate-project-steps %}

## <a name="migrating-a-repository-project-board"></a>Como migrar um painel de projetos do repositório

{% note %}

**Observação:** projetos (beta) não dão suporte a projetos de nível de repositório. Ao migrar um painel de projeto de repositório, ele será migrado para a organização ou conta pessoal proprietária do projeto de repositório, e o projeto migrado será fixado no repositório original.

{% endnote %}

{% data reusables.projects.enable-migration %} {% data reusables.repositories.navigate-to-repo %}
1. Abaixo do nome do repositório, clique em {% octicon "project" aria-label="The project board icon" %} **Projetos**.
![Guia do Projeto](/assets/images/help/projects/repo-tabs-projects.png)
1. Clique **em Projetos (clássico)** .
  ![Captura de tela mostrando a opção de menu Projetos (clássico) }](/assets/images/help/issues/projects-classic-org.png){% data reusables.projects.migrate-project-steps %}
