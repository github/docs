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
---

管理者あるいはオーナー権限を持つ人は、リポジトリ中に CODEOWNERS ファイルをセットアップできます。

The people you choose as code owners must have read permissions for the repository. When the code owner is a team, that team must be visible and it must have write permissions, even if all the individual members of the team already have write permissions directly, through organization membership, or through another team membership.

## コードオーナーについて

コードオーナーは、他者が所有するコードを変更するプルリクエストをオープンすると、自動的にレビューをリクエストされます。 コードオーナーはドラフトのプルリクエストのレビューを自動的にリクエストされません。 ドラフトのプルリクエストに関する詳しい情報については「[プルリクエストについて](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)」を参照してください。 コードオーナーはドラフトのプルリクエストのレビューを自動的にリクエストされません。 プルリクエストをドラフトに変換する場合、通知を既にサブスクライブしているユーザは自動的にサブスクライブ解除されません。 詳しい情報については、「[プルリクエストのステージを変更する](/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request)」を参照してください。

管理者あるいはオーナー権限を持つ誰かがレビュー必須を有効化した場合、作者がリポジトリ中でプルリクエストをマージできるための条件としてコードオーナーからの承認を必須とすることもできます。 詳しい情報については[保護されたブランチについて](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)を参照してください。

ファイルにコードオーナーがいる場合、プルリクエストをオープンする前にコードオーナーを確認できます。 リポジトリで、ファイルを参照して {% octicon "shield-lock" aria-label="The edit icon" %} にカーソルを合わせることができます。

![リポジトリ内のファイルのコードオーナー](/assets/images/help/repository/code-owner-for-a-file.png)

## CODEOWNERSファイルの場所

CODEOWNERS ファイルを使うためには、コードオーナーを追加したいブランチで、リポジトリのルート、`docs/`、`.github/` のいずれかのディレクトリに `CODEOWNERS` という新しいファイルを作成してください。

各CODEOWNERSファイルは、リポジトリ内の単一のブランチにコードオーナーを割り当てます。 したがって、デフォルトブランチのコードベースに `@octo-org/codeowners-team`、`gh-pages` ブランチの {% data variables.product.prodname_pages %} サイトに `@octocat` など、ブランチごとに異なるコードオーナーを割り当てることができます。

コードオーナーがレビューのリクエストを受け取るためには、CODEOWNERS ファイルがプルリクエストの base ブランチになければなりません。 たとえばリポジトリ中の`gh-pages`ブランチの、*.js*ファイルのコードオーナーとして`@octocat`を割り当てたなら、*.js*に変更を加えるプルリクエストがheadブランチと`gh-pages`の間でオープンされると、`@octocat`はレビューのリクエストを受けることになります。

{% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-4675 %}
## CODEOWNERS file size

CODEOWNERS files must be under 3 MB in size. A CODEOWNERS file over this limit will not be loaded, which means that code owner information is not shown and the appropriate code owners will not be requested to review changes in a pull request.

To reduce the size of your CODEOWNERS file, consider using wildcard patterns to consolidate multiple entries into a single entry.
{% endif %}

## CODEOWNERSの構文

CODEOWNERS ファイルは、[一部の例外](#syntax-exceptions)を除いて、[gitignore](https://git-scm.com/docs/gitignore#_pattern_format) ファイルで使用されるルールのほとんどに従うパターンを使用します。 パターンの後には1つ以上の{% data variables.product.prodname_dotcom %}のユーザー名あるいはTeam名が続きます。これらの名前には標準の`@username`あるいは`@org/team-name`フォーマットが使われます。 Users must have `read` access to the repository and teams must have explicit `write` access, even if the team's members already have access.

{% ifversion fpt or ghec%}In most cases, you{% else %}You{% endif %} can also refer to a user by an email address that has been added to their account on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, for example `user@example.com`. {% ifversion fpt or ghec %} You cannot use an email address to refer to a {% data variables.product.prodname_managed_user %}. For more information about {% data variables.product.prodname_managed_users %}, see "[About {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users){% ifversion fpt %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% else %}."{% endif %}{% endif %}

CODEOWNERS paths are case sensitive, because {% data variables.product.prodname_dotcom %} uses a case sensitive file system. Since CODEOWNERS are evaluated by {% data variables.product.prodname_dotcom %}, even systems that are case insensitive (for example, macOS) must use paths and files that are cased correctly in the CODEOWNERS file.

{% if codeowners-errors %}
If any line in your CODEOWNERS file contains invalid syntax, that line will be skipped. When you navigate to the CODEOWNERS file in your repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, you can see any errors highlighted. A list of errors in a repository's CODEOWNERS file is also accessible via the API. For more information, see "[Repositories](/rest/reference/repos#list-codeowners-errors)" in the REST API documentation.
{% else %}
CODEOWNERS ファイルのいずれかの行に無効な構文が含まれている場合、そのファイルは検出されず、レビューのリクエストには使用されません。
{% endif %}

### CODEOWNERS ファイルの例
```
# これはコメントです。
# 各行はファイルパターンの後に一人以上のオーナーが続きます。

# これらのオーナーは、リポジトリ中のすべてに対する
# デフォルトのオーナーになります。 後のマッチが優先されないかぎり、
# 誰かがプルリクエストをオープンすると、
# @global-owner1と@global-owner2にはレビューがリクエストされます。
*       @global-owner1 @global-owner2

# 順序は重要です。最後にマッチしたパターンが最も
# 高い優先度を持ちます。 誰かがJSファイルだけを変更する
# プルリクエストをオープンすると、@js-ownerだけにレビューが
# リクエストされ、グローバルのオーナーにはリクエストされません。
*.js    @js-owner

# メールアドレスの方が良ければ、そちらを使うこともできます。 それらは
# コミット作者のメールの場合と同じようにユーザの
# ルックアップに使われます。
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

# `docs/*`パターンは`docs/getting-started.md`のようなファイルには
# マッチしますが、それ以上にネストしている
# `docs/build-app/troubleshooting.md`のようなファイルにはマッチしません。
docs/*  docs@example.com

# この例では、@octocatはリポジトリ中のあらゆる場所にある
# appsディレクトリ内のすべてのファイルのオーナーになります。
apps/ @octocat

# この例では、@doctocatはリポジトリのルートにある
# `/docs` ディレクトリとそのサブディレクトリにある
# ファイルを所有しています。
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
### 構文の例外
gitignore ファイルには、CODEOWNERS ファイルでは動作しないいくつかの構文ルールがあります。
- Escaping a pattern starting with `#` using `\` so it is treated as a pattern and not a comment
- `!` を使用してパターンを否定する
- `[ ]` を使用して文字範囲を定義する

## CODEOWNERS and branch protection
Repository owners can add branch protection rules to ensure that changed code is reviewed by the owners of the changed files. 詳しい情報については、「[保護されたブランチについて](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches)」を参照してください。


## 参考リンク

- [新しいファイルの作成](/articles/creating-new-files)
- [個人リポジトリへのコラボレータの招待](/articles/inviting-collaborators-to-a-personal-repository)
- [Organizationのリポジトリへの個人のアクセスの管理](/articles/managing-an-individual-s-access-to-an-organization-repository)
- [OrganizationのリポジトリへのTeamのアクセスの管理](/articles/managing-team-access-to-an-organization-repository)
- [プルリクエストレビューの表示](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/viewing-a-pull-request-review)
