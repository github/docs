---
title: Almacenar tus credenciales de GitHub en el caché dentro de Git
redirect_from:
  - /firewalls-and-proxies
  - /articles/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-password-in-git
  - /github/using-git/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/caching-your-github-credentials-in-git
  - /github/getting-started-with-github/getting-started-with-git/caching-your-github-credentials-in-git
intro: 'Si estás [clonando repositorios de {% data variables.product.product_name %} utilizando HTTPS](/github/getting-started-with-github/about-remote-repositories), te recomendamos utilizar {% data variables.product.prodname_cli %} o el Administrador de Credenciales de Git (GCM) para recordar tus credenciales.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Caching credentials
ms.openlocfilehash: 203eed949beb3c1ada9c4c099cbaf214aac0c4f7
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112066'
---
{% tip %}

**Sugerencia:** Si clonas repositorios de {% data variables.product.product_name %} mediante SSH, entonces puedes autenticarte utilizando una clave SSH en vez de utilizar otras credenciales. Para obtener información sobre cómo configurar una conexión SSH, consulta "[Generación de una clave SSH](/articles/generating-an-ssh-key)".

{% endtip %}

## {% data variables.product.prodname_cli %}

{% data variables.product.prodname_cli %} almacenará tus credenciales de Git automáticamente cuando elijas `HTTPS` como tu protocolo preferido para las operaciones de Git y respondas "yes" cuando te pregunte si quieres autenticarte en Git con tus credenciales de {% data variables.product.product_name %}.

1. [Instala](https://github.com/cli/cli#installation) {% data variables.product.prodname_cli %} en macOS, Windows o Linux.
2. En la línea de comandos, escribe `gh auth login` y sigue las indicaciones.
   - Cuando se te pida tu protocolo preferido para las operaciones de Git, selecciona `HTTPS`.
   - Cuando se te pregunte si quieres autenticarte en Git con tus credenciales de {% data variables.product.product_name %}, escribe `Y`.

Para obtener más información sobre la autenticación con {% data variables.product.prodname_cli %}, consulta [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

## Administrador de credenciales de Git

El [Administrador de credenciales de Git](https://github.com/GitCredentialManager/git-credential-manager) (GCM) es otra manera de almacenar las credenciales de forma segura y conectarte a GitHub a través de HTTPS. Con GCM, no es necesario [crear y almacenar un PAT](/github/authenticating-to-github/creating-a-personal-access-token) manualmente, ya que GCM administra la autenticación en tu nombre, incluida la 2FA (autenticación en dos fases).

{% mac %}

1. Instala Git utilizando [Homebrew](https://brew.sh/):
  ```shell
  $ brew install git
  ```

2. Instala el GCM utilizando Homebrew:
  ```shell
  $ brew tap microsoft/git
  $ brew install --cask git-credential-manager-core
  ```
  Para MacOS, no es necesario ejecutar `git config` porque GCM configura Git automáticamente.

{% data reusables.gcm-core.next-time-you-clone %}

Ya que te hayas autenticado exitosamente, tus credenciales se almacenarán en el llavero de macOS y se utilizarán cada que clones una URL con HTTPS. Git no requerirá que teclees tus credenciales en la línea de comandos nuevamente a menos de que cambies tus credenciales.

{% endmac %}

{% windows %}

1. Instala Git para Windows, el cual incluye el GCM. Para obtener más información, consulta "[Versiones de Git para Windows](https://github.com/git-for-windows/git/releases/latest)" en su [página de versiones](https://github.com/git-for-windows/git/releases/latest).

Te recomendamos instalar siempre la versión más reciente. Por lo mínimo, instala la versión 2.29 o superior, la cual es la primera versión que ofrece compatibilidad con OAuth para GitHub.

{% data reusables.gcm-core.next-time-you-clone %}

Una vez que te hayas autenticado con éxito, tus credenciales se almacenarán en el administrador de credenciales de Windows y se utilizarán cada que clones una URL de HTTPS. Git no requerirá que teclees tus credenciales en la línea de comandos nuevamente a menos de que cambies tus credenciales.

<br>

{% warning %}

**Advertencia:** Las versiones anteriores de Git para Windows incluían el Administrador de credenciales de Git para Windows. Este producto más antiguo ya no es compatible y no puede conectarse con GitHub a través de OAuth. Se recomienda actualizar a [la versión más reciente de Git para Windows](https://github.com/git-for-windows/git/releases/latest).

{% endwarning %}

{% warning %}

**Advertencia:** Si guardaste credenciales incorrectas o vencidas en caché en el Administrador de credenciales para Windows, Git no podrá acceder a {% data variables.product.product_name %}. Para restablecer tus credenciales almacenadas en caché y que Git te pida escribir tus credenciales, accede al Administrador de credenciales en el Panel de control de Windows debajo de Cuentas de usuario > Administrador de credenciales. Busca la entrada de {% data variables.product.product_name %} y bórrala. 

{% endwarning %}

{% endwindows %}

{% linux %}

Para Linux, instala Git y GCM y luego configura Git para utilizar el GCM.

1. Instala Git desde el sistema de empaquetado de tu distribución. Las instrucciones variarán dependiendo del tipo de Linux que tengas.

2. Instala el GCM. Consulta las [instrucciones del repositorio de GCM](https://github.com/GitCredentialManager/git-credential-manager#linux-install-instructions), ya que variarán en función del tipo de Linux que ejecutes.

3. Configura Git para utilizar el GCM. Hay varias tiendas de respaldo de entre las que puedes elegir, así que revisa los documentos del GCM para completar tu configuración. Para obtener más información, consulta [GCM para Linux](https://aka.ms/gcmcore-linuxcredstores).

{% data reusables.gcm-core.next-time-you-clone %}

Una vez que te hayas autenticado con éxito, tus credenciales se almacenarán en tu sistema y se utilizarán cada que clones una URL de HTTPS. Git no requerirá que teclees tus credenciales en la línea de comandos nuevamente a menos de que cambies tus credenciales.

Para obtener más opciones para almacenar tus credenciales en Linux, consulta [Almacenamiento de credenciales](https://git-scm.com/book/en/v2/Git-Tools-Credential-Storage) en Pro Git.

{% endlinux %}

<br>

Para obtener más información o notificar problemas con GCM, consulta la documentación oficial de GCM en "[Administrador de credenciales de Git](https://github.com/GitCredentialManager/git-credential-manager)".
