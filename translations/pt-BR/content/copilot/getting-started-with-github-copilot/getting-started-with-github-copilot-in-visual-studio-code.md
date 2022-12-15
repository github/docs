---
title: Introdução ao GitHub Copilot no Visual Studio Code
shortTitle: Visual Studio Code
intro: 'Saiba como instalar o {% data variables.product.prodname_copilot %} no {% data variables.product.prodname_vscode %},e passar a ver sugestões enquanto escreve comentários e códigos.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: ec117cce02fab8917aef958c69077c521d9c1974
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192766'
---
{% data reusables.copilot.copilot-cta-button %}

## Sobre o {% data variables.product.prodname_copilot %} e o {% data variables.product.prodname_vscode %}

{% data reusables.copilot.procedural-intro %}

Usando o {% data variables.product.prodname_vscode %}, você pode ver e incorporar sugestões do {% data variables.product.prodname_copilot %} diretamente no editor. Este guia demonstra como usar o {% data variables.product.prodname_copilot %} dentro do {% data variables.product.prodname_vscode %} para macOS, Windows ou Linux.

## Pré-requisitos

{% data reusables.copilot.subscription-prerequisite %}

- Para usar o {% data variables.product.prodname_copilot %} no {% data variables.product.prodname_vscode %}, o {% data variables.product.prodname_vscode %} precisa estar instalado. Para obter mais informações, confira a [página de download do {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/Download).

## Como instalar a extensão {% data variables.product.prodname_vscode %}

Para usar o {% data variables.product.prodname_copilot %}, primeiro você precisa instalar a extensão {% data variables.product.prodname_vscode %}.

1. No {% data variables.product.prodname_vscode %} Marketplace, acesse a página da [extensão {% data variables.product.prodname_copilot %}](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) e clique em **Instalar**.
   ![Instalar a extensão {% data variables.product.prodname_vscode %} do {% data variables.product.prodname_copilot %}](/assets/images/help/copilot/install-copilot-extension-visual-studio-code.png)
1. Um pop-up será exibido, solicitando que você abra o {% data variables.product.prodname_vscode %}. Clique em **Abrir o {% data variables.product.prodname_vscode %}** .
1. Na guia "Extensão: {% data variables.product.prodname_copilot %}" no {% data variables.product.prodname_vscode %}, clique em **Instalar**.
   ![Botão de instalação no {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/in-visual-studio-code-install-button.png)
1. Se você ainda não tiver autorizado o {% data variables.product.prodname_vscode %} na conta do {% data variables.product.prodname_dotcom %}, será solicitado que você entre no {% data variables.product.prodname_dotcom %} no {% data variables.product.prodname_vscode %}.
   - Se você já tiver autorizado o {% data variables.product.prodname_vscode %} para sua conta no {% data variables.product.prodname_dotcom %}, o {% data variables.product.prodname_copilot %} será autorizado automaticamente.
   ![Captura da tela de autorização do {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/vsc-copilot-authorize.png)
1. No navegador, o {% data variables.product.prodname_dotcom %} solicitará as permissões necessárias para o {% data variables.product.prodname_copilot %}. Para aprovar essas permissões, clique em **Autorizar o {% data variables.product.prodname_vscode %}** .
1. No {% data variables.product.prodname_vscode %}, na caixa de diálogo "{% data variables.product.prodname_vscode %}", para confirmar a autenticação, clique em **Abrir**.
   

## Como ver a primeira sugestão

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} Os exemplos a seguir estão em JavaScript, mas as outras linguagens funcionarão da mesma forma.

{% data reusables.copilot.create-js-file %}
1. No arquivo JavaScript, digite o cabeçalho da função a seguir. O {% data variables.product.prodname_copilot %} vai sugerir automaticamente um corpo inteiro da função em texto esmaecido, como é mostrado abaixo. A sugestão exata pode variar.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
   ![Captura de tela de uma primeira sugestão {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/first-suggestion-visual-studio-code.png) {% data reusables.copilot.accept-suggestion %}

## Como ver sugestões alternativas

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-js-file %}
1. No arquivo JavaScript, digite o cabeçalho da função a seguir. {% data variables.product.prodname_copilot %} mostrará uma sugestão.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
{% data reusables.copilot.see-alternative-suggestions %}

   | Sistema operacional | Ver a próxima sugestão | Ver a sugestão anterior |
   | :- | :- | :- |
   |macOS|<kbd>Opção (⌥) ou Alt</kbd>+<kbd>]</kbd>|<kbd>Opção (⌥) ou Alt</kbd>+<kbd>[</kbd>|
   |Windows|<kbd>Alt</kbd>+<kbd>]</kbd>|<kbd>Alt</kbd>+<kbd>[</kbd>|
   |Linux|<kbd>Alt</kbd>+<kbd>]</kbd>|<kbd>Alt</kbd>+<kbd>[</kbd>|
1. Como alternativa, você pode focalizar a sugestão para ver a paleta de comandos do {% data variables.product.prodname_copilot %} e escolher sugestões.
{% data reusables.copilot.accept-or-reject-suggestion %}

## Como ver várias sugestões em uma nova guia

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-js-file %}
1. No arquivo JavaScript, digite o cabeçalho da função a seguir. {% data variables.product.prodname_copilot %} mostrará uma sugestão.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
1. Para abrir uma nova guia com várias opções adicionais, pressione <kbd>Ctrl</kbd>+<kbd>Enter</kbd>.
1. Para aceitar uma sugestão, acima da sugestão, clique em **Aceitar Solução**. Para rejeitar todas as sugestões, feche a guia.

## Como gerar sugestões de código por meio de comentários

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-js-file %}
1. No arquivo JavaScript, digite o comentário a seguir. O {% data variables.product.prodname_copilot %} vai sugerir uma implementação da função.
   ```javascript{:copy}
   // find all images without alternate text
   // and give them a red border
   function process() {
   ```

## Como usar uma estrutura

Você também pode usar o {% data variables.product.prodname_copilot %} para gerar sugestões de APIs e estruturas. O exemplo a seguir usa o {% data variables.product.prodname_copilot %} para criar um servidor Express simples que retorna a hora atual.

{% data reusables.copilot.create-js-file %}
1. No arquivo JavaScript, digite o comentário a seguir e pressione <kbd>Enter</kbd>. O {% data variables.product.prodname_copilot %} vai sugerir uma implementação do aplicativo Express.
   ```javascript{:copy}
   // Express server on port 3000
1. To accept each line, press <kbd>Tab</kbd>, then <kbd>Enter</kbd>.
1. Type the following comment and then press <kbd>Enter</kbd>. {% data variables.product.prodname_copilot %} will suggest an implementation for the default handler. 
   ```javascript{:copy}
   // Return the current time
   ```
1. Para aceitar cada linha, pressione <kbd>Tab</kbd>.

{% data reusables.copilot.enabling-or-disabling-in-vsc %}

## Leitura adicional

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
