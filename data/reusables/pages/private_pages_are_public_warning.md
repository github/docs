  {% warning %}

  **Warning**: {% if enterpriseServerVersions contains currentVersion %}If your site administrator has enabled Public Pages, {% endif %}{% data variables.product.prodname_pages %} sites are publicly available on the internet, even if the repository for the site is private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or internal{% endif %}. If you have sensitive data in your site's repository, you may want to remove it before publishing. For more information, see{% if enterpriseServerVersions contains currentVersion %} "[Configuring {% data variables.product.prodname_pages %} on your appliance](/enterprise/admin/installation/configuring-github-pages-on-your-appliance#making-github-pages-publicly-accessible)" and{% endif %} "[About repository visibility](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

  {% endwarning %}
