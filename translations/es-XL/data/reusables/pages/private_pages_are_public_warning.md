  {% warning %}

  **Warning**: {% if currentVersion != "free-pro-team@latest" %}If your site administrator has enabled Public Pages, {% endif %}{% data variables.product.prodname_pages %} sites are publicly available on the internet, even if the repository for the site is private{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or internal{% endif %}. Si tienes datos sensibles en el repositorio de tu sitio, tal vez quieras eliminarlos antes de publicarlo. Para obtener más información, consulta la sección {% if currentVersion != "free-pro-team@latest" %}"[Configurar {% data variables.product.prodname_pages %} en tu aplicativo](/enterprise/admin/installation/configuring-github-pages-on-your-appliance#making-github-pages-publicly-accessible)" y {% endif %} "[Acerca de la visibilidad de un repositorio](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)".

  {% endwarning %}
