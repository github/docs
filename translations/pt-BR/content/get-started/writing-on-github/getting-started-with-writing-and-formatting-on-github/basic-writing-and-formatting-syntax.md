---
title: Sintaxe básica de gravação e formatação no GitHub
intro: Crie formatação sofisticada para narração e código no GitHub com sintaxe simples.
redirect_from:
  - /articles/basic-writing-and-formatting-syntax
  - /github/writing-on-github/basic-writing-and-formatting-syntax
  - /github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Basic formatting syntax
ms.openlocfilehash: e8df0930f675834c120bbe187924f9696142e09f
ms.sourcegitcommit: e4069b5613c10d74954185995d0fb73224079463
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/17/2022
ms.locfileid: '148169245'
---
## Títulos

Para criar um título, adicione de um a seis símbolos <kbd>#</kbd> antes do texto do título. O número de <kbd>#</kbd> que você usará para determinar o tamanho do título.

```markdown
# The largest heading
## The second largest heading
###### The smallest heading
```

![Títulos H1, H2 e H6 renderizados](/assets/images/help/writing/headings-rendered.png)

Ao usar dois ou mais cabeçalhos, o GitHub gera automaticamente uma tabela de conteúdo que você pode acessar clicando em {% octicon "list-unordered" aria-label="The unordered list icon" %} dentro do cabeçalho do arquivo. Cada título do cabeçalho está listado na tabela de conteúdo e você pode clicar em um título para acessar a seção selecionada. 

![Captura de tela que destaca o ícone da tabela de conteúdo](/assets/images/help/repository/headings_toc.png)

## Estilo do texto

Você pode indicar ênfase com texto em negrito, itálico, tachado, subscrito ou sobrescrito em campos de comentários e arquivos `.md`.  

| Estilo | Sintaxe | Atalho do teclado | Exemplo | Saída |
| --- | --- | --- | --- | --- |
| Negrito | `** **` ou `__ __`| <kbd>Comando</kbd>+<kbd>B</kbd> (Mac) ou <kbd>CTRL</kbd>+<kbd>B</kbd> (Windows/Linux) | `**This is bold text**` | **Este texto está em negrito** |
| Itálico | `* *` ou `_ _`     | <kbd>Comando</kbd>+<kbd>I</kbd> (Mac) ou <kbd>CTRL</kbd>+<kbd>I</kbd> (Windows/Linux) | `*This text is italicized*` | *Este texto está em itálico* |
| Tachado | `~~ ~~` | | `~~This was mistaken text~~` | ~~Este texto contém um erro~~ |
| Negrito e itálico aninhado | `** **` e `_ _` | | `**This text is _extremely_ important**` | **Este texto é _extremamente_ importante** |
| Todo em negrito e itálico | `*** **_` | | `_*_All this text is important_*_` | _ *_Todo este texto é importante_** |
| Subscrito | `<sub> </sub>` | | `<sub>This is a subscript text</sub>` | <sub>Este é um texto subscrito</sub> |
| Sobrescrito | `<sup> </sup>` | | `<sup>This is a superscript text</sup>` | <sup>Este é um texto sobrescrito</sup> |

## Texto de referência

Você pode citar um texto com <kbd>></kbd>.

```markdown
Text that is not a quote

> Text that is a quote
```

![Texto citado renderizado](/assets/images/help/writing/quoted-text-rendered.png)

{% tip %}

**Dica:** ao ver uma conversa, você pode citar automaticamente o texto em um comentário realçando o texto e digitando <kbd>R</kbd>. Cite um comentário inteiro clicando em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e em **Resposta de citação**. Para obter mais informações sobre atalhos de teclado, confira "[Atalhos de teclado](/articles/keyboard-shortcuts/)".

{% endtip %}

## Citar código

Você pode chamar código ou um comando em uma frase com aspas simples. O texto entre as aspas não será formatado. Você também pode pressionar o atalho de teclado <kbd>Comando</kbd>+<kbd>E</kbd> (Mac) ou <kbd>Ctrl</kbd>+<kbd>E</kbd> (Windows/Linux) para inserir os acentos graves para um bloco de código dentro de uma linha de Markdown.

