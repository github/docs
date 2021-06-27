---
title: Permitir que tu codespace acceda a una imagen de registro privada
intro: 'Puedes utilizar secretos para permitir que los {% data variables.product.prodname_codespaces %} accedan a un registro de imagen privada'
versions:
  free-pro-team: '*'
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

Un registro es un espacio seguro para almacenar y administrar imágenes privadas de contenedores, tales como el Registro de Contenedores de Azure o DockerHub. Puedes crear secretos en GitHub para almacenar los detalles de acceso para un registro privado y utilizarlos para otorgar acceso a tu codespace para las imágenes que se almacenan en el registro.

Cuando ejecutas un codespace, {% data variables.product.prodname_codespaces %} verifica tres secretos, los cuales definen el nombre de servidor, nombre de usuario y token de acceso personal (PAT) para un registro de contenedor. Si se encuentran estos secretos, {% data variables.product.prodname_codespaces %} hará que el registro esté disponible dentro de tu codespace.

- `<*>_CONTAINER_REGISTRY_SERVER`
- `<*>_CONTAINER_REGISTRY_USER`
- `<*>_CONTAINER_REGISTRY_PASSWORD`

Puedes almacenar los secretos a nivel de repositorio, organización o usuario, lo cual te permite compartirlos de forma segura entre diferentes codespaces. Cuando creas un conjunto de secretos para un registro de imagen privado, necesitas reemplazar el "<*>” del nombre con un identificador consistente. Para obtener más información, consulta las secciones "[Administrar los secretos cifrados para tus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)" y "[Administrar los secretos cifrados de tu repositorio y organización para los Codespaces](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-codespaces)".

Por ejemplo, si tienes un registro de imagen privada en Azure, puedes crear los siguientes secretos:

```
ACR_CONTAINER_REGISTRY_SERVER = mycompany.azurecr.io
ACR_CONTAINER_REGISTRY_USER = acr-user-here
ACR_CONTAINER_REGISTRY_PASSWORD = <PAT>
```
![Ejemplo de secreto de registro de imagen](/assets/images/help/settings/codespaces-image-registry-secret-example.png)
