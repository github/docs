---
title: コードオーナーについて
intro: CODEOWNERS ファイルを使い、リポジトリ中のコードに対して責任を負う個人あるいは Team を指定できます。
redirect_from:
  - /articles/about-codeowners/
  - /articles/about-code-owners
product: '{% data reusables.gated-features.code-owners %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

管理者あるいはオーナー権限を持つ人は、リポジトリ中に CODEOWNERS ファイルをセットアップできます。

コードオーナーに指定する人は、リポジトリへの書き込み権限を持っていなければなりません。 コードオーナーが Team である場合、Team の個々のメンバーが直接、書き込み権限を持っているときでも、Organization のメンバーであることまたは他の Team のメンバーであることを通じて、Team が書き込み権限を持っている必要があります。

### コードオーナーについて

コードオーナーは、他者が所有するコードを変更するプルリクエストをオープンすると、自動的にレビューをリクエストされます。 コードオーナーはドラフトのプルリクエストのレビューを自動的にリクエストされません。 ドラフトのプルリクエストに関する詳しい情報については「[プルリクエストについて](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests)」を参照してください。 コードオーナーはドラフトのプルリクエストのレビューを自動的にリクエストされません。 プルリクエストをドラフトに変換する場合、通知を既にサブスクライブしているユーザは自動的にサブスクライブ解除されません。 詳しい情報については、「[プルリクエストのステージを変更する](/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request)」を参照してください。

管理者あるいはオーナー権限を持つ誰かがレビュー必須を有効化した場合、作者がリポジトリ中でプルリクエストをマージできるための条件としてコードオーナーからの承認を必須とすることもできます。 詳しい情報については[保護されたブランチについて](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging)を参照してください。

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}Team がコードレビューの割り当てを有効にしている場合、個々の承認は、保護されたブランチでのコードオーナーの承認要件を満たしません。 詳しい情報については、「[Team のコードレビューの割り当てを管理する](/github/setting-up-and-managing-organizations-and-teams/managing-code-review-assignment-for-your-team)」を参照してください。{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
ファイルにコードオーナーがいる場合、プルリクエストをオープンする前にコードオーナーを確認できます。 リポジトリでは、ファイルを参照して
{% octicon "shield-lock" aria-label="The edit icon" %}.

![リポジトリ内のファイルのコードオーナー](/assets/images/help/repository/code-owner-for-a-file.png)
{% endif %}

### CODEOWNERSファイルの場所

CODEOWNERS ファイルを使うためには、コードオーナーを追加したいブランチで、リポジトリのルート、`docs/`、`.github/` のいずれかのディレクトリに `CODEOWNERS` という新しいファイルを作成してください。

各CODEOWNERSファイルは、リポジトリ内の単一のブランチにコードオーナーを割り当てます。 したがって、デフォルトブランチのコードベースに `@octo-org/codeowners-team`、`gh-pages` ブランチの {% data variables.product.prodname_pages %} サイトに `@octocat` など、ブランチごとに異なるコードオーナーを割り当てることができます。

コードオーナーがレビューのリクエストを受け取るためには、CODEOWNERS ファイルがプルリクエストの base ブランチになければなりません。 たとえばリポジトリ中の`gh-pages`ブランチの、*.js*ファイルのコードオーナーとして`@octocat`を割り当てたなら、*.js*に変更を加えるプルリクエストがheadブランチと`gh-pages`の間でオープンされると、`@octocat`はレビューのリクエストを受けることになります。

### CODEOWNERSの構文

CODEOWNERS ファイルは、[一部の例外](#syntax-exceptions)を除いて、[gitignore](https://git-scm.com/docs/gitignore#_pattern_format) ファイルで使用されるルールのほとんどに従うパターンを使用します。 パターンの後には1つ以上の{% data variables.product.prodname_dotcom %}のユーザー名あるいはTeam名が続きます。これらの名前には標準の`@username`あるいは`@org/team-name`フォーマットが使われます。 たとえば `user@example.com` のような、ユーザの {% data variables.product.product_name %} アカウントに追加されたメールアドレスでユーザを参照することもできます。

CODEOWNERS ファイルのいずれかの行に無効な構文が含まれている場合、そのファイルは検出されず、レビューのリクエストには使用されません。
#### CODEOWNERS ファイルの例
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

# この例では、@doctocatはリポジトリのルートにある
# build/logs及びそのサブディレクトリ内のすべてのファイルの
# オーナーです。
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
```
#### 構文の例外
gitignore ファイルには、CODEOWNERS ファイルでは動作しないいくつかの構文ルールがあります。
- コメントではなくパターンとして扱われるように、`\` を使用して `#` で始まるパターンをエスケープする
- `!` を使用してパターンを否定する
- `[ ]` を使用して文字範囲を定義する



### 参考リンク

- [新しいファイルの作成](/articles/creating-new-files)
- [個人リポジトリへのコラボレータの招待](/articles/inviting-collaborators-to-a-personal-repository)
- [Organizationのリポジトリへの個人のアクセスの管理](/articles/managing-an-individual-s-access-to-an-organization-repository)
- [OrganizationのリポジトリへのTeamのアクセスの管理](/articles/managing-team-access-to-an-organization-repository)
- [プルリクエストレビューの表示](/articles/viewing-a-pull-request-review)
