---
title: コントリビューションがプロフィールに表示されないのはなぜですか？
intro: Learn common reasons that contributions may be missing from your contributions graph.
redirect_from:
  - /articles/why-are-my-contributions-not-showing-up-on-my-profile
  - /github/setting-up-and-managing-your-github-profile/why-are-my-contributions-not-showing-up-on-my-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Missing contributions
---

## About your contribution graph

Your profile contributions graph is a record of contributions you've made to repositories {% ifversion ghae %}owned by{% else %}on{% endif %} {% data variables.product.product_location %}. ローカルタイムゾーンではなく、協定世界時 (UTC) に従って、コントリビューションにタイムスタンプが付けられます。 コントリビューションは、一定の基準を満たしている場合にのみカウントされます。 場合によっては、コントリビューションを表示するためにグラフを再構築する必要があります。

If you are part of an organization that uses SAML single sign-on (SSO), you won’t be able to see contribution activity from the organization on your profile if you do not have an active SSO session. People viewing your profile from outside your organization will see anonymized contribution activity of your contribution activity for your organization.

## カウントされるコントリビューション

### Issue、プルリクエスト、ディスカッション

Issue、プルリクエスト、およびディスカッションは、フォークではなくスタンドアロンリポジトリで開かれた場合、コントリビューショングラフに表示されます。

### コミット
次の条件の**すべて**を満たしている場合、コミットはコントリビューショングラフに表示されます。
- The email address used for the commits is associated with your account on {% data variables.product.product_location %}.
- コミットが、フォークではなくスタンドアロンのリポジトリで行われた場合。
- コミットが以下で行われた場合:
  - リポジトリのデフォルトブランチ内
  - `gh-pages` ブランチ (プロジェクトサイトのリポジトリの場合) 内

プロジェクトサイトに関する詳しい情報については「[{% data variables.product.prodname_pages %}について](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)」を参照してください。

また、次のうち**少なくとも 1 つ**が該当する必要があります:
- リポジトリのコラボレーターであるか、またはリポジトリを所有する Organization のメンバーであること。
- リポジトリをフォークしたこと。
- リポジトリでプルリクエストまたは Issue を開いていること。
- リポジトリに Star を付けたこと。

## コントリビューションがカウントされない一般的な理由

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

### コミットしてからまだ 24 時間経過していない

コントリビューションとしてカウントするための要件を満たすコミットを行った後、コントリビューションがコントリビューショングラフに表示されるまで、最大 24 時間待つ必要があります。

### ローカルの Git コミットメールがアカウントに接続されていない

Commits must be made with an email address that is connected to your account on {% data variables.product.product_location %}{% ifversion fpt or ghec %}, or the {% data variables.product.prodname_dotcom %}-provided `noreply` email address provided to you in your email settings,{% endif %} in order to appear on your contributions graph.{% ifversion fpt or ghec %} For more information about `noreply` email addresses, see "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#about-commit-email-addresses)."{% endif %}

You can check the email address used for a commit by adding `.patch` to the end of a commit URL, e.g. <a href="https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch" data-proofer-ignore>https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch</a>:

```
From 67c0afc1da354d8571f51b6f0af8f2794117fd10 Mon Sep 17 00:00:00 2001
From: The Octocat <octocat@nowhere.com>
Date: Sun, 27 Apr 2014 15:36:39 +0530
Subject: [PATCH] より良いウェルカムメッセージのためのインデックスを更新
```

[`From:`] フィールドのメールアドレスは、[ローカル Git 設定](/articles/set-up-git)で設定されたアドレスです。 この例では、コミットに使用されたメールアドレスは、`octocat@nowhere.com` です。

If the email address used for the commit is not connected to your account on {% data variables.product.product_location %}, {% ifversion ghae %}change the email address used to author commits in Git. For more information, see "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)."{% else %}you must [add the email address](/articles/adding-an-email-address-to-your-github-account) to your account on {% data variables.product.product_location %}. 新しいアドレスを追加すると、 コントリビューショングラフが自動的に再構築されます。{% endif %}

{% warning %}

**Warning**: Generic email addresses, such as `jane@computer.local`, cannot be added to {% data variables.product.prodname_dotcom %} accounts. If you use such an email for your commits, the commits will not be linked to your {% data variables.product.prodname_dotcom %} profile and will not show up in your contribution graph.

{% endwarning %}

### デフォルトまたは `gh-pages` ブランチでコミットされていません

コミットがデフォルトのブランチまたは `gh-pages` ブランチ (プロジェクトサイトを持つリポジトリの場合) で行われた場合にのみカウントされます。 For more information, see "[About {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites)."

コミットがデフォルト以外または `gh-pages` 以外のブランチにあり、コントリビューションにカウントする場合は、以下のうち 1 つを行う必要があります:
- 変更をデフォルトのブランチまたは `gh-pages` ブランチにマージするには、[プルリクエストを開きます](/articles/creating-a-pull-request)。
- [Change the default branch](/github/administering-a-repository/changing-the-default-branch) of the repository.

{% warning %}

**Warning**: Changing the default branch of the repository will change it for all repository collaborators. これを行うのは、新しいブランチを将来のすべてのプルリクエストとコミットが行われるベースにしたい場合だけにしてください。

{% endwarning %}

### コミットがフォークで行われました

フォークで行われたコミットは、 コントリビューションにはカウントされません。 カウントには、次のいずれかを実行する必要があります:
- 変更内容を親リポジトリにマージするために、[プルリクエストを開きます](/articles/creating-a-pull-request)。
- To detach the fork and turn it into a standalone repository on {% data variables.product.product_location %}, contact {% data variables.contact.contact_support %}. If the fork has forks of its own, let {% data variables.contact.contact_support %} know if the forks should move with your repository into a new network or remain in the current network. 詳細は「[フォークについて](/articles/about-forks/)」を参照してください。

## 参考リンク

- [プロフィールでプライベートコントリビューションを公開または非表示にする](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)
- [プロフィールページ上にコントリビューションを表示する](/articles/viewing-contributions-on-your-profile-page)
