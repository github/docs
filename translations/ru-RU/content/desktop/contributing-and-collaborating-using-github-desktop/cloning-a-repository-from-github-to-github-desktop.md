---
title: Cloning a repository from GitHub to GitHub Desktop
intro: 'You can use {{ site.data.variables.product.prodname_dotcom }} to clone remote repositories to {{ site.data.variables.product.prodname_desktop }}.'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop
versions:
  free-pro-team: '*'
---

{% tip %}

**Tip:**  You also can use {{ site.data.variables.product.prodname_desktop }} to clone repositories that exist on {{ site.data.variables.product.prodname_dotcom }}.  For more information, see "[Cloning a repository from {{ site.data.variables.product.prodname_desktop }}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)."

{% endtip %}

{% mac %}

1. Sign in to {{ site.data.variables.product.product_location }} and {{ site.data.variables.product.prodname_desktop }} before you start to clone.
{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.open-with-github-desktop }}
5. Click **Choose...** and, using the Finder window, navigate to a local path where you want to clone the repository. ![The choose button on the URL tab](/assets/images/help/desktop/clone-choose-button-url-mac.png)

  {% note %}

  **Note:** If the repository is configured to use LFS, you will be prompted to initialize {{ site.data.variables.large_files.product_name_short }}.

  {% endnote %}

5. Click **Clone**. ![The clone button on the URL tab](/assets/images/help/desktop/clone-button-url-mac.png)

{% endmac %}

{% windows %}

1. Sign in to {{ site.data.variables.product.product_location }} and {{ site.data.variables.product.prodname_desktop }} before you start to clone.
{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.open-with-github-desktop }}
5. Click **Choose...** and, using Windows Explorer, navigate to a local path where you want to clone the repository. ![The choose button](/assets/images/help/desktop/clone-choose-button-url-win.png)

  {% note %}

  **Note:** If the repository is configured to use LFS, you will be prompted to initialize {{ site.data.variables.large_files.product_name_short }}.

  {% endnote %}

5. Click **Clone**. ![The clone button](/assets/images/help/desktop/clone-button-url-win.png)

{% endwindows %}
