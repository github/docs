---
title: Actualizar credenciales desde la Keychain OSX
intro: 'Necesitarás actualizar tus credenciales guardadas en el asistente `git-credential-osxkeychain` si cambias tu{% ifversion not ghae %} nombre de usuario, contraseña o{% endif %} token de acceso personal en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-osx-keychain
  - /github/using-git/updating-credentials-from-the-macos-keychain
  - /github/getting-started-with-github/updating-credentials-from-the-macos-keychain
  - /github/getting-started-with-github/getting-started-with-git/updating-credentials-from-the-macos-keychain
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: macOS Keychain credentials
ms.openlocfilehash: ce2e225bcff1aca0c034e564fe3233e5f9cb68d2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135810'
---
{% tip %}

**Nota:** La actualización de credenciales desde Llaveros de macOS solo se aplica a los usuarios que han configurado manualmente un PAT mediante el asistente `osxkeychain` integrado en macOS. 

En su lugar, se recomienda [configurar SSH](/articles/generating-an-ssh-key) o actualizar al [Administrador de credenciales de Git](/get-started/getting-started-with-git/caching-your-github-credentials-in-git) (GCM). El GCM puede administrar la autenticación en tu nombre (sin utilizar más PAT manuales) incluyendo la 2FA (autenticación bifactorial).

{% endtip %}

{% data reusables.user-settings.password-authentication-deprecation %}

## Actualizar tus credenciales a través de Keychain Access (Acceso keychain)

1. Da clic en el icono de Spotlight (lupa) en el costado derecho de la barra de menú. Escriba `Keychain access` y presione la tecla Entrar para iniciar la aplicación.
   ![Barra de búsqueda de Spotlight](/assets/images/help/setup/keychain-access.png)
2. En Acceso a Llaveros, busque **{% data variables.command_line.backticks %}** .
3. Busque la entrada "Contraseña de Internet" para `{% data variables.command_line.backticks %}`.
4. Edita o borra la entrada según corresponda.

## Eliminar tus credenciales a través de la línea de comando

A través de la línea de comandos, puedes utilizar el ayudante de credenciales directamente para borrar la entrada de keychain.

```shell
$ git credential-osxkeychain erase
host={% data variables.command_line.codeblock %}
protocol=https
> <em>[Press Return]</em>
```

Si se realiza correctamente, no se imprimirá nada. Para comprobar que funciona, pruebe y clone un repositorio privado de {% data variables.product.product_location %}. Si se te pide una contraseña, la entrada de keychain se borró.

## Información adicional

- "[Almacenamiento en caché de las credenciales de {% data variables.product.prodname_dotcom %} en Git](/github/getting-started-with-github/caching-your-github-credentials-in-git/)"
