---
title: Registros de codespaces
intro: Visão geral dos locais de registros usados por {% data variables.product.prodname_codespaces %}.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
- Logging
shortTitle: Codespaces logs
ms.openlocfilehash: 3e02023cd1ba05960e9f9b345265c281e714e6a5
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145084151"
---
As informações sobre {% data variables.product.prodname_codespaces %} são saídas para três registros diferentes:

- Registros do codespace
- Registros de criação
- Registro de extensões ({% data variables.product.prodname_vscode %} desktop) ou registros de console do navegador ({% data variables.product.prodname_vscode %} na web)

## <a name="codespace-logs"></a>Registros do codespace

Esses registros contêm informações detalhadas sobre o codespace, container, sessão e ambiente de {% data variables.product.prodname_vscode %}. Eles são úteis para diagnosticar problemas de conexão e outros comportamentos inesperados. Por exemplo, o codespace congela, mas a opção "Recarregar Windows" o descongela por alguns minutos ou você será desconectado do codespace aleatoriamente, mas poderá reconectar-se imediatamente.

{% webui %}

1. Se estiver usando {% data variables.product.prodname_codespaces %} no navegador, certifique-se de que esteja conectado ao codespace que deseja depurar.
1. Abra a paleta de comandos do {% data variables.product.prodname_vscode %} (`Shift + Command + P` no Mac/`Ctrl + Shift + P` no Windows) e digite **Logs de exportação**. Selecione **Codespaces: Exportar logs** na lista para baixar os logs.
1. Defina o local em que o arquivo zip dos logs será salvo e clique em **Salvar** (área de trabalho) ou em **OK** (Web).
1. Se estiver usando o {% data variables.product.prodname_codespaces %} no navegador, clique com o botão direito do mouse no arquivo zip dos logs na exibição do Explorer e selecione **Baixar…** para baixá-los no computador local.

{% endwebui %}

{% vscode %}

1. Abra a paleta de comandos do {% data variables.product.prodname_vscode %} (`Shift + Command + P` no Mac/`Ctrl + Shift + P` no Windows) e digite **Logs de exportação**. Selecione **Codespaces: Exportar logs** na lista para baixar os logs.
1. Defina o local em que o arquivo zip dos logs será salvo e clique em **Salvar** (área de trabalho) ou em **OK** (Web).

{% endvscode %}

{% cli %}

Atualmente você não pode usar {% data variables.product.prodname_cli %} para acessar esses registros. Para acessá-los, abra seu codespace em {% data variables.product.prodname_vscode %} ou em um navegador.

{% endcli %}

## <a name="creation-logs"></a>Registros de criação

Estes registros contêm informações sobre o contêiner, contêiner de desenvolvimento e sua configuração. Eles são úteis para depuração de configurações e problemas de instalação.


{% webui %}

1. Conecte-se ao codespace que você deseja depurar.
2. Abra a {% data variables.product.prodname_vscode_command_palette %} (`Shift + Command + P` no Mac/`Ctrl + Shift + P` no Windows) e digite **Logs de criação**. Selecione **Codespaces: Exibir o Log de Criação** na lista para abrir o arquivo `creation.log`.

Se você quiser compartilhar o registro com suporte, você poderá copiar o texto do registro de criação em um editor de texto e salvar o arquivo localmente.

{% endwebui %}

{% vscode %}

Abra a paleta de comandos (`Shift + Command + P` no Mac/`Ctrl + Shift + P` no Windows) e digite **Logs de criação**. Selecione **Codespaces: Exibir o Log de Criação** na lista para abrir o arquivo `creation.log`.

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

## <a name="extension-logs"></a>Registros de extensão

Estes registros estão disponíveis apenas para usuários de área de trabalho de {% data variables.product.prodname_vscode %}. Eles são úteis para o caso de parecer que o editor de {% data variables.product.prodname_codespaces %} ou {% data variables.product.prodname_vscode %} estejam com problemas que impedem a criação ou conexão.

1. Em {% data variables.product.prodname_vscode %}, abra a paleta de comando.
1. Digite **Logs** e selecione **Desenvolvedor: Abrir Pasta de Logs de Extensão** na lista para abrir a pasta de log de extensão no explorador de arquivos do sistema.

Nesta visualização, você poderá acessar os registros gerados pelas várias extensões que você usa em {% data variables.product.prodname_vscode %}. Você verá registros para os codespaces e para a autenticação do GitHub e Git, além de qualquer outra extensão que você habilitou.

## <a name="browser-console-logs"></a>Registros do console do navegador

Esses registros são úteis apenas se você quiser depurar problemas com o uso do {% data variables.product.prodname_codespaces %} no navegador. Eles são úteis para depurar problemas de criação e conexão com {% data variables.product.prodname_codespaces %}.

1. Na janela do navegador para o ambiente de codespace que você deseja depurar, abra a janela de ferramentas do desenvolvedor.
1. Veja a guia "Console" e clique em **Erros** na barra lateral esquerda para mostrar apenas os erros.
1. Na área de log à direita, clique com o botão direito do mouse e selecione **Salvar como** para salvar uma cópia dos erros no computador local.
  ![Salvar erros](/assets/images/help/codespaces/browser-console-log-save.png)
