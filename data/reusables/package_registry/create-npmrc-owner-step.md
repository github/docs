2. In the same directory as your `package.json` file, create or edit an `.npmrc` file to include a line specifying {% data variables.product.prodname_registry %} URL and the account owner. Replace `OWNER` with the name of the user or organization account that owns the repository containing your project.

{% ifversion fpt or ghec %}
  ```shell
  @OWNER:registry=https://npm.pkg.github.com
  ```
{% else %}
  If subdomain isolation is enabled:
  ```shell
  @OWNER:registry=https://npm.HOSTNAME
  ```
  If subdomain isolation is disabled:
  ```shell
  @OWNER:registry=https://HOSTNAME/_registry/npm
  ```
{% endif %}
