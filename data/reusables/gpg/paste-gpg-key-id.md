1. To set your primary GPG signing key in Git, paste the text below, substituting in the GPG primary key ID you'd like to use. In this example, the GPG key ID is `3AA5C34371567BD2`:

   ```shell
   git config --global user.signingkey 3AA5C34371567BD2
   ```

   Alternatively, you may want to use a subkey. In this example, the GPG subkey ID is `4BB6D45482678BE3`:

   ```shell
   git config --global user.signingkey 4BB6D45482678BE3
   ```

   If you use multiple keys and subkeys, then you should append an exclamation mark `!` to the key to tell git that this is your preferred key. Sometimes you may need to escape the exclamation mark with a back slash: `\!`.
