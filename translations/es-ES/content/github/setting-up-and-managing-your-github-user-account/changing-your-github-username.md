---
title: Cambiar tu nombre de usuario de GitHub
intro: 'Puedes cambiar tu nombre de usuario de {% data variables.product.product_name %} en cualquier momento.'
redirect_from:
  - /articles/how-to-change-your-username/
  - /articles/changing-your-github-user-name/
  - /articles/renaming-a-user/
  - /articles/what-happens-when-i-change-my-username/
  - /articles/changing-your-github-username
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - cuentas
---

### Acerca de los cambios de nombre de usuario

Puedes cambiar tu nombre de usuario por uno diferente si es que nadie más lo tiene.{% if currentVersion == "free-pro-team@latest" %} Si el nombre de usuario que tienes no está disponible, verás la información referente a si puedes solicitar que se libere cuando tecleas tu nombre deseado.

Si el nombre de usuario no puede usarse y no posees una marca comercial para el nombre de usuario, puedes elegir otro nombre de usuario o conservar tu nombre de usuario actual. {% data variables.contact.github_support %} no puede publicar el nombre de usuario que no está disponible para ti. Para obtener más información, consulta "[Cambiar tu nombre de usuario](#changing-your-username)".{% endif %}

Una vez que cambies tu nombre de usuario, el nombre de usuario anterior estará disponible para todas las personas que lo reclamen. La mayoría de las referencias a tus repositorios con el nombre de usuario anterior automáticamente cambian al nombre de usuario nuevo. Sin embargo, algunos enlaces a tu perfil no se redirigirán automáticamente.

{% data variables.product.product_name %} no puede configurar redirecciones para:
- [@menciones](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) con tu nombre de usuario anterior
- Enlaces a los [gists](/articles/creating-gists) que incluyen tu nombre de usuario anterior

### Referencias del repositorio

Después de cambiar tu nombre de usuario, {% data variables.product.product_name %} automáticamente redirigirá las referencias a tus repositorios.
- Los enlaces web a tus repositorios existentes seguirán funcionando. Esto puede tardar algunos minutos en completarse después de realizar el cambio.
- Las inserciones de la línea de comando desde tus clones de repositorio local hasta las URL del registro remoto anterior seguirán funcionando.

Si el nuevo propietario de tu nombre de usuario anterior crea un repositorio con el mismo nombre que tu repositorio, se sobrescribirá el registro de redirección y tu redirección dejará de funcionar. Debido a esta posibilidad, recomendamos que actualices todas las URL de repositorios remotos existentes luego de cambiar tu nombre de usuario. For more information, see "[Managing remote repositories](/github/getting-started-with-github/managing-remote-repositories)."

### Enlaces a tu página de perfil anterior

Luego de cambiar tu nombre de usuario, los enlaces a tu página de perfil anterior, como `https://{% data variables.command_line.backticks %}/previoususername`, arrojarán un error 404. Te recomendamos actualizar cualquier enlace a tu cuenta de {% data variables.product.product_name %} desde cualquier otra parte{% if currentVersion == "free-pro-team@latest" %}, así como tu perfil de LinkedIn o de Twitter{% endif %}.

### Tus confirmaciones Git

{% if currentVersion == "free-pro-team@latest"%}No se les atribuirá tu nombre de usuario a las confirmaciones de Git que estaban asociadas con tu dirección de correo de tipo `noreply` que proporcionó {% data variables.product.product_name %} ni tampoco aparecerá en tu gráfica de contribuciones.{% endif %} Si tus confirmaciones de Git están asociadas con otra dirección de correo electrónico que hayas [agregado a tu cuenta de GitHub](/articles/adding-an-email-address-to-your-github-account), {% if currentVersion == "free-pro-team@latest"%} incluyendo la dirección de correo electrónico de tipo `noreply` basada en ID que proporcionó {% data variables.product.product_name %}, {% endif %}Estas se te seguirán atribuyendo y aparecerán en tu gráfica de contribuciones después de que hayas cambiado tu nombre de usuario. Para obtener más información sobre cómo establecer tu dirección de correo electrónico, consulta "[Establecer tu dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address)".

### Cambiar tu nombre de usuario

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. En la sección "Change username" (Cambiar nombre de usuario), haz clic en **Change username** (Cambiar nombre de usuario). ![Change Username button](/assets/images/help/settings/settings-change-username.png){% if currentVersion == "free-pro-team@latest" %}
4. Lee las advertencias sobre cómo cambiar tu nombre de usuario. Si aún deseas cambiar tu nombre de usuario, haz clic en **I understand, let's change my username** (Comprendo, cambiaré mi nombre de usuario). ![Cambiar botón Username warning (Advertencia de nombre de usuario)](/assets/images/help/settings/settings-change-username-warning-button.png)
5. Escribe un nuevo nombre de usuario. ![Campo New username (Nuevo nombre de usuario)](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. Si el nombre de usuario que elegiste está disponible, haz clic en **Change my username** (Cambiar mi nombre de usuario). Si el nombre de usuario que elegiste no está disponible, puedes probar un nombre de usuario diferente o una de las sugerencias que ves. ![Cambiar botón Username warning (Advertencia de nombre de usuario)](/assets/images/help/settings/settings-change-my-username-button.png)
{% endif %}

### Leer más

- "[¿Por qué se enlazan mis confirmaciones a un usuario incorrecto?](/articles/why-are-my-commits-linked-to-the-wrong-user)"{% if currentVersion == "free-pro-team@latest" %}
- "[{% data variables.product.prodname_dotcom %} Política de nombre de usuario](/articles/github-username-policy)"{% endif %}
