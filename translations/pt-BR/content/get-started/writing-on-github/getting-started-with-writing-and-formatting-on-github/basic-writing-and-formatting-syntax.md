---
title: Sintaxe básica de escrita e formatação no GitHub
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
shortTitle: Sintaxe de formatação básica
---

## Títulos

Para criar um título, adicione de um a seis símbolos <kbd>#</kbd> antes do texto do título. O número de <kbd>#</kbd> que você usa determinará o tamanho do título.

```markdown
# O título maior
## O segundo maior título
###### O título menor
```

![Títulos H1, H2 e H6 renderizados](/assets/images/help/writing/headings-rendered.png)

Ao usar dois ou mais cabeçalhos, o GitHub gera automaticamente uma tabela de conteúdo que você pode acessar clicando em {% octicon "list-unordered" aria-label="The unordered list icon" %} dentro do cabeçalho do arquivo. Cada título do cabeçalho está listado na tabela de conteúdo e você pode clicar em um título para acessar a seção selecionada.

![Captura de tela que destaca o ícone da tabela de conteúdo](/assets/images/help/repository/headings_toc.png)


## Estilizar texto

Você pode indicar ênfase com texto em negrito, itálico ou riscado em campos de comentários e arquivos de `.md`.

| Estilo                     | Sintaxe             | Atalho                                                                                | Exemplo                                      | Resultado                                  |
| -------------------------- | ------------------- | ------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------ |
| Negrito                    | `** **` ou `__ __`  | <kbd>Command</kbd>+<kbd>B</kbd> (Mac) ou <kbd>Ctrl</kbd>+<kbd>B</kbd> (Windows/Linux) | `**Esse texto está em negrito**`             | **Esse texto está em negrito**             |
| Itálico                    | `* *` ou `_ _`      | <kbd>Command</kbd>+<kbd>I</kbd> (Mac) ou <kbd>Ctrl</kbd>+<kbd>I</kbd> (Windows/Linux) | `*Esse texto está em itálico*`               | *Esse texto está em itálico*               |
| Tachado                    | `~~ ~~`             |                                                                                       | `~~Esse texto estava errado~~`               | ~~Esse texto estava errado~~               |
| Negrito e itálico aninhado | `** **` e `_ _`     |                                                                                       | `**Esse texto é _extremamente_ importante**` | **Esse texto é _extremamente_ importante** |
| Todo em negrito e itálico  | `*** ***`           |                                                                                       | `***Todo esse texto é importante***`         | ***Todo esse texto é importante***         |

## Citar texto

Você pode citar um texto com <kbd>></kbd>.

```markdown
Texto que não é uma citação

> Texto que é uma citação
```

![Texto citado renderizado](/assets/images/help/writing/quoted-text-rendered.png)

{% tip %}

**Dica:** Ao exibir uma conversa, você pode citar textos automaticamente em um comentário destacando o texto e digitando <kbd>R</kbd>. É possível citar um comentário inteiro clicando em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e em **Quote reply** (Resposta à citação). Para obter mais informações sobre atalhos de teclado, consulte "[Atalhos de teclado](/articles/keyboard-shortcuts/)".

{% endtip %}

## Citar código

Você pode chamar código ou um comando em uma frase com aspas simples. O texto entre aspas simples não será formatado.{% ifversion fpt or ghae or ghes > 3.1 or ghec %} Além disso, você pode pressionar o atalho no teclado <kbd>Command</kbd>+<kbd>E</kbd> (Mac) ou <kbd>Ctrl</kbd>+<kbd>E</kbd> (Windows/Linux) para inserir as aspas simples para bloqueio de código dentro de uma linha do markdown.{% endif %}

```markdown
Use 'git status' para listar todos os arquivos novos ou modificados que ainda não receberam commit.
```

![Bloco de código inline renderizado](/assets/images/help/writing/inline-code-rendered.png)

Para formatar código ou texto no próprio bloco distinto, use aspas triplas.

<pre>
Alguns comandos Git básicos são:
```
git status
git add
git commit
```
</pre>

![Bloco de código renderizado](/assets/images/help/writing/code-block-rendered.png)

Para obter mais informações, consulte "[Criar e destacar blocos de código](/articles/creating-and-highlighting-code-blocks)".

{% data reusables.user-settings.enabling-fixed-width-fonts %}

## Links

