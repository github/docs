---
title: Recordar tu nombre de usuario o correo electrónico de GitHub
intro: '¿Vas a iniciar sesión en {% data variables.product.product_location %} por primera vez después de un tiempo? Si es así, ¡bienvenido de nuevo! Si no puedes recordar el nombre de usuario de tu cuenta personal en {% data variables.product.product_name %}, puedes probar estos métodos para recordarlo.'
redirect_from:
  - /articles/oh-noes-i-ve-forgotten-my-username-email
  - /articles/oh-noes-i-ve-forgotten-my-username-or-email
  - /articles/remembering-your-github-username-or-email
  - /github/setting-up-and-managing-your-github-user-account/remembering-your-github-username-or-email
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/remembering-your-github-username-or-email
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/remembering-your-github-username-or-email
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Find your username or email
ms.openlocfilehash: e65ba973a5ca7865aa642ce5d64f8efa0a996742
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145165317'
---
{% mac %}

## Usuarios {% data variables.product.prodname_desktop %}

1. En el menú **GitHub Desktop**, haga clic en **Preferencias**.
2. En la ventana Preferences (Preferencias), comprueba lo siguiente:
    - Para ver el nombre de usuario de {% data variables.product.product_name %}, haga clic en **Cuentas**.
    - Para ver el correo electrónico de Git, haga clic en **Git**. Tenga en cuenta que no se garantiza que este correo electrónico sea el [correo electrónico principal {% data variables.product.product_name %}](/articles/changing-your-primary-email-address).

{% endmac %}

{% windows %}

## Usuarios {% data variables.product.prodname_desktop %}

1. En el menú **Archivo**, haga clic en **Opciones**.
2. En la ventana Options (Opciones), comprueba lo siguiente:
    - Para ver el nombre de usuario de {% data variables.product.product_name %}, haga clic en **Cuentas**.
    - Para ver el correo electrónico de Git, haga clic en **Git**. Tenga en cuenta que no se garantiza que este correo electrónico sea el [correo electrónico principal {% data variables.product.product_name %}](/articles/changing-your-primary-email-address).
  
{% endwindows %}

## Búsqueda del nombre de usuario en la configuración de `user.name`

Durante la configuración, es posible que haya [establecido el nombre de usuario en Git](/github/getting-started-with-github/setting-your-username-in-git). En tal caso, puedes revisar el valor de este parámetro de configuración:

```shell
$ git config user.name
# View the setting
<em>YOUR_USERNAME</em>
```

## Encontrar tu nombre de usuario en la URL de repositorios remotos

Si tienes alguna copia local de los repositorios personales que has creado o bifurcado, puedes verificar la URL del repositorio remoto.

{% tip %}

**Sugerencia**: Este método solo funciona si tiene un repositorio original o una bifurcación propia del repositorio de otro usuario. Si clonas el repositorio de alguna otra persona, se mostrará su nombre de usuario en lugar del tuyo. Del mismo modo, los repositorios de la organización mostrarán el nombre de la organización en lugar del de un usuario particular en la URL remota.

{% endtip %}

```shell
$ cd <em>YOUR_REPOSITORY</em>
# Change directories to the initialized Git repository
$ git remote -v
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (fetch)
origin  https://{% data variables.command_line.codeblock %}/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.git (push)
```

El nombre de usuario es lo que sigue inmediatamente a `https://{% data variables.command_line.backticks %}/`.

{% ifversion fpt or ghec %}
## Información adicional

- "[Comprobación de la dirección de correo electrónico](/articles/verifying-your-email-address)" {% endif %}
