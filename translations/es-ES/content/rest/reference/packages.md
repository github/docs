---
title: Paquetes
product: '{% data reusables.gated-features.packages %}'
versions:
  free-pro-team: '*'
topics:
  - API
---

La API de {% data variables.product.prodname_registry %} te permite administrar paquetes utilizando la API de REST. Para aprender más sobre cómo restablecer o borrar paquetes, consulta la sección "[Restablecer y borrar paquetes](/packages/learn-github-packages/deleting-and-restoring-a-package)".

Para utilizar esta API, primero tienes que autenticarte utilizando un token de acceso personal.
  - Para acceder a los metadatos del paquete, tu token debe incluir el alcance `read:packages`.
  - Para borrar los paquetes y las versiones de paquetes, tu token debe incluir los alcances `read:packages` y `delete:packages`.
  - Para restablecer los paquetes y sus versiones, tu token debe incluir los alcances de `read:packages` y `write:packages`.

Si tu `package_type` es `npm`, `maven`, `rubygems`, o `nuget`, entonces tu token también debe incluir el alcance `repo`, ya que este hereda los permisos de un repositorio de {% data variables.product.prodname_dotcom %}.  Para obtener más información sobre los alcances, consulta la sección "[Acerca de los alcances y permisos](/packages/learn-github-packages/about-github-packages#about-scopes-and-permissions-for-package-registries)" o "[Utilizar la API de {% data variables.product.prodname_registry %} con Docker](#using-the-github-packages-api-with-docker)".

Si quieres utilizar la API del {% data variables.product.prodname_registry %} para acceder a los recursos de una organización con el SSO habilitado, entonces debes habilitar el SSO para tu token de acceso personal. Para obtener más información, consulta la sección "[Autorizar un token de acceso personal para utilizar con el inicio de sesión único de SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)".

#### Utilizar la API del {% data variables.product.prodname_registry %} con Docker

Si tu paquete es una imagen de Docker que utiliza el designador de nombre de paquete `docker.pkg.github.com/OWNER/REPOSITORY/IMAGE-NAME`, entonces tu `package_type` es `docker` y tu token debe incluir el alcance de `repo`, ya que este hereda los permisos de un repositorio de {% data variables.product.prodname_dotcom %}.

Si tu paquete es una imagen de Docker que utiliza el designador de nombre de paquete `ghcr.io/OWNER/IMAGE-NAME`, entonces tu `package_type` es `container` y tu token no necesita el alcance de `repo` para acceder o administrar este `package_type`. Los paquetes de `container` ofrecen permisos granulares separados de un repositorio.


{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}
