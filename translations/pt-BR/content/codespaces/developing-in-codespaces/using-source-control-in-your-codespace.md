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
1. No menu, clique em **Configurações**.
1. Na página de configurações, pesquise por: `Autofetch`. ![Pesquisar por busca automática](/assets/images/help/codespaces/autofetch-search.png)
1. Para buscar os detalhes das atualizações para todos os controles remotos registrados no repositório atual, defina **Git: Autofetch** como `todos`. ![Habilite a busca automática do Git](/assets/images/help/codespaces/autofetch-all.png)
1. Se você deseja alterar o número de segundos entre cada busca automática, edite o valor de **Git: Período de Autofetch**.

### Fazendo commit das suas alterações

{% data reusables.codespaces.source-control-display-dark %}
1. Para testar suas alterações, clique  **+** ao lado do arquivo que você alterou, ou ao lado de **Alterações** se você mudou vários arquivos e quiser testar todos. ![Barra lateral de controle de origem com botão de staging destacado](/assets/images/help/codespaces/codespaces-commit-stage.png)
1. Digite uma mensagem do commit que descreve a alteração que você fez. ![Barra lateral do controle de origem com uma mensagem de commit](/assets/images/help/codespaces/codespaces-commit-commit-message.png)
1. Para fazer commit das alterações em fase de preparação, clique na marca de seleção na parte superior da barra lateral de controle de origem. ![Clique no ícone da marca de verificação](/assets/images/help/codespaces/codespaces-commit-checkmark-icon.png)

### Abrindo um pull request

1. Depois de realizar alterações na sua cópia local do repositório, clique no ícone **Criar Pull Request**. ![Barra lateral de controle de origem com botão de staging destacado](/assets/images/help/codespaces/codespaces-commit-pr-button.png)
1. Verifique se o branch local e o repositório do qual você está fazendo merge, o branch remoto e o repositório no qual você está fazendo merge estão corretos. Em seguida, dê ao pull request um título e uma descrição. ![Barra lateral de controle de origem com botão de staging destacado](/assets/images/help/codespaces/codespaces-commit-pr.png)
1. Clique em **Criar**.

### Fazer push das alterações para o seu repositório remoto

Você pode fazer push das alterações que fez. Isso aplica essas alterações ao branch upstream no repositório remoto. Você pode querer fazer isso se ainda não estiver pronto para criar um pull request, ou se você preferir criar um pull request em {% data variables.product.prodname_dotcom %}.

1. Na parte superior da barra lateral, clique na elipse (**...**). ![Botão Elipsis para visualizar e mais ações](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)
1. No menu suspenso, clique em **Push**.
