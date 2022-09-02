1. 新しいカスタムパターンの詳細を入力します。
   1. 少なくともパターンの名前と、シークレットパターンのフォーマットとして正規表現を提供しなければなりません。
   1. [**More options {% octicon "chevron-down" aria-label="down" %}** ]をクリックして、シークレットのフォーマットのその他の周辺コンテンツあるいは追加のマッチ要件を提供できます。
   1. サンプルのテスト文字列を指定し、設定内容が期待するパターンにマッチすることを確認してください。
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5499 %}
   ![カスタムの{% data variables.product.prodname_secret_scanning %}パターン形式の作成](/assets/images/help/repository/secret-scanning-create-custom-pattern.png)
   {% else %}
   ![カスタムの{% data variables.product.prodname_secret_scanning %}パターン形式の作成](/assets/images/enterprise/3.2/repository/secret-scanning-create-custom-pattern.png)
   {% endif %}
