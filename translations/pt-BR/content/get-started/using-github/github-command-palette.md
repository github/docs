---
title: Paleta de comando do GitHub
intro: 'Use a paleta de comandos em {% data variables.product.product_name %} para navegar, pesquisar e executar comandos diretamente do seu teclado.'
versions:
  feature: command-palette
shortTitle: Paleta de comando do GitHub
---

{% data reusables.command-palette.beta-note %}

## Sobre o {% data variables.product.prodname_command_palette %}

Você pode navegar, pesquisar e executar comandos em {% data variables.product.product_name %} com o {% data variables.product.prodname_command_palette %}. A paleta de comandos é uma forma personalizada de mostrar sugestões com base no seu contexto atual e nos recursos que você usou recentemente. Você pode abrir a paleta de comandos com um atalho de teclado de qualquer lugar em {% data variables.product.product_name %}, que economiza tempo e mantém as mãos no teclado.

### Navegação rápida

Ao abrira paleta de comando, as sugestões são otimizadas para facilitar o acesso a partir de qualquer lugar em um repositório, conta pessoal, ou organização para páginas de nível superior, como a página de problemas. Se o local que você deseja não estiver listado, comece a digitar o nome ou número para a localização refinar as sugestões.

![Sugestões da paleta de comandos](/assets/images/help/command-palette/command-palette-navigation-repo-default.png)

### Acesso fácil aos comandos

A capacidade de executar comandos diretamente do seu teclado, sem navegar por meio de uma série de menus pode alterar a forma como você usa {% data variables.product.prodname_dotcom %}. Por exemplo, você pode alternar temas com algumas teclas pressionadas, facilitando a alternância entre temas à medida que as suas necessidades forem mudando.

![Alterar tema da paleta de comandos](/assets/images/help/command-palette/command-palette-command-change-theme.png)

## Abrindo o {% data variables.product.prodname_command_palette %}

Abra a paleta de comandos usando um dos seguintes atalhos padrão do teclado:
- Windows e Linux: <kbd>Ctrl</kbd>+<kbd>K</kbd> or <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd>
- Mac: <kbd>Command</kbd>+<kbd>K</kbd> ou <kbd>Command</kbd>+<kbd>Option</kbd>+<kbd>K</kbd>

