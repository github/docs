---
title: Sintaxe básica de escrita e formatação no GitHub
intro: Crie formatação sofisticada para narração e código no GitHub com sintaxe simples.
redirect_from:
  - /articles/basic-writing-and-formatting-syntax
  - /github/writing-on-github/basic-writing-and-formatting-syntax
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
### Títulos

Para criar um título, adicione de um a seis símbolos `#` antes do texto do título. O número de `#` que você usa determinará o tamanho do título.

```markdown
# O título maior
## O segundo maior título
###### O título menor
```

![Títulos H1, H2 e H6 renderizados](/assets/images/help/writing/headings-rendered.png)

### Estilizar texto

Você pode indicar ênfase com texto em negrito, itálico ou riscado em campos de comentários e arquivos de `.md`.

| Estilo                     | Sintaxe            | Atalho              | Exemplo                                      | Resultado                                  |
| -------------------------- | ------------------ | ------------------- | -------------------------------------------- | ------------------------------------------ |
| Negrito                    | `** **` ou `__ __` | command/control + b | `**Esse texto está em negrito**`             | **Esse texto está em negrito**             |
| Itálico                    | `* *` ou `_ _`     | command/control + i | `*Esse texto está em itálico*`               | *Esse texto está em itálico*               |
| Tachado                    | `~~ ~~`            |                     | `~~Esse texto estava errado~~`               | ~~Esse texto estava errado~~               |
| Negrito e itálico aninhado | `** **` e `_ _`    |                     | `**Esse texto é _extremamente_ importante**` | **Esse texto é _extremamente_ importante** |
| Todo em negrito e itálico  | `*** ***`          |                     | `***Todo esse texto é importante***`         | ***Todo esse texto é importante***         |

### Citar texto

Você pode citar texto com um `>`.

```markdown
Nas palavras de Abraham Lincoln:

> Pardon my French
```

![Texto citado renderizado](/assets/images/help/writing/quoted-text-rendered.png)

{% tip %}

**Dica:** ao exibir uma conversa, você pode citar textos automaticamente em um comentário destacando o texto e digitando `r`. É possível citar um comentário inteiro clicando em {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} e em **Quote reply** (Resposta à citação). Para obter mais informações sobre atalhos de teclado, consulte "[Atalhos de teclado](/articles/keyboard-shortcuts/)".

{% endtip %}

### Citar código

Você pode chamar código ou um comando em uma frase com aspas simples. O texto entre as aspas não será formatado.

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

### Links

Você pode criar um link inline colocando o texto do link entre colchetes `[ ]` e, em seguida, o URL entre parênteses `( )`. Também é possível usar o atalho de teclado `command + k` para criar um link.

`Este site foi construído usando [GitHub Pages](https://pages.github.com/).`

![Link renderizado](/assets/images/help/writing/link-rendered.png)

{% tip %}

**Dica:** o {% data variables.product.product_name %} cria links automaticamente quando URLs válidos são escritos em um comentário. Para obter mais informações, consulte "[Referências e URLs vinculados automaticamente](/articles/autolinked-references-and-urls)".

{% endtip %}

### Links de seção

{% data reusables.repositories.section-links %}

### Links relativos

{% data reusables.repositories.relative-links %}

### Listas

Você pode criar uma lista não ordenada precedendo uma ou mais linhas de texto com `-` ou `*`.

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

#### Listas aninhadas

Você pode criar uma lista aninhada recuando um ou mais itens da lista abaixo de outro item.

