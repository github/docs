2. In the same directory as your `package.json` file, create or edit an `.npmrc` file to include a line specifying {% data variables.product.prodname_registry %} URL and the account owner. Replace `OWNER` with the name of the user or organization account that owns the repository containing your project.

{% if currentVersion == "free-pro-team@latest" %}
  ```shell
registry=https://npm.pkg.github.com/<em>OWNER</em>
  ```
{% else %}
  If subdomain isolation is enabled:
  ```shell
  registry=https://npm.<em>HOSTNAME</em>/<em>OWNER</em>
  ```
  If subdomain isolation is disabled:
  ```shell
  https://<em>HOSTNAME</em>/_registry/npm/<em>OWNER</em>
  ```
{% endif %}
