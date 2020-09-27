---
title: Configurar Git
redirect_from:
  - /git-installation-redirect/
  - /linux-git-installation/
  - /linux-set-up-git/
  - /mac-git-installation/
  - /mac-set-up-git/
  - /set-up-git-redirect/
  - /win-git-installation/
  - /win-set-up-git/
  - /articles/set-up-git
intro: 'En el centro de {{ site.data.variables.product.product_name }} hay un sistema de control de versión de código abierto (VCS) llamado Git. Git es responsable de todo lo relacionado con {{ site.data.variables.product.product_name }} que suceda de forma local en tu computadora.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Para usar Git en la línea de comando, deberás descargar, instalar y configurar Git en tu computadora. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} You can also install {{ site.data.variables.product.prodname_cli }} to use {{ site.data.variables.product.product_name }} from the command line. For more information on {{ site.data.variables.product.prodname_cli }}, see the [{{ site.data.variables.product.prodname_cli }}](https://cli.github.com/manual/) documentation.{% endif %}

Si deseas trabajar con Git de forma local, pero no deseas utilizar la línea de comando, puedes descargar e instalar en su lugar el cliente [{{ site.data.variables.product.prodname_desktop }}]({{ site.data.variables.product.desktop_link }}).  Para obtener más información, consulta la sección "[Instalar y configurar {{ site.data.variables.product.prodname_desktop }}](/desktop/installing-and-configuring-github-desktop/)".

Si no deseas trabajar con archivos de forma local, {{ site.data.variables.product.product_name }} te permite realizar muchas acciones relacionadas con Git de forma directa en el navegador, lo que incluye:

- [Crear un repositorio](/articles/create-a-repo)
- [Bifurcar un repositorio](/articles/fork-a-repo)
- [Administrar archivos](/articles/managing-files-on-github/)
- [Socializar](/articles/be-social)

### Configurar Git

1. [Descarga e instala la última versión de Git](https://git-scm.com/downloads).
2. [Configura tu nombre de usuario en Git](/articles/setting-your-username-in-git).
3. [Configura tu dirección de correo electrónico de confirmación en Git](/articles/setting-your-commit-email-address).

### Pasos siguientes: Autenticación con {{ site.data.variables.product.prodname_dotcom }} desde Git

Cuando te conectas a un repositorio {{ site.data.variables.product.product_name }} desde Git, deberás autenticarte con {{ site.data.variables.product.product_name }} utilizando HTTPS o SSH.

#### Conectar por HTTPS (recomendado)

Si [clonas con HTTPS](/articles/which-remote-url-should-i-use/#cloning-with-https-urls), puedes [almacenar tus credenciales de {{ site.data.variables.product.prodname_dotcom }} en el caché dentro de Git](/github/using-git/caching-your-github-credentials-in-git) utilizando un asistente de credenciales.

#### Conectar por SSH

Si clonas [con SSH](/articles/which-remote-url-should-i-use#cloning-with-ssh-urls), debes [generar las claves de SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) en cada computadora que utilices para subir o extraer desde {{ site.data.variables.product.product_name }}.

### Celebrar

¡Felicitaciones, ahora tienes configurado todo Git y {{ site.data.variables.product.product_name }}! ¿Qué deseas hacer ahora?

- **Configurar Git**
- "[Crear un repositorio](/articles/create-a-repo)"
- "[Bifurcar un repositorio](/articles/fork-a-repo)"
- "[Socializar](/articles/be-social)"
- {{ site.data.reusables.support.connect-in-the-forum-bootcamp }}
