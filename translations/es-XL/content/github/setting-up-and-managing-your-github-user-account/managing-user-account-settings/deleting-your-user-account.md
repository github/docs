---
title: Eliminar tu cuenta de usuario
intro: 'Puedes eliminar tu cuenta de usuario de {% data variables.product.product_name %} en cualquier momento.'
redirect_from:
  - /articles/deleting-a-user-account/
  - /articles/deleting-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/deleting-your-user-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Accounts
---
Al eliminar tu cuenta de usuario se eliminan todos los repositorios, bifurcaciones de repositorios privados, wikis, propuestas, solicitudes de extracción y páginas que sean propiedad de tu cuenta. {% if currentVersion == "free-pro-team@latest" %}No se eliminarán las propuestas ni las solicitudes de extracción que hayas creado ni los comentarios que hayas hecho en repositorios que sean propiedad de otros usuarios. En lugar de eliminarlos, se los asociará con nuestro [Usuario fantasma](https://github.com/ghost).{% else %}No se eliminarán las propuestas ni las solicitudes de extracción que hayas creado ni los comentarios que hayas hecho en repositorios que sean propiedad de otros usuarios.{% endif %}

{% if currentVersion == "free-pro-team@latest" %}El nombre de la cuenta también pasará a estar disponible para que cualquier otra persona pueda usarlo en una cuenta nueva, y daremos por terminada tu facturación. La dirección de correo electrónico asociada con la cuenta pasará a estar disponible para el uso por parte de otra cuenta de {% data variables.product.product_name %}. {% endif %}

Si eres el único propietario de una organización, debes transferir la propiedad a otra persona o eliminar la organización primero para que puedas eliminar tu cuenta de usuario. Si hay otros propietarios de la organización, debes eliminarte de la organización primero para que puedas eliminar tu cuenta de usuario.

Para obtener más información, consulta:
- "[Transferir la propiedad de la organización](/articles/transferring-organization-ownership)"
- "[Eliminar una cuenta de la organización](/articles/deleting-an-organization-account)"
- "[Eliminarte de una organización](/articles/removing-yourself-from-an-organization/)"

### Copias de seguridad de los datos de tu cuenta

Antes de eliminar tu cuenta de usuario, haz una copia de todos los repositorios, bifurcaciones privadas, wikis, propuestas y solicitudes de extracción que sean propiedad de tu cuenta.

{% warning %}

**Advertencia:** Una vez que tu cuenta de usuario se ha eliminado, GitHub no puede restaurar su contenido.

{% endwarning %}

### Eliminar tu cuenta de usuario

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. En la parte inferior de la página de configuración de la cuenta, en "Eliminar cuenta", haz clic en **Eliminar tu cuenta**. Para que puedas eliminar tu cuenta de usuario, antes debes tener en cuenta lo siguiente:
    - Si eres el único propietario de la organización, debes transferir la propiedad a otra persona o eliminar tu organización.
    - Si hay otros propietarios de la organización dentro de la organización, debes eliminarte de la organización. ![Botón Eliminación de cuenta](/assets/images/help/settings/settings-account-delete.png)
4. En el cuadro de diálogo "Make sure you want to do this" (Asegúrate de que quieres hacer esto), realiza los siguientes pasos para confirmar que comprendes lo que sucede cuando se elimina tu cuenta: ![Diálogo de confirmación para eliminar cuenta](/assets/images/help/settings/settings-account-deleteconfirm.png)
  {% if currentVersion == "free-pro-team@latest" %}-Recuerda que se eliminarán todos los repositorios, bifurcaciones de repositorios privados, wikis, propuestas, solicitudes de extracción y páginas que sean propiedad de tu cuenta, tu facturación finalizará y tu nombre de usuario pasará a estar disponible para que cualquier otra persona lo use en {% data variables.product.product_name %}.
  {% else %}-Recuerda que se eliminarán todos los repositorios, bifurcaciones de repositorios privados, wikis, propuestas, solicitudes de extracción y páginas que sean propiedad de tu cuenta, y tu nombre de usuario pasará a estar disponible para que cualquier otra persona lo use en {% data variables.product.product_name %}.
  {% endif %}- En el primer campo, escribe tu nombre de usuario de {% data variables.product.product_name %} o tu correo electrónico.
    - En el segundo campo, escribe la frase que se indica.
