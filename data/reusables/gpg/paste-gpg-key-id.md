1. To set your primary GPG signing key in Git, paste the text below, substituting in the GPG primary key ID you'd like to use. In this example, the GPG key ID is `3AA5C34371567BD2`:

   ```shell
   git config --global user.signingkey 3AA5C34371567BD2
   ```

   Alternatively, when setting a subkey include the `!` suffix. In this example, the GPG subkey ID is `4BB6D45482678BE3`:

   ```shell
   git config --global user.signingkey 4BB6D45482678BE3!
   ```