Você pode personalizar os atalhos de teclado que você usa para abrir a paleta de comandos na [seção de acessibilidade](https://github.com/settings/accessibility) das suas configurações de usuário. Para obter mais informações, consulte "[Personalizando os seus atalhos do teclado de {% data variables.product.prodname_command_palette %}](#customizing-your-github-command-palette-keyboard-shortcuts)".

Ao abrir a paleta de comando, ela mostra sua localização no canto superior esquerdo e a usa como o escopo de sugestões (por exemplo, a organização `mashed-avocado`).

![Lançamento da paleta de comando](/assets/images/help/command-palette/command-palette-launch.png)

{% note %}

**Notas:**
- Se você estiver editando o texto do Markdown, abra a paleta de comandos com <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>K</kbd> (Windows e Linux) ou <kbd>Comando</kbd>+<kbd>Opção</kbd>+<kbd>K</kbd> (Mac).
- Se você estiver trabalhando em um projeto (beta), uma paleta de comandos específica do projeto será exibida no lugar. Para obter mais informações, consulte "[Personalizar as visualizações do seu projeto (beta)](/issues/trying-out-the-new-projects-experience/customizing-your-project-views)".

{% endnote %}

### Personalizando seus atalhos de teclado de {% data variables.product.prodname_command_palette %}


Os atalhos de teclado padrão usados para abrir a paleta de comandos podem entrar em conflito com os atalhos de teclado padrão do sistema operacional e do navegador. Você tem a opção de personalizar seus atalhos de teclado na [seção de acessibilidade](https://github.com/settings/accessibility) das configurações da sua conta. Nas configurações da paleta de comandos, você pode personalizar os atalhos de teclado para abrir a paleta de comandos em modo de pesquisa e modo de comando.

![Configurações de atalho da paleta de teclado](/assets/images/help/command-palette/command-palette-keyboard-shortcut-settings.png)
## Navegando com {% data variables.product.prodname_command_palette %}

Você pode usar a paleta de comandos para navegar para qualquer página que você tenha acesso em {% data variables.product.product_name %}.

{% data reusables.command-palette.open-palette %}

2. Comece a digitar o caminho para o qual você deseja navegar. As sugestões na paleta de comandos são alteradas para corresponder ao seu texto.

   ![Escopo atual da paleta de navegação](/assets/images/help/command-palette/command-palette-navigation-current-scope.png)

{% data reusables.command-palette.change-scope %}

   Você também pode usar teclas pressionadas para restringir a sua pesquisa. Para obter mais informações, consulte "[Funções de Teclado](#keystroke-functions)".

4. Termine de inserir no caminho ou use as teclas de seta para destacar o caminho que você deseja a partir da lista de sugestões.

5. Use <kbd>Enter</kbd> para pular para o local escolhido. Como alternativa, use <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows e Linux) or <kbd>Command</kbd>+<kbd>Enter</kbd> (Mac) para abrir o local na aba de um novo navegador.

## Pesquisando com {% data variables.product.prodname_command_palette %}

Você pode usar a paleta de comandos para pesquisar qualquer coisa em {% data variables.product.product_location %}.

{% data reusables.command-palette.open-palette %}

{% data reusables.command-palette.change-scope %}

3. Opcionalmente, use teclas pressionadas para encontrar tipos específicos de recursos:

   - <kbd>#</kbd> Pesquisa problemas, pull requests, discussões e projetos
   - <kbd>!</kbd> Pesquisa projetos
   - <kbd>@</kbd> Pesquisa usuários, organizações e repositórios
   - <kbd>/</kbd> Pesquisa arquivos dentro do escopo de um repositório

   ![Arquivos de pesquisa da paleta de comando](/assets/images/help/command-palette/command-palette-search-files.png)

4. Comece a inserir seus termos de pesquisa. A paleta de comandos irá oferecer um intervalo de pesquisas sugeridas com base no seu escopo de pesquisa.

   {% tip %}

   Você também pode usar a sintaxe completa da pesquisa integrada de {% data variables.product.prodname_dotcom %} dentro da paleta de comando. Para obter mais informações, consulte "[Pesquisando informações sobre {% data variables.product.prodname_dotcom %}](/search-github)".

   {% endtip %}

5. Use as setas do teclado para destacar o resultado da pesquisa que você deseja e use <kbd>Enter</kbd> para pular para a localização escolhida. Como alternativa, use <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows e Linux) or <kbd>Command</kbd>+<kbd>Enter</kbd> (Mac) para abrir o local na aba de um novo navegador.

## Executando comandos a partir de {% data variables.product.prodname_command_palette %}

Você pode usar o {% data variables.product.prodname_command_palette %} para executar comandos. Por exemplo, você pode criar um novo repositório ou problema ou alterar seu tema. Quando você executa um comando, o local para sua ação é determinado pela página subjacente ou pelo escopo mostrado na paleta de comandos.

- Os comandos de pull request e problemas sempre são executados na página subjacente.
- Os comandos de alto nível, por exemplo, comandos de repositório, são executados no escopo exibido na paleta de comandos.

Para obter uma lista completa dos comandos compatíveis, consulte "[Referência de {% data variables.product.prodname_command_palette %}](#github-command-palette-reference)".

1. Os atalhos padrão do teclado para abrir a paleta de comandos no modo comando são <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd> (Windows and Linux) ou <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd> (Mac). Se você já tiver a paleta de comandos aberta, pressione <kbd>></kbd> para alternar para o modo de comando. {% data variables.product.prodname_dotcom %} sugere comandos baseados na sua localização.

   ![Modo de comando da paleta de comando](/assets/images/help/command-palette/command-palette-command-mode.png)

{% data reusables.command-palette.change-scope %}

