---
title: Gerenciar branches
intro: Você pode criar um branch fora do branch-padrão de um repositório para poder experimentar as alterações com segurança.
redirect_from:
  - /desktop/contributing-to-projects/creating-a-branch-for-your-work
  - /desktop/contributing-to-projects/switching-between-branches
  - /desktop/contributing-to-projects/managing-branches
versions:
  free-pro-team: '*'
---

### Sobre o gerenciamento de branches
Você pode usar os branches para experimentar com segurança as alterações no seu projeto. Os branches isolam seu trabalho de desenvolvimento de outros branches do repositório. Por exemplo, você poderia usar um branch para desenvolver um novo recurso ou corrigir um erro.

Você sempre cria um branch a partir de um branch existente. Normalmente, você pode criar um branch a partir do branch-padrão do seu repositório. Você então poderá trabalhar nesse novo branch isolado das mudanças que outras pessoas estão fazendo no repositório.

Quando estiver satisfeito com seu trabalho, você poderá criar um pull request para fazer merge nas suas alterações no branch atual em outro branch. Para obter mais informações, consulte "[Criar um problema ou pull request](/desktop/contributing-to-projects/creating-an-issue-or-pull-request)" e "[Sobre pull requests](/articles/about-pull-requests)".

É sempre possível criar um branch no {% data variables.product.prodname_desktop %}, se tiver acesso de leitura a um repositório, mas você só pode fazer push do branch para o {% data variables.product.prodname_dotcom %} se você tiver acesso de gravação no repositório.

{% data reusables.desktop.protected-branches %}

### Criar um branch

{% tip %}

**Dica:** O primeiro branch que você criar será baseado no branch-padrão. Se você tiver mais de um branch, você pode escolher basear o novo branch no branch atualmente verificado ou no branch-padrão.

{% endtip %}

{% mac %}

{% data reusables.desktop.click-base-branch-in-drop-down %}
  ![Menu suspenso para alternar o branch atual](/assets/images/help/desktop/select-branch-from-dropdown.png)
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

### Publicar um branch

Se você criar um branch no {% data variables.product.product_name %}, você deverá publicá-lo para disponibilizá-lo para colaboração no {% data variables.product.prodname_dotcom %}.

1. Na parte superior do aplicativo, clique em {% octicon "git-branch" aria-label="The branch icon" %} **Branch atual** e, em seguida, clique no branch que você deseja publicar. ![Menu suspenso para selecionar qual branch publicar](/assets/images/help/desktop/select-branch-from-dropdown.png)
2. Clique em **Publicar branch**. ![Botão de publicar branch](/assets/images/help/desktop/publish-branch-button.png)

### Alternar entre branches
É possível exibir e fazer commits em qualquer branch do seu repositório. Se houver alterações salvas sem commit, você terá que decidir o que fazer com elas antes de poder alternar entre os branches. Você pode fazer o commit das alterações no branch atual, ocultar as suas alterações para salvá-las temporariamente no branch atual ou trazer as mudanças para seu novo branch. Se você deseja confirmar suas alterações antes de alternar os branches, consulte "[Fazer commit e revisar as alterações do seu projeto](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)."
{% tip %}

**Dica**: Você pode definir um comportamento-padrão para alternar branches nas configurações **Avançadas**. Para obter mais informações, consulte "[Definindo as configurações básicas](/desktop/getting-started-with-github-desktop/configuring-basic-settings)".

{% endtip %}

{% data reusables.desktop.current-branch-menu %}
{% data reusables.desktop.switching-between-branches %}
  ![Lista de branches no repositório](/assets/images/help/desktop/select-branch-from-dropdown.png)
3. Se você tiver alterações salvas sem commit, escolha entre **Leave my changes** (Deixar as alterações) ou **Bring my changes** (Levar as alterações) e clique em **Switch Branch** (Alternar branch). ![Alternar branch com opções de alteração](/assets/images/help/desktop/stash-changes-options.png)

### Excluir um branch

Não é possível excluir um branch se ele estiver atualmente associado a uma pull request aberta. Não é possível desfazer a exclusão de um branch.

{% mac %}

{% data reusables.desktop.select-branch-to-delete %}
  ![Menu suspenso para selecionar qual branch deseja excluir](/assets/images/help/desktop/select-branch-from-dropdown.png)
{% data reusables.desktop.delete-branch-mac %}
  ![Excluir... opção no menu do branch](/assets/images/help/desktop/delete-branch-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.select-branch-to-delete %}
  ![Menu suspenso para selecionar qual branch deseja excluir](/assets/images/help/desktop/select-branch-from-dropdown.png)
{% data reusables.desktop.delete-branch-win %}
  ![Excluir... opção no menu do branch](/assets/images/help/desktop/delete-branch-win.png)

{% endwindows %}

### Leia mais

- "[Clonar um repositório no {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)"
- "[Branch](/articles/github-glossary/#branch)" no glossário do {% data variables.product.prodname_dotcom %}
- "[Sobre branches](/articles/about-branches)"
- "[Branches em um Nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)" na documentação do Git
- "[Ocultar as alterações](/desktop/contributing-and-collaborating-using-github-desktop/stashing-changes)
