---
title: Sincronizar o branch
intro: 'Ao enviar commits para o seu projeto no {% data variables.product.prodname_dotcom %}, é possível manter uma cópia local do projeto sincronizada com o repositório remote.'
versions:
  free-pro-team: '*'
---

Sincronize o branch local com o repositório remote para ver outros commits que possam ter sido adicionados ao branch upstream desde a [criação do branch original](/desktop/guides/contributing-to-projects/managing-branches).

### Atualizar o branch local

1. No {% data variables.product.prodname_desktop %}, alterne para o branch local que você pretende atualizar clicando em {% octicon "git-branch" aria-label="The branch icon" %} **Current Branch** (Branch atual). Em seguida, selecione o branch na lista.
2. Clique em **Fetch origin** (Fetch de origem) para atualizar o branch. ![Botão Fetch origin (Fetch de origem)](/assets/images/help/desktop/fetch-button.png)
3. Se houver commits no branch remote, será possível enviá-los clicando em **Pull origin** (Enviar origem) ou **Pull origin with rebase** (Enviar origem com rebase). ![Botão Pull origin (Origem do pull)](/assets/images/help/desktop/pull-button.png)
{% data reusables.desktop.resolve-merge-conflicts %}

### Fazer merge entre o branch do projeto e outro branch

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.choose-a-branch-to-merge %}
{% data reusables.desktop.confirm-merging-branch %}

   {% note %}

   **Observação:** se houver conflitos de merge, o {% data variables.product.prodname_desktop %} enviará uma notificação acima do botão **Merge <em>BRANCH</em> into <em>BRANCH</em>** (Fazer merge de branch em branch). Não será possível fazer merge dos branches até a solução de todos os conflitos.

   {% endnote %}

   ![Botão Merge](/assets/images/help/desktop/merge-branch-button.png)
{% data reusables.desktop.push-origin %}

### Fazer rebase entre o branch do projeto e outro branch
Alguns fluxos de trabalho exigem ou preferem o rebasing ao merging. Ao fazer o rebase, é possível reordenar, editar ou juntar commits. Para obter mais informações, consulte "[Rebase no Git](/articles/about-git-rebase)".

1. Use o menu suspenso **Branch** e clique em **Rebase Current Branch** (Fazer rebase do branch atual). ![Rebase do branch atual na lista suspensa de branches](/assets/images/help/desktop/rebase-current-branch.png)
2. Clique no branch desejado para fazer rebase com o branch atual. Em seguida, clique em **Start rebase** (Iniciar rebase). ![Botão Start rebase (Iniciar rebase)](/assets/images/help/desktop/start-rebase-button.png)
3. Se tiver certeza da operação de rebase, clique em **Begin rebase** (Começar rebase). ![Botão Begin rebase (Começar rebase)](/assets/images/help/desktop/begin-rebase-button.png)
{% data reusables.desktop.resolve-merge-conflicts %}
4. Para fazer push das alterações locais, clique em **Force push origin** (Forçar push da origem). ![Force push origin (Forçar push de origem)](/assets/images/help/desktop/force-push-origin.png)
