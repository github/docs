---
title: Abrindo um problema a partir de um comentário
intro: É possível abrir um problema novo a partir de um comentário específico em um problema ou uma pull request.
permissions: 'Pessoas com permissões de leitura podem criar um problema em um repositório onde os problemas estão habilitados.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Quando você abre um problema a partir de um comentário, o problema contém um trecho mostrando onde o comentário foi originalmente publicado.

{% data reusables.repositories.administrators-can-disable-issues %}

1. Navegue até o comentário no qual deseja abrir um problema.

2. No comentário, clique em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.![Botão de kebab no comentário de revisão de pull request](/assets/images/help/pull_requests/kebab-in-pull-request-review-comment.png)
3. Clique em **Reference in new issue** (Referência em um novo problema). ![Item de menu Reference in new issue (Referência em um novo problema)](/assets/images/help/pull_requests/reference-in-new-issue.png)
4. Use o menu suspenso "Repository" (Repositório) para selecionar o repositório em que deseja abrir o problema. ![Menu suspenso Repository (Repositório) para o novo problema](/assets/images/help/pull_requests/new-issue-repository.png)
5. Digite um título descritivo e o texto do problema. ![Título e texto do novo problema](/assets/images/help/pull_requests/new-issue-title-and-body.png)
6. Clique em **Create issue** (Criar problema). ![Botão para criar novo problema](/assets/images/help/pull_requests/create-issue.png)
{% data reusables.repositories.assign-an-issue-as-project-maintainer %}

### Leia mais

- "[Criar um problema](/github/managing-your-work-on-github/creating-an-issue)"
