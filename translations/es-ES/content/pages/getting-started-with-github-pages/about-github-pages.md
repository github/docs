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
  - /github/working-with-github-pages/about-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - páginas
---

### Acerca de {% data variables.product.prodname_pages %}

{% data variables.product.prodname_pages %} es un servicio de alojamiento de sitio estático que toma archivos HTML, CSS y JavaScript directamente desde un repositorio en {% data variables.product.product_name %}, opcionalmente ejecuta los archivos a través de un proceso de complilación y publica un sitio web. Puedes ver ejemplos de sitios de {% data variables.product.prodname_pages %} en la recopilación de ejemplos de [{% data variables.product.prodname_pages %}](https://github.com/collections/github-pages-examples).

{% if currentVersion == "free-pro-team@latest" %}
Puedes alojar tu sitio en el dominio `github.io` de {% data variables.product.prodname_dotcom %} o en tu propio dominio personalizado. Para obtener más información, consulta "[Utilizar un dominio personalizado con {% data variables.product.prodname_pages %}](/articles/using-a-custom-domain-with-github-pages)".
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.pages.about-private-publishing %} Para obtener más información, consulta la sección "[Cambiar la visibilidad de tu sitio de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)".
{% endif %}

Para empezar, vea "[Creando un sitio {% data variables.product.prodname_pages %}](/articles/creating-a-github-pages-site)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
Los propietarios de la organización pueden inhabilitar la publicación de sitios de {% data variables.product.prodname_pages %} desde los repositorios de la organización. Para obtener más información, consulta la sección "[Administrar la publicación de sitios de {% data variables.product.prodname_pages %} para tu organización](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".
{% endif %}

### Tipos de sitios {% data variables.product.prodname_pages %}

Existen tres tipos básicos de {% data variables.product.prodname_pages %} sitios: de proyecto, de usuario y de la organización. Los sitios de proyecto están conectados coon un proyecto específico alojado en {% data variables.product.product_name %}, como una biblioteca JavaScript o una colección de recetas. Los sitios de usuario y organización están conectados a una cuenta específica de {% data variables.product.product_name %}.

Para publicar un sitio de usuario, debes crear un repositorio que pertenezca a tu cuenta de usuario que se llame {% if currentVersion == "free-pro-team@latest" %}`<username>.github.io`{% else %}`<username>.<hostname>`{% endif %}. Para publicar un sitio de organización, debes crear un repositorio que pertenezca a una organización y que se llame {% if currentVersion == "free-pro-team@latest" %}`<organization>.github.io`{% else %}`<organization>.<hostname>`{% endif %}. {% if currentVersion == "free-pro-team@latest" %}A menos de que estés utilizando un dominio personalizado, los sitios de usuario y de organización se encuentran disponibles en `http(s)://<username>.github.io` o `http(s)://<organization>.github.io`.{% elsif currentVersion == "github-ae@latest" %}los sitios de organizaciones y usuarios se encuentran disponibles en `http(s)://pages.<hostname>/<username>` o `http(s)://pages.<hostname>/<organization>`.{% endif %}

