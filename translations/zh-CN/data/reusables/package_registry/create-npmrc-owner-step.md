2. 在与 `package.json` 文件相同的目录中，创建或编辑 `.npmrc` 文件以包含指定 {% data variables.product.prodname_registry %} URL 和帐户所有者的行。 将 `OWNER` 替换为拥有项目所在仓库的用户或组织帐户的名称。

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
