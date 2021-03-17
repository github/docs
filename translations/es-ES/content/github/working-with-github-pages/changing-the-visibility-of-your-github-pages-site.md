---
title: Cambiar la visibilidad de tu sitio de GitHub Pages
intro: 'Puedes administrar el control de acceso para tu sitio de proyecto si lo publicas de forma pública o privada.'
product: '{% data reusables.gated-features.private-pages %}'
versions:
  free-pro-team: '*'
permissions: Las personas con permisos administrativos en un repositorio pueden cambiar la visibilidad de un sitio de {% data variables.product.prodname_pages %}.
---

### Acerca del control de acceso para los sitios de {% data variables.product.prodname_pages %}

Si tu sitio de proyecto se publica desde un repositorio privado o interno que pertenezca a una organización que utiliza {% data variables.product.prodname_ghe_cloud %}, puedes administrar el control de accesos para el sitio. Con el control de acceso puedes elegir publicar el sitio de forma pública para cualquiera en internet o de forma privada para las personas con acceso de lectura en tu repositorio. Un sitio que se publica de forma privada puede utilizarse para compartir tu documentación o base de conocimientos internos con los miembros de tu empresa. No puedes administrar el control de accesos para el sitio de una organización. Para obtener más información sobre los tipos de sitios de {% data variables.product.prodname_pages %}, consulta la sección "[Acerca de GitHub Pages](/github/working-with-github-pages/about-github-pages#types-of-github-pages-sites)".

Los sitios que se publican de forma privada se encuentran disponibles en un subdominio diferente que el de aquellos sitios que se publican de forma pública. Puedes ver la URL de tu sitio en la configuración del repositorio. Si estás utilizando un generador estático que se configuró para compilar el sitio con el nombre de repositorio como ruta, podrías necesitar actualizar la configuración para el generador de sitio estático cuando cambies el sitio a privado. Para obtener más información, consulta la sección "[Configurar a Jekyll en tu sitio de {% data variables.product.prodname_pages %}](/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)" o la documentación de tu generador de sitio estático.

### Cambiar la visibilidad de tu sitio de {% data variables.product.prodname_pages %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Debajo de "{% data variables.product.prodname_pages %}", selecciona el menú desplegable de **visibilidad de {% data variables.product.prodname_pages %}** y luego da clic en una visibilidad. ![Menú desplegable para elegir la visibilidad para tu sitio](/assets/images/help/pages/public-or-private-visibility.png)
4. Para ver tu sitio publicado, debajo de "{% data variables.product.prodname_pages %}", da clic en la URL del mismo. ![URL de tu sitio publicado de forma privada](/assets/images/help/pages/click-private-pages-url-to-preview.png)

  {% note %}

  {% data reusables.pages.twenty-minutes-to-publish %}

  {% endnote %}
