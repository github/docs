---
title: Início Rápido para Discussões do GitHub
intro: 'Habilite {% data variables.product.prodname_discussions %} em um repositório ou organização existente e inicie conversas com sua comunidade.'
allowTitleToDifferFromFilename: true
versions:
  feature: discussions
shortTitle: Quickstart
ms.openlocfilehash: 0b43d9ce559e31c93002cc8cccef51b8284672c1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410208'
---
## Introdução

{% data variables.product.prodname_discussions %} é um fórum de comunicação colaborativo para a comunidade sobre um projeto interno ou de software livre. As discussões são para conversas que precisam ser transparentes e acessíveis, mas não precisam ser rastreadas em um quadro de projeto e não estão relacionadas ao código, diferente de {% data variables.product.prodname_github_issues %}. As discussões permitem uma conversa fluida e aberta em um fórum público.

As discussões dão um espaço para conversas mais colaborativas, conectando-se e dando uma área mais centralizada para se conectar e encontrar informações.

## Habilitar {% data variables.product.prodname_discussions %} no seu repositório

Os proprietários de repositórios e pessoas com acesso de escrita podem habilitar {% data variables.product.prodname_discussions %} para uma comunidade nos seus repositórios públicos{% ifversion ghes > 3.5 %}, internos{% endif %} e privados. A visibilidade de uma discussão é herdada do repositório no qual a discussão é criada.

Ao habilitar {% data variables.product.prodname_discussions %} pela primeira vez, você será convidado a configurar um post de boas-vindas.

{% data reusables.repositories.navigate-to-repo %}
1. Abaixo do nome do repositório, clique em {% octicon "gear" aria-label="The gear icon" %} **Configurações**.
![Botão de configurações públicas](/assets/images/help/discussions/public-repo-settings.png)
1. Em "Recursos", clique em **Configurar discussões**.
  ![Botão Configurar uma discussão em "Recursos" para habilitar ou desabilitar o GitHub Discussions em um repositório](/assets/images/help/discussions/setup-discussions-button.png)
1. Em "Iniciar uma nova discussão", edite o modelo para que fique alinhado aos recursos e tom que você deseja definir para sua comunidade.
1. Clique em **Iniciar discussão**.
  ![Botão "Iniciar discussão"](/assets/images/help/discussions/new-discussion-start-discussion-button.png)

## Habilitar {% data variables.product.prodname_discussions %} em sua organização

Os proprietários da organização podem habilitar {% data variables.product.prodname_discussions %} para sua organização.

{% data reusables.discussions.about-organization-discussions %}

{% data reusables.discussions.enabling-or-disabling-github-discussions-for-your-organization %}

## Dar as boas-vindas às contribuições para as suas discussões

Você pode dar as boas-vindas à sua comunidade e apresentar uma nova forma de se comunicar em um repositório ou organização, criando um post de boas-vindas e fixando o post na sua página de {% data variables.product.prodname_discussions %}. Fixar e bloquear discussões ajuda as pessoas a saber que uma publicação é feita como um anúncio. Você pode usar os anúncios como uma forma de vincular pessoas a mais recursos e oferecer orientação para abrir discussões na sua comunidade. Para obter mais informações sobre como fixar uma discussão, confira "[Gerenciar discussões](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion)".


## Configurar diretrizes da comunidade para colaboradores

Para discussões de repositório, você pode definir diretrizes de contribuição para incentivar os colaboradores a terem conversas significativas e úteis que sejam relevantes para o repositório. Você também pode atualizar o README do repositório para comunicar as expectativas quando os colaboradores devem abrir um problema ou discussão. Para obter mais informações sobre como fornecer diretrizes para seu projeto, confira{% ifversion fpt or ghec %}" [Como adicionar um código de conduta ao seu projeto](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)" e{% endif %} "[Como configurar seu projeto para contribuições benéficas](/communities/setting-up-your-project-for-healthy-contributions)".

Para discussões da organização, você pode compartilhar informações sobre como interagir com a sua organização criando um README do perfil da organização. Para obter mais informações, confira "[Personalizar o perfil da sua organização](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)".

## Criar uma nova discussão

Qualquer usuário autenticado que possa visualizar um repositório pode criar uma discussão nesse repositório. Da mesma forma, como as discussões da organização são baseadas em um repositório de origem, qualquer usuário autenticado que possa exibir o repositório de origem pode criar uma discussão nessa organização.

{% data reusables.discussions.starting-a-discussion %}

## Criar uma nova enquete

Qualquer usuário autenticado que possa exibir um repositório pode criar uma pesquisa. Da mesma forma, como as discussões da organização são baseadas em um repositório de origem, qualquer usuário autenticado que possa exibir o repositório de origem pode criar uma enquete nessa organização.

{% data reusables.discussions.starting-a-poll %}

## Organizando discussões

Os proprietários dos repositórios e pessoas com acesso de gravação ao repositório podem criar novas categorias para manter as discussões organizadas. Da mesma forma, uma vez que as discussões da organização são baseadas em um repositório de origem, proprietários de repositório e pessoas com acesso de gravação ao repositório de origem podem criar novas categorias para discussões da organização.

Os colaboradores que participam e criam discussões podem agrupar discussões nas categorias existentes mais relevantes. As discussões também podem ser recategorizadas depois que forem criadas. Para obter mais informações, confira "[Gerenciar categorias para discussões](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)".

{% data reusables.discussions.you-can-label-discussions %}

## Promover conversas saudáveis

Pessoas com permissões de gravação para o repositório, ou para o repositório de origem para as discussões da organização, podem ajudar a supervisionar conversas importantes, colocando pontos nas discussões, excluindo discussões que não são mais úteis ou que são prejudiciais à comunidade, e transferindo as discussões para repositórios mais relevantes pertencentes à organização. Para obter mais informações, confira "[Gerenciar discussões](/discussions/managing-discussions-for-your-community/managing-discussions)".

Pessoas com permissões de triagem para um repositório ou para o repositório de origem das discussões da organização podem ajudar a moderar as discussões de um projeto marcando comentários como respostas, bloqueando discussões que já não são úteis ou prejudicam a comunidade e convertendo os problemas em discussões quando uma ideia ainda está nos primeiros estágios de desenvolvimento. Para obter mais informações, confira "[Como moderar discussões](/discussions/managing-discussions-for-your-community/moderating-discussions)".

## Próximas etapas

Uma vez traçado um caminho claro para o definir o escopo do trabalho, deve-se concretizar a ideia. você pode criar um problema e começar a acompanhar seu progresso. Para obter mais informações sobre como criar um problema com base em uma discussão, confira "[Como moderar discussões](/discussions/managing-discussions-for-your-community/moderating-discussions)".
