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

## About private image registries and {% data variables.product.prodname_codespaces %}

Un registro es un espacio seguro para almacenar y administrar imágenes privadas de contenedores, tales como el Registro de Contenedores de Azure o DockerHub. Puedes crear secretos en GitHub para almacenar los detalles de acceso para un registro privado y utilizarlos para otorgar acceso a tu codespace para las imágenes que se almacenan en el registro.

Cuando ejecutas un codespace, {% data variables.product.prodname_codespaces %} verifica tres secretos, los cuales definen el nombre de servidor, nombre de usuario y token de acceso personal (PAT) para un registro de contenedor. Si se encuentran estos secretos, {% data variables.product.prodname_codespaces %} hará que el registro esté disponible dentro de tu codespace.

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

Puedes almacenar los secretos a nivel de repositorio, organización o usuario, lo cual te permite compartirlos de forma segura entre diferentes codespaces. Cuando creas un conjunto de secretos para un registro de imagen privado, necesitas reemplazar el "<*>” del nombre con un identificador consistente. Para obtener más información, consulta las secciones "[Administrar los secretos cifrados para tus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)" y "[Administrar los secretos cifrados de tu repositorio y organización para los Codespaces](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces)".

If you are setting the secrets at the user or organization level, make sure to assign those secrets to the repository you'll be creating the codespace in by choosing an access policy from the dropdown list.

![Ejemplo de secreto de registro de imagen](/assets/images/help/codespaces/secret-repository-access.png)

## Example secrets

For a private image registry in Azure, you could create the following secrets:

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PAT>
```

For information on common image registries, see "[Common image registry servers](#common-image-registry-servers)."

![Ejemplo de secreto de registro de imagen](/assets/images/help/settings/codespaces-image-registry-secret-example.png)

Once you've added the secrets, you may need to stop and then start the codespace you are in for the new environment variables to be passed into the container. For more information, see "[Suspending or stopping a codespace](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace)."

## Common image registry servers

Some of the common image registry servers are listed below:

- [DockerHub](https://docs.docker.com/engine/reference/commandline/info/) - `https://index.docker.io/v1/`
- [GitHub Container Registry](/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - `ghcr.io`
- [Azure Container Registry](https://docs.microsoft.com/azure/container-registry/) - `<registry name>.azurecr.io`
- [Amazon Elastic Container Registry](https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html) - `<aws_account_id>.dkr.ecr.<region>.amazonaws.com`
- [Google Cloud Container Registry](https://cloud.google.com/container-registry/docs/overview#registries) - `gcr.io` (US), `eu.gcr.io` (EU), `asia.gcr.io` (Asia)
