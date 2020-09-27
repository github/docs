---
title: Acerca de las integraciones
intro: 'Las integraciones son herramientas y servicios que se conectan con {{ site.data.variables.product.product_name }} para complementar y extender tu flujo de trabajo.'
redirect_from:
  - /articles/about-integrations
versions:
  free-pro-team: '*'
---

Puedes instalar integraciones en tu cuenta personal o en las organizaciones que posees. También puedes instalar {{ site.data.variables.product.prodname_github_app }}s de un tercero en un repositorio específico donde tengas permisos de administrador o que sea propiedad de tu organización.

### Diferencias entre {{ site.data.variables.product.prodname_github_app }}s y {{ site.data.variables.product.prodname_oauth_app }}s

Las integraciones pueden ser {{ site.data.variables.product.prodname_github_app }}s, {{ site.data.variables.product.prodname_oauth_app }}s o cualquiera que utilice API de {{ site.data.variables.product.product_name }} o webhooks.

{{ site.data.variables.product.prodname_github_app }}s ofrece permisos granulares y solicita acceso solo a lo que necesita la aplicación. {{ site.data.variables.product.prodname_github_app }}s también ofrece permisos de nivel de usuario específicos que cada usuario debe autorizar de forma individual cuando se instala una aplicación o cuando el integrador cambia los permisos solicitados por la aplicación.

Para obtener más información, consulta:
- "[Diferencias entre las {{ site.data.variables.product.prodname_github_app }}s y {{ site.data.variables.product.prodname_oauth_app }}s](/apps/differences-between-apps/)".
- "[Acerca de las apps](/apps/about-apps/)"
- "[Permisos a nivel de usario](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions)"
- "[Autorizar {{ site.data.variables.product.prodname_oauth_app }}s](/articles/authorizing-oauth-apps/)"
- "[Revisar tus integraciones autorizadas](/articles/reviewing-your-authorized-integrations/)"

Puedes instalar una {{ site.data.variables.product.prodname_github_app }} preconfigurada, si los integradores o los creadores de la aplicación han creado su aplicación con el flujo de manifiesto de {{ site.data.variables.product.prodname_github_app }}. Para obtener más información sobre cómo ejecutar tu {{ site.data.variables.product.prodname_github_app }} con configuración automatizada, comunícate con el integrador o el creador de la aplicación.

Puedes crear una {{ site.data.variables.product.prodname_github_app }} con configuración simplificada si creas tu aplicación con Probot. Para obtener más información, consulta el sitio [Documentos de Probot](https://probot.github.io/docs/).

### Descubrir integraciones en {{ site.data.variables.product.prodname_marketplace }}

Puedes encontrar una integración para instalar o publicar tu propia integración en {{ site.data.variables.product.prodname_marketplace }}.

[{{ site.data.variables.product.prodname_marketplace }}](https://github.com/marketplace) contiene {{ site.data.variables.product.prodname_github_app }}s y {{ site.data.variables.product.prodname_oauth_app }}s. Para obtener más información sobre cómo encontrar una integración o cómo crear tu propia integración, consulta "[Acerca de {{ site.data.variables.product.prodname_marketplace }}](/articles/about-github-marketplace)".

### Integraciones compradas directamente a los integradores

También puedes comprar algunas integraciones directamente a los integradores. Como miembro de una organización, si encuentras una {{ site.data.variables.product.prodname_github_app }} que te gustaría usar, puedes solicitar que una organización apruebe o instale la aplicación para la organización.

Si tienes permisos de administrador para todos los repositorios que son propiedad de una organización en la que la aplicación está instalada, puedes instalar {{ site.data.variables.product.prodname_github_app }}s con los permisos de nivel de repositorio sin tener que solicitar al propietario de la organización que apruebe la aplicación. Cuando un integrador cambia los permisos de la aplicación, si los permisos son solo para un repositorio, los propietarios de la organización y las personas con permisos de administrador para un repositorio con esa aplicación instalada pueden revisar y aceptar los nuevos permisos.

