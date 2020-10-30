---
title: Ignorar uma revisão de pull request
intro: 'Se o seu repositório [exige revisões](/articles/about-required-reviews-for-pull-requests), você pode ignorar revisões de pull request que já não sejam mais válidas ou que não tenham sido aprovadas pelo revisor.'
redirect_from:
  - /articles/dismissing-a-pull-request-review
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% data reusables.pull_requests.dismiss_review %}
Isso altera o status da revisão para um comentário de revisão. Quando você ignora uma revisão, deve adicionar um comentário explicando o motivo. Seu comentário será adicionado à conversa da pull request.

{% data reusables.search.requested_reviews_search %}

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}
3. Na guia "Conversation" (Conversa), role até a revisão a ser ignorada e clique em {% octicon "chevron-down" aria-label="The down button" %}. ![Ícone de divisa na caixa de merge](/assets/images/help/pull_requests/merge_box/pull-request-open-menu.png)
4. Clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e depois em **Dismiss review** (Ignorar revisão). ![Ícone de kebab na caixa de merge](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review.png)
5. Digite o motivo para ignorá-la e clique em **Dismiss review** (Ignorar revisão). ![Botão Dismiss review (Ignorar revisão)](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review-button.png)
{% else %}
3. Na guia "Conversation" (Conversa), role até a revisão que deseja ver e clique em **Dismiss review** (Ignorar revisão). ![Opção de ignorar uma revisão](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review.png)
4. Digite o motivo para ignorá-la e clique em **Dismiss review** (Ignorar revisão). ![Botão Dismiss review (Ignorar revisão)](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review-button.png)
{% endif %}

### Leia mais

- "[Sobre revisões de solicitação pull](/articles/about-pull-request-reviews)"
- "[Revisar alterações propostas em uma pull request](/articles/reviewing-proposed-changes-in-a-pull-request)"
- "[Sobre revisões obrigatórias para pull requests](/articles/about-required-reviews-for-pull-requests)"
