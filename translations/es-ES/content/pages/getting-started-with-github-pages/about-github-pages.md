---
title: Acerca de GitHub Pages
intro: 'You can use {% data variables.product.prodname_pages %} to host a website about yourself, your organization, or your project directly from a repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.'
redirect_from:
  - /articles/what-are-github-pages/
  - /articles/what-is-github-pages/
  - /articles/user-organization-and-project-pages/
  - /articles/using-a-static-site-generator-other-than-jekyll/
  - /articles/mime-types-on-github-pages/
  - /articles/should-i-rename-usernamegithubcom-repositories-to-usernamegithubio/
  - /articles/about-github-pages
  - /github/working-with-github-pages/about-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
---

## Acerca de {% data variables.product.prodname_pages %}

{% data variables.product.prodname_pages %} es un servicio de alojamiento de sitio estático que toma archivos HTML, CSS y JavaScript directamente desde un repositorio en {% data variables.product.product_name %}, opcionalmente ejecuta los archivos a través de un proceso de complilación y publica un sitio web. Puedes ver ejemplos de sitios de {% data variables.product.prodname_pages %} en la recopilación de ejemplos de [{% data variables.product.prodname_pages %}](https://github.com/collections/github-pages-examples).

{% ifversion fpt or ghec %}
Puedes alojar tu sitio en el dominio `github.io` de {% data variables.product.prodname_dotcom %} o en tu propio dominio personalizado. Para obtener más información, consulta "[Utilizar un dominio personalizado con {% data variables.product.prodname_pages %}](/articles/using-a-custom-domain-with-github-pages)".
{% endif %}

{% ifversion fpt or ghec %}
{% data reusables.pages.about-private-publishing %} Para obtener más información, consulta la sección "[Cambiar la visibilidad de tu sitio de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)".
{% endif %}

Para empezar, vea "[Creando un sitio {% data variables.product.prodname_pages %}](/articles/creating-a-github-pages-site)."

{% ifversion fpt or ghes > 3.0 or ghec %}
Los propietarios de la organización pueden inhabilitar la publicación de sitios de {% data variables.product.prodname_pages %} desde los repositorios de la organización. Para obtener más información, consulta la sección "[Administrar la publicación de sitios de {% data variables.product.prodname_pages %} para tu organización](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".
{% endif %}

## Tipos de sitios {% data variables.product.prodname_pages %}

Existen tres tipos básicos de {% data variables.product.prodname_pages %} sitios: de proyecto, de usuario y de la organización. Los sitios de proyecto están conectados coon un proyecto específico alojado en {% data variables.product.product_name %}, como una biblioteca JavaScript o una colección de recetas. User and organization sites are connected to a specific account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.

Para publicar un sitio de usuario, debes crear un repositorio que pertenezca a tu cuenta de usuario que se llame {% ifversion fpt or ghec %}`<username>.github.io`{% else %}`<username>.<hostname>`{% endif %}. Para publicar un sitio de organización debes crear un repositorio que pertenezca a una organización y que se llame {% ifversion fpt or ghec %}`<organization>.github.io`{% else %}`<organization>.<hostname>`{% endif %}. {% ifversion fpt or ghec %}A menos de que estés utilizando un dominio personalizado, los sitios de usuario y de organización se encuentran disponibles en `http(s)://<username>.github.io` o `http(s)://<organization>.github.io`.{% elsif ghae %}los sitios de organizaciones y usuarios se encuentran disponibles en `http(s)://pages.<hostname>/<username>` o `http(s)://pages.<hostname>/<organization>`.{% endif %}

Los archivos fuente para un sitio de proyecto se almacenan en el mismo repositorio que su proyecto. {% ifversion fpt or ghec %}A menos de que estés utilizando un dominio personalizado, los sitios de proyecto se encuentran disponibles en `http(s)://<username>.github.io/<repository>` o `http(s)://<organization>.github.io/<repository>`.{% elsif ghae %}Los sitios de proyecto se encuentran disponibles en `http(s)://pages.<hostname>/<username>/<repository>/` o `http(s)://pages.<hostname>/<organization>/<repository>/`.{% endif %}

{% ifversion fpt or ghec %}
Si publicas tu sitio de forma privada, la URL de éste será diferente. Para obtener más información, consulta la sección "[Cambiar la visibilidad de tu sitio de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)."
{% endif %}

{% ifversion fpt or ghec %}
Para obtener más información sobre cómo los dominios personalizados afectan a la URL de tu sitio, consulta "[Acerca de los dominios personalizados y {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages)".
{% endif %}

Solo puedes crear un sitio de organización o de usuario para cada cuenta en {% data variables.product.product_name %}. Los sitios de proyectos, ya sean propiedad de una cuenta de organización de de usuario, son ilimitados.

{% ifversion ghes %}
La URL donde tu sitio está disponible depende de si el aislamiento del subdominio está habilitado para {% data variables.product.product_location %}.

| Tipo de sitio | Aislamiento de subdominio habilitado | Aislamiento de subdominio inhabilitado |
| ------------- | ------------------------------------ | -------------------------------------- |
|               |                                      |                                        |
 Usuario| 

`http(s)://pages.<hostname>/<username>` | `http(s)://<hostname>/pages/<username>` | Organización| `http(s)://pages.<hostname>/<organization>` | `http(s)://<hostname>/pages/<organization>` | Sitio de proyecto que pertenece a una cuenta de usuario | `http(s)://pages.<hostname>/<username>/<repository>/` | `http(s)://<hostname>/pages/<username>/<repository>/` Sitio de proyecto que pertenece a una cuenta de organización | `http(s)://pages.<hostname>/<orgname>/<repository>/` | `http(s)://<hostname>/pages/<orgname>/<repository>/`

Para obtener más información, consulta la sección "[Habilitar el aislamiento del subdominio](/enterprise/{{ currentVersion }}/admin/installation/enabling-subdomain-isolation)" o contacta a tu administrador de sitio.
{% endif %}

## Publicar fuentes para sitios {% data variables.product.prodname_pages %}

La fuente de publicación para tu sitio de {% data variables.product.prodname_pages %} es la rama y carpeta en donde se almacenan los archivos fuente de tu sitio.

{% data reusables.pages.private_pages_are_public_warning %}

Si la fuente de publicación predeterminada existe en tu repositorio, {% data variables.product.prodname_pages %} publicará automáticamente un sitio desde esta fuente. La fuente de publicación predeterminada para los sitios de usuario y de organización es la raíz de la rama predeterminada para el repositorio. La fuente de publicación predeterminada para los sitios de proyecto es la raíz de la rama `gh-pages`.

Si quieres mantener los archivos fuente para tu sitio en una ubicación distinta, puedes cambiar la fuente de publicación para tu sitio. Puedes publicar tu sitio desde cualquier rama en el repositorio, ya sea desde la raíz del repositorio en esa rama, `/`, o desde la carpeta de `/docs` en ella. Para obtener más información, consulta "[Configurar una fuente de publicación para tu sitio {% data variables.product.prodname_pages %}](/articles/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source)".

Si eliges la carpeta de `/docs` o cualquier rama como tu fuente de publicación, {% data variables.product.prodname_pages %} leerá todo para publicar tu sitio{% ifversion fpt or ghec %}, incluyendo el archivo _CNAME_,{% endif %} desde la carpeta de `/docs`.{% ifversion fpt or ghec %} Por ejemplo, cuando editas tu dominio personalizado a través de la configuración de {% data variables.product.prodname_pages %}, dicho dominio escribirá en `/docs/CNAME`. Para más información sobre los archivos _CNAME_, consulta "[Administrar un dominio personalizado para tu sitio {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".{% endif %}


## Generadores de sitios estáticos

{% data variables.product.prodname_pages %} publica cualquier archivo estático que subas a tu repositorio. Puedes crear tus propios archivos estáticos o usar un generador de sitios estáticos para que desarrolle tu sitio. También puedes personalizar tu propio proceso de compilación de forma local o en otro servidor. Recomendamos Jekyll, un generador de sitio estático con soporte integrado para {% data variables.product.prodname_pages %} y un proceso de compilación simplificado. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_pages %} y de Jekyll](/articles/about-github-pages-and-jekyll)".

