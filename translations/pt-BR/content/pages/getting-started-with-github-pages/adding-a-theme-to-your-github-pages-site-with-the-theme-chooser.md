---
title: Adicionar um tema ao site do GitHub Pages com o seletor de temas
intro: É possível adicionar um tema ao site do {% data variables.product.prodname_pages %} para personalizar a aparência dele.
redirect_from:
- /articles/creating-a-github-pages-site-with-the-jekyll-theme-chooser
- /articles/adding-a-jekyll-theme-to-your-github-pages-site-with-the-jekyll-theme-chooser
- /articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
- /github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
- Pages
shortTitle: Add theme to a Pages site
permissions: People with admin permissions for a repository can use the theme chooser to add a theme to a {% data variables.product.prodname_pages %} site.
ms.openlocfilehash: b38ce81802b5137f49fef076ffdc5a16392a446d
ms.sourcegitcommit: febc27cb8f2d53c97b51e614a941931f85ae5d95
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/27/2022
ms.locfileid: "147428361"
---
## <a name="about-the-theme-chooser"></a>Sobre o seletor de temas

{% ifversion pages-custom-workflow %}

{% note %}

**Observação**: o seletor de tema do Jekyll é compatível com sites do {% data variables.product.prodname_pages %} que são publicados com um fluxo de trabalho personalizado de {% data variables.product.prodname_actions %}. Se você criar seu site com o Jekyll e publicá-lo com um fluxo de trabalho personalizado de {% data variables.product.prodname_actions %}, você poderá adicionar um tema editando o arquivo `_config.yml`. Para obter mais informações, confira "[Adicionar um tema ao seu site do GitHub Pages usando o Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll)".

{% endnote %}

{% endif %}

O seletor de temas adiciona um tema do Jekyll ao repositório. Para obter mais informações sobre o Jekyll, confira "[Sobre o {% data variables.product.prodname_pages %} e o Jekyll](/articles/about-github-pages-and-jekyll)".

O funcionamento do seletor de temas depende de o repositório ser público ou privado.
  - Se o {% data variables.product.prodname_pages %} já estiver habilitado para o repositório, o seletor de temas adicionará o tema à fonte de publicação atual.
  - Se o repositório for público e o {% data variables.product.prodname_pages %} estiver desabilitado para ele, o uso do seletor de temas habilitará o {% data variables.product.prodname_pages %} e definirá o branch-padrão como fonte de publicação.
  - Se o repositório for privado e o {% data variables.product.prodname_pages %} estiver desabilitado para ele, será preciso habilitar o {% data variables.product.prodname_pages %} definindo uma fonte de publicação para poder usar o seletor de temas.

Para obter mais informações sobre as fontes de publicação, confira "[Sobre o {% data variables.product.prodname_pages %}](/articles/about-github-pages#publishing-sources-for-github-pages-sites)".

Caso você tenha adicionado manualmente um tema do Jekyll ao repositório no passado, esses arquivos poderão ser aplicados mesmo depois que você usar o seletor de temas. Para evitar conflitos, remova todas as pastas e arquivos de temas adicionados manualmente antes de usar o seletor de temas. Para obter mais informações, confira "[Como adicionar um tema ao seu site do {% data variables.product.prodname_pages %} usando o Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)".

## <a name="adding-a-theme-with-the-theme-chooser"></a>Adicionar um tema com o seletor de temas

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
3. Em "{% data variables.product.prodname_pages %}", clique em **Escolher um tema** ou **Alterar tema**.
  ![Botão Escolher um tema](/assets/images/help/pages/choose-a-theme.png)
4. Na parte superior da página, clique no tema desejado e clique em **Selecionar tema**.
  ![Opções de tema e botão Selecionar tema](/assets/images/help/pages/select-theme.png)
5. Talvez você precise editar o arquivo *LEIAME.md* do seu site.
   - Para editar o arquivo mais tarde, clique em **Cancelar**.
   ![Link Cancelar ao editar um arquivo](/assets/images/help/pages/cancel-edit.png)
   - Para editar o arquivo agora, confira "[Como editar arquivos](/repositories/working-with-files/managing-files/editing-files)".

O tema escolhido será aplicado automaticamente aos arquivos markdown no repositório. Para aplicar o tema a arquivos HTML no repositório, é preciso adicionar a página inicial YAML que especifica um layout para cada arquivo. Para obter mais informações, confira "[Front Matter](https://jekyllrb.com/docs/front-matter/)" no site do Jekyll.

## <a name="further-reading"></a>Leitura adicional

- [Temas](https://jekyllrb.com/docs/themes/) no site do Jekyll