Você pode criar um link inline colocando o texto do link entre colchetes `[ ]` e, em seguida, o URL entre parênteses `( )`. {% ifversion fpt or ghae or ghes > 3.1 or ghec %}Você também pode usar o atalho de teclado <kbd>Command</kbd>+<kbd>K</kbd> para criar um link.{% endif %}{% ifversion fpt or ghae-issue-5434 or ghes > 3.3 or ghec %} Quando você tiver selecionado texto, você poderá colar um URL da sua área de transferência para criar automaticamente um link a partir da seleção.{% endif %}

`Este site foi construído usando [GitHub Pages](https://pages.github.com/).`

![Link renderizado](/assets/images/help/writing/link-rendered.png)

{% tip %}

**Dica:** o {% data variables.product.product_name %} cria links automaticamente quando URLs válidos são escritos em um comentário. Para obter mais informações, consulte "[Referências e URLs vinculados automaticamente](/articles/autolinked-references-and-urls)".

{% endtip %}

## Links de seção

{% data reusables.repositories.section-links %}

## Links relativos

{% data reusables.repositories.relative-links %}

## Imagens

Você pode exibir uma imagem adicionando <kbd>!</kbd> e por o texto alternativo em`[ ]`. Em seguida, coloque o link da imagem entre parênteses `()`.

`![Isso é uma imagem](https://myoctocat.com/assets/images/base-octocat.svg)`

![Imagem interpretada](/assets/images/help/writing/image-rendered.png)

