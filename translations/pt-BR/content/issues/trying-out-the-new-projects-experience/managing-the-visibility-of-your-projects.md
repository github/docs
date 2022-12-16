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
ms.openlocfilehash: 85b586bbb86e8d6e286e86263eca3f44d174391f
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145126564"
---
{% data reusables.projects.projects-beta %}

## <a name="about-project-visibility"></a>Sobre a visibilidade do projeto

Os projetos (beta) podem ser públicos ou privados. Para projetos públicos, todos na Internet podem ver o projeto. Para projetos privados, apenas usuários concedidos pelo menos acessos de leitura podem ver o projeto.

Apenas a visibilidade do projeto é afetada. Para ver um item no projeto, alguém deve ter as permissões necessárias para o repositório ao qual o item pertence. Se o seu projeto incluir itens de um repositório privado, pessoas que não forem colaboradores no repositório não poderão visualizar os itens desse repositório.

![Projeto com item oculto](/assets/images/help/projects/hidden-items.png)

Somente os administradores do projeto podem controlar a visibilidade do projeto.

Em projetos privados, os avatares de usuários que estão fazendo atualizações para o projeto são exibidos na interface de usuário do projeto.

Os administradores do projeto também podem gerenciar o acesso de gravação e administração ao seu projeto e controlar o acesso de leitura para usuários individuais. Para obter mais informações, confira "[Como gerenciar o acesso ao armazenamento](/issues/trying-out-the-new-projects-experience/managing-access-to-projects)".

## <a name="changing-project-visibility"></a>Alterando a visibilidade do projeto

{% data reusables.projects.project-settings %}
1. Em **Visibilidade**, selecione **Privado** ou **Público**.