```markdown
Use `git status` to list all new or modified files that haven't yet been committed.
```

![Bloco de código inline renderizado](/assets/images/help/writing/inline-code-rendered.png)

Para formatar código ou texto no próprio bloco distinto, use aspas triplas.

<pre>
Some basic Git commands are:
```
git status
git add
git commit
```
</pre>

![Bloco de código renderizado](/assets/images/help/writing/code-block-rendered.png)

Para obter mais informações, confira "[Como criar e realçar blocos de código](/articles/creating-and-highlighting-code-blocks)".

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Modelos de cores com suporte

Em problemas, solicitações de pull e discussões, você pode chamar cores dentro de uma frase usando aspas invertidas. Um modelo de cor com suporte em aspas invertidas exibirá uma visualização da cor.

```markdown
The background color should be `#ffffff` for light mode and `#0d1117` for dark mode.
```

![Modelo de cor com suporte renderizado.](/assets/images/help/writing/supported-color-models-rendered.png)

Veja abaixo os modelos de cores com suporte no momento.

| Cor | Sintaxe | Exemplo | Saída |
| --- | --- | --- | --- |
| HEX | <code>\`#RRGGBB\`</code> | <code>\`#0969DA\`</code> | ![Modelo de cor com suporte renderizado no formato HEX.](/assets/images/help/writing/supported-color-models-hex-rendered.png) |
| RGB | <code>\`rgb(R,G,B)\`</code> | <code>\`rgb(9, 105, 218)\`</code> | ![Modelo de cor com suporte renderizado no formato RGB.](/assets/images/help/writing/supported-color-models-rgb-rendered.png) |
| HSL | <code>\`hsl(H,S,L)\`</code> | <code>\`hsl(212, 92%, 45%)\`</code> | ![Modelo de cor com suporte renderizado no formato HSL.](/assets/images/help/writing/supported-color-models-hsl-rendered.png) |

{% note %}

**Observações:**

- Um modelo de cor com suporte não pode ter espaços à esquerda ou à direita dentro das aspas invertidas.
- A visualização da cor só tem suporte em problemas, solicitações de pull e discussões.

{% endnote %}

## Links

Você pode criar um link embutido colocando o texto do link entre colchetes `[ ]` e colocando a URL entre parênteses `( )`. Você também pode usar o atalho de teclado <kbd>Command</kbd>+<kbd>K</kbd> para criar um link.{% ifversion fpt or ghae > 3.3 or ghes > 3.3 or ghec %} Depois de selecionar o texto, você poderá colar uma URL da área de transferência para criar um link automaticamente com base na seleção.{% endif %}

{% ifversion fpt or ghae > 3.5 or ghes > 3.5 or ghec %} Você também pode criar um hiperlink Markdown realçando o texto e usando o atalho de teclado <kbd>Command</kbd>+<kbd>V</kbd>. Se você quiser substituir o texto pelo link, use o atalho de teclado <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd>.{% endif %}

`This site was built using [GitHub Pages](https://pages.github.com/).`

![Link renderizado](/assets/images/help/writing/link-rendered.png)

{% tip %}

**Dica:** o {% data variables.product.product_name %} cria links automaticamente quando URLs válidas são escritas em um comentário. Para obter mais informações, confira [URLs e referências vinculadas automaticamente](/articles/autolinked-references-and-urls).

{% endtip %}

## Links de seção

{% data reusables.repositories.section-links %}

## Links relativos

{% data reusables.repositories.relative-links %}

## Imagens

Você pode exibir uma imagem adicionando <kbd>!</kbd> e colocando o texto Alt entre `[ ]`. Em seguida, coloque o link da imagem entre parênteses `()`.

`![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)`

![Imagem interpretada](/assets/images/help/writing/image-rendered.png)

O {% data variables.product.product_name %} dá suporte à inserção de imagens em problemas, solicitações de pull{% ifversion fpt or ghec %}, discussões{% endif %}, comentários e arquivos `.md`. Você pode exibir uma imagem do seu repositório, adicionar um link para uma imagem on-line ou fazer o upload de uma imagem. Para obter mais informações, confira "[Como carregar ativos](#uploading-assets)".

{% tip %}

**Dica:** quando você quiser exibir uma imagem que está no seu repositório, use links relativos em vez de links absolutos.

{% endtip %}

Aqui estão alguns exemplos para usar links relativos para exibir uma imagem.

| Contexto | Link relativo |
| ------ | -------- |
| Em um arquivo `.md` no mesmo branch | `/assets/images/electrocat.png` |
| Em um arquivo `.md` em outro branch | `/../main/assets/images/electrocat.png` |
| Em problemas, pull requests e comentários do repositório | `../blob/main/assets/images/electrocat.png?raw=true` |
| Em um arquivo `.md` em outro repositório | `/../../../../github/docs/blob/main/assets/images/electrocat.png` |
| Em problemas, pull requests e comentários de outro repositório | `../../../github/docs/blob/main/assets/images/electrocat.png?raw=true` |

{% note %}

**Observação:** os dois últimos links relativos da tabela acima funcionarão para imagens de um repositório privado somente se o visualizador tiver, pelo menos, acesso de leitura no repositório privado que contém essas imagens.

{% endnote %}

Para obter mais informações, confira [Links relativos](#relative-links)".

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %}
### Especificando o tema para o qual uma imagem será exibida

Você pode especificar o tema para o qual uma imagem é exibida no Markdown usando o elemento HTML `<picture>` em combinação com o recurso de mídia `prefers-color-scheme`. Nós distinguimos entre os modos de cores claro e escuro. Portanto, há duas opções disponíveis. Você pode usar essas opções para exibir imagens otimizadas para fundos escuros ou claros. Isso é particularmente útil para imagens PNG transparentes.

Por exemplo, o seguinte código exibe uma imagem de sol para temas claros e uma lua para temas escuros:

{% data reusables.getting-started.picture-element-example %}

O método antigo de especificar imagens com base no tema, usando um fragmento acrescentado à URL (`#gh-dark-mode-only` ou `#gh-light-mode-only`), foi preterido e será removido em favor do novo método descrito acima.
{% endif %}

## Listas

Você pode criar uma lista não ordenada precedendo uma ou mais linhas de texto com <kbd>-</kbd>, <kbd>*</kbd> ou <kbd>+</kbd>.

```markdown
- George Washington
* John Adams
+ Thomas Jefferson
```

![Lista não ordenada renderizada](/assets/images/help/writing/unordered-list-rendered.png)

Para ordenar a lista, coloque um número na frente de cada linha.

```markdown
1. James Madison
2. James Monroe
3. John Quincy Adams
```

![Lista ordenada renderizada](/assets/images/help/writing/ordered-list-rendered.png)

### Listas aninhadas

Você pode criar uma lista aninhada recuando um ou mais itens da lista abaixo de outro item.

Para criar uma lista aninhada usando o editor Web do {% data variables.product.product_name %} ou um editor de texto que use uma fonte monoespaçada, como o [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/), você pode alinhar a lista visualmente. Digite caracteres de espaço na frente do item de lista aninhada até que o caractere de marcador da lista (<kbd>-</kbd> ou <kbd>*</kbd>) fique diretamente abaixo do primeiro caractere do texto no item acima dele.

```markdown
1. First list item
   - First nested list item
     - Second nested list item
```

{% tip %}

**Observação**: no editor baseado na Web, você pode recuar uma ou mais linhas de texto ou desfazer o recuo realçando primeiro as linhas desejadas e, depois, usando <kbd>Tab</kbd> ou <kbd>SHIFT</kbd>+<kbd>Tab</kbd>, respectivamente.

{% endtip %}

![Lista aninhada com alinhamento destacado](/assets/images/help/writing/nested-list-alignment.png)

![Lista com dois níveis de itens aninhados](/assets/images/help/writing/nested-list-example-1.png)

Para criar uma lista aninhada no editor de comentários do {% data variables.product.product_name %}, que não usa uma fonte monoespaçada, você pode observar o item da lista logo acima da lista aninhada e contar o número de caracteres que aparecem antes do conteúdo do item. Em seguida, digite esse número de caracteres de espaço na fonte do item da linha aninhada.

Neste exemplo, você pode adicionar um item de lista aninhada no item de lista `100. First list item` recuando o item de lista aninhada no mínimo cinco espaços, pois há cinco caracteres (`100. `) antes de `First list item`.

```markdown
100. First list item
     - First nested list item
```

![Lista com um item de lista aninhada](/assets/images/help/writing/nested-list-example-3.png)   

Você pode criar vários níveis de listas aninhadas usando o mesmo método. Por exemplo, como o primeiro item de lista aninhada tem sete caracteres (`␣␣␣␣␣-␣`) antes do conteúdo da lista aninhada `First nested list item`, você precisa recuar o segundo item de lista aninhada com sete espaços.

```markdown
100. First list item
     - First nested list item
       - Second nested list item
```

![Lista com dois níveis de itens aninhados](/assets/images/help/writing/nested-list-example-2.png)    

Para obter mais exemplos, confira a [Especificação do GitHub Flavored Markdown](https://github.github.com/gfm/#example-265).

## Listas de tarefas

{% data reusables.repositories.task-list-markdown %}

Se a descrição de um item da lista de tarefas começar com parênteses, você precisará fazer escape dele com <kbd>\\</kbd>:

`- [ ] \(Optional) Open a followup issue`

Para obter mais informações, confira "[Sobre as listas de tarefas](/articles/about-task-lists)".

## Mencionar pessoas e equipes

Você pode mencionar uma pessoa ou uma [equipe](/articles/setting-up-teams/) no {% data variables.product.product_name %} digitando <kbd>@</kbd> mais seu nome de usuário ou o nome da equipe. Isto desencadeará uma notificação e chamará a sua atenção para a conversa. As pessoas também receberão uma notificação se você editar um comentário para mencionar o respectivo nome de usuário ou da equipe. Para obter mais informações sobre as notificações, confira “[Sobre notificações](/github/managing-subscriptions-and-notifications-on-github/about-notifications).”

{% note %}

**Observação:** Uma pessoa será notificada sobre uma menção somente se ela tiver acesso de leitura ao repositório e, caso o repositório pertença a uma organização, se ela for membro da organização.

{% endnote %}

`@github/support What do you think about these updates?`

![@mention renderizado](/assets/images/help/writing/mention-rendered.png)

Quando você menciona uma equipe principal, os integrantes de suas equipes secundárias também recebem notificações, simplificando a comunicação com vários grupos de pessoas. Para obter mais informações, confira "[Sobre as equipes](/articles/about-teams)".

Se você digitar um símbolo <kbd>@</kbd>, uma lista de pessoas ou de equipes em um projeto será exibida. A lista é filtrada à medida que você digita. Portanto, assim que você achar o nome da pessoa ou da equipe que está procurando, use as teclas de seta para selecioná-lo e pressione tab ou enter para completar o nome. Para equipes, insira o @organization/team-name e todos os membros dessa equipe serão inscritos na conversa.

Os resultados do preenchimento automático são restritos aos colaboradores do repositório e qualquer outro participante no thread.

## Fazer referências a problemas e pull requests

Você pode mostrar uma lista de solicitações de pull e problemas sugeridos no repositório digitando <kbd>#</kbd>. Digite o número ou o título do problema ou da pull request para filtrar a lista e, em seguida, pressione tab ou enter para completar o resultado destacado.

Para obter mais informações, confira [URLs e referências vinculadas automaticamente](/articles/autolinked-references-and-urls).

## Fazer referência a recursos externos

{% data reusables.repositories.autolink-references %}

{% ifversion ghes < 3.4 %}
## Anexos de conteúdo

Alguns {% data variables.product.prodname_github_apps %} fornecem informações em {% data variables.product.product_name %} para URLs vinculadas aos seus domínios registrados. O {% data variables.product.product_name %} renderiza as informações fornecidas pelo app sob o URL no texto ou comentário de um problema ou uma pull request.

![Anexo de conteúdo](/assets/images/github-apps/content_reference_attachment.png)

Para ver anexos de conteúdo, você precisa ter um {% data variables.product.prodname_github_app %} que use a API de Anexos de Conteúdo instalada no repositório.{% ifversion fpt or ghec %} Para obter mais informações, confira "[Como instalar um aplicativo na sua conta pessoal](/articles/installing-an-app-in-your-personal-account)" e "[Como instalar um aplicativo na sua organização](/articles/installing-an-app-in-your-organization)".{% endif %}

Os anexos de conteúdo não serão exibidos para URLs que fazem parte de um link markdown.

Para obter mais informações sobre como compilar um {% data variables.product.prodname_github_app %} que use anexos de conteúdo, confira "[Como usar anexos de conteúdo](/apps/using-content-attachments)".{% endif %}

## Fazer upload de ativos

Você pode fazer upload de ativos como imagens, arrastando e soltando, fazendo a seleção a partir de um navegador de arquivos ou colando. Carregue ativos em problemas, solicitações de pull, comentários e arquivos `.md` no seu repositório.

## Usar emoji

Adicione um emoji à sua escrita digitando `:EMOJICODE:`.

`@octocat :+1: This PR looks great - it's ready to merge! :shipit:`

![Emoji renderizado](/assets/images/help/writing/emoji-rendered.png)

Se você digitar <kbd>:</kbd>, uma lista de emojis sugeridos será exibida. A lista será filtrada à medida que você digitar algo. Portanto, assim que encontrar o emoji que estava procurando, pressione **Tab** ou **ENTER** para completar o resultado realçado.

Para obter uma lista completa de emojis e códigos disponíveis, confira [a Emoji-Cheat-Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md).

## Parágrafos

Você pode criar um parágrafo deixando uma linha em branco entre as linhas de texto.

## Notas de rodapé

Você pode adicionar notas de rodapé ao seu conteúdo usando esta sintaxe entre colchetes:

```
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.
[^2]: Every new line should be prefixed with 2 spaces.  
  This allows you to have a footnote with multiple lines.
[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    This footnote also has been made with a different syntax using 4 spaces for new lines.
```

A nota de rodapé será interpretada da seguinte forma:

![Nota de rodapé interpretada](/assets/images/site/rendered-footnote.png)

{% tip %}

**Observação**: a posição de uma nota de rodapé no Markdown não influenciará o lugar em que a nota de rodapé será renderizada. Você pode escrever uma nota de rodapé logo após sua referência à nota de rodapé, e ela continuará sendo interpretada na parte inferior do Markdown.

Não há suporte para notas de rodapé em wikis.

{% endtip %}

## Ocultando o conteúdo com comentários

Você pode dizer a {% data variables.product.product_name %} para ocultar o conteúdo do markdown interpretado, colocando o conteúdo em um comentário HTML.

<pre>
&lt;!-- This content will not appear in the rendered Markdown --&gt;
</pre>

## Ignorar formatação markdown

Instrua o {% data variables.product.product_name %} a ignorar a formatação Markdown (ou fazer escape dela) usando <kbd>\\</kbd> antes do caractere Markdown.

`Let's rename \*our-new-project\* to \*our-old-project\*.`

![Caractere com escape renderizado](/assets/images/help/writing/escaped-character-rendered.png)

Para obter mais informações, confira "[Sintaxe de Markdown](https://daringfireball.net/projects/markdown/syntax#backslash)" do Daring Fireball.

## Desabilitando a interpretação do Markdown

{% data reusables.repositories.disabling-markdown-rendering %}

## Leitura adicional

- [Especificações do {% data variables.product.prodname_dotcom %} Flavored Markdown](https://github.github.com/gfm/)
- "[Sobre a escrita e a formatação no GitHub](/articles/about-writing-and-formatting-on-github)"
- "[Como trabalhar com formatação avançada](/articles/working-with-advanced-formatting)"
- "[Guia de início rápido de comunicação no {% data variables.product.prodname_dotcom %}](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/quickstart-for-writing-on-github)"
