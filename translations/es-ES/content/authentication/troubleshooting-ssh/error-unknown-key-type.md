---
title: 'Error: Unknown key type'
intro: 'Este error significa que el tipo de llave SSH que utilizaste no se reconoció o no es compatible con tu cliente SSH. '
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
redirect_from:
  - /github/authenticating-to-github/error-unknown-key-type
  - /github/authenticating-to-github/troubleshooting-ssh/error-unknown-key-type
ms.openlocfilehash: 83bf8714255a4d8f028beb73fd5c8fbcdbb0ef52
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065905'
---
## Acerca del error `unknown key type`

Cuando generas una llave SSH nueva, es posible que recibas un error de `unknown key type` si tu cliente SSH no es compatible con el tipo de llave que especificaste.{% mac %}Para resolver esta incidencia en macOS, puedes actualizar tu cliente SSH o instalar un cliente SSH nuevo.

## Prerrequisitos

Debes tener Homebrew instalado. Para obtener más información, consulta la [guía de instalación](https://docs.brew.sh/Installation) en la documentación de Homebrew.

## Resolver el problema

{% warning %}

**Advertencia:** Si instalas OpenSSH, tu equipo no podrá recuperar las frases de contraseña que estén almacenadas en la cadena de claves de Apple. Necesitarás ingresar tu contraseña o interactuar con tu llave de seguridad de hardware cada vez que te autentiques con SSH en {% data variables.product.prodname_dotcom %} u otro servicio web.

Si eliminas a OpenSSh, las paráfrasis que se almacenan en tu keychain se podrán recuperar nuevamente. Para quitar OpenSSH, escribe el comando `brew uninstall openssh` en el Terminal.

{% endwarning %}

1. Abre Terminal.
2. Escriba el comando `brew install openssh`.
3. Sal y vuelve a abrir la terminal.
4. Intenta llevar a cabo el procedimiento para generar una llave SSH nuevamente. Para obtener más información, consulta "[Generación de una nueva clave SSH y adición a ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key)".

{% endmac %}{% linux %}Para resolver este problema en Linux, utiliza el administrador de paquetes para tu distribución de Linux para instalar una versión nueva de OpenSSH o compila una versión nueva desde el orígen. Si instalas una versión diferente de OpenSSH, la capacidad de otras aplicaciones para autenticarse por SSH puede verse afectada. Para obtener más información, revisa los documentos para tu distribución.{% endlinux %}
