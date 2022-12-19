---
title: Claves SSH eliminadas o faltantes
intro: 'Como precaución de seguridad, {% data variables.product.prodname_dotcom %} elimina automáticamente las claves SSH que no se han usado durante un año.'
redirect_from:
  - /articles/deleted-or-missing-ssh-keys
  - /github/authenticating-to-github/deleted-or-missing-ssh-keys
  - /github/authenticating-to-github/troubleshooting-ssh/deleted-or-missing-ssh-keys
versions:
  fpt: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Deleted or missing SSH keys
ms.openlocfilehash: aa26a5bf39db3f41aa3c3aa01f59c392a42f467f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '145091748'
---
{% data variables.product.prodname_dotcom %} elimina automáticamente las claves SSH inactivas para mantener la seguridad de las cuentas, por ejemplo, cuando alguien deja el trabajo o pierde su computadora.

Puedes verificar si has usado o no una clave SSH durante un año revisando el registro de seguridad de tu cuenta. Para más información, vea "[Revisión del registro de seguridad](/articles/reviewing-your-security-log/)".

Una vez que tu clave SSh se ha eliminado, debes generar una nueva clave SSH y asociarla con tu cuenta. Para más información, vea "[Generación de una nueva clave SSH y agregación al agente ssh](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)" y "[Adición de una nueva clave SSH a la cuenta de GitHub](/articles/adding-a-new-ssh-key-to-your-github-account/)".
