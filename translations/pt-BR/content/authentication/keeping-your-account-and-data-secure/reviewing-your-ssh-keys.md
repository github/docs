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
---

Você pode excluir chaves SSH não autorizadas (ou potencialmente comprometidas) para evitar que invasores tenham acesso aos seus repositórios. Você também pode aprovar as chaves SSh que são válidas.

{% mac %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
3. Na página das chaves SSH, anote as chaves SSH associadas à sua conta. Para as chaves não reconhecidas ou desatualizadas, clique em **Delete** (Excluir). Se houver chaves SSH válidas que deseja manter, clique em **Approve** (Aprovar). ![Lista de chaves SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Observação:** quando estiver auditando as chaves SSH devido a um erro em uma operação do Git, a chave não verificada que causou o [erro de auditoria da chave SSH](/articles/error-we-re-doing-an-ssh-key-audit) estará em destaque na lista de chaves SSH.

  {% endtip %}

4. Abra o terminal.

{% data reusables.command_line.start_ssh_agent %}

6. Encontre e anote a impressão digital da chave pública.
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. As chaves SSH keys {% data variables.product.product_name %} *devem* corresponder às chaves no computador.

{% endmac %}

{% windows %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
3. Na página das chaves SSH, anote as chaves SSH associadas à sua conta. Para as chaves não reconhecidas ou desatualizadas, clique em **Delete** (Excluir). Se houver chaves SSH válidas que deseja manter, clique em **Approve** (Aprovar). ![Lista de chaves SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Observação:** quando estiver auditando as chaves SSH devido a um erro em uma operação do Git, a chave não verificada que causou o [erro de auditoria da chave SSH](/articles/error-we-re-doing-an-ssh-key-audit) estará em destaque na lista de chaves SSH.

  {% endtip %}

4. Abra o Git Bash.

5. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}

6. Encontre e anote a impressão digital da chave pública.
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. As chaves SSH keys {% data variables.product.product_name %} *devem* corresponder às chaves no computador.

{% endwindows %}

{% linux %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
3. Na página das chaves SSH, anote as chaves SSH associadas à sua conta. Para as chaves não reconhecidas ou desatualizadas, clique em **Delete** (Excluir). Se houver chaves SSH válidas que deseja manter, clique em **Approve** (Aprovar). ![Lista de chaves SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Observação:** quando estiver auditando as chaves SSH devido a um erro em uma operação do Git, a chave não verificada que causou o [erro de auditoria da chave SSH](/articles/error-we-re-doing-an-ssh-key-audit) estará em destaque na lista de chaves SSH.

  {% endtip %}

4. Abra o terminal.

{% data reusables.command_line.start_ssh_agent %}

6. Encontre e anote a impressão digital da chave pública.
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. As chaves SSH keys {% data variables.product.product_name %} *devem* corresponder às chaves no computador.

{% endlinux %}

{% warning %}

**Aviso**: se você encontrar uma chave SSH com a qual não esteja familiarizado em {% data variables.product.product_name %}, delete-a imediatamente e entre em contato com o {% data variables.contact.contact_support %} para obter ajuda. Uma chave pública desconhecida pode indicar um possível problema de segurança.

{% endwarning %}
