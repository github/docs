1. Add the addresses you want to include in the allowlist. You can include:

   * **Domains** (for example, `packages.contoso.corp`). Traffic will be allowed to the specified domain and any subdomains.

     **Example**: `packages.contoso.corp` will allow traffic to `packages.contoso.corp` and `prod.packages.contoso.corp`, but not `artifacts.contoso.corp`.

   * **URLs** (for example, `https://packages.contoso.corp/project-1/`). Traffic will only be allowed on the specified scheme (`https`) and host (`packages.contoso.corp`), and limited to the specified path and descendant paths.

     **Example**: `https://packages.contoso.corp/project-1/` will allow traffic to `https://packages.contoso.corp/project-1/` and `https://packages.contoso.corp/project-1/tags/latest`, but not `https://packages.contoso.corp/project-2`, `ftp://packages.contoso.corp` or `https://artifacts.contoso.corp`.

1. Click **Add rule**.
1. After validating your list, click **Save changes**.
