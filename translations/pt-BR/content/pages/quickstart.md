---
title: Início rápido para o GitHub Pages
intro: 'Você pode usar {% data variables.product.prodname_pages %} para exibir alguns projetos de código aberto, hospedar um blogue ou até mesmo compartilhar seu currículo. Este guia ajudará você a começar a criar o seu próximo site.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Pages
shortTitle: QuickStart
product: '{% data reusables.gated-features.pages %}'
---

## Introdução

{% data variables.product.prodname_pages %} são sites públicos hospedados e publicados por meio de {% data variables.product.product_name %}. A maneira mais rápida de colocar em funcionamento é usar o seletor de temas Jekyll para carregar um tema pré-criado. Em seguida, você pode modificar o seu estilo e conteúdo de {% data variables.product.prodname_pages %}.

Este guia irá orientar você com relação à criação de um site em `username.github.io`.

## Criando seu site

{% data reusables.repositories.create_new %}
1. Digite `username.github.io` como nome do repositório. Substitua `nome de usuário` pelo seu nome de usuário de {% data variables.product.prodname_dotcom %}. Por exemplo, se seu nome de usuário for `octocat`, o nome do repositório deverá ser `octocat.github.io`. ![Campo nome do repositório](/assets/images/help/pages/create-repository-name-pages.png)
{% data reusables.repositories.sidebar-settings %}
1. Na barra lateral esquerda, clique em **Pages** (Páginas). ![Aba de páginas na barra lateral esquerda](/assets/images/help/pages/pages-tab.png)
1. Clique **Escolher um tema**. ![Botão Choose a theme (Escolher um tema)](/assets/images/help/pages/choose-theme.png)
1. O seletor de temas será aberto. Pesquise os temas disponíveis e, em seguida, clique em **Selecionar tema** para selecionar um tema. É fácil mudar seu tema mais tarde. Portanto, se você não tiver certeza, basta escolher um por enquanto. ![Opções de tema e botão Select theme (Selecionar tema)](/assets/images/help/pages/select-theme.png)
1. Depois de selecionar um tema, o arquivo `README.md` do repositório será aberto no editor do arquivo. O arquivo `README.md` é onde você escreverá o conteúdo do seu site. Você pode editar o arquivo ou manter o conteúdo padrão por enquanto.
1. Ao terminar de editar o arquivo, clique em **Aplicar as alterações**.
1. Acesse `username.github.io` para ver seu novo site. **Observação:** podem ser necessários até 20 minutos para que as alterações no site sejam publicadas após o push delas no {% data variables.product.product_name %}.

## Alterando o título e a descrição

Por padrão, o título do seu site é `username.github.io`. Você pode alterar o título editando o arquivo `_config.yml` no seu repositório. Você também pode adicionar uma descrição para o seu site.

1. Clique na aba **Código** do seu repositório.
1. Na lista de arquivos, clique em `_config.yml` para abrir o arquivo.
1. Clique em {% octicon "pencil" aria-label="The edit icon" %} para editar o arquivo.
1. O arquivo `_config.yml` já contém uma linha que especifica o tema para o seu site. Adicione uma nova linha com `title:` seguido do título que você deseja. Adicione uma nova linha com `description:` seguida da descrição que você deseja. Por exemplo:

   ```yaml
   theme: jekyll-theme-minimal
   title: Octocat's homepage
   description: Bookmark this to keep an eye on my project updates!
   ```

1. Ao terminar de editar o arquivo, clique em **Aplicar as alterações**.

## Próximos passos

Para obter mais informações sobre como adicionar páginas adicionais ao seu site, consulte "[Adicionando conteúdo ao site do GitHub Pages usando o Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll#about-content-in-jekyll-sites)".

Para obter mais informações sobre como configurar um site do {% data variables.product.prodname_pages %} com o Jekyll, consulte "[Sobre o GitHub Pages e o Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)".
