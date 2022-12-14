---
title: Cambiar tu nombre de usuario de GitHub
intro: 'Puedes cambiar el nombre de usuario de tu cuenta en {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %} si tu instancia utiliza la autenticación integrada{% endif %}.'
redirect_from:
  - /articles/how-to-change-your-username
  - /articles/changing-your-github-user-name
  - /articles/renaming-a-user
  - /articles/what-happens-when-i-change-my-username
  - /articles/changing-your-github-username
  - /github/setting-up-and-managing-your-github-user-account/changing-your-github-username
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Change your username
ms.openlocfilehash: 28f4d0ea1a16fed0e44f34312abfd507e2f991b7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145165264'
---
{% ifversion ghec or ghes %}

{% note %}

{% ifversion ghec %}

**Nota**: Los miembros de una {% data variables.product.prodname_emu_enterprise %} no pueden cambiar los nombres de usuario. El administrador del IdP de tu empresa controla tu nombre de usuario para {% data variables.product.product_name %}. Para más información, vea "[Acerca de {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".

{% elsif ghes %}

**Nota**: Si inicia sesión en {% data variables.product.product_location %} con credenciales de LDAP o inicio de sesión único (SSO), solo su administrador local podrá cambiar su nombre de usuario. A fin de obtener más información sobre los métodos de autenticación para {% data variables.product.product_name %}, vea "[Autenticación de usuarios para {% data variables.product.product_location %}](/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance)".

{% endif %}

{% endnote %}

{% endif %}

## Acerca de los cambios de nombre de usuario

Puede cambiar el nombre de usuario a otro nombre de usuario que no esté actualmente en uso.{% ifversion fpt or ghec %} Si el nombre de usuario que quiere no está disponible, debe plantearse otros nombres o variaciones únicas. El utilizar un número, guion o una ortografía alternativa podría ayudarte a encontrar un nombre de usuario similar que esté disponible.

Si tiene una marca comercial para el nombre de usuario, puede encontrar más información acerca de cómo presentar una reclamación de marca comercial en nuestra página [Directiva de marcas comerciales](/free-pro-team@latest/github/site-policy/github-trademark-policy). 

Si no tienes una marca comercial para el nombre, puedes elegir otro nombre de usuario o mantener el actual. {% data variables.contact.github_support %} no puede publicar el nombre de usuario que no está disponible para ti. Para obtener más información, vea "[Cambio del nombre de usuario](#changing-your-username)".{% endif %}

Una vez que cambies tu nombre de usuario, el nombre de usuario anterior estará disponible para todas las personas que lo reclamen. La mayoría de las referencias a tus repositorios con el nombre de usuario anterior automáticamente cambian al nombre de usuario nuevo. Sin embargo, algunos enlaces a tu perfil no se redirigirán automáticamente.

{% data variables.product.product_name %} no puede configurar redirecciones para:
- [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) con el nombre de usuario anterior.
- Vínculos a [gists](/articles/creating-gists) que incluyen el nombre de usuario anterior.

{% ifversion fpt or ghec %} 

Si eres un miembro de una {% data variables.product.prodname_emu_enterprise %}, no puedes hacer cambios a tu nombre de usuario. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endif %}

## Referencias del repositorio

Después de cambiar tu nombre de usuario, {% data variables.product.product_name %} automáticamente redirigirá las referencias a tus repositorios.
- Los enlaces web a tus repositorios existentes seguirán funcionando. Esto puede tardar algunos minutos en completarse después de realizar el cambio.
- Las inserciones de la línea de comando desde tus clones de repositorio local hasta las URL del registro remoto anterior seguirán funcionando.

Si el nuevo propietario de tu nombre de usuario anterior crea un repositorio con el mismo nombre que tu repositorio, se sobrescribirá el registro de redirección y tu redirección dejará de funcionar. Debido a esta posibilidad, recomendamos que actualices todas las URL de repositorios remotos existentes luego de cambiar tu nombre de usuario. Para más información, vea "[Administración de repositorios remotos](/github/getting-started-with-github/managing-remote-repositories)".

## Enlaces a tu página de perfil anterior

Después de cambiar el nombre de usuario, los vínculos a la página de perfil anterior, como `https://{% data variables.command_line.backticks %}/previoususername`, devolverán un error 404. Te recomendamos actualizar cualquier enlace a tu cuenta en {% data variables.product.product_location %} desde cualquier otra parte{% ifversion fpt or ghec %}, tal como tu perfil de LinkedIn o Twitter{% endif %}.

## Tus confirmaciones Git

{% ifversion fpt or ghec %}Las confirmaciones de Git que se asociaron con su dirección de correo electrónico de tipo `noreply` que proporcionó {% data variables.product.product_name %} no se atribuirán a su nombre de usuario nuevo y no aparecerán en su gráfico de contribuciones.{% endif %} Si sus confirmaciones de Git se asociaron con otra dirección de correo electrónico que haya [agregado a su cuenta de GitHub](/articles/adding-an-email-address-to-your-github-account),{% ifversion fpt or ghec %}incluida la dirección de correo electrónico de tipo `noreply` basada en su id., que proporcionó {% data variables.product.product_name %},{% endif %} se le seguirán atribuyendo y aparecerán en su gráfico de contribuciones después de que haya cambiado su nombre de usuario. Para obtener más información sobre cómo configurar la dirección de correo electrónico, vea "[Configuración de la dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address)".

## Cambiar tu nombre de usuario

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.account_settings %}
3. En la sección "Change username" (Cambiar nombre de usuario), haga clic en **Change username** (Cambiar nombre de usuario).
   ![Botón para cambiar el nombre de usuario](/assets/images/help/settings/settings-change-username.png){% ifversion fpt or ghec %}
4. Lee las advertencias sobre cómo cambiar tu nombre de usuario. Si aún quiere cambiar su nombre de usuario, haga clic en **I understand, let's change my username** (Entiendo, vamos a cambiar mi nombre de usuario).
   ![Botón de advertencia de cambio de nombre de usuario](/assets/images/help/settings/settings-change-username-warning-button.png)
5. Escribe un nuevo nombre de usuario.
   ![Campo de nuevo nombre de usuario](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. Si el nombre de usuario que ha elegido está disponible, haga clic en **Change my username** (Cambiar mi nombre de usuario). Si el nombre de usuario que elegiste no está disponible, puedes probar un nombre de usuario diferente o una de las sugerencias que ves.
   ![Botón de advertencia de cambio de nombre de usuario](/assets/images/help/settings/settings-change-my-username-button.png) {% endif %}

## Información adicional

- "¿[Por qué mis confirmaciones están vinculadas al usuario incorrecto?"](/pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user).{% ifversion fpt or ghec %}
- "[Directiva de nombre de usuario de {% data variables.product.prodname_dotcom %}](/free-pro-team@latest/github/site-policy/github-username-policy)"{% endif %}
