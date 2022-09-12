---
title: Revisar tus claves SSH
intro: 'Para mantener tus credenciales seguras, debes auditar con frecuencia tus llaves SSH, llaves de despliegue y revisar las aplicaciones autorizadas que acceden a tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.'
redirect_from:
  - /articles/keeping-your-application-access-tokens-safe
  - /articles/keeping-your-ssh-keys-and-application-access-tokens-safe
  - /articles/reviewing-your-ssh-keys
  - /github/authenticating-to-github/reviewing-your-ssh-keys
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-ssh-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: 4f15ea8fd56994de4d9b30c21e6afb081e20a327
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878403'
---
Puedes eliminar las claves SSH no autorizadas (o posiblemente comprometidas) para garantizar que un atacante no tenga más acceso a tus repositorios. También puedes aprobar llaves SSH existentes que sean válidas.

{% mac %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. En la página de Parámetros SSH, anota las claves SSH asociadas a tu cuenta. En las que no reconozca o hayan quedado obsoletas, haga clic en **Eliminar**. Si hay claves SSH válidas que le gustaría conservar, haga clic en **Aprobar**.
    ![Lista de claves SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Nota:** Si va a auditar las claves SSH debido a una operación de Git incorrecta, la clave no comprobada que ha provocado el [error de auditoría de clave SSH](/articles/error-we-re-doing-an-ssh-key-audit) se resaltará en la lista de claves SSH.

  {% endtip %}

4. Abre Terminal.

{% data reusables.command_line.start_ssh_agent %}

6. Busca tu huella digital de llave pública y anótala. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. Las claves SSH de {% data variables.product.product_name %} *deben* coincidir con las mismas claves del equipo.

{% endmac %}

{% windows %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. En la página de Parámetros SSH, anota las claves SSH asociadas a tu cuenta. En las que no reconozca o hayan quedado obsoletas, haga clic en **Eliminar**. Si hay claves SSH válidas que le gustaría conservar, haga clic en **Aprobar**.
    ![Lista de claves SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Nota:** Si va a auditar las claves SSH debido a una operación de Git incorrecta, la clave no comprobada que ha provocado el [error de auditoría de clave SSH](/articles/error-we-re-doing-an-ssh-key-audit) se resaltará en la lista de claves SSH.

  {% endtip %}

4. Abra Git Bash. 

5. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}

6. Busca tu huella digital de llave pública y anótala. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. Las claves SSH de {% data variables.product.product_name %} *deben* coincidir con las mismas claves del equipo.

{% endwindows %}

{% linux %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. En la página de Parámetros SSH, anota las claves SSH asociadas a tu cuenta. En las que no reconozca o hayan quedado obsoletas, haga clic en **Eliminar**. Si hay claves SSH válidas que le gustaría conservar, haga clic en **Aprobar**.
    ![Lista de claves SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Nota:** Si va a auditar las claves SSH debido a una operación de Git incorrecta, la clave no comprobada que ha provocado el [error de auditoría de clave SSH](/articles/error-we-re-doing-an-ssh-key-audit) se resaltará en la lista de claves SSH.

  {% endtip %}

4. Abre Terminal.

{% data reusables.command_line.start_ssh_agent %}

6. Busca tu huella digital de llave pública y anótala. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. Las claves SSH de {% data variables.product.product_name %} *deben* coincidir con las mismas claves del equipo.

{% endlinux %}

{% warning %}

**Advertencia**: Si ve una clave SSH con la que no está familiarizado en {% data variables.product.product_name %}, elimínela de inmediato y póngase en contacto con {% data variables.contact.contact_support %} para obtener más ayuda. Una clave pública no identificada puede indicar un posible problema de seguridad.

{% endwarning %}
