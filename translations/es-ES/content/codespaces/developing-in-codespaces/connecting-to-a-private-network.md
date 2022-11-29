---
title: Conectarse a una red privada
intro: 'Puedes conectar {% data variables.product.prodname_github_codespaces %} a los recursos de una red privada, incluyendo los registros de paquetes, servidores de licencias y bases de datos en las instalaciones.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
ms.openlocfilehash: 92b8f2b9ea438a4cc799aec1969ff6773f90c298
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159924'
---
## Acerca de la creación de redes en los codespaces

Predeterminadamente, tus codespaces tienen acceso a todos los recursos en el internet público, incluyendo los administradores de paquetes, servidores de licencias, bases de datos y API de plataforma en la nube, pero no tienen acceso a aquellos de las redes privadas.

## Conectar los recursos a una red privada

Actualmente hay dos métodos de acceso a los recursos en una red privada dentro de {% data variables.product.prodname_github_codespaces %}.
- Con una extensión {% data variables.product.prodname_cli %} para configurar la máquina local como puerta de enlace a recursos remotos.
- Mediante una VPN. 

### Mediante la extensión de la CLI de GitHub para acceder a recursos remotos

{% note %}

**Nota**: La extensión {% data variables.product.prodname_cli %} se encuentra actualmente en versión beta pública y está sujeta a cambios. 

{% endnote %}

La extensión {% data variables.product.prodname_cli %} permite crear un puente entre un codespace y la máquina local, de modo que el codespace pueda acceder a cualquier recurso remoto al que se pueda acceder desde la máquina. El codespace usa la máquina local como puerta de enlace de red para llegar a esos recursos. Para obtener más información, vea "[Uso de {% data variables.product.prodname_cli %} para acceder a recursos remotos](https://github.com/github/gh-net#codespaces-network-bridge)".

   
   

### Utilizar una VPN para acceder a los recursos detrás de una red privada

Como alternativa a la extensión {% data variables.product.prodname_cli %}, puede usar una VPN para acceder a los recursos detrás de una red privada desde el espacio de código.

Se recomiendan herramientas de VPN como [OpenVPN](https://openvpn.net/) para acceder a los recursos de una red privada. Para obtener más información, consulta "[Uso del cliente OpenVPN desde {% data variables.product.prodname_github_codespaces %}](https://github.com/codespaces-contrib/codespaces-openvpn)".

También hay muchas soluciones de terceros que, si bien {% data variables.product.prodname_dotcom %} no las respalda explícitamente, han proporcionado ejemplos de cómo integrarse con los {% data variables.product.prodname_github_codespaces %}.

Estas soluciones de terceros incluyen:

- [Tailscale](https://tailscale.com/kb/1160/github-codespaces/)

### Poner los recursos privados en listas de IP permitidas para los codespaces

Si bien {% data variables.product.prodname_dotcom %} publica rangos de IP para diversos productos en su API Meta, las IP de los codespaces se asignan dinámicamente, lo cual significa que no hay garantía de que tu Codespace tenga la misma dirección IP todos los días. Desalentamos enormemente que los usuarios pongan todo un rango de IP en una lista de IP permitidas, ya que esto otorgaría un acceso demasiado amplio a todos ellos (incluyendo a los usuarios que no están afiliados con tus codespaces).

Para más información sobre Meta API, vea "[Meta](/rest/reference/meta)".

## Restringir el acceso al internet público

En la actualidad, no hay forma de restringir los codespaces para que no accedan al internet público ni de restringir a los usuarios autenticados adecuadamente para que no accedan a un puerto reenviado.

Para obtener más información sobre cómo proteger los codespaces, consulta "[Seguridad en {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/security-in-github-codespaces)."
