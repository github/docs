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
shortTitle: Quickstart
product: '{% data reusables.gated-features.pages %}'
ms.openlocfilehash: a6cf4a2f00237206a3c15083797aa12c832cf32c
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: '145128210'
---
## <a name="introduction"></a>Introdução

{% data variables.product.prodname_pages %} são sites públicos hospedados e publicados por meio de {% data variables.product.product_name %}. A maneira mais rápida de colocar em funcionamento é usar o seletor de temas Jekyll para carregar um tema pré-criado. Em seguida, você pode modificar o seu estilo e conteúdo de {% data variables.product.prodname_pages %}.

Este guia descreverá a criação de um site de usuário em `username.github.io`.

## <a name="creating-your-website"></a>Criando seu site

{% data reusables.repositories.create_new %}
1. Insira `username.github.io` como o nome do repositório. Substitua `username` pelo nome de usuário do {% data variables.product.prodname_dotcom %}. Por exemplo, se o nome de usuário for `octocat`, o nome do repositório deverá ser `octocat.github.io`.
   ![Campo de nome do repositório](/assets/images/help/pages/create-repository-name-pages.png) {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
1. Clique em **Escolher um tema**.
   ![Botão Escolher um tema](/assets/images/help/pages/choose-theme.png)
2. O seletor de temas será aberto. Navegue pelos temas disponíveis e clique em **Selecionar tema** para escolher um tema. É fácil mudar seu tema mais tarde. Portanto, se você não tiver certeza, basta escolher um por enquanto.
   ![Opções de tema e botão Selecionar tema](/assets/images/help/pages/select-theme.png)
3. Depois que você selecionar um tema, o arquivo `README.md` do repositório será aberto no editor de arquivos. O arquivo `README.md` é o local em que você escreverá o conteúdo do site. Você pode editar o arquivo ou manter o conteúdo padrão por enquanto.
4. Quando terminar de editar o arquivo, clique em **Fazer commit das alterações**.
5. Acesse `username.github.io` para ver seu novo site. **Observação:** poderá levar até 20 minutos para que as alterações no seu site sejam publicadas depois que você efetuar push das alterações para o {% data variables.product.product_name %}.

## <a name="changing-the-title-and-description"></a>Alterando o título e a descrição

Por padrão, o título do site é `username.github.io`. Altere o título editando o arquivo `_config.yml` no repositório. Você também pode adicionar uma descrição para o seu site.

1. Clique na guia **Código** do repositório.
1. Na lista de arquivos, clique em `_config.yml` para abrir o arquivo.
1. Clique em {% octicon "pencil" aria-label="The edit icon" %} para editar o arquivo.
1. O arquivo `_config.yml` já contém uma linha que especifica o tema do site. Adicione uma nova linha com `title:` seguida do título desejado. Adicione uma nova linha com `description:` seguida da descrição desejada. Por exemplo:

   ```yaml
   theme: jekyll-theme-minimal
   title: Octocat's homepage
   description: Bookmark this to keep an eye on my project updates!
   ```

1. Quando terminar de editar o arquivo, clique em **Fazer commit das alterações**.

## <a name="next-steps"></a>Próximas etapas

Para obter mais informações sobre como adicionar mais páginas ao seu site, confira "[Como adicionar conteúdo ao site do GitHub Pages usando o Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll#about-content-in-jekyll-sites)".

Para obter mais informações sobre como configurar um site do {% data variables.product.prodname_pages %} com o Jekyll, confira "[Sobre o GitHub Pages e o Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)".
