---
title: Configuración de Git
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
intro: 'En el corazón de {% data variables.product.prodname_dotcom %} es un sistema de control de versiones (VCS) de código abierto denominado Git. Git es responsable de todo lo relacionado con {% data variables.product.prodname_dotcom %} que ocurra localmente en el equipo.'
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
ms.openlocfilehash: d12782f8531ec856cfa25e7d847527a26e84fb2e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147643961'
---
## Utilizar GitHub

Para usar Git en la línea de comandos, deberás descargar, instalar y configurar Git en tu equipo. También puede instalar {% data variables.product.prodname_cli %} para usar {% data variables.product.prodname_dotcom %} desde la línea de comandos. Para más información, vea "[Acerca de {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)".

Si quieres trabajar con Git de forma local, pero no quieres utilizar la línea de comandos, puedes descargar e instalar en su lugar el cliente [{% data variables.product.prodname_desktop %}]({% data variables.product.desktop_link %}).  Para obtener más información, vea "[Instalar y configurar {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/)".

Si no necesitas trabajar con archivos de forma local, {% data variables.product.product_name %} te permite realizar muchas acciones relacionadas con Git de forma directa en el navegador, incluido lo siguiente:

- [Crear un repositorio](/articles/create-a-repo)
- [Bifurcar un repositorio](/articles/fork-a-repo)
- [Administrar archivos](/repositories/working-with-files/managing-files)
- [Socializar](/articles/be-social)

## Configurar Git

1. [Descargue e instale la versión más reciente de Git](https://git-scm.com/downloads).

   {% note %}
   
   **Nota**: Si está utilizando un dispositivo con Chrome OS, necesitará realizar configuraciones adicionales:
   
   1. Instala un emulador de terminal como Termux desde la Google Play Store en tu dispositivo Chrome OS.
   1. Instala Git desde el emulador de terminal que instalaste. Por ejemplo, en Termux, escriba `apt install git` y luego `y` cuando se le solicite. 
   
   {% endnote %}

1. [Establezca el nombre de usuario en Git](/github/getting-started-with-github/setting-your-username-in-git).
1. [Establezca la dirección de correo electrónico de confirmación en Git](/articles/setting-your-commit-email-address).

## Autenticación con {% data variables.product.prodname_dotcom %} desde Git

Cuando te conectes a un repositorio de {% data variables.product.prodname_dotcom %} desde Git, deberás autenticarte con {% data variables.product.product_name %} mediante HTTPS o SSH.

{% note %}

**Nota**: puede autenticarse en {% data variables.product.product_name %} mediante la {% data variables.product.prodname_cli %}, ya sea para HTTP o SSH. Para más información, vea [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

{% endnote %}

### Conectar por HTTPS (recomendado)

Si clonas con HTTPS, puedes almacenar en caché las credenciales de {% data variables.product.prodname_dotcom %} en Git mediante un asistente de credenciales. Para más información, consulta "[Clonación con direcciones URL HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)" y "[Almacenamiento en caché de las credenciales de {% data variables.product.prodname_dotcom %} en Git](/github/getting-started-with-github/caching-your-github-credentials-in-git)".

### Conectar por SSH

Si clonas con SSH, debes generar claves SSH en cada equipo que uses para insertar o extraer desde {% data variables.product.product_name %}. Para obtener más información, consulta "[Clonación con direcciones URL SSH](/github/getting-started-with-github/about-remote-repositories/#cloning-with-ssh-urls)" y "[Generación de una nueva clave SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

## Pasos siguientes

Ya tienes Git y {% data variables.product.prodname_dotcom %} configurados. Ahora puedes elegir crear un repositorio en donde puedas poner tus proyectos. Guardar el código en un repositorio permite hacer una copia de seguridad del código y compartirlo en todo el mundo. 

* {% data reusables.getting-started.create-a-repository %}.

* {% data reusables.getting-started.fork-a-repository %}

* {% data reusables.getting-started.being-social %}


* {% data reusables.support.connect-in-the-forum-bootcamp %}
