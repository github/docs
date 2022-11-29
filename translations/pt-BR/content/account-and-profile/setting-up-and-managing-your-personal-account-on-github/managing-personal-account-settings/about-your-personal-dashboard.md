---
title: Sobre seu painel pessoal
redirect_from:
  - /hidden/about-improved-navigation-to-commonly-accessed-pages-on-github
  - /articles/opting-into-the-public-beta-for-a-new-dashboard
  - /articles/about-your-personal-dashboard
  - /github/setting-up-and-managing-your-github-user-account/about-your-personal-dashboard
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/about-your-personal-dashboard
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/about-your-personal-dashboard
intro: 'Você pode visitar seu painel pessoal para acompanhar problemas e pull requests nos quais está trabalhando ou seguindo, navegar para os repositórios principais e páginas de equipe, manter-se atualizado sobre atividades recentes nas organizações e nos repositórios em que está inscrito e explorar repositórios recomendados.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Your personal dashboard
ms.openlocfilehash: ee22085e669eedec2e0a9f298cc4d5ad144316c6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179148'
---
## Acessar seu painel pessoal

Seu quadro pessoal é a primeira página que você verá quando entrar no {% data variables.product.product_name %}.

Para acessar seu painel pessoal depois de se conectar, clique no {% octicon "mark-github" aria-label="The github octocat logo" %} no canto superior esquerdo de qualquer página do {% data variables.product.product_name %}.

## Encontrar sua atividade recente

Na seção "Recent activity" (Atividade recente) do feed de notícias, você pode encontrar e acompanhar problemas e pull requests recém-atualizados nos quais você está trabalhando, Em "Atividade recente", você pode visualizar até quatro atualizações recentes feitas nas últimas duas semanas.

{% data reusables.dashboard.recent-activity-qualifying-events %}

## Encontrar equipes e repositórios principais

Na barra lateral esquerda do painel, é possível acessar os repositórios e equipes principais que usa.

![lista de repositórios e equipes de diferentes organizações](/assets/images/help/dashboard/repositories-and-teams-from-personal-dashboard.png)

A lista dos principais repositórios é gerada automaticamente e pode incluir qualquer repositório com o qual você interagiu, independentemente de pertencer diretamente à sua conta. As interações incluem criação commits, abrir ou comentar em problemas e pull requests. A lista dos principais repositórios não pode ser editada, mas os repositórios serão excluídos da lista 4 meses após a última vez que você interagir com eles.

Também é possível encontrar uma lista de seus repositórios, equipes e quadros de projeto recentemente visitados quando você clica na barra de pesquisa no topo de qualquer página do {% data variables.product.product_name %}.

## Permanecer atualizado com as atividades da comunidade

{% ifversion for-you-feed %} A seção principal do painel tem dois feeds de atividades:

- Seguindo: as atividades das pessoas que você segue e dos repositórios que você inspeciona.
- Para você: atividades e recomendações com base na sua rede do {% data variables.product.product_name %}.

### Feed Seguindo

Esse feed mostra as atividades dos repositórios e dos usuários em que você demonstrou interesse direto, seguindo um usuário ou inspecionando um repositório. Por exemplo, você verá atualizações quando um usuário que você segue:

{% else %} Na seção "Todas as atividades" do feed de notícias, veja as atualizações dos repositórios que você inspeciona e dos usuários que você segue.

Você verá atualizações no feed de notícias quando um usuário que você segue: {% endif %}


- Marcar um repositório com estrelas.
- Seguir outro usuário.{% ifversion fpt or ghes or ghec %}
- Cria um repositório público.{% endif %}
- Abrir um problema ou uma pull request com a etiqueta "help wanted" ou "good first issue" em um repositório que você está inspecionando.
- Efetuar push de commits para um repositório que você inspeciona.{% ifversion fpt or ghes or ghec %}
- Bifurca um repositório público.{% endif %}
- Publica uma nova versão.

Para obter mais informações sobre como seguir pessoas e inspecionar repositórios, confira "[Como seguir pessoas](/get-started/exploring-projects-on-github/following-people)" e "[Interagir socialmente](/get-started/quickstart/be-social)".

{% ifversion for-you-feed %}
### Feed Para você

{% note %}

**Observação:** atualmente, essa nova guia está em versão beta pública e sujeita a alterações. 

{% endnote %}

Esse feed mostra atividades e recomendações com base na sua rede do {% data variables.product.product_name %}. Ele foi projetado para fornecer atualizações que inspiram você, manter você atualizado e ajudar a encontrar novas comunidades nas quais você deseja participar. Sua rede inclui:

- Os repositórios que você adicionou aos favoritos
- Os repositórios com os quais você contribuiu
- Os usuários que você segue ou patrocina
- Os usuários com os quais você colaborou
- As organizações que você segue

{% endif %}

## Explorar repositórios recomendados

Na seção "Explorar repositórios" no lado direito do painel, é possível explorar repositórios recomendados nas suas comunidades. As recomendações são baseadas nos repositórios que você adicionou aos favoritos ou visitou, nas pessoas que você segue e na atividade dos repositórios aos quais você tem acesso.{% ifversion fpt or ghec %} Para obter mais informações, confira "[Como descobrir maneiras de contribuir com o código aberto no {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)".{% endif %}

## Leitura adicional

- "[Sobre o painel da sua organização](/articles/about-your-organization-dashboard)"