{% data variables.product.prodname_pages %} usará Jekyll para compilar tu sitio por defecto. Si deseas usar un generador de sitio estático diferente a Jekyll, desactiva el proceso de compilación de Jekyll creando un archivo vacío denominado `en la raíz de tu fuente de publicación, luego seguir las instrucciones del generador de sitio estático para desarrollar tu sitio localmente.</p>

<p spaces-before="0">{% data variables.product.prodname_pages %} no soporta idiomas del lado del servidor como PHP, Ruby o Python.</p>

<h2 spaces-before="0">Guías para usar {% data variables.product.prodname_pages %}</h2>

<p spaces-before="0">{% ifversion fpt or ghec %}</p>

<ul>
<li>los sitios {% data variables.product.prodname_pages %} creados después del 15 de junio de 2016 y utilizando dominios <code>github.io` se brindan a través de HTTPS. Si creaste tu sitio antes del 15 de junio de 2016, puedes habilitar el soporte HTTPS para el tráfico hasta tu sitio. Para obtener más información, consulta "[Asegurar tu {% data variables.product.prodname_pages %} con HTTPS](/articles/securing-your-github-pages-site-with-https)".</li>
- {% data reusables.pages.no_sensitive_data_pages %}
- Tu uso de {% data variables.product.prodname_pages %} está sujeto a los [Términos del servicio de GitHub](/free-pro-team@latest/github/site-policy/github-terms-of-service/), incluida la prohibición de reventa.</ul>

