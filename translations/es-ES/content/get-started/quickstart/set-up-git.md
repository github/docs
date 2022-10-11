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
  - /github/getting-started-with-github/set-up-git
  - /github/getting-started-with-github/quickstart/set-up-git
intro: 'En el centro de {% data variables.product.product_name %} hay un sistema de control de versión de código abierto (VCS) llamado Git. Git es responsable de todo lo relacionado con {% data variables.product.product_name %} que suceda de forma local en tu computadora.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pull requests
  - Issues
  - Notifications
  - Accounts
---

## Utilizar GitHub

Para usar Git en la línea de comando, deberás descargar, instalar y configurar Git en tu computadora. También puedes instalar el {% data variables.product.prodname_cli %} para utilizar {% data variables.product.product_name %} desde la línea de comandos. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)".

Si deseas trabajar con Git de forma local, pero no deseas utilizar la línea de comando, puedes descargar e instalar en su lugar el cliente [{% data variables.product.prodname_desktop %}]({% data variables.product.desktop_link %}).  Para obtener más información, consulta la sección "[Instalar y configurar {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/)".

Si no deseas trabajar con archivos de forma local, {% data variables.product.product_name %} te permite realizar muchas acciones relacionadas con Git de forma directa en el navegador, lo que incluye:

- [Crear un repositorio](/articles/create-a-repo)
- [Bifurcar un repositorio](/articles/fork-a-repo)
- [Administrar archivos](/repositories/working-with-files/managing-files)
- [Socializar](/articles/be-social)

## Configurar Git

1. [Descarga e instala la última versión de Git](https://git-scm.com/downloads).
2. [Configura tu nombre de usuario en Git](/github/getting-started-with-github/setting-your-username-in-git).
3. [Configura tu dirección de correo electrónico de confirmación en Git](/articles/setting-your-commit-email-address).

## Pasos siguientes: Autenticación con {% data variables.product.prodname_dotcom %} desde Git

Cuando te conectas a un repositorio {% data variables.product.product_name %} desde Git, deberás autenticarte con {% data variables.product.product_name %} utilizando HTTPS o SSH.

{% note %}

**Nota:** Puedes autenticarte en {% data variables.product.product_name %} utilizando el {% data variables.product.prodname_cli %} ya sea para HTTP o SSH. Para obtener más información, consulta [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

{% endnote %}

### Conectar por HTTPS (recomendado)

Si [clonas con HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls), puedes [almacenar tus credenciales de {% data variables.product.prodname_dotcom %} en el caché dentro de Git](/github/getting-started-with-github/caching-your-github-credentials-in-git) utilizando un asistente de credenciales.

### Conectar por SSH

Si clonas [con SSH](/github/getting-started-with-github/about-remote-repositories/#cloning-with-ssh-urls), debes [generar las claves de SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) en cada computadora que utilices para subir o extraer desde {% data variables.product.product_name %}.

## Celebrar

¡Felicitaciones, ahora tienes configurado todo Git y {% data variables.product.product_name %}! Ahora puedes elegir crear un repositorio en donde puedas poner tus proyectos. Esta es una forma excelente de respaldar tu código y facilita compartirlo en todo el mundo. Para obtener más información, consulta "[Crear un repositorio](/articles/create-a-repo)".

Puedes crear una copia de un repositorio si la bifurcas y propones los cambios que quieres ver si afectar al repositorio de nivel superior. Para obtener más información, consulta "[Bifurcar un repositorio](/articles/fork-a-repo)."

Cada repositorio en {% data variables.product.product_name %} pertenece a una persona u organización. Puedes interactuar con las personas, repositorios y organizaciones conectándote y siguiéndolos en {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Sé sociable ](/articles/be-social)".

{% data reusables.support.connect-in-the-forum-bootcamp %}
