1. To set your primary GPG signing key in Git, paste the text below, substituting in the GPG primary key ID you'd like to use. En este ejemplo, el ID de la llave GPG es `3AA5C34371567BD2`:
   ```shell
   $ git config --global user.signingkey <em>3AA5C34371567BD2</em>
   ```

   Alternatively, when setting a subkey include the `!` suffix. In this example, the GPG subkey ID is `4BB6D45482678BE3`:
   ```shell
   $ git config --global user.signingkey <em>4BB6D45482678BE3</em>!
   ```
