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
shortTitle: Cambiar tu nombre de usuario
---

{% ifversion ghec or ghes %}

{% note %}

{% ifversion ghec %}

**Nota**: Los miembros de una {% data variables.product.prodname_emu_enterprise %} no pueden cambiar nombres de usuario. El administrador del IdP de tu empresa controla tu nombre de usuario para {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".

{% elsif ghes %}

**Nota**: Si inicias sesión en {% data variables.product.product_location %} con credenciales de LDAP o inicio de sesión único (SSO), solo tu administrador local podrá cambiar tu nombre de usuario. Para obtener más información acerca de los métodos de autenticación para {% data variables.product.product_name %}, consulta la sección "[Autenticación de usuarios para {% data variables.product.product_location %}](/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance)".

{% endif %}

{% endnote %}

{% endif %}

## Acerca de los cambios de nombre de usuario

Puedes cambiar tu nombre de usuario a otro que no esté en uso actualmente.{% ifversion fpt or ghec %} si el nombre de usuario que quieres no está disponible, considera otros nombres o variaciones únicas. El utilizar un número, guion o una ortografía alternativa podría ayudarte a encontrar un nombre de usuario similar que esté disponible.

Si tienes una marca comercial para el nombre de usuario, puedes encontrar más información sobre cómo hacer un reclamo de una marca comercial en nuestra página de [Política de Marcas Comerciales](/free-pro-team@latest/github/site-policy/github-trademark-policy).

Si no tienes una marca comercial para el nombre, puedes elegir otro nombre de usuario o mantener el actual. {% data variables.contact.github_support %} no puede publicar el nombre de usuario que no está disponible para ti. Para obtener más información, consulta "[Cambiar tu nombre de usuario](#changing-your-username)".{% endif %}

Una vez que cambies tu nombre de usuario, el nombre de usuario anterior estará disponible para todas las personas que lo reclamen. La mayoría de las referencias a tus repositorios con el nombre de usuario anterior automáticamente cambian al nombre de usuario nuevo. Sin embargo, algunos enlaces a tu perfil no se redirigirán automáticamente.

{% data variables.product.product_name %} no puede configurar redirecciones para:
- [@menciones](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) con tu nombre de usuario anterior
- Enlaces a los [gists](/articles/creating-gists) que incluyen tu nombre de usuario anterior

{% ifversion fpt or ghec %}

Si eres un miembro de una {% data variables.product.prodname_emu_enterprise %}, no puedes hacer cambios a tu nombre de usuario. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endif %}

## Referencias del repositorio

Después de cambiar tu nombre de usuario, {% data variables.product.product_name %} automáticamente redirigirá las referencias a tus repositorios.
- Los enlaces web a tus repositorios existentes seguirán funcionando. Esto puede tardar algunos minutos en completarse después de realizar el cambio.
- Las inserciones de la línea de comando desde tus clones de repositorio local hasta las URL del registro remoto anterior seguirán funcionando.

Si el nuevo propietario de tu nombre de usuario anterior crea un repositorio con el mismo nombre que tu repositorio, se sobrescribirá el registro de redirección y tu redirección dejará de funcionar. Debido a esta posibilidad, recomendamos que actualices todas las URL de repositorios remotos existentes luego de cambiar tu nombre de usuario. Para obtener más información, consulta "[Administrar repositorios remotos](/github/getting-started-with-github/managing-remote-repositories)."

## Enlaces a tu página de perfil anterior

Luego de cambiar tu nombre de usuario, los enlaces a tu página de perfil anterior, como `https://{% data variables.command_line.backticks %}/previoususername`, arrojarán un error 404. Te recomendamos actualizar cualquier enlace a tu cuenta en {% data variables.product.product_location %} desde cualquier otra parte{% ifversion fpt or ghec %}, tal como tu perfil de LinkedIn o Twitter{% endif %}.

## Tus confirmaciones Git

{% ifversion fpt or ghec %}Las confirmaciones de Git que se asociaron con tun dirección de correo electrónico de tipo `noreply` que proporcionó {% data variables.product.product_name %} no se atribuirán a tu nombre de usuario nuevo y no aparecerán en tu gráfica de contribuciones.{% endif %} si tus confirmaciones de Git se asociaron con otra dirección de correo electrónico que hayas [agregado a tu cuenta de GitHub](/articles/adding-an-email-address-to-your-github-account),{% ifversion fpt or ghec %}incluyendo la dirección de correo electrónico de tipo `noreply` basada en tu ID, la cual proporcionó {% data variables.product.product_name %},{% endif %} se te seguirán atribuyendo y aparecerán en tu gráfica de contribuciones después de que hayas cambiado tu nombre de usuario. Para obtener más información sobre cómo establecer tu dirección de correo electrónico, consulta "[Establecer tu dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address)".

## Cambiar tu nombre de usuario

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.account_settings %}
3. In the "Change username" section, click **Change username**. ![Change Username button](/assets/images/help/settings/settings-change-username.png){% ifversion fpt or ghec %}
4. Lee las advertencias sobre cómo cambiar tu nombre de usuario. If you still want to change your username, click **I understand, let's change my username**. ![Cambiar botón Username warning (Advertencia de nombre de usuario)](/assets/images/help/settings/settings-change-username-warning-button.png)
5. Escribe un nuevo nombre de usuario. ![Campo New username (Nuevo nombre de usuario)](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. If the username you've chosen is available, click **Change my username**. Si el nombre de usuario que elegiste no está disponible, puedes probar un nombre de usuario diferente o una de las sugerencias que ves. ![Cambiar botón Username warning (Advertencia de nombre de usuario)](/assets/images/help/settings/settings-change-my-username-button.png)
{% endif %}

## Leer más

- "[¿Por qué se enlazaron mis confirmaciones con el usuario incorrecto?](/pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user)"{% ifversion fpt or ghec %}
- "[Política de nombres de usuario de {% data variables.product.prodname_dotcom %}](/free-pro-team@latest/github/site-policy/github-username-policy)"{% endif %}