### Límites de uso
{% endif %}
los sitios {% data variables.product.prodname_pages %} están sujetos a los siguientes límites de uso:

  - Los repositorios de fuente de {% data variables.product.prodname_pages %} tienen un límite recomendado de 1 GB.{% ifversion fpt or ghec %} Para más información, consulta "[¿Cuál es la cuota de mi disco?"](/articles/what-is-my-disk-quota/#file-and-repository-size-limitations){% endif %}
  - Los sitios de {% data variables.product.prodname_pages %} publicados no pueden ser mayores a 1 GB.
{% ifversion fpt or ghec %}
  - Los sitios de {% data variables.product.prodname_pages %} tienen un ancho de banda *virtual* de 100GB por mes.
  - Los sitios de {% data variables.product.prodname_pages %} tienen un límite *virtual* de 10 compilaciones por hora.

Si tu sitio excede estas cuotas de uso, es posible que no podamos prestar servicio a tu sitio, o puedes recibir un correo electrónico formal de {% data variables.contact.contact_support %} sugiriendo estrategias para reducir el impacto de tu sitio en nuestros servidores, lo que incluye poner una red de distribución de contenido de un tercero (CDN) al frente de tu sitio, usar las otras características de {% data variables.product.prodname_dotcom %}, como lanzamientos, o mudar a un servicio de alojamiento diferente que pueda satisfacer mejor tus necesidades.

### Usos prohibidos

{% data variables.product.prodname_pages %} no pretende ser un servicio de alojamiento web gratuito ni permite que se use de ese modo para realizar tus negocios en línea, un sitio de comercio electrónico, o cualquier otro sitio web que esté principalmente dirigido a facilitar las operaciones comerciales o brindar software comercial como un servicio (SaaS).

Adicionalmente, {% data variables.product.prodname_dotcom %} no permite que se utilicen las {% data variables.product.prodname_pages %} para algunos propósitos o actividades específicos. Para encontrar una lista de usos prohibidos, consulta la sección "[Condiciones adicionales de producto de {% data variables.product.prodname_dotcom %} para las {% data variables.product.prodname_pages %}](/free-pro-team@latest/github/site-policy/github-terms-for-additional-products-and-features#pages)".
{% endif %}

## Tipos MIME en {% data variables.product.prodname_pages %}

Un tipo MIME es un encabezado que un servidor envía a un navegador, proporcionando información sobre la naturaleza y el formato de los archivos que solicitó el navegador. {% data variables.product.prodname_pages %} soporta más de 750 tipos MIME entre las miles de extensiones de archivo. La lista de los tipos de MIME compatibles se genera desde el [mime-db project](https://github.com/jshttp/mime-db).

Si bien no puedes especificar los tipos de MIME personalizados en una base por perfil o por repositorio, puedes agregar o modificar los tipos de MIME para usar en {% data variables.product.prodname_pages %}. Para obtener más información, consulta [los lineamientos de contribución de mime-db](https://github.com/jshttp/mime-db#adding-custom-media-types).

## Leer más

- [{% data variables.product.prodname_pages %}](https://lab.github.com/githubtraining/github-pages) en {% data variables.product.prodname_learning %}
- "[{% data variables.product.prodname_pages %}](/rest/reference/repos#pages)"
