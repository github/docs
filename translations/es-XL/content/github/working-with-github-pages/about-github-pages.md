---
title: Acerca de GitHub Pages
intro: 'Puedes usar {% data variables.product.prodname_pages %} para albergar un sitio web sobre ti mismo, tu organización o tu proyecto directamente desde un repositorio {% data variables.product.product_name %}.'
redirect_from:
  - /articles/what-are-github-pages/
  - /articles/what-is-github-pages/
  - /articles/user-organization-and-project-pages/
  - /articles/using-a-static-site-generator-other-than-jekyll/
  - /articles/mime-types-on-github-pages/
  - /articles/should-i-rename-usernamegithubcom-repositories-to-usernamegithubio/
  - /articles/about-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Acerca de {% data variables.product.prodname_pages %}

{% data variables.product.prodname_pages %} es un servicio de alojamiento de sitio estático que toma archivos HTML, CSS y JavaScript directamente desde un repositorio en {% data variables.product.product_name %}, opcionalmente ejecuta los archivos a través de un proceso de complilación y publica un sitio web. Puedes ver ejemplos de sitios de {% data variables.product.prodname_pages %} en la recopilación de ejemplos de [{% data variables.product.prodname_pages %}](https://github.com/collections/github-pages-examples).

{% if currentVersion == "free-pro-team@latest" %}
Puedes alojar tu sitio en el dominio `github.io` de {% data variables.product.prodname_dotcom %} o en tu propio dominio personalizado. Para obtener más información, consulta "[Usar un dominio personalizado con {% data variables.product.prodname_pages %}](/articles/using-a-custom-domain-with-github-pages)".
{% endif %}

Para empezar, vea "[Creando un sitio {% data variables.product.prodname_pages %}](/articles/creating-a-github-pages-site)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
Organization owners can disable the publication of {% data variables.product.prodname_pages %} sites from the organization's repositories. For more information, see "[Disabling publication of {% data variables.product.prodname_pages %} sites for your organization](/github/setting-up-and-managing-organizations-and-teams/disabling-publication-of-github-pages-sites-for-your-organization)."
{% endif %}

### Tipos de sitios {% data variables.product.prodname_pages %}

Existen tres tipos básicos de {% data variables.product.prodname_pages %} sitios: de proyecto, de usuario y de la organización. Los sitios de proyecto están conectados coon un proyecto específico alojado en {% data variables.product.product_name %}, como una biblioteca JavaScript o una colección de recetas. Los sitios de usuario y organización están conectados a una cuenta específica de {% data variables.product.product_name %}.

Para publicar un sitio de usuario debes crear un repositorio que pertenezca a tu cuenta de usuario y se llame {% if currentVersion == "free-pro-team@latest" %}`<user>.github.io`{% else %}`<user>.<hostname>`{% endif %}. Para publicar un sitio de organización debes crear un repositorio que pertenezca a una organización y que se llame {% if currentVersion == "free-pro-team@latest" %}`<organization>.github.io`{% else %}`<organization>.<hostname>`{% endif %}. {% if currentVersion == "free-pro-team@latest" %}A menos que esté usando un dominio personalizado, los sitios de usuario y de organización están disponibles en `http(s)://<username>.github.io` o `http(s)://<organization>.github.io`.{% endif %}

Los archivos fuente para un sitio de proyecto se almacenan en el mismo repositorio que su proyecto. {% if currentVersion == "free-pro-team@latest" %}A menos que esté usando un dominio prsonalizado, los sitios del proyecto están disponibles en `http(s)://<user>.github.io/<repository>` o `http(s)://<organization>.github.io/<repository>`.{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
Para obtener más información sobre cómo los dominios personalizados afectan a la URL de tu sitio, consulta "[Acerca de los dominios personalizados y {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages)".
{% endif %}

Solo puedes crear un sitio de usuario u organización para cada cuenta de {% data variables.product.product_name %}. Los sitios de proyectos, ya sean propiedad de una cuenta de organización de de usuario, son ilimitados.

{% if currentVersion != "free-pro-team@latest" %}
La URL donde tu sitio está disponible depende de si el aislamiento del subdominio está habilitado para {% data variables.product.product_location %}.

| Tipo de sitio | Aislamiento de subdominio habilitado | Aislamiento de subdominio inhabilitado |
| ------------- | ------------------------------------ | -------------------------------------- |
|               |                                      |                                        |
 Usuario | 

`http(s)://pages.<hostname>/<username>/<repository>/` | `http(s)://<hostname>/pages/<username>/<repository>/` | Organization | `http(s)://pages.<hostname>/<organization>/<repository>/` | `http(s)://<hostname>/pages/<organization>/<repository>/` | Sitio del proyecto que pertenece a la cuenta del usuario | `http(s)://pages.<hostname>/<username>/<repository>/` | `http(s)://<hostname>/pages/<username>/<repository>/` Sitio del proyecto que pertenece a la cuenta de la organización | `http(s)://pages.<hostname>/<orgname>/<repository>/` | `http(s)://<hostname>/pages/<orgname>/<repository>/`

Para obtener más información, consulta "[Habilitar el aislamiento del subdominio](/enterprise/{{ currentVersion }}/admin/installation/enabling-subdomain-isolation)" o comunícate con el administrador del sitio.
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**Nota:** Los repositorios que usan el esquema de nombres `<user>.github.com` heredado seguirán publicándose, pero los visitantes serán redirigidos desde `http(s)://<username>.github.com` hasta `http(s)://<username>.github.io`. Si existen tanto un repositorio `<user>.github.com` como `<user>.github.io`, solo el repositorio `<user>.github.io` será publicado.

{% endnote %}
{% endif %}

### Publicar fuentes para sitios {% data variables.product.prodname_pages %}

The publishing source for your {% data variables.product.prodname_pages %} site is the branch and folder where the source files for your site are stored.

{% data reusables.pages.private_pages_are_public_warning %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}

Si la fuente de publicación predeterminada existe en tu repositorio, {% data variables.product.prodname_pages %} publicará automáticamente un sitio desde esta fuente. La fuente de publicación predeterminada para los sitios de usuario y de organización es la raíz de la rama predeterminada para el repositorio. La fuente de publicación predeterminada para los sitios de proyecto es la raíz de la rama `gh-pages`.

Si quieres mantener los archivos fuente para tu sitio en una ubicación distinta, puedes cambiar la fuente de publicación para tu sitio. Puedes publicar tu sitio desde cualquier rama en el repositorio, ya sea desde la raíz del repositorio en esa rama, `/`, o desde la carpeta de `/docs` en ella. Para obtener más información, consulta "[Configurar una fuente de publicación para tu sitio {% data variables.product.prodname_pages %}](/articles/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source)".

Si eliges la carpeta de `/docs` o cualquier rama como tu fuente de publicación, {% data variables.product.prodname_pages %} leerá todo para publicar tu sitio{% if currentVersion == "free-pro-team@latest" %}, incluyendo el archivo _CNAME_,{% endif %} desde la carpeta de `/docs`.{% if currentVersion == "free-pro-team@latest" %} Por ejemplo, cuando editas tu dominio personalizado a través de la configuración de {% data variables.product.prodname_pages %}, dicho dominio escribirá en `/docs/CNAME`. Para más información sobre los archivos _CNAME_, consulta "[Administrar un dominio personalizado para tu sitio {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".{% endif %}

{% else %}

La fuente de publicación predeterminada para los sitios de usuario y organización es la rama `principal`. Si el repositorio para tu sitio de usuario u organización tiene una rama `principal`, tu sitio se publicará automáticamente desde esa rama. No puedes elegir una fuente de publicación diferente para sitios de usuario u organización.

La fuente de publicación predeterminada para un sitio de proyecto es la rama `gh-pages`. Si el repositorio para tu sitio de proyecto tiene una rama `gh-pages`, tu sitio se publicará automáticamente desde esa rama.

Los sitios del proyecto también pueden publicarse desde la rama `principal` o una carpeta `/docs` en la rama `master`. Para publicar tu sitio desde una de estas fuentes, debes configurar una fuente de publicación diferente. Para obtener más información, consulta "[Configurar una fuente de publicación para tu sitio {% data variables.product.prodname_pages %}](/articles/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source)".

 Si eliges la carpeta `/docs` de la rama `principal` como tu fuente de publicación, {% data variables.product.prodname_pages %} leerá todo para publicar tu sitio{% if currentVersion == "free-pro-team@latest" %}, incluido el archivo _CNAME_,{% endif %} desde la carpeta `/docs`.{% if currentVersion == "free-pro-team@latest" %} Por ejemplo, cuando editas tu dominio personalizado a través de los parámetros {% data variables.product.prodname_pages %}, el dominio personalizado se escribirá en `/docs/CNAME`. Para más información sobre los archivos _CNAME_, consulta "[Administrar un dominio personalizado para tu sitio {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".{% endif %}

 No puedes publicar tu sitio de proyecto desde ninguna otra rama, aún si la rama predeterminada es diferente a `master` o `gh-pages`.

{% endif %}

### Generadores de sitios estáticos

{% data variables.product.prodname_pages %} publica cualquier archivo estático que subas a tu repositorio. Puedes crear tus propios archivos estáticos o usar un generador de sitios estáticos para que desarrolle tu sitio. También puedes personalizar tu propio proceso de compilación de forma local o en otro servidor. Recomendamos Jekyll, un generador de sitio estático con soporte integrado para {% data variables.product.prodname_pages %} y un proceso de compilación simplificado. For more information, see "[About {% data variables.product.prodname_pages %} and Jekyll](/articles/about-github-pages-and-jekyll)."

{% data variables.product.prodname_pages %} usará Jekyll para compilar tu sitio por defecto. Si deseas usar un generador de sitio estático diferente a Jekyll, desactiva el proceso de compilación de Jekyll creando un archivo vacío denominado `en la raíz de tu fuente de publicación, luego seguir las instrucciones del generador de sitio estático para desarrollar tu sitio localmente.</p>

<p spaces-before="0">{% data variables.product.prodname_pages %} no soporta idiomas del lado del servidor como PHP, Ruby o Python.</p>

<h3 spaces-before="0">Guías para usar {% data variables.product.prodname_pages %}</h3>

<p spaces-before="0">{% if currentVersion == "free-pro-team@latest" %}</p>

<ul>
<li>los sitios {% data variables.product.prodname_pages %} creados después del 15 de junio de 2016 y utilizando dominios <code>github.io` se brindan a través de HTTPS. Si creaste tu sitio antes del 15 de junio de 2016, puedes habilitar el soporte HTTPS para el tráfico hasta tu sitio. Para obtener más información, consulta "[Asegurar tu {% data variables.product.prodname_pages %} con HTTPS](/articles/securing-your-github-pages-site-with-https)".</li>
- {% data reusables.pages.no_sensitive_data_pages %}
- Tu uso de {% data variables.product.prodname_pages %} está sujeto a los [Términos del servicio de GitHub](/articles/github-terms-of-service/), incluida la prohibición de reventa.</ul>

#### Límites de uso
{% endif %}
los sitios {% data variables.product.prodname_pages %} están sujetos a los siguientes límites de uso:

  - Los repositorios de fuente de {% data variables.product.prodname_pages %} tienen un límite recomendado de 1 GB.{% if currentVersion == "free-pro-team@latest" %} Para más información, consulta "[¿Cuál es la cuota de mi disco?"](/articles/what-is-my-disk-quota/#file-and-repository-size-limitations){% endif %}
  - Los sitios de {% data variables.product.prodname_pages %} publicados no pueden ser mayores a 1 GB.
{% if currentVersion == "free-pro-team@latest" %}
  - Los sitios de {% data variables.product.prodname_pages %} tienen un *soft* límite de ancho de banda de 100GB por mes.
  - Los sitios de {% data variables.product.prodname_pages %} tienen un *soft* límite de 10 construcciones por hora.

Si tu sitio excede estas cuotas de uso, es posible que no podamos prestar servicio a tu sitio, o puedes recibir un correo electrónico formal de {% data variables.contact.contact_support %} sugiriendo estrategias para reducir el impacto de tu sitio en nuestros servidores, lo que incluye poner una red de distribución de contenido de un tercero (CDN) al frente de tu sitio, usar las otras características de {% data variables.product.prodname_dotcom %}, como lanzamientos, o mudar a un servicio de alojamiento diferente que pueda satisfacer mejor tus necesidades.

#### Usos prohibidos

{% data variables.product.prodname_pages %} no pretende ser un servicio de alojamiento web gratuito ni permite que se use de ese modo para realizar tus negocios en línea, un sitio de comercio electrónico, o cualquier otro sitio web que esté principalmente dirigido a facilitar las operaciones comerciales o brindar software comercial como un servicio (SaaS).

Además, los sitios de {% data variables.product.prodname_pages %} deben evitar:

  - el contenido o la actividad que sea ilegal o esté prohibida por nuestros [Términos de servicio](/articles/github-terms-of-service/) o [Pautas de la comunidad](/articles/github-community-guidelines/)
  - el contenido o la actividad violentas o amenazadoras
  - la actividad masiva automatizada excesiva (por ejemplo, envío de spam)
  - la actividad que comprometa a los usuarios o los servicios de GitHub
  - los esquemas del tipo 'hágase rico rápidamente'
  - el contenido sexualmente obsceno
  - el contenido que falsea de manera fraudulenta tu identidad o el propósito del sitio

Si tienes consultas acerca de si tu uso o tu intención de uso corresponde a alguna de estas categorías, comunícate con {% data variables.contact.contact_support %}.
{% endif %}

### Tipos MIME en {% data variables.product.prodname_pages %}

Un tipo MIME es un encabezado que un servidor envía a un navegador, proporcionando información sobre la naturaleza y el formato de los archivos que solicitó el navegador. {% data variables.product.prodname_pages %} soporta más de 750 tipos MIME entre las miles de extensiones de archivo. La lista de los tipos de MIME compatibles se genera desde el [mime-db project](https://github.com/jshttp/mime-db).

Si bien no puedes especificar los tipos de MIME personalizados en una base por perfil o por repositorio, puedes agregar o modificar los tipos de MIME para usar en {% data variables.product.prodname_pages %}. Para obtener más información, consulta [los lineamientos de contribución de mime-db](https://github.com/jshttp/mime-db#adding-custom-media-types).

### Leer más

- [{% data variables.product.prodname_pages %}](https://lab.github.com/githubtraining/github-pages) en {% data variables.product.prodname_learning %}
- "[{% data variables.product.prodname_pages %}](/v3/repos/pages)"
