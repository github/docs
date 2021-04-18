1. ユーザが所有するフォークでは、上流のリポジトリに対するプッシュアクセス件を持つ人がプルリクエストに変更することを許したくない場合は、**Allow edits from maintainers（メンテナからの編集を許可）**の選択を解除してください。

    {% warning %}

    **Warning:** If your fork contains {% data variables.product.prodname_actions %} workflows, the option is  **Allow edits and access to secrets by maintainers**. Allowing edits on a fork's branch that contains {% data variables.product.prodname_actions %} workflows also allows a maintainer to edit the forked repository's workflows, which can potentially reveal values of secrets and grant access to other branches.

    {% endwarning %}
