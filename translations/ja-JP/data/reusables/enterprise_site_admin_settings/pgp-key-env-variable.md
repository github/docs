1. `<YOUR-KEY-ID>`をGPGキーIDで置き換えて、キーを{% data variables.product.product_name %}の環境変数として定義してください。

    ```bash{:copy}
    ghe-config "secrets.gpgverify.web-signing-key" "$(gpg --export-secret-keys -a <YOUR-KEY-ID> | awk '{printf "%s\\n", $0}')"
    ```
