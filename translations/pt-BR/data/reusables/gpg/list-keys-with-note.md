
1. Use os comandos `gpg --list-secret-keys --keyid-format LONG` para listar as chaves GPG para as quais você tem uma chave pública e privada. Uma chave privada é necessária para assinar commits ou tags.
  ```shell
  $ gpg --list-secret-keys --keyid-format LONG
```
  {% note %}

  **Nota:** Algumas instalações GPG no Linux podem exigir que você use `gpg2 --list-keys --keyid-format LONG` para visualizar uma lista de suas chaves existentes. Neste caso você também precisará configurar o Git para usar `gpg2` executando `git config --global gpg.program gpg2`.

  {% endnote %}
