---
title: Fazer merge de uma pull request
intro: Faça merge de uma pull request no branch upstream quando o trabalho estiver finalizado. Qualquer pessoa com acesso push no repositório pode completar o merge.
redirect_from:
  - /articles/merging-a-pull-request
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Sobre merges de pull request

Em uma pull request, você propõe que as alterações feitas em um branch head sejam mescladas em um branch base. Por padrão, qualquer pull request pode sofrer merge a qualquer momento, a menos que o branch head esteja em conflito com o branch base. No entanto, pode haver restrições sobre quando você puder fazer merge de um pull request em um branch específico. Por exemplo, você só pode fazer merge de um pull request no branch-padrão se as verificações de status necessárias forem aprovadas. Para obter mais informações, consulte "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches)".

{% data reusables.pull_requests.you-can-auto-merge %}

Se a pull request apresenta conflitos de merges ou se você deseja testar as alterações antes de fazer merge, é possível [fazer checkout da pull request localmente](/articles/checking-out-pull-requests-locally) e fazer merge usando a linha de comando.

Você não pode realizar o merge de um rascunho de um pull request. Para obter mais informações sobre pull requests em rascunho, consulte "[Sobre pull requests](/articles/about-pull-requests#draft-pull-requests)".

{% data reusables.pull_requests.automatically-delete-branches %}

Se decidir que não quer que as alterações em um branch de tópico sofram merge no branch upstream, é possível [fechar a pull request](/articles/closing-a-pull-request) sem fazer merge.

### Fazer merge de uma pull request no {% data variables.product.prodname_dotcom %}

{% data reusables.repositories.sidebar-pr %}
2. Na lista "Pull Requests", clique na pull request da qual deseja fazer merge.
3. Dependendo das opções de merge habilitadas em seu repositório, é possível:
    - [Fazer merge de todos os commits no branch de base](/articles/about-pull-request-merges/) ao clicar em **Merge pull request** (Fazer merge de pull request). Se a opção **Merge pull request** (Fazer merge da pull request) não está visível, clique no menu suspenso merge e selecione **Create a merge commit** (Criar um commit de merge). ![botão-merge-pull-request](/assets/images/help/pull_requests/pullrequest-mergebutton.png)
    - [Combinar por squash os commits em um único commit](/articles/about-pull-request-merges/#squash-and-merge-your-pull-request-commits) ao clicar no menu suspenso merge, selecionar **Squash and merge** (Combinar por squash e fazer merge) e clicar no botão **Squash and merge** (Combinar por squash e fazer merge). ![botão-clicar-squash-e-merge](/assets/images/help/pull_requests/select-squash-and-merge-from-drop-down-menu.png)
    - [Fazer rebase dos commits individualmente no branch de base](/articles/about-pull-request-merges/#rebase-and-merge-your-pull-request-commits) ao clicar no menu suspenso merge, selecionar **Rebase and merge** (Fazer rebase e merge) e clicar no botão **Rebase and merge** (Fazer rebase e merge). ![selecionar-rebase-e-merge-no-menu-suspenso](/assets/images/help/pull_requests/select-rebase-and-merge-from-drop-down-menu.png)

    {% note %}

    **Observação:** rebase e merge sempre atualização as informações do committer e criarão SHAs de commit novos. Para obter mais informações, consulte "[Sobre merges de pull request](/articles/about-pull-request-merges#rebase-and-merge-your-pull-request-commits)".

    {% endnote %}
4. Se solicitado, digite uma mensagem do commit ou aceite a mensagem padrão.

   {% data reusables.pull_requests.default-commit-message-squash-merge %}
   ![Campo Commit message (Mensagem do commit)](/assets/images/help/pull_requests/merge_box/pullrequest-commitmessage.png)

{% data reusables.files.choose-commit-email %}

   {% note %}

   **Observação:** O seletor de e-mail não está disponível para merge de rebase, que não cria um commit de merge, ou para merge de combinação por squash, que credita o usuário que criou a pull request como o autor do commit cuja combinação foi feita por squash.

   {% endnote %}

6. Clique em **Confirm merge** (Confirmar merge), **Confirm squash and merge** (Confirmar combinação por squash e merge) ou **Confirm rebase and merge** (Confirmar rebase e merge).
6. Opcionalmente, [exclua o branch](/articles/deleting-unused-branches). Assim, a lista de branches do repositório ficará limpa.

O repositório pode ser configurado para que o branch principal de um pull request seja excluído automaticamente quando você faz o merge de um pull request. Para obter mais informações, consulte "[Gerenciar a exclusão automática de branches](/github/administering-a-repository/managing-the-automatic-deletion-of-branches)".

   {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
   {% note %}

   **Observação**: {% data reusables.pull_requests.retargeted-on-branch-deletion %} Para obter mais informações, consulte "[Sobre branches](/github/collaborating-with-issues-and-pull-requests/about-branches#working-with-branches)".

   {% endnote %}
   {% endif %}

As pull requests sofrem merge com [a opção`--no-ff`](https://git-scm.com/docs/git-merge#_fast_forward_merge), exceto pelas
pull requests com commits com combinação por squash ou com rebase/<2>, que passam por merge com a opção fast-forward.</p> 

{% data reusables.pull_requests.close-issues-using-keywords %}



### Leia mais

- "[Reverter uma pull request](/articles/reverting-a-pull-request)"
- "[Sincronizar seu branch](/desktop/guides/contributing-to-projects/syncing-your-branch/)" usando o {% data variables.product.prodname_desktop %}
- "[Sobre merges de pull request](/articles/about-pull-request-merges)"
- "[Solucionar conflitos de merge](/articles/addressing-merge-conflicts)"
