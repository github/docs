---
title: Sobre revisões de pull request
intro: 'As revisões permitem que colaboradores comentem sobre as alterações propostas em pull requests, aprovem as alterações ou solicitem outras alterações antes do merge da pull request. Os administradores do repositório podem exigir que todas as pull requests sejam aprovadas antes de sofrerem o merge.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
  - /articles/about-pull-request-reviews
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Sobre revisões de PR
---

## Sobre revisões de pull request

Após a abertura de uma pull request, qualquer pessoa com acesso *de leitura* pode revisar e comentar nas alterações que ela propõe. Você também pode sugerir alterações específicas às linhas de código, que o autor pode aplicar diretamente a partir da pull request. Para obter mais informações, consulte "[Revisar alterações propostas em uma pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)".

{% if pull-request-approval-limit %}{% data reusables.pull_requests.code-review-limits %}{% endif %}

Os proprietários de repositório e colaboradores podem solicitar uma revisão de pull request de uma pessoa específica. Os integrantes da organização também podem solicitar uma revisão de pull request de uma equipe com acesso de leitura ao repositório. Para obter mais informações, consulte "[Solicitar uma revisão de pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review)". {% ifversion fpt or ghae or ghes or ghec %}Você pode especificar um subconjunto de integrantes da equipe que será automaticamente responsável no lugar de toda a equipe. Para obter mais informações, consulte "[Gerenciando configurações de revisão de código para sua equipe](/organizations/organizing-members-into-teams/managing-code-review-settings-for-your-team)".{% endif %}

Reviews allow for discussion of proposed changes and help ensure that the changes meet the repository's contributing guidelines and other quality standards. You can define which individuals or teams own certain types or areas of code in a CODEOWNERS file. When a pull request modifies code that has a defined owner, that individual or team will automatically be requested as a reviewer. For more information, see "[About code owners](/articles/about-code-owners/)."

{% ifversion fpt or ghec %}You can schedule reminders for pull requests that need to be reviewed. For more information, see "[Managing scheduled reminders for pull requests](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)."{% endif %}

![Header of review requesting changes with line comments](/assets/images/help/pull_requests/review-header-with-line-comment.png)

A review has three possible statuses:
- **Comment** (Comentar): envie feedback genérico sem aprovar explicitamente as alterações nem solicitar alterações adicionais.
- **Approve** (Aprovar): envie feedback e aprove o merge das alterações propostas na pull request.
- **Request changes** (Solicitar alterações): envie feedback que deve ser cumprido para que a pull request possa sofrer merge.

![Image of review statuses](/assets/images/help/pull_requests/pull-request-review-statuses.png)

{% data reusables.repositories.request-changes-tips %}

You can view all of the reviews a pull request has received in the Conversation timeline, and you can see reviews by repository owners and collaborators in the pull request's merge box.

![Image of reviews in a merge box](/assets/images/help/pull_requests/merge_box/pr-reviews-in-merge-box.png)

{% data reusables.search.requested_reviews_search_tip %}

{% data reusables.pull_requests.resolving-conversations %}

## Ressolicitar uma revisão

{% data reusables.pull_requests.re-request-review %}

## Revisões obrigatórias

{% data reusables.pull_requests.required-reviews-for-prs-summary %} For more information, see "[About protected branches](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)."

{% tip %}

**Tip**: If necessary, people with *admin* or *write* access to a repository can dismiss a pull request review. Para obter mais informações, consulte "[Ignorar uma revisão de pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)".

{% endtip %}

## Leia mais

- "[Revisando alterações propostas em uma pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request)"
- "[Exibir uma revisão de pull request](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/viewing-a-pull-request-review)"
- "[Configurar diretrizes para os contribuidores do repositório](/articles/setting-guidelines-for-repository-contributors)"
