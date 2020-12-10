---
title: Acerca de los errores de compilación para sitios de Páginas de GitHub
intro: 'Si Jekyll encuentra un error al compilar tu sitio de {% data variables.product.prodname_pages %} localmente o en {% data variables.product.product_name %}, recibirás un mensaje de error con más información.'
redirect_from:
  - /articles/viewing-jekyll-build-error-messages/
  - /articles/generic-jekyll-build-failures/
  - /articles/about-jekyll-build-errors-for-github-pages-sites
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Acerca de los errores de compilación de Jekyll

Algunas veces, {% data variables.product.prodname_pages %} no intentará compilar tu sitio después de que subas los cambios a la fuente de publicación de tu sitio.{% if currentVersion == "free-pro-team@latest" %}
- La persona que subió los cambios no ha verificado su dirección de correo electrónico. Para obtener más información, consulta "[Verificar tu dirección de correo electrónico](/articles/verifying-your-email-address)".{% endif %}
- Estás subiendo con una llave de despliegue. Si deseas automatizar las subidas al repositorio de tu sitio, puedes configurar un usuario de máquina en su lugar. Para obtener más información, consulta la sección "[Administrar las llaves de despliegue](/v3/guides/managing-deploy-keys/#machine-users)".
- Estás usando un servicio CI que no está configurado para compilar tu fuente de publicación. Por ejemplo, Travis CI no compilará la rama `gh-pages` a menos que añadas la rama a una lista de seguridad. Para obtener más información, consulta "[Personalizar la compilación](https://docs.travis-ci.com/user/customizing-the-build/#safelisting-or-blocklisting-branches)" en Travis CI o en la documentación del servicio de CI.

{% note %}

**Nota:** Es posible que tome hasta 20 minutos la publicación de los cambios en tu sitio luego de que subes los cambios a {% data variables.product.product_name %}.

{% endnote %}

Si Jekyll intenta compilar tu sitio y encuentra un error, recibirás un mensaje de error de compilación. Hay dos tipos principales de mensajes de error de construcción de Jekyll.
- Un mensaje de "Aviso de compilación de página" significa que la compilación se ha completado correctamente, pero es posible que debas hacer cambios para prevenir problemas futuros.
- Un mensaje "Page build failed" (Falló la construcción de página) significa que no se pudo completar la compilación. Si Jekyll puede detectar el motivo de la falla, verás un mensaje de error descriptivo.

Para obtener más información sobre cómo resolver errores de compilación, consulta "[Solución de problemas de errores de compilación de Jekyll para los sitios de {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)".

### Ver mensajes de error de construcción de Jekyll

Recomendamos probar su sitio localmente, lo que le permite ver mensajes de error de compilación en la línea de comandos, y abordar cualquier fallo de construcción antes de presionar los cambios a {% data variables.product.product_name %}. Para obtener más información, consulta "[Verificar tu sitio de {% data variables.product.prodname_pages %} localmente con Jekyll](/articles/testing-your-github-pages-site-locally-with-jekyll)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
Cuando creas una solicitud de extracción para actualizar tu fuente de publicación en {% data variables.product.product_name %}, puedes ver los mensajes de error de compilación en la pestaña **Checks** (Comprobaciones) de la solicitud de extracción. Para obtener más información, consulta "[Acerca de las verificaciones de estado ](/articles/about-status-checks)".
{% endif %}

Cuando subas los cambios a tu fuente de publicación en {% data variables.product.product_name %}, {% data variables.product.prodname_pages %} intentará compilar tu sitio. Si se produce un error durante la compilación, recibirás un corro electrónico en tu dirección principal de correo electrónico. También recibirás correos electrónicos para advertencias de compilación. {% data reusables.pages.build-failure-email-server %}

Puedes ver errores de compilación (pero no advertencias de compilación) para tu sitio en {% data variables.product.product_name %} en la pestaña **Settings** (Configuración) del repositorio de tu sitio.

Puedes configurar un servicio externo como [Travis CI](https://travis-ci.org/) para que muestre mensajes de error después de cada confirmación.

1. Si no lo has hecho, agrega un archivo denominado _Gemfile_ en la raíz de tu fuente de publicación, con el siguiente contenido:
  ```
  source `https://rubygems.org`
  gem `github-pages`
  ```

2. Configura el repositorio de tu sitio para el servicio de comprobación que elijas. Por ejemplo, para usar [Travis CI](https://travis-ci.org/), agrega un archivo denominado _.travis.yml_ en la raíz de tu fuente de publicación, con el siguiente contenido:
  ```
  language: ruby
  rvm:
    - 2.3
  script: "bundle exec jekyll build"
  ```
3. Es posible que necesites activar tu repositorio con el servicio de comprobación de terceros. Para obtener más información, consulta la documentación del servicio de comprobación.
