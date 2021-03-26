2. `package.json`ファイルと同じディレクトリに、`.npmrc`を作成もしくは編集し、{% data variables.product.prodname_registry %}のURLとアカウントのオーナーを指定する行を含めてください。 `OWNER`を、プロジェクトを含むリポジトリを所有するユーザもしくはOrganizationアカウント名で置き換えてください。

{% if currentVersion == "free-pro-team@latest" %}
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
