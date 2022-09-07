---
title: Packages
intro: 'Con la API del {% data variables.product.prodname_registry %}, puedes administrar paquetes para tus repositorios y organizaciones de {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/packages
---

## About the {% data variables.product.prodname_registry %} API

La API de {% data variables.product.prodname_registry %} te permite administrar paquetes utilizando la API de REST. Para aprender más sobre cómo restablecer o borrar paquetes, consulta la sección "[Restablecer y borrar paquetes](/packages/learn-github-packages/deleting-and-restoring-a-package)".

Para utilizar esta API, primero tienes que autenticarte utilizando un token de acceso personal.
  - Para acceder a los metadatos del paquete, tu token debe incluir el alcance `read:packages`.
  - Para borrar los paquetes y las versiones de paquetes, tu token debe incluir los alcances `read:packages` y `delete:packages`.
  - Para restablecer los paquetes y sus versiones, tu token debe incluir los alcances de `read:packages` y `write:packages`.

Si tu `package_type` es `npm`, `maven`, `rubygems`, o `nuget`, entonces tu token también debe incluir el alcance `repo`, ya que este hereda los permisos de un repositorio de {% data variables.product.prodname_dotcom %}. Si tu paquete está en el {% data variables.product.prodname_container_registry %}, entonces tu `package_type` es `container` y tu token no necesita el alcance de `repo` para acceder o administrar este `package_type`. Los paquetes de `container` ofrecen permisos granulares separados de un repositorio. Para obtener más información, consulta la sección "[Acerca de los permisos para el {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)".

Si quieres utilizar la API del {% data variables.product.prodname_registry %} para acceder a los recursos de una organización con el SSO habilitado, entonces debes habilitar el SSO para tu token de acceso personal. Para obtener más información, consulta la sección "[Autorizar un token de acceso personal para utilizarse con el inicio de sesión único de SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}
