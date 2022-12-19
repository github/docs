---
title: Instalar GitHub Desktop
shortTitle: Installation
intro: Puedes instalar GitHub Desktop en sistemas operativos Windows o macOS compatibles.
redirect_from:
  - /desktop/getting-started-with-github-desktop/installing-github-desktop
  - /desktop/installing-and-configuring-github-desktop/installing-github-desktop
versions:
  fpt: '*'
ms.openlocfilehash: 4947bff541682887817198c714e7e78bff2cfc9f
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882783'
---
## Acerca de la instalación de {% data variables.product.prodname_desktop %}

Puedes instalar {% data variables.product.prodname_desktop %} en los sistemas operativos compatibles, lo cual incluye acutalmente las {% data variables.desktop.mac-osx-versions %} y {% data variables.desktop.windows-versions %}. Si tienes una cuenta en {% data variables.product.prodname_dotcom %} o en {% data variables.product.prodname_enterprise %}, puedes conectarla a {% data variables.product.prodname_desktop %}. Para obtener más información sobre cómo crear una cuenta, consulta "[Registro para obtener una nueva cuenta de {% data variables.product.prodname_dotcom %}](/articles/signing-up-for-a-new-github-account/)" o ponte en contacto con tu administrador del sitio de {% data variables.product.prodname_enterprise %}.

{% windows %}

Si eres un administrador de red, puedes desplegar {% data variables.product.prodname_desktop %} en las computadoras con Windows en una red que se administre con Active Directory si utilizas el archivo de paquete de instalador para Windows (`.msi`) con la Política de grupo o con otro sistema de instalación remoto.

El paquete de instalación de Windows extrae el instalador independiente (`.exe`) y configura a Windows para instalar {% data variables.product.prodname_desktop %} en la siguiente ocasión que el usuario inicie sesión en su estación de trabajo. Los usuarios deben tener permisos para instalar {% data variables.product.prodname_desktop %} en su directorio de usuario.

Si un usuario ejecuta el paquete de instalación en Windows de {% data variables.product.prodname_desktop %} directamente, para completar la instalación, el usuario debe salir de su sesión en su estación de trabajo y volverse a firmar.

{% endwindows %}

## Descargar e instalar {% data variables.product.prodname_desktop %}

{% mac %}

Puedes instalar {% data variables.product.prodname_desktop %} en {% data variables.desktop.mac-osx-versions %}.

{% data reusables.desktop.download-desktop-page %}
2. Haz clic en **Descargar para macOS**.
  ![El botón de Descargar para macOS](/assets/images/help/desktop/download-for-mac.png)
3. En la carpeta `Downloads` del equipo, haz doble clic en el archivo ZIP de **{% data variables.product.prodname_desktop %}** .
  ![El archivo GitHubDesktop.zip](/assets/images/help/desktop/mac-zipfile.png)
4. Una vez que se descomprima el archivo, haz doble clic en **{% data variables.product.prodname_desktop %}** .
5. {% data variables.product.prodname_desktop %} se lanzará después de que se complete la instalación.

{% endmac %}

{% windows %}

Puedes instalar {% data variables.product.prodname_desktop %} en {% data variables.desktop.windows-versions %}.

{% warning %}

**Advertencia**: Debes tener un sistema operativo de 64 bits para ejecutar {% data variables.product.prodname_desktop %}.

{% endwarning %}

{% data reusables.desktop.download-desktop-page %}
2. Haz clic en **Descargar para Windows**.
  ![El botón de Descargar para Windows](/assets/images/help/desktop/download-for-windows.png)
3. En la carpeta `Downloads` del equipo, haz doble clic en el archivo de configuración de **{% data variables.product.prodname_desktop %}** .
  ![El archivo GitHubDesktopSetup](/assets/images/help/desktop/windows-githubdesktopsetup.png)
4. {% data variables.product.prodname_desktop %} se lanzará después de que se complete la instalación.

{% endwindows %}
