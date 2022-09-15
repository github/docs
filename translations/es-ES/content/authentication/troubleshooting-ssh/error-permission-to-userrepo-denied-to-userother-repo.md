---
title: 'Error: Permiso de usuario/repo denegado al usuario/otro repo'
intro: 'Este error significa que la clave con la que estás subiendo se encuentra conectada con otro repositorio como llave de implementación, y no tiene acceso al repositorio al que estás intentado subir.'
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-user-other-repo
  - /articles/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-to-userrepo-denied-to-userother-repo
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied other-repo
ms.openlocfilehash: 4d4898e947338e39c5ade86b5ea0a71f54f36f03
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145091741'
---
Para corregirlo, quita la clave de implementación del repositorio y, en su lugar, [agrega la clave a tu cuenta personal](/articles/adding-a-new-ssh-key-to-your-github-account).

Si la clave que usa está pensada para ser una clave de implementación, vea [nuestra guía sobre la implementación de claves](/guides/managing-deploy-keys) para más información.
