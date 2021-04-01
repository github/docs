---
title: Configurar tu nombre de usuario en Git
intro: 'Git utiliza un nombre de usuario para asociar las confirmaciones con una identidad. El nombre de usuario de Git no es tu mismo nombre de usuario de {% data variables.product.product_name %}.'
redirect_from:
  - /articles/setting-your-username-in-git
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Puedes cambiar el nombre que está asociado con tus confirmaciones de Git utilizando el comando `git config`. El nuevo nombre que configures será visible en cualquier confirmación futura que subas a {% data variables.product.product_name %} desde la línea de comando. Si deseas mantener tu nombre real privado, puedes utilizar cualquier texto como nombre de usuario de Git.

Cambiar el nombre asociado con tus confirmaciones de Git utilizando `git config` afectará únicamente a las confirmaciones futuras y no cambiará el nombre utilizado para las confirmaciones anteriores.

### Configurar tu nombre de usuario de Git para *cada* repositorio en tu computadora

{% data reusables.command_line.open_the_multi_os_terminal %}

2. {% data reusables.user_settings.set_your_git_username %}
   ```shell
   $ git config --global user.name "<em>Mona Lisa</em>"
   ```

3. {% data reusables.user_settings.confirm_git_username_correct %}
   ```shell
   $ git config --global user.name
   > Mona Lisa
   ```

### Configurar tu nombre de usuario de Git para un repositorio único

{% data reusables.command_line.open_the_multi_os_terminal %}

2. Cambia el directorio de trabajo actual al repositorio local donde deseas configurar el nombre que está asociado con tus confirmaciones de Git.

3. {% data reusables.user_settings.set_your_git_username %}
   ```shell
   $ git config user.name "<em>Mona Lisa</em>"
   ```

3. {% data reusables.user_settings.confirm_git_username_correct %}
   ```shell
   $ git config user.name
   > Mona Lisa
   ```

### Leer más

- "[Establecer tu dirección de correo electrónico de confirmaciones](/articles/setting-your-commit-email-address)"
- ["Configuración de Git" del libro _Pro Git_](https://git-scm.com/book/en/Customizing-Git-Git-Configuration)
