---
title: Paleta de comando do GitHub
intro: 'Use a paleta de comandos em {% data variables.product.product_name %} para navegar, pesquisar e executar comandos diretamente do seu teclado.'
versions:
  feature: command-palette
shortTitle: GitHub Command Palette
ms.openlocfilehash: 5c6b739f2422be780cef6fa0e44e5d75663cc036
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159050'
---
{% data reusables.command-palette.beta-note %}

## Sobre a {% data variables.product.prodname_command_palette %}

Você pode navegar, pesquisar e executar comandos em {% data variables.product.product_name %} com o {% data variables.product.prodname_command_palette %}. A paleta de comandos é uma forma personalizada de mostrar sugestões com base no seu contexto atual e nos recursos que você usou recentemente. Você pode abrir a paleta de comandos com um atalho de teclado de qualquer lugar em {% data variables.product.product_name %}, que economiza tempo e mantém as mãos no teclado.

### Navegação rápida

Ao abrir a paleta de comandos, as sugestões são otimizadas para facilitar o acesso de qualquer lugar em um repositório, uma conta pessoal, ou uma organização para páginas de nível superior, como a página Problemas. Se o local que você deseja não estiver listado, comece a digitar o nome ou número para a localização refinar as sugestões.

![Sugestões da paleta de comandos](/assets/images/help/command-palette/command-palette-navigation-repo-default.png)

### Acesso fácil aos comandos

A capacidade de executar comandos diretamente do seu teclado, sem navegar por meio de uma série de menus pode alterar a forma como você usa {% data variables.product.prodname_dotcom %}. Por exemplo, você pode alternar temas com algumas teclas pressionadas, facilitando a alternância entre temas à medida que as suas necessidades forem mudando.

![Alterar tema da paleta de comandos](/assets/images/help/command-palette/command-palette-command-change-theme.png)

## Como abrir a {% data variables.product.prodname_command_palette %}

Abra a paleta de comandos usando um dos seguintes atalhos padrão do teclado:
- Windows e Linux: <kbd>CTRL</kbd>+<kbd>K</kbd> ou <kbd>CTRL</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd>
- Mac: <kbd>Comando</kbd>+<kbd>K</kbd> ou <kbd>Comando</kbd>+<kbd>Opção</kbd>+<kbd>K</kbd>

