1. Copia la llave SSH pública a tu portapapeles.

  Si tu archivo de llave SSH pública tiene un nombre diferente que en el código de ejemplo, modifica el nombre de archivo para que coincida con tu configuración actual. Al copiar tu clave, no agregues líneas nuevas o espacios en blanco.
{% mac %}

  ```shell
  $ pbcopy &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **Sugerencia:** Si `pbcopy` no está funcionando, puedes ubicar la carpeta `.ssh` oculta, abrir el archivo en tu editor de texto favorito, y copiarlo en tu portapapeles.

  {% endtip %}
{% endmac %}
{% windows %}

  ```shell
  $ clip &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **Sugerencia:** Si `clip` no está funcionando, puedes ubicar la carpeta `.shh` oculta, abrir el archivo en tu editor de texto favorito, y copiarlo en tu portapapeles.

  {% endtip %}
{% endwindows %}
{% linux %}

  ```shell
  $ cat ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Then select and copy the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file
  # displayed in the terminal to your clipboard
  ```

  {% tip %}

  **Tip:** Como alternativa, puedes ubicar la carpeta `.ssh` oculta, abrir el archivo en tu editor de texto favorito y copiarlo a tu portapapeles.

  {% endtip %}
{% endlinux %}
