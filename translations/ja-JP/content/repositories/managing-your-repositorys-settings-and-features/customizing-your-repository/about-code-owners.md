---
title: コードオーナーについて
intro: CODEOWNERS ファイルを使い、リポジトリ中のコードに対して責任を負う個人あるいは Team を指定できます。
redirect_from:
  - /articles/about-codeowners
  - /articles/about-code-owners
  - /github/creating-cloning-and-archiving-repositories/about-code-owners
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-code-owners
product: '{% data reusables.gated-features.code-owners %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 12265f0627ca6d0feb34244aab1c021b5ae6cc10
ms.sourcegitcommit: 9315c7dae9a673a2f8958df7632bf1af206a0bed
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188239'
---
管理者あるいはオーナー権限を持つ人は、リポジトリ中に CODEOWNERS ファイルをセットアップできます。

コード所有者には、リポジトリへの書き込み権限を持っている人を指定する必要があります。 コード所有者が Team である場合は、Team を表示できる必要があり、Team の個々のメンバーが直接書き込みアクセス許可を既に持っている場合でも、Organization のメンバーシップまたは別の Team メンバーシップを通じて、Team が書き込みアクセス許可を持っている必要があります。

## コードオーナーについて

コードオーナーは、他者が所有するコードを変更するプルリクエストをオープンすると、自動的にレビューをリクエストされます。 コードオーナーはドラフトのプルリクエストのレビューを自動的にリクエストされません。 pull request の詳細については、「[pull requests について](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)」を参照してください。 コードオーナーはドラフトのプルリクエストのレビューを自動的にリクエストされません。 プルリクエストをドラフトに変換する場合、通知を既にサブスクライブしているユーザは自動的にサブスクライブ解除されません。 詳細については、「[プル リクエストのステージの変更](/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request)」を参照してください。

管理者あるいはオーナー権限を持つ誰かがレビュー必須を有効化した場合、作者がリポジトリ中でプルリクエストをマージできるための条件としてコードオーナーからの承認を必須とすることもできます。 詳細については、「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)」を参照してください。

ファイルにコードオーナーがいる場合、プルリクエストをオープンする前にコードオーナーを確認できます。 リポジトリでは、ファイルを参照して、{% octicon "shield-lock" aria-label="The edit icon" %} をポイントできます。

![リポジトリ内のファイルのコードオーナー](/assets/images/help/repository/code-owner-for-a-file.png)

## CODEOWNERSファイルの場所

CODEOWNERS ファイルを使うには、リポジトリのコード所有者を追加するブランチのルート、`docs/`、または `.github/` ディレクトリに、`CODEOWNERS` という名前の新しいファイルを作成します。

各CODEOWNERSファイルは、リポジトリ内の単一のブランチにコードオーナーを割り当てます。 したがって、異なるブランチに対して異なるコード所有者を割り当てることができます (たとえば、既定のブランチのコード ベースには `@octo-org/codeowners-team`、`gh-pages` ブランチ上の {% data variables.product.prodname_pages %} サイトには `@octocat`)。

コードオーナーがレビューのリクエストを受け取るためには、CODEOWNERS ファイルがプルリクエストの base ブランチになければなりません。 たとえば、リポジトリの `gh-pages` ブランチ上 の *.js* ファイルのコード所有者として `@octocat` を割り当てた場合、 *.js* ファイルの変更に関する pull request がヘッド ブランチと `gh-pages` の間で開かれると、`@octocat` はレビュー要求を受け取ります。

## CODEOWNERS ファイルのサイズ

CODEOWNERS ファイルのサイズは、3 MB 未満でなければなりません。 この制限を超える CODEOWNERS ファイルは読み込まれません。つまり、コード所有者の情報は示されず、pull request での変更のレビューは、適切なコード所有者に要求されません。

CODEOWNERS ファイルのサイズを小さくするには、ワイルドカード パターンを使って複数のエントリを 1 つのエントリにまとめることを検討してください。

## CODEOWNERSの構文

{% warning %}

