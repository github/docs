When you **install** a {% data variables.product.prodname_github_app %} on your account or organization, you grant the app permission to access the organization and repository resources that it requested. You also specify which repositories the app can access. During the installation process, the {% data variables.product.prodname_github_app %} will indicate which repository and organization permissions you are granting. For more information about what different permissions enable a {% data variables.product.prodname_github_app %} to do, see "[AUTOTITLE](/apps/creating-github-apps/setting-up-a-github-app/choosing-permissions-for-a-github-app)."

For example, you might grant the {% data variables.product.prodname_github_app %} permission to read repository metadata and write issues, and you might grant the {% data variables.product.prodname_github_app %} access to all of your repositories.

![Screenshot of the page to install a GitHub App. The app is requesting read access to metadata and write access to issues. The app can also request user authorization for read access to emails and write access to gists.](/assets/images/github-apps/install-app.png)

When you **authorize** a {% data variables.product.prodname_github_app %}, you grant the app access to your {% data variables.product.prodname_dotcom %} account, based on the account permissions the app requested. During the authorization process, the app will indicate which resources the app can access on your account. When you authorize a {% data variables.product.prodname_github_app %}, you also grant the app permission to act on your behalf.

For example, you might grant the {% data variables.product.prodname_github_app %} permission to read your email addresses and write gists.

![Screenshot of the page to authorize a GitHub App. The app is requesting read access to email and write access to gists.](/assets/images/github-apps/authorize-app.png)

You can install a {% data variables.product.prodname_github_app %} without authorizing the app. Similarly, you can authorize the app without installing the app.
