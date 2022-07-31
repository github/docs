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
1. Create the entry file for your site. {% data variables.product.prodname_pages %} will look for an `index.html`, `index.md`, or `README.md` file as the entry file for your site.

   {% ifversion pages-custom-workflow %}If your publishing source is a branch and folder, the entry file must be at the top level of the source folder on the source branch. For example, if your publishing source is the `/docs` folder on the `main` branch, your entry file must be located in the `/docs` folder on a branch called `main`.

   If your publishing source is a {% data variables.product.prodname_actions %} workflow, the artifact that you deploy must include the entry file at the top level of the artifact. Instead of adding the entry file to your repository, you may choose to have your {% data variables.product.prodname_actions %} workflow generate your entry file when the workflow runs.{% else %} The entry file must be at the top level of your chosen publishing source. For example, if your publishing source is the `/docs` folder on the `main` branch, your entry file must be located in the `/docs` folder on a branch called `main`.{% endif %}
{% data reusables.pages.configure-publishing-source %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
{% data reusables.pages.choose-visibility %}
{% data reusables.pages.visit-site %}
{% data reusables.pages.check-workflow-run %}

{% data reusables.pages.admin-must-push %}

## Próximas etapas

Você pode adicionar mais páginas ao seu site criando novos arquivos. Cada arquivo ficará disponível no site na mesma estrutura de diretórios que a fonte de publicação. Por exemplo, se a fonte de publicação do site de projeto for o branch `gh-pages` e você criar um arquivo chamado `/about/contact-us.md` no branch `gh-pages`, o arquivo novo ficará disponível em {% ifversion fpt or ghec %}`https://<user>.github.io/<repository>/{% else %}`http(s)://<hostname>/pages/<username>/<repository>/{% endif %}about/contact-us.html`.

Também é possível adicionar um tema para personalizar a aparência do site. Para obter mais informações, consulte {% ifversion fpt or ghec %}"[Adicionar um tema ao site do {% data variables.product.prodname_pages %} com o seletor de temas](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser){% else %}"[Adicionar um tema ao site do {% data variables.product.prodname_pages %} usando o Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll){% endif %}".

Para personalizar seu site ainda mais, você pode usar o Jekyll, um gerador de site estático com suporte integrado para o {% data variables.product.prodname_pages %}. Para obter mais informações, consulte "[Sobre o {% data variables.product.prodname_pages %} e o JJekyll](/articles/about-github-pages-and-jekyll)".

## Leia mais

- "[Solucionar problemas de erros de criação do Jekyll para sites do {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)"
- "[Criar e excluir branches no repositório](/articles/creating-and-deleting-branches-within-your-repository)"
- "[Criar arquivos](/articles/creating-new-files)"
