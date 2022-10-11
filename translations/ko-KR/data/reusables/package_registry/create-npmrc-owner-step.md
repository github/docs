2. In the same directory as your `package.json` file, create or edit an `.npmrc` file to include a line specifying {% data variables.product.prodname_registry %} URL and the account owner. Replace `OWNER` with the name of the user or organization account that owns the repository containing your project.

{% ifversion fpt %}
  ```shell
  @<em>OWNER</em>:registry=https://npm.pkg.github.com
  ```
{% else %}
  If subdomain isolation is enabled:
  ```shell
  @<em>OWNER</em>:registry=https://npm.<em>HOSTNAME</em>
  ```
  If subdomain isolation is disabled:
  ```shell
  @<em>OWNER</em>:registry=https://<em>HOSTNAME</em>/_registry/npm
  ```
{% endif %}
