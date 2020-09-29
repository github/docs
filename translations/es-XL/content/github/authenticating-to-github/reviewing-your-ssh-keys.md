---
title: Revisar tus claves SSH
intro: 'Para mantener seguras tus credenciales, debes auditar de manera regular tus claves SSH, llaves de implementación y revisar las aplicaciones autorizadas que acceden a tu {% data variables.product.product_name %} cuenta.'
redirect_from:
  - /articles/keeping-your-application-access-tokens-safe/
  - /articles/keeping-your-ssh-keys-and-application-access-tokens-safe/
  - /articles/reviewing-your-ssh-keys
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Puedes eliminar las claves SSH no autorizadas (o posiblemente comprometidas) para garantizar que un atacante no tenga más acceso a tus repositorios. También puedes aprobar llaves SSH existentes que sean válidas.

{% mac %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. En la página de Parámetros SSH, anota las claves SSH asociadas a tu cuenta. Para las que no reconozcas o que estén desactualizadas, haz clic en **Delete** (Eliminar). Si hay claves SSH válidas que quieres conservar, haz clic en **Approve** (Aprobar). ![Lista de claves SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Nota:** Si estás auditando tus claves SSH por una operación de Git fallida, la clave no verificada que provocó el [error de auditoría de clave SSH](/articles/error-we-re-doing-an-ssh-key-audit) se resaltará en la lista de claves SSH. ![Claves SSH no verificadas](/assets/images/help/settings/settings-ssh-key-review-highlight.png)

  {% endtip %}

4. Abre Terminal.

5. {% data reusables.command_line.start_ssh_agent %}

6. Busca tu huella digital de llave pública y anótala. Si estás usando OpenSSH 6.7 o una versión anterior:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  Si estás usando OpenSSH 6.8 o una versión más reciente:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. Las claves SSH en {% data variables.product.product_name %} *deben* coincidir con las mismas calves en tu computadora.

{% endmac %}

{% windows %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. En la página de Parámetros SSH, anota las claves SSH asociadas a tu cuenta. Para las que no reconozcas o que estén desactualizadas, haz clic en **Delete** (Eliminar). Si hay claves SSH válidas que quieres conservar, haz clic en **Approve** (Aprobar). ![Lista de claves SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Nota:** Si estás auditando tus claves SSH por una operación de Git fallida, la clave no verificada que provocó el [error de auditoría de clave SSH](/articles/error-we-re-doing-an-ssh-key-audit) se resaltará en la lista de claves SSH.![Claves SSH no verificadas](/assets/images/help/settings/settings-ssh-key-review-highlight.png)

  {% endtip %}

4. Abre Git Bash. Si estás usando Git Shell, que se incluye en {% data variables.product.prodname_desktop %}, abre Git Shell y avanza hasta el paso 6.

5. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}

6. Busca tu huella digital de llave pública y anótala. Si estás usando OpenSSH 6.7 o una versión anterior:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  Si estás usando OpenSSH 6.8 o una versión más reciente:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. Las claves SSH en {% data variables.product.product_name %} *deben* coincidir con las mismas calves en tu computadora.

{% endwindows %}

{% linux %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
3. En la página de Parámetros SSH, anota las claves SSH asociadas a tu cuenta. Para las que no reconozcas o que estén desactualizadas, haz clic en **Delete** (Eliminar). Si hay claves SSH válidas que quieres conservar, haz clic en **Approve** (Aprobar). ![Lista de claves SSH](/assets/images/help/settings/settings-ssh-key-review.png)

  {% tip %}

     **Nota:** Si estás auditando tus claves SSH por una operación de Git fallida, la clave no verificada que provocó el [error de auditoría de clave SSH](/articles/error-we-re-doing-an-ssh-key-audit) se resaltará en la lista de claves SSH. ![Claves SSH no verificadas](/assets/images/help/settings/settings-ssh-key-review-highlight.png)

  {% endtip %}

4. Abre Terminal.

5. {% data reusables.command_line.start_ssh_agent %}

6. Busca tu huella digital de llave pública y anótala. Si estás usando OpenSSH 6.7 o una versión anterior:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  Si estás usando OpenSSH 6.8 o una versión más reciente:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

7. Las claves SSH en {% data variables.product.product_name %} *deben* coincidir con las mismas calves en tu computadora.

{% endlinux %}

{% warning %}

**Advertencia**: Si ves una clave SSH que no te resulta familiar en {% data variables.product.product_name %}, elimínala de inmediato y contáctate con {% data variables.contact.contact_support %} para recibir más ayuda. Una llave pública no identificada puede indicar un posible problema de seguridad.

{% endwarning %}
