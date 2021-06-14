---
title: Recordar tu nombre de usuario o correo electrónico de GitHub
intro: '¿Vas a iniciar sesión en {% data variables.product.product_location %} por primera vez después de un tiempo? Si es así, ¡bienvenido de nuevo! Si no puedes recordar tu {% data variables.product.product_name %} nombre de la cuenta de usuario, puedes intentar estos métodos para hacerlo.'
redirect_from:
  - /articles/oh-noes-i-ve-forgotten-my-username-email/
  - /articles/oh-noes-i-ve-forgotten-my-username-or-email/
  - /articles/remembering-your-github-username-or-email
  - /github/setting-up-and-managing-your-github-user-account/remembering-your-github-username-or-email
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Accounts
  - Notifications
---

{% mac %}

### Usuarios {% data variables.product.prodname_desktop %}

1. En el menú de **GitHub Desktop** (GitHub Desktop), haz clic en **Preferences** (Preferencias).
2. En la ventana Preferences (Preferencias), comprueba lo siguiente:
    - Para ver tu {% data variables.product.product_name %} nombre de usuario, haz clic en **Accounts** (Cuentas).
    - Para ver tu correo electrónico de Git, haz clic en **Git**. Ten en cuenta que no está garantizado que este correo electrónico sea [tu correo electrónico {% data variables.product.product_name %} principal](/articles/changing-your-primary-email-address).

{% endmac %}

{% windows %}

### Usuarios {% data variables.product.prodname_desktop %}

1. En el menú de **Archivo**, da clic en **Opciones**.
2. En la ventana Options (Opciones), comprueba lo siguiente:
    - Para ver tu {% data variables.product.product_name %} nombre de usuario, haz clic en **Accounts** (Cuentas).
    - Para ver tu correo electrónico de Git, haz clic en **Git**. Ten en cuenta que no está garantizado que este correo electrónico sea [tu correo electrónico {% data variables.product.product_name %} principal](/articles/changing-your-primary-email-address).

{% endwindows %}

### Encontrar tu nombre de usuario en tu configuración `user.name`

Durante la configuración, puede que debas [establecer tu nombre de usuario en Git](/github/getting-started-with-github/setting-your-username-in-git). En tal caso, puedes revisar el valor de este parámetro de configuración:

```shell
$ git config user.name
# Ver el parámetro
<em>YOUR_USERNAME</em>
```

### Encontrar tu nombre de usuario en la URL de repositorios remotos

Si tienes alguna copia local de los repositorios personales que has creado o bifurcado, puedes verificar la URL del repositorio remoto.

{% tip %}

**Sugerencia**: Este método solo funciona si tienes un repositorio original o tu propia bifurcación del repositorio de alguna otra persona. Si clonas el repositorio de alguna otra persona, se mostrará su nombre de usuario en lugar del tuyo. Del mismo modo, los repositorios de la organización mostrarán el nombre de la organización en lugar del de un usuario particular en la URL remota.

{% endtip %}

```shell
$ cd <em>YOUR_REPOSITORY</em>
# Cambia los directorios para el repositorio de Git inicializado
$ git remote -v
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (fetch)
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (push)
```

Tu nombre de usuario es lo que le sigue inmediatamente a `https://{% data variables.command_line.backticks %}/`.

{% if currentVersion == "free-pro-team@latest" %}
### Leer más

- "[Verificar tu dirección de correo electrónico](/articles/verifying-your-email-address)"
{% endif %}
