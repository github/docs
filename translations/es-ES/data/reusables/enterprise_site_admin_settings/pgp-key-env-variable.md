1. Define the key as a environment variable for {% data variables.product.product_name %}, replacing `<YOUR-KEY-ID>` with the GPG key ID.

    ```bash{:copy}
    ghe-config "secrets.gpgverify.web-signing-key" "$(gpg --export-secret-keys -a <YOUR-KEY-ID> | awk '{printf "%s\\n", $0}')"
    ```
