---
title: Administrar secretos cifrados para tus codespaces
intro: 'Puedes almacenar información sensible, como los tokens, a la cual quieras acceder en tus codespaces en forma de variables de ambiente.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/managing-encrypted-secrets-for-codespaces
  - /codespaces/working-with-your-codespace/managing-encrypted-secrets-for-codespaces
type: how_to
topics:
  - Codespaces
  - Developer
  - Security
  - Secret store
shortTitle: Secretos cifrados
---

 


## Acerca de los secretos cifrados para {% data variables.product.prodname_github_codespaces %}

Puedes agregar secretos cifrados a tu cuenta personal si los quieres utilizar en tus codespaces. Por ejemplo, puede que quieras almacenar y acceder a la siguiente información sensible en forma de un secreto cifrado.

- Tokens de acceso personal para los servicios en la nube
- Entidades de servicio
- Identificadores de suscripción
- [Credenciales para un registro de imagen privada](/codespaces/codespaces-reference/allowing-your-codespace-to-access-a-private-image-registry)

Puedes elegir qué repositorios deben tener acceso a cada secreto. Posteriormente, puedes utilizar el secreto en cualquier codespace que crees para un repositorio que tenga acceso a él.

{% data reusables.codespaces.secrets-on-start %}

### Nombrar secretos

{% data reusables.codespaces.secrets-naming %} Por ejemplo, un secreto que se crea a nivel de repositorio debe tener un nombre único en este.

  {% data reusables.codespaces.secret-precedence %}

### Límites para los secretos

Puedes almacenar hasta 100 secretos para {% data variables.product.prodname_github_codespaces %}.

Los secretos tienen un tamaño máximo de 64 KB.

## Agregar un secreto

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. A la derecha de "Secretos de los codespaces", da clic en **Secreto nuevo**. ![Botón de "Secreto nuevo"](/assets/images/help/settings/codespaces-new-secret-button.png)
1. Debajo de "Nombre", teclea un nombre para tu secreto. ![Caja de texto de "Nombre"](/assets/images/help/settings/codespaces-secret-name-field.png)
{% data reusables.user-settings.codespaces-secret-value %}
{% data reusables.user-settings.codespaces-secret-repository-access %}
1. Haz clic en **Agregar secreto** (Agregar secreto).

## Editar un secreto

Puedes actualizar el valor de un secreto existente y puedes cambiar qué repositorios pueden acceder a un secreto.

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Debajo de "Secretos de los codespaces"; a la derecha del secreto que quieras editar, da clic en **Actualizar**. ![Botón de "Actualizar"](/assets/images/help/settings/codespaces-secret-update-button.png)
1. Debajo de "Valor", da clic en **Ingresar un valor nuevo**. ![Enlace de "Ingresar un valor nuevo"](/assets/images/help/settings/codespaces-secret-update-value-text.png)
{% data reusables.user-settings.codespaces-secret-value %}
{% data reusables.user-settings.codespaces-secret-repository-access %}
1. Opcionalmente, para eliminar el acceso del secreto a un repositorio, deselecciona el repositorio. ![Casillas de verificación para eliminar el acceso a los repositorios](/assets/images/help/settings/codespaces-secret-repository-checkboxes.png)
1. Haz clic en **Guardar cambios**.

## Borrar un secreto

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Debajo de "Secretos de los codespaces", a la derecha del secreto que quieras borrar, da clic en **Borrar**. ![Botón de "Borrar"](/assets/images/help/settings/codespaces-secret-delete-button.png)
1. Lee la advertencia y da clic en **OK**. ![Confirmación para borrar un secreto](/assets/images/help/settings/codespaces-secret-delete-warning.png)

## Utilizar secretos

A secret is exported as an environment variable into the user's terminal session.

  ![Displaying the value of an exported secret in the terminal](/assets/images/help/codespaces/exported-codespace-secret.png)

You can use secrets in a codespace after the codespace is built and is running. For example, a secret can be used:

* When launching an application from the integrated terminal or ssh session.
* Within a dev container lifecycle script that is run after the codespace is running. For more information about dev container lifecycle scripts, see the documentation on containers.dev: [Specification](https://containers.dev/implementors/json_reference/#lifecycle-scripts).

Codespace secrets cannot be used during:

* Codespace build time (that is, within a Dockerfile or custom entry point).
* Within a dev container feature. For more information, see the `features` attribute in the documentation on containers.dev: [Specification](https://containers.dev/implementors/json_reference/#general-properties).

## Leer más

- "[Administrar los secretos cifrados de tu repositorio y organización en {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-codespaces-for-your-organization/managing-encrypted-secrets-for-your-repository-and-organization-for-github-codespaces)"
