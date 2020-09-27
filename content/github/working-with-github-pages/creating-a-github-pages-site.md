---
title: Creating a GitHub Pages site
intro: 'You can create a {{ site.data.variables.product.prodname_pages }} site in a new or existing repository.'
redirect_from:
  - /articles/creating-project-pages-using-the-command-line/
  - /articles/creating-a-github-pages-site
product: '{{ site.data.reusables.gated-features.pages }}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Creating a repository for your site

{{ site.data.reusables.pages.new-or-existing-repo }}

{{ site.data.reusables.pages.private_pages_are_public_warning }}

{{ site.data.reusables.repositories.create_new }}
{{ site.data.reusables.repositories.owner-drop-down }}
{{ site.data.reusables.pages.create-repo-name }}
{{ site.data.reusables.repositories.choose-repo-visibility }}
{{ site.data.reusables.repositories.initialize-with-readme }}
{{ site.data.reusables.repositories.create-repo }}

### Creating your site

{{ site.data.reusables.pages.must-have-repo-first }}

{{ site.data.reusables.pages.navigate-site-repo }}
{{ site.data.reusables.pages.decide-publishing-source }}
3. If your chosen publishing source already exists, navigate to the publishing source. If your chosen publishing source doesn't exist, create the publishing source.
4. In the root of the publishing source, create a new file called `index.md` that contains the content you want to display on the main page of your site.
{{ site.data.reusables.pages.configure-publishing-source }}
{{ site.data.reusables.repositories.sidebar-settings }}
{{ site.data.reusables.pages.visit-site }}

{{ site.data.reusables.pages.admin-must-push }}

### Next steps

You can add more pages to your site by creating more new files. Each file will be available on your site in the same directory structure as your publishing source. For example, if the publishing source for your project site is the `gh-pages` branch, and you create a new file called `/about/contact-us.md` on the `gh-pages` branch, the file will be available at {% if currentVersion == "free-pro-team@latest" %}`https://<user>.github.io/<repository>/{% else %}`http(s)://<hostname>/pages/<username>/<repository>/{% endif %}about/contact-us.md`.

You can also add a theme to customize your site’s look and feel. For more information, see {% if currentVersion == "free-pro-team@latest" %}"[Adding a theme to your {{ site.data.variables.product.prodname_pages }} site with the theme chooser](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser){% else %}"[Adding a theme to your {{ site.data.variables.product.prodname_pages }} site using Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll){% endif %}."

To customize your site even more, you can use Jekyll, a static site generator with built-in support for {{ site.data.variables.product.prodname_pages }}. For more information, see "[About {{ site.data.variables.product.prodname_pages }} and Jekyll](/articles/about-github-pages-and-jekyll)."

### Further reading

- "[Troubleshooting Jekyll build errors for {{ site.data.variables.product.prodname_pages }} sites](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)"
- "[Creating and deleting branches within your repository](/articles/creating-and-deleting-branches-within-your-repository)"
- "[Creating new files](/articles/creating-new-files)"
