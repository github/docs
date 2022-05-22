---
title: Usando controle de origem no seu codespace
intro: 'Depois de fazer alterações em um arquivo no seu código, você pode fazer um commit rápido das alterações e fazer push da sua atualização para o repositório remoto.'
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

{% data reusables.codespaces.release-stage %}

### Sobre o controle de origem em {% data variables.product.prodname_codespaces %}

Você pode executar todas as ações do Git necessárias diretamente no seu codespace. Por exemplo, é possível obter alterações do repositório remoto, alternar os branches, criar um novo branch, fazer commit, fazer push e criar um pull request. Você pode usar o terminal integrado dentro do seu codespace para inserir nos comandos do Git, ou você pode clicar em ícones e opções de menu para realizar todas as tarefas mais comuns do Git. Este guia explica como usar a interface gráfica de usuário para controle de origem.

O controle de origem em {% data variables.product.prodname_github_codespaces %} usa o mesmo fluxo de trabalho que {% data variables.product.prodname_vscode %}. Para obter mais informações, consulte a documentação {% data variables.product.prodname_vscode %}"[Usando Controle de Versão no Código VS](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)".

Um fluxo de trabalho típico para atualizar um arquivo que usa {% data variables.product.prodname_github_codespaces %} seria:

* A partir do branch padrão do seu repositório em {% data variables.product.prodname_dotcom %}, crie um codespace. Consulte "[Criando um codespace](/codespaces/developing-in-codespaces/creating-a-codespace)".
* No seu código, crie uma nova agência para trabalhar.
* Faça suas alterações e salve-as.
* Faça commit da alteração.
* Abra um pull request.

### Criar ou trocar de branches

1. Se o branch atual não for mostrado na barra de status, na parte inferior do seu codespace, clique com o botão direito na barra de status e selecione **Controle de origem**.
1. Clique no nome do branch na barra de status. ![O branch na barra de status](/assets/images/help/codespaces/branch-in-status-bar.png)
1. No menu suspenso, clique no branch para o qual você deseja alternar ou digite o nome de um novo branch e clique em **Criar novo branch**. ![Escolha no menu do branch](/assets/images/help/codespaces/create-new-branch.png)

{% tip %}

**Dica**: Se alguém alterou um arquivo no repositório remoto, no branch para o qual você mudou, você não verá essas alterações até você fazer pull das alterações no seu codespace.

{% endtip %}

### Fazer pull das alterações do repositório remoto

Você pode fazer pull das alterações do repositório remoto para seu codespace a qualquer momento.

{% data reusables.codespaces.source-control-display-dark %}
1. Na parte superior da barra lateral, clique na elipse (**...**). ![Botão Elipsis para visualizar e mais ações](/assets/images/help/codespaces/source-control-ellipsis-button.png)
1. No menu suspenso, clique em **Pull**.

Se um contêiner de desenvolvimento foi alterado desde que você criou o codespace, você poderá aplicar as alterações reconstruindo o contêiner para o codespace. Para obter mais informações, consulte "[Configurar codespaces para o seu projeto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-changes-to-your-configuration)".

### Configurar o seu codespace para buscar novas alterações automaticamente

É possível definir seu codespace para obter automaticamente os detalhes de quaisquer novos commits que tenham sido criados no repositório remoto. Isso permite que você veja se sua cópia local do repositório está desatualizada. Nesse caso, você pode optar por fazer pull das novas alterações.

Se a operação de busca detectarem novas alterações no repositório remoto, você verá o número de novos commits na barra de status. Você pode fazer pull das alterações para a sua cópia local.

1. Clique no botão **Gerenciar** na parte inferior da barra de atividades. ![Botão Gerenciar](/assets/images/help/codespaces/manage-button.png)
1. In the menu, slick **Settings**.
1. On the Settings page, search for: `autofetch`. ![Search for autofetch](/assets/images/help/codespaces/autofetch-search.png)
1. To fetch details of updates for all remotes registered for the current repository, set **Git: Autofetch** to `all`. ![Enable Git autofetch](/assets/images/help/codespaces/autofetch-all.png)
1. If you want to change the number of seconds between each automatic fetch, edit the value of **Git: Autofetch Period**.

### Committing your changes

{% data reusables.codespaces.source-control-display-dark %}
1. To stage your changes, click  **+** next to the file you've changed, or next to **Changes** if you've changed multiple files and you want to stage them all. ![Source control side bar with staging button highlighted](/assets/images/help/codespaces/codespaces-commit-stage.png)
1. Type a commit message describing the change you've made. ![Source control side bar with a commit message](/assets/images/help/codespaces/codespaces-commit-commit-message.png)
1. To commit your staged changes, click the check mark at the top the source control side bar. ![Click the check mark icon](/assets/images/help/codespaces/codespaces-commit-checkmark-icon.png)

### Raising a pull request

1. After you've committed changes to your local copy of the repository, click the **Create Pull Request** icon. ![Source control side bar with staging button highlighted](/assets/images/help/codespaces/codespaces-commit-pr-button.png)
1. Check that the local branch and repository you're merging from, and the remote branch and repository you're merging into, are correct. Then give the pull request a title and a description. ![Source control side bar with staging button highlighted](/assets/images/help/codespaces/codespaces-commit-pr.png)
1. Clique em **Criar**.

### Pushing changes to your remote repository

You can push the changes you've made. This applies those changes to the upstream branch on the remote repository. You might want to do this if you're not yet ready to create a pull request, or if you prefer to create a pull request on {% data variables.product.prodname_dotcom %}.

1. Na parte superior da barra lateral, clique na elipse (**...**). ![Botão Elipsis para visualizar e mais ações](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)
1. In the drop-down menu, click **Push**.
