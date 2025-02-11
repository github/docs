1. Define the key as an environment variable for {% data variables.product.prodname_ghe_server %}, replacing `<YOUR-KEY-ID>` with the GPG key ID.

    ```bash copy
    ghe-config "secrets.gpgverify.web-signing-key" "$(gpg --export-secret-keys -a <YOUR-KEY-ID> | awk '{printf "%s\\n", $0}')"
    ```
