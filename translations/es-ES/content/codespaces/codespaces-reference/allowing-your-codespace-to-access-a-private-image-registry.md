---
title: Permitir que tu codespace acceda a una imagen de registro privada
intro: Puedes utilizar secretos para permitir que los {% data variables.product.prodname_github_codespaces %} accedan a un registro de imagen privada
versions:
  fpt: '*'
  ghec: '*'
topics:
- Codespaces
shortTitle: Private image registry
ms.openlocfilehash: c11cfe0179856caf17f30ac32830ee1485defa3c
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159209"
---
## Acerca de los registros de imagen y {% data variables.product.prodname_github_codespaces %}

Un registro es un espacio seguro para almacenar, administrar y recuperar imágenes de contenedor privadas. Puedes utilizar uno para almacenar una o más imágenes. Hay muchos ejemplos de registros, tales como {% data variables.product.prodname_container_registry %}, {% data variables.product.prodname_npm_registry %}, Azure Container Registry o DockerHub.

{% data variables.packages.prodname_ghcr_and_npm_registry %} se puede configurar para permitir que las imágenes de contenedor se extraigan sin problemas a {% data variables.product.prodname_github_codespaces %} durante la creación del codespace, sin tener que proporcionar credenciales de autenticación. Para otros registros de imágenes, debes crear secretos en {% data variables.product.prodname_dotcom %} para almacenar los detalles de acceso, los cuales permitirán que los {% data variables.product.prodname_github_codespaces %} accedan a las imágenes almacenadas en dicho registro.

## Acceso a las imágenes almacenadas en {% data variables.packages.prodname_ghcr_and_npm_registry %}

{% data variables.packages.prodname_ghcr_and_npm_registry %} proporciona la manera más fácil de que {% data variables.product.prodname_github_codespaces %} consuma imágenes de contenedor de desarrollo.

Para obtener más información, consulta «[Trabajar con el registro de contenedor](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)» y «[Trabajar con el registro npm](/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)».

### Acceder a una imagen publicada en el mismo repositorio que el codespace

Si publicas una imagen de contenedor en {% data variables.packages.prodname_ghcr_or_npm_registry %} en el mismo repositorio en el que se está iniciando el codespace, podrás recuperar automáticamente esta imagen cuando crees el codespace. No tendrá que proporcionar credenciales adicionales, a menos que la opción **Heredar acceso del repositorio** se haya desactivado al publicar la imagen de contenedor.

#### Heredar el acceso del repositorio desde el cual se publicó la imagen

De forma predeterminada, cuando publicas una imagen de contenedor en {% data variables.packages.prodname_ghcr_or_npm_registry %}, la imagen hereda la configuración de acceso del repositorio desde el cual ha sido publicada. Por ejemplo, si el repositorio es público, la imagen también es pública. Si el repositorio es privado, la imagen también es privada, pero es accesible desde el repositorio.

Este comportamiento se controla mediante la opción **Heredar acceso del repositorio**. **Heredar acceso del repositorio** se selecciona de manera predeterminada al publicar desde {% data variables.product.prodname_actions %}, pero no cuando se publica directamente en {% data variables.packages.prodname_ghcr_or_npm_registry %} con un {% data variables.product.pat_generic %}.

Si la opción **Heredar acceso del repositorio** no se ha seleccionado al publicar la imagen, puede agregar el repositorio manualmente a los controles de acceso de la imagen del contenedor publicado. Para más información, vea "[Configuración del control de acceso y la visibilidad de un paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#inheriting-access-for-a-container-image-from-a-repository)".

### Acceder a una imagen publicada en la organización en la cual se lanzará un codespace

Si quieres que todos los codespaces en una organización puedan acceder a una imagen de contenedor, te recomendamos que la publiques con visibilidad interna. Esto hará que la imagen sea automáticamente visible para todos los codespaces dentro de la organización, a menos de que el repositorio desde el cual se lanzó el codespace sea público.

Si el codespace se está lanzando desde un repositorio público que referencia una imagen privada o interna, debes permitir manualmente que el repositorio público acceda a la imagen de contenedor interna. Esto previene que la imagen interna se filtre accidentalmente al público. Para más información, vea "[Garantía del acceso de Codespaces al paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)".

### Acceder a un contenedor privado desde un subconjunto de repositorios en una organización

Si quiere permitir que un subconjunto de los repositorios de una organización accedan a una imagen de contenedor, o bien permitir el acceso a una imagen privada o interna desde un codespace iniciado en un repositorio público, puede agregar repositorios manualmente a la configuración de acceso de la <span class="x x-first x-last">imagen</span> del contenedor. Para más información, vea "[Garantía del acceso de Codespaces al paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)<span class="x x-first x-last">.</span>"

### Publicar una imagen de contenedor desde un codespace

El acceso fácil desde un codespace a {% data variables.packages.prodname_ghcr_or_npm_registry %} se limita a la extracción de imágenes de contenedor. Si quieres publicar una imagen de contenedor desde dentro de un codespace, tendrás que usar un {% data variables.product.pat_v1 %} con el ámbito `write:packages`.

