1. ユーザが所有するフォークでは、上流のリポジトリに対するプッシュアクセス件を持つ人がプルリクエストに変更することを許したくない場合は、**Allow edits from maintainers（メンテナからの編集を許可）**の選択を解除してください。

    {% warning %}

    **警告:** フォークに{% data variables.product.prodname_actions %}ワークフローが含まれているなら、オプションは**Allow edits and access to secrets by maintainers（メンテナからの編集とシークレットへのアクセスを許可）**になります。 {% data variables.product.prodname_actions %}ワークフローを含むフォークのブランチの編集を許可すると、メンテナにフォークされたリポジトリのワークフローの編集も許可することになり、シークレットの値を明らかにして他のブランチへのアクセスも許可してしまう可能性があります。

    {% endwarning %}
