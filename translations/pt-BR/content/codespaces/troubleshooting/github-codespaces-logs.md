---
title: Logs do GitHub Codespaces
intro: 'Visão geral dos logs usados pelo {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Logging
shortTitle: Codespaces logs
redirect_from:
  - /codespaces/troubleshooting/codespaces-logs
ms.openlocfilehash: f5cd482888f58f85a051bb9b6e2c5d7c026ed9a9
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159359'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

A saída das informações sobre o {% data variables.product.prodname_github_codespaces %} é gerada em vários logs diferentes:

{% webui %}

- Registros do codespace
- Registros de criação
- Logs do console do navegador (para o cliente Web do {% data variables.product.prodname_vscode_shortname %})

Os logs de extensão estarão disponíveis se você estiver usando o {% data variables.product.prodname_github_codespaces %} no {% data variables.product.prodname_vscode_shortname %}. Clique na guia "{% data variables.product.prodname_vscode %}" acima para obter detalhes.

{% endwebui %}

{% vscode %}

- Registros do codespace
- Registros de criação
- Logs de extensão (para o aplicativo da área de trabalho do {% data variables.product.prodname_vscode_shortname %}) 

Os logs do navegador estarão disponíveis se você estiver usando o {% data variables.product.prodname_github_codespaces %} no navegador. Clique na guia "Navegador da Web" acima para obter detalhes.

{% endvscode %}

{% cli %}

- Registros do codespace
- Registros de criação

Outros logs estarão disponíveis se você estiver usando o {% data variables.product.prodname_github_codespaces %} no {% data variables.product.prodname_vscode_shortname %} ou no navegador da Web. Clique nas guias acima para obter detalhes.

{% endcli %}

{% jetbrains %}

- Registros de criação

Outros logs estarão disponíveis se você estiver usando o {% data variables.product.prodname_github_codespaces %} no {% data variables.product.prodname_vscode_shortname %} ou no navegador da Web. Clique nas guias acima para obter detalhes.

{% endjetbrains %}

{% webui %}

{% data reusables.codespaces.codespace-logs %}

1. Se você estiver usando o {% data variables.product.prodname_github_codespaces %} no navegador, certifique-se de estar conectado ao codespace que será depurado.
1. Abra a {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> [no Mac] / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> [no Windows/Linux]) e digite **logs de exportação**. Selecione **Codespaces: Exportar logs** na lista para baixar os logs.
1. Defina o local em que o arquivo zip dos logs será salvo e clique em **Salvar** (área de trabalho) ou em **OK** (Web).
1. Se você estiver usando o {% data variables.product.prodname_github_codespaces %} no navegador, clique com o botão direito do mouse no arquivo ZIP dos logs na exibição do Explorer e selecione **Baixar…** para baixá-los no computador local.

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.codespace-logs %}

1. Abra a {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> [no Mac] / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> [no Windows/Linux]) e digite **logs de exportação**. Selecione **Codespaces: Exportar logs** na lista para baixar os logs.
1. Defina o local em que o arquivo zip dos logs será salvo e clique em **Salvar** (área de trabalho) ou em **OK** (Web).

{% endvscode %}

{% cli %}

{% data reusables.codespaces.codespace-logs %}

Atualmente você não pode usar {% data variables.product.prodname_cli %} para acessar esses registros. Para acessá-los, abra o codespace no {% data variables.product.prodname_vscode_shortname %} ou em um navegador.

{% endcli %}

## Registros de criação

Estes registros contêm informações sobre o contêiner, contêiner de desenvolvimento e sua configuração. Eles são úteis para depuração de configurações e problemas de instalação.

{% webui %}

1. Conecte-se ao codespace que você deseja depurar.
2. Abra a {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> [no Mac] / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> [no Windows/Linux]) e digite **Logs de Criação**. Selecione **Codespaces: Exibir o Log de Criação** na lista para abrir o arquivo `creation.log`.

Se você quiser compartilhar o registro com suporte, você poderá copiar o texto do registro de criação em um editor de texto e salvar o arquivo localmente.

{% endwebui %}

{% vscode %}

Abra a {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> [no Mac] / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> [no Windows/Linux]) e digite **Logs de Criação**. Selecione **Codespaces: Exibir o Log de Criação** na lista para abrir o arquivo `creation.log`.

Se você quiser compartilhar o registro com suporte, você poderá copiar o texto do registro de criação em um editor de texto e salvar o arquivo localmente.

{% endvscode %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Para ver o log de criação, use o subcomando `gh codespace logs`. Depois de entrar no comando, escolha entre a lista de codespaces exibidos.

```shell
gh codespace logs
```

Para obter mais informações sobre esse comando, confira [o manual da {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_logs).

Se você quiser compartilhar o registro com suporte, você poderá salvar a saída em um arquivo:

```shell
gh codespace logs -c <CODESPACE-NAME> > /path/to/logs.txt
```

{% endcli %}

{% vscode %}

## Registros de extensão

Estes logs estão disponíveis apenas para os usuários de área de trabalho do {% data variables.product.prodname_vscode_shortname %} desktop users only. Eles são úteis quando há a possibilidade de problemas na extensão do {% data variables.product.prodname_github_codespaces %} ou no editor do {% data variables.product.prodname_vscode_shortname %} que possam impedir a criação ou a conexão.

1. No {% data variables.product.prodname_vscode_shortname %}, abra a paleta de comandos.
1. Digite **Logs** e selecione **Desenvolvedor: Abrir Pasta de Logs de Extensão** na lista para abrir a pasta de log de extensão no explorador de arquivos do sistema.

Nesta exibição, é possível acessar os registros gerados pelas várias extensões usadas no {% data variables.product.prodname_vscode_shortname %}. Você verá os logs do {% data variables.product.prodname_github_codespaces %}, do {% data variables.product.prodname_dotcom %} Authentication e do Git, além de logs de outras extensões habilitadas.

{% endvscode %}

{% webui %}

## Registros do console do navegador

Esses logs são úteis apenas para depurar problemas com o uso do {% data variables.product.prodname_github_codespaces %} em navegadores. Eles são úteis para depurar problemas de criação e conexão com o {% data variables.product.prodname_github_codespaces %}.

1. Na janela do navegador para o ambiente de codespace que você deseja depurar, abra a janela de ferramentas do desenvolvedor.
1. Veja a guia "Console" e clique em **Erros** na barra lateral esquerda para mostrar apenas os erros.
1. Na área de log à direita, clique com o botão direito do mouse e selecione **Salvar como** para salvar uma cópia dos erros no computador local.
  ![Salvar erros](/assets/images/help/codespaces/browser-console-log-save.png)

{% endwebui %}

{% jetbrains %}

{% data reusables.codespaces.jetbrains-open-codespace-plugin %}
1. Na janela de ferramentas do {% data variables.product.prodname_github_codespaces %}, clique no ícone de log.

   ![Captura de tela do botão de log](/assets/images/help/codespaces/jetbrains-plugin-icon-log.png)

## Logs do JetBrains

É possível baixar logs para o IDE remoto do JetBrains e para o aplicativo cliente local acessando o menu **Ajuda** no aplicativo cliente JetBrains e clicando em **Coletar logs do host e do cliente**.

{% endjetbrains %}

## Leitura adicional

- "[Como revisar os logs de auditoria da sua organização para o {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/reviewing-your-organizations-audit-logs-for-github-codespaces)"
- "[Como revisar seus logs de segurança de {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/reviewing-your-security-logs-for-github-codespaces)"
