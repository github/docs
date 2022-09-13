---
title: Asegurar tu sitio de Páginas de GitHub con HTTPS
intro: 'HTTPS agrega una capa de encriptación que evita que otros se entrometan o manipulen el tráfico en tu sitio. Puedes aplicar HTTPS en tu sitio {% data variables.product.prodname_pages %} para redirigir de forma transparente todas las solicitudes de HTTP a HTTPS.'
product: '{% data reusables.gated-features.pages %}'
redirect_from:
  - /articles/securing-your-github-pages-site-with-https
  - /github/working-with-github-pages/securing-your-github-pages-site-with-https
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Secure site with HTTPS
ms.openlocfilehash: fb1ce5b0a0f5c19ac58ef0b93cb379f807a89fe4
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: '146273070'
---
Las personas con permisos de administración para un repositorio pueden aplicar HTTPS para un sitio de {% data variables.product.prodname_pages %}.

## Acerca de HTTPS y de las {% data variables.product.prodname_pages %}

Todos los sitios {% data variables.product.prodname_pages %}, incluidos los sitios que están correctamente configurados con un dominio personalizado, admiten HTTPS y la aplicación de HTTPS. Para más información sobre los dominios personalizados, vea "[Acerca de los dominios personalizados y {% data variables.product.prodname_pages %}](/articles/about-custom-domains-and-github-pages)" y "[Solución de problemas de dominios personalizados y {% data variables.product.prodname_pages %}](/articles/troubleshooting-custom-domains-and-github-pages#https-errors)".

{% data reusables.pages.no_sensitive_data_pages %}

{% data reusables.pages.private_pages_are_public_warning %}

{% note %}

**Nota:** En RFC3280 se indica que la longitud máxima del nombre común debe ser de 64 caracteres. Por lo tanto, todo el nombre de dominio de tu sitio de {% data variables.product.prodname_pages %} debe ser menor a 64 caracteres de longitud para que se cree un certificado exitosamente.

{% endnote %}

## Aplicar HTTPS en tu sitio {% data variables.product.prodname_pages %}

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
3. En "{% data variables.product.prodname_pages %}," seleccione **Aplicar HTTPS**.
  ![Casilla Aplicar HTTPS](/assets/images/help/pages/enforce-https-checkbox.png)

## Solución de problemas para el aprovisionamiento de certificados (error de tipo "Certificate not yet created")

Cuando configuras o cambios tu dominio personalizado en los ajustes de las Páginas, comenzará una verificación automática de DNS. Esta verificación determina si tus ajustes de DNS se configuran para permitir que {% data variables.product.prodname_dotcom %} obtenga un certificado automáticamente. Si la comprobación es correcta, {% data variables.product.prodname_dotcom %} pondrá en cola un trabajo para solicitar un certificado TLS desde [Let's Encrypt](https://letsencrypt.org/). Cuando recibas un certificado válido, {% data variables.product.prodname_dotcom %} lo carga automáticamente a los servidores que manejan la terminación de TLS para las Páginas. Cuando este proceso se complete con éxito, se mostrará una marca de verificación al costado de tu nombre de dominio personalizado.

El proceso podría tomar algo de tiempo. Si el proceso no se ha completado varios minutos después de hacer clic en **Guardar**, intente hacer clic en **Quitar** junto al nombre de dominio personalizado. Vuelva a escribir el nombre de dominio y haga clic en **Guardar** de nuevo. Esto cancelará y volverá a iniciar el proceso de aprovisionamiento.

## Resolver problemas con contenido mixto

Si habilita HTTPS para el sitio de {% data variables.product.prodname_pages %}, pero en el código HTML del sitio todavía se hace referencia a imágenes, CSS o JavaScript mediante HTTP, significa que el sitio ofrece *contenido mixto*. Ofrecer contenido mixto puede hacer que tu sitio sea menos seguro y generar problemas al cargar activos.

Para eliminar el contenido mixto del sitio, asegúrese de que todos los recursos se ofrezcan mediante HTTPS; para ello, cambie `http://` por `https://` en el código HTML del sitio.

Normalmente, los activos se encuentran en las siguientes ubicaciones:
- Si en el sitio se usa Jekyll, es probable que los archivos HTML se encuentren en la carpeta *_layouts*.
- CSS se encuentra normalmente en la sección `<head>` del archivo HTML.
- JavaScript normalmente se encuentra en la sección `<head>` o justo antes de la etiqueta `</body>` de cierre.
- Las imágenes normalmente se encuentran en la sección `<body>`.

{% tip %}

**Sugerencia:** Si no puede encontrar los recursos en los archivos de código fuente del sitio, intente buscar `http` en el editor de texto o en {% data variables.product.product_name %}.

{% endtip %}

### Ejemplos de activos referenciados en un archivo HTML

| Tipo de recurso | HTTP                                      | HTTPS                             |
|:----------:|:-----------------------------------------:|:---------------------------------:|
| CSS        | `<link rel="stylesheet" href="http://example.com/css/main.css">` | `<link rel="stylesheet" href="https://example.com/css/main.css">`
| JavaScript   |  `<script type="text/javascript" src="http://example.com/js/main.js"></script>`  |   `<script type="text/javascript" src="https://example.com/js/main.js"></script>`
| Imagen        |  `<a href="http://www.somesite.com"><img src="http://www.example.com/logo.jpg" alt="Logo"></a>`  | `<a href="https://www.somesite.com"><img src="https://www.example.com/logo.jpg" alt="Logo"></a>`  