**警告:** gitignore ファイルには、CODEOWNERS ファイルでは "*動作しない*" いくつかの構文ルールがあります。
- `#` で始まるパターンは、コメントではなくパターンとして扱われるように、`\` を使ってエスケープします
- パターンを否定するには、`!` を使います
- 文字範囲を定義するには、`[ ]` を使います

{% endwarning %}

CODEOWNERS ファイルでは、[gitignore](https://git-scm.com/docs/gitignore#_pattern_format) ファイルで使われているルールと同じルールのほとんどに従っているパターンを使います。 パターンの後には、標準の `@username` または `@org/team-name` 形式を使って、{% data variables.product.prodname_dotcom %} の 1 つ以上のユーザー名または Team 名が続きます。 ユーザーとチームは、チームのメンバーが既にアクセス権を持っている場合でも、リポジトリへの明示的な `write` アクセス権を持っている必要があります。

{% ifversion fpt or ghec%}ほとんどの場合、{% else %}{% endif %}{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} のアカウントに追加されたメール アドレスで、ユーザーを参照することもできます (例: `user@example.com`)。 {% ifversion fpt or ghec %} メール アドレスを使って、{% data variables.enterprise.prodname_managed_user %} を参照することはできません。 {% data variables.enterprise.prodname_managed_users %} について詳しくは、{% data variables.product.prodname_ghe_cloud %} ドキュメントの{% else %}{% endif %}「[{% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users) について{% ifversion fpt %}」を参照してください。{% endif %}

{% data variables.product.prodname_dotcom %} では大文字と小文字を区別するファイル システムが使われているため、CODEOWNERS のパスでは大文字と小文字が区別されます。 CODEOWNERS は {% data variables.product.prodname_dotcom %} によって評価されるため、大文字と小文字が区別されないシステム (macOS など) であっても、CODEOWNERS ファイルのパスとファイルでは大文字と小文字が正しく使い分けられている必要があります。

{% ifversion codeowners-errors %} CODEOWNERS ファイルのいずれかの行に無効な構文が含まれている場合、その行はスキップされます。 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %} でリポジトリ内の CODEOWNERS ファイルに移動すると、強調表示されたエラーを確認できます。 リポジトリの CODEOWNERS ファイル内のエラーの一覧には、API からアクセスすることもできます。 詳細については、REST API のドキュメントの「[リポジトリ](/rest/reference/repos#list-codeowners-errors)」を参照してください。
{% else %} CODEOWNERS ファイルのいずれかの行に無効な構文が含まれている場合、そのファイルは検出されず、レビューの要求には使われません。
{% endif %}

### CODEOWNERS ファイルの例
```
# This is a comment.
# Each line is a file pattern followed by one or more owners.

# These owners will be the default owners for everything in
# the repo. Unless a later match takes precedence,
# @global-owner1 and @global-owner2 will be requested for
# review when someone opens a pull request.
*       @global-owner1 @global-owner2

# Order is important; the last matching pattern takes the most
# precedence. When someone opens a pull request that only
# modifies JS files, only @js-owner and not the global
# owner(s) will be requested for a review.
*.js    @js-owner #This is an inline comment.

# You can also use email addresses if you prefer. They'll be
# used to look up users just like we do for commit author
# emails.
*.go docs@example.com

# Teams can be specified as code owners as well. Teams should
# be identified in the format @org/team-name. Teams must have
# explicit write access to the repository. In this example,
# the octocats team in the octo-org organization owns all .txt files.
*.txt @octo-org/octocats

# In this example, @doctocat owns any files in the build/logs
# directory at the root of the repository and any of its
# subdirectories.
/build/logs/ @doctocat

# The `docs/*` pattern will match files like
# `docs/getting-started.md` but not further nested files like
# `docs/build-app/troubleshooting.md`.
docs/*  docs@example.com

# In this example, @octocat owns any file in an apps directory
# anywhere in your repository.
apps/ @octocat

# In this example, @doctocat owns any file in the `/docs`
# directory in the root of your repository and any of its
# subdirectories.
/docs/ @doctocat

# In this example, any change inside the `/scripts` directory
# will require approval from @doctocat or @octocat.
/scripts/ @doctocat @octocat

# In this example, @octocat owns any file in the `/apps`
# directory in the root of your repository except for the `/apps/github`
# subdirectory, as its owners are left empty.
/apps/ @octocat
/apps/github
```

## CODEOWNERS とブランチの保護
リポジトリの所有者は、ブランチ保護ルールを追加して、変更されたコードが変更されたファイルの所有者によって確実にレビューされるようにすることができます。 詳細については、「[保護されたブランチについて](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)」を参照してください。

## 参考資料

- [新しいファイルの作成](/articles/creating-new-files)
- 「[コラボレーターを個人リポジトリに招待する](/articles/inviting-collaborators-to-a-personal-repository)」
- [Organization のリポジトリへの個人のアクセスを管理する](/articles/managing-an-individual-s-access-to-an-organization-repository)
- [Organization のリポジトリに対するチームのアクセスを管理する](/articles/managing-team-access-to-an-organization-repository)
- [pull request レビューを表示する](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/viewing-a-pull-request-review)
