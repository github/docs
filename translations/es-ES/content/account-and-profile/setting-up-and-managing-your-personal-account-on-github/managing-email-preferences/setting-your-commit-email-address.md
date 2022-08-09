---
title: Configurar tu dirección de correo electrónico de confirmación
intro: 'Puedes configurar la dirección de correo electrónico que se utiliza para crear confirmaciones en {% data variables.product.product_location %} y en tu computadora.'
redirect_from:
  - /articles/keeping-your-email-address-private
  - /articles/setting-your-commit-email-address-on-github
  - /articles/about-commit-email-addresses
  - /articles/git-email-settings
  - /articles/setting-your-email-in-git
  - /articles/set-your-user-name-email-and-github-token
  - /articles/setting-your-commit-email-address-in-git
  - /articles/setting-your-commit-email-address
  - /github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Configurar la dirección de correo electrónico para confirmaciones
---

## Acerca de las dirección de correo electrónico de confirmación

{% data variables.product.prodname_dotcom %} utiliza tu dirección de correo electrónico para confirmaciones para asociar dichas confirmaciones con tu cuenta de {% data variables.product.product_location %}. Puedes elegir la dirección de correo electrónico que se asociará con las confirmaciones que subes desde la línea de comando y las operaciones de Git con base en la web que realizas.

Para las operaciones de Git basadas en web, puedes configurar tu dirección de correo electrónico para confirmaciones en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. Para las confirmaciones que subes desde la línea de comando, puedes configurar tu dirección de correo electrónico de confirmaciones en Git.

{% ifversion fpt or ghec %}Cualquier confirmación que hayas realizado antes de cambiar tu dirección de correo electrónico de confirmaciones estará todavía asociada a tu dirección de correo electrónico previa.{% else %}Después de cambiar tu dirección de correo electrónico de confirmaciones en {% data variables.product.product_name %}, la nueva dirección de correo electrónico será visible por defecto en todas tus operaciones futuras de Git con base en la web. Cualquier confirmación que realices antes de cambiar tu dirección de correo electrónico de confirmaciones estarán todavía asociada a tu dirección de correo electrónico anterior.{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Nota**: {% data reusables.user-settings.no-verification-disposable-emails %}

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}If you'd like to keep your personal email address private, you can use a `noreply` email address from {% data variables.product.product_name %} as your commit email address. Para utilizar tu dirección de correo electrónico `noreply` para confirmaciones que subes desde la línea de comando, utiliza esa dirección de correo electrónico cuando configuras tu dirección de correo electrónico de confirmaciones en Git. Para utilizar tu dirección `noreply` para las operaciones de Git con base en la web, configura tu dirección de correo electrónico de confirmaciones en GitHub y elige **Keep my email address private (Mantener mi dirección de correo electrónico privada)**.

También puedes elegir bloquear las confirmaciones que subes desde la línea de comando que muestra tu dirección de correo electrónico personal. Para obtener más información, consulta "[Bloquear las subidas de línea de comando que muestran tu correo electrónico personal](/articles/blocking-command-line-pushes-that-expose-your-personal-email-address)."{% endif %}

Para garantizar que las confirmaciones se te atribuyan y aparezcan en tu gráfica de contribuciones, utiliza una dirección de correo electrónico que esté conectada a tu cuenta de {% data variables.product.product_location %}{% ifversion fpt or ghec %}, o a la dirección de tipo `noreply` que se te proporcionó en la configuración de correo electrónico{% endif %}. {% ifversion not ghae %}Para obtener más información, consulta la sección "[Agregar una dirección de correo electrónico a tu cuenta de {% data variables.product.prodname_dotcom %}](/github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account)".{% endif %}

{% ifversion fpt or ghec %}

{% note %}

**Nota:** Si creaste tu cuenta en {% data variables.product.product_location %} _después_ del 18 de julio de 2017, tu dirección de correo electrónico de `noreply` para {% data variables.product.product_name %} es un número de ID de siete dígitos y tu nombre de usuario en formato <code><em>ID+username</em>@users.noreply.github.com</code>. Si creaste tu cuenta en {% data variables.product.product_location %} _antes del_ 18 de julio de 2017, tu dirección de correo electrónico de tipo `noreply` de {% data variables.product.product_name %} es <code><em>username</em>@users.noreply.github.com</code>. You can get an ID-based `noreply` email address for {% data variables.product.product_name %} by selecting (or deselecting and reselecting) **Keep my email address private** in your email settings.

{% endnote %}

Si utilizas tu dirección de correo electrónico de tipo `noreply` para que {% data variables.product.product_name %} realice confirmaciones y luego [cambias tu nombre de usuario](/articles/changing-your-github-username), dichas confirmaciones no se asociarán con tu cuenta en {% data variables.product.product_location %}. Esto no aplica si estás utilizando la dirección de tipo `noreply` basada en ID desde {% data variables.product.product_name %}. Para obtener más información, consulta [Cambiar tu {% data variables.product.prodname_dotcom %} nombre de usuario](/articles/changing-your-github-username)"{% endif %}

## Configurar tu dirección de correo electrónico de confirmación en {% data variables.product.prodname_dotcom %}

{% data reusables.files.commit-author-email-options %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.emails %}
{% data reusables.user-settings.add_and_verify_email %}
{% data reusables.user-settings.select_primary_email %}{% ifversion fpt or ghec %}
{% data reusables.user-settings.keeping_your_email_address_private %}{% endif %}

## Configurar tu dirección de correo electrónico de confirmación en Git

Puedes utilizar el comando `git config` para cambiar la dirección de correo electrónico que asocias a tus confirmaciones de Git. La nueva dirección de correo electrónico que configures será visible en cualquier confirmación futura que subas a {% data variables.product.product_location %} desde la línea de comando. Cualquier confirmación que realices antes de cambiar tu dirección de correo electrónico de confirmaciones estarán todavía asociadas a tu dirección de correo electrónico anterior.

### Configurar tu dirección de correo electrónico para cada repositorio en tu computadora

{% data reusables.command_line.open_the_multi_os_terminal %}
2. {% data reusables.user-settings.set_your_email_address_in_git %}
   ```shell
   $ git config --global user.email "<em>email@example.com</em>"
   ```
3. {% data reusables.user-settings.confirm_git_email_address_correct %}
   ```shell
   $ git config --global user.email
   <span class="output">email@example.com</span>
   ```
4. {% data reusables.user-settings.link_email_with_your_account %}

### Configurar tu dirección de correo electrónico para un repositorio único

{% data variables.product.product_name %} utiliza la dirección de correo electrónico que se configuró en tus ajustes locales de Git para asociar las confirmaciones que se suben desde la línea de comandos con tu cuenta en {% data variables.product.product_location %}.

Puedes cambiar la dirección de correo electrónico asociada a las confirmaciones que realizas en un repositorio único. Esto sobrescribirá tus ajustes globales de configuración de Git en este repositorio específico, pero no afectará a ningún otro repositorio.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Cambia el directorio de trabajo actual al repositorio local donde deseas configurar la dirección de correo electrónico que asocias con tus confirmaciones de Git.
3. {% data reusables.user-settings.set_your_email_address_in_git %}
   ```shell
   $ git config user.email "<em>email@example.com</em>"
   ```
4. {% data reusables.user-settings.confirm_git_email_address_correct %}
   ```shell
   $ git config user.email
   <span class="output">email@example.com</span>
   ```
5. {% data reusables.user-settings.link_email_with_your_account %}
