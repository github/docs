1. 新しいカスタムパターンの詳細を入力します。
   1. 少なくともパターンの名前と、シークレットパターンのフォーマットとして正規表現を提供しなければなりません。
   1. [**More options {% octicon "chevron-down" aria-label="down" %}** ]をクリックして、シークレットのフォーマットのその他の周辺コンテンツあるいは追加のマッチ要件を提供できます。
   1. Provide a sample test string to make sure your configuration is matching the patterns you expect.

   ![カスタムの{% data variables.product.prodname_secret_scanning %}パターン形式の作成](/assets/images/help/repository/secret-scanning-create-custom-pattern.png)
1. When you are satisfied with your new custom pattern, click {% ifversion fpt or ghes > 3.2 or ghae-next or ghec %}**Create pattern**{% elsif ghes = 3.2 %}**Create custom pattern**{% endif %}.
