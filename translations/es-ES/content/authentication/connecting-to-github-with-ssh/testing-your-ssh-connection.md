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
shortTitle: Probar tu conexión SSH
---

Antes de probar tu conexión SSH, debes haber hecho lo siguiente:
- [Comprobado tus claves SSH existentes](/articles/checking-for-existing-ssh-keys)
- [Generado una clave SSH nueva](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Agregado una clave SSH nueva a tu cuenta de GitHub](/articles/adding-a-new-ssh-key-to-your-github-account)

Cuando pruebes tu conexión, tendrás que autenticar esta acción utilizando tu contraseña, que es la contraseña de clave SSH que ya creaste. Para obtener más información acerca de trabajar con contraseñas de clave SSH, consulta ["Trabajar con contraseñas de clave SSH"](/articles/working-with-ssh-key-passphrases).

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Ingresa lo siguiente:
  ```shell
  $ ssh -T git@{% data variables.command_line.codeblock %}
  # Attempts to ssh to {% data variables.product.product_name %}
  ```

  Puedes ver una advertencia como la siguiente:

  ```shell
  > La autenticidad del host '{% data variables.command_line.codeblock %} (DIRECCIÓN IP)' no se puede establecer.
  > La clave de huella digital RSA es SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
  > ¿Estás seguro de que quieres continuar conectado (sí/no)?
  ```

3. Verifica que la huella dactilar en el mensaje que ves empate con {% ifversion fpt or ghec %}[la huella dactilar de la llave pública de {% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/githubs-ssh-key-fingerprints){% else %} la huella dactilar de la llave pública de tu empresa{% endif %}. Si lo hace, entonces teclea `yes`:
  ```shell
  > Hi <em>username</em>! You've successfully authenticated, but GitHub does not
  > provide shell access.
  ```

  {% linux %}

  Puede que veas el siguiente mensaje de error:
  ```shell
  ...
  El agente admitió una falla para registrarse utilizando la clave.
  debug1: No hay más métodos de autenticación para probar.
  Permiso denegado (publickey).
  ```

  Se trata de un problema conocido con determinadas distribuciones de Linux. Para obtener más información, consulta ["Error: El agente admitió una falla para registrarse"](/articles/error-agent-admitted-failure-to-sign).

  {% endlinux %}

   {% note %}

   **Nota:** El comando remoto deberá salir con el código 1.

   {% endnote %}

4. Comprueba que el mensaje resultante contenga tu nombre de usuario. Si recibes un mensaje de "permiso denegado", consulta ["Error: Permiso denegado (publickey)"](/articles/error-permission-denied-publickey).
