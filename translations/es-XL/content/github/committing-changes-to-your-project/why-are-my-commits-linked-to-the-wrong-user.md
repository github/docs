---
title: ¿Por qué mis confirmaciones están vinculadas al usuario incorrecto?
redirect_from:
  - /articles/how-do-i-get-my-commits-to-link-to-my-github-account/
  - /articles/why-are-my-commits-linked-to-the-wrong-user
intro: '{% data variables.product.product_name %} usa la dirección de correo electrónico en el encabezado de la confirmación para vincular la confirmación con un usuario de GitHub. Si tus confirmaciones se están vinculando con otro usuario, o no se están vinculando con ningún usuario, es posible que necesites cambiar tus parámetros de configuración de Git local, agregar una dirección de correo electrónico a las configuraciones de tu cuenta de correo electrónico, o ambos.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


{% tip %}

**Nota**: Si tus confirmaciones se vinculan con otro usuario, eso no significa que el usuario puede acceder a tu repositorio. Un usuario solo puede acceder a un repositorio de tu propiedad si lo agregas como colaborador o lo agregas a un equipo que tiene acceso al repositorio.

{% endtip %}

### Las confirmaciones se vinculan con otro usuario

Si tus confirmaciones se vinculan con otro usuario, eso significa que el usuario agregó la dirección de correo electrónico en tus parámetros de configuración de Git local a su cuenta {% data variables.product.product_name %}. En este caso, puedes cambiar el correo electrónico en tus parámetros de configuración de Git local y agregar la nueva dirección de correo electrónico a tu cuenta {% data variables.product.product_name %} para vincular futuras configuraciones con tu cuenta.

1. Para cambiar la dirección de correo electrónico en tu configuración de Git local, sigue los pasos en "[Establecer tu dirección de correo electrónico de confirmación en Git](/articles/setting-your-commit-email-address)". Si trabajas en máquinas múltiples, necesitarás cambiar esta configuración en cada una de ellas.
2. Agrega la dirección de correo electrónico del paso 2 a las configuraciones de tu cuenta siguiendo los pasos en "[Agregar una dirección de correo electrónico a tu cuenta de GitHub](/articles/adding-an-email-address-to-your-github-account)".

Las confirmaciones que haces desde este punto en adelante se vincularán con tu cuenta.

### Las confirmaciones no se vinculan con ningún usuario

Si tus confirmaciones de cambios no se vinculan con ningún usuario, el nombre del autor de las mismas no se mostrará como un enlace a un perfil de usuario.

Para revisar la dirección de correo electrónico que se usó para esas confirmaciones y conectar las confirmaciones con tu cuenta, sigue los siguientes pasos:

1. Desplázate hasta la confirmación haciendo clic en el enlace del mensaje de confirmación. ![Enlace de mensaje de confirmación](/assets/images/help/commits/commit-msg-link.png)
2. Para leer un mensaje acerca del porqué la confirmación no se vinculó, pasa el puntero sobre el {% octicon "question" aria-label="Question mark" %} azul a la derecha del nombre de usuario. ![Mensaje de confirmación con el puntero](/assets/images/help/commits/commit-hover-msg.png)

  - **Autor no reconocido (con dirección de correo electrónico)** Si ves este mensaje con una dirección de correo electrónico, significa que la dirección no se agregó a las configuraciones de tu cuenta. Para vincular tus confirmaciones, [agrega la dirección de correo electrónico a tus configuraciones de correo electrónico de GitHub](/articles/adding-an-email-address-to-your-github-account). Si tu dirección de correo electrónico se asoció a un Gravatar, este se mostrará a un costado de tu nombre de usuario en vez del Octocat gris predeterminado.
  - **Autor no reconocido (sin dirección de correo electrónico)** Si ves este mensaje sin una dirección de correo electrónico, significa que usaste una dirección de correo electrónico general que no se puede agregar a tus configuraciones de correo electrónico. Deberás [establecer tu dirección de correo electrónico de confirmación en Git](/articles/setting-your-commit-email-address), luego [agregar la nueva dirección a tus configuraciones de correo electrónico de GitHub](/articles/adding-an-email-address-to-your-github-account) para vincular tus futuras confirmaciones. Las confirmaciones antiguas no se vincularán.
  - **Correo electrónico inválido** Esto significa que la dirección de correo electrónico en tus parámetros de configuración de Git local está en blanco o no está formateada como una dirección de correo electrónico. Deberás [establecer tu dirección de correo electrónico de confirmación en Git](/articles/setting-your-commit-email-address), luego [agregar la nueva dirección a tus configuraciones de correo electrónico de GitHub](/articles/adding-an-email-address-to-your-github-account) para vincular tus futuras confirmaciones. Las confirmaciones antiguas no se vincularán.

{% warning %}

Si tu configuración de Git local contiene una dirección de correo electrónico general, o una dirección de correo electrónico que ya se adjuntó a la cuenta de otro usuario, entonces tus confirmaciones anteriores no se vincularán a tu cuenta. Si bien Git te permite cambiar la dirección de correo electrónico que usaste para confirmaciones anteriores, desaconsejamos esto totalmente, en especial en un repositorio compartido.

{% endwarning %}

### Leer más

* "[Buscar confirmaciones](/articles/searching-commits)"
