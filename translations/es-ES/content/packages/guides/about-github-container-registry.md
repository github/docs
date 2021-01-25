---
title: Acerca del Registro Contenedor de GitHub
intro: 'Puedes utilizar el {% data variables.product.prodname_github_container_registry %} para hospedar y mantener contínuamente las imágenes de contenedor de Docker en tu cuenta de organización o de usuario personal de {% data variables.product.prodname_dotcom %}. El {% data variables.product.prodname_github_container_registry %} te permite configurar quién puede administrar y acceder a los paquetes utilizandopermisos específicos.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/about-github-container-registry
  - /packages/managing-container-images-with-github-container-registry
versions:
  free-pro-team: '*'
---

{% note %}

**Nota:** El {% data variables.product.prodname_github_container_registry %} se encuentra actualmente en su fase de beta público y está sujeto a cambios. Durante el beta, el almacenamiento y el ancho de banda son gratuitos. Para utilizar el {% data variables.product.prodname_github_container_registry %}, debes habilitar la característica para tu cuenta. Para obtener más información, consulta la sección "[Habilitar el soporte mejorado para los contenedores](/packages/guides/enabling-improved-container-support)".

{% endnote %}

### Acerca de {% data variables.product.prodname_github_container_registry %}

{% data reusables.package_registry.container-registry-feature-highlights %}

Para compartir el contexto sobre el uso de tu paquete, puedes vincular un repositorio a tu imagen de contenedor en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Conectar un repositorio a una imagen de contenedor](/packages/guides/connecting-a-repository-to-a-container-image)".

El {% data variables.product.prodname_github_container_registry %} tiene ubicaciones de hospedaje, permisos y visibilidades diferentes a las de otros registros de paquete.

|                          | Registros de los paquetes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | {% data variables.product.prodname_github_container_registry %}
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Ubicaciones de hospedaje | Puedes hospedar paquetes múltiples en un repositorio.                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Puedes hospedar imagenes de contenedor múltiples en una cuenta de organización o de usuario.                                                                                                                 |
| Permisos                 | {{ site.data.reusables.package_registry.public-or-private-packages }} Puedes utilizar los roles y equipos de {{ site.data.variables.product.prodname_dotcom }} para limitar quién puede instalar o publicar cada paquete, ya que los paquetes heredan los permisos del repositorio. Cualquier persona con permisos de lectura para un repositorio puede instalar un paquete como una dependencia en un proyecto, y cualquier persona con permisos de escritura puede publicar una nueva versión del paquete. | Para cada imagen de contenedor, puedes elegir el nivel de acceso que tienen los demás. Los permisos para acceso a la imagen de contenedor son independientes de aquellos para tu organización y repositorio. |
 Visibilidad | {% data reusables.package_registry.public-or-private-packages %} | Puedes configurar la visibilidad de cada una de tus imagenes de contenedor. Solo las personas y equipos a las cuales se les haya otorgado acceso dentro de tu organización podrán ver las imágenes de contenedor privadas. Cualquiera puede ver las imágenes de contenedor públicas. | Acceso anónimo | N/A | Puedes acceder anónimamente a las imágenes de contenedor públicas.

Para obtener más información, consulta la sección "[Acerca de los alcances y permisos para {% data variables.product.prodname_github_container_registry %}](#about-scopes-and-permissions-for-github-container-registry)".

### Formatos compatibles

El {% data variables.product.prodname_container_registry %} es actualmente compatible con los siguientes formatos de contenedores de imagen:

