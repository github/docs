---
title: Registros de codespaces
intro: 'Visão geral dos locais de registros usados por {% data variables.product.prodname_codespaces %}.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
type: reference
topics:
  - Codespaces
  - Logging
shortTitle: Registros de codespaces
---


As informações sobre {% data variables.product.prodname_codespaces %} são saídas para três registros diferentes:

- Registros do codespace
- Registros de criação
- Registro de extensões ({% data variables.product.prodname_vscode %} desktop) ou registros de console do navegador ({% data variables.product.prodname_vscode %} na web)

## Registros do codespace

Esses registros contêm informações detalhadas sobre o codespace, container, sessão e ambiente de {% data variables.product.prodname_vscode %}. Eles são úteis para diagnosticar problemas de conexão e outros comportamentos inesperados. Por exemplo, o codespace congela, mas a opção "Recarregar Windows" o descongela por alguns minutos ou você será desconectado do codespace aleatoriamente, mas poderá reconectar-se imediatamente.

1. Se estiver usando {% data variables.product.prodname_codespaces %} no navegador, certifique-se de que esteja conectado ao codespace que deseja depurar.
2. Abra a Paleta de Comando (`Shift + Command + P` (Mac) / `Ctrl + Shift + P` (Windows)) e digite **Exportar registros**. Selecione **Codespaces: Exportar registros** na lista para fazer o download dos registros.
3. Defina o local onde salvar o arquivo zip dos registros e, em seguida, clique em **Salvar** (desktop) ou clique em **OK** (web).
4. Se estiver usando {% data variables.product.prodname_codespaces %} no navegador, clique com o botão direito do mouse no arquivo zip dos registros na exibição do Explorer e selecione **Download…** para fazer o download para a sua máquina local.

## Registros de criação

Estes registros contêm informações sobre o contêiner, contêiner de desenvolvimento e sua configuração. Eles são úteis para depuração de configurações e problemas de instalação.

1. Conecte-se ao codespace que você deseja depurar.
2. Abra a Paleta de Comando (`Shift + Command + P` (Mac) / `Ctrl + Shift + P` (Windows)) e digite **Registros de criação**. Selecione **codespaces: Visualizar registro de criação** na lista para abrir o arquivo `creation.log`.

Se você quiser compartilhar o registro com suporte, você poderá copiar o texto do registro de criação em um editor de texto e salvar o arquivo localmente.

## Registros de extensão

Estes registros estão disponíveis apenas para usuários de área de trabalho de {% data variables.product.prodname_vscode %}. Eles são úteis para o caso de parecer que o editor de {% data variables.product.prodname_codespaces %} ou {% data variables.product.prodname_vscode %} estejam com problemas que impedem a criação ou conexão.

1. Em {% data variables.product.prodname_vscode %}, abra a paleta de comando.
2. Digite **Registros** e selecione **Desenvolvedor: Abrir pasta de registros de extensão** na lista para abrir a pasta de registro de extensões no explorador do arquivo do seu sistema.

Nesta visualização, você poderá acessar os registros gerados pelas várias extensões que você usa em {% data variables.product.prodname_vscode %}. Você verá registros para os codespaces e para a autenticação do GitHub e Git, além de qualquer outra extensão que você habilitou.

## Registros do console do navegador

Esses registros são úteis apenas se você quiser depurar problemas com o uso do {% data variables.product.prodname_codespaces %} no navegador. Eles são úteis para depurar problemas de criação e conexão com {% data variables.product.prodname_codespaces %}.

1. Na janela do navegador para o ambiente de codespace que você deseja depurar, abra a janela de ferramentas do desenvolvedor.
2. Exibe a aba "Console" e clique em em **erros** na barra do lado esquerdo para mostrar apenas os erros.
3. Na área do registro à direita, clique com o botão direito e selecione **Salvar como** para salvar uma cópia dos erros na sua máquina local. ![Salvar erros](/assets/images/help/codespaces/browser-console-log-save.png)
