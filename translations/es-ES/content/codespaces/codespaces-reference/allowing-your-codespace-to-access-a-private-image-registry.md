---
title: Permitir que tu codespace acceda a una imagen de registro privada
intro: 'Puedes utilizar secretos para permitir que los {% data variables.product.prodname_github_codespaces %} accedan a un registro de imagen privada'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Registro de imagen privado
---

## Acerca de los registros de imagen y {% data variables.product.prodname_github_codespaces %} privados

Un registro es un espacio seguro para almacenar, administrar y recuperar imágenes de contenedor privadas. Puedes utilizar uno para almacenar una o más imágenes. Hay muchos ejemplos de registros, tales como el Registro de Contenedores de {% data variables.product.prodname_dotcom %}, Registro de Contenedores de Azure o DockerHub.

El Registro de Contenedores de {% data variables.product.prodname_dotcom %} puede configurarse para extraer imágenes de contenedor sin problemas, sin tener que proporcionar credenciales de autenticación a {% data variables.product.prodname_github_codespaces %}. Para otros registros de imágenes, debes crear secretos en {% data variables.product.prodname_dotcom %} para almacenar los detalles de acceso, los cuales permitirán que los {% data variables.product.prodname_codespaces %} accedan a las imágenes almacenadas en dicho registro.

## Acceder a las imágenes almacenadas en el Registro de Contenedores de {% data variables.product.prodname_dotcom %}

El Registro de Contenedores de {% data variables.product.prodname_dotcom %} es la manera más fácil de que {% data variables.product.prodname_codespaces %} consuma imágenes de contenedor de devcontainer.

Para obtener más información, consulta la sección "[Trabajar con el registro de contenedores](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)".

### Acceder a una imagen publicada en el mismo repositorio que el codespace

Si publicas una imagen de contenedor en el Registro de Contenedores de {% data variables.product.prodname_dotcom %} en el mismo repositorio que el codespace en el cuál se lanzará, automáticamente podrás recuperar esta imagen cuando crees el codespace. No tendrás que proporcionar credenciales adicionales, a menos de que la opción **heredar acceso del repositorio** se haya deseleccionado cuando se publique la imagen de contenedor.

#### Heredar el acceso del repositorio desde el cual se publicó la imagen

Predeterminadamente, cuando publicas una imagen de contenedor en el Registro de Contenedores de {% data variables.product.prodname_dotcom %}, esta hereda la configuración de acceso del repositorio desde el cual se publicó. Por ejemplo, si el repositorio es público, la imagen también es pública. Si el repositorio es privado, la imagen también es privada, pero es accesible desde el repositorio.

Este comportamiento se controla mediante la opción **heredar acceso desde el repositorio**. La opción **heredar acceso desde el repositorio** se encuentra seleccionada predeterminadamente cuando publicas a través de {% data variables.product.prodname_actions %}, pero no cuando se publica directamente al Registro de Contenedores de {% data variables.product.prodname_dotcom %} utilizando un token de acceso personal (PAT).

Si la opción de **heredar acceso desde el repositorio** no se seleccionó cuando se publicó la imagen, puedes agregar el repositorio manualmente a los controles de acceso de la imagen del contenedor publicado. Para obtener más información, consulta la sección "[Configurar el control de accesos y la visibilidad de un paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#inheriting-access-for-a-container-image-from-a-repository)".

### Acceder a una imagen publicada en la organización en la cual se lanzará un codespace

Si quieres que todos los codespaces en una organización puedan acceder a una imagen de contenedor, te recomendamos que la publiques con visibilidad interna. Esto hará que la imagen sea automáticamente visible para todos los codespaces dentro de la organización, a menos de que el repositorio desde el cual se lanzó el codespace sea público.

Si el codespace se está lanzando desde un repositorio público que referencia una imagen privada o interna, debes permitir manualmente que el repositorio público acceda a la imagen de contenedor interna. Esto previene que la imagen interna se filtre accidentalmente al público. Para obtener más información, consulta la sección "[Garantizar el acceso de los codespaces a tu paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)".

### Acceder a un contenedor privado desde un subconjunto de repositorios en una organización

Si quieres permitir que un subconjunto de repositorios de una organización accedan a una imagen de contenedor o permitan el acceso a una imagen privada o interna desde un codespace que se lanzó en un repositorio público, puedes agregar repositorios manualmente a los ajustes de acceso de la <span class="x x-first x-last">imagen</span> del contenedor. Para obtener más información, consulta la sección "[Garantizar el acceso a los codespaces para tu paquete](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility#ensuring-codespaces-access-to-your-package)<span class="x x-first x-last">.</span>"

### Publicar una imagen de contenedor desde un codespace

El acceso fácil desde un codespace hasta el Registrod de Contenedores de {% data variables.product.prodname_dotcom %} se limita a las imágenes de contenedor que se extraen. Si quieres publicar una imagen de contenedor desde dentro de un codespace, debes utilizar un token de acceso personal (PAT) con el alcance `write:packages`.

