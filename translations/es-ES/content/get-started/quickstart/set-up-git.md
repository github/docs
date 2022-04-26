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

To use Git on the command line, you will need to download, install, and configure Git on your computer. También puedes instalar el {% data variables.product.prodname_cli %} para utilizar {% data variables.product.prodname_dotcom %} desde la línea de comandos. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)".

If you want to work with Git locally, but do not want to use the command line, you can instead download and install the [{% data variables.product.prodname_desktop %}]({% data variables.product.desktop_link %}) client.  Para obtener más información, consulta la sección "[Instalar y configurar {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/)".

If you do not need to work with files locally, {% data variables.product.product_name %} lets you complete many Git-related actions directly in the browser, including:

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

## Authenticating with {% data variables.product.prodname_dotcom %} from Git

When you connect to a {% data variables.product.prodname_dotcom %} repository from Git, you will need to authenticate with {% data variables.product.product_name %} using either HTTPS or SSH.

{% note %}

**Nota:** Puedes autenticarte en {% data variables.product.product_name %} utilizando el {% data variables.product.prodname_cli %} ya sea para HTTP o SSH. Para obtener más información, consulta [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

{% endnote %}

### Conectar por HTTPS (recomendado)

If you clone with HTTPS, you can cache your {% data variables.product.prodname_dotcom %} credentials in Git using a credential helper. For more information, see "[Cloning with HTTPS urls](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)" and "[Caching your {% data variables.product.prodname_dotcom %} credentials in Git](/github/getting-started-with-github/caching-your-github-credentials-in-git)."

### Conectar por SSH

If you clone with SSH, you must generate SSH keys on each computer you use to push or pull from {% data variables.product.product_name %}. For more information, see "[Cloning with SSH urls](/github/getting-started-with-github/about-remote-repositories/#cloning-with-ssh-urls)" and "[Generating a new SSH key](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)."

## Pasos siguientes

You now have Git and {% data variables.product.prodname_dotcom %} all set up. Ahora puedes elegir crear un repositorio en donde puedas poner tus proyectos. Saving your code in a repository allows you to back up your code and share it around the world.

* {% data reusables.getting-started.create-a-repository %}.

* {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}


* {% data reusables.support.connect-in-the-forum-bootcamp %}
