---
title: Using the Visual Studio Code Command Palette in Codespaces
intro: 'Você pode usar o recurso de Paleta de Comando de {% data variables.product.prodname_vscode %} para acessar muitos comandos em codespaces.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Visual Studio Code
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: VS Code Command Palette
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/using-the-command-palette-in-codespaces
---

## About the {% data variables.product.prodname_vscode %} Command Palette

A Paleta de Comando é uma das funcionalidades principais de {% data variables.product.prodname_vscode %} e está disponível para uso em codespaces. The {% data variables.product.prodname_vscode_command_palette %} allows you to access many commands for {% data variables.product.prodname_codespaces %} and {% data variables.product.prodname_vscode %}. For more information on using the {% data variables.product.prodname_vscode_command_palette %}, see "[User Interface](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)" in the Visual Studio Code documentation.

## Accessing the {% data variables.product.prodname_vscode_command_palette %}

You can access the {% data variables.product.prodname_vscode_command_palette %} in a number of ways.

- `Shift + Command + P` (Mac) / `Ctrl + Shift + P` (Windows).

  Observe que este comando é um atalho de teclado reservado no Firefox.
- `F1`
- No Menu de Aplicativos, clique em **Ver > Paleta de Comando…**.

  ![Menu do aplicativo](/assets/images/help/codespaces/codespaces-view-menu.png)

## Comandos para {% data variables.product.prodname_github_codespaces %}

To see all commands related to {% data variables.product.prodname_github_codespaces %}, [access the {% data variables.product.prodname_vscode_command_palette %}](#accessing-the-command-palette), then start typing "Codespaces".

![Uma lista de todos os comandos que se referem a codespaces](/assets/images/help/codespaces/codespaces-command-palette.png)

### Suspender ou interromper um codespace

Se você adicionar um novo segredo ou alterar o tipo de máquina, você terá que parar e reiniciar o codespace para que aplique suas alterações.

To suspend or stop your codespace's container, [access the {% data variables.product.prodname_vscode_command_palette %}](#accessing-the-command-palette), then start typing "stop". Selecione **Codespaces: Parar o codespace atual**.

![Comando para parar um codespace](/assets/images/help/codespaces/codespaces-stop.png)

### Adicionando um contêiner de desenvolvimento a partir de um modelo

To add a dev container from a template, [access the {% data variables.product.prodname_vscode_command_palette %}](#accessing-the-command-palette), then start typing "dev container". Selecione **Codespaces: Adicionar arquivos de configuração de Contêiner do Desenvolvimento...**

![Comando para adicionar um contêiner de desenvolvimento](/assets/images/help/codespaces/add-prebuilt-container-command.png)

### Reconstruindo um codespace

Se você adicionar um contêiner de desenvolvimento ou editar qualquer um dos arquivos de configuração (`devcontainer.json` e `arquivo Docker`), você terá que reconstruir seu codespace para aplicar suas alterações.

To rebuild your container, [access the {% data variables.product.prodname_vscode_command_palette %}](#accessing-the-command-palette), then start typing "rebuild". Selecione **Codespaces: Reconstruir Contêiner**.

![Comando para reconstruir um codespace](/assets/images/help/codespaces/codespaces-rebuild.png)

### Registros de codespaces

You can use the {% data variables.product.prodname_vscode_command_palette %} to access the codespace creation logs, or you can use it export all logs.

To retrieve the logs for Codespaces, [access the {% data variables.product.prodname_vscode_command_palette %}](#accessing-the-command-palette), then start typing "log". Selecione **Codespaces: Exportar registros** para exportar todos os registros relacionados aos codespaces ou selecione **Codespaces: Visualizar o registro de criação** para visualizar os registros relacionados à configuração.

![Comando para acessar os registros](/assets/images/help/codespaces/codespaces-logs.png)
