
1. Utiliza el comando `gpg --list-secret-keys --keyid-format=long` para enumerar la forma larga de las llaves GPG para las cuales tienes tanto una llave pública como una privada. Se requiere una llave privada para registrar confirmaciones o etiquetas.
  ```shell
  $ gpg --list-secret-keys --keyid-format=long
```
  {% note %}

  **Nota:** Algunas instalaciones GPG en Linux pueden requerir que uses `gpg2 --list-keys --keyid-format LONG` para visualizar una lista de tus llaves existentes en su lugar. En este caso también deberás configurar Git para que use `gpg2` by running `git config --global gpg.program gpg2`.

  {% endnote %}
