---
title: Guía de inicio rápido para GitHub Pages
intro: 'Puedes utilizar {% data variables.product.prodname_pages %} para mostrar algunos proyectos de código abierto, hospedar un blog o incluso compartir tu CV. Esta guía te ayudará a iniciar creando tu siguiente sitio web.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Pages
shortTitle: Inicio Rápido
product: '{% data reusables.gated-features.pages %}'
---

## Introducción

Las {% data variables.product.prodname_pages %} son páginas web públicas que se publican a través de {% data variables.product.product_name %}. La forma más rápida de iniciar es utilizando el Selector de Temas de Jekyll para que cargue un tema preconfigurado. Posteriormente, podrás modificar el estilo y contenido de tus {% data variables.product.prodname_pages %}.

Esta guía te mostrará cómo crear un sitio de usuario en `username.github.io`.

## Crear tu sitio web

{% data reusables.repositories.create_new %}
1. Ingresa `username.github.io` como nombre de repositorio. Reemplaza a `username` con tu nombre de usuario de {% data variables.product.prodname_dotcom %}. Por ejemplo, si tu nombre de usuario es `octocat`, el nombre de repositorio debería ser `octocat.github.io`. ![Campo de nombre de repositorio](/assets/images/help/pages/create-repository-name-pages.png)
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
1. Debajo de "Compilación y despliegue", debajo de "Fuente", selecciona **Desplegar desde una rama**.
1. Debajo de "Compilación y despliegue", debajo de "Rama", utiliza los menús desplegables de **Ninguna** o de **Rama** y selecciona una fuente de publicación.

   ![Menú desplegable para seleccionar una fuente de publicación](/assets/images/help/pages/publishing-source-drop-down.png)
1. Opcionalmente, abre el archivo `README.md` de tu repositorio. El archivo `README.md` es donde escribirás el contenido de tu sitio. Puedes editar el archivo o mantener el contenido predeterminado por el momento.
1. Visita `username.github.io` para ver tu sitio web nuevo. **Nota:** Es posible que tome hasta 10 minutos la publicación de los cambios en tu sitio luego de que subes los cambios a {% data variables.product.product_name %}.

## Cambiar el título y la descripción

Predeterminadamente, el título de tu sitio es `username.github.io`. Puedes cambiar el título si editas el archivo `_config.yml` en tu repositorio. También puedes agregar una descripción de tu sitio.

1. Haz clic en la pestaña de **Código** de tu repositorio.
1. En la lista de archivos, haz clic en `_config.yml` para abrir el archivo.
1. Haz clic en {% octicon "pencil" aria-label="The edit icon" %} para editar el archivo.
1. El archivo `_config.yml` ya contiene una línea que especifica el tema para tu sitio. Agrega una línea nueva con `title:`, seguido del título que quieras. Agrega una línea nueva con `description:`, seguido de la descripción que quieras. Por ejemplo:

   ```yaml
   theme: jekyll-theme-minimal
   title: Octocat's homepage
   description: Bookmark this to keep an eye on my project updates!
   ```

1. Cuando termines de editar el archivo, haz clic en **Confirmar cambios**.

## Siguientes pasos

Para obtener más información sobre cómo agregar páginas adicionales a tu sitio, consulta la sección "[Agregar contenido a tu sitio de GitHub Pages utilizando Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll#about-content-in-jekyll-sites)".

Para obtener más información sobre cómo configurar un sitio de {% data variables.product.prodname_pages %} con Jekyll, consulta "[Acerca de GitHub Pages y Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)".
