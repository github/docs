---
title: Comprobar tus claves SSH existentes
intro: 'Antes de generar una clave SSH, puedes comprobar si tienes alguna clave SSH existente.'
redirect_from:
  - /articles/checking-for-existing-ssh-keys
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.ssh.dsa-support %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Ingresa `ls -al ~/.ssh` para ver si hay claves SSH presentes:

  ```shell
  $ ls -al ~/.ssh
  # Lists the files in your .ssh directory, if they exist
  ```
3. Comprueba la lista de directorio para ver si ya tiene una clave SSH pública. Por defecto, los nombres de archivos de llave pública son uno de los siguientes:
    - *id_rsa.pub*
    - *id_ecdsa.pub*
    - *id_ed25519.pub*

Si no tienes un par de llaves pública y privada, o si no deseas utilizar las que están disponibles para conectarte a{% data variables.product.product_name %}, entonces [genera una llave SSH nueva](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

Si ves que ya hay un par de llaves pública y privada listado (por ejemplo*id_rsa.pub* y *id_rsa*) que te gustaría utilizar para conectarte a {% data variables.product.product_name %}, entonces puedes [añadir tu llave SSH al ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#adding-your-ssh-key-to-the-ssh-agent).

{% tip %}

**Sugerencia:** Si recibes un error que *~/.ssh* no existe, 'no te preocupes! Lo crearemos cuando [generemos una nueva clave SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

{% endtip %}
