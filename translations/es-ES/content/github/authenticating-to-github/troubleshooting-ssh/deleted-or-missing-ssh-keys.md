---
title: Claves SSH eliminadas o faltantes
intro: 'Como precaución de seguridad, {% data variables.product.prodname_dotcom %} elimina automáticamente las claves SSH que no se han usado durante un año.'
redirect_from:
  - /articles/deleted-or-missing-ssh-keys
  - /github/authenticating-to-github/deleted-or-missing-ssh-keys
versions:
  free-pro-team: '*'
topics:
  - SSH
---

{% data variables.product.prodname_dotcom %} elimina automáticamente las claves SSH inactivas para mantener la seguridad de las cuentas, por ejemplo, cuando alguien deja el trabajo o pierde su computadora.

Puedes verificar si has usado o no una clave SSH durante un año revisando el registro de seguridad de tu cuenta. Para obtener más información, consulta "[Revisar tu registro de seguridad](/articles/reviewing-your-security-log/)".

Una vez que tu clave SSh se ha eliminado, debes generar una nueva clave SSH y asociarla con tu cuenta. Para obtener más información, consulta "[Generar una nueva clave SSH y agregarla al ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)" y "[Agregar una nueva clave SSH a tu cuenta GitHub](/articles/adding-a-new-ssh-key-to-your-github-account/)".