3. Se o comando que você deseja não for exibido, verifique seu escopo e, em seguida, comece a digitar o nome do comando na caixa de texto.

4. Use as setas do teclado para destacar o comando que você deseja e use <kbd>Enter</kbd> para executá-lo.


## Fechando a paleta de comandos

Quando a paleta de comando está ativa, você pode usar um dos seguintes atalhos de teclado para fechar a paleta de comandos:

- Modo de pesquisa e navegação: <kbd>Esc</kbd> ou <kbd>Ctrl</kbd>+<kbd>K</kbd> (Windows e Linux)  <kbd>Command</kbd>+<kbd>K</kbd> (Mac)
- Modo de comando: <kbd>Esc</kbd> ou <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd> (Windows e Linux)  <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd> (Mac)

Se você tiver personalizado os atalhos da paleta de comandos nas configurações de acessibilidade, seus atalhos de teclado personalizados serão usados tanto para abrir quanto para fechar a paleta de comandos.

## Referência de {% data variables.product.prodname_command_palette %}

### Funções de keystrokes

Essas keystrokes estão disponíveis quando a paleta de comandos está nos modos de navegação e pesquisa, isto é, elas não estão disponíveis no modo de comando.

| Keystroke                                                               | Function                                                                                                                                                                                                                                                             |
|:----------------------------------------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>></kbd>                                                            | Entre no modo de comando. Para obter mais informações, consulte "["Executando os comandos a partir de {% data variables.product.prodname_command_palette %}](#running-commands-from-the-github-command-palette)."                                                  |
| <kbd>#</kbd>                                                            | Pesquisa problemas, pull requests, discussões e projetos. Para obter mais informações, consulte "[Pesquisando em {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette)."                                              |
| <kbd>@</kbd>                                                            | Pesquisa usuários, organizações e repositórios. Para obter mais informações, consulte "[Pesquisando em {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette)."                                                        |
| <kbd>/</kbd>                                                            | Pesquisar arquivos dentro de um escopo ou repositórios do repositório dentro do escopo da organização. Para obter mais informações, consulte "[Pesquisando em {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette)." |
| <kbd>!</kbd>                                                            | Pesquisar apenas projetos. Para obter mais informações, consulte "[Pesquisando em {% data variables.product.prodname_command_palette %}](#searching-with-the-github-command-palette)."                                                                             |
| <kbd>Ctrl</kbd>+<kbd>C</kbd> ou <kbd>Command</kbd>+<kbd>C</kbd>         | Copiar URL de pesquisa ou navegação para o resultado destacado na área de transferência.                                                                                                                                                                             |
| <kbd>Enter</kbd>                                                        | Pule para o resultado destacado ou execute o comando destacado.                                                                                                                                                                                                      |
| <kbd>Ctrl</kbd>+<kbd>Enter</kbd> ou <kbd>Command</kbd>+<kbd>Enter</kbd> | Abra o resultado da pesquisa ou navegação destacada em uma nova aba do navegador.                                                                                                                                                                                    |
| <kbd>?</kbd>                                                            | Exibir ajuda na paleta de comandos.                                                                                                                                                                                                                                  |

### Comandos globais

Estes comandos estão disponíveis em todos os escopos.

| Comando                                | Comportamento                                                                                                                                                                                                                                                                                                       |
|:-------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Importar repositório`                 | Criar um novo repositório importando um projeto de outro sistema de controle de versão. Para obter mais informações, consulte "[Importando um repositório com o Importador do GitHub](/get-started/importing-your-projects-to-github/importing-source-code-to-github/importing-a-repository-with-github-importer)". |
| `Novo gist`                            | Abra um novo gist. Para obter mais informações, consulte[Criando um gist](/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists)."                                                                                                                                                   |
| `Nova organização`                     | Criar uma nova organização Para obter mais informações, consulte "[Criar uma nova organização do zero](/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)".                                                                                                        |
| `Novo projeto`                         | Criar um novo quadro de projeto. Para obter mais informações, consulte "[Criar um quadro de projeto](/issues/trying-out-the-new-projects-experience/creating-a-project)".                                                                                                                                           |
| `Novo repositório`                     | Criar um novo repositório a partir do zero. Para obter mais informações, consulte "[Criar um novo repositório](/repositories/creating-and-managing-repositories/creating-a-new-repository)."                                                                                                                        |
| `Alterar tema para <theme name>` | Mude diretamente para um tema diferente para a interface do usuário. Para obter mais informações, consulte "[Gerenciando as suas configurações de tema](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings)".                        |


### Comandos da organização

Esses comandos estão disponíveis somente dentro do escopo de uma organização.

| Comando       | Comportamento                                                                                                                                           |
|:------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Nova equipe` | Crie uma nova equipe na organização atual. For more information, see "[Creating a team](/organizations/organizing-members-into-teams/creating-a-team)." |

### Comandos do repositório

A maioria desses comandos está disponível apenas na página inicial do repositório. Se um comando também estiver disponível em outras páginas, isso será mencionado na coluna de comportamento.

| Comando                                | Comportamento                                                                                                                                                                                                                                                                        |
|:-------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Clonar repositório: <URL type>` | Copie a URL necessária para clonar o repositório usando {% data variables.product.prodname_cli %}, HTTP ou SSH para a área de transferência. Para obter mais informações, consulte "[Clonar um repositório](/repositories/creating-and-managing-repositories/cloning-a-repository)". |
| `Nova discussão`                       | Criar uma nova discussão no repositório. Para obter mais informações, consulte "[ Criando uma nova discussão](/discussions/quickstart#creating-a-new-discussion)".                                                                                                                   |
| `Novo arquivo`                         | Criar um novo arquivo a partir de qualquer página no repositório. Para obter mais informações, consulte "[Adicionar um arquivo a um repositório](/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)."                                                    |
| `Novo problema`                        | Abra um novo problema de qualquer página no repositório. Para obter mais informações, consulte "[Criar um problema](/issues/tracking-your-work-with-issues/creating-an-issue)".                                                                                                      |
| `Abrir em um novo codespace`           | Criar e abrir um codespace para este repositório. Para obter mais informações, consulte "[Criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace)".                                                                                                           |
| `Abrir no editor github.dev`           | Abra o repositório atual no editor github.dev. Para obter mais informações, consulte "[Abrir no editor baseado na web](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor)".                                                                                    |

### Comandos de arquivos

Estes comandos só estão disponíveis quando você abre a paleta de comandos a partir de um arquivo em um repositório.

| Comando                      | Comportamento                                                                                                                                                                                                                                                                                                            |
|:---------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Copiar permalink`           | Crie um link para o arquivo que inclui o atual commit SHA e copie o link para a área de transferência. Para obter mais informações, consulte "[Obter links permanentes em arquivos](/repositories/working-with-files/using-files/getting-permanent-links-to-files#press-y-to-permalink-to-a-file-in-a-specific-commit)". |
| `Abrir no editor github.dev` | Abra o arquivo exibido atualmente no editor github.dev. Para obter mais informações, consulte "[Abrir no editor baseado na web](/codespaces/the-githubdev-web-based-editor#opening-the-web-based-editor)".                                                                                                               |

### Comandos de discussão

Estes comandos só estão disponíveis quando você abre a paleta de comandos em uma discussão. Eles atuam na sua página atual e não são afetados pelo escopo definido na paleta de comando.

| Comando                         | Comportamento                                                                                                                                                                                                                                               |
|:------------------------------- |:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Excluir discussão...`          | Excluir permanentemente a discussão. Para obter mais informações, consulte "[Gerenciando discussões](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion)".                                                     |
| `Editar texto da discussão`     | Abra o texto principal da discussão que está pronto para edição.                                                                                                                                                                                            |
| `Assinar`/`Cancelar assinatura` | Opte por participar ou não receber notificações de adições à discussão. Para obter mais informações, consulte "[Sobre notificações](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)". |
| `Transferir discussão...`       | Mover a discussão para um repositório diferente. Para obter mais informações, consulte "[Gerenciando discussões](/discussions/managing-discussions-for-your-community/managing-discussions#transferring-a-discussion)".                                     |

### Comandos de problemas

Estes comandos estão disponíveis somente quando você abre a paleta de comandos em um problema. Eles atuam na sua página atual e não são afetados pelo escopo definido na paleta de comando.

| Comando                              | Comportamento                                                                                                                                                                                                                                                      |
|:------------------------------------ |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Fechar`/`reabrir problema`          | Fechar ou reabrir o problema atual. Para obter mais informações, consulte "[Sobre problemas](/issues/tracking-your-work-with-issues/about-issues)".                                                                                                                |
| `Converter problema em discussão...` | Converter o problema atual em uma discussão. Para obter mais informações, consulte "[Moderação de discussões](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion)".                                   |
| `Excluir problema...`                | Exclua o problema atual. Para obter mais informações, consulte "[Excluir uma problema](/issues/tracking-your-work-with-issues/deleting-an-issue)".                                                                                                                 |
| `Editar texto do problema`           | Abra o texto principal do problema que está pronto para edição.                                                                                                                                                                                                    |
| `Editar título do problema`          | Abra o título do problema que está pronto para edição.                                                                                                                                                                                                             |
| `Bloquear problema`                  | Limitar novos comentários a usuários com acesso de gravação ao repositório. Para obter mais informações, consulte "[Bloquear conversas](/communities/moderating-comments-and-conversations/locking-conversations)".                                                |
| `Fixar`/`desafixar problema`         | Altere se o problema é exibido ou não na seção de problemas fixados para o repositório. Para obter mais informações, consulte "[Fixar um problema no seu repositório](/issues/tracking-your-work-with-issues/pinning-an-issue-to-your-repository)".                |
| `Assinar`/`Cancelar assinatura`      | Opte por partiricpar ou não receber notificações de alterações nesse problema. Para obter mais informações, consulte "[Sobre notificações](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)". |
| `Transferir problema...`             | Transferir o problema para outro repositório. Para obter mais informações, consulte "[Transferir um problema para outro repositório](/issues/tracking-your-work-with-issues/transferring-an-issue-to-another-repository)".                                         |

### Comandos de pull request

Estes comandos só estão disponíveis quando você abre a paleta de comandos a partir de um pull request. Eles atuam na sua página atual e não são afetados pelo escopo definido na paleta de comando.

| Comando                                                                | Comportamento                                                                                                                                                                                                                                                                                                                               |
|:---------------------------------------------------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Fechar`/`reabrir pull request`                                        | Feche ou reabra o pull request atual. Para obter mais informações, consulte "[Sobre pull requests](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)".                                                                                                                        |
| `Converter em rascunho`/`Marcar pull request como pronto para revisão` | Altere o estado do pull request para mostrá-lo como pronto ou não pronto para revisão. Para obter mais informações, consulte "[Alterar o estado de um pull request](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request)".                                      |
| `Copiar nome do branch atual`                                          | Adicione o nome do branch principal ao pull request na área de transferência.                                                                                                                                                                                                                                                               |
| `Editar texto do pull request`                                         | Abra o texto principal do pull request que está pronto para edição.                                                                                                                                                                                                                                                                         |
| `Editar título do pull request`                                        | Abra o título do pull request que está pronto para edição.                                                                                                                                                                                                                                                                                  |
| `Abrir em um novo codespace`                                           | Crie e abra um codespace para o branch principal do pull request. Para obter mais informações, consulte "[Criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace)".                                                                                                                                                  |
| `Assinar`/`Cancelar assinatura`                                        | Opte por receber ou não receber notificações para alterações desse pull request. Para obter mais informações, consulte "[Sobre notificações](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)".                                                                        |
| `Atualizar o branch atual`                                             | Atualize o branch principal do pull request com alterações do branch base. Isso só está disponível para pull requests que apontam para o branch padrão do repositório. Para obter mais informações, consulte "[Sobre branches](/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)". |
