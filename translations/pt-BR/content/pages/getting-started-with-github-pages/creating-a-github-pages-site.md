---
title: Criar um site do GitHub Pages
intro: 'É possível criar um site do {% data variables.product.prodname_pages %} em um repositório novo ou existente.'
redirect_from:
  - /articles/creating-pages-manually
  - /articles/creating-project-pages-manually
  - /articles/creating-project-pages-from-the-command-line
  - /articles/creating-project-pages-using-the-command-line
  - /articles/creating-a-github-pages-site
  - /github/working-with-github-pages/creating-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Create a GitHub Pages site
ms.openlocfilehash: 83f953ac5c5c109abd5f63fd595642e4fd139113
ms.sourcegitcommit: febc27cb8f2d53c97b51e614a941931f85ae5d95
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/27/2022
ms.locfileid: '147428353'
---
{% data reusables.pages.org-owners-can-restrict-pages-creation %}

## <a name="creating-a-repository-for-your-site"></a>Criar um repositório para seu site

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %} {% data reusables.repositories.owner-drop-down %} {% indented_data_reference reusables.pages.emu-org-only spaces=3 %} {% data reusables.pages.create-repo-name %} {% data reusables.repositories.choose-repo-visibility %} {% data reusables.repositories.initialize-with-readme %} {% data reusables.repositories.create-repo %}

## <a name="creating-your-site"></a>Criar seu site

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.decide-publishing-source %}
1. Crie o arquivo de entrada para seu site. {% data variables.product.prodname_pages %} procurará um arquivo `index.html`, `index.md` ou `README.md` como o arquivo de entrada do seu site.

   {% ifversion pages-custom-workflow %}Se a sua fonte de publicação for um branch e uma pasta, o arquivo de entrada precisará estar no nível superior da pasta de origem no branch de origem. Por exemplo, se sua fonte de publicação for a pasta `/docs` no branch `main`, seu arquivo de entrada precisará estar localizado na pasta `/docs` em um branch chamado `main`.

   Se a fonte de publicação for um fluxo de trabalho do {% data variables.product.prodname_actions %}, o artefato que você implantar precisará incluir o arquivo de entrada na parte superior do artefato. Em vez de adicionar o arquivo de entrada ao seu repositório, você pode optar por fazer com que o fluxo de trabalho de {% data variables.product.prodname_actions %} gere o arquivo de entrada quando o fluxo de trabalho é executado. {% else %} O arquivo de entrada precisa estar no nível superior da fonte de publicação escolhida. Por exemplo, se a sua fonte de publicação for a pasta `/docs` no branch `main`, seu arquivo de entrada precisará estar localizado na pasta `/docs` em um branch chamado `main`.{% endif %} {% data reusables.pages.configure-publishing-source %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %} {% data reusables.pages.choose-visibility %} {% data reusables.pages.visit-site %} {% data reusables.pages.check-workflow-run %}

{% data reusables.pages.admin-must-push %}

## <a name="next-steps"></a>Próximas etapas

Você pode adicionar mais páginas ao seu site criando novos arquivos. Cada arquivo ficará disponível no site na mesma estrutura de diretórios que a fonte de publicação. Por exemplo, se a fonte de publicação do site de projeto for o branch `gh-pages` e você criar um arquivo chamado `/about/contact-us.md` no branch `gh-pages`, o arquivo estará disponível em {% ifversion fpt or ghec %}`https://<user>.github.io/<repository>/{% else %}`http(s)://<hostname>/pages/<username>/<repository>/{% endif %}about/contact-us.html`.

Também é possível adicionar um tema para personalizar a aparência do site. Para obter mais informações, confira {% ifversion fpt or ghec %}"[Como adicionar um tema ao seu site do {% data variables.product.prodname_pages %} com o seletor de tema](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser){% else %}"[Como adicionar um tema ao seu site do {% data variables.product.prodname_pages %} usando o Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll){% endif %}".

Para personalizar seu site ainda mais, você pode usar o Jekyll, um gerador de site estático com suporte integrado para o {% data variables.product.prodname_pages %}. Para obter mais informações, confira "[Sobre o {% data variables.product.prodname_pages %} e o Jekyll](/articles/about-github-pages-and-jekyll)".

## <a name="further-reading"></a>Leitura adicional

- "[Solução de problemas de erros de build do Jekyll para sites do {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)"
- "[Como criar e excluir branches no seu repositório](/articles/creating-and-deleting-branches-within-your-repository)"
- "[Como criar arquivos](/articles/creating-new-files)"
