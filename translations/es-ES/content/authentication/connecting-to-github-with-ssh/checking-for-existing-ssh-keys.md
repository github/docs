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
shortTitle: Verificar la llave SSH existente
---

{% data reusables.ssh.key-type-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Ingresa `ls -al ~/.ssh` para ver si hay claves SSH presentes.

  ```shell
  $ ls -al ~/.ssh
  # Lists the files in your .ssh directory, if they exist
  ```

3. Comprueba la lista de directorio para ver si ya tiene una clave SSH pública. Predeterminadamente, {% ifversion ghae %}el nombre de archivo de una llave pública para {% data variables.product.product_name %} es *id_rsa.pub*.{% else %}los nombres de archivo de las llaves públicas compatibles para {% data variables.product.product_name %} son una de las siguientes.
    - *id_rsa.pub*
    - *id_ecdsa.pub*
    - *id_ed25519.pub*{% endif %}

  {% tip %}

  **Tip**: si recibes un error de que no existe *~/.ssh*, no tienes un par de llaves SSH en la ubicación predeterminada. Puedes crear un par de llaves SSH nuevas en el siguiente paso.

  {% endtip %}

4. Puedes ya sea generar una llave SSH nueva o cargar una existente.
    - Si no tienes un par de llaves pública y privada compatibles o si no quieres utilizar cualquiera que esté disponible, genera una llave SSH nueva.
    - Si utilizas un par de llaves público y privado listados (por ejemplo, *id_rsa.pub* y *id_rsa*) que te gustaría utilizar para conectarte a {% data variables.product.product_name %}, puedes agregar la llave al ssh-agent.

      Para obtener más información sobre la generación de una llave SSH nueva o para agregar cualquier llave existente al ssh-agent, consulta la sección "[Generar una llave SSH nueva y agregarla al ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".
