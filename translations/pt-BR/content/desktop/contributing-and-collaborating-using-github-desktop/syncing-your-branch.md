---
title: Sincronizar o branch
intro: 'Uma vez feito o push dos commits para o seu projeto em {% data variables.product.prodname_dotcom %}, você poderá manter sua cópia local do projeto sincronizada puxando do repositório remoto.'
redirect_from:
  - /desktop/contributing-to-projects/syncing-your-branch
versions:
  free-pro-team: '*'
---

### Sobre a sincronização do branch

Você pode sincronizar o seu branch local com o repositório remoto, puxando quaisquer commits adicionados ao branch no {% data variables.product.product_name %} desde a última vez que você sincronizou. Se você fizer commits de outro dispositivo ou se várias pessoas contribuem para um projeto, você precisará sincronizar seu branch local para mantê-lo atualizado.

Quando você puxa para o branch local, você só atualiza sua cópia local do repositório. Para atualizar o seu branch em {% data variables.product.prodname_dotcom %}, você deve fazer push das suas alterações. Para obter mais informações, consulte "[Enviar alterações para o {% data variables.product.prodname_dotcom %}](/desktop/contributing-to-projects/pushing-changes-to-github)".

Para adicionar alterações de um branch para outro branch, você fazer merge dos branches. Para aplicar as alterações ao seu branch a partir de outro branch no mesmo repositório, você pode fazer o merge do outro branch no seu branch no {% data variables.product.prodname_desktop %}. Para solicitar que as alterações do seu branch sejam mescladas em outro branch, no mesmo repositório ou em outro repositório na rede, você pode criar um pull request no {% data variables.product.prodname_desktop %}. Para obter mais informações, consulte "[Mesclar outro branch no seu seu branch de projeto](#merging-another-branch-into-your-project-branch)e "[Sobre pull requests](/github/collaborating-with-issues-and-pull-requests/about-pull-requests)".

Alguns fluxos de trabalho exigem ou beneficiam-se da rebase em vez de merge. Ao fazer o rebase, é possível reordenar, editar ou juntar commits. Para obter mais informações, consulte "[Sobre o rebase do Git](/articles/about-git-rebase)" e "[Fazer rebase do branch do projeto em outro branch](#rebasing-your-project-branch-onto-another-branch)".

### Puxar para o seu branch local a partir do remoto

1. Em {% data variables.product.prodname_desktop %}, use o menu suspenso {% octicon "git-branch" aria-label="The branch icon" %} **Branch atual** e selecione o branch local que deseja atualizar.
2.  Para verificar se há commits no branch remoto, clique em **Buscar origem** ![Botão Fetch origin (Fetch de origem)](/assets/images/help/desktop/fetch-button.png)
3. Para extrair quaisquer commits do branch remoto, clique em **Extrair origem** ou **Extrair origem com rebase**. ![Botão Pull origin (Origem do pull)](/assets/images/help/desktop/pull-button.png)
{% data reusables.desktop.resolve-merge-conflicts %}

### Fazer merge de outro branch no branch do projeto

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.choose-a-branch-to-merge %}
{% data reusables.desktop.confirm-merging-branch %}

   {% note %}

   **Observação:** se houver conflitos de merge, o {% data variables.product.prodname_desktop %} enviará uma notificação acima do botão **Merge <em>BRANCH</em> into <em>BRANCH</em>** (Fazer merge de branch em branch). Não será possível fazer merge dos branches até a solução de todos os conflitos.

   {% endnote %}

   ![Botão Merge](/assets/images/help/desktop/merge-branch-button.png)
{% data reusables.desktop.push-origin %}

### Fazer rebase entre o branch do projeto e outro branch

{% mac %}

1. Na barra de menu, use o menu suspenso **Branch** e clique em **Fazer rebase do branch atual**. ![Rebase do branch atual na lista suspensa de branches](/assets/images/help/desktop/mac-rebase-current-branch.png)
2. Clique no branch desejado para fazer rebase com o branch atual. Em seguida, clique em **Start rebase** (Iniciar rebase). ![Botão Start rebase (Iniciar rebase)](/assets/images/help/desktop/start-rebase-button.png)
3. Se tiver certeza da operação de rebase, clique em **Begin rebase** (Começar rebase). ![Botão Begin rebase (Começar rebase)](/assets/images/help/desktop/begin-rebase-button.png)
{% data reusables.desktop.resolve-merge-conflicts %}
4. Para fazer push das alterações locais, clique em **Origem do push forçado**. ![Force push origin (Forçar push de origem)](/assets/images/help/desktop/force-push-origin.png)

{% endmac %}

{% windows %}

1. Use o menu suspenso **Branch** e clique em **Rebase Current Branch** (Fazer rebase do branch atual). ![Rebase do branch atual na lista suspensa de branches](/assets/images/help/desktop/windows-rebase-current-branch.png)
2. Clique no branch desejado para fazer rebase com o branch atual. Em seguida, clique em **Start rebase** (Iniciar rebase). ![Botão Start rebase (Iniciar rebase)](/assets/images/help/desktop/start-rebase-button.png)
3. Se tiver certeza da operação de rebase, clique em **Begin rebase** (Começar rebase). ![Botão Begin rebase (Começar rebase)](/assets/images/help/desktop/begin-rebase-button.png)
{% data reusables.desktop.resolve-merge-conflicts %}
4. Para fazer push das alterações locais, clique em **Force push origin** (Forçar push da origem). ![Force push origin (Forçar push de origem)](/assets/images/help/desktop/force-push-origin.png)

{% endwindows %}

### Leia mais
- "[Pull](/github/getting-started-with-github/github-glossary#pull)" no glossário {% data variables.product.prodname_dotcom %}
- "[Merge](/github/getting-started-with-github/github-glossary#merge)" no glossário de {% data variables.product.prodname_dotcom %}
- "[Rebase](/github/getting-started-with-github/github-glossary#rebase)" no glossário de {% data variables.product.prodname_dotcom %}
