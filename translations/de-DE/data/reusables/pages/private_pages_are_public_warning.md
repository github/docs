  {% warning %}

  **Warning**: {% if currentVersion != "free-pro-team@latest" %}If your site administrator has enabled Public Pages, {% endif %}{% data variables.product.prodname_pages %} sites are publicly available on the internet, even if the repository for the site is private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or internal{% endif %}. Wenn Du sensitive Daten im Repository Deiner Website hast, solltest Du diese vor der Veröffentlichung entfernen. Weitere Informationen findest Du unter{% if currentVersion != "free-pro-team@latest" %} „[Konfigurieren {% data variables.product.prodname_pages %} auf Deiner Appliance](/enterprise/admin/installation/configuring-github-pages-on-your-appliance#making-github-pages-publicly-accessible)" und{% endif %} „[Über die Sichtbarkeit des Repositorys](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

  {% endwarning %}