Você pode personalizar os atalhos de teclado usados para abrir a paleta de comandos na [seção Acessibilidade](https://github.com/settings/accessibility) das configurações do usuário. Para obter mais informações, confira "[Como personalizar seus atalhos de teclado da {% data variables.product.prodname_command_palette %}](#customizing-your-github-command-palette-keyboard-shortcuts)".

Quando você abrir a paleta de comandos, ela mostra sua localização no canto superior esquerdo e a usa como o escopo de sugestões (por exemplo, a organização `mashed-avocado`).

![Lançamento da paleta de comando](/assets/images/help/command-palette/command-palette-launch.png)

{% note %}

**Observações:**
- Se você estiver editando um texto Markdown, abra a paleta de comandos com <kbd>CTRL</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd> (Windows e Linux) ou <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>K</kbd> (Mac).{% ifversion projects-v2 %}
- Se você estiver trabalhando em um {% data variables.projects.project_v2 %}, uma paleta de comandos específica do projeto será exibida. Para obter mais informações, confira "[Personalizar uma exibição](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view)".{% endif %}

{% endnote %}

### Personalizando seus atalhos de teclado de {% data variables.product.prodname_command_palette %}


Os atalhos de teclado padrão usados para abrir a paleta de comandos podem entrar em conflito com os atalhos de teclado padrão do sistema operacional e do navegador. Você tem a opção de personalizar os atalhos de teclado na [seção Acessibilidade](https://github.com/settings/accessibility) das configurações da conta. Nas configurações da paleta de comandos, você pode personalizar os atalhos de teclado para abrir a paleta de comandos em modo de pesquisa e modo de comando. 

![Configurações de atalho da paleta de teclado](/assets/images/help/command-palette/command-palette-keyboard-shortcut-settings.png)
## Navegando com {% data variables.product.prodname_command_palette %}

Você pode usar a paleta de comandos para navegar para qualquer página que você tenha acesso em {% data variables.product.product_name %}.

{% data reusables.command-palette.open-palette %}

2. Comece a digitar o caminho para o qual você deseja navegar. As sugestões na paleta de comandos são alteradas para corresponder ao seu texto.

   ![Escopo atual da paleta de navegação](/assets/images/help/command-palette/command-palette-navigation-current-scope.png)

{% data reusables.command-palette.change-scope %}

   Você também pode usar teclas pressionadas para restringir a sua pesquisa. Para obter mais informações, confira "[Funções de pressionamento de tecla](#keystroke-functions)".

4. Termine de inserir no caminho ou use as teclas de seta para destacar o caminho que você deseja a partir da lista de sugestões.

5. Use <kbd>ENTER</kbd> para ir para o local escolhido. Como alternativa, use <kbd>CTRL</kbd>+<kbd>ENTER</kbd> (Windows e Linux) ou <kbd>Comando</kbd>+<kbd>ENTER</kbd> (Mac) para abrir o local em uma nova guia do navegador.

## Pesquisando com {% data variables.product.prodname_command_palette %}

Você pode usar a paleta de comandos para pesquisar qualquer coisa em {% data variables.location.product_location %}.

{% data reusables.command-palette.open-palette %}

{% data reusables.command-palette.change-scope %}

3. Opcionalmente, use teclas pressionadas para encontrar tipos específicos de recursos:

   - <kbd>#</kbd> Pesquisar problemas, solicitações de pull, discussões e projetos
   - <kbd>!</kbd> Pesquisar projetos
   - <kbd>@</kbd> Pesquisar usuários, organizações e repositórios
   - <kbd>/</kbd> Pesquisar arquivos no escopo de um repositório

   ![Arquivos de pesquisa da paleta de comando](/assets/images/help/command-palette/command-palette-search-files.png)

4. Comece a inserir seus termos de pesquisa. A paleta de comandos irá oferecer um intervalo de pesquisas sugeridas com base no seu escopo de pesquisa.

   {% tip %}

   Você também pode usar a sintaxe completa da pesquisa integrada de {% data variables.product.prodname_dotcom %} dentro da paleta de comando. Para obter mais informações, confira "[Como fazer pesquisas de informações no {% data variables.product.prodname_dotcom %}](/search-github)".

   {% endtip %}

5. Use as teclas de direção para realçar o resultado da pesquisa desejado e <kbd>ENTER</kbd> para ir ao local escolhido. Como alternativa, use <kbd>CTRL</kbd>+<kbd>ENTER</kbd> (Windows e Linux) ou <kbd>Comando</kbd>+<kbd>ENTER</kbd> (Mac) para abrir o local em uma nova guia do navegador.

## Executando comandos a partir de {% data variables.product.prodname_command_palette %}

Você pode usar o {% data variables.product.prodname_command_palette %} para executar comandos. Por exemplo, você pode criar um novo repositório ou problema ou alterar seu tema. Quando você executa um comando, o local para sua ação é determinado pela página subjacente ou pelo escopo mostrado na paleta de comandos.

- Os comandos de pull request e problemas sempre são executados na página subjacente.
- Os comandos de alto nível, por exemplo, comandos de repositório, são executados no escopo exibido na paleta de comandos.

Para ver uma lista completa de comandos compatíveis, confira "[Referência da {% data variables.product.prodname_command_palette %}](#github-command-palette-reference)".

1. Os atalhos de teclado padrão usados para abrir a paleta de comandos no modo de comando são <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>K</kbd> (Windows e Linux) ou <kbd>Comando</kbd>+<kbd>SHIFT</kbd>+<kbd>K</kbd> (Mac). Se você já tiver a paleta de comandos aberta, pressione <kbd>></kbd> para alternar para o modo de comando. {% data variables.product.prodname_dotcom %} sugere comandos baseados na sua localização.

   ![Modo de comando da paleta de comando](/assets/images/help/command-palette/command-palette-command-mode.png)

{% data reusables.command-palette.change-scope %}

3. Se o comando que você deseja não for exibido, verifique seu escopo e, em seguida, comece a digitar o nome do comando na caixa de texto.

4. Use as teclas de direção para realçar o comando desejado e <kbd>ENTER</kbd> para executá-lo.


## Fechando a paleta de comandos

Quando a paleta de comando está ativa, você pode usar um dos seguintes atalhos de teclado para fechar a paleta de comandos:

- Modo de pesquisa e navegação: <kbd>Esc</kbd> ou <kbd>CTRL</kbd>+<kbd>K</kbd> (Windows e Linux) <kbd>Comando</kbd>+<kbd>K</kbd> (Mac)
- Modo de comando: <kbd>Esc</kbd> ou <kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>K</kbd> (Windows e Linux)  <kbd>Comando</kbd>+<kbd>SHIFT</kbd>+<kbd>K</kbd> (Mac)

Se você tiver personalizado os atalhos da paleta de comandos nas configurações de acessibilidade, seus atalhos de teclado personalizados serão usados tanto para abrir quanto para fechar a paleta de comandos.  

## Referência de {% data variables.product.prodname_command_palette %}

### Funções de keystrokes

Essas keystrokes estão disponíveis quando a paleta de comandos está nos modos de navegação e pesquisa, isto é, elas não estão disponíveis no modo de comando.

| Teclas | Função |
| :- | :- |
|<kbd>></kbd>| Entre no modo de comando. Para obter mais informações, confira "[Como executar comandos na {% data variables.product.prodname_command_palette %}](#running-commands-from-the-github-command-palette)". |
|<kbd>#</kbd>| Pesquisa problemas, pull requests, discussões e projetos. Para obter mais informações, confira "[Como fazer pesquisas com a {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette)".|
|<kbd>@</kbd>| Pesquisa usuários, organizações e repositórios. Para obter mais informações, confira "[Como fazer pesquisas com a {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette)".|
|<kbd>/</kbd>| Pesquisar arquivos dentro de um escopo ou repositórios do repositório dentro do escopo da organização. Para obter mais informações, confira "[Como fazer pesquisas com a {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette)". |
|<kbd>!</kbd>| Pesquisar apenas projetos. Para obter mais informações, confira "[Como fazer pesquisas com a {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette)".|
|<kbd>CTRL</kbd>+<kbd>C</kbd> ou <kbd>Comando</kbd>+<kbd>C</kbd>| Copiar URL de pesquisa ou navegação para o resultado destacado na área de transferência.|
|<kbd>Enter</kbd>| Pule para o resultado destacado ou execute o comando destacado.|
|<kbd>CTRL</kbd>+<kbd>ENTER</kbd> ou <kbd>Comando</kbd>+<kbd>ENTER</kbd>| Abra o resultado da pesquisa ou navegação destacada em uma nova aba do navegador.|
|<kbd>?</kbd>| Exibir ajuda na paleta de comandos.|

### Comandos globais

Estes comandos estão disponíveis em todos os escopos.

| Comando | Comportamento|
| :- | :- | :- |
|`Import repository`|Criar um novo repositório importando um projeto de outro sistema de controle de versão. Para obter mais informações, confira "[Como importar um repositório com o importador do GitHub](/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer)".  |
|`New gist`|Abra um novo gist. Para obter mais informações, confira "[Como criar um gist](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)". |
|`New organization`|Criar uma nova organização Para obter mais informações, confira "[Como criar uma organização do zero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)". |
|`New project`|Criar um novo quadro de projeto. Para obter mais informações, confira "[Como criar um projeto](/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project)".  |
|`New repository`|Criar um novo repositório a partir do zero. Para obter mais informações, confira "[Como criar um repositório](/repositories/creating-and-managing-repositories/creating-a-new-repository)". |
|`Switch theme to <theme name>`|Mude diretamente para um tema diferente para a interface do usuário. Para obter mais informações, confira "[Como gerenciar suas configurações de tema](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-your-theme-settings)". |


### Comandos da organização

Esses comandos estão disponíveis somente dentro do escopo de uma organização.

| Comando | Comportamento|
| :- | :- |
| `New team`| Crie uma nova equipe na organização atual. Para obter mais informações, confira "[Como criar uma equipe](/organizations/organizing-members-into-teams/creating-a-team)".

### Comandos do repositório

A maioria desses comandos está disponível apenas na página inicial do repositório. Se um comando também estiver disponível em outras páginas, isso será mencionado na coluna de comportamento.

| Comando | Comportamento|
| :- | :- |
|`Clone repository: <URL type>`|Copie a URL necessária para clonar o repositório usando {% data variables.product.prodname_cli %}, HTTP ou SSH para a área de transferência. Para obter mais informações, confira "[Como clonar um repositório](/repositories/creating-and-managing-repositories/cloning-a-repository)".|
|`New discussion`|Criar uma nova discussão no repositório. Para obter mais informações, confira "[Como criar um repositório](/discussions/quickstart#creating-a-new-discussion)".|
|`New file`|Criar um novo arquivo a partir de qualquer página no repositório. Para obter mais informações, confira "[Como adicionar um arquivo a um repositório](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)".
|`New issue`|Abra um novo problema de qualquer página no repositório. Para obter mais informações, confira "[Como criar um problema](/issues/tracking-your-work-with-issues/creating-an-issue)".|
|`Open in new codespace`|Criar e abrir um codespace para este repositório. Para obter mais informações, confira "[Como criar um codespace para um repositório](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)".|
|`Open in github.dev editor`|Abra o repositório atual no editor github.dev. Para obter mais informações, confira "[Como abrir o editor baseado na Web](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor)".|

### Comandos de arquivos

Estes comandos só estão disponíveis quando você abre a paleta de comandos a partir de um arquivo em um repositório.

| Comando | Comportamento|
| :- | :- |
|`Copy permalink`|Crie um link para o arquivo que inclui o atual commit SHA e copie o link para a área de transferência. Para obter mais informações, confira "[Como obter links permanentes para arquivos](/repositories/working-with-files/using-files/getting-permanent-links-to-files#press-y-to-permalink-to-a-file-in-a-specific-commit)".
|`Open in github.dev editor`|Abra o arquivo exibido atualmente no editor github.dev. Para obter mais informações, confira "[Como abrir o editor baseado na Web](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor)".|

### Comandos de discussão

Estes comandos só estão disponíveis quando você abre a paleta de comandos em uma discussão. Eles atuam na sua página atual e não são afetados pelo escopo definido na paleta de comando.

| Comando | Comportamento|
| :- | :- |
|`Delete discussion...`|Excluir permanentemente a discussão. Para obter mais informações, confira "[Gerenciar discussões](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion)".
|`Edit discussion body`|Abra o texto principal da discussão que está pronto para edição.
|`Subscribe`/`unsubscribe`|Opte por participar ou não receber notificações de adições à discussão. Para obter mais informações, confira "[Sobre as notificações](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)".
|`Transfer discussion...`|Mover a discussão para um repositório diferente. Para obter mais informações, confira "[Gerenciar discussões](/discussions/managing-discussions-for-your-community/managing-discussions#transferring-a-discussion)".

### Comandos de problemas

Estes comandos estão disponíveis somente quando você abre a paleta de comandos em um problema. Eles atuam na sua página atual e não são afetados pelo escopo definido na paleta de comando.

| Comando | Comportamento|
| :- | :- |
|`Close`/`reopen issue`|Fechar ou reabrir o problema atual. Para obter mais informações, confira "[Sobre os problemas](/issues/tracking-your-work-with-issues/about-issues)".|
|`Convert issue to discussion...`|Converter o problema atual em uma discussão. Para obter mais informações, confira "[Como moderar discussões](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)".
|`Delete issue...`|Exclua o problema atual. Para obter mais informações, confira "[Como excluir um problema](/issues/tracking-your-work-with-issues/deleting-an-issue)".|
|`Edit issue body`|Abra o texto principal do problema que está pronto para edição.
|`Edit issue title`|Abra o título do problema que está pronto para edição.
|`Lock issue`|Limitar novos comentários a usuários com acesso de gravação ao repositório. Para obter mais informações, confira "[Como bloquear conversas](/communities/moderating-comments-and-conversations/locking-conversations)".
|`Pin`/`unpin issue`|Altere se o problema é exibido ou não na seção de problemas fixados para o repositório. Para obter mais informações, confira "[Como fixar um problema no seu repositório](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)".|
|`Subscribe`/`unsubscribe`|Opte por partiricpar ou não receber notificações de alterações nesse problema. Para obter mais informações, confira "[Sobre as notificações](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)".
|`Transfer issue...`|Transferir o problema para outro repositório. Para obter mais informações, confira "[Como transferir um problema para outro repositório](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository)".|

### Comandos de pull request

Estes comandos só estão disponíveis quando você abre a paleta de comandos a partir de um pull request. Eles atuam na sua página atual e não são afetados pelo escopo definido na paleta de comando.

| Comando | Comportamento|
| :- | :- |
|`Close`/`reopen pull request`|Feche ou reabra o pull request atual. Para obter mais informações, confira "[Sobre as solicitações de pull](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)".|
|`Convert to draft`/`Mark pull request as ready for review`|Altere o estado do pull request para mostrá-lo como pronto ou não pronto para revisão. Para obter mais informações, confira "[Como alterar o estado de uma solicitação de pull](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)".|
|`Copy current branch name`| Adicione o nome do branch principal ao pull request na área de transferência.
|`Edit pull request body`|Abra o texto principal do pull request que está pronto para edição.
|`Edit pull request title`|Abra o título do pull request que está pronto para edição.
|`Open in new codespace`|Crie e abra um codespace para o branch principal do pull request. Para obter mais informações, confira "[Como criar um codespace para um repositório](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)".
|`Subscribe`/`unsubscribe`|Opte por receber ou não receber notificações para alterações desse pull request. Para obter mais informações, confira "[Sobre as notificações](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)".
|`Update current branch`|Atualize o branch principal do pull request com alterações do branch base. Isso só está disponível para pull requests que apontam para o branch padrão do repositório. Para obter mais informações, confira "[Sobre os branches](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)".|
