1. 実行したいタスクに対して適切なスコープを持つ新しい個人アクセストークン（PAT）を作成してください。 OrganizationがSSOを必須としている場合は、新しいトークンでSSOを有効化しなければなりません。
  {% warning %}

  **ノート:** デフォルトでは、ユーザインターフェース内で個人アクセストークン（PAT）に対して`write:packages`スコープを選択すると、`repo`スコープも選択されます。 `repo`は不要に広いアクセス権を提供するので、特にGitHub Actionsのワークフローでの利用は避けることをおすすめします。 詳しい情報については「[GitHub Actionsのためのセキュリティ強化](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)」を参照してください。 As a workaround, you can select just the `write:packages` scope for your PAT in the user interface with this url: `https://{% ifversion fpt or ghec %}github.com{% else %}HOSTNAME{% endif %}/settings/tokens/new?scopes=write:packages`.

  {% endwarning %}

    - コンテナイメージをダウンロードし、そのメタデータを読むためには`read:packages`スコープを選択してください。
    - コンテナイメージのダウンロードとアップロード、及びそのメタデータの読み書きのためには、`write:packages`スコープを選択してください。
    - コンテナイメージを削除するには`delete:packages`スコープを選択してください。

  詳しい情報については[コマンドラインのための個人のアクセストークンの作成](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)を参照してください。

2. PATを保存してください。 PATは環境変数として保存することをおすすめします。
  ```shell
  $ export CR_PAT=YOUR_TOKEN
  ```
3. コンテナタイプにあったCLIを利用して、
{% data variables.product.prodname_container_registry %} service at `{% data reusables.package_registry.container-registry-hostname %}`.
  {% raw %}
  ```shell
  $ echo $CR_PAT | docker login {% endraw %}{% data reusables.package_registry.container-registry-hostname %}{% raw %} -u USERNAME --password-stdin
  > Login Succeeded
  ```
  {% endraw %}
