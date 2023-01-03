---
title: Como configurar o GitHub Copilot em um IDE da JetBrains
intro: 'Você pode habilitar, configurar e desabilitar o {% data variables.product.prodname_copilot %} no IDE da JetBrains.'
product: '{% data reusables.gated-features.copilot %}'
topics:
  - Copilot
versions:
  feature: copilot
shortTitle: JetBrains
ms.openlocfilehash: 9f0f35bf5aebbf1899bd3991b0bca9e62f1da6ed
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193188'
---
## Sobre o {% data variables.product.prodname_copilot %} nos IDEs da JetBrains

Se você usa um IDE da JetBrains, o {% data variables.product.prodname_copilot %} pode fazer o preenchimento automático do código conforme você digita. Após a instalação, você poderá habilitar ou desabilitar o {% data variables.product.prodname_copilot %} e definir configurações avançadas no IDE ou no {% data variables.product.prodname_dotcom_the_website %}. Este artigo descreve como configurar o {% data variables.product.prodname_copilot %} no IDE IntelliJ, mas as interfaces de usuário de outros IDEs Jetbrains podem ser diferentes.

{% data reusables.copilot.dotcom-settings %}

## Pré-requisitos

Para configurar o {% data variables.product.prodname_copilot %} em um IDE da JetBrains, você precisará instalar o plug-in do {% data variables.product.prodname_copilot %}. Para obter mais informações, confira "[Introdução ao {% data variables.product.prodname_copilot %} em um IDE da JetBrains](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-a-jetbrains-ide)".

## Atalhos de teclado do {% data variables.product.prodname_copilot %}

