---
title: コメントを扱う
intro: REST API を使用すると、プルリクエスト、Issue、およびコミットにある、コメントにアクセスして管理できます。
redirect_from:
  - /guides/working-with-comments
  - /v3/guides/working-with-comments
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
ms.openlocfilehash: 9b3b768d66199fda62bc5e644da9539d5425215e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131328'
---
Pull Request の場合、{% data variables.product.product_name %} には、[Pull Request 全体に対するコメント、Pull Request][PR comment] 内の [特定の行に対するコメント][PR line comment]、Pull Request 内の[特定のコミットに関するコメント][commit comment]の 3 種類のコメント ビューが用意されています。 

これらの種類のコメントは、それぞれ{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} APIの異なる部分を通ります。
このガイドでは、それぞれにアクセスして操作する方法を説明します。 すべての例で、"octocat" リポジトリ上で[作成されたこのサンプル Pull Request][sample PR] を使用します。 いつもと同様に、サンプルは [platform-samples リポジトリ][platform-samples]にあります。

## プルリクエストのコメント

Pull Request のコメントにアクセスするには、[Issues API][issues] を使用します。
最初はこれを意外に思うかもしれません。 しかし、Pull Request がコード付きの Issue に過ぎないことさえ理解すれば、Pull Request にコメントを作成するため Issues API を使うこともうなずけるでしょう。

[Octokit.rb][octokit.rb] を使用して Ruby スクリプトを作成することで、Pull Request コメントをフェッチする方法を示します。 [また、個人用アクセス トークン][personal token]を作成することも必要です。

Octokit.rb を使って Pull Request からコメントにアクセスを始めるには、以下のコードが役立つでしょう。

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

ここでは、特に Issues API を呼び出してコメント (`issue_comments`) を取得します。これにより、リポジトリの名前 (`octocat/Spoon-Knife`) と、関心のある Pull Request ID (`1176`) の両方が得られます。 その後は、コメントを反復処理して、各コメントの情報を取得しているだけです。

## 行につけるプルリクエストのコメント

diff ビュー内では、Pull Request 内の一つの変更について、特定の側面からディスカッションを開始できます。 これらのコメントは、変更されたファイル内の個々の行に対して発生します。 このディスカッションのエンドポイント URL は [Pull Request Review API][PR Review API] から取得されます。

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

上の例と非常に似ていることにお気づきでしょう。 このビューと Pull Request のコメントとの相違点は、会話の焦点にあります。
Pull Request に対するコメントでは、コードの全体的な方向性についてのディスカッションやアイデアを扱うべきです。 Pull Request のレビューの一環として行うコメントは、ファイルで特定の変更が実装された方法について特に扱うべきです。

## コミットのコメント

最後のタイプのコメントは、特に個々のコミットで発生します。 このため、[コミットのコメント API][commit comment API] が使用されます。

コミットのコメントを取得するには、コミットの SHA1 を使用します。
言い換えれば、プルリクエストに関する識別子は全く使用しません。 次に例を示します。

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
[issues]: /rest/reference/issues#comments
[personal token]: /articles/creating-an-access-token-for-command-line-use
[octokit.rb]: https://github.com/octokit/octokit.rb
[PR Review API]: /rest/reference/pulls#comments
[commit comment API]: /rest/reference/commits#get-a-commit-comment
