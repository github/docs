---
title: GitHubからのGitHub Desktopへのリポジトリのクローン方法
intro: '{% data variables.product.prodname_dotcom %} を使用して、リモートリポジトリを {% data variables.product.prodname_desktop %} にクローンできます。'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop
versions:
  free-pro-team: '*'
---

{% tip %}

**ヒント：**{% data variables.product.prodname_dotcom %}にあるリポジトリをクローンするには、{% data variables.product.prodname_desktop %}も使用できます。  詳しい情報については、「[{% data variables.product.prodname_desktop %}からのリポジトリのクローン方法](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/)」を参照してください。

{% endtip %}

{% mac %}

1. Sign in to

{% data variables.product.product_location %} and {% data variables.product.prodname_desktop %} before you start to clone.
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.open-with-github-desktop %}
5. [**Choose...**]をクリックし、Finderウインドウを使用してリポジトリをクローンするローカルパスに移動します。 ![URLタブにあるchooseボタン](/assets/images/help/desktop/clone-choose-button-url-mac.png)

  {% note %}

  **注釈：**リポジトリがLFSを使用するように構成されている場合、{% data variables.large_files.product_name_short %}の初期化を要求するプロンプトが表示されます。

  {% endnote %}

5. **Clone**をクリックします。 ![URLタブ内のcloneボタン](/assets/images/help/desktop/clone-button-url-mac.png)

{% endmac %}

{% windows %}

1. Sign in to

{% data variables.product.product_location %} and {% data variables.product.prodname_desktop %} before you start to clone.
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.open-with-github-desktop %}
5. **Choose...**をクリックし、Windows Explorerを使用してリポジトリをクローンするローカルパスに移動します。 ![Chooseボタン](/assets/images/help/desktop/clone-choose-button-url-win.png)

  {% note %}

  **注釈：**リポジトリがLFSを使用するように構成されている場合、{% data variables.large_files.product_name_short %}の初期化を要求するプロンプトが表示されます。

  {% endnote %}

5. **Clone**をクリックします。 ![Cloneボタン](/assets/images/help/desktop/clone-button-url-win.png)

{% endwindows %}
