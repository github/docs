---
title: Alterar o stage de uma pull request
intro: 'Você pode marcar um rascunho de pull request como pronto para a revisão{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 0" %} ou converter um pull request em um rascunho{% endif %}.'
permissions: Pessoas com permissões de gravação em um repositório e autores de pull request podem alterar o stage de uma pull request.
product: '{% data reusables.gated-features.draft-prs %}'
redirect_from:
  - /articles/changing-the-stage-of-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Marcando uma pull request como pronta para revisão

{% data reusables.pull_requests.mark-ready-review %}

{% data reusables.repositories.sidebar-pr %}
2. Na lista "Pull requests", clique na pull request que deseja marcar como pronta para revisão.
3. Na caixa de merge, clique em **Pronto para revisar**. ![Botão Ready for review (Pronta para revisão)](/assets/images/help/pull_requests/ready-for-review-button.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}

### Convertendo uma pull request em rascunho

Você pode converter uma pull request em rascunho a qualquer momento. Por exemplo, se você abriu uma pull request acidentalmente em vez de um rascunho, ou se você recebeu feedback sobre sua pull request que precisa ser resolvida, você pode converter a pull request em um rascunho para indicar outras mudanças necessárias. Ninguém poderá fazer o merge da pull request até que você marque a pull request como pronta para revisão novamente. Pessoas que já estão inscritas em notificações para a pull request não serão descadastradas quando você converter a pull request em um rascunho.

{% data reusables.repositories.sidebar-pr %}
2. Na lista "Pull Requests", clique na pull request que deseja converter em rascunho.
3. Na barra lateral direita, em "Revisores", clique em **Converter para rascunho**. ![Converter para link de rascunho](/assets/images/help/pull_requests/convert-to-draft-link.png)
4. Clique em **Converter para rascunho**. ![Converter para confirmação de rascunho](/assets/images/help/pull_requests/convert-to-draft-dialog.png)

{% endif %}

### Leia mais

- "[Sobre pull requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)"
