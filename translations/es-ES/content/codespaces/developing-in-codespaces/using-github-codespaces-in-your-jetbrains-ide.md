---
title: Uso de GitHub Codespaces en el IDE de JetBrains
shortTitle: JetBrains IDEs
intro: Puedes usar la puerta de enlace de JetBrains para conectarte al codespace y trabajar en tu IDE de JetBrains favorito.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Developer
ms.openlocfilehash: f522bf481e932f9735560ee4a1fec21944ced2e7
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160323'
---
{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

## Acerca del {% data variables.product.prodname_codespaces %} en IDE de JetBrains

Si usas un IDE de JetBrains para trabajar en el código, puedes aprovechar las ventajas de trabajar en un codespace. Para ello, usa la aplicación de puerta de enlace de JetBrains.

Después de instalar la puerta de enlace de JetBrains, puedes establecer JetBrains como editor predeterminado y, después, siempre que abras un codespace desde {% data variables.product.prodname_dotcom_the_website %} se iniciará la puerta de enlace de JetBrains para permitirte elegir el IDE de JetBrains y conectarse al codespace.

{% note %}

**Nota**: Solo los codespaces existentes están disponibles en la puerta de enlace de JetBrains. Puedes crear codespaces en {% data variables.product.prodname_dotcom_the_website %} o utilizando la {% data variables.product.prodname_cli %}. Para obtener más información, consulta "[Creación de un codespace para un repositorio](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)".

{% endnote %}

### Proceso de conexión de desarrollo remoto de JetBrains

El proceso básico que hay detrás del uso de un codespace en el IDE de JetBrains es el siguiente.

* En la aplicación de puerta de enlace de JetBrains, selecciona uno de los codespaces activos o detenidos. 
* Después, elige el IDE de JetBrains que quieras usar. 
* Luego, el IDE de JetBrains seleccionado se descarga en la máquina virtual remota que hospeda el codespace y el código fuente.
* La aplicación cliente ligera de JetBrains se descarga en el equipo local y se inicia.
* La aplicación cliente se conecta al IDE de back-end completo.
* Puedes trabajar en el código de la aplicación cliente de la misma manera que lo harías en un entorno local.

## Requisitos previos

Para trabajar en un codespace en un IDE de JetBrains, necesitas lo siguiente:

* Una licencia válida de JetBrains
* La aplicación de puerta de enlace de JetBrains
* {% data variables.product.prodname_cli %}, versión 2.18.0 o posterior 
* Un codespace existente que ejecute un servidor SSH

### Licencia de JetBrains

Debes tener una licencia para al menos uno de los IDE de JetBrains admitidos a fin de conectarse a un codespace desde la puerta de enlace de JetBrains.

### Puerta de enlace de JetBrains

Puedes instalar y actualizar la puerta de enlace de JetBrains desde la aplicación de Cuadro de herramientas de JetBrains.

1. Descarga e instala el [Cuadro de herramientas de JetBrains](https://www.jetbrains.com/toolbox-app).
1. Abre el Cuadro de herramientas de JetBrains.
1. Busca **Puerta de enlace** en la lista de herramientas disponibles y haz clic en **Instalar**.

   ![Captura de pantalla del Cuadro de herramientas de JetBrains](/assets/images/help/codespaces/jetbrains-toolbox.png)

### {% data variables.product.prodname_cli %}

El complemento {% data variables.product.prodname_github_codespaces %} para la puerta de enlace de JetBrains requiere que hayas instalado y configurado la {% data variables.product.prodname_cli %}, versión 2.18.0 o posterior, antes de abrir un codespace desde la puerta de enlace de JetBrains.

Usa este comando para comprobar la versión de la {% data variables.product.prodname_cli %}:

```shell{:copy}
gh --version
```

Para obtener más información, consulta "[Acerca de la CLI de GitHub](/github-cli/github-cli/about-github-cli)".

### Codespace que ejecuta un servidor SSH

Debes tener un codespace existente al que conectarse. {% data reusables.codespaces.ways-to-create-a-codespace %} Para obtener más información, consulta "[Creación de un codespace para un repositorio](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)".

{% data reusables.codespaces.ssh-server-installed %}

Para obtener más información sobre el archivo `devcontainer.json` y la imagen de contenedor predeterminada, consulta "[Introducción a los contenedores de desarrollo](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

{% note %}

**Nota**: Para obtener ayuda a fin de conectarse al codespace mediante SSH, consulta "[Solución de problemas de clientes de {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients?tool=jetbrains#ssh-connection-issues)".

{% endnote %}

## Configuración de la Puerta de enlace de JetBrains

La primera vez que uses la Puerta de enlace de JetBrains para {% data variables.product.prodname_github_codespaces %}, debes instalar el complemento de {% data variables.product.prodname_codespaces %}. También debes permitir que la Puerta de enlace de JetBrains acceda a {% data variables.product.prodname_dotcom_the_website %} mediante la cuenta de {% data variables.product.prodname_dotcom %}. 

1. Abre la aplicación de Puerta de enlace de JetBrains.
1. En **Instalar más proveedores**, haz clic en el vínculo **Instalar** para {% data variables.product.prodname_github_codespaces %}.

   ![Captura de pantalla de la vista inicial de la Puerta de enlace de JetBrains](/assets/images/help/codespaces/jetbrains-gateway-initial-view.png)

1. Haz clic en **Conectar a codespace**.

   ![Captura de pantalla de la Puerta de enlace con el botón "Conectar a Codespace"](/assets/images/help/codespaces/jetbrains-gateway-connect.png)

1. En el cuadro de diálogo "Bienvenido a la Puerta de enlace de JetBrains", haz clic en **Iniciar sesión con {% data variables.product.prodname_dotcom %}** .

   ![Captura de pantalla del botón de inicio de sesión](/assets/images/help/codespaces/jetbrains-gateway-sign-in.png)

1. Haz clic en el icono situado junto al código único para copiarlo y, después, en el vínculo de inicio de sesión.

   ![Captura de pantalla del código de inicio de sesión único](/assets/images/help/codespaces/jetbrains-gateway-login-code.png)

1. Si no has iniciado sesión actualmente en {% data variables.product.prodname_dotcom %}, se muestra la página de inicio de sesión. 
   * Escribe la información y haz clic en **Iniciar sesión**.
   * Comprueba la autenticación, por ejemplo, escribiendo un código de autenticación en dos fases.
1. En la página "Activación del dispositivo", pega el código copiado y haz clic en **Continuar**.
1. Si perteneces a organizaciones, se muestra la página "Inicio de sesión único en tus organizaciones". Haz clic en **Autorizar** junto a las organizaciones a las que quieres autorizar el acceso a la Puerta de enlace de JetBrains y, después, haz clic en **Continuar**.
1. En la página "Autorizar {% data variables.product.prodname_github_codespaces %} para JetBrains", haz clic en **Autorizar {% data variables.product.prodname_dotcom %}** .
1. Vuelve a la aplicación de Puerta de enlace de JetBrains y abre un codespace de la lista de codespaces activos o detenidos actualmente; consulta el paso 3 del procedimiento siguiente.

## Apertura de un codespace en el IDE de JetBrains

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

   La primera vez que te conectes a un codespace, el IDE de back-end se descargará en la máquina remota. Esta operación puede tardar unos minutos. La próxima vez que te conectes al mismo codespace, este paso no será necesario, lo que hace que el proceso de conexión sea más rápido. 

   Después, se inicia el IDE de back-end. De nuevo, este paso no será necesario en el futuro si vuelves a conectarte a un IDE de back-end que hayas dejado en ejecución. 
   
   Luego, se inicia la aplicación cliente.

## Información adicional

- "[Desarrollo en un codespace](/codespaces/developing-in-codespaces/developing-in-a-codespace)"
- "[Uso del complemento de {% data variables.product.prodname_github_codespaces %} para JetBrains](/codespaces/codespaces-reference/using-the-github-codespaces-plugin-for-jetbrains)"
- "[Uso de {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/using-github-copilot-in-github-codespaces)"
- "[Solución de problemas de clientes de {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients?tool=jetbrains)"