Para criar uma lista aninhada usando o editor web do {% data variables.product.product_name %} ou um editor de texto que usa uma fonte monoespaçada, como o [Atom](https://atom.io/), você pode alinhar sua lista visualmente. Digite caracteres de espaço na fonte do item da lista aninhada, até que o caractere de marcador da lista (`-` ou `*`) fique diretamente abaixo do primeiro caractere do texto no item acima dele.

```markdown
1. Primeiro item da lista
   - Primeiro item de lista aninhado
     - Segundo item de lista aninhada
```

![Lista aninhada com alinhamento destacado](/assets/images/help/writing/nested-list-alignment.png)

![Lista com dois níveis de itens aninhados](/assets/images/help/writing/nested-list-example-1.png)

Para criar uma lista aninhada no editor de comentários do {% data variables.product.product_name %}, que não usa uma fonte monoespaçada, você pode observar o item da lista logo acima da lista aninhada e contar o número de caracteres que aparecem antes do conteúdo do item. Em seguida, digite esse número de caracteres de espaço na fonte do item da linha aninhada.

Neste exemplo, você pode adicionar um item de lista aninhada abaixo do item de lista `100. Primeiro item da lista` recuando o item da lista aninhada com no mínimo cinco espaços, uma vez que há cinco caracteres (`100.`) antes de `Primeiro item da lista`.

```markdown
100. Primeiro item da lista
     - Primeiro item da lista aninhada
```

![Lista com um item de lista aninhada](/assets/images/help/writing/nested-list-example-3.png)

Você pode criar vários níveis de listas aninhadas usando o mesmo método. Por exemplo, como o primeiro item da lista aninhada tem sete espaços (`␣␣␣␣␣-␣`) antes do conteúdo da lista aninhada `Primeiro item da lista aninhada`, você precisaria recuar o segundo item da lista aninhada com sete espaços.

```markdown
100. Primeiro item da lista
     - Primeiro item da lista aninhada
       - Segundo item da lista aninhada
```

![Lista com dois níveis de itens aninhados](/assets/images/help/writing/nested-list-example-2.png)

Para obter mais exemplos, consulte a [Especificação de markdown em estilo GitHub](https://github.github.com/gfm/#example-265).

### Listas de tarefas

{% data reusables.repositories.task-list-markdown %}

Se a descrição de um item da lista de tarefas começar com parênteses, você precisará usar `\` para escape:

`- [ ] \(Optional) Abrir um problema de acompanhamento`

Para obter mais informações, consulte "[Sobre listas de tarefas](/articles/about-task-lists)".

### Mencionar pessoas e equipes

Você pode mencionar uma pessoa ou [equipe](/articles/setting-up-teams/) no {% data variables.product.product_name %} digitando `@` mais o nome de usuário ou nome da equipe. Isto desencadeará uma notificação e chamará a sua atenção para a conversa. As pessoas também receberão uma notificação se você editar um comentário para mencionar o respectivo nome de usuário ou da equipe. Para obter mais informações sobre notificações, consulte {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 0" ou currentVersion == "github-ae@latest" %}"[Sobre notificações](/github/managing-subscriptions-and-notifications-on-github/about-notifications){% else %}"[Sobre notificações](/github/receiving-notifications-about-activity-on-github/about-notifications){% endif %}."

`@github/suporte O que você acha dessas atualizações?`

![@menção renderizada](/assets/images/help/writing/mention-rendered.png)

Quando você menciona uma equipe principal, os integrantes de suas equipes secundárias também recebem notificações, simplificando a comunicação com vários grupos de pessoas. Para obter mais informações, consulte "[Sobre equipes](/articles/about-teams)".

Digitar um símbolo `@` chamará uma lista de pessoas ou equipes em um projeto. A lista é filtrada à medida que você digita. Portanto, assim que você achar o nome da pessoa ou da equipe que está procurando, use as teclas de seta para selecioná-lo e pressione tab ou enter para completar o nome. Para equipes, digite nome da @organização/equipe e todos os integrantes dessa equipe serão inscritos na conversa.

Os resultados do preenchimento automático são restritos aos colaboradores do repositório e qualquer outro participante no thread.

### Fazer referências a problemas e pull requests

Você pode trazer à tona uma lista de problemas e pull requests sugeridos no repositório digitando `#`. Digite o número ou o título do problema ou da pull request para filtrar a lista e, em seguida, pressione tab ou enter para completar o resultado destacado.

Para obter mais informações, consulte "[Referências e URLs vinculados automaticamente](/articles/autolinked-references-and-urls)".

### Fazer referência a recursos externos

{% data reusables.repositories.autolink-references %}

### Anexos de conteúdo

Alguns {% data variables.product.prodname_github_app %}s fornecem informações no {% data variables.product.product_name %} para URLs que são vinculados aos respectivos domínios registrados. O {% data variables.product.product_name %} renderiza as informações fornecidas pelo app sob o URL no texto ou comentário de um problema ou uma pull request.

![Anexo de conteúdo](/assets/images/github-apps/content_reference_attachment.png)

Para ver os anexos de conteúdo, é necessário ter um {% data variables.product.prodname_github_app %} que use a API de anexos de conteúdo instalada no repositório.{% if currentVersion == "free-pro-team@latest" %} Para mais informações, consulte "[Instalar um aplicativo na sua conta pessoal](/articles/installing-an-app-in-your-personal-account)" e "[Instalar um aplicativo na sua organização](/articles/installing-an-app-in-your-organization).{% endif %}

Os anexos de conteúdo não serão exibidos para URLs que fazem parte de um link markdown.

Para obter mais informações sobre como compilar um {% data variables.product.prodname_github_app %} que use anexos de conteúdo, consulte "[Usar anexos de conteúdo](/apps/using-content-attachments)".

### Fazer upload de ativos

Você pode fazer upload de ativos como imagens, arrastando e soltando, fazendo a seleção a partir de um navegador de arquivos ou colando. É possível fazer o upload de recursos para problemas, pull requests, comentários e arquivos `.md` no seu repositório.

### Usar emoji

Você pode adicionar emoji à sua escrita digitando `:EMOJICODE:`.

`@octocat :+1: Este PR parece ótimo - está pronto para o merge! :shipit:`

![Emoji renderizado](/assets/images/help/writing/emoji-rendered.png)

Digitar `:` trará à tona uma lista de emojis sugeridos. A lista será filtrada à medida que você digita. Portanto, assim que encontrar o emoji que estava procurando, pressione **Tab** ou **Enter** para completar o resultado destacado.

Para obter uma lista completa dos emojis e códigos disponíveis, confira [a lista de emojis](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md).

### Parágrafos

Você pode criar um parágrafo deixando uma linha em branco entre as linhas de texto.

### Ignorar formatação markdown

Para informar ao {% data variables.product.product_name %} que deve ignorar a formatação markdown (ou usar escape nela), anteceda o caractere markdown com `\`.

`Vamos renomear \*our-new-project\* para \*our-old-project\*.`

![Caractere com escape renderizado](/assets/images/help/writing/escaped-character-rendered.png)

Para obter mais informações, consulte "[Sintaxe markdown](https://daringfireball.net/projects/markdown/syntax#backslash)" de Daring Fireball.

### Leia mais

- [Especificações de markdown em estilo {% data variables.product.prodname_dotcom %}](https://github.github.com/gfm/)
- "[Sobre escrita e formatação no GitHub](/articles/about-writing-and-formatting-on-github)"
- "[Trabalhar com formatação avançada](/articles/working-with-advanced-formatting)"
- "[Dominar o markdown](https://guides.github.com/features/mastering-markdown/)"
