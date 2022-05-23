{% warning %}

{% ifversion fpt %}
**Advertencia**:
Los sitios de {% data variables.product.prodname_pages %} están disponibles al público en la internet, incluso si el repositorio del sitio es privado. Si tienes datos sensibles en el repositorio de tu sitio, es posible que quieras eliminar los datos antes de publicar. Para obtener más información, consulta la sección "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)".
{% elsif ghec %}
**Advertencia**: A menos de que tu empresa utilice
{% data variables.product.prodname_emus %}, los sitios de {% data variables.product.prodname_pages %} estarán disponibles públicamente en la internet predefinidamente, incluso si el repositorio del sitio es privado o interno. Puedes publicar el sitio de forma privada si administras el control de accesos de este. De lo contrario, si tienes datos sensibles en el repositorio de tu sitio, deberías eliminar los datos antes de publicarlo. Para obtener más información, consulta las secciones "[Acercad de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)" y "[Cambiar la visbilidad de tu sitio de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)".
{% elsif ghae %}
**Advertencia**:
Los sitios de {% data variables.product.prodname_pages %} están visibles para todos los miembros de la empresa, incluso si el repositorio del sitio es privado. Si tienes datos sensibles en el repositorio de tu sitio, es posible que quieras eliminar los datos antes de publicar. Para obtener más información, consulta la sección "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)".
{% elsif ghes %}
**Advertencia**: Si tu administrador de sitio habilitó las páginas públicas,
los sitios de {% data variables.product.prodname_pages %} estarán disponibles públicamente en la itnernet, incluso si el repositorio del sitio es privado o interno. Si tienes datos sensibles en el repositorio de tu sitio, es posible que quieras eliminar los datos antes de publicar. Para obtener más información, consulta las secciones "[Configurar las {% data variables.product.prodname_pages %} para tu empresa](/admin/configuration/configuring-github-pages-for-your-enterprise#enabling-public-sites-for-github-pages)" y "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)".
{% endif %}

{% endwarning %}
