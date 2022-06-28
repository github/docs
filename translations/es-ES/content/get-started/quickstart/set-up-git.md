---
title: Configurar Git
redirect_from:
  - /git-installation-redirect
  - /linux-git-installation
  - /linux-set-up-git
  - /mac-git-installation
  - /mac-set-up-git
  - /set-up-git-redirect
  - /win-git-installation
  - /win-set-up-git
  - /articles/set-up-git
  - /github/getting-started-with-github/set-up-git
  - /github/getting-started-with-github/quickstart/set-up-git
intro: 'En el centro de {% data variables.product.prodname_dotcom %} hay un sistema de control de versión de código abierto (VCS) llamado Git. Git es responsable de todo lo relacionado con {% data variables.product.prodname_dotcom %} que suceda de forma local en tu computadora.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---

## Utilizar GitHub

Para utilizar Git en la línea de comandos, necesitarás descargar, instalar y configurar Git en tu computadora. También puedes instalar el {% data variables.product.prodname_cli %} para utilizar {% data variables.product.prodname_dotcom %} desde la línea de comandos. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)".

Si quieres trabajar con Git de forma local, pero no quieres utilizar la línea de comandos, puedes descargar e instalar el cliente de [{% data variables.product.prodname_desktop %}]({% data variables.product.desktop_link %}) en su lugar.  Para obtener más información, consulta la sección "[Instalar y configurar {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/)".

Si no necesitas trabajar localmente con los archivos, {% data variables.product.product_name %} te permite completar muchas acciones relacionadas con Git directamente en el buscador, incluyendo:

- [Crear un repositorio](/articles/create-a-repo)
- [Bifurcar un repositorio](/articles/fork-a-repo)
- [Administrar archivos](/repositories/working-with-files/managing-files)
- [Socializar](/articles/be-social)

## Configurar Git

1. [Descarga e instala la última versión de Git](https://git-scm.com/downloads).

{% note %}

**Nota**: Si estás utilizando un dispositivo con Chrome OS, necesitarás realizar configuraciones adicionales:

2. Instala un emulador de terminal como Termux desde la Google Play Store en tu dispositivo Chrome OS.
3. Instala Git desde el emulador de terminal que instalaste. Por ejemplo, ingresa `apt install git` en Termux y teclea `y` cuando se te indique.

{% endnote %}

2. [Configura tu nombre de usuario en Git](/github/getting-started-with-github/setting-your-username-in-git).
3. [Configura tu dirección de correo electrónico de confirmación en Git](/articles/setting-your-commit-email-address).

## Autenticarte con {% data variables.product.prodname_dotcom %} desde Git

Cuando te conectes a un repositorio de {% data variables.product.prodname_dotcom %} desde Git, necesitarás autenticarte con {% data variables.product.product_name %} utilizando ya sea HTTPS o SSH.

{% note %}

**Nota:** Puedes autenticarte en {% data variables.product.product_name %} utilizando el {% data variables.product.prodname_cli %} ya sea para HTTP o SSH. Para obtener más información, consulta [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

{% endnote %}

### Conectar por HTTPS (recomendado)

Si clonas con HTTPS, puedes guardar tus credenciales de {% data variables.product.prodname_dotcom %} en el caché en Git utilizando un ayudante para credenciales. Para obtener más información, consulta las secciones "[Clonar con URL de HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)" y "[Guardar tus credenciales de {% data variables.product.prodname_dotcom %} en caché en Git](/github/getting-started-with-github/caching-your-github-credentials-in-git)".

### Conectar por SSH

Si clonas con SSH, debes generar llaves SSH en cada computadora que utilices para subir o extraer información desde {% data variables.product.product_name %}. Para obtener más información, consulta las secciones "[Clonar con URL de SSH](/github/getting-started-with-github/about-remote-repositories/#cloning-with-ssh-urls)" y "[Generar una llave SSH nueva](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

## Pasos siguientes

Ahora Git y {% data variables.product.prodname_dotcom %} están completamente configurados. Ahora puedes elegir crear un repositorio en donde puedas poner tus proyectos. El guardar tu código en un repositorio te permite respaldarlo y compartirlo con todo el mundo.

* {% data reusables.getting-started.create-a-repository %}.

* {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}


* {% data reusables.support.connect-in-the-forum-bootcamp %}
