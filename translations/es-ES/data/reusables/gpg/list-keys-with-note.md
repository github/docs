
1. Use the `gpg --list-secret-keys --keyid-format=long` command to list the long form of the GPG keys for which you have both a public and private key. Se requiere una llave privada para registrar confirmaciones o etiquetas.
  ```shell
  $ gpg --list-secret-keys --keyid-format=long
```
  {% note %}

  **Nota:** Algunas instalaciones GPG en Linux pueden requerir que uses `gpg2 --list-keys --keyid-format LONG` para visualizar una lista de tus llaves existentes en su lugar. En este caso también deberás configurar Git para que use `gpg2` by running `git config --global gpg.program gpg2`.

  {% endnote %}
