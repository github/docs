    * If there's an existing GPG key pair and you want to use it to sign commits and tags, you can display the public key using the following command, substituting in the GPG key ID you'd like to use. In this example, the GPG key ID is `3AA5C34371567BD2`:
      ```shell
      $ gpg --armor --export <em>3AA5C34371567BD2</em>
      # Prints the GPG key ID, in ASCII armor format
      ```
      Finally, you can [add your GPG key to your GitHub account](/articles/adding-a-new-gpg-key-to-your-github-account).