* [Docker Image Manifest V2, Modelo 2](https://docs.docker.com/registry/spec/manifest-v2-2/)
* [Especificaciones de Open Container Initiavie (OCI)](https://github.com/opencontainers/image-spec)

El {% data variables.product.prodname_github_container_registry %} hospeda los contenedores en `ghcr.io/OWNER/IMAGE-NAME`.

| Cliente del paquete | Lenguaje | Formato del paquete | Descripción             |
| ------------------- | -------- | ------------------- | ----------------------- |
| docker              | N/A      | `Dockerfile`        | Gestor de paquetes Node |


#### Índices de Listas/Imágenes de Manifiesto

El {% data variables.product.prodname_github_container_registry %} también es compatible con los formatos de la [Lista de Manifiestos de Docker](https://docs.docker.com/registry/spec/manifest-v2-2/#manifest-list)/el [Índice de Imágenes de OCI](https://github.com/opencontainers/image-spec/blob/79b036d80240ae530a8de15e1d21c7ab9292c693/image-index.md) que se definen en las especificaciones de Docker V2, Modelo 2, y de la Imágen de OCI.

### Permisos de visibilidad y acceso para las imágenes de contenedor

Si tienes permisos administratibos en una imagen de contenedor, puedes configurar la imagen de la misma como privada o pública. Las imágenes públicas permiten el acceso anónimo y pueden extraerse sin autenticación o ingresar a ellas através del CLI.

Como administrador, también puedes otorgar permisos de acceso para una imagen de contenedor que esté separada de los permisos que configuraste a nivel de organización y de repositorio.

Puedes otorgar un rol de acceso a cualquier persona en el caso de las imagenes de contenedor que pertenecen a, o que publica una cuenta de usuario. Puedes otorgar un rol de acceso a cualquier persona o equipo en la organización para las imágenes de contenedor que pertenecen a, o que publica una cuenta de usuario.

| Rol de permisos | Descripción del acceso                                                                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Read            | Puede descargar el paquete. <br> Puede leer los metadatos del paquete.                                                                                       |
| Escritura       | Puede cargar y descargar este paquete. <br> Puede leer y escribir metadatos del paquete.                                                                     |
| Admin           | Puede cargar, descargar, borrar y administrar este paquete. <br> Puede leer y escribir metadatos del paquete. <br> Puede otorgar permisos del paquete. |

Para obtener más información, consulta la sección "[Configurar el control de accesos y la visibilidad para las imagenes de contenedor](/packages/guides/configuring-access-control-and-visibility-for-container-images)".

### Sobre tokens

Para instalar o publicar un paquete, debes usar un token con el ámbito adecuado, y tu cuenta de usuario debe tener los permisos pertinentes para ese repositorio.

| Ámbito            | Descripción                                                                                                                                                                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `read:packages`   | Descarga e instala las imágenes de contenedor desde {% data variables.product.prodname_github_container_registry %}
| `write:packages`  | Carga y publica las imágenes de contenedor a {% data variables.product.prodname_github_container_registry %}
| `delete:packages` | Borra versiones específicas de imágenes de contenedor privadas o públicas del {% data variables.product.prodname_github_container_registry %}. Para obtener más información, consulta la sección "[Borrar una imagen de contenedor](/packages/guides/deleting-a-container-image)". |

Para aprender más sobre los alcances y permisos disponibles para las imágenes de contenedor, consulta la sección "[Configurar el control de accesos y la visibilidad para las imagenes de contenedor](/packages/guides/configuring-access-control-and-visibility-for-container-images)".

Para obtener más información, consulta las secciones "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token/)" y "[Alcances disponibles](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/#available-scopes)".

### Acerca de la facturación para {% data variables.product.prodname_github_container_registry %}

{% data reusables.package_registry.billing-for-container-registry %}

### Contactar con soporte técnico

Si tienes retroalimentación o solicitudes de características para el {% data variables.product.prodname_github_container_registry %}, utiliza el [formato de retroalimentación](https://support.github.com/contact/feedback?contact%5Bcategory%5D=packages).

Contacta el {% data variables.contact.github_support %} sobre {% data variables.product.prodname_github_container_registry %} usando [nuestro formulario de contacto](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages) si:

* Experimentas alguna cosa que contradice la documentación.
* Encuentras errores vagos o poco claros.
* Tu paquete publicado contiene datos sensibles, tales como violaciones del RGPD, Claves de la API, o información de identificación personal.
