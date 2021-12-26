
1. Use the `gpg --list-secret-keys --keyid-format=long` command to list the long form of the GPG keys for which you have both a public and private key. Zum Signieren von Commits oder Tags ist ein privater Schlüssel erforderlich.
  ```shell
  $ gpg --list-secret-keys --keyid-format=long
```
  {% note %}

  **Hinweis:** Einige GPG-Installationen auf Linux verlangen möglicherweise, dass der Befehl `gpg2 --list-keys --keyid-format LONG` gebraucht wird, um stattdessen eine Liste Deiner vorhandenen Schlüssel anzuzeigen. In diesem Fall musst Du konfigurieren, dass Git `gpg2` verwendet, indem Du `git config --global gpg.program gpg2` ausführen.

  {% endnote %}
