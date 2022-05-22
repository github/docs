
1. Führe den Befehl `gpg --list-secret-keys --keyid-format LONG` aus, um die GPG-Schlüssel aufzulisten, für die Du über einen öffentlichen und privaten Schlüssel verfügst. Zum Signieren von Commits oder Tags ist ein privater Schlüssel erforderlich.
  ```shell
  $ gpg --list-secret-keys --keyid-format LONG
```
  {% note %}

  **Hinweis:** Einige GPG-Installationen auf Linux verlangen möglicherweise, dass der Befehl `gpg2 --list-keys --keyid-format LONG` gebraucht wird, um stattdessen eine Liste Deiner vorhandenen Schlüssel anzuzeigen. In diesem Fall musst Du konfigurieren, dass Git `gpg2` verwendet, indem Du `git config --global gpg.program gpg2` ausführen.

  {% endnote %}
