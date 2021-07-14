
1. Use the `gpg --list-secret-keys --keyid-format=long` command to list the long form of the GPG keys for which you have both a public and private key. Uma chave privada é necessária para assinar commits ou tags.
  ```shell
  $ gpg --list-secret-keys --keyid-format=long
```
  {% note %}

  **Nota:** Algumas instalações GPG no Linux podem exigir que você use `gpg2 --list-keys --keyid-format LONG` para visualizar uma lista de suas chaves existentes. Neste caso você também precisará configurar o Git para usar `gpg2` executando `git config --global gpg.program gpg2`.

  {% endnote %}