{% data variables.product.product_name %} é compatível com a incorporação de imagens nos seus problemas, pull requests{% ifversion fpt or ghec %}, discussões{% endif %}, comentários e arquivos `.md`. Você pode exibir uma imagem do seu repositório, adicionar um link para uma imagem on-line ou fazer o upload de uma imagem. Para obter mais informações, consulte[Fazer o upload de ativos](#uploading-assets)".

{% tip %}

**Dica:** quando você quiser exibir uma imagem que está no seu repositório, você deverá usar links relativos em vez de links absolutos.

{% endtip %}

Aqui estão alguns exemplos para usar links relativos para exibir uma imagem.

| Contexto                                                       | Link relativo                                                          |
| -------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Em um arquivo `.md` no mesmo branch                            | `/assets/images/electrocat.png`                                        |
| Em um arquivo `.md` em outro branch                            | `/../main/assets/images/electrocat.png`                                |
| Em problemas, pull requests e comentários do repositório       | `../blob/main/assets/images/electrocat.png`                            |
| Em um arquivo `.md` em outro repositório                       | `/../../../../github/docs/blob/main/assets/images/electrocat.png`      |
| Em problemas, pull requests e comentários de outro repositório | `../../../github/docs/blob/main/assets/images/electrocat.png?raw=true` |

{% note %}

**Observação**: Os dois últimos links relativos na tabela acima funcionarão para imagens em um repositório privado somente se o visualizador tiver pelo menos acesso de leitura ao repositório privado que contém essas imagens.

{% endnote %}

Para obter mais informações, consulte[Links relativos,](#relative-links)."

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5559 %}
### Especificando o tema para o qual uma imagem será exibida

Você pode especificar o tema para o qual uma imagem é exibida acrescentando `#gh-dark-mode-only` ou `#gh-light-mode-only` no final de uma URL da imagem, em Markdown.

Nós distinguimos entre os modos de cores claro e escuro. Portanto, há duas opções disponíveis. Você pode usar essas opções para exibir imagens otimizadas para fundos escuros ou claros. Isso é particularmente útil para imagens PNG transparentes.

| Contexto    | URL                                                                      |
| ----------- | ------------------------------------------------------------------------ |
| Tema escuro | `![GitHub Light](https://github.com/github-light.png#gh-dark-mode-only)` |
| Tema claro  | `![GitHub Dark](https://github.com/github-dark.png#gh-light-mode-only)`  |
{% endif %}

## Listas

Você pode criar uma lista não ordenada precedendo uma ou mais linhas de texto com <kbd>-</kbd> ou <kbd>*</kbd>.

```markdown
- George Washington
- John Adams
- Thomas Jefferson
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

Para criar uma lista aninhada usando o editor web do {% data variables.product.product_name %} ou um editor de texto que usa uma fonte monoespaçada, como o [Atom](https://atom.io/), você pode alinhar sua lista visualmente. Digite caracteres de espaço na fonte do item da lista aninhada, até que o caractere de marcador da lista (<kbd>-</kbd> ou <kbd>*</kbd>) fique diretamente abaixo do primeiro caractere do texto no item acima dele.

```markdown
1. Primeiro item da lista
   - Primeiro item de lista aninhado
     - Segundo item de lista aninhada
```

{% tip %}

**Note**: In the web-based editor, you can indent or dedent one or more lines of text by first highlighting the desired lines and then using <kbd>Tab</kbd> or <kbd>Shift</kbd>+<kbd>Tab</kbd> respectively.

{% endtip %}

![Lista aninhada com alinhamento destacado](/assets/images/help/writing/nested-list-alignment.png)

![Lista com dois níveis de itens aninhados](/assets/images/help/writing/nested-list-example-1.png)

Para criar uma lista aninhada no editor de comentários do {% data variables.product.product_name %}, que não usa uma fonte monoespaçada, você pode observar o item da lista logo acima da lista aninhada e contar o número de caracteres que aparecem antes do conteúdo do item. Em seguida, digite esse número de caracteres de espaço na fonte do item da linha aninhada.

Neste exemplo, você pode adicionar um item de lista aninhada abaixo do item de lista `100. Primeiro item da lista` recuando o item da lista aninhada com no mínimo cinco espaços, uma vez que há cinco caracteres (`100.`) antes de `Primeiro item da lista`.

```markdown
100. Primeiro item da lista
     - Primeiro item da lista aninhada
```

![Lista com um item de lista aninhada](/assets/images/help/writing/nested-list-example-3.png)

Você pode criar vários níveis de listas aninhadas usando o mesmo método. Por exemplo, como o primeiro item da lista aninhada tem sete caracteres (`␣␣␣␣␣-␣`) antes do conteúdo da lista aninhada `Primeiro item da lista aninhada`, você precisaria recuar o segundo item da lista aninhada com sete espaços.

```markdown
100. Primeiro item da lista
     - Primeiro item da lista aninhada
       - Segundo item da lista aninhada
```

![Lista com dois níveis de itens aninhados](/assets/images/help/writing/nested-list-example-2.png)

Para obter mais exemplos, consulte a [Especificação de markdown em estilo GitHub](https://github.github.com/gfm/#example-265).

## Listas de tarefas

{% data reusables.repositories.task-list-markdown %}

Se a descrição do item da lista de tarefas começar com parênteses, você deverá ignorar com <kbd>\\</kbd>:

`- [ ] \(Optional) Abrir um problema de acompanhamento`

Para obter mais informações, consulte "[Sobre listas de tarefas](/articles/about-task-lists)".

## Mencionar pessoas e equipes

Você pode mencionar uma pessoa ou [equipe](/articles/setting-up-teams/) no {% data variables.product.product_name %} digitando <kbd>@</kbd> mais o nome de usuário ou nome da equipe. Isto desencadeará uma notificação e chamará a sua atenção para a conversa. As pessoas também receberão uma notificação se você editar um comentário para mencionar o respectivo nome de usuário ou da equipe. Para obter mais informações, sobre notificações, consulte {% ifversion fpt or ghes or ghae or ghec %}"[Sobre notificações](/github/managing-subscriptions-and-notifications-on-github/about-notifications){% else %}"[Sobre notificações](/github/receiving-notifications-about-activity-on-github/about-notifications)"{% endif %}."

`@github/suporte O que você acha dessas atualizações?`

![@menção renderizada](/assets/images/help/writing/mention-rendered.png)

Quando você menciona uma equipe principal, os integrantes de suas equipes secundárias também recebem notificações, simplificando a comunicação com vários grupos de pessoas. Para obter mais informações, consulte "[Sobre equipes](/articles/about-teams)".

Digitar um símbolo <kbd>@</kbd> chamará uma lista de pessoas ou equipes em um projeto. A lista é filtrada à medida que você digita. Portanto, assim que você achar o nome da pessoa ou da equipe que está procurando, use as teclas de seta para selecioná-lo e pressione tab ou enter para completar o nome. Para equipes, digite nome da @organização/equipe e todos os integrantes dessa equipe serão inscritos na conversa.

Os resultados do preenchimento automático são restritos aos colaboradores do repositório e qualquer outro participante no thread.

## Fazer referências a problemas e pull requests

Você pode trazer à tona uma lista de problemas e pull requests sugeridos no repositório digitando <kbd>#</kbd>. Digite o número ou o título do problema ou da pull request para filtrar a lista e, em seguida, pressione tab ou enter para completar o resultado destacado.

Para obter mais informações, consulte "[Referências e URLs vinculados automaticamente](/articles/autolinked-references-and-urls)".

## Fazer referência a recursos externos

{% data reusables.repositories.autolink-references %}

{% ifversion ghes < 3.4 %}
## Anexos de conteúdo

Alguns {% data variables.product.prodname_github_apps %} fornecem informações em {% data variables.product.product_name %} para URLs vinculadas aos seus domínios registrados. O {% data variables.product.product_name %} renderiza as informações fornecidas pelo app sob o URL no texto ou comentário de um problema ou uma pull request.

![Anexo de conteúdo](/assets/images/github-apps/content_reference_attachment.png)

Para visualizar anexos de conteúdo, você deverá ter um {% data variables.product.prodname_github_app %} que use a API de Anexos de Conteúdo instalada no repositório.{% ifversion fpt or ghec %} Para obter mais informações, consulte "[Instalar um aplicativo na sua conta pessoal](/articles/installing-an-app-in-your-personal-account)" e "[Instalar um aplicativo na sua organização](/articles/installing-an-app-in-your-organization)".{% endif %}

Os anexos de conteúdo não serão exibidos para URLs que fazem parte de um link markdown.

Para obter mais informações sobre a construção de um {% data variables.product.prodname_github_app %} que usa anexos de conteúdo, consulte "[Usando anexos de conteúdo](/apps/using-content-attachments)."{% endif %}

## Fazer upload de ativos

Você pode fazer upload de ativos como imagens, arrastando e soltando, fazendo a seleção a partir de um navegador de arquivos ou colando. É possível fazer o upload de recursos para problemas, pull requests, comentários e arquivos `.md` no seu repositório.

## Usar emoji

Você pode adicionar emoji à sua escrita digitando `:EMOJICODE:`.

`@octocat :+1: Este PR parece ótimo - está pronto para o merge! :shipit:`

![Emoji renderizado](/assets/images/help/writing/emoji-rendered.png)

Digitar <kbd>:</kbd> trará à tona uma lista de emojis sugeridos. A lista será filtrada à medida que você digita. Portanto, assim que encontrar o emoji que estava procurando, pressione **Tab** ou **Enter** para completar o resultado destacado.

Para obter uma lista completa dos emojis e códigos disponíveis, confira [a lista de emojis](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md).

## Parágrafos

Você pode criar um parágrafo deixando uma linha em branco entre as linhas de texto.

{% ifversion fpt or ghae-issue-5180 or ghes > 3.2 or ghec %}
## Notas de rodapé

Você pode adicionar notas de rodapé ao seu conteúdo usando esta sintaxe entre colchetes:

```
Essa é uma simples nota de rodapé[^1].

Uma nota de rodapé também pode ter várias linhas[^2].  

Você também pode usar palavras, para se adequar melhor ao seu estilo de escrita[^note].

[^1]: Minha referência.
[^2]: Cada nova linha deve ser precedida de 2 espaços.  
  Isso permite que você tenha uma nota de rodapé com várias linhas.
[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    Essa nota de rodapé também foi feita com uma sintaxe diferente usando 4 espaços para novas linhas.
```

A nota de rodapé será interpretada da seguinte forma:

![Nota de rodapé interpretada](/assets/images/site/rendered-footnote.png)

{% tip %}

**Observação**: A posição de uma nota de rodapé no seu Markdown não influencia o lugar onde a nota de rodapé será interpretada. Você pode escrever uma nota de rodapé logo após sua referência à nota de rodapé, e ela continuará sendo interpretada na parte inferior do Markdown.

Notas de rodapé não são compatíveis nos wikis.

{% endtip %}
{% endif %}

## Ocultando o conteúdo com comentários

Você pode dizer a {% data variables.product.product_name %} para ocultar o conteúdo do markdown interpretado, colocando o conteúdo em um comentário HTML.

<pre>
&lt;!-- This content will not appear in the rendered Markdown --&gt;
</pre>

## Ignorar formatação markdown

Você pode dizer a {% data variables.product.product_name %} para ignorar (ou sair) a formatação do Markdown usando <kbd>\\</kbd> antes do caractere do Markdown.

`Vamos renomear \*our-new-project\* para \*our-old-project\*.`

![Caractere com escape renderizado](/assets/images/help/writing/escaped-character-rendered.png)

Para obter mais informações, consulte "[Sintaxe markdown](https://daringfireball.net/projects/markdown/syntax#backslash)" de Daring Fireball.

{% ifversion fpt or ghes > 3.2 or ghae-issue-5232 or ghec %}

## Desabilitando a interpretação do Markdown

{% data reusables.repositories.disabling-markdown-rendering %}

{% endif %}

## Leia mais

- [Especificações de markdown em estilo {% data variables.product.prodname_dotcom %}](https://github.github.com/gfm/)
- "[Sobre escrita e formatação no GitHub](/articles/about-writing-and-formatting-on-github)"
- "[Trabalhar com formatação avançada](/articles/working-with-advanced-formatting)"
- "[Dominar o markdown](https://guides.github.com/features/mastering-markdown/)"
