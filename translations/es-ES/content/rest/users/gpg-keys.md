---
title: Claves GPG
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0781b20628b48b9ca5d411ead6f3ddf1bcd1c6d4
ms.sourcegitcommit: 96bbb6b8f3c9172209d80cb1502017ace3019807
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147879437'
---
## Acerca de la API de claves GPG de usuario

Los datos que se devuelven en el campo de respuesta de `public_key` no son una clave con formato GPG. Cuando un usuario carga una llave GPG, se interpreta y la llave pública criptográfica se extrae y se almacena. Esta llave criptográfica es lo que devuelven las API en esta página. Esta llave no es apta para utilizarse directamente con programas como GPG.

{% data reusables.user-settings.user-api %}
