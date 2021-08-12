---
title: Configurar tu dirección de correo electrónico de confirmación
intro: 'Puedes configurar una dirección principal de correo electrónico en {% data variables.product.product_name %} que esté asociada con las operaciones de Git que realizas con base en la web como ediciones y fusiones.'
redirect_from:
  - /articles/keeping-your-email-address-private/
  - /articles/setting-your-commit-email-address-on-github/
  - /article/about-commit-email-addresses/
  - /articles/git-email-settings/
  - /articles/setting-your-email-in-git/
  - /articles/set-your-user-name-email-and-github-token/
  - /articles/setting-your-commit-email-address-in-git/
  - /articles/setting-your-commit-email-address
  - /github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Accounts
  - Notifications
---
### Acerca de las dirección de correo electrónico de confirmación

{% data variables.product.product_name %} utiliza tu dirección de correo electrónico de confirmación para asociar las confirmaciones con tu cuenta {% data variables.product.product_name %}. Puedes elegir la dirección de correo electrónico que se asociará con las confirmaciones que subes desde la línea de comando y las operaciones de Git con base en la web que realizas.

Para las operaciones de Git con base en la web, puedes configurar tu dirección de correo electrónico de confirmación en {% data variables.product.product_name %}. Para las confirmaciones que subes desde la línea de comando, puedes configurar tu dirección de correo electrónico de confirmaciones en Git.

{% if currentVersion == "free-pro-team@latest" %}Cualquier confirmación que hayas realizado antes de cambiar tu dirección de correo electrónico de confirmaciones estará todavía asociada a tu dirección de correo electrónico previa.{% else %}Después de cambiar tu dirección de correo electrónico de confirmaciones en {% data variables.product.product_name %}, la nueva dirección de correo electrónico será visible por defecto en todas tus operaciones futuras de Git con base en la web. Cualquier confirmación que realices antes de cambiar tu dirección de correo electrónico de confirmaciones estarán todavía asociada a tu dirección de correo electrónico anterior.{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**Nota**: {% data reusables.user_settings.no-verification-disposable-emails %}

{% endnote %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}Si deseas mantener de forma privada tu dirección personal de correo electrónico, puedes utilizar una dirección de correo electrónico `no-reply` provista por {% data variables.product.product_name %} como tu dirección de correo electrónico de confirmaciones. Para utilizar tu dirección de correo electrónico `noreply` para confirmaciones que subes desde la línea de comando, utiliza esa dirección de correo electrónico cuando configuras tu dirección de correo electrónico de confirmaciones en Git. Para utilizar tu dirección `noreply` para las operaciones de Git con base en la web, configura tu dirección de correo electrónico de confirmaciones en GitHub y elige **Keep my email address private (Mantener mi dirección de correo electrónico privada)**.

También puedes elegir bloquear las confirmaciones que subes desde la línea de comando que muestra tu dirección de correo electrónico personal. Para obtener más información, consulta "[Bloquear las subidas de línea de comando que muestran tu correo electrónico personal](/articles/blocking-command-line-pushes-that-expose-your-personal-email-address)."{% endif %}

Para garantizar que las confirmaciones se te asignen y aparezcan en tu gráfico de contribuciones, utiliza una dirección de correo electrónico que hayas [agregado en tu cuenta de GitHub](/articles/adding-an-email-address-to-your-github-account/){% if currentVersion == "free-pro-team@latest" %}, o la dirección de correo electrónico `noreply` que provee {% data variables.product.product_name %} que figura en tus configuraciones de correo electrónico{% endif %}.

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**Nota:** Si creaste tu cuenta de {% data variables.product.product_name %} _después_ del 18 de julio de 2017, tu dirección de correo electrónico `no-reply` provista por {% data variables.product.product_name %} es un número de Id. de siete dígitos, y tu nombre de usuario tiene la forma de <code><em>ID+username</em>@users.noreply.github.com</code>. Si creaste tu cuenta de {% data variables.product.product_name %} _antes del_ 18 de julio de 2017, tu dirección de correo electrónico `no-reply` provista por {% data variables.product.product_name %} es tu nombre de usuario con la forma de <code><em>username</em>@users.noreply.github.com</code>. Puedes obtener una dirección de correo electrónico `no-reply` provista por {% data variables.product.product_name %} con base en el ID al seleccionar (o deseleccionar y volver a seleccionar) **Keep my email address private (Mantener mi dirección de correo electrónico privada)** en tus configuraciones.

{% endnote %}

Si utilizas tu dirección de correo electrónico `noreply` provista por {% data variables.product.product_name %} para realizar confirmaciones y después [cambias tu nombre de usuario](/articles/changing-your-github-username), esas confirmaciones no estarán asociadas a tu cuenta {% data variables.product.product_name %}. Esto no se aplica si estás usando una dirección `noreply` basada en el ID provista por {% data variables.product.product_name %}. Para obtener más información, consulta [Cambiar tu {% data variables.product.prodname_dotcom %} nombre de usuario](/articles/changing-your-github-username)"{% endif %}

### Configurar tu dirección de correo electrónico de confirmación en {% data variables.product.prodname_dotcom %}

{% data reusables.files.commit-author-email-options %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.user_settings.add_and_verify_email %}
{% data reusables.user_settings.select_primary_email %}{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.user_settings.keeping_your_email_address_private %}{% endif %}

### Configurar tu dirección de correo electrónico de confirmación en Git

Puedes utilizar el comando `git config` para cambiar la dirección de correo electrónico que asocias a tus confirmaciones de Git. La nueva dirección de correo electrónico que configures será visible en cualquier confirmación futura que subas a {% data variables.product.product_name %} desde la línea de comando. Cualquier confirmación que realices antes de cambiar tu dirección de correo electrónico de confirmaciones estarán todavía asociadas a tu dirección de correo electrónico anterior.

#### Configurar tu dirección de correo electrónico para cada repositorio en tu computadora

{% data reusables.command_line.open_the_multi_os_terminal %}
2. {% data reusables.user_settings.set_your_email_address_in_git %}
   ```shell
   $ git config --global user.email "<em>email@example.com</em>"
   ```
3. {% data reusables.user_settings.confirm_git_email_address_correct %}
   ```shell
   $ git config --global user.email
   <span class="output">email@example.com</span>
   ```
4. {% data reusables.user_settings.link_email_with_your_account %}

#### Configurar tu dirección de correo electrónico para un repositorio único

{% data variables.product.product_name %} utiliza la dirección de correo electrónico configurada en tu configuración local de Git para asociar las confirmaciones subidas desde la línea de comando con tu cuenta {% data variables.product.product_name %}.

Puedes cambiar la dirección de correo electrónico asociada a las confirmaciones que realizas en un repositorio único. Esto sustituirá tus configuraciones globales de Git en este único repositorio, pero no afectará otros repositorios.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Cambia el directorio de trabajo actual al repositorio local donde deseas configurar la dirección de correo electrónico que asocias con tus confirmaciones de Git.
3. {% data reusables.user_settings.set_your_email_address_in_git %}
   ```shell
   $ git config user.email "<em>email@example.com</em>"
   ```
4. {% data reusables.user_settings.confirm_git_email_address_correct %}
   ```shell
   $ git config user.email
   <span class="output">email@example.com</span>
   ```
5. {% data reusables.user_settings.link_email_with_your_account %}
