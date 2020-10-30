---
title: Revisar suas chaves SSH
intro: 'Para manter suas credenciais protegidas, você deve auditar regularmente as chaves SSH e as chaves de implantação, bem como revisar os aplicativos autorizados que acessam sua conta do {% data variables.product.product_name %}.'
redirect_from:
  - /articles/keeping-your-application-access-tokens-safe/
  - /articles/keeping-your-ssh-keys-and-application-access-tokens-safe/
  - /articles/reviewing-your-ssh-keys
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Você pode excluir chaves SSH não autorizadas (ou potencialmente comprometidas) para evitar que invasores tenham acesso aos seus repositórios. Você também pode aprovar as chaves SSh que são válidas.

{% mac %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. Na página das chaves SSH, anote as chaves SSH associadas à sua conta. Para as chaves não reconhecidas ou desatualizadas, clique em **Delete** (Excluir). Se houver chaves SSH válidas que deseja manter, clique em **Approve** (Aprovar). ![Lista de chaves SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Observação:** quando estiver auditando as chaves SSH devido a um erro em uma operação do Git, a chave não verificada que causou o [erro de auditoria da chave SSH](/articles/error-we-re-doing-an-ssh-key-audit) estará em destaque na lista de chaves SSH. ![Chave SSH não verificada](/assets/images/help/settings/settings-ssh-key-review-highlight.png)

  {% endtip %}

4. Abra o terminal.

5. {% data reusables.command_line.start_ssh_agent %}

6. Encontre e anote a impressão digital da chave pública. Se estiver usando OpenSSH 6.7 ou anterior:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  Se estiver usando OpenSSH 6.8 ou posterior:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. As chaves SSH keys {% data variables.product.product_name %} *devem* corresponder às chaves no computador.

{% endmac %}

{% windows %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. Na página das chaves SSH, anote as chaves SSH associadas à sua conta. Para as chaves não reconhecidas ou desatualizadas, clique em **Delete** (Excluir). Se houver chaves SSH válidas que deseja manter, clique em **Approve** (Aprovar). ![Lista de chaves SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Observação:** quando estiver auditando as chaves SSH devido a um erro em uma operação do Git, a chave não verificada que causou o [erro de auditoria da chave SSH](/articles/error-we-re-doing-an-ssh-key-audit) estará em destaque na lista de chaves SSH.![Chave SSH não verificada](/assets/images/help/settings/settings-ssh-key-review-highlight.png)

  {% endtip %}

4. Abra o Git Bash. Se estiver usando o Git Shell, que faz parte do {% data variables.product.prodname_desktop %}, abra o Git Shell e passe para a etapa 6.

5. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}

6. Encontre e anote a impressão digital da chave pública. Se estiver usando OpenSSH 6.7 ou anterior:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  Se estiver usando OpenSSH 6.8 ou posterior:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. As chaves SSH keys {% data variables.product.product_name %} *devem* corresponder às chaves no computador.

{% endwindows %}

{% linux %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. Na página das chaves SSH, anote as chaves SSH associadas à sua conta. Para as chaves não reconhecidas ou desatualizadas, clique em **Delete** (Excluir). Se houver chaves SSH válidas que deseja manter, clique em **Approve** (Aprovar). ![Lista de chaves SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Observação:** quando estiver auditando as chaves SSH devido a um erro em uma operação do Git, a chave não verificada que causou o [erro de auditoria da chave SSH](/articles/error-we-re-doing-an-ssh-key-audit) estará em destaque na lista de chaves SSH. ![Chave SSH não verificada](/assets/images/help/settings/settings-ssh-key-review-highlight.png)

  {% endtip %}

4. Abra o terminal.

5. {% data reusables.command_line.start_ssh_agent %}

6. Encontre e anote a impressão digital da chave pública. Se estiver usando OpenSSH 6.7 ou anterior:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  Se estiver usando OpenSSH 6.8 ou posterior:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. As chaves SSH keys {% data variables.product.product_name %} *devem* corresponder às chaves no computador.

{% endlinux %}

{% warning %}

**Aviso**: se você encontrar uma chave SSH com a qual não esteja familiarizado em {% data variables.product.product_name %}, delete-a imediatamente e entre em contato com o {% data variables.contact.contact_support %} para obter ajuda. Uma chave pública desconhecida pode indicar um possível problema de segurança.

{% endwarning %}
