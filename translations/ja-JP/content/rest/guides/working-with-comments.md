---
title: コメントを扱う
intro: REST API を使用すると、プルリクエスト、Issue、およびコミットにある、コメントにアクセスして管理できます。
redirect_from:
  - /guides/working-with-comments/
  - /v3/guides/working-with-comments
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---



各プルリクエストに対して、{% data variables.product.product_name %} は 3 種類のコメント表示を提供しています。プルリクエスト全体に対する[プルリクエストのコメント][PR comment]、プルリクエスト内の[特定行のコメント][PR line comment]、そしてプルリクエスト内の[特定のコメントへのコメント][commit comment]です。

コメントの各タイプは、{% data variables.product.product_name %} API の別々の部分を経由します。 このガイドでは、それぞれにアクセスして操作する方法を説明します。 各例では、"octocat" リポジトリで作成した、[このサンプルのプルリクエスト][sample PR]を使用します。 いつもと同様、サンプルは [platform-samples リポジトリ][platform-samples]にあります。

### プルリクエストのコメント

プルリクエストのコメントにアクセスするには、[Issues API][issues] を経由します。 最初はこれを意外に思うかもしれません。 しかし、プルリクエストがコード付きの Issue に過ぎないことさえ理解すれば、プルリクエストにコメントを作成するため Issues API を使うこともうなずけるでしょう。

ここでは [Octokit.rb][octokit.rb] を使って Ruby スクリプトを作成し、プルリクエストのコメントをフェッチする方法を示します。 また、[個人アクセストークン][personal token]の作成もおすすめします。

Octokit.rb を使ってプルリクエストからコメントにアクセスを始めるには、以下のコードが役立つでしょう。

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

client.issue_comments("octocat/Spoon-Knife", 1176).each do |comment|
  username = comment[:user][:login]
  post_date = comment[:created_at]
  content = comment[:body]

  puts "#{username} made a comment on #{post_date}. It says:\n'#{content}'\n"
end
```

ここでは、コメントを取得するため Issues API を 呼び出し (`issue_comments`)、取得したいコメントのリポジトリ名 (`octocat/Spoon-Knife`) とプルリクエスト ID (`1176`) の両方を指定しています。 その後は、コメントを反復処理して、各コメントの情報を取得しているだけです。

### 行につけるプルリクエストのコメント

diff ビュー内では、プルリクエスト内の一つの変更について、特定の側面からディスカッションを開始できます。 これらのコメントは、変更されたファイル内の個々の行について書き込まれます。 このディスカッションのエンドポイントURLは、[Pull Request Review API][PR Review API] から取得されます。

以下のコードは、指定したプルリクエスト番号のファイルにあるプルリクエストのコメントすべてをフェッチします。

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

client.pull_request_comments("octocat/Spoon-Knife", 1176).each do |comment|
  username = comment[:user][:login]
  post_date = comment[:created_at]
  content = comment[:body]
  path = comment[:path]
  position = comment[:position]

  puts "#{username} made a comment on #{post_date} for the file called #{path}, on line #{position}. It says:\n'#{content}'\n"
end
```

上の例と非常に似ていることにお気づきでしょう。 このビューとプルリクエストのコメントとの違いは、会話の焦点にあります。 プルリクエストに対するコメントは、コードの全体的な方向性についてのディスカッションやアイデアを扱うべきです。 プルリクエストのレビューの一環として行うコメントは、ファイルで特定の変更が実装された方法について特に扱うべきです。

### コミットのコメント

最後のタイプのコメントは、特に個々のコミットで発生します。 このため、[コミットのコメント API][commit comment API] を使用します。

コミットのコメントを取得するには、コミットの SHA1 を使用します。 言い換えれば、プルリクエストに関する識別子は全く使用しません。 次に例を示します。

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

client.commit_comments("octocat/Spoon-Knife", "cbc28e7c8caee26febc8c013b0adfb97a4edd96e").each do |comment|
  username = comment[:user][:login]
  post_date = comment[:created_at]
  content = comment[:body]

  puts "#{username} made a comment on #{post_date}. It says:\n'#{content}'\n"
end
```

この API 呼び出しは、単一の行コメントと、コミット全体に対するコメントを取得することに注目してください。

[PR comment]: https://github.com/octocat/Spoon-Knife/pull/1176#issuecomment-24114792
[PR line comment]: https://github.com/octocat/Spoon-Knife/pull/1176#discussion_r6252889
[commit comment]: https://github.com/octocat/Spoon-Knife/commit/cbc28e7c8caee26febc8c013b0adfb97a4edd96e#commitcomment-4049848
[sample PR]: https://github.com/octocat/Spoon-Knife/pull/1176
[platform-samples]: https://github.com/github/platform-samples/tree/master/api/ruby/working-with-comments
[issues]: /v3/issues/comments/
[personal token]: /articles/creating-an-access-token-for-command-line-use
[octokit.rb]: https://github.com/octokit/octokit.rb
[PR Review API]: /v3/pulls/comments/
[commit comment API]: /v3/repos/comments/#get-a-commit-comment
