---
title: Cambiar la visibilidad de tu sitio de GitHub Pages
intro: Puedes administrar el control de acceso para tu sitio de proyecto si lo publicas de forma pública o privada.
versions:
  ghec: '*'
permissions: 'People with admin access to a repository can change the visibility of a {% data variables.product.prodname_pages %} site.'
redirect_from:
  - /github/working-with-github-pages/changing-the-visibility-of-your-github-pages-site
shortTitle: Cambiar la visibilidad del sitio
---

## Acerca del control de acceso para los sitios de {% data variables.product.prodname_pages %}

Con el control de accesos para {% data variables.product.prodname_pages %}, puedes restringir el acceso a tu sitio de proyecto si lo publicas de forma privada. Solo las personas con acceso de lectura al repositorio desde el cual se publica el sitio pueden acceder al sitio que se publicó en privado. Puedes utilizar sitios publicados en privado para compartir tu documentación o base de conocimiento interna con los miembros de tu empresa.

{% data reusables.pages.privately-publish-ghec-only %}

Si tu empresa utiliza {% data variables.product.prodname_emus %}, el control de acceso no está disponible y solo otros miembros de la empresa podrán acceder a todos los sitios de {% data variables.product.prodname_pages %}. Para obtener más información acerca de {% data variables.product.prodname_emus %}, consulta la sección "[Acerca de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users)".

Si tu organización utiliza {% data variables.product.prodname_ghe_cloud %} sin {% data variables.product.prodname_emus %}, puedes elegir publicar tus sitios de proyecto en privado o al público para cualquiera en la internet.

El control de accesos se encuentra disponible para los sitios de proyecto que se publican desde un repositorio privado o interno que pertenezca a la organización. No puedes administrar el control de accesos para el sitio de una organización. Para obtener más información sobre los tipos de sitios de {% data variables.product.prodname_pages %}, consulta la sección "[Acerca de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)".

## Acerca de los subdominios para los sitios publicados en privado

Los sitios que se publican de forma privada se encuentran disponibles en un subdominio diferente que el de aquellos sitios que se publican de forma pública. Esto garantiza que tu sitio de {% data variables.product.prodname_pages %} es seguro desde el momento en el que se publica:

- Aseguramos cada dominio de `*.pages.github.io` automáticamente con un certificado TLS y requerimos HSTS para garantizar que los buscadores siempre sirvan la página a través de HTTPS.
- Utilizamos un subdominio único para el sitio publicado en privado para garantizar que otros repositorios en tu organización no puedan publicar contenido en el mismo origen que el sitio. Esto protege a tu sitio de los ataques de " [cookie tossing](https://github.blog/2013-04-09-yummy-cookies-across-domains/)". También es por esto que no hospedamos sitios de {% data variables.product.prodname_pages %} en el dominio `github.com`.

Puedes ver el subdominio único de tu sitio en la pestaña de "Páginas" de los ajustes de tu repositorio. Si estás utilizando un generador estático que se configuró para compilar el sitio con el nombre de repositorio como ruta, podrías necesitar actualizar la configuración para el generador de sitio estático cuando cambies el sitio a privado. Para obtener más información, consulta la sección "[Configurar a Jekyll en tu sitio de {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)" o la documentación de tu generador de sitio estático.

Para utilizar un dominio más corto y memorable para tu sitio publicado en privado, puedes configurar un dominio personalizado. Para obtener más información, consulta la sección "[Configurar un dominio personalizado para tu sitio de {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site)".

## Cambiar la visibilidad de tu sitio de {% data variables.product.prodname_pages %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
3. Debajo de "{% data variables.product.prodname_pages %}", selecciona el menú desplegable de **visibilidad de {% data variables.product.prodname_pages %}** y luego da clic en una visibilidad. ![Menú desplegable para elegir la visibilidad para tu sitio](/assets/images/help/pages/public-or-private-visibility.png)
4. Para ver tu sitio publicado, debajo de "{% data variables.product.prodname_pages %}", da clic en la URL del mismo. ![URL de tu sitio publicado de forma privada](/assets/images/help/pages/click-private-pages-url-to-preview.png)

  {% note %}

  {% data reusables.pages.twenty-minutes-to-publish %}

  {% endnote %}
