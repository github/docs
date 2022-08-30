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
shortTitle: Criar um site do GitHub Pages
---

{% data reusables.pages.org-owners-can-restrict-pages-creation %}

## Criar um repositório para seu site

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %}
{% data reusables.repositories.owner-drop-down %}
{% indented_data_reference reusables.pages.emu-org-only spaces=3 %}
{% data reusables.pages.create-repo-name %}
{% data reusables.repositories.choose-repo-visibility %}
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}

## Criar seu site

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.decide-publishing-source %}
1. Criar o arquivo de entrada para o seu site. {% data variables.product.prodname_pages %} procurará um arquivo `index.html`, `index.md` ou `LEIAME.md` como arquivo de postagem do seu site.

   {% ifversion pages-custom-workflow %}Se sua fonte de publicação for um branch e uma psata, o arquivo de entrada deverá estar no nível superior da pasta de origem no branch de origem. Por exemplo, se a fonte de publicação for a pasta `/docs` no branch </code>principal`, o arquivo de postagem deverá estar localizado na pasta <code>/docs` em um branch denominado `principal`.

   Se sua fonte de publicação for um fluxo de trabalho de {% data variables.product.prodname_actions %}, o artefato de que você implantar deverá incluir o arquivo de entrada no nível superior do artefato. Em vez de adicionar o arquivo de entrada ao seu repositório, você pode optar por fazer com que o seu fluxo de trabalho {% data variables.product.prodname_actions %} gere o arquivo de entrada quando o fluxo de trabalho é executado.{% else %} O arquivo de entrada deve estar no nível superior da fonte de publicação escolhida. Por exemplo, se a fonte de publicação for a pasta `/docs` no branch </code>principal`, o arquivo de postagem deverá estar localizado na pasta <code>/docs` em um branch denominado `principal`.{% endif %}
{% data reusables.pages.configure-publishing-source %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
{% data reusables.pages.choose-visibility %}
{% data reusables.pages.visit-site %}
{% data reusables.pages.check-workflow-run %}

{% data reusables.pages.admin-must-push %}

## Próximas etapas

Você pode adicionar mais páginas ao seu site criando novos arquivos. Cada arquivo ficará disponível no site na mesma estrutura de diretórios que a fonte de publicação. Por exemplo, se a fonte de publicação do site de projeto for o branch `gh-pages` e você criar um arquivo chamado `/about/contact-us.md` no branch `gh-pages`, o arquivo novo ficará disponível em {% ifversion fpt or ghec %}`https://<user>.github.io/<repository>/{% else %}`http(s)://<hostname>/pages/<username>/<repository>/{% endif %}about/contact-us.html`.

Também é possível adicionar um tema para personalizar a aparência do site. Para obter mais informações, consulte "[Adicionar um tema ao site do {% data variables.product.prodname_pages %} usando o Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)".

Para personalizar seu site ainda mais, você pode usar o Jekyll, um gerador de site estático com suporte integrado para o {% data variables.product.prodname_pages %}. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_pages %} e o Jekyll](/articles/about-github-pages-and-jekyll)".

## Leia mais

- "[Solucionar problemas de erros de criação do Jekyll para sites do {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)"
- "[Criar e excluir branches no repositório](/articles/creating-and-deleting-branches-within-your-repository)"
- "[Criar arquivos](/articles/creating-new-files)"
