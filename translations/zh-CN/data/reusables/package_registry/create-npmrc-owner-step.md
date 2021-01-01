2. 在与 `package.json` 文件相同的目录中，创建或编辑 `.npmrc` 文件以包含指定 {% data variables.product.prodname_registry %} URL 和帐户所有者的行。 将 `OWNER` 替换为拥有项目所在仓库的用户或组织帐户的名称。

{% if currentVersion == "free-pro-team@latest" %}
  ```shell
registry=https://npm.pkg.github.com/<em>OWNER</em>
  ```
{% else %}
  如果启用了子域隔离：
  ```shell
  registry=https://npm.<em>HOSTNAME</em>/<em>OWNER</em>
  ```
  如果禁用了子域隔离：
  ```shell
  https://<em>HOSTNAME</em>/_registry/npm/<em>OWNER</em>
  ```
{% endif %}
