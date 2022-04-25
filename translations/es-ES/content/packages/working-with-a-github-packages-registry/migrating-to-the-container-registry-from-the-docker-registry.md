---
title: Migrarse al registro del contenedor desde el registro de Docker
intro: 'Las imágenes de Docker que se almacenaron previamente en el registro de Docker se están migrando automáticamente al {% data variables.product.prodname_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/container-guides-for-github-packages/migrating-to-github-container-registry-for-docker-images
  - /packages/guides/migrating-to-github-container-registry-for-docker-images
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Migrarse al registro de contenedores
---

El registro de Docker de {% data variables.product.prodname_dotcom %} se ha reemplazado con el {% data variables.product.prodname_container_registry %}. Si almacenaste imágenes de Docker en el registro de Docker, se migrarán automáticamente al {% data variables.product.prodname_container_registry %}. No necesitas hacer nada. Cualquier script o flujo de trabajo de {% data variables.product.prodname_actions %} que utilice el designador de nombre para el registro de Docker (`docker.pkg.github.com`) seguirá funcionando después de la migración al {% data variables.product.prodname_container_registry %} (`ghcr.io`).

La migración se está llevando a cabo gradualmente, en vez de hacerla toda al unísono. Si aún no se migraron tus imágenes, llegaremos a ellas pronto.

## ¿Cómo puedes saber si ya se migraron tus imágenes?

Después de que migraste las imágenes al {% data variables.product.prodname_container_registry %}, verás los siguientes cambios en la página de detalles de un paquete:

* El icono ahora es el logo del {% data variables.product.prodname_container_registry %}, previamente, era un logo de Docker.
* El dominio en la URL de extracción ahora es `ghcr.io`, anteriormente, fue `docker.pkg.github.com`.

![Página de detalles del {% data variables.product.prodname_container_registry %}](/assets/images/help/package-registry/container-registry-details-page.png)

## Diferencias clave entre el {% data variables.product.prodname_container_registry %} y el registro de Docker

El {% data variables.product.prodname_container_registry %} se optimiza para ser compatible con algunas de las necesidades únicas de los contenedores.

Con el {% data variables.product.prodname_container_registry %} puedes:
- Almacena las imágenes de contenedor dentro de cuenta personal y de organización o conéctalas a un repositorio.
- Elige si quieres heredar permisos desde un repositorio o si quieres configurar permisos granulares independientemente de un repositorio.
- Acceder a imágenes de contenedores públicos anónimamente.

### Consultas a la API para detalles de las imágenes de Docker

Después de la migración, ya no podrás utilizar la API de GraphQL para consultar los paquetes del `PackageType` "DOCKER". En vez de esto, puedes utilizar la API de REST para consultar los paquetes con el `package_type` "container". Para obtener más información, consulta el artículo "[Packages](/rest/reference/packages)" de la API de REST.

## Facturación

Para obtener más información sobre la facturación del {% data variables.product.prodname_container_registry %}, consulta la sección "[Acerca de la facturación para el {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packages)".
