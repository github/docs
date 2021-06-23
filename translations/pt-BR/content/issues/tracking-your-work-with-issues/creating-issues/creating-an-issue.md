---
title: Criar um problema
intro: 'Os problemas podem ser usados para acompanhar erros, aprimoramentos ou outras solicitações.'
permissions: People with read permissions can create an issue in a repository where issues are enabled.
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-an-issue
  - /articles/creating-an-issue
  - /github/managing-your-work-on-github/creating-an-issue
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pull requests
---

Você pode abrir um novo problema com base no código de uma pull request existente. Para obter mais informações, consulte "[Abrir um problema a partir de código](/github/managing-your-work-on-github/opening-an-issue-from-code)".

Você pode abrir um novo problema diretamente de um comentário em um problema ou uma revisão de pull request. Para obter mais informações, consulte "[Abrir um problema a partir de um comentário](/github/managing-your-work-on-github/opening-an-issue-from-a-comment)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% tip %}

**Dica**: Você também pode criar um problema usando o {% data variables.product.prodname_cli %}. Para obter mais informações, consulte "[`gh issue create`](https://cli.github.com/manual/gh_issue_create)" na documentação do {% data variables.product.prodname_cli %}.

{% endtip %}
{% endif %}

Se estiver usando um quadro de projeto para rastrear e priorizar seu trabalho, você poderá converter observações do quadro de projeto em problemas. Para obter mais informações, consulte "[Sobre quadros de projeto](/github/managing-your-work-on-github/about-project-boards)" e "[Adicionando observações a um quadro de projeto](/github/managing-your-work-on-github/adding-notes-to-a-project-board#converting-a-note-to-an-issue)".

{% tip %}

**Dicas**: mantenedores de projeto podem optar por:
  - Criar um modelo de problema para um repositório. Os modelos incluem solicitações por informações no texto de um problema. Para obter mais informações, consulte "[Sobre modelos de problema e pull request](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)".
  - Desabilitar problemas para um repositório. Para obter mais informações, consulte "[Desabilitar problemas](/github/managing-your-work-on-github/disabling-issues)". As pull requests não podem ser desativadas e estão sempre disponíveis.

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issues %}
3. Clique em **New issue** (Novo problema). ![Botão New Issues (Novos problemas)](/assets/images/help/issues/new_issues_button.png)
4. Se houver vários tipos de problema, clique em **Get started** (Introdução) ao lado do tipo de problema que deseja abrir. ![Selecionar o tipo de problema que você quer criar](/assets/images/help/issues/issue_template_get_started_button.png)
{% if currentVersion == "free-pro-team@latest" or currentVersion >= "enterprise-server@2.21" %}
5. Opcionalmente, clique em **Abrir um problema em branco.** se o tipo de problema que você gostaria de abrir não estiver incluído nas opções disponíveis. ![Link para abrir um problema em branco](/assets/images/help/issues/blank_issue_link.png)
{% else %}
5. Opcionalmente, clique em **Abrir um problema regular** se o tipo de problema que você gostaria de abrir não estiver incluído nas opções disponíveis. ![Link para abrir um problema regular](/assets/images/help/issues/regular_issue_link.png)
{% endif %}
{% data reusables.repositories.type-issue-title-and-description %}
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}
{% data reusables.repositories.submit-new-issue %}
### Leia mais

- "[Escrevendo no GitHub](/github/writing-on-github)"
