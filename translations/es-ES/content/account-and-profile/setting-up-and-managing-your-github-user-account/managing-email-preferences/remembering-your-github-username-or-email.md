---
title: Recordar tu nombre de usuario o correo electrónico de GitHub
intro: Are you signing in to {% data variables.product.product_location %} for the first time in a while? If so, welcome back! If you can't remember the username for your personal account on {% data variables.product.product_name %}, you can try these methods for remembering it.
redirect_from:
- /articles/oh-noes-i-ve-forgotten-my-username-email
- /articles/oh-noes-i-ve-forgotten-my-username-or-email
- /articles/remembering-your-github-username-or-email
- /github/setting-up-and-managing-your-github-user-account/remembering-your-github-username-or-email
- /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/remembering-your-github-username-or-email
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
- Notifications
shortTitle: Find your username or email
ms.openlocfilehash: 79cb3ba65390e384272540bd32a1ec9e598517f4
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 05/17/2022
ms.locfileid: "145092268"
---
{% mac %}

## <a name="-data-variablesproductprodname_desktop--users"></a>Usuarios {% data variables.product.prodname_desktop %}

1. En el menú **GitHub Desktop**, haga clic en **Preferencias**.
2. En la ventana Preferences (Preferencias), comprueba lo siguiente:
    - Para ver el nombre de usuario de {% data variables.product.product_name %}, haga clic en **Cuentas**.
    - Para ver el correo electrónico de Git, haga clic en **Git**. Tenga en cuenta que no se garantiza que este correo electrónico sea el [correo electrónico principal {% data variables.product.product_name %}](/articles/changing-your-primary-email-address).

{% endmac %}

{% windows %}

## <a name="-data-variablesproductprodname_desktop--users"></a>Usuarios {% data variables.product.prodname_desktop %}

1. En el menú **Archivo**, haga clic en **Opciones**.
2. En la ventana Options (Opciones), comprueba lo siguiente:
    - Para ver el nombre de usuario de {% data variables.product.product_name %}, haga clic en **Cuentas**.
    - Para ver el correo electrónico de Git, haga clic en **Git**. Tenga en cuenta que no se garantiza que este correo electrónico sea el [correo electrónico principal {% data variables.product.product_name %}](/articles/changing-your-primary-email-address).
  
{% endwindows %}

## <a name="finding-your-username-in-your-username-configuration"></a>Búsqueda del nombre de usuario en la configuración de `user.name`

Durante la configuración, es posible que haya [establecido el nombre de usuario en Git](/github/getting-started-with-github/setting-your-username-in-git). En tal caso, puedes revisar el valor de este parámetro de configuración:

```shell
$ git config user.name
# View the setting
<em>YOUR_USERNAME</em>
```

## <a name="finding-your-username-in-the-url-of-remote-repositories"></a>Encontrar tu nombre de usuario en la URL de repositorios remotos

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
## <a name="further-reading"></a>Información adicional

- "[Comprobación de la dirección de correo electrónico](/articles/verifying-your-email-address)" {% endif %}
