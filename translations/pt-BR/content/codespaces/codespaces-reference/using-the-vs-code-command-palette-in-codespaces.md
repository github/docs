---
title: Using the Visual Studio Code Command Palette in GitHub Codespaces
intro: 'You can use the Command Palette feature of {% data variables.product.prodname_vscode %} to access many commands in {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Visual Studio Code
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Paleta de Comando do VS Code
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/using-the-command-palette-in-codespaces
---

## Sobre o {% data variables.product.prodname_vscode_command_palette %}

The Command Palette is one of the focal features of {% data variables.product.prodname_vscode %} and is available for you to use in {% data variables.product.prodname_github_codespaces %}. O {% data variables.product.prodname_vscode_command_palette %} permite que você acesse muitos comandos para {% data variables.product.prodname_codespaces %} e {% data variables.product.prodname_vscode_shortname %}. Para obter mais informações sobre como usar o {% data variables.product.prodname_vscode_command_palette_shortname %}, consulte "[Interface de usuário](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)" na documentação do {% data variables.product.prodname_vscode_shortname %}.

## Acessando o {% data variables.product.prodname_vscode_command_palette_shortname %}

Você pode acessar o {% data variables.product.prodname_vscode_command_palette_shortname %} de várias maneiras.

- <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).

  Observe que este comando é um atalho de teclado reservado no Firefox.
- <kbd>F1</kbd>
- No Menu de Aplicativos, clique em **Ver > Paleta de Comando…**.

  ![Menu do aplicativo](/assets/images/help/codespaces/codespaces-view-menu.png)

## Comandos para {% data variables.product.prodname_codespaces %}

Para ver todos os comandos relacionados a {% data variables.product.prodname_codespaces %}, [acesse o {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette) e, em seguida, comece a digitar "Codespaces".

![Uma lista de todos os comandos que se referem a codespaces](/assets/images/help/codespaces/codespaces-command-palette.png)

### Suspender ou interromper um codespace

Se você adicionar um novo segredo ou alterar o tipo de máquina, você terá que parar e reiniciar o codespace para que aplique suas alterações.

Para suspender ou interromper o contêiner do seu codespace, [acesse o {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette)e, em seguida, comece a digitar "parar". Selecione **Codespaces: Parar o codespace atual**.

![Comando para parar um codespace](/assets/images/help/codespaces/codespaces-stop.png)

### Adicionando um contêiner de desenvolvimento a partir de um modelo

Para adicionar um contêiner de desenvolvimento a partir de um modelo, [acesse o {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette) e, em seguida, comece a digitar "dev container". Selecione **Codespaces: Adicionar arquivos de configuração de Contêiner do Desenvolvimento...**

![Comando para adicionar um contêiner de desenvolvimento](/assets/images/help/codespaces/add-prebuilt-container-command.png)

### Reconstruindo um codespace

Se você adicionar um contêiner de desenvolvimento ou editar qualquer um dos arquivos de configuração (`devcontainer.json` e `arquivo Docker`), você terá que reconstruir seu codespace para aplicar suas alterações.

Para reconstruir seu contêiner, [acesse o {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette)e, em seguida, comece a digitar "recriar". Selecione **Codespaces: Reconstruir Contêiner**.

![Comando para reconstruir um codespace](/assets/images/help/codespaces/codespaces-rebuild.png)

### Registros de codespaces

Você pode usar o {% data variables.product.prodname_vscode_command_palette_shortname %} para acessar os registros de criação do codespace ou você pode usá-lo para exportar todos os registros.

To retrieve the logs for {% data variables.product.prodname_codespaces %}, [access the {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette), then start typing "log". Select **Codespaces: Export Logs** to export all logs related to {% data variables.product.prodname_codespaces %} or select **Codespaces: View Creation Logs** to view logs related to the setup.

![Comando para acessar os registros](/assets/images/help/codespaces/codespaces-logs.png)
