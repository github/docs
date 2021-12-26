---
title: Sobre revisões de pull request
intro: 'As revisões permitem que colaboradores comentem sobre as alterações propostas em pull requests, aprovem as alterações ou solicitem outras alterações antes do merge da pull request. Os administradores do repositório podem exigir que todas as pull requests sejam aprovadas antes de sofrerem o merge.'
redirect_from:
  - /articles/about-pull-request-reviews
  - /github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---
### Sobre revisões de pull request

Após a abertura de uma pull request, qualquer pessoa com acesso *de leitura* pode revisar e comentar nas alterações que ela propõe. Você também pode sugerir alterações específicas às linhas de código, que o autor pode aplicar diretamente a partir da pull request. Para obter mais informações, consulte "[Revisar alterações propostas em uma pull request](/articles/reviewing-proposed-changes-in-a-pull-request)".

Os proprietários de repositório e colaboradores podem solicitar uma revisão de pull request de uma pessoa específica. Os integrantes da organização também podem solicitar uma revisão de pull request de uma equipe com acesso de leitura ao repositório. Para obter mais informações, consulte "[Solicitar uma revisão de pull request](/articles/requesting-a-pull-request-review)". {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2. 9" %}Você pode especificar um subconjunto de integrantes da equipe a ser atribuído automaticamente no lugar de toda a equipe. Para obter mais informações, consulte "[Gerenciando a responsabilidade pela revisão de código para sua equipe](/organizations/organizing-members-into-teams/managing-code-review-assignment-for-your-team)."{% endif %}

As revisões permitem discussão das alterações propostas e ajudam a garantir que as alterações atendam às diretrizes de contribuição do repositório e outros padrões de qualidade. Você pode definir quais indivíduos ou equipes possuem determinados tipos de área de código em um arquivo CODEOWNERS. Quando uma pull request modifica código que tem um proprietário definido, esse indivíduo ou equipe será automaticamente solicitado como um revisor. Para obter mais informações, consulte "[Sobre proprietários de código](/articles/about-code-owners/)".

{% if currentVersion == "free-pro-team@latest" %}Você pode agendar lembretes para pull requests que deve ser revisados. Para obter mais informações, consulte "[Gerenciando os lembretes agendados para pull request](/github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-pull-requests)."{% endif %}

![Header de revisão solicitando alterações com comentários em linha](/assets/images/help/pull_requests/review-header-with-line-comment.png)

Uma revisão tem três status possíveis:
- **Comment** (Comentar): envie feedback genérico sem aprovar explicitamente as alterações nem solicitar alterações adicionais.
- **Approve** (Aprovar): envie feedback e aprove o merge das alterações propostas na pull request.
- **Request changes** (Solicitar alterações): envie feedback que deve ser cumprido para que a pull request possa sofrer merge.

![Imagem de status de revisão](/assets/images/help/pull_requests/pull-request-review-statuses.png)

{% data reusables.repositories.request-changes-tips %}

Você pode exibir todas as revisões que uma pull request recebeu na linha do tempo Conversation (Conversa), assim como pode ver revisões por proprietários e colaboradores de repositório na caixa de merge da pull request.

![Imagem de revisões em uma caixa de merge](/assets/images/help/pull_requests/merge_box/pr-reviews-in-merge-box.png)

{% data reusables.search.requested_reviews_search_tip %}

{% data reusables.pull_requests.resolving-conversations %}

### Ressolicitar uma revisão

{% data reusables.pull_requests.re-request-review %}

### Revisões obrigatórias

{% data reusables.pull_requests.required-reviews-for-prs-summary %} Para obter mais informações, consulte "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)".

{% tip %}

**Dica**: se necessário, as pessoas com acesso de *administrador* ou *gravação* a um repositório podem ignorar uma revisão de pull request. Para obter mais informações, consulte "[Ignorar uma revisão de pull request](/articles/dismissing-a-pull-request-review)".

{% endtip %}

### Leia mais

- "[Revisar alterações propostas em uma pull request](/articles/reviewing-proposed-changes-in-a-pull-request)"
- "[Exibir uma revisão de pull request](/articles/viewing-a-pull-request-review)"
- "[Configurar diretrizes para os contribuidores do repositório](/articles/setting-guidelines-for-repository-contributors)"
