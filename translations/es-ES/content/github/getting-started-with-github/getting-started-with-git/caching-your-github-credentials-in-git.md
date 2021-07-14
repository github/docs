---
title: Almacenar tus credenciales de GitHub en el caché dentro de Git
redirect_from:
  - /firewalls-and-proxies/
  - /articles/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/caching-your-github-credentials-in-git
intro: 'Si estás [clonando repositorios de {% data variables.product.product_name %} utilizando HTTPS](/github/getting-started-with-github/about-remote-repositories), puedes utilizar un ayudante de credenciales para decirle a Git que recuerde tus credenciales.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Si clonas repositorios de {% data variables.product.product_name %} mediante SSH, entonces te autenticas utilizando una llave SSH en vez de utilizar otras credenciales. Para obtener información acerca de cómo configurar una conexión SSH, consulta la sección "[Generar una llave SSH](/articles/generating-an-ssh-key)".

{% mac %}

{% tip %}

**Tips:**

- Debes tener Git **1.7.10** o una versión más nueva para usar el ayudante de credenciales osxkeychain.
- Si has instalado Git mediante [Homebrew](http://brew.sh/), el `osxkeychain helper` debe estar instalado anteriormente.
- Si estás utilizando Mac OS X10.7 o superior y tienes instalado Git a través de las herramientas de la línea de comando Xcode de Apple, luego `osxkeychain helper` se incluirá automáticamente en tu instalación Git.

{% endtip %}

Instala Git y `osxkeychain helper` e informa a Git que lo use.

1. Descubre si Git y `osxkeychain helper` ya están instalados:
  ```shell
  $ git credential-osxkeychain
  # Test for the cred helper
  > Usage: git credential-osxkeychain &lt;get|store|erase>
  ```
2. Si el asistente `osxkeychain helper` no está instalado, y estás utilizando OS X versión 10.9 o superior, tu computadora te pedirá que lo descargues como parte de las Herramientas de la línea de comandos de Xcode:
  ```shell
  $ git credential-osxkeychain
  > xcode-select: note: no developer tools were found at '/Applications/Xcode.app',
  > requesting install. Choose an option in the dialog to download the command line developer tools.
  ```

 Como opción, puedes instalar Git y el asistente `osxkeychain helper` usando [Homebrew](http://brew.sh/):
  ```shell
  $ brew install git
  ```

4. Pídele a Git que use el asistente `osxkeychain helper` con la configuración global `credential.helper`:
  ```shell
  $ git config --global credential.helper osxkeychain
  # Set git to use the osxkeychain credential helper
  ```

La próxima vez que clones una URL de HTTPS que requiera autenticación, Git te pedirá tu nombre de usuario y contraseña. {% data reusables.user_settings.password-authentication-deprecation %}

Ya que te hayas autenticado exitosamente, tus credenciales se almacenarán en el llavero de macOS y se utilizarán cada que clones una URL con HTTPS. No se te solicitará teclear tus credenciales en Git nuevamente a menos de que éstas cambien.

{% endmac %}

{% windows %}

{% tip %}

**Sugerencia:** Necesitarás Git **1.7.10** o una versión más nueva para usar el ayudante de credenciales.

{% endtip %}

También puedes instalar un shell Git nativo, como [Git para Windows](https://git-for-windows.github.io/). Con Git para Windows, al ejecutar lo siguiente en la línea de comandos, se almacenarán tus credenciales:

```shell
$ git config --global credential.helper wincred
```

{% endwindows %}

{% linux %}

{% tip %}

**Sugerencia:** Necesitarás Git **1.7.10** o una versión más nueva para usar el ayudante de credenciales.

{% endtip %}

Activa tu ayudante de credenciales de manera que Git guarde tu contraseña en la memoria para otra oportunidad. Por defecto, Git guardará en la memoria caché tu contraseña durante 15 minutos.

1. En Terminal, escribe lo siguiente:
  ```shell
  $ git config --global credential.helper cache
  # Set git to use the credential memory cache
  ```
2. Para cambiar el intervalo por defecto de la memoria caché de la contraseña, escribe lo siguiente:
  ```shell
  $ git config --global credential.helper 'cache --timeout=3600'
  # Set the cache to timeout after 1 hour (setting is in seconds)
  ```

Para obtener más opciones para almacenar tus credenciales en Linux, consulta la sección [Almacenamiento de credenciales](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage) en Pro Git.

{% endlinux %}

### Leer más

- "[Actualizar credenciales desde la Keychain OSX](/articles/updating-credentials-from-the-osx-keychain/)"
- "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)"
