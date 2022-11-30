---
title: Acerca de las integraciones
intro: 'Las integraciones son herramientas y servicios que se conectan con {% data variables.product.product_name %} para complementar y extender tu flujo de trabajo.'
redirect_from:
  - /articles/about-integrations
  - /github/customizing-your-github-workflow/about-integrations
versions:
  fpt: '*'
---

Puedes instalar integraciones en tu cuenta personal o en las organizaciones que posees. También puedes instalar {% data variables.product.prodname_github_apps %} de un tercero en un repositorio específico donde tengas permisos de administrador o que sea propiedad de tu organización.

## Diferencias entre las {% data variables.product.prodname_github_apps %} y las {% data variables.product.prodname_oauth_apps %}

Las integraciones pueden ser {% data variables.product.prodname_github_apps %}, {% data variables.product.prodname_oauth_apps %} o cualquiera que utilice API de {% data variables.product.product_name %} o webhooks.

Las {% data variables.product.prodname_github_apps %} ofrecen permisos granulares y solicitan acceso únicamente a lo que necesita la app. Las {% data variables.product.prodname_github_apps %} también ofrecen un permiso a nivel de usuario que cada uno de estos debe autorizar individualmente cuando se instala la app o cuando el integrador cambia los permisos que solicita la app.

Para obtener más información, consulta:
- "[Diferencias entre las {% data variables.product.prodname_github_apps %} y las {% data variables.product.prodname_oauth_apps %}](/apps/differences-between-apps/)"
- "[Acerca de las apps](/apps/about-apps/)"
- "[Permisos a nivel de usario](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions)"
- "[Autorizar las {% data variables.product.prodname_oauth_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-oauth-apps)"
- "[Autorizar las {% data variables.product.prodname_github_apps %}](/github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps)"
- "[Revisar tus integraciones autorizadas](/articles/reviewing-your-authorized-integrations/)"

Puedes instalar una {% data variables.product.prodname_github_app %} preconfigurada, si los integradores o los creadores de la aplicación han creado su aplicación con el flujo de manifiesto de {% data variables.product.prodname_github_app %}. Para obtener más información sobre cómo ejecutar tu {% data variables.product.prodname_github_app %} con configuración automatizada, comunícate con el integrador o el creador de la aplicación.

Puedes crear una {% data variables.product.prodname_github_app %} con configuración simplificada si creas tu aplicación con Probot. Para obtener más información, consulta el sitio [Documentos de Probot](https://probot.github.io/docs/).

## Descubrir integraciones en {% data variables.product.prodname_marketplace %}

Puedes encontrar una integración para instalar o publicar tu propia integración en {% data variables.product.prodname_marketplace %}.

[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) contiene a las {% data variables.product.prodname_github_apps %} y las {% data variables.product.prodname_oauth_apps %}. Para obtener más información sobre cómo encontrar una integración o cómo crear tu propia integración, consulta "[Acerca de {% data variables.product.prodname_marketplace %}](/articles/about-github-marketplace)".

## Integraciones compradas directamente a los integradores

También puedes comprar algunas integraciones directamente a los integradores. Como miembro de una organización, si encuentras una {% data variables.product.prodname_github_app %} que te gustaría usar, puedes solicitar que una organización apruebe o instale la aplicación para la organización.

Si tienes permisos de administrador para todos los repositorios que son propiedad de una organización en la que la aplicación está instalada, puedes instalar las {% data variables.product.prodname_github_apps %} con los permisos de nivel de repositorio sin tener que solicitar al propietario de la organización que apruebe la aplicación. Cuando un integrador cambia los permisos de la aplicación, si los permisos son solo para un repositorio, los propietarios de la organización y las personas con permisos de administrador para un repositorio con esa aplicación instalada pueden revisar y aceptar los nuevos permisos.
