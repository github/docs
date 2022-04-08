### リポジトリに基づく検索

`repo`修飾子は、アクションを特定のリポジトリに限定するときに使ってください。 例:

  * `repo:my-org/our-repo`は`my-org` Organization内の`our-repo`リポジトリで起きたすべてのイベントを検索します。
  * `repo:my-org/our-repo repo:my-org/another-repo`は、`my-org` Organization内の`our-repo`及び`another-repo`の両リポジトリ内で起きたすべてのイベントを検索します。
  * `-repo:my-org/not-this-repo`は、`my-org` Organization内の`not-this-repo`リポジトリで起きたすべてのイベントを除外します。

`repo` 修飾子内にアカウント名を加える必要があることに注意してください。 `repo:our-repo` だけを検索しても機能しません。
