1. To set your primary GPG signing key in Git, paste the text below, substituting in the GPG primary key ID you'd like to use. In this example, the GPG key ID is `3AA5C34371567BD2`:
   ```shell
   $ git config --global user.signingkey <em>3AA5C34371567BD2</em>
   ```
   
   Alternatively, when setting a subkey include the `!` suffix. In this example, the GPG subkey ID is `42B317FD4BA89E7A`:
   ```shell
   $ git config --global user.signingkey <em>42B317FD4BA89E7A</em>!
   ```
