---
title: Asegurar tu sitio de Páginas de GitHub con HTTPS
intro: 'HTTPS agrega una capa de encriptación que evita que otros se entrometan o manipulen el tráfico en tu sitio. Puedes aplicar HTTPS en tu sitio {% data variables.product.prodname_pages %} para redirigir de forma transparente todas las solicitudes de HTTP a HTTPS.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/securing-your-github-pages-site-with-https
versions:
  free-pro-team: '*'
---

Las personas con permisos de administración para un repositorio pueden aplicar HTTPS para un sitio de {% data variables.product.prodname_pages %}.

### Acerca de HTTPS y de las {% data variables.product.prodname_pages %}

Todos los sitios {% data variables.product.prodname_pages %}, incluidos los sitios que están correctamente configurados con un dominio personalizado, admiten HTTPS y la aplicación de HTTPS. Para obtener más información acerca de los dominios personalizados, consulta "[Acerca de los dominios personalizados y de las {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages)" y "[Solución de problemas de los dominios personalizados y de las {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages#https-errors)".

La aplicación de HTTPS es necesaria para los sitios {% data variables.product.prodname_pages %} utilizando un dominio `github.io` que fueron creados después del 15 de junio de 2016. Si creaste tu sitio antes del 15 de junio de 2016, puedes habilitar de forma manual la aplicación de HTTPS.

{% data reusables.pages.no_sensitive_data_pages %}

{% data reusables.pages.private_pages_are_public_warning %}

### Aplicar HTTPS en tu sitio {% data variables.product.prodname_pages %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Debajo de "{% data variables.product.prodname_pages %}", selecciona **Enforce HTTPS** (Aplicar HTTPS). ![Aplicar casilla de verificación de HTTPS](/assets/images/help/pages/enforce-https-checkbox.png)

### Resolver problemas con contenido mixto

Si habilitas HTTPS para tu sitio de {% data variables.product.prodname_pages %}, pero el HTML de tu sitio sigue referenciando imágenes, CSS o JavaScript a través de HTTP, significa que tu sitio está ofreciendo *contenido mixto*. Ofrecer contenido mixto puede hacer que tu sitio sea menos seguro y generar problemas al cargar activos.

Para eliminar el contenido mixto de tu sitio, asegúrate de que todos tus activos se ofrezcan mediante HTTPS cambiando `http://` por `https://` en el HTML de tu sitio.

Normalmente, los activos se encuentran en las siguientes ubicaciones:
- Si tu sitio usa Jekyll, es probable que tus archivos HTML se encuentren en la carpeta de *_layouts*.
- Habitualmente, CSS se encuentra en la sección `<head>` de tu archivo HTML.
- Habitualmente, JavaScript se encuentra en la sección `<head>` o simplemente antes de la etiqueta de cierre `</body>`.
- Las imágenes se suelen encontrar en la sección `<body>`.

{% tip %}

**Sugerencia:** Si no puedes encontrar tus activos en los archivos fuente de tu sitio, prueba buscando los archivos fuente de tu sitio para `http` en el editor de texto o en {% data variables.product.product_name %}.

{% endtip %}

#### Ejemplos de activos referenciados en un archivo HTML

| Tipo de activo |                                                       HTTP                                                       |                                                       HTTPS                                                        |
|:--------------:|:----------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------------------------:|
|      CSS       |                      `<link rel="stylesheet" href="http://example.com/css/main.css">`                      |                      `<link rel="stylesheet" href="https://example.com/css/main.css">`                       |
|   JavaScript   |            `<script type="text/javascript" src="http://example.com/js/main.js"></script>`            |            `<script type="text/javascript" src="https://example.com/js/main.js"></script>`             |
|     Image      | `<A HREF="http://www.somesite.com"><IMG SRC="http://www.example.com/logo.jpg" alt="Logo"></a>` | `<A HREF="https://www.somesite.com"><IMG SRC="https://www.example.com/logo.jpg" alt="Logo"></a>` |  
