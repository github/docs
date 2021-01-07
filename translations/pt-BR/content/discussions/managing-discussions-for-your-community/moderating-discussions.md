---
title: Moderar discussões
intro: 'Você pode promover uma colaboração saudável marcando comentários como respostas, bloqueando ou desbloqueando discussões, e convertendo problemas em discussões. e editando ou excluindo comentários, discussões e categorias que não estão alinhadas com o código de conduta da sua comunidade referente às discussões.'
permissions: Pessoas com acesso de triagem a um repositório podem moderar as discussões no repositório.
versions:
  free-pro-team: '*'
---

{% data reusables.discussions.beta %}

### Sobre a moderação de discussões

{% data reusables.discussions.about-discussions %} Se você tiver permissões de triagem para um repositório, você poderá ajudar a moderar as discussões de um projeto marcando comentários como respostas, bloqueando discussões que não são mais úteis ou que prejudicam a comunidade e convertendo os problemas em discussões quando uma ideia ainda está nos primeiros estágios de desenvolvimento.

### Marcar um comentário como uma resposta

{% data reusables.discussions.marking-a-comment-as-an-answer %}

### Bloquear discussões

É apropriado bloquear uma conversa quando toda a conversa não é construtiva ou quando viola o código de conduta da sua comunidade ou as [Diretrizes da Comunidade](/github/site-policy/github-community-guidelines) de {% data variables.product.prodname_dotcom %}. Você também pode bloquear uma conversa para evitar comentários em uma discussão que você deseja usar como um anúncio para a comunidade. Ao bloquear uma conversa, as pessoas com acesso de gravação ao repositório ainda poderão comentar na discussão.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.discussions.discussions-tab %}
1. Na lista de discussões, clique na discussão que você deseja bloquear. ![Bloquear discussão](/assets/images/help/discussions/unanswered-discussion.png)
1. Na margem direita de uma discussão, clique em **Bloquear conversa**.
1. Leia as informações sobre bloqueio de conversas e clique em **Bloquear conversa nesta discussão**.
1. Quando estiver pronto para desbloquear a conversa, clique em **Desbloquear conversa** e, em seguida, clique em **desbloquear conversa nesta discussão**.

### Converter um problema em uma discussão

Ao converter um problema em uma discussão, a discussão será criada automaticamente usando o conteúdo do problema. As pessoas com acesso de gravação a um repositório podem fazer a conversão de problemas em massa com base em etquetas. Para obter mais informações, consulte "[Gerenciar discussões no seu repositório](/discussions/managing-discussions-for-your-community/managing-discussions-in-your-repository)".

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
1. Na lista de problemas, clique no problema que deseja converter.
1. Na margem direita de um problema, clique em **Converter em discussão**.
1. Selecione o menu suspenso **Escolher uma categoria** e clique em uma categoria para a sua discussão.
1. Clique em **Eu entendo. Converta esse problema em uma discussão**.