Te recomendamos publicar imágenes a través de {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[Publicar imágenes de Docker](/actions/publishing-packages/publishing-docker-images)".

## Acceder a las imágenes almacenadas en otros registros de contenedor

Si estás accediendo a una imagen de contenedor desde un registro diferente al Registro de Contenedores de {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_codespaces %} verifica la presencia de tres secretos, los cuales definen el nombre del servidor, nombre de usuario y token de acceso personal (PAT) de un registro de contenedores. Si se encuentran estos secretos, {% data variables.product.prodname_github_codespaces %} hará que el registro esté disponible dentro de tu codespace.

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

Puedes almacenar los secretos a nivel de repositorio, organización o usuario, lo cual te permite compartirlos de forma segura entre diferentes codespaces. Cuando creas un conjunto de secretos para un registro de imagen privado, necesitas reemplazar el "<*>” del nombre con un identificador consistente. For more information, see "[Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)" and "[Managing encrypted secrets for your repository and organization for {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)."

Si estás configurando secretos a nivel de organización o de usuario, asegúrate de asignarlos al repositorio en el que crearás el codespace eligiendo una política de acceso desde la lista desplegable.

![Ejemplo de secreto de registro de imagen](/assets/images/help/codespaces/secret-repository-access.png)

### Secretos de ejemplo

Para los registros de imagen privados en Azure, podrías crear los siguientes secretos:

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PAT>
```

Para obtener más información sobre los registros de imagen comunes, consulta la sección "[Servidores de registro de imagen comunes](#common-image-registry-servers)". Toma en cuenta que el acceso a AWS Elastic Container Registry (ECR) será diferente.

![Ejemplo de secreto de registro de imagen](/assets/images/help/settings/codespaces-image-registry-secret-example.png)

Una vez que hayas agregado los secretos, podría ser que necesites parar y luego iniciar el codespace en el que estás para que las variables de ambiente nuevas pasen en el contenedor. Para obtener más información, consulta la sección "[Suspender o detener un codespace](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace)".

#### Acceder a AWS Elastic Container Registry

Para acceder a AWS Elastic Container Registry (ECR), puedes proporcionar una ID de llave de acceso de AWS y una llave secreta y {% data variables.product.prodname_dotcom %} podrá recuperar un token de acceso para ti e iniciar sesión en tu nombre.

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = <AWS_ACCESS_KEY_ID>
*_CONTAINER_REGISTRY_PASSWORD = <AWS_SECRET_KEY>
```

Debes de asegurarte de que tengas los permisos adecuados de AWS IAM para realizar el cambio de credenciales (por ejemplo: `sts:GetServiceBearerToken`), así como la operación de lectura de ECR (ya sea `AmazonEC2ContainerRegistryFullAccess` o `ReadOnlyAccess`).

Como alternativa, si no quieres que GitHub realice el cambio de credenciales en tu nombre, puedes proporcionar un token de autorización que se haya recuperado a través de las API de AWS o del CLI.

```
*_CONTAINER_REGISTRY_SERVER = <ECR_URL>
*_CONTAINER_REGISTRY_USER = AWS
*_CONTAINER_REGISTRY_PASSWORD = <TOKEN>
```

Ya que estos tokens tienen una vida corta y necesitan actualizarse constantemente, te recomendamos proporcionar una ID de llave de acceso y secreto.

Si bien estos secretos pueden llevar cualquier nombre, siempre y cuando el `*_CONTAINER_REGISTRY_SERVER` sea una URL de ECR, te recomendamos utilizar `ECR_CONTAINER_REGISTRY_*` a menos de que se trate de registros múltiples de ECR.

Para obtener más información, consulta la "[Documentación de autenticación de registros privados](https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry_auth.html)" de AWS ECR.

### Servidores de registro de imagen comunes

Algunos de los servidores de registro de imagen comunes se listan a continuación:

- [DockerHub](https://docs.docker.com/engine/reference/commandline/info/) - `https://index.docker.io/v1/`
- [Registro de Contenedores de GitHub](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - `ghcr.io`
- [Registro de Contenedores de Azure](https://docs.microsoft.com/azure/container-registry/) - `<registry name>.azurecr.io`
- [AWS Elastic Container Registry](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html) - `<aws_account_id>.dkr.ecr.<region>.amazonaws.com`
- [Registro de Contenedores de Google Cloud](https://cloud.google.com/container-registry/docs/overview#registries) - `gcr.io` (US), `eu.gcr.io` (EU), `asia.gcr.io` (Asia)

## Depurar el acceso al registro de imágenes privadas

Si tienes problemas para extraer una imagen de un registro de imágenes privado, asegúrate de que puedas ejecutar `docker login -u <user> -p <password> <server>`, utilizando los valores de los secretos que se definen a continuación. Si el inicio de sesión falla, asegúrate de que las credenciales de inicio de sesión sean válidas y de que tienes los permisos adecuados en el servidor para recuperar una imagen de contenedor. Si el inicio de sesión es exitoso, asegúrate de que estos valores se copien adecuadamente en los secretos de {% data variables.product.prodname_codespaces %} correctos, ya sea a nivel de usuario, repositorio u organización, e intenta de nuevo.
