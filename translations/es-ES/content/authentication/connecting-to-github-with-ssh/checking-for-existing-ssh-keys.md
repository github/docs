---
title: Comprobar tus claves SSH existentes
intro: 'Antes de generar una clave SSH, puedes comprobar si tienes alguna clave SSH existente.'
redirect_from:
  - /articles/checking-for-existing-ssh-keys
  - /github/authenticating-to-github/checking-for-existing-ssh-keys
  - /github/authenticating-to-github/connecting-to-github-with-ssh/checking-for-existing-ssh-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Check for existing SSH key
ms.openlocfilehash: 4487e44b1cbba7038364e92f3194d5c3c06c505b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409111'
---
## Acerca de la claves SSH

Puedes usar SSH para realizar operaciones de Git en repositorios en {% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %}. Para obtener más información, consulte [Acerca de SSH](/authentication/connecting-to-github-with-ssh/about-ssh).

Si tienes una clave SSH existente, puedes usar la clave para autenticar las operaciones de Git a través de SSH.

## Comprobar tus claves SSH existentes

Antes de generar una nueva clave SSH, debes comprobar la máquina local en busca de claves existentes.

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Escriba `ls -al ~/.ssh` para ver si hay claves SSH existentes.

  ```shell
  $ ls -al ~/.ssh
  # Lists the files in your .ssh directory, if they exist
  ```

3. Comprueba la lista de directorio para ver si ya tiene una clave SSH pública. De manera predeterminada, {% ifversion ghae %}el nombre de archivo de una clave pública para {% data variables.product.product_name %} es *id_rsa.pub*.{% else %}los nombres de archivo de las claves públicas admitidas para {% data variables.product.product_name %} son uno de los siguientes.
    - *id_rsa.pub*
    - *id_ecdsa.pub*
    - *id_ed25519.pub*{% endif %}

  {% tip %}

  **Sugerencia**: Si recibe un error que indica que *~/.ssh* no existe, no tiene un par de claves SSH en la ubicación predeterminada. Puedes crear un par de llaves SSH nuevas en el siguiente paso.

  {% endtip %}

4. Puedes ya sea generar una llave SSH nueva o cargar una existente.
    - Si no tienes un par de llaves pública y privada compatibles o si no quieres utilizar cualquiera que esté disponible, genera una llave SSH nueva.
    - Si ve un par de claves pública y privada existente (por ejemplo, *id_rsa.pub* y *id_rsa*) que le gustaría usar para conectarse a {% data variables.product.product_name %}, puede agregar la clave a ssh-agent.

      Para más información sobre la generación de una nueva clave SSH o la adición de una clave existente al agente ssh, vea "[Generación de una nueva clave SSH y agregación al agente ssh](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".
