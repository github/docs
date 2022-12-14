---
title: Permitir que tu codespace acceda a un registro privado
intro: 'Puedes permitir que {% data variables.product.prodname_github_codespaces %} acceda a imágenes de contenedor o a otros paquetes de un registro privado.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-image-registry
shortTitle: Access a private registry
ms.openlocfilehash: 2957fe914e620b63a7ba0e2c38b6a949bd632fd6
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193634'
---
## Acerca de los registros privados y {% data variables.product.prodname_github_codespaces %}

Un registro es un espacio seguro para almacenar, administrar y recuperar imágenes de contenedor u otros paquetes. Hay muchos ejemplos de registros, como los siguientes: 
- El {% data variables.product.prodname_container_registry %} de {% data variables.product.company_short %}, Azure Container Registry y DockerHub para imágenes de contenedor
- El {% data variables.product.prodname_npm_registry %} para paquetes de Node.js

Algunos registros de {% data variables.product.prodname_registry %}, incluido el {% data variables.product.prodname_container_registry %}, se pueden configurar para permitir que puedan extraerse paquetes a {% data variables.product.prodname_github_codespaces %} sin problemas durante la creación del codespace, sin tener que proporcionar credenciales de autenticación.

Para acceder a otros registros de imagen de contenedor, puedes crear secretos en {% data variables.product.prodname_dotcom %} y almacenar en ellos los detalles de acceso, lo que permitirá a {% data variables.product.prodname_github_codespaces %} acceder a las imágenes almacenadas en dicho registro.

## Acceso a paquetes almacenados en registros con permisos detallados

Los registros de {% data variables.product.prodname_registry %} que admiten permisos detallados, incluido el {% data variables.product.prodname_container_registry %}, proporcionan la forma más sencilla de que {% data variables.product.prodname_github_codespaces %} pueda usar paquetes. Para obtener una lista de los registros de {% data variables.product.prodname_registry %} que admiten permisos detallados y un acceso sin problemas a {% data variables.product.prodname_github_codespaces %}, consulta [Acerca de los permisos de {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages).

### Acceso a un paquete publicado en el mismo repositorio que el codespace

Si publicas un paquete en el mismo repositorio en el que se está iniciando el codespace, podrás recuperar automáticamente este paquete cuando crees el codespace. No tendrás que proporcionar ninguna credencial más, a menos que la opción **Heredar acceso del repositorio** se haya desactivado al publicar el paquete.

#### Heredar el acceso del repositorio desde el cual se ha publicado un paquete

Un paquete hereda de forma predeterminada la configuración de acceso del repositorio desde el que se publicó. Por ejemplo, si el repositorio es público, el paquete también es público. Si el repositorio es privado, el paquete también es privado, pero es accesible desde el repositorio.

Este comportamiento se controla mediante la opción **Heredar acceso del repositorio**. La opción **Heredar acceso del repositorio** está seleccionada de forma predeterminada al publicar desde {% data variables.product.prodname_actions %}, pero no cuando se publica directamente en un registro con un {% data variables.product.pat_generic %}.

Si la opción **Heredar acceso del repositorio** no se seleccionó al publicar el paquete, puedes agregar el repositorio manualmente a los controles de acceso del paquete publicado. Para más información, vea "[Configuración del control de acceso y la visibilidad de un paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#inheriting-access-for-a-container-image-from-a-repository)".

### Acceso a un paquete publicado en la organización en la que se lanzará un codespace

Si quieres que todos los codespaces de una organización puedan acceder a un paquete, te recomendamos que lo publiques con visibilidad interna. Esto hará que el paquete sea automáticamente visible para todos los codespaces dentro de la organización, a menos que el repositorio desde el que se lanzó el codespace sea público.

Si el codespace se está lanzando desde un repositorio público que hace referencia un paquete privado o interno, debes permitir manualmente que el repositorio público acceda al paquete interno. Esto impide que el paquete interno se filtre accidentalmente al público. Para más información, vea "[Garantía del acceso de Codespaces al paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)".

### Acceso a un paquete privado desde un subconjunto de repositorios de una organización

Si quieres permitir que un subconjunto de los repositorios de una organización acceda a un paquete, o bien permitir el acceso a un paquete privado o interno desde un codespace iniciado en un repositorio público, puedes agregar repositorios manualmente a la configuración de acceso del paquete. Para más información, vea "[Garantía del acceso de Codespaces al paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)".

### Publicación de un paquete desde un codespace

El acceso sin problemas desde un codespace a un registro está limitado a la extracción de paquetes. Si quieres publicar un paquete desde dentro de un codespace, tendrás que usar un {% data variables.product.pat_v1 %} con el ámbito `write:packages`.

Te recomendamos publicar paquetes a través de {% data variables.product.prodname_actions %}. Para obtener más información, consulta «[Publicación de imágenes de Docker](/actions/publishing-packages/publishing-docker-images)» y «[Publicación de paquetes Node.js](/actions/publishing-packages/publishing-nodejs-packages)».

## Acceso a las imágenes almacenadas en otros registros

Puedes definir secretos para permitir que {% data variables.product.prodname_github_codespaces %} acceda a otros registros de imágenes de contenedor aparte del {% data variables.product.prodname_container_registry %} de {% data variables.product.company_short %}. Si estás accediendo a una imagen de contenedor desde un registro que no admite el acceso sin problemas, {% data variables.product.prodname_github_codespaces %} comprueba la presencia de los tres secretos que definen respectivamente el nombre del servidor, el nombre de usuario y el {% data variables.product.pat_generic %} de un registro. Si se encuentran estos secretos, {% data variables.product.prodname_github_codespaces %} hará que el registro esté disponible dentro de tu codespace.

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
