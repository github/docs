2. `package.json`ファイルと同じディレクトリに、`.npmrc`を作成もしくは編集し、{% data variables.product.prodname_registry %}のURLとアカウントのオーナーを指定する行を含めてください。 `OWNER`を、プロジェクトを含むリポジトリを所有するユーザもしくはOrganizationアカウント名で置き換えてください。

{% if currentVersion == "free-pro-team@latest" %}
  ```shell
  @<em>OWNER</em>:registry=https://npm.pkg.github.com
  ```
{% else %}
  Subdomain Isolationが有効な場合:
  ```shell
  @<em>OWNER</em>:registry=https://npm.<em>HOSTNAME</em>
  ```
  Subdomain Isolationが無効な場合:
  ```shell
  @<em>OWNER</em>:registry=https://<em>HOSTNAME</em>/_registry/npm
  ```
{% endif %}
