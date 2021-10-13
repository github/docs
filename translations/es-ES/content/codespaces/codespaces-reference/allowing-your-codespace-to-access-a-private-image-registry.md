---
title: Permitir que tu codespace acceda a una imagen de registro privada
intro: 'Puedes utilizar secretos para permitir que los {% data variables.product.prodname_codespaces %} accedan a un registro de imagen privada'
versions:
  fpt: '*'
topics:
  - Codespaces
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Registro de imagen privado
---

## Acerca de los registros de imagen y {% data variables.product.prodname_codespaces %} privados

Un registro es un espacio seguro para almacenar y administrar imágenes privadas de contenedores, tales como el Registro de Contenedores de Azure o DockerHub. Puedes crear secretos en GitHub para almacenar los detalles de acceso para un registro privado y utilizarlos para otorgar acceso a tu codespace para las imágenes que se almacenan en el registro.

Cuando ejecutas un codespace, {% data variables.product.prodname_codespaces %} verifica tres secretos, los cuales definen el nombre de servidor, nombre de usuario y token de acceso personal (PAT) para un registro de contenedor. Si se encuentran estos secretos, {% data variables.product.prodname_codespaces %} hará que el registro esté disponible dentro de tu codespace.

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

Puedes almacenar los secretos a nivel de repositorio, organización o usuario, lo cual te permite compartirlos de forma segura entre diferentes codespaces. Cuando creas un conjunto de secretos para un registro de imagen privado, necesitas reemplazar el "<*>” del nombre con un identificador consistente. Para obtener más información, consulta las secciones "[Administrar los secretos cifrados para tus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)" y "[Administrar los secretos cifrados de tu repositorio y organización para los Codespaces](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces)".

Si estás configurando secretos a nivel de organización o de usuario, asegúrate de asignarlos al repositorio en el que crearás el codespace eligiendo una política de acceso desde la lista desplegable.

![Ejemplo de secreto de registro de imagen](/assets/images/help/codespaces/secret-repository-access.png)

## Secretos de ejemplo

Para los registros de imagen privados en Azure, podrías crear los siguientes secretos:

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PAT>
```

Para obtener más información sobre los registros de imagen comunes, consulta la sección "[Servidores de registro de imagen comunes](#common-image-registry-servers)".

![Ejemplo de secreto de registro de imagen](/assets/images/help/settings/codespaces-image-registry-secret-example.png)

Una vez que hayas agregado los secretos, podría ser que necesites parar y luego iniciar el codespace en el que estás para que las variables de ambiente nuevas pasen en el contenedor. Para obtener más información, consulta la sección "[Suspender o detener un codespace](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace)".

## Servidores de registro de imagen comunes

Algunos de los servidores de registro de imagen comunes se listan a continuación:

- [DockerHub](https://docs.docker.com/engine/reference/commandline/info/) - `https://index.docker.io/v1/`
- [Registro de Contenedores de GitHub](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - `ghcr.io`
- [Registro de Contenedores de Azure](https://docs.microsoft.com/azure/container-registry/) - `<registry name>.azurecr.io`
- [Registro de Contenedores Elástico de Amazon](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html) - `<aws_account_id>.dkr.ecr.<region>.amazonaws.com`
- [Registro de Contenedores de Google Cloud](https://cloud.google.com/container-registry/docs/overview#registries) - `gcr.io` (US), `eu.gcr.io` (EU), `asia.gcr.io` (Asia)
