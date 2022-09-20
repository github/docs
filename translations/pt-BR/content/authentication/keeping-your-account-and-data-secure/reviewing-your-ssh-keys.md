---
title: Revisar suas chaves SSH
intro: 'Para manter suas credenciais seguras, você deve regularmente auditar as suas chaves SSH, chaves de implantação e revisar os aplicativos autorizados que acessam a sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147875484'
---
Você pode excluir chaves SSH não autorizadas (ou potencialmente comprometidas) para evitar que invasores tenham acesso aos seus repositórios. Você também pode aprovar as chaves SSh que são válidas.

{% mac %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. Na página das chaves SSH, anote as chaves SSH associadas à sua conta. Para aquelas que você não reconhece ou que estão desatualizadas, clique em **Excluir**. Se houver chaves SSH válidas que você deseja manter, clique em **Aprovar**.
    ![Lista de chaves SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Observação:** se você estiver auditando suas chaves SSH devido a uma operação do Git sem êxito, a chave não verificada que causou o [erro de auditoria de chave SSH](/articles/error-we-re-doing-an-ssh-key-audit) será realçada na lista de chaves SSH.

  {% endtip %}

4. Abra o terminal.

{% data reusables.command_line.start_ssh_agent %}

6. Encontre e anote a impressão digital da chave pública. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. As chaves SSH no {% data variables.product.product_name %} *devem* corresponder às chaves do computador.

{% endmac %}

{% windows %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. Na página das chaves SSH, anote as chaves SSH associadas à sua conta. Para aquelas que você não reconhece ou que estão desatualizadas, clique em **Excluir**. Se houver chaves SSH válidas que você deseja manter, clique em **Aprovar**.
    ![Lista de chaves SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Observação:** se você estiver auditando suas chaves SSH devido a uma operação do Git sem êxito, a chave não verificada que causou o [erro de auditoria de chave SSH](/articles/error-we-re-doing-an-ssh-key-audit) será realçada na lista de chaves SSH.

  {% endtip %}

4. Abra o Git Bash. 

5. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}

6. Encontre e anote a impressão digital da chave pública. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. As chaves SSH no {% data variables.product.product_name %} *devem* corresponder às chaves do computador.

{% endwindows %}

{% linux %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. Na página das chaves SSH, anote as chaves SSH associadas à sua conta. Para aquelas que você não reconhece ou que estão desatualizadas, clique em **Excluir**. Se houver chaves SSH válidas que você deseja manter, clique em **Aprovar**.
    ![Lista de chaves SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Observação:** se você estiver auditando suas chaves SSH devido a uma operação do Git sem êxito, a chave não verificada que causou o [erro de auditoria de chave SSH](/articles/error-we-re-doing-an-ssh-key-audit) será realçada na lista de chaves SSH.

  {% endtip %}

4. Abra o terminal.

{% data reusables.command_line.start_ssh_agent %}

6. Encontre e anote a impressão digital da chave pública. 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. As chaves SSH no {% data variables.product.product_name %} *devem* corresponder às chaves do computador.

{% endlinux %}

{% warning %}

**Aviso**: se você receber uma chave SSH com a qual não esteja familiarizado no {% data variables.product.product_name %}, exclua-a imediatamente e entre em contato com o {% data variables.contact.contact_support %} para obter mais ajuda. Uma chave pública desconhecida pode indicar um possível problema de segurança.

{% endwarning %}
