---
title: Adicionar ou editar páginas wiki
intro: 'Você pode adicionar e editar páginas wiki diretamente no {% data variables.product.product_name %} ou localmente usando a linha de comando.'
redirect_from:
  - /articles/adding-wiki-pages-via-the-online-interface/
  - /articles/editing-wiki-pages-via-the-online-interface/
  - /articles/adding-and-editing-wik-pages-locally/
  - /articles/adding-and-editing-wiki-pages-locally/
  - /articles/adding-or-editing-wiki-pages
  - /github/building-a-strong-community/adding-or-editing-wiki-pages
product: '{% data reusables.gated-features.wikis %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - comunidade
---
### Adicionar páginas wiki

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
3. No canto superior direito da página, clique em **New Page** (Nova página). ![Botão Wiki new page (Nova página wiki)](/assets/images/help/wiki/wiki_new_page_button.png)
4. Se preferir escrever em um formato diferente do markdown, use o menu suspenso Edite mode (Editar modo) e clique em outro formato. ![Seleção de markup do wiki](/assets/images/help/wiki/wiki_dropdown_markup.gif)
5. Use o editor de texto para adicionar o conteúdo da página. ![WYSIWYG do wiki](/assets/images/help/wiki/wiki_wysiwyg.png)
6. Digite uma mensagem do commit descrevendo o novo arquivo que você está adicionando. ![Mensagem do commit do wiki](/assets/images/help/wiki/wiki_commit_message.png)
7. Para fazer commit das alterações no wiki, clique em **Save Page** (Salvar página).

### Editar páginas wiki

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-wiki %}
4. Usando a barra lateral do wiki, navegue até a página que deseja alterar. No canto superior direito da página, clique em **Edit** (Editar). ![Botão Wiki edit page (Editar página wiki)](/assets/images/help/wiki/wiki_edit_page_button.png)
5. Use o editor de texto para editar o conteúdo da página. ![WYSIWYG do wiki](/assets/images/help/wiki/wiki_wysiwyg.png)
6. Digite uma mensagem do commit descrevendo as alterações. ![Mensagem do commit do wiki](/assets/images/help/wiki/wiki_commit_message.png)
7. Para fazer commit das alterações no wiki, clique em **Save Page** (Salvar página).

### Adicionar ou editar páginas wiki localmente

Os wikis fazem parte dos repositórios Git, de modo que é possível fazer alterações localmente e fazer push delas no seu repositório usando o fluxo de trabalho Git.

#### Clonar wikis para seu computador

Cada wiki fornece uma maneira fácil de clonar o respectivo conteúdo para seu computador. Você pode clonar o repositório no seu computador com a URL fornecida:

```shell
$ git clone https://github.com/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.wiki.git
# Clona o wiki localmente
```

Depois de clonar o wiki, é possível adicionar novos arquivos, editar os existentes e fazer commit das alterações. Você e seus colaboradores podem criar branches ao trabalhar em wikis, mas somente as alterações enviadas por push ao branch-padrão serão ativadas e disponibilizadas para os seus leitores.

### Sobre nomes de arquivo de wiki

O nome de arquivo determina o título da sua página wiki e a extensão do arquivo determina como o conteúdo do wiki será renderizado.

Os wikis usam [nossa biblioteca de markup de código aberto](https://github.com/github/markup) para converter o markup e determinam qual conversor usar pela extensão de um arquivo. Por exemplo, se o nome de um arquivo for *foo.md* ou *foo.markdown*, o wiki usará o conversor Markdown, enquanto em um arquivo chamado *foo.textile*, ele usará o conversor Textile.

Não use os seguintes caracteres nos títulos da sua página wiki: `\ / : * ? " < > |`. Os usuários em determinados sistemas operacionais não poderão trabalhar com nomes de arquivo contendo esses caracteres. Certifique-se de escrever seu conteúdo usando uma linguagem markup que corresponda à extensão, ou o conteúdo não será renderizado adequadamente.
