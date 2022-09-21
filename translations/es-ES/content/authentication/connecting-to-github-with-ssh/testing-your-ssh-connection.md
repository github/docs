---
title: Probar tu conexión SSH
intro: 'Después de que hayas configurado tu llave SSH y la hayas agregado a tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, podrás probar tu conexión.'
redirect_from:
  - /articles/testing-your-ssh-connection
  - /github/authenticating-to-github/testing-your-ssh-connection
  - /github/authenticating-to-github/connecting-to-github-with-ssh/testing-your-ssh-connection
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Test your SSH connection
ms.openlocfilehash: 7724c5939b319748f270db2f190a6df825b0bb4f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146338977'
---
Antes de probar tu conexión SSH, debes haber hecho lo siguiente:
- [Comprobado para las claves SSH existentes](/articles/checking-for-existing-ssh-keys)
- [Generado una clave SSH nueva](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Agregado una clave SSH nueva a la cuenta de GitHub](/articles/adding-a-new-ssh-key-to-your-github-account)

Cuando pruebes tu conexión, tendrás que autenticar esta acción utilizando tu contraseña, que es la contraseña de clave SSH que ya creaste. Para más información sobre cómo trabajar con frases de contraseña de clave SSH, vea ["Trabajo con frases de contraseña de clave SSH"](/articles/working-with-ssh-key-passphrases).

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Escriba lo siguiente:
  ```shell
  $ ssh -T git@{% data variables.command_line.codeblock %}
  # Attempts to ssh to {% data variables.product.product_name %}
  ```

  Puedes ver una advertencia como la siguiente:

  ```shell
  > The authenticity of host '{% data variables.command_line.codeblock %} (IP ADDRESS)' can't be established.
  > RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
  > Are you sure you want to continue connecting (yes/no)?
  ```

3. Compruebe que la huella digital del mensaje que ve coincide con {% ifversion fpt or ghec %}[la huella digital de clave pública de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/githubs-ssh-key-fingerprints){% else %} a huella digital de clave pública de la empresa{% endif %}. En caso afirmativo, escriba `yes`:
  ```shell
  > Hi <em>username</em>! You've successfully authenticated, but GitHub does not
  > provide shell access.
  ```

  {% linux %}

  Puede aparecer este mensaje de error:
  ```shell
  ...
  Agent admitted failure to sign using the key.
  debug1: No more authentication methods to try.
  Permission denied (publickey).
  ```

  Se trata de un problema conocido con determinadas distribuciones de Linux. Para más información, vea ["Error: el agente ha admitido un error al firmar"](/articles/error-agent-admitted-failure-to-sign).

  {% endlinux %}

   {% note %}

   **Nota:** El comando remoto debe salir con el código 1.

   {% endnote %}

4. Comprueba que el mensaje resultante contenga tu nombre de usuario. Si recibe un mensaje de "permiso denegado", vea ["Error: Permiso denegado (clave_pública)"](/articles/error-permission-denied-publickey).
