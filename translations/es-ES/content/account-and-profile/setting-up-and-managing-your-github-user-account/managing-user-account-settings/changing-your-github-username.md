---
title: Cambiar tu nombre de usuario de GitHub
intro: 'You can change the username for your account on {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %} if your instance uses built-in authentication{% endif %}.'
redirect_from:
  - /articles/how-to-change-your-username/
  - /articles/changing-your-github-user-name/
  - /articles/renaming-a-user/
  - /articles/what-happens-when-i-change-my-username/
  - /articles/changing-your-github-username
  - /github/setting-up-and-managing-your-github-user-account/changing-your-github-username
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
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

**Note**: Members of an {% data variables.product.prodname_emu_enterprise %} cannot change usernames. Your enterprise's IdP administrator controls your username for {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)".

{% elsif ghes %}

**Note**: If you sign into {% data variables.product.product_location %} with LDAP credentials or single sign-on (SSO), only your local administrator can change your username. For more information about authentication methods for {% data variables.product.product_name %}, see "[Authenticating users for {% data variables.product.product_location %}](/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance)."

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

Luego de cambiar tu nombre de usuario, los enlaces a tu página de perfil anterior, como `https://{% data variables.command_line.backticks %}/previoususername`, arrojarán un error 404. We recommend updating any links to your account on {% data variables.product.product_location %} from elsewhere{% ifversion fpt or ghec %}, such as your LinkedIn or Twitter profile{% endif %}.

## Tus confirmaciones Git

{% ifversion fpt or ghec %}Git commits that were associated with your {% data variables.product.product_name %}-provided `noreply` email address won't be attributed to your new username and won't appear in your contributions graph.{% endif %} If your Git commits are associated with another email address you've [added to your GitHub account](/articles/adding-an-email-address-to-your-github-account), {% ifversion fpt or ghec %}including the ID-based {% data variables.product.product_name %}-provided `noreply` email address, {% endif %}they'll continue to be attributed to you and appear in your contributions graph after you've changed your username. Para obtener más información sobre cómo establecer tu dirección de correo electrónico, consulta "[Establecer tu dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address)".

## Cambiar tu nombre de usuario

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. En la sección "Change username" (Cambiar nombre de usuario), haz clic en **Change username** (Cambiar nombre de usuario). ![Change Username button](/assets/images/help/settings/settings-change-username.png){% ifversion fpt or ghec %}
4. Lee las advertencias sobre cómo cambiar tu nombre de usuario. Si aún deseas cambiar tu nombre de usuario, haz clic en **I understand, let's change my username** (Comprendo, cambiaré mi nombre de usuario). ![Cambiar botón Username warning (Advertencia de nombre de usuario)](/assets/images/help/settings/settings-change-username-warning-button.png)
5. Escribe un nuevo nombre de usuario. ![Campo New username (Nuevo nombre de usuario)](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. Si el nombre de usuario que elegiste está disponible, haz clic en **Change my username** (Cambiar mi nombre de usuario). Si el nombre de usuario que elegiste no está disponible, puedes probar un nombre de usuario diferente o una de las sugerencias que ves. ![Cambiar botón Username warning (Advertencia de nombre de usuario)](/assets/images/help/settings/settings-change-my-username-button.png)
{% endif %}

## Leer más

- "[Why are my commits linked to the wrong user?](/articles/why-are-my-commits-linked-to-the-wrong-user)"{% ifversion fpt or ghec %}
- "[{% data variables.product.prodname_dotcom %} Username Policy](/free-pro-team@latest/github/site-policy/github-username-policy)"{% endif %}
