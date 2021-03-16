---
title: Administrar los secretos cifrados para los Codespaces
intro: Puedes almacenar información sensible, como los tokens, a la cual quieras acceder en tus codespaces en forma de variables de ambiente.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
---

{% note %}

**Nota:** Los secretos cifrados para los {% data variables.product.prodname_codespaces %} se encuentran actualmente en beta y están sujetos a cambios.

{% endnote %}

### Acerca de los secretos cifrados para los {% data variables.product.prodname_codespaces %}

Puedes agregar a tu cuenta de usuario los secretos cifrados que quieras utilizar en tus codespaces. Por ejemplo, puede que quieras almacenar y acceder a la siguiente información sensible en forma de un secreto cifrado.

- Tokens de acceso personal para los servicios en la nube
- Entidades de servicio
- Identificadores de suscripción

Puedes elegir qué repositorios deben tener acceso a cada secreto. Posteriormente, puedes utilizar el secreto en cualquier codespace que crees para un repositorio que tenga acceso a él.

### Agregar un secreto

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. A la derecha de "Secretos de los codespaces", da clic en **Secreto nuevo**. ![Botón de "Secreto nuevo"](/assets/images/help/settings/codespaces-new-secret-button.png)
1. Debajo de "Nombre", teclea un nombre para tu secreto. ![Caja de texto de "Nombre"](/assets/images/help/settings/codespaces-secret-name-field.png)
{% data reusables.user_settings.codespaces-secret-value %}
{% data reusables.user_settings.codespaces-secret-repository-access %}
1. Haz clic en **Agregar secreto** (Agregar secreto).

### Editar un secreto

Puedes actualizar el valor de un secreto existente y puedes cambiar qué repositorios pueden acceder a un secreto.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. Debajo de "Secretos de los codespaces"; a la derecha del secreto que quieras editar, da clic en **Actualizar**. ![Botón de "Actualizar"](/assets/images/help/settings/codespaces-secret-update-button.png)
1. Debajo de "Valor", da clic en **Ingresar un valor nuevo**. ![Enlace de "Ingresar un valor nuevo"](/assets/images/help/settings/codespaces-secret-update-value-text.png)
{% data reusables.user_settings.codespaces-secret-value %}
{% data reusables.user_settings.codespaces-secret-repository-access %}
1. Opcionalmente, para eliminar el acceso del secreto a un repositorio, deselecciona el repositorio. ![Casillas de verificación para eliminar el acceso a los repositorios](/assets/images/help/settings/codespaces-secret-repository-checkboxes.png)
1. Haz clic en **Guardar cambios**.

### Borrar un secreto

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. Debajo de "Secretos de los codespaces", a la derecha del secreto que quieras borrar, da clic en **Borrar**. ![Botón de "Borrar"](/assets/images/help/settings/codespaces-secret-delete-button.png)
1. Lee la advertencia y da clic en **OK**. ![Confirmación para borrar un secreto](/assets/images/help/settings/codespaces-secret-delete-warning.png)
