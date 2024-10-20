1. In the same directory as your `package.json` file, create or edit an `.npmrc` file to include a line specifying {% data variables.product.prodname_registry %} URL and the namespace where the package is hosted. Replace `NAMESPACE` with the name of the user or organization account {% ifversion packages-npm-v2 %}to which the package will be scoped{% else %}that owns the repository containing your project{% endif %}.

{% ifversion fpt or ghec %}

   ```shell
   @NAMESPACE:registry=https://npm.pkg.github.com
   ```

{% else %}
   If subdomain isolation is enabled:

   ```shell
   @NAMESPACE:registry=https://npm.HOSTNAME
   ```

   If subdomain isolation is disabled:

   ```shell
   @NAMESPACE:registry=https://HOSTNAME/_registry/npm
   ```

{% endif %}
