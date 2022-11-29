---
title: Cambiar la visibilidad de tu sitio de GitHub Pages
intro: Puedes administrar el control de acceso para tu sitio de proyecto si lo publicas de forma pública o privada.
versions:
  ghec: '*'
permissions: 'People with admin access to a repository can change the visibility of a {% data variables.product.prodname_pages %} site.'
redirect_from:
  - /github/working-with-github-pages/changing-the-visibility-of-your-github-pages-site
shortTitle: Change visibility of site
ms.openlocfilehash: f80ec04f0f16413414a4334e02ee3b45f534b46c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145282861'
---
## Acerca del control de acceso para los sitios de {% data variables.product.prodname_pages %}

Con el control de acceso para {% data variables.product.prodname_pages %}, puedes restringir el acceso al sitio del proyecto si publicas el sitio en privado. Solo las personas con acceso de lectura al repositorio desde el cual se publica el sitio pueden acceder al sitio que se publicó en privado. Puedes utilizar sitios publicados en privado para compartir tu documentación o base de conocimiento interna con los miembros de tu empresa. 

{% data reusables.pages.privately-publish-ghec-only %}

Si la empresa usa {% data variables.product.prodname_emus %}, el control de acceso no está disponible y todos los sitios de {% data variables.product.prodname_pages %} solo son accesibles para otros miembros de la empresa. Para más información sobre {% data variables.product.prodname_emus %}, consulta "[Acerca de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users)".

Si tu organización usa {% data variables.product.prodname_ghe_cloud %} sin {% data variables.product.prodname_emus %}, puedes optar por publicar los sitios de proyectos en privado o en público para cualquier usuario de Internet.

El control de accesos se encuentra disponible para los sitios de proyecto que se publican desde un repositorio privado o interno que pertenezca a la organización. No puedes administrar el control de accesos para el sitio de una organización. Para más información sobre los tipos de sitios de {% data variables.product.prodname_pages %}, vea "[Acerca de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)".

## Acerca de los subdominios para sitios publicados de forma privada

Los sitios que se publican de forma privada se encuentran disponibles en un subdominio diferente que el de aquellos sitios que se publican de forma pública. Esto garantiza que tu sitio de {% data variables.product.prodname_pages %} es seguro desde el momento en el que se publica:

- Aseguramos cada dominio de `*.pages.github.io` automáticamente con un certificado TLS y aplicamos HSTS para garantizar que los buscadores siempre sirvan la página mediante HTTPS.
- Utilizamos un subdominio único para el sitio publicado de forma privada a fin de garantizar que otros repositorios en tu organización no puedan publicar contenido en el mismo origen que el sitio. Esto protege tu sitio de la "[falsificación de cookies](https://github.blog/2013-04-09-yummy-cookies-across-domains/)". Por este motivo tampoco hospedamos sitios de {% data variables.product.prodname_pages %} en el dominio `github.com`.

Puedes ver el subdominio único de tu sitio en la pestaña "Pages" (Páginas) de la configuración de tu repositorio. Si estás utilizando un generador estático que se configuró para compilar el sitio con el nombre de repositorio como ruta, podrías necesitar actualizar la configuración para el generador de sitio estático cuando cambies el sitio a privado. Para más información, vea "[Configuración de Jekyll en el sitio de {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)" o la documentación del generador de sitios estáticos.

Para usar un dominio más corto y fácil de recordar para el sitio publicado de forma privada, puedes configurar un dominio personalizado. Para más información, vea "[Configuración de un dominio personalizado para el sitio de {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site)".

## Cambiar la visibilidad de tu sitio de {% data variables.product.prodname_pages %}

{% data reusables.pages.navigate-site-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.pages.sidebar-pages %}
3. En "{% data variables.product.prodname_pages %}", seleccione el menú desplegable **{% data variables.product.prodname_pages %} visibility** y luego haga clic en una visibilidad.
   ![Lista desplegable para elegir una visibilidad para el sitio](/assets/images/help/pages/public-or-private-visibility.png)
4. Para ver tu sitio publicado, debajo de "{% data variables.product.prodname_pages %}", da clic en la URL del mismo.
![URL del sitio publicado de forma privada](/assets/images/help/pages/click-private-pages-url-to-preview.png)

  {% note %}

  {% data reusables.pages.twenty-minutes-to-publish %}

  {% endnote %}