Você pode usar os atalhos de teclado padrão para sugestões embutidas no IDE da JetBrains usando o {% data variables.product.prodname_copilot %}. Como alternativa, você pode reassociar os atalhos aos seus atalhos de teclado preferidos de cada comando específico. Para obter mais informações de como reassociar atalhos de teclado no IDE da JetBrains, confira a documentação da JetBrains. Por exemplo, você pode ver a documentação do [IntelliJ IDEA](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html#choose-keymap).

{% mac %}

| Ação | Atalho |
|:---|:---|
|Aceitar uma sugestão embutida|<kbd>Guia</kbd>|
|Ignorar uma sugestão embutida|<kbd>Esc</kbd>|
|Mostrar a próxima sugestão embutida|<kbd>Opção (⌥) ou Alt</kbd>+<kbd>]</kbd>|
|Mostrar a sugestão embutida anterior|<kbd>Opção (⌥) ou Alt</kbd>+<kbd>[</kbd>|
|Disparar a sugestão embutida|<kbd>Opção (⌥)</kbd>+<kbd>\</kbd>|
|Abrir o {% data variables.product.prodname_copilot %} (sugestões adicionais no painel separado)|<kbd>Opção (⌥) ou Alt</kbd>+<kbd>Return</kbd> |

{% endmac %}

{% windows %}

| Ação | Atalho |
|:---|:---|
|Aceitar uma sugestão embutida|<kbd>Guia</kbd>|
|Ignorar uma sugestão embutida|<kbd>Esc</kbd>|
|Mostrar a próxima sugestão embutida|<kbd>Alt</kbd>+<kbd>]</kbd>|
|Mostrar a sugestão embutida anterior|<kbd>Alt</kbd>+<kbd>[</kbd>|
|Disparar a sugestão embutida|<kbd>Alt</kbd>+<kbd>\</kbd>|
|Abrir o {% data variables.product.prodname_copilot %} (sugestões adicionais no painel separado)|<kbd>Alt</kbd>+<kbd>Enter</kbd> |

{% endwindows %}

{% linux %}

| Ação | Atalho |
|:---|:---|
|Aceitar uma sugestão embutida|<kbd>Guia</kbd>|
|Ignorar uma sugestão embutida|<kbd>Esc</kbd>|
|Mostrar a próxima sugestão embutida|<kbd>Alt</kbd>+<kbd>]</kbd>|
|Mostrar a sugestão embutida anterior|<kbd>Alt</kbd>+<kbd>[</kbd>|
|Disparar a sugestão embutida|<kbd>Alt</kbd>+<kbd>\</kbd>|
|Abrir o {% data variables.product.prodname_copilot %} (sugestões adicionais no painel separado)|<kbd>Alt</kbd>+<kbd>Enter</kbd> |

{% endlinux %}

## Como habilitar ou desabilitar o {% data variables.product.prodname_copilot %}

Você pode habilitar ou desabilitar o {% data variables.product.prodname_copilot %} de dentro do IDE da JetBrains. O ícone de status do {% data variables.product.prodname_copilot %} no painel inferior da janela do JetBrains indica se o {% data variables.product.prodname_copilot %} está habilitado ou desabilitado. Quando habilitado, o ícone fica realçado. Quando desabilitado, o ícone fica esmaecido.

1. Para habilitar ou desabilitar o {% data variables.product.prodname_copilot %}, clique no ícone de status no painel inferior da janela do JetBrains.
   ![Ícone de status no JetBrains](/assets/images/help/copilot/status-icon-jetbrains.png)
2. Se você estiver desabilitando o {% data variables.product.prodname_copilot %}, será perguntado se deseja desabilitá-lo globalmente ou para a linguagem do arquivo que está editando no momento. Para desabilitar globalmente, clique em **Desabilitar Conclusões**. Como alternativa, clique no botão específico da linguagem para desabilitar o {% data variables.product.prodname_copilot %} para a linguagem especificada.
   ![Desabilitar o {% data variables.product.prodname_copilot %} globalmente ou para a linguagem atual](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)

## Como definir configurações avançadas para o {% data variables.product.prodname_copilot %}

Você pode gerenciar as configurações avançadas do {% data variables.product.prodname_copilot %} no IDE do JetBrains. Por exemplo, como o IDE exibe conclusões de código e quais linguagens você quer habilitar ou desabilitar para o {% data variables.product.prodname_copilot %}.

1. No IDE do JetBrains, clique no menu **Arquivo** e depois em **Configurações**.
1. Em **Linguagens e Estruturas**, clique em **{% data variables.product.prodname_copilot %}** .
1. Edite as configurações de acordo com suas preferências pessoais.
   - Para ajustar o comportamento e a aparência das sugestões de código e se deseja verificar automaticamente se há atualizações, marque ou desmarque as caixas de seleção correspondentes.
   - Se você selecionar que deseja receber atualizações automáticas, escolha se quer receber atualizações estáveis, mas menos frequentes, ou atualizações noturnas, que podem ser menos estáveis. Clique na lista suspensa **Atualizar canal** e selecione **Estável** para atualizações estáveis ou **Noturnas** para atualizações noturnas.
   - Em "Idiomas desabilitados", use as caixas de seleção para marcar ou desmarcar os idiomas para os quais deseja desativar o {% data variables.product.prodname_copilot %}.

## Como definir as configurações de proxy para o {% data variables.product.prodname_copilot %}

Você pode configurar o {% data variables.product.prodname_copilot %} para se conectar por meio de um servidor proxy HTTP em um IDE Jetbrains. {% data variables.product.prodname_copilot %} oferece suporte a configurações básicas de proxy HTTP, com ou sem autenticação básica. 

1. No IDE do JetBrains, clique no menu **Arquivo** e depois em **Configurações**.
1. Em **Aparência e Comportamento**, clique em **Configurações do Sistema** e, em seguida, clique em **Proxy HTTP**.
1. Marque a caixa de seleção **Configuração manual de proxy** e marque a caixa de seleção **HTTP**.
1. No campo "Nome do host", insira o nome do host do servidor proxy e, no campo "Número da porta", insira o número da porta do servidor proxy.

    ![Captura de tela das configurações de proxy HTTP no JetBrains](/assets/images/help/copilot/proxy-configuration-jetbrains.png)

1. Opcionalmente, na barra lateral esquerda, clique em **Ferramentas** e, em seguida, clique em **Certificados do Servidor**. Em seguida, selecione ou desmarque a caixa de seleção "Aceitar certificados não confiáveis automaticamente", dependendo de você desejar aceitar ou não certificados não confiáveis automaticamente.

    ![Captura de tela das configurações de certificados do servidor no JetBrains](/assets/images/help/copilot/server-certificates-jetbrains.png)

{% data reusables.copilot.dotcom-settings %}
