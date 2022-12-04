---
title: Uso da paleta de comandos do Visual Studio Code no GitHub Codespaces
intro: 'Você pode usar o recurso Paleta de Comandos do {% data variables.product.prodname_vscode %} para acessar muitos comandos no {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Visual Studio Code
shortTitle: VS Code Command Palette
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/using-the-command-palette-in-codespaces
ms.openlocfilehash: acd462dd1c0b60dced529d7471b9c8638e2f6e91
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180808'
---
## Sobre a {% data variables.product.prodname_vscode_command_palette %}

A {% data variables.product.prodname_vscode_command_palette_shortname %} é um dos principais recursos do {% data variables.product.prodname_vscode %} e está disponível para ser usada nos {% data variables.product.prodname_github_codespaces %}. A Paleta de Comando permite que você acesse vários comandos do {% data variables.product.prodname_github_codespaces %} e do {% data variables.product.prodname_vscode_shortname %}. Para obter mais informações sobre como usar a {% data variables.product.prodname_vscode_command_palette_shortname %}, confira "[Interface do Usuário](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)" na documentação do {% data variables.product.prodname_vscode_shortname %}.

## Acessando a {% data variables.product.prodname_vscode_command_palette_shortname %}

Você pode acessar a {% data variables.product.prodname_vscode_command_palette_shortname %} de várias maneiras.

- <kbd>SHIFT</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac)/<kbd>CTRL</kbd>+<kbd>SHIFT</kbd>+<kbd>P</kbd> (Windows/Linux).

  Observe que este comando é um atalho de teclado reservado no Firefox.
- <kbd>F1</kbd>
- No Menu do Aplicativo, clique em **Exibir > Paleta de Comandos…** .

  ![Menu do aplicativo](/assets/images/help/codespaces/codespaces-view-menu.png)

## Comandos do {% data variables.product.prodname_codespaces %}

Para ver todos os comandos relacionados ao {% data variables.product.prodname_github_codespaces %}, [acesse a {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette) e comece a digitar "Codespaces".

![Uma lista de todos os comandos relacionados aos {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/codespaces-command-palette.png)

### Suspender ou interromper um codespace

Se você adicionar um novo segredo ou alterar o tipo de máquina, você terá que parar e reiniciar o codespace para que aplique suas alterações. 

Para suspender ou interromper o contêiner do seu codespace, [acesse a {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette) e comece a digitar "interromper". Selecione **Codespaces: Interromper o Codespace Atual**.

![Comando para parar um codespace](/assets/images/help/codespaces/codespaces-stop.png)

### Como adicionar uma configuração de contêiner de desenvolvimento predefinida

Para adicionar uma configuração de contêiner de desenvolvimento, [acesse a {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette) e comece a digitar "contêiner de desenvolvimento". Selecione **Codespaces: Adicionar Arquivos de Configuração de Contêiner de Desenvolvimento…**

![Comando para adicionar um contêiner de desenvolvimento](/assets/images/help/codespaces/add-prebuilt-container-command.png)

### Reconstruindo um codespace

Se você adicionar um contêiner de desenvolvimento ou editar um dos arquivos de configuração (`devcontainer.json` e `Dockerfile`), precisará recompilar o codespace para que ele aplique as alterações. 

Para recompilar o contêiner, [acesse a {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette) e comece a digitar "recompilar". Selecione **Codespaces: Recompilar Contêiner**.

![Comando para reconstruir um codespace](/assets/images/help/codespaces/codespaces-rebuild.png)

{% data reusables.codespaces.full-rebuild-tip %}

### Registros de codespaces

Você pode usar a {% data variables.product.prodname_vscode_command_palette_shortname %} para acessar os logs de criação do codespace ou você pode usá-la para exportar todos os logs. 

Para recuperar os logs dos {% data variables.product.prodname_github_codespaces %}, [acesse a {% data variables.product.prodname_vscode_command_palette_shortname %}](#accessing-the-command-palette) e comece a digitar "log". Selecione **Codespaces: Exportar Logs** para exportar todos os logs relacionados ao {% data variables.product.prodname_github_codespaces %} ou selecione **Codespaces: Exibir Logs de Criação** para ver os logs relacionados à instalação.

![Comando para acessar os registros](/assets/images/help/codespaces/codespaces-logs.png)

## Leitura adicional

- "[Como usar os {% data variables.product.prodname_github_codespaces %} no {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)"
