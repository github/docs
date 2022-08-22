   リポジトリの開発コンテナの設定が他のリポジトリへのアクセスの権限を指定しているなら、認可ページが表示されます。 `devcontainer.json`でのこの指定に関する詳しい情報については「[codespace内での他のリポジトリへのアクセス管理](/codespaces/managing-your-codespaces/managing-repository-access-for-your-codespaces)」を参照してください。

   要求された権限の詳細を表示するには{% octicon "chevron-down" aria-label="The expand down icon" %}をクリックしてください。

   ![事前ビルドのための認可ページのスクリーンショット](/assets/images/help/codespaces/prebuild-authorization-page.png)

   **Authorize and continue（認証して続ける）**をクリックして、事前ビルドの作成のためのこれらの権限を付与します。 あるいは**Continue without authorizing（認可せずに続ける）**をクリックすることもできますが、そうした場合にはその結果の事前ビルドから生成されるCodespacesは正しく動作しないかもしれません。

   {% note %}

   **ノート**: この事前ビルドを使ってCodespacesを作成したユーザは、これらの権限の付与も求められます。

   {% endnote %}