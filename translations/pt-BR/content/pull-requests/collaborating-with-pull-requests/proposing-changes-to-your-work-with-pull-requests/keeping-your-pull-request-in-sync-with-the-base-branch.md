---
title: Mantendo o seu pull request em sincronia com o branch de base
intro: 'Após abrir um pull request, você poderá atualizar o branch principal, que contém suas alterações, com todas as alterações que foram feitas no branch de base.'
permissions: People with write permissions to the repository to which the head branch of the pull request belongs can update the head branch with changes that have been made in the base branch.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Atualize o branch principal
---

## Sobre como manter o seu pull request sincronizado

Antes de realizar o merge dos seus pull requests, outras alterações podem sofrer merge no branch de base, fazendo com que o branch de principal do seu pull request não esteja sincronizado. Atualizar o seu pull request com as últimas alterações do branch base pode ajudar a pegar problemas antes do merge.

Você pode atualizar o branch de principal de um pull request na linha de comando ou na página do pull request. O botão **Atualizar branch** é exibido quando todos estes valores são verdadeiros:

* Não há conflitos de merge entre o branch do pull request e o branch de base.
* O branch do pull request não está atualizado com o branch de base.
* O branch de base exige que os branches estejam atualizados antes do merge de{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %} ou que a configuração sempre sugira que a atualização dos branches esteja habilitada{% endif %}.

Para obter mais informações, consulte "[Exigir verificações de status antes do merge](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches){% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}" and "[Gerenciando as sugestões para atualizar os branches do pull request](/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-suggestions-to-update-pull-request-branches){% endif %}."

Se houver alterações no branch de base que causam conflitos de merge no branch do seu pull request, você não poderá atualizar o branch até que todos os conflitos sejam resolvidos. Para obter mais informações, consulte[Sobre conflitos de merge](/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/about-merge-conflicts)."

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}
Na página do pull request é possível atualizar o branch do seu pull request usando um merge tradicional ou de rebase. Um merge tradicional resulta em um commit de merge que faz o merge do branch de base no branch principal do pull request. O rebase aplica as alterações de _seu_ branch na versão mais recente do branch de base. O resultado é um branch com histórico linear, uma vez que nenhum commit de merge foi criado.
{% else %}
A atualização do seu branch a partir da página do pull request executa um merge tradicional. O commit de merge resultante faz o merge do branch de base no branch principal do pull request.
{% endif %}

## Atualizando o branch do seu pull request

{% data reusables.repositories.sidebar-pr %}

1. Na lista "Pull requests", clique no pull request que você deseja atualizar.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}
1. Na seção de merge perto do final da página, você pode:
   - Clique em **Atualizar branch** para executar uma merge tradicional. ![Botão para atualizar o branch](/assets/images/help/pull_requests/pull-request-update-branch-with-dropdown.png)
   - Clique no menu suspenso atualizar branch, clique em **Atualizar com rebase** e, em seguida, clique em **Branch de rebase** para atualizar, baseando-se no branch de base. ![Menu suspenso que mostra opções de merge e rebase](/assets/images/help/pull_requests/pull-request-update-branch-rebase-option.png)
{% else %}
1. Na seção "Merge" perto do final da página, clique em **Atualizar branch** para executar uma merge tradicional. ![Botão para atualizar o branch](/assets/images/help/pull_requests/pull-request-update-branch.png)
{% endif %}

## Leia mais

- "[Sobre pull requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
- "[Alterando o estado de um pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)"
- "[Fazer commit de alterações em um branch da pull request criado de uma bifurcação](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/committing-changes-to-a-pull-request-branch-created-from-a-fork)"
