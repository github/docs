---
title: Revisar tus claves SSH
intro: 'To keep your credentials secure, you should regularly audit your SSH keys, deploy keys, and review authorized applications that access your account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.'
redirect_from:
  - /articles/keeping-your-application-access-tokens-safe/
  - /articles/keeping-your-ssh-keys-and-application-access-tokens-safe/
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

Puedes eliminar las claves SSH no autorizadas (o posiblemente comprometidas) para garantizar que un atacante no tenga más acceso a tus repositorios. También puedes aprobar llaves SSH existentes que sean válidas.

{% mac %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. En la página de Parámetros SSH, anota las claves SSH asociadas a tu cuenta. Para las que no reconozcas o que estén desactualizadas, haz clic en **Delete** (Eliminar). Si hay claves SSH válidas que quieres conservar, haz clic en **Approve** (Aprobar). ![Lista de claves SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Nota:** Si estás auditando tus claves SSH por una operación de Git fallida, la clave no verificada que provocó el [error de auditoría de clave SSH](/articles/error-we-re-doing-an-ssh-key-audit) se resaltará en la lista de claves SSH.

  {% endtip %}

4. Abre Terminal.

{% data reusables.command_line.start_ssh_agent %}

6. Busca tu huella digital de llave pública y anótala.
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. Las claves SSH en {% data variables.product.product_name %} *deben* coincidir con las mismas calves en tu computadora.

{% endmac %}

{% windows %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. En la página de Parámetros SSH, anota las claves SSH asociadas a tu cuenta. Para las que no reconozcas o que estén desactualizadas, haz clic en **Delete** (Eliminar). Si hay claves SSH válidas que quieres conservar, haz clic en **Approve** (Aprobar). ![Lista de claves SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Nota:** Si estás auditando tus claves SSH por una operación de Git fallida, la clave no verificada que provocó el [error de auditoría de clave SSH](/articles/error-we-re-doing-an-ssh-key-audit) se resaltará en la lista de claves SSH.

  {% endtip %}

4. Abre Git Bash. Si estás usando Git Shell, que se incluye en {% data variables.product.prodname_desktop %}, abre Git Shell y avanza hasta el paso 6.

5. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}

6. Busca tu huella digital de llave pública y anótala.
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. Las claves SSH en {% data variables.product.product_name %} *deben* coincidir con las mismas calves en tu computadora.

{% endwindows %}

{% linux %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. En la página de Parámetros SSH, anota las claves SSH asociadas a tu cuenta. Para las que no reconozcas o que estén desactualizadas, haz clic en **Delete** (Eliminar). Si hay claves SSH válidas que quieres conservar, haz clic en **Approve** (Aprobar). ![Lista de claves SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Nota:** Si estás auditando tus claves SSH por una operación de Git fallida, la clave no verificada que provocó el [error de auditoría de clave SSH](/articles/error-we-re-doing-an-ssh-key-audit) se resaltará en la lista de claves SSH.

  {% endtip %}

4. Abre Terminal.

{% data reusables.command_line.start_ssh_agent %}

6. Busca tu huella digital de llave pública y anótala.
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. Las claves SSH en {% data variables.product.product_name %} *deben* coincidir con las mismas calves en tu computadora.

{% endlinux %}

{% warning %}

**Advertencia**: Si ves una clave SSH que no te resulta familiar en {% data variables.product.product_name %}, elimínala de inmediato y contáctate con {% data variables.contact.contact_support %} para recibir más ayuda. Una llave pública no identificada puede indicar un posible problema de seguridad.

{% endwarning %}
