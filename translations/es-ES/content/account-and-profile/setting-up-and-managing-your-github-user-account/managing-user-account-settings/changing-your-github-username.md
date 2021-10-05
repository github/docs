---
title: Cambiar tu nombre de usuario de GitHub
intro: 'Puedes cambiar tu nombre de usuario de {% data variables.product.product_name %} en cualquier momento.'
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
topics:
  - Accounts
shortTitle: Cambiar tu nombre de usuario
---

## Acerca de los cambios de nombre de usuario

You can change your username to another username that is not currently in use.{% ifversion fpt %} If the username you want is not available, consider other names or unique variations. Using a number, hyphen, or an alternative spelling might help you find a similar username that's still available.

If you hold a trademark for the username, you can find more information about making a trademark complaint on our [Trademark Policy](/articles/github-trademark-policy/) page.

If you do not hold a trademark for the name, you can choose another username or keep your current username. {% data variables.contact.github_support %} no puede publicar el nombre de usuario que no está disponible para ti. Para obtener más información, consulta "[Cambiar tu nombre de usuario](#changing-your-username)".{% endif %}

Una vez que cambies tu nombre de usuario, el nombre de usuario anterior estará disponible para todas las personas que lo reclamen. La mayoría de las referencias a tus repositorios con el nombre de usuario anterior automáticamente cambian al nombre de usuario nuevo. Sin embargo, algunos enlaces a tu perfil no se redirigirán automáticamente.

{% data variables.product.product_name %} no puede configurar redirecciones para:
- [@menciones](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) con tu nombre de usuario anterior
- Enlaces a los [gists](/articles/creating-gists) que incluyen tu nombre de usuario anterior

## Referencias del repositorio

Después de cambiar tu nombre de usuario, {% data variables.product.product_name %} automáticamente redirigirá las referencias a tus repositorios.
- Los enlaces web a tus repositorios existentes seguirán funcionando. Esto puede tardar algunos minutos en completarse después de realizar el cambio.
- Las inserciones de la línea de comando desde tus clones de repositorio local hasta las URL del registro remoto anterior seguirán funcionando.

Si el nuevo propietario de tu nombre de usuario anterior crea un repositorio con el mismo nombre que tu repositorio, se sobrescribirá el registro de redirección y tu redirección dejará de funcionar. Debido a esta posibilidad, recomendamos que actualices todas las URL de repositorios remotos existentes luego de cambiar tu nombre de usuario. Para obtener más información, consulta "[Administrar repositorios remotos](/github/getting-started-with-github/managing-remote-repositories)."

## Enlaces a tu página de perfil anterior

Luego de cambiar tu nombre de usuario, los enlaces a tu página de perfil anterior, como `https://{% data variables.command_line.backticks %}/previoususername`, arrojarán un error 404. Recomendamos actualizar todos los enlaces a tu cuenta de {% data variables.product.product_name %} desde cualaquier lugar{% ifversion fpt %}, como tu perfil de LinkedIn o Twitter{% endif %}.

## Tus confirmaciones Git

{% ifversion fpt %}Las confirmaciones de Git que se asociaron con tun dirección de correo electrónico de tipo `noreply` que proporcionó {% data variables.product.product_name %} no se atribuirán a tu nombre de usuario nuevo y no aparecerán en tu gráfica de contribuciones.{% endif %} si tus confirmaciones de Git se asociaron con otra dirección de correo electrónico que hayas [agregado a tu cuenta de GitHub](/articles/adding-an-email-address-to-your-github-account),{% ifversion fpt %}incluyendo la dirección de correo electrónico de tipo `noreply` basada en tu ID, la cual proporcionó {% data variables.product.product_name %},{% endif %} se te seguirán atribuyendo y aparecerán en tu gráfica de contribuciones después de que hayas cambiado tu nombre de usuario. Para obtener más información sobre cómo establecer tu dirección de correo electrónico, consulta "[Establecer tu dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address)".

## Cambiar tu nombre de usuario

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. En la sección "Change username" (Cambiar nombre de usuario), haz clic en **Change username** (Cambiar nombre de usuario). ![Change Username button](/assets/images/help/settings/settings-change-username.png){% ifversion fpt %}
4. Lee las advertencias sobre cómo cambiar tu nombre de usuario. Si aún deseas cambiar tu nombre de usuario, haz clic en **I understand, let's change my username** (Comprendo, cambiaré mi nombre de usuario). ![Cambiar botón Username warning (Advertencia de nombre de usuario)](/assets/images/help/settings/settings-change-username-warning-button.png)
5. Escribe un nuevo nombre de usuario. ![Campo New username (Nuevo nombre de usuario)](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. Si el nombre de usuario que elegiste está disponible, haz clic en **Change my username** (Cambiar mi nombre de usuario). Si el nombre de usuario que elegiste no está disponible, puedes probar un nombre de usuario diferente o una de las sugerencias que ves. ![Cambiar botón Username warning (Advertencia de nombre de usuario)](/assets/images/help/settings/settings-change-my-username-button.png)
{% endif %}

## Leer más

- "[¿Por qué se enlazaron mis confirmaciones con el usuario incorrecto?](/articles/why-are-my-commits-linked-to-the-wrong-user)"{% ifversion fpt %}
- "[{% data variables.product.prodname_dotcom %} Política de nombre de usuario](/articles/github-username-policy)"{% endif %}
