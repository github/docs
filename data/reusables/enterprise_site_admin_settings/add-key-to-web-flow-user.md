1. Run the following command, replacing KEY-ID with your PGP key ID.

   ```bash{:copy}
   gpg --armor --export KEY-ID
   ```
1. Copy your PGP key, beginning with `-----BEGIN PGP PUBLIC KEY BLOCK-----` and ending with `-----END PGP PUBLIC KEY BLOCK-----`.
1. Sign into {% data variables.product.prodname_ghe_server %} as the `web-flow` user.
1. Add the public PGP key to the user's profile. For more information, see "[Adding a new GPG key to your {% data variables.product.prodname_dotcom %} account](/authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account)."

   {% note %}

   **Note:** Do not remove other public keys from the list of GPG keys. If a public key is deleted, any commits signed with the corresponding private key will no longer be marked as verified.

   {% endnote %}
