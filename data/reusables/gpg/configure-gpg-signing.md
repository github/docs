1. Configure Git to use GPG to sign commits and tags:
  ```bash
  $ git config --global gpg.format opengpg
  ```

  Alternatively, you can unset any previous `gpg.format` configuration so the default format `opengpg` will be used:
  ```bash
  $ git config --global --unset gpg.format
  ```
