---
title: Acerca de GitHub Pages
intro: 'Puedes utilizar {% data variables.product.prodname_pages %} para hospedar un sitio web sobre ti mismo, sobre tu organización o sobre tu proyecto directamente desde un repositorio en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.'
redirect_from:
  - /articles/what-are-github-pages
  - /articles/what-is-github-pages
  - /articles/user-organization-and-project-pages
  - /articles/using-a-static-site-generator-other-than-jekyll
  - /articles/mime-types-on-github-pages
  - /articles/should-i-rename-usernamegithubcom-repositories-to-usernamegithubio
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
ms.openlocfilehash: 1063adbe5396569110af1809a8619440e3bf106b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147507994'
---
## Acerca de {% data variables.product.prodname_pages %}

{% data variables.product.prodname_pages %} es un servicio de alojamiento de sitio estático que toma archivos HTML, CSS y JavaScript directamente desde un repositorio en {% data variables.product.product_name %}, opcionalmente ejecuta los archivos a través de un proceso de complilación y publica un sitio web. Puede ver ejemplos de sitios de {% data variables.product.prodname_pages %} en la [colección de ejemplos de {% data variables.product.prodname_pages %}](https://github.com/collections/github-pages-examples).

{% ifversion fpt or ghec %} Puede hospedar el sitio en el dominio `github.io` de {% data variables.product.prodname_dotcom %} o un dominio personalizado propio. Para más información, vea "[Uso de un dominio personalizado con {% data variables.product.prodname_pages %}](/articles/using-a-custom-domain-with-github-pages)".
{% endif %}

{% ifversion fpt or ghec %} {% data reusables.pages.about-private-publishing %} Para obtener más información, consulta "[Cambio de la visibilidad del sitio {% data variables.product.prodname_pages %}]({% ifversion fpt %}/enterprise-cloud@latest{% endif %}/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site) {% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %} {% endif %}

Para empezar, vea "[Creación de un sitio de {% data variables.product.prodname_pages %}](/articles/creating-a-github-pages-site)".

{% ifversion fpt or ghes or ghec %} Los propietarios de la organización pueden deshabilitar la publicación de sitios de {% data variables.product.prodname_pages %} desde los repositorios de la organización. Para más información, vea "[Administración de la publicación de sitios de {% data variables.product.prodname_pages %} para la organización](/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)".
{% endif %}

## Tipos de sitios {% data variables.product.prodname_pages %}

Existen tres tipos básicos de {% data variables.product.prodname_pages %} sitios: de proyecto, de usuario y de la organización. Los sitios de proyecto están conectados coon un proyecto específico alojado en {% data variables.product.product_name %}, como una biblioteca JavaScript o una colección de recetas. Los sitios de organización y de usuario se conectan a una cuenta específica en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.

Para publicar un sitio de usuario, debes crear un repositorio propiedad de la cuenta personal denominado {% ifversion fpt or ghec %}`<username>.github.io`{% else %}`<username>.<hostname>`{% endif %}. Para publicar un sitio de organización, debe crear un repositorio propiedad de una organización denominado {% ifversion fpt or ghec %}`<organization>.github.io`{% else %}`<organization>.<hostname>`{% endif %}. {% ifversion fpt or ghec %}A menos que use un dominio personalizado, los sitios de usuario y organización están disponibles en `http(s)://<username>.github.io` o `http(s)://<organization>.github.io`.{% elsif ghae %}Los sitios de usuario y organización están disponibles en `http(s)://pages.<hostname>/<username>` o `http(s)://pages.<hostname>/<organization>`.{% endif %}

Los archivos fuente para un sitio de proyecto se almacenan en el mismo repositorio que su proyecto. {% ifversion fpt or ghec %}A menos que use un dominio personalizado, los sitios de proyecto están disponibles en `http(s)://<username>.github.io/<repository>` o `http(s)://<organization>.github.io/<repository>`.{% elsif ghae %}Los sitios de proyecto están disponibles en `http(s)://pages.<hostname>/<username>/<repository>/` o `http(s)://pages.<hostname>/<organization>/<repository>/`.{% endif %}

{% ifversion ghec %} Si publicas el sitio de forma privada, la URL de tu sitio será diferente. Para más información, vea "[Cambio de la visibilidad del sitio de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)".
{% endif %}

{% ifversion fpt or ghec %} Para más información sobre cómo afectan los dominios personalizados a la dirección URL del sitio, vea "[Acerca de los dominios personalizados y {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages)".
{% endif %}

Solo puedes crear un sitio de organización o de usuario para cada cuenta en {% data variables.product.product_name %}. Los sitios de proyectos, ya sean propiedad de una cuenta de organización o personal, son ilimitados.

{% ifversion ghes %} La URL donde está disponible el sitio depende de si el aislamiento de subdominios está habilitado para {% data variables.product.product_location %}.

| Tipo de sitio | Aislamiento de subdominio habilitado | Aislamiento de subdominio inhabilitado |
| ------------ | --------------------------- | ---------------------------- |
Usuario | `http(s)://pages.<hostname>/<username>` | `http(s)://<hostname>/pages/<username>` |
Organización | `http(s)://pages.<hostname>/<organization>` | `http(s)://<hostname>/pages/<organization>` |
Sitio del proyecto propiedad de la cuenta personal | `http(s)://pages.<hostname>/<username>/<repository>/` | `http(s)://<hostname>/pages/<username>/<repository>/`
Sitio de proyecto propiedad de la cuenta de organización | `http(s)://pages.<hostname>/<orgname>/<repository>/` | `http(s)://<hostname>/pages/<orgname>/<repository>/`

Para más información, vea "[Habilitación del aislamiento de subdominios](/enterprise/admin/installation/enabling-subdomain-isolation)" o póngase en contacto con el administrador del sitio.
{% endif %}

## Publicar fuentes para sitios de {% data variables.product.prodname_pages %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.pages.pages-about-publishing-source %}

Para más información, consulta "[Configuración de una fuente de publicación para el sitio de GitHub Pages](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)."

{% ifversion ghec %}
## Limitaciones de {% data variables.product.prodname_emus %}
Si eres un {% data variables.product.prodname_managed_user %}, el uso de {% data variables.product.prodname_pages %} está limitado.

  - Los sitios de {% data variables.product.prodname_pages %} solo se pueden publicar desde repositorios propiedad de las organizaciones.
  - Los sitios de {% data variables.product.prodname_pages %} solo son visibles para otros miembros de la empresa.

Para más información sobre {% data variables.product.prodname_emus %}, consulta "[Acerca de {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users)".
{% endif %}

## Generadores de sitios estáticos

{% data variables.product.prodname_pages %} publica cualquier archivo estático que subas a tu repositorio. Puedes crear tus propios archivos estáticos o usar un generador de sitios estáticos para que desarrolle tu sitio. También puedes personalizar tu propio proceso de compilación de forma local o en otro servidor.

{% ifversion pages-custom-workflow %}

Si usas un proceso de compilación personalizado o un generador de sitios estáticos distinto de Jekyll, puedes escribir un {% data variables.product.prodname_actions %} para compilar y publicar el sitio. {% data variables.product.product_name %} proporciona flujos de trabajo de inicio para varios generadores de sitios estáticos. Para más información, consulta "[Configuración de una fuente de publicación para el sitio de GitHub Pages](/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)."

Si publicas el sitio desde una rama de origen, {% data variables.product.prodname_pages %} usará Jekyll para compilar tu sitio de forma predeterminada. Si quieres usar un generador de sitios estáticos distinto de Jekyll, se recomienda escribir un {% data variables.product.prodname_actions %} para compilar y publicar tu sitio en su lugar. De lo contrario, desactiva el proceso de compilación de Jekyll creando un archivo vacío denominado `.nojekyll` en la raíz de la fuente de publicación y, después, sigue las instrucciones del generador de sitios estáticos para crear el sitio localmente.

{% else %}

Recomendamos Jekyll, un generador de sitio estático con soporte integrado para {% data variables.product.prodname_pages %} y un proceso de compilación simplificado. Para más información, vea "[Acerca de {% data variables.product.prodname_pages %} y Jekyll](/articles/about-github-pages-and-jekyll)".

{% data variables.product.prodname_pages %} usará Jekyll para compilar tu sitio por defecto. Si quiere usar un generador de sitios estáticos diferente a Jekyll, desactive el proceso de compilación de Jekyll mediante la creación de un archivo vacío denominado `.nojekyll` en la raíz de la fuente de publicación y, después, siga las instrucciones del generador de sitios estáticos para desarrollar el sitio localmente.

{% endif %}

{% data variables.product.prodname_pages %} no soporta idiomas del lado del servidor como PHP, Ruby o Python.

## Límites de uso de {% data variables.product.prodname_pages %}

Los sitios de {% ifversion fpt or ghec %} {% data variables.product.prodname_pages %} creados después del 15 de junio de 2016 y que utilicen dominios de `github.io` se proporcionan mediante HTTPS. Si creaste tu sitio antes del 15 de junio de 2016, puedes habilitar el soporte HTTPS para el tráfico hasta tu sitio. Para más información, vea "[Protección de {% data variables.product.prodname_pages %} con HTTPS](/articles/securing-your-github-pages-site-with-https)".

### Usos prohibidos
{% endif %} {% data variables.product.prodname_pages %} no pretende ser un servicio de hospedaje web gratuito ni permite que se use de ese modo para realizar negocios en línea, un sitio de comercio electrónico, o cualquier otro sitio web que esté principalmente dirigido a facilitar operaciones comerciales o proporcionar software comercial como un servicio (SaaS). {% data reusables.pages.no_sensitive_data_pages %}

Adicionalmente, el uso de {% data variables.product.prodname_pages %} está sujeto a los [Términos del servicio de GitHub](/free-pro-team@latest/github/site-policy/github-terms-of-service/), incluidas las restricciones de planes para enriquecerse rápidamente, el contenido sexualmente obsceno y la actividad o contenido amenazantes o violentos.

### Límites de uso
los sitios {% data variables.product.prodname_pages %} están sujetos a los siguientes límites de uso:

  - Los repositorios de código fuente de {% data variables.product.prodname_pages %} tienen un límite recomendado de 1 GB.{% ifversion fpt or ghec %} Para más información, vea "[¿Cuál es mi cuota de disco?](/articles/what-is-my-disk-quota/#file-and-repository-size-limitations)".{% endif %}
  - Los sitios de {% data variables.product.prodname_pages %} publicados no pueden ser mayores a 1 GB.
{% ifversion fpt or ghec %}
  - Los sitios de {% data variables.product.prodname_pages %} tienen un límite de banda ancha *flexible* de 100 GB al mes.
  - Los sitios de {% data variables.product.prodname_pages %} tienen un límite *temporal* de 10 compilaciones por hora. {% ifversion pages-custom-workflow %} Este límite no se aplica si compilas y publicas el sitio con un flujo de trabajo de {% data variables.product.prodname_actions %} personalizado {% endif %}.
  - Para proporcionar una calidad de servicio coherente para todos los sitios {% data variables.product.prodname_pages %}, se pueden aplicar límites de velocidad. Estos límites de velocidad no están diseñados para interferir con los usos legítimos de {% data variables.product.prodname_pages %}. Si tu solicitud desencadena la limitación de velocidad, recibirás una respuesta adecuada con un código de estado HTTP de `429`, junto con un cuerpo HTML con la información.

Si tu sitio excede estas cuotas de uso, es posible que no podamos prestar servicio a tu sitio, o puedes recibir un correo electrónico formal de {% data variables.contact.contact_support %} sugiriendo estrategias para reducir el impacto de tu sitio en nuestros servidores, lo que incluye poner una red de distribución de contenido de un tercero (CDN) al frente de tu sitio, usar las otras características de {% data variables.product.prodname_dotcom %}, como lanzamientos, o mudar a un servicio de alojamiento diferente que pueda satisfacer mejor tus necesidades.

{% endif %}

## Tipos MIME en {% data variables.product.prodname_pages %}

Un tipo MIME es un encabezado que un servidor envía a un navegador, proporcionando información sobre la naturaleza y el formato de los archivos que solicitó el navegador. {% data variables.product.prodname_pages %} soporta más de 750 tipos MIME entre las miles de extensiones de archivo. La lista de tipos MIME admitidos se genera a partir del [proyecto mime-db](https://github.com/jshttp/mime-db).

Si bien no puedes especificar los tipos de MIME personalizados en una base por perfil o por repositorio, puedes agregar o modificar los tipos de MIME para usar en {% data variables.product.prodname_pages %}. Para más información, vea [las instrucciones de contribución de mime-db](https://github.com/jshttp/mime-db#adding-custom-media-types).

{% ifversion fpt %}
## datos, recopilación

Cuando se visita un sitio de {% data variables.product.prodname_pages %}, la dirección IP del visitante se registra y almacena para propósitos de seguridad, sin importar si el visitante inició sesión en {% data variables.product.prodname_dotcom %} o no. Para más información sobre los procedimientos de seguridad de {% data variables.product.prodname_dotcom %}, vea <a href="/articles/github-privacy-statement/" class="dotcom-only">Declaración de privacidad de {% data variables.product.prodname_dotcom %}</a>.
{% endif %}

## Información adicional

- [{% data variables.product.prodname_pages %}](https://github.com/skills/github-pages) en {% data variables.product.prodname_learning %}
- "[{% data variables.product.prodname_pages %}](/rest/reference/repos#pages)"
