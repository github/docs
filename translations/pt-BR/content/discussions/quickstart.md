---
title: Início Rápido para Discussões do GitHub
intro: 'Enable {% data variables.product.prodname_discussions %} on an existing repository or organization and start conversations with your community.'
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

## Enabling {% data variables.product.prodname_discussions %} on your organization

Organization owners can enable {% data variables.product.prodname_discussions %} for their organization.

{% data reusables.discussions.about-organization-discussions %}

{% data reusables.discussions.enabling-or-disabling-github-discussions-for-your-organization %}

## Dar as boas-vindas às contribuições para as suas discussões

You can welcome your community and introduce a new way to communicate in a repository or organization by creating a welcome post and pinning the post to your {% data variables.product.prodname_discussions %} page. Fixar e bloquear discussões ajuda as pessoas a saber que uma publicação é feita como um anúncio. Você pode usar os anúncios como uma forma de vincular pessoas a mais recursos e oferecer orientação para abrir discussões na sua comunidade. For more information about pinning a discussion, see "[Managing discussions](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion)."


## Configurar diretrizes da comunidade para colaboradores

For repository discussions, you can set contributing guidelines to encourage collaborators to have meaningful, useful conversations that are relevant to the repository. Você também pode atualizar o README do repositório para comunicar as expectativas quando os colaboradores devem abrir um problema ou discussão. Para obter mais informações sobre como fornecer diretrizes para o seu projeto, consulte "[Adicionar um código de conduta ao seu projeto](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)" e "[Configurar seu projeto para contribuições saudáveis](/communities/setting-up-your-project-for-healthy-contributions)".

For organization discussions, you share information about how to engage with your organization by creating an organization profile README. Para obter mais informações, consulte "[Personalizar o perfil da sua organização](/organizations/collaborating-with-groups-in-organizations/customizing-your-organizations-profile)".

## Criar uma nova discussão

Any authenticated user who can view the repository can create a discussion in that repository. Similarly, since organization discussions are based on a source repository, any authenticated user who can view the source repository can create a discussion in that organization.

{% data reusables.discussions.starting-a-discussion %}

## Creating a new poll

Any authenticated user who can view a repository can create a poll. Similarly, since organization discussions are based on a source repository, any authenticated user who can view the source repository can create a poll in that organization.

{% data reusables.discussions.starting-a-poll %}

## Organizando discussões

Repository owners and people with write access to the repository can create new categories to keep discussions organized. Similarly, since organization discussions are based on a source repository, repository owners and people with write access to the source repository can create new categories for organization discussions.

Os colaboradores que participam e criam novas discussões podem agrupar discussões nas categorias existentes mais relevantes. As discussões também podem ser recategorizadas depois que forem criadas. For more information, see "[Managing categories for discussions](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions)."

{% data reusables.discussions.you-can-label-discussions %}

## Promover conversas saudáveis

People with write permissions for the repository, or for the source repository for organization discussions, can help surface important conversations by pinning discussions, deleting discussions that are no longer useful or are damaging to the community, and transferring discussions to more relevant repositories owned by the organization. For more information, see "[Managing discussions](/discussions/managing-discussions-for-your-community/managing-discussions)."

People with triage permissions for the repository, or for the source repository for organization discussions, can help moderate a project's discussions by marking comments as answers, locking discussions that are no longer useful or are damaging to the community, and converting issues to discussions when an idea is still in the early stages of development. Para obter mais informações, consulte "[Moderação de discussões](/discussions/managing-discussions-for-your-community/moderating-discussions)".

## Próximas etapas

Uma vez traçado um caminho claro para o definir o escopo do trabalho, deve-se concretizar a ideia. você pode criar um problema e começar a acompanhar seu progresso. Para obter mais informações sobre a criação de um problema a partir de uma discussão, consulte "[Moderar discussões](/discussions/managing-discussions-for-your-community/moderating-discussions)".
