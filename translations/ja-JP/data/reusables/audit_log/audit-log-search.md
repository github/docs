ログには、それぞれのアクションに関する以下の情報があります。

* アクションの対象となったリポジトリ
* アクションを実行したユーザ
* 実行されたアクション
* アクションが実行された国
* アクションが発生した日時

テキストを使用してエントリを検索することはできません。 ただし、さまざまなフィルターを使用すれば検索クエリを作成できます。 ログを検索するときに使用される多くの演算子 (`-`、`>`、`<` など) は、{% data variables.product.product_name %} 全体で検索するものと同じ形式です。 詳細は「[{% data variables.product.prodname_dotcom %} での検索](/github/searching-for-information-on-github/about-searching-on-github)」を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
#### 操作に基づく検索

`operation`修飾子は、アクションを特定の操作の種類に限定するときに使ってください。 例:

  * `operation:access`は、リソースがアクセスされたすべてのイベントを見つけます。
  * `operation:authentication`は認証イベントが生じたすべてのイベントを見つけます。
  * `operation:create`は、リソースが作成されたすべてのイベントを見つけます。
  * `operation:modify`は、リソースが修正されたすべてのイベントを見つけます。
  * `operation:remove`は、既存のリソースが削除されたすべてのイベントを見つけます。
  * `operation:restore`は、既存のリソースがリストアされたすべてのイベントを見つけます。
  * `operation:transfer`は既存のリソースが移譲されたすべてのイベントを見つけます。
{% endif %}

#### リポジトリに基づく検索

`repo`修飾子は、アクションを特定のリポジトリに限定するときに使ってください。 例:

  * `repo:my-org/our-repo`は`my-org` Organization内の`our-repo`リポジトリで起きたすべてのイベントを検索します。
  * `repo:my-org/our-repo repo:my-org/another-repo`は、`my-org` Organization内の`our-repo`及び`another-repo`の両リポジトリ内で起きたすべてのイベントを検索します。
  * `-repo:my-org/not-this-repo`は、`my-org` Organization内の`not-this-repo`リポジトリで起きたすべてのイベントを除外します。

`repo` 修飾子内にアカウント名を加える必要があることに注意してください。 `repo:our-repo` だけを検索しても機能しません。

#### ユーザーに基づく検索

`actor`修飾子は、アクションを実行した人に基づいてイベントの範囲を指定できます。 例:

  * `actor:octocat`は`octocat`が行ったすべてのイベントを検索します。
  * `actor:octocat actor:hubot`は、`octocat`及び`hubot`が行ったすべてのイベントを検索します。
  * `-actor:hubot`は、`hubot`が行ったすべてのイベントを除外します。

使用できるのは {% data variables.product.product_name %} のユーザー名のみであり、個人の実名ではないことに注意してください。
