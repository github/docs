---
title: Editar conteúdo de wiki
intro: 'Você pode adicionar imagens e links no conteúdo do seu wiki e usar alguns formatos do MediaWiki compatíveis.'
redirect_from:
  - /articles/adding-links-to-wikis/
  - /articles/how-do-i-add-links-to-my-wiki/
  - /articles/how-do-i-add-or-upload-images-to-the-wiki/
  - /articles/needs-writing-review-how-do-i-add-or-upload-images-to-the-wiki/
  - /articles/how-do-i-add-images-to-my-wiki/
  - /articles/adding-images-to-wikis/
  - /articles/supported-mediawiki-formats/
  - /articles/editing-wiki-content
product: '{% data reusables.gated-features.wikis %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Adicionar links

Você pode criar links em wikis usando markup padrão compatível para sua página ou usando sintaxe do MediaWiki. Por exemplo:

- Em páginas renderizadas com Markdown, a sintaxe do link é `[Link Text](full-URL-of-wiki-page)`.
- Com a sintaxe do MediaWiki, a sintaxe do link é `[[Link Text|nameofwikipage]]`.

### Adicionar imagens

Os wikis podem exibir imagens em PNG, JPEG e GIF.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. Usando a barra lateral de wikis, navegue até a página que deseja alterar e clique em **Edit** (Editar).
4. Na barra de ferramentas de wikis, clique em **Image** (Imagem). ![Imagem do botão Wiki Add (Adição de wiki)](/assets/images/help/wiki/wiki_add_image.png)
5. Na caixa de diálogo "Insert Image" (Inserir imagem), digite a URL da imagem e o texto alt (que é usado por mecanismos de pesquisa e leitores de tela).
6. Clique em **OK**.

#### Vincular a imagens em um repositório

Para vincular a uma imagem em um repositório no {% data variables.product.product_name %}, copie a URL no navegador e use-a como caminho para a imagem. Por exemplo, a incorporação de uma imagem no wiki usando Markdown pode ter esta aparência:

    [[https://github.com/USERNAME/REPOSITORY/blob/main/img/octocat.png|alt=octocat]]

### Formatos do MediaWiki compatíveis

Seja qual for a linguagem de marcação em que sua página wiki foi escrita, sempre haverá uma sintaxe do MediaWiki disponível para você.
- Links ([exceto Asciidoc](https://github.com/gollum/gollum/commit/d1cf698b456cd6a35a54c6a8e7b41d3068acec3b))
- Regras horizontais via `---`
- Entidades de símbolo abreviadas (como `&delta;` ou `&euro;`)

Por motivos de segurança e desempenho, algumas sintaxes não são compatíveis.
- [Transclusão](https://www.mediawiki.org/wiki/Transclusion)
- Listas de definições
- Indentação
- Índice
