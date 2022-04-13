---
title: Moderar discussões
intro: 'Você pode promover uma colaboração saudável marcando comentários como respostas, bloqueando ou desbloqueando discussões, convertendo problemas para discussões, bem como e editar ou excluir comentários, discussões e categorias que não estão alinhadas com o código de conduta da sua comunidade.'
permissions: People with triage access to a repository can moderate discussions in the repository. People with triage access to the source repository for organization discussions can moderate discussions in the organization.
versions:
  fpt: '*'
  ghec: '*'
---


## Sobre a moderação de discussões

{% data reusables.discussions.about-discussions %} If you have triage permissions for a repository, you can help moderate a repository's discussions by marking comments as answers, locking discussions that are not longer useful or are damaging to the community, and converting issues to discussions when an idea is still in the early stages of development. Similarly, if you have triage permission for the source repository for organization discussions, you can moderate discussions for that organization.

## Marcar um comentário como uma resposta

{% data reusables.discussions.marking-a-comment-as-an-answer %}

## Bloquear discussões

É apropriado bloquear uma conversa quando toda a conversa não é construtiva ou quando viola o código de conduta da sua comunidade ou as [Diretrizes da Comunidade](/free-pro-team@latest/github/site-policy/github-community-guidelines) de {% data variables.product.prodname_dotcom %}. Você também pode bloquear uma conversa para evitar comentários em uma discussão que você deseja usar como um anúncio para a comunidade. When you lock a conversation, people with write access to the repository, or source repository for organization discussions, will still be able to comment on the discussion.

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.discussions.discussions-tab %}
1. Na lista de discussões, clique na discussão que você deseja bloquear. ![Bloquear discussão](/assets/images/help/discussions/unanswered-discussion.png)
1. Na margem direita de uma discussão, clique em **Bloquear conversa**.
1. Leia as informações sobre bloqueio de conversas e clique em **Bloquear conversa nesta discussão**.
1. Quando estiver pronto para desbloquear a conversa, clique em **Desbloquear conversa** e, em seguida, clique em **desbloquear conversa nesta discussão**.

## Converter um problema em uma discussão

Ao converter um problema em uma discussão, a discussão será criada automaticamente usando o conteúdo do problema. People with write access to a repository, or source repository for organization discussions, can bulk convert issues based on labels. For more information, see "[Managing discussions](/discussions/managing-discussions-for-your-community/managing-discussions)."

{% data reusables.discussions.navigate-to-repo-or-org %}
{% data reusables.repositories.sidebar-issues %}
1. Na lista de problemas, clique no problema que deseja converter.
1. Na margem direita de um problema, clique em **Converter em discussão**.
1. Selecione o menu suspenso **Escolher uma categoria** e clique em uma categoria para a sua discussão.
1. Clique em **Eu entendo. Converta esse problema em uma discussão**.
