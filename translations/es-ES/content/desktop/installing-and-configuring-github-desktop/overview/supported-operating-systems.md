---
title: Sistemas operativos admitidos
intro: 'Puedes utilizar {% data variables.product.prodname_desktop %} en cualquier sistema operativo compatible.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /desktop/getting-started-with-github-desktop/supported-operating-systems
  - /desktop/installing-and-configuring-github-desktop/supported-operating-systems
versions:
  fpt: '*'
shortTitle: Supported OS
ms.openlocfilehash: 13e148ccf8e254c4e40f9e20ad6c5af083e21d8c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117274'
---
## Acerca de los sistemas operativos compatibles

Estos son los sistemas operativos compatibles para {% data variables.product.prodname_desktop %}.
- {% data variables.desktop.mac-osx-versions %}
- {% data variables.desktop.windows-versions %}. Debes tener un sistema operativo de 64 bits para ejecutar {% data variables.product.prodname_desktop %}.

## Solución de problemas en macOS
Si te encuentras con algún problema al utilizar {% data variables.product.prodname_desktop %} en macOS, aquí tienes algunas resoluciones que puedes intentar. Para más información, vea [`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md).

### error `The username or passphrase you entered is not correct` después de iniciar sesión en la cuenta

Este error puede ocurrir cuando {% data variables.product.prodname_desktop %} no puede acceder a tus credenciales almacenadas en la cadena de llaves.

Para solucionar los problemas de este error, sigue estos pasos.

1. Abre la app de "Acceso a la cadena de llaves".
2. Haga clic con el botón derecho en **login** y, a continuación, haga clic en **Lock Keychain "login"** .
  ![La opción "login" en "Lock Keychain"](/assets/images/help/desktop/mac-lock-keychain.png)
3. Haga clic con el botón secundario en **login** y, a continuación, haga clic en **Unlock Keychain "login"** . Sigue las instrucciones en la pantalla para terminar de desbloquear el "inicio de sesión" de la cadena de llaves
  ![La opción "login" en "Unlock Keychain"](/assets/images/help/desktop/mac-unlock-keychain.png)
4. Vuelve a autenticarte en tu cuenta en {% data variables.product.prodname_dotcom %} o en {% data variables.product.prodname_enterprise %}.

### error `Could not create temporary directory: Permission denied` después de comprobar si hay actualizaciones

Este error puede deberse a que faltan permisos para el directorio `~/Library/Caches/com.github.GitHubClient.ShipIt`. {% data variables.product.prodname_desktop %} utiliza este directorio para crear y desempacar archivos temporales como parte de la actualización de la aplicación.

Para solucionar los problemas de este error, sigue estos pasos.

1. Cierra {% data variables.product.prodname_desktop %}.
2. Abra "Finder" y vaya a `~/Library/Caches/`.
3. Haga clic con el botón secundario en `com.github.GitHubClient.ShipIt` y, a continuación, haga clic en **Get Info**.
4. Haga clic en la flecha hacia la izquierda de "Sharing & Permissions".
5. Si en el privilegio a la derecha de la cuenta de usuario no aparece "Read & Write", haga clic en el texto y, a continuación, haga clic en **Read & Write**.
  ![Las opciones "Sharing & Permissions"](/assets/images/help/desktop/mac-adjust-permissions.png)
6. Abre {% data variables.product.prodname_desktop %} y verifica si hay actualizaciones.

## Solución de problemas en Windows
Si te encuentras con algún problema al utilizar {% data variables.product.prodname_desktop %} en Windows, aquí tienes algunas resoluciones que puedes intentar. Para más información, vea [`known-issues`](https://github.com/desktop/desktop/blob/development/docs/known-issues.md).

### `The revocation function was unable to check revocation for the certificate.` con error

Este error puede suscitarse si estás utilizando {% data variables.product.prodname_desktop %} en una red corporativa que blqouea a Windows para verificar el estado de revocación de un certificado.

Para solucionar este problema, contacta al administrador de tu sistema.

### error `git clone failed` al clonar un repositorio configurado con redireccionamiento de carpetas

{% data variables.product.prodname_desktop %} no es compatible con repositorios que se hayan configurado con la Redirección de Carpetas.

### `cygheap base mismatch detected` con error

Este error se suscita cuando se habilita el ASLR mandatorio. Habilitar el ASLR Mandatorio afecta la librería central de MSYS2, de la cual depende {% data variables.product.prodname_desktop %} para emular la bifurcación de procesos.

Para solucionar este error, deshabilite el ASLR obligatorio o permita explícitamente todos los archivos ejecutables en `<Git>\usr\bin` que dependen de MSYS2.