Los archivos fuente para un sitio de proyecto se almacenan en el mismo repositorio que su proyecto. {% if currentVersion == "free-pro-team@latest" %}A menos de que estés utilizando un dominio personalizado, los sitios de proyecto se encuentran disponibles en `http(s)://<username>.github.io/<repository>` o `http(s)://<organization>.github.io/<repository>`.{% elsif currentVersion == "github-ae@latest" %}Los sitios de proyecto se encuentran disponibles en `http(s)://pages.<hostname>/<username>/<repository>/` o `http(s)://pages.<hostname>/<organization>/<repository>/`.{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
Si publicas tu sitio de forma privada, la URL de éste será diferente. Para obtener más información, consulta la sección "[Cambiar la visibilidad de tu sitio de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)."
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
Para obtener más información sobre cómo los dominios personalizados afectan a la URL de tu sitio, consulta "[Acerca de los dominios personalizados y {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages)".
{% endif %}

Solo puedes crear un sitio de organización o de usuario para cada cuenta en {% data variables.product.product_name %}. Los sitios de proyectos, ya sean propiedad de una cuenta de organización de de usuario, son ilimitados.

{% if enterpriseServerVersions contains currentVersion %}
La URL donde tu sitio está disponible depende de si el aislamiento del subdominio está habilitado para {% data variables.product.product_location %}.

| Tipo de sitio | Aislamiento de subdominio habilitado | Aislamiento de subdominio inhabilitado |
| ------------- | ------------------------------------ | -------------------------------------- |
|               |                                      |                                        |
 Usuario| 

`http(s)://pages.<hostname>/<username>` | `http(s)://<hostname>/pages/<username>` | Organización| `http(s)://pages.<hostname>/<organization>` | `http(s)://<hostname>/pages/<organization>` | Sitio de proyecto que pertenece a una cuenta de usuario | `http(s)://pages.<hostname>/<username>/<repository>/` | `http(s)://<hostname>/pages/<username>/<repository>/` Sitio de proyecto que pertenece a una cuenta de organización | `http(s)://pages.<hostname>/<orgname>/<repository>/` | `http(s)://<hostname>/pages/<orgname>/<repository>/`

Para obtener más información, consulta la sección "[Habilitar el aislamiento del subdominio](/enterprise/{{ currentVersion }}/admin/installation/enabling-subdomain-isolation)" o contacta a tu administrador de sitio.
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

**Nota:** Los repositorios que usan el esquema de nombres `<username>.github.com` tradicional seguirán publicándose, pero los visitantes serán redirigidos desde `http(s)://<username>.github.com` a `http(s)://<username>.github.io`. Si existen tanto un repositorio de `<username>.github.com` como de `<username>.github.io`, solo se publicará el repositorio de `<username>.github.io`.

{% endnote %}
{% endif %}

### Publicar fuentes para sitios {% data variables.product.prodname_pages %}

La fuente de publicación para tu sitio de {% data variables.product.prodname_pages %} es la rama y carpeta en donde se almacenan los archivos fuente de tu sitio.

{% data reusables.pages.private_pages_are_public_warning %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}

Si la fuente de publicación predeterminada existe en tu repositorio, {% data variables.product.prodname_pages %} publicará automáticamente un sitio desde esta fuente. La fuente de publicación predeterminada para los sitios de usuario y de organización es la raíz de la rama predeterminada para el repositorio. La fuente de publicación predeterminada para los sitios de proyecto es la raíz de la rama `gh-pages`.

Si quieres mantener los archivos fuente para tu sitio en una ubicación distinta, puedes cambiar la fuente de publicación para tu sitio. Puedes publicar tu sitio desde cualquier rama en el repositorio, ya sea desde la raíz del repositorio en esa rama, `/`, o desde la carpeta de `/docs` en ella. Para obtener más información, consulta "[Configurar una fuente de publicación para tu sitio {% data variables.product.prodname_pages %}](/articles/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source)".

Si eliges la carpeta `/docs` de cualquier rama como tu fuente de publicación, {% data variables.product.prodname_pages %} leerá todo para publicar tu sitio{% if currentVersion == "free-pro-team@latest" %}, incluyendo el archivo de _CNAME_,{% endif %} de la carpeta `/docs`. {% if currentVersion == "free-pro-team@latest" %} Por ejemplo, cuando editas tu dominio personalizado a través de la configuración de {% data variables.product.prodname_pages %}, dicho dominio escribirá en `/docs/CNAME`. Para más información sobre los archivos _CNAME_, consulta "[Administrar un dominio personalizado para tu sitio {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".{% endif %}

{% else %}

La fuente de publicación predeterminada para los sitios de usuario y organización es la rama `master`. Si el repositorio para tu sitio de usuario u organización tiene una rama `master`, tu sitio se publicará automáticamente desde esa rama. No puedes elegir una fuente de publicación diferente para sitios de usuario u organización.

La fuente de publicación predeterminada para un sitio de proyecto es la rama `gh-pages`. Si el repositorio para tu sitio de proyecto tiene una rama `gh-pages`, tu sitio se publicará automáticamente desde esa rama.

Los sitios del proyecto también pueden publicarse desde la rama `master` o una carpeta `/docs` en la rama `master`. Para publicar tu sitio desde una de estas fuentes, debes configurar una fuente de publicación diferente. Para obtener más información, consulta "[Configurar una fuente de publicación para tu sitio {% data variables.product.prodname_pages %}](/articles/configuring-a-publishing-source-for-your-github-pages-site#choosing-a-publishing-source)".

Si eliges la carpeta `/docs` de la rama `master` como tu fuente de publicación, {% data variables.product.prodname_pages %} leerá todo para publicar tu sitio{% if currentVersion == "free-pro-team@latest" %}, incluyendo el archivo de _CNAME_,{% endif %} de la carpeta `/docs`. {% if currentVersion == "free-pro-team@latest" %} Por ejemplo, cuando editas tu dominio personalizado a través de la configuración de {% data variables.product.prodname_pages %}, dicho dominio escribirá en `/docs/CNAME`. Para más información sobre los archivos _CNAME_, consulta "[Administrar un dominio personalizado para tu sitio {% data variables.product.prodname_pages %}](/articles/managing-a-custom-domain-for-your-github-pages-site)".{% endif %}

No puedes publicar tu sitio de proyecto desde ninguna otra rama, aún si la rama predeterminada es diferente a `master` o `gh-pages`.

{% endif %}

### Generadores de sitios estáticos

{% data variables.product.prodname_pages %} publica cualquier archivo estático que subas a tu repositorio. Puedes crear tus propios archivos estáticos o usar un generador de sitios estáticos para que desarrolle tu sitio. También puedes personalizar tu propio proceso de compilación de forma local o en otro servidor. Recomendamos Jekyll, un generador de sitio estático con soporte integrado para {% data variables.product.prodname_pages %} y un proceso de compilación simplificado. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_pages %} y de Jekyll](/articles/about-github-pages-and-jekyll)".

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

  - Los repositorios de código fuente de {% data variables.product.prodname_pages %} tienen un límite de 1GB.{% if currentVersion == "free-pro-team@latest" %} Para obtener más información, consulta la sección "[¿Cuál es mi cuota de disco?"](/articles/what-is-my-disk-quota/#file-and-repository-size-limitations){% endif %}
  - Los sitios de {% data variables.product.prodname_pages %} publicados no pueden ser mayores a 1 GB.
{% if currentVersion == "free-pro-team@latest" %}
  - Los sitios de {% data variables.product.prodname_pages %} tienen un ancho de banda *virtual* de 100GB por mes.
  - Los sitios de {% data variables.product.prodname_pages %} tienen un límite *virtual* de 10 compilaciones por hora.

Si tu sitio excede estas cuotas de uso, es posible que no podamos prestar servicio a tu sitio, o puedes recibir un correo electrónico formal de {% data variables.contact.contact_support %} sugiriendo estrategias para reducir el impacto de tu sitio en nuestros servidores, lo que incluye poner una red de distribución de contenido de un tercero (CDN) al frente de tu sitio, usar las otras características de {% data variables.product.prodname_dotcom %}, como lanzamientos, o mudar a un servicio de alojamiento diferente que pueda satisfacer mejor tus necesidades.

#### Usos prohibidos

{% data variables.product.prodname_pages %} no pretende ser un servicio de alojamiento web gratuito ni permite que se use de ese modo para realizar tus negocios en línea, un sitio de comercio electrónico, o cualquier otro sitio web que esté principalmente dirigido a facilitar las operaciones comerciales o brindar software comercial como un servicio (SaaS).

In addition, {% data variables.product.prodname_dotcom %} does not allow {% data variables.product.prodname_pages %} to be used for certain purposes or activities. Para encontrar una lista de usos prohibidos, consulta la sección "[Condiciones adicionales de producto de {% data variables.product.prodname_dotcom %} para las {% data variables.product.prodname_pages %}](/github/site-policy/github-additional-product-terms#4-pages)".
{% endif %}

### Tipos MIME en {% data variables.product.prodname_pages %}

Un tipo MIME es un encabezado que un servidor envía a un navegador, proporcionando información sobre la naturaleza y el formato de los archivos que solicitó el navegador. {% data variables.product.prodname_pages %} soporta más de 750 tipos MIME entre las miles de extensiones de archivo. La lista de los tipos de MIME compatibles se genera desde el [mime-db project](https://github.com/jshttp/mime-db).

Si bien no puedes especificar los tipos de MIME personalizados en una base por perfil o por repositorio, puedes agregar o modificar los tipos de MIME para usar en {% data variables.product.prodname_pages %}. Para obtener más información, consulta [los lineamientos de contribución de mime-db](https://github.com/jshttp/mime-db#adding-custom-media-types).

### Leer más

- [{% data variables.product.prodname_pages %}](https://lab.github.com/githubtraining/github-pages) en {% data variables.product.prodname_learning %}
- "[{% data variables.product.prodname_pages %}](/rest/reference/repos#pages)"
