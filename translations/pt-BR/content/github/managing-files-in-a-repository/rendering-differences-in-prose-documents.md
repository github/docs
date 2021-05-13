---
title: Renderizar diferenças em documentos em prosa
redirect_from:
  - /articles/rendering-differences-in-prose-documents
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

Commits e pull requests que incluem documentos de prosa podem representar esses documentos com as exibições *source* (original) e *rendered* (renderizada).

A exibição original mostra o texto bruto que foi inserido, enquanto a exibição renderizada mostra como o texto será exibido após a renderização no {% data variables.product.product_name %}. Por exemplo, há uma diferença na exibição do `**bold**` no Markdown e do **bold** in na visualização renderizada.

A renderização da prosa é possível para documentos renderizados compatíveis com o [github/markup](https://github.com/github/markup):

* markdown
* AsciiDoc
* Textile
* ReStructuredText
* Rdoc
* Org
* Creole
* MediaWiki
* Pod

![Ícone de papel para exibir documento em prosa renderizado](/assets/images/help/repository/rendered_prose_diff.png)

Você pode clicar em {% octicon "file" aria-label="The paper icon" %} para ver as alterações feitas no documento como parte de um commit.

![Alterações em prosa renderizada](/assets/images/help/repository/rendered_prose_changes.png)

### Exibir alterações nos atributos

Nós fornecemos uma dica de ferramenta descrevendo as alterações nos atributos, que diferentes de palavras, não seriam visíveis no documento renderizado. Por exemplo, se a URL de um link for alterada, mostraremos uma dica de ferramenta como esta:

![Alterações no atributo de prosa renderizada](/assets/images/help/repository/prose_diff_attributes.png)

### Fazer comentários em alterações

Os [comentários de commit comments](/articles/commenting-on-differences-between-files) só podem ser adicionados aos arquivos na exibição *original*, linha por linha.

### Vincular a cabeçalhos

Assim como ocorre em [outros documentos de prosa renderizados](/articles/about-readmes), posicionar o mouse sobre um cabeçalho no documento cria um ícone de link. Você pode encaminhar os leitores do seu diff de prosa renderizado a seções específicas.

### Exibir diffs complexos

Algumas pull requests envolvem um grande número de alterações e documentos grandes e complexos. Quando as mudanças levam muito tempo para serem analisadas, {% data variables.product.product_name %} não pode produzir uma visão renderizada das alterações. Se isso acontecer, você verá uma mensagem de erro ao clicar no botão renderizado.

![Mensagem quando a visualização não pode ser renderizada](/assets/images/help/repository/prose_diff_rendering.png)

Você ainda pode usar a exibição original para analisar e comentar as alterações.

### Exibir elementos HTML

Não oferecemos suporte direto a exibições renderizadas de commits para documentos HTML. Alguns formatos, como o Markdown, permite a inclusão de HTML arbitrário no documento. Quando esses documentos são mostrados no {% data variables.product.product_name %}, parte do HTML integrado pode ser mostrado em uma pré-visualização, enquanto outra parte (como um vídeo integrado do YouTube) não.

Em geral, as exibições renderizadas de alterações em um documento que contém HTML integrado mostrarão as alterações nos elementos que são compatíveis com a exibição do {% data variables.product.product_name %} do documento. As alterações em documentos que contém HTML integrado devem sempre ser confirmadas nas exibições original e renderizada.
