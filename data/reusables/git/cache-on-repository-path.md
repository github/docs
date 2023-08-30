1. To configure Git to cache credentials for the full remote URL of each repository you access on {% data variables.product.prodname_dotcom %}, enter the following command.

   ```shell copy
   git config --global credential.https://github.com.useHttpPath true
   ```
