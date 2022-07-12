---
title: Configurando o GitHub Copilot em um JetBrains IDE
intro: 'Você pode habilitar, configurar e desabilitar {% data variables.product.prodname_copilot %} em um JetBrains IDE.'
product: '{% data reusables.gated-features.copilot %}'
topics:
  - Copilot
versions:
  feature: copilot
shortTitle: JetBrains
---

## Sobre o {% data variables.product.prodname_copilot %} no JetBrains IDEs

Se você usar um Jetbrains IDE, {% data variables.product.prodname_copilot %} poderá preencher automaticamente o código conforme você digita. Após a instalação, você pode habilitar ou desabilitar {% data variables.product.prodname_copilot %}, e você pode definir as configurações avançadas dentro do IDE ou em {% data variables.product.prodname_dotcom_the_website %}.

## Pré-requisitos

Para configurar {% data variables.product.prodname_copilot %} em um JetBrains IDE, você deve instalar o plugin de {% data variables.product.prodname_copilot %}. Para obter mais informações, consulte "[Primeiros passos com {% data variables.product.prodname_copilot %} em um JetBrains IDE](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-a-jetbrains-ide)."

## Atalhos de teclado para {% data variables.product.prodname_copilot %}

Você pode usar os atalhos de teclado padrão para sugestões inline no IDE do seu JetBrains quando usar {% data variables.product.prodname_copilot %}. Como alternativa, você pode revincular os atalhos aos seus atalhos de teclado preferidos para cada comando específico. Para mais informações sobre revincular atalhos de teclado na sua JetBrains IDE, consulte a documentação do JetBrains. Por exemplo, você pode ver a documentação [IntelliJ IDEA](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html#choose-keymap).

{% mac %}

| Ação                                                                                          | Atalho                                        |
|:--------------------------------------------------------------------------------------------- |:--------------------------------------------- |
| Aceite uma sugestão inline                                                                    | <kbd>Tab</kbd>                                |
| Ignorar uma sugestão inline                                                                   | <kbd>Esc</kbd>                                |
| Mostrar próxima sugestão inline                                                               | <kbd>Option (⌥) or Alt</kbd>+<kbd>]</kbd>     |
| Mostrar sugestão inline anterior                                                              | <kbd>Option (⌥) ou Alt</kbd>+<kbd>[</kbd>     |
| Acionar sugestão inline                                                                       | <kbd>Option (⌥)</kbd>+<kbd>\</kbd>           |
| Abrir {% data variables.product.prodname_copilot %} (sugestões adicionais em painel separado) | <kbd>Opção (⌥) ou Alt</kbd>+<kbd>Return</kbd> |

{% endmac %}

{% windows %}

| Ação                                                                                          | Atalho                          |
|:--------------------------------------------------------------------------------------------- |:------------------------------- |
| Aceite uma sugestão inline                                                                    | <kbd>Tab</kbd>                  |
| Ignorar uma sugestão inline                                                                   | <kbd>Esc</kbd>                  |
| Mostrar próxima sugestão inline                                                               | <kbd>Alt</kbd>+<kbd>]</kbd>     |
| Mostrar sugestão inline anterior                                                              | <kbd>Alt</kbd>+<kbd>[</kbd>     |
| Acionar sugestão inline                                                                       | <kbd>Alt</kbd>+<kbd>\</kbd>    |
| Abrir {% data variables.product.prodname_copilot %} (sugestões adicionais em painel separado) | <kbd>Alt</kbd>+<kbd>Enter</kbd> |

{% endwindows %}

{% linux %}

| Ação                                                                                          | Atalho                          |
|:--------------------------------------------------------------------------------------------- |:------------------------------- |
| Aceite uma sugestão inline                                                                    | <kbd>Tab</kbd>                  |
| Ignorar uma sugestão inline                                                                   | <kbd>Esc</kbd>                  |
| Mostrar próxima sugestão inline                                                               | <kbd>Alt</kbd>+<kbd>]</kbd>     |
| Mostrar sugestão inline anterior                                                              | <kbd>Alt</kbd>+<kbd>[</kbd>     |
| Acionar sugestão inline                                                                       | <kbd>Alt</kbd>+<kbd>\</kbd>    |
| Abrir {% data variables.product.prodname_copilot %} (sugestões adicionais em painel separado) | <kbd>Alt</kbd>+<kbd>Enter</kbd> |

{% endlinux %}

## Habilitar ou desabilitar {% data variables.product.prodname_copilot %}

Você pode habilitar ou desabilitar {% data variables.product.prodname_copilot %} dentro do seu JetBrains IDE. O ícone de status {% data variables.product.prodname_copilot %} na parte inferior da janela do JetBrains indica se o {% data variables.product.prodname_copilot %} está habilitado ou desabilitado. Quando habilitado, o ícone é destacado. Quando desabilitado, o ícone fica inativo.

1. Para habilitar ou desabilitar {% data variables.product.prodname_copilot %}, clique no ícone de status no painel inferior da janela do JetBrains. ![Ícone de status no JetBrains](/assets/images/help/copilot/status-icon-jetbrains.png)
2. Se você estiver desabilitando {% data variables.product.prodname_copilot %}, será perguntado se deseja desativá-lo globalmente ou para a linguagem do arquivo que você está editando atualmente. Para desabilitar globalmente, clique em **Desabilitar as conclusões**. Como alternativa, clique no botão da linguagem específica para desabilitar {% data variables.product.prodname_copilot %} para a linguagem especificada. ![Desabilite {% data variables.product.prodname_copilot %} globalmente ou para a linguagem atual](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)

## Definindo as configurações avançadas para {% data variables.product.prodname_copilot %}

Você pode gerenciar as configurações avançadas para {% data variables.product.prodname_copilot %} em seu JetBrains IDE como, por exemplo, a sua IDE exibe complementos de código, e quais linguagens você deseja habilitar ou desabilitar para {% data variables.product.prodname_copilot %}.

1. No seu JetBrains IDE, clique no menu **Arquivo** e, em seguida, clique em **Configurações**.
1. Em **Linguagens & Frameworks**, clique em **{% data variables.product.prodname_copilot %}**.
1. Edite as configurações de acordo com suas preferências pessoais.
   - Para ajustar o comportamento e a aparência das sugestões de código e verificar automaticamente se há atualizações, selecione ou desmarque as caixas de seleção correspondentes.
   - Se você selecionou receber atualizações automáticas, você pode escolher se deseja receber atualizações estáveis, porém atualizações menos frequentes ou novidades noturnas, que podem ser menos estáveis. Clique no menu suspenso **Canal de atualização** suspenso e selecione **Estável** para atualizações estáveis ou **Noturno** para atualizações noturnas.
   - Em "Desabilitar idiomas", use as caixas de seleção para selecionar ou desmarcar as linguagens para as quais você deseja desabilitar {% data variables.product.prodname_copilot %}.

{% data reusables.copilot.dotcom-settings %}
