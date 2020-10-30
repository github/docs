  {% warning %}

  **Warning**: {% if currentVersion != "free-pro-team@latest" %}If your site administrator has enabled Public Pages, {% endif %}{% data variables.product.prodname_pages %} sites are publicly available on the internet, even if the repository for the site is private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or internal{% endif %}. サイトのリポジトリにセンシティブなデータがあるなら、公開前にそれを取り除くのが良いでしょう。 詳しい情報については{% if currentVersion != "free-pro-team@latest" %}「[アプライアンス上での{% data variables.product.prodname_pages %}の設定](/enterprise/admin/installation/configuring-github-pages-on-your-appliance#making-github-pages-publicly-accessible)」及び{% endif %}「[リポジトリの可視性について](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)」を参照してください。

  {% endwarning %}
