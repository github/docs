1. 実行したいタスクに対して適切なスコープを持つ新しい個人アクセストークン（PAT）を作成してください。 OrganizationがSSOを必須としている場合は、新しいトークンでSSOを有効化しなければなりません。
  {% warning %}

  **ノート:** `write:packages`スコープを選択した場合、PATを作成する際には`repo`スコープのせんたくを解除してください。 リポジトリのシークレットとして`repo`スコープを持つPATを追加すると、そのクレデンシャルはリポジトリのすべてのコラボレータからアクセスできるようになります。 そうすると、アクション内で`repo`スコープを持つPATが使われた場合、不要なアクセス権が追加で与えられることになります。 アクションのセキュリティのベストプラクティスに関する詳しい情報については「[GitHub Actionsのセキュリティ強化](/actions/getting-started-with-github-actions/security-hardening-for-github-actions#considering-cross-repository-access)」を参照してください。

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
`ghcr.io`にある{% data variables.product.prodname_github_container_registry %}サービスにサインインしてください。
  {% raw %}
  ```shell
  $ echo $CR_PAT | docker login ghcr.io -u USERNAME --password-stdin
  > Login Succeeded
  ```
  {% endraw %}
