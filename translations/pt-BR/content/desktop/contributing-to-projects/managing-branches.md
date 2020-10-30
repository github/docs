---
title: Managing branches
intro: You can create a branch off of a repository's default branch so you can safely experiment with changes.
redirect_from:
  - /desktop/contributing-to-projects/creating-a-branch-for-your-work
  - /desktop/contributing-to-projects/switching-between-branches
versions:
  free-pro-team: '*'
---

### About managing branches
You can use branches to safely experiment with changes to your project. Branches isolate your development work from other branches in the repository. For example, you could use a branch to develop a new feature or fix a bug.

You always create a branch from an existing branch. Typically, you might create a branch from the `master` branch of your repository. You can then work on this new branch in isolation from changes that other people are making to the repository.

Once you're satisfied with your work, you can [open a pull request](/desktop/contributing-to-projects/creating-an-issue-or-pull-request) to merge the changes in the current branch into another branch. Para obter mais informações, consulte "[Sobre pull requests](/articles/about-pull-requests)".

You can always create a branch in {% data variables.product.prodname_desktop %} if you have read access to a repository, but you can only push the branch to {% data variables.product.prodname_dotcom %} if you have write access to the repository.

{% data reusables.desktop.protected-branches %}

### Criar um branch

{% tip %}

**Dica:** o primeiro branch que você criar terá como base o branch padrão, que costuma ser `master`. If you have more than one branch, you can choose to base the new branch on the currently checked out branch or the default branch.

{% endtip %}

{% mac %}

{% data reusables.desktop.click-base-branch-in-drop-down %}
  ![Menu suspenso para alternar o branch atual](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
{% data reusables.desktop.create-new-branch %}
  ![Opção New Branch (Novo branch) no menu Branch](/assets/images/help/desktop/new-branch-button-mac.png)
{% data reusables.desktop.name-branch %}
  ![Campo para criar um nome para o novo branch](/assets/images/help/desktop/create-branch-name-mac.png)
{% data reusables.desktop.select-base-branch %}
  ![Opções do branch base](/assets/images/help/desktop/create-branch-choose-branch-mac.png)
{% data reusables.desktop.confirm-new-branch-button %}
  ![Botão Create Branch (Criar branch)](/assets/images/help/desktop/create-branch-button-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.click-base-branch-in-drop-down %}
  ![Menu suspenso para alternar o branch atual](/assets/images/help/desktop/click-branch-in-drop-down-win.png)
{% data reusables.desktop.create-new-branch %}
  ![Opção New Branch (Novo branch) no menu Branch](/assets/images/help/desktop/new-branch-button-win.png)
{% data reusables.desktop.name-branch %}
  ![Campo para criar um nome para o novo branch](/assets/images/help/desktop/create-branch-name-win.png)
{% data reusables.desktop.select-base-branch %}
  ![Opções do branch base](/assets/images/help/desktop/create-branch-choose-branch-win.png)
{% data reusables.desktop.confirm-new-branch-button %}
  ![Botão Create branch (Criar branch)](/assets/images/help/desktop/create-branch-button-win.png)

{% endwindows %}

### Alternar entre branches
É possível exibir e fazer commits em qualquer branch do seu repositório. Se houver alterações salvas sem commit, você terá que decidir o que fazer com elas antes de poder alternar entre os branches. Você pode fazer commit das alterações no branch atual, armazená-las no branch atual ou levá-las para o novo branch. Se optar por fazer commit das alterações no branch atual, siga as etapas indicadas em "[Fazer commit e revisar as alterações do projeto](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)" antes de alternar entre os branches.

{% tip %}

**Dica**: Você pode definir um comportamento-padrão para alternar branches nas configurações **Avançadas**. For more information, see "[Configuring basic settings](/desktop/getting-started-with-github-desktop/configuring-basic-settings)."

{% endtip %}

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.switching-between-branches %}
  ![Lista de branches no repositório](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
3. Se você tiver alterações salvas sem commit, escolha entre **Leave my changes** (Deixar as alterações) ou **Bring my changes** (Levar as alterações) e clique em **Switch Branch** (Alternar branch). ![Alternar branch com opções de alteração](/assets/images/help/desktop/stash-changes-options.png)

### Recuperar alterações stashed
Para acessar as alterações com stash em outro branch, volte para o branch em que foi feito o stash das alterações em questão.

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.switching-between-branches %}
  ![Lista de branches no repositório](/assets/images/help/desktop/click-branch-in-drop-down-mac.png)
3. Na barra lateral à esquerda, clique em **Stashed Changes** (Alterações stashed). ![Opção Stashed Changes (Alterações stashed)](/assets/images/help/desktop/stashed-changes.png)
4. Para excluir as alterações stashed, clique em **Discard** (Descartar). Para usá-las, clique em **Restore** (Restaurar). ![Descartar ou restaurar alterações stashed](/assets/images/help/desktop/discard-restore-stash-buttons.png)

### Excluir um branch

You can't delete a branch if it's currently associated with an open pull request. You cannot undo deleting a branch.

{% mac %}

{% data reusables.desktop.select-branch-to-delete %}
  ![Drop-down menu to select which branch to delete](/assets/images/help/desktop/select-branch-to-delete.png)
{% data reusables.desktop.delete-branch-mac %}
  ![Delete... option in the Branch menu](/assets/images/help/desktop/delete-branch-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.select-branch-to-delete %}
  ![Drop-down menu to select which branch to delete](/assets/images/help/desktop/select-branch-to-delete.png)
{% data reusables.desktop.delete-branch-win %}
  ![Delete... option in the Branch menu](/assets/images/help/desktop/delete-branch-win.png)

{% endwindows %}

### Leia mais

- "[Clonar um repositório no {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)"
- "[Branch](/articles/github-glossary/#branch)" no glossário do {% data variables.product.prodname_dotcom %}
- "[Sobre branches](/articles/about-branches)"
- "[Branches em um Nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)" na documentação do Git
