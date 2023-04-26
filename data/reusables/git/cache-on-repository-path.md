1. To configure Git to cache credentials for the full remote url of each repository being accessed on GitHub, enter the following command.

   ```shell{:copy}
   git config --global credential.https://github.com.useHttpPath true
   ```
