---
title: Início Rápido para Discussões do GitHub
intro: 'Habilite o {% data variables.product.prodname_discussions %} em um repositório ou organização existente e inicie conversas com a sua comunidade.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
shortTitle: QuickStart
---


## Introdução

{% data variables.product.prodname_discussions %} é um fórum de comunicação colaborativo para a comunidade sobre um projeto de código aberto. As discussões são para conversas que precisam ser transparentes e acessíveis, mas não precisam ser rastreadas em um quadro de projeto e não estão relacionadas ao código, diferente de {% data variables.product.prodname_github_issues %}. As discussões permitem uma conversa fluida e aberta em um fórum público.

As discussões dão um espaço para conversas mais colaborativas, conectando-se e dando uma área mais centralizada para se conectar e encontrar informações.

## Habilitar {% data variables.product.prodname_discussions %} no seu repositório

Os proprietários de repositórios e pessoas com acesso de escrita podem habilitar {% data variables.product.prodname_discussions %} para uma comunidade nos seus repositórios públicos e privados.

Ao habilitar {% data variables.product.prodname_discussions %} pela primeira vez, você será convidado a configurar um post de boas-vindas.

{% data reusables.repositories.navigate-to-repo %}
1. No nome do seu repositório, clique em {% octicon "gear" aria-label="The gear icon" %} **Configurações**. ![Botão de configurações públicas](/assets/images/help/discussions/public-repo-settings.png)
1. Em "Recursos", clique em **Configurar discussões**. ![Configure um botão de discussão em "Recursos" para habilitar ou desabilitar as Discussões do GitHub para um repositório](/assets/images/help/discussions/setup-discussions-button.png)
1. Em "Iniciar uma nova discussão", edite o modelo para que fique alinhado aos recursos e tom que você deseja definir para sua comunidade.
1. Clique em **Iniciar discussão**. ![Botão "Iniciar discussão"](/assets/images/help/discussions/new-discussion-start-discussion-button.png)

## Habilitando {% data variables.product.prodname_discussions %} na sua organização

Os proprietários da organização podem habilitar {% data variables.product.prodname_discussions %} para a sua organização.

{% data reusables.discussions.about-organization-discussions %}

{% data reusables.discussions.enabling-or-disabling-github-discussions-for-your-organization %}

## Dar as boas-vindas às contribuições para as suas discussões

Você pode dar as boas-vindas à sua comunidade e apresentar uma nova forma de se comunicar em um repositório ou organização, criando um post de boas-vindas e fixando o post na sua página de {% data variables.product.prodname_discussions %}. Fixar e bloquear discussões ajuda as pessoas a saber que uma publicação é feita como um anúncio. Você pode usar os anúncios como uma forma de vincular pessoas a mais recursos e oferecer orientação para abrir discussões na sua comunidade. Para obter mais informações sobre fixação de uma discussão, consulte "[Gerenciando as discussões](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion)".


## Configurar diretrizes da comunidade para colaboradores

Para discussões de repositório, você pode definir diretrizes de contribuição para incentivar os colaboradores a terem conversas significativas e úteis que sejam relevantes para o repositório. Você também pode atualizar o README do repositório para comunicar as expectativas quando os colaboradores devem abrir um problema ou discussão. Para obter mais informações sobre como fornecer diretrizes para o seu projeto, consulte "[Adicionar um código de conduta ao seu projeto](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)" e "[Configurar seu projeto para contribuições saudáveis](/communities/setting-up-your-project-for-healthy-contributions)".

Para discussões na organização, você compartilha informações sobre como se envolver com a sua organização criando um perfil README da organização. Para obter mais informações, consulte "[Personalizar o perfil da sua organização](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)".

## Criar uma nova discussão

Qualquer usuário autenticado que possa visualizar o repositório pode criar uma discussão nesse repositório. Da mesma forma, uma vez que as discussões da organização são baseadas em um repositório de origem, qualquer usuário autenticado que possa visualizar o repositório de origem pode criar uma discussão nessa organização.

{% data reusables.discussions.starting-a-discussion %}

## Criando uma nova enquete

Qualquer usuário autenticado que possa visualizar um repositório pode criar uma enquete. Da mesma forma, uma vez que as discussões da organização são baseadas em um repositório de origem, qualquer usuário autenticado que possa visualizar o repositório de origem pode criar uma enquete nessa organização.

{% data reusables.discussions.starting-a-poll %}

## Organizando discussões

Os proprietários dos repositórios e pessoas com acesso de gravação ao repositório podem criar novas categorias para manter as discussões organizadas. Da mesma forma, uma vez que as discussões da organização são baseadas em um repositório de origem, os proprietários de repositórios e as pessoas com acesso de gravação ao repositório de origem podem criar novas categorias para discussões da organização.

Os colaboradores que participam e criam novas discussões podem agrupar discussões nas categorias existentes mais relevantes. As discussões também podem ser recategorizadas depois que forem criadas. Para obter mais informações, consulte "[Gerenciando categorias para discussões](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)".

{% data reusables.discussions.you-can-label-discussions %}

## Promover conversas saudáveis

As pessoas com permissões de gravação no repositório ou no repositório de origem para discussões na organização podem ajudar a supervisionar conversas importantes fixando discussões, excluindo discussões que não são mais úteis ou são prejudiciais para a comunidade, e transferir discussões para repositórios mais relevantes pertencentes à organização. Para obter mais informações, consulte "[Gerenciando discussões](/discussions/managing-discussions-for-your-community/managing-discussions)".

As pessoas com permissões de triagem no repositório ou no repositório de origem para discussões da organização podem ajudar a moderar as discussões de um projeto marcando comentários como respostas, bloqueando discussões que já não são úteis ou prejudicam a comunidade e convertendo os problemas em discussões quando uma ideia ainda está nos primeiros estádios de desenvolvimento. Para obter mais informações, consulte "[Moderação de discussões](/discussions/managing-discussions-for-your-community/moderating-discussions)".

## Próximas etapas

Uma vez traçado um caminho claro para o definir o escopo do trabalho, deve-se concretizar a ideia. você pode criar um problema e começar a acompanhar seu progresso. Para obter mais informações sobre a criação de um problema a partir de uma discussão, consulte "[Moderar discussões](/discussions/managing-discussions-for-your-community/moderating-discussions)".
