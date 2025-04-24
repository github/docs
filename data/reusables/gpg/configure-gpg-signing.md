1. If you have previously configured Git to use a different key format when signing with `--gpg-sign`, unset this configuration so the default format of `openpgp` will be used.

   ```shell
   git config --global --unset gpg.format
   ```
