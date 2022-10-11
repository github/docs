---
title: ¿Por qué mis confirmaciones están vinculadas al usuario incorrecto?
redirect_from:
  - /articles/how-do-i-get-my-commits-to-link-to-my-github-account/
  - /articles/why-are-my-commits-linked-to-the-wrong-user
  - /github/committing-changes-to-your-project/why-are-my-commits-linked-to-the-wrong-user
intro: '{% data variables.product.product_name %} usa la dirección de correo electrónico en el encabezado de la confirmación para vincular la confirmación con un usuario de GitHub. Si tus confirmaciones se están vinculando con otro usuario o no se pueden vincular con alguno de ellos, puede que necesites cambiar los ajustes de tu configuración local de Git{% if currentVersion != "github-ae@latest" %}, agrega una dirección de correo electrónico a los ajustes de correo electrónico de tu cuenta, o haz ambos{% endif %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% tip %}

**Nota**: Si tus confirmaciones se vinculan con otro usuario, eso no significa que el usuario puede acceder a tu repositorio. Un usuario solo puede acceder a un repositorio de tu propiedad si lo agregas como colaborador o lo agregas a un equipo que tiene acceso al repositorio.

{% endtip %}

### Las confirmaciones se vinculan con otro usuario

Si tus confirmaciones están vinculadas a otro usuario, eso significa que la dirección de correo electrónico en tus ajustes de configuración locales de git están conectados a esa cuenta de usuario en {% data variables.product.product_name %}. En este caso, puedes cambiar el correo electrónico en los ajustes de tu configuración local de Git{% if currentVersion == "github-ae@latest" %} a la dirección asociada con tu cuenta en {% data variables.product.product_name %} para vincular tus confirmaciones subsecuentes. Las confirmaciones antiguas no se vincularán. Para obtener más información, consulta la sección "[Configurar tu dirección de correo electrónico para confirmaciones](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)".{% else %} y agregar una dirección de correo electrónico nueva a tu cuenta de {% data variables.product.product_name %} para vincular confirmaciones futuras a tu cuenta.

1. Para cambiar la dirección de correo electrónico en tu configuración local de Git, sigue los pasos en "[Configurar tu dirección de correo electrónico para confirmaciones](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)". Si trabajas en máquinas múltiples, necesitarás cambiar esta configuración en cada una de ellas.
2. Agrega la dirección de correo electrónico del paso 2 los ajustes de tu cuenta siguiendo los pasos en "[Agregar una dirección de correo electrónico a tu cuenta de GitHub](/articles/adding-an-email-address-to-your-github-account)".{% endif %}

Las confirmaciones que haces desde este punto en adelante se vincularán con tu cuenta.

### Las confirmaciones no se vinculan con ningún usuario

Si tus confirmaciones de cambios no se vinculan con ningún usuario, el nombre del autor de las mismas no se mostrará como un enlace a un perfil de usuario.

Para revisar la dirección de correo electrónico que se usó para esas confirmaciones y conectar las confirmaciones con tu cuenta, sigue los siguientes pasos:

1. Desplázate hasta la confirmación haciendo clic en el enlace del mensaje de confirmación. ![Enlace de mensaje de confirmación](/assets/images/help/commits/commit-msg-link.png)
2. Para leer un mensaje acerca del porqué la confirmación no se vinculó, pasa el puntero sobre el {% octicon "question" aria-label="Question mark" %} azul a la derecha del nombre de usuario. ![Mensaje de confirmación con el puntero](/assets/images/help/commits/commit-hover-msg.png)

  - **Unrecognized author (con una dirección de correo electrónico)** Si ves este mensaje con una dirección de correo electrónico, la dirección que utilizaste para hacer la confirmación no está conectada con tu cuenta en {% data variables.product.product_name %}. {% if currentVersion != "github-ae@latest" %}Para enlazar tus confirmaciones, [agrega la dirección de correo electrónico a tus ajustes de correo electrónico de GitHub](/articles/adding-an-email-address-to-your-github-account).{% endif %} Si la dirección de correo electrónico tiene un Gravatar asociado con ella, éste se mostrará junto a la confirmación en vez de el Octocat gris predeterminado.
  - **Unrecognized author (sin dirección de correo electrónico)** Si ves este mensaje sin una dirección de correo electrónico, utilizaste una dirección de correo electrónico genérica que no puede conectarse con tu cuenta en {% data variables.product.product_name %}.{% if currentVersion != "github-ae@latest" %} Necesitarás [configurar tu dirección de correo electrónico para confirmaciones en Git](/articles/setting-your-commit-email-address) y luego [agregar la dirección nueva a tus ajustes de correo electrónico de GitHub](/articles/adding-an-email-address-to-your-github-account) para enlazar tus confirmaciones subsecuentes. No se vincularán las confirmaciones antiguas.{% endif %}
  - **Invalid email** La dirección de correo electrónico en los ajustes de tu configuración local de Git es ya sea nual o no tiene el formato de una dirección de correo electrónico.{% if currentVersion != "github-ae@latest" %} Necesitarás [configurar tu dirección de correo electrónico para confirmaciones en git](/articles/setting-your-commit-email-address), y luego [Agregar la nueva dirección de correo electrónico en tus ajustes de correo electrónico de GitHub](/articles/adding-an-email-address-to-your-github-account) para vincular tus confirmaciones subsecuentes. No se vincularán las confirmaciones antiguas.{% endif %}

{% if currentVersion == "github-ae@latest" %}
Puedes cambiar el correo electrónico en tus ajustes de configuración local de Git a la dirección asociada con tu cuenta para vincular tus confirmaciones subsecuentes. Las confirmaciones antiguas no se vincularán. Para obtener más información, consulta la sección "[Configurar tu dirección de correo electrónico para confirmaciones](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)".
{% endif %}

{% warning %}

Si tu configuración de Git local contiene una dirección de correo electrónico general, o una dirección de correo electrónico que ya se adjuntó a la cuenta de otro usuario, entonces tus confirmaciones anteriores no se vincularán a tu cuenta. Si bien Git te permite cambiar la dirección de correo electrónico que usaste para confirmaciones anteriores, desaconsejamos esto totalmente, en especial en un repositorio compartido.

{% endwarning %}

### Leer más

* "[Buscar confirmaciones](/articles/searching-commits)"
