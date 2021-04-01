---
title: Ignorar uma revisão de pull request
intro: 'Se seu repositório exigir revisões, você poderá descartar revisões de pull request que não são mais válidas ou não podem ser aprovadas pelo revisor.'
redirect_from:
  - /articles/dismissing-a-pull-request-review
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

{% data reusables.pull_requests.dismiss_review %}
Isso altera o status da revisão para um comentário de revisão. Quando você ignora uma revisão, deve adicionar um comentário explicando o motivo. Seu comentário será adicionado à conversa da pull request.

{% data reusables.search.requested_reviews_search %}

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
3. Na guia "Conversation" (Conversa), role até a revisão a ser ignorada e clique em {% octicon "chevron-down" aria-label="The down button" %}. ![Ícone de divisa na caixa de merge](/assets/images/help/pull_requests/merge_box/pull-request-open-menu.png)
4. Clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e depois em **Dismiss review** (Ignorar revisão). ![Ícone de kebab na caixa de merge](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review.png)
5. Digite o motivo para ignorá-la e clique em **Dismiss review** (Ignorar revisão). ![Botão Dismiss review (Ignorar revisão)](/assets/images/help/pull_requests/merge_box/pull-request-dismiss-review-button.png)

### Leia mais

- "[Sobre revisões de solicitação pull](/articles/about-pull-request-reviews)"
- "[Revisar alterações propostas em uma pull request](/articles/reviewing-proposed-changes-in-a-pull-request)"
- "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)"
