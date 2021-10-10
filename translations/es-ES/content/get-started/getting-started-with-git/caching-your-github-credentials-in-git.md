---
title: Almacenar tus credenciales de GitHub en el caché dentro de Git
redirect_from:
  - /firewalls-and-proxies/
  - /articles/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/getting-started-with-git/caching-your-github-credentials-in-git
intro: 'Si estás [clonando repositorios de {% data variables.product.product_name %} utilizando HTTPS](/github/getting-started-with-github/about-remote-repositories), te recomendamos utilizar el {% data variables.product.prodname_cli %} o el Core de Administración de Credenciales de Git (GCM Core) para recordar tus credenciales.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
shortTitle: Guardar credenciales en caché
---

{% tip %}

**Tip:** Si clonas repositorios de {% data variables.product.product_name %} utilizando SSH, entonces puedes autenticarte utilizando una llave SSH en vez de utilizar otras credenciales. Para obtener información acerca de cómo configurar una conexión SSH, consulta la sección "[Generar una llave SSH](/articles/generating-an-ssh-key)".

{% endtip %}

## {% data variables.product.prodname_cli %}

El {% data variables.product.prodname_cli %} almacenará tus credenciales de Git automáticamente cuando elijas `HTTPS` como tu protocolo preferido para las operaciones de Git y respondas "yes" cuando te pregunte si quieres autenticarte en Git con tus credenciales de {% data variables.product.product_name %}.

1. [Instala](https://github.com/cli/cli#installation) el {% data variables.product.prodname_cli %} en macoS, Windows o Linux.
2. En la línea de comandos, ingresa `gh auth login` y luego sigue los mensajes.
   - Cuando se te pida tu protocolo preferido para operaciones de Git, selecciona `HTTPS`.
   - Cuando se te pregunte si quieres autenticarte en Git con tus credenciales de {% data variables.product.product_name %}, ingresa `Y`.

Para obtener más información sobre cómo autenticarte con el {% data variables.product.prodname_cli %}, consulta la sección [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

## Core de Administración de Credenciales de Git

El [Core de Administración de Credenciales de Git](https://github.com/microsoft/Git-Credential-Manager-Core) (GCM Core) es otra forma de almacenar tus credenciales de forma segura y conectarte a GitHub por HTTPS. Con el GCM Core, no necesitas [crear y almacenar un PAT](/github/authenticating-to-github/creating-a-personal-access-token) manualmente, ya que el GCM Core administra la autenticación en tu nombre, incluyendo la 2FA (autenticación bifactorial).

{% mac %}

1. Instalar Git utilizando [Homebrew](https://brew.sh/):
  ```shell
  $ brew install git
  ```

2. Instalar el GCM Core utilizando Homebrew:
  ```shell
  $ brew tap microsoft/git
  $ brew install --cask git-credential-manager-core
  ```
  Para MacOS, no necesitas ejecutar `git config`, ya que el GCM Core configura Git automáticamente para ti.

{% data reusables.gcm-core.next-time-you-clone %}

Ya que te hayas autenticado exitosamente, tus credenciales se almacenarán en el llavero de macOS y se utilizarán cada que clones una URL con HTTPS. Git no requerirá que teclees tus credenciales en la línea de comandos nuevamente a menos de que cambies tus credenciales.

{% endmac %}

{% windows %}

1. Instala Git para Windows, el cual incluye a GCM Core. Para obtener más información, consulta la sección "[Git para lanzamientos de Windows](https://github.com/git-for-windows/git/releases/latest)" desde su [página de lanzamientos](https://github.com/git-for-windows/git/releases/latest).

Te recomendamos instalar siempre la versión más reciente. Por lo mínimo, instala la versión 2.29 o superior, la cual es la primera versión que ofrece compatibilidad con OAuth para GitHub.

{% data reusables.gcm-core.next-time-you-clone %}

Una vez que te hayas autenticado con éxito, tus credenciales se almacenarán en el administrador de credenciales de Windows y se utilizarán cada que clones una URL de HTTPS. Git no requerirá que teclees tus credenciales en la línea de comandos nuevamente a menos de que cambies tus credenciales.

<br>

{% warning %}

**Advertencia:** Las versiones más antiguas de Git para Windows vienen con el Administrador de Credenciales de Git para Windows. Este producto más antiguo ya no es compatible y no puede conectarse con GitHub a través de OAuth. Te recomendamos mejorar a [la última versión de Git para Windows](https://github.com/git-for-windows/git/releases/latest).

{% endwarning %}

{% warning %}

**Advertencia:** Si guardaste credenciales incorrectas o vencidas en caché en el Administrador de Credenciales para Windows, Git no podrá acceder a {% data variables.product.product_name %}. Para restablecer tus credenciales almacenadas en caché y que Git te pida ingresar tus credenciales, accede al Administrador de Credenciales en el Panel de Control de Windows debajo de Cuentas de usuario > Administrador de Credenciales. Busca la entrada de {% data variables.product.product_name %} y bórrala.

{% endwarning %}

{% endwindows %}

{% linux %}

Para Linux, instala Git y GCM Core y luego configura Git para utilizar GCM Core.

1. Instala Git desde el sistema de empaquetado de tu distribución. Las instrucciones variarán dependiendo del tipo de Linux que tengas.

2. Instala GCM Core. Consulta las [instrucciones en el repositorio de GCM Core](https://github.com/microsoft/Git-Credential-Manager-Core#linux-install-instructions), ya que estas variarán dependiendo del tipo de Linux que ejecutas.

3. Configura Git para utilizar GCM Core. Hay varias tiendas de respaldo de entre las que puedes elegir, así que revisa los documentos de GCM Core para completar tu configuración. Para obtener más información, consulta la sección "[GCM Core para Linux](https://aka.ms/gcmcore-linuxcredstores)".

{% data reusables.gcm-core.next-time-you-clone %}

Una vez que te hayas autenticado con éxito, tus credenciales se almacenarán en tu sistema y se utilizarán cada que clones una URL de HTTPS. Git no requerirá que teclees tus credenciales en la línea de comandos nuevamente a menos de que cambies tus credenciales.

Para obtener más opciones para almacenar tus credenciales en Linux, consulta la sección [Almacenamiento de credenciales](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage) en Pro Git.

{% endlinux %}

<br>

Para obtener más información o para reportar propuestas con GCM Core, consulta los documentos oficiales de GCM Core en "[Core de Administración de Credenciales de Git](https://github.com/microsoft/Git-Credential-Manager-Core)".