Te recomendamos publicar imágenes a través de {% data variables.product.prodname_actions %}. Para obtener más información, consulta «[Publicación de imágenes de Docker](/actions/publishing-packages/publishing-docker-images)» y «[Publicación de paquetes Node.js](/actions/publishing-packages/publishing-nodejs-packages)».

## Acceder a las imágenes almacenadas en otros registros de contenedor

Si estás accediendo a una imagen de contenedor desde un registro diferente a {% data variables.packages.prodname_ghcr_or_npm_registry %}, {% data variables.product.prodname_github_codespaces %} verifica la presencia de los tres secretos que definen el nombre del servidor, el nombre de usuario y {% data variables.product.pat_generic %} para un registro de contenedores. Si se encuentran estos secretos, {% data variables.product.prodname_github_codespaces %} hará que el registro esté disponible dentro de tu codespace.

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

Puedes almacenar los secretos a nivel de repositorio, organización o usuario, lo cual te permite compartirlos de forma segura entre diferentes codespaces. Cuando creas un conjunto de secretos para un registro de imagen privado, necesitas reemplazar el "<*>” del nombre con un identificador consistente. Para más información, consulta "[Administración de secretos cifrados para los codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)" y "[Administración de secretos cifrados para el repositorio y la organización para {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)."

Si estás configurando secretos a nivel de organización o de usuario, asegúrate de asignarlos al repositorio en el que crearás el codespace eligiendo una política de acceso desde la lista desplegable.  

![Ejemplo de secreto de registro de imagen](/assets/images/help/codespaces/secret-repository-access.png)

### Secretos de ejemplo

Para los registros de imagen privados en Azure, podrías crear los siguientes secretos:

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PERSONAL_ACCESS_TOKEN>
```

Para obtener información sobre los registros de imágenes comunes, vea "[Servidores comunes de registro de imágenes](#common-image-registry-servers)". Toma en cuenta que el acceso a AWS Elastic Container Registry (ECR) será diferente.

![Ejemplo de secreto de registro de imagen](/assets/images/help/settings/codespaces-image-registry-secret-example.png)

Una vez que hayas agregado los secretos, podría ser que necesites parar y luego iniciar el codespace en el que estás para que las variables de ambiente nuevas pasen en el contenedor. Para más información, vea "[Suspensión o detención de un codespace](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace)".

#### Acceder a AWS Elastic Container Registry

Para acceder a AWS Elastic Container Registry (ECR), puedes proporcionar una ID de llave de acceso de AWS y una llave secreta y {% data variables.product.prodname_dotcom %} podrá recuperar un token de acceso para ti e iniciar sesión en tu nombre.

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = <AWS_ACCESS_KEY_ID>
*_CONTAINER_REGISTRY_PASSWORD = <AWS_SECRET_KEY>
```

También debe asegurarse de que tiene los permisos IAM de AWS adecuados para realizar el intercambio de credenciales (por ejemplo, `sts:GetServiceBearerToken`), así como la operación de lectura de ECR (ya sea `AmazonEC2ContainerRegistryFullAccess` o `ReadOnlyAccess`).

Como alternativa, si no quieres que GitHub realice el cambio de credenciales en tu nombre, puedes proporcionar un token de autorización que se haya recuperado a través de las API de AWS o del CLI.

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = AWS
*_CONTAINER_REGISTRY_PASSWORD = <TOKEN>
```

Ya que estos tokens tienen una vida corta y necesitan actualizarse constantemente, te recomendamos proporcionar una ID de llave de acceso y secreto.

Aunque estos secretos pueden tener cualquier nombre, siempre que `*_CONTAINER_REGISTRY_SERVER` sea una dirección URL de ECR, se recomienda usar `ECR_CONTAINER_REGISTRY_*`, a menos que trabaje con varios registros ECR.

Para más información, vea la "[documentación de autenticación de registros privados](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html)" de ECR de AWS.

### Servidores de registro de imagen comunes

Algunos de los servidores de registro de imagen comunes se listan a continuación:

- [DockerHub](https://docs.docker.com/engine/reference/commandline/info/) - `https://index.docker.io/v1/`
- [Registro de contenedores de GitHub](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - `ghcr.io`
- [Azure Container Registry](https://docs.microsoft.com/azure/container-registry/) - `<registry name>.azurecr.io`
- [AWS Elastic Container Registry](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html) - `<aws_account_id>.dkr.ecr.<region>.amazonaws.com`
- [Google Cloud Container Registry](https://cloud.google.com/container-registry/docs/overview#registries) - `gcr.io` (EE. UU.), `eu.gcr.io` (Europa), `asia.gcr.io` (Asia)

## Depurar el acceso al registro de imágenes privadas

Si tiene problemas para extraer una imagen de un registro de imágenes privadas, asegúrese de que puede ejecutar `docker login -u <user> -p <password> <server>`, con los valores de los secretos definidos anteriormente. Si el inicio de sesión falla, asegúrate de que las credenciales de inicio de sesión sean válidas y de que tienes los permisos adecuados en el servidor para recuperar una imagen de contenedor. Si el inicio de sesión es exitoso, asegúrate de que estos valores se copien adecuadamente en los secretos de {% data variables.product.prodname_github_codespaces %} correctos, ya sea a nivel de usuario, repositorio u organización, e inténtalo de nuevo.
