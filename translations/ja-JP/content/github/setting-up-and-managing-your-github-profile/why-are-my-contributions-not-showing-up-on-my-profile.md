---
title: コントリビューションがプロフィールに表示されないのはなぜですか？
intro: 'プロフィールのコントリビューショングラフは、{% data variables.product.product_name %} リポジトリへのコントリビューションの記録です。 ローカルタイムゾーンではなく、協定世界時 (UTC) に従って、コントリビューションにタイムスタンプが付けられます。 コントリビューションは、一定の基準を満たしている場合にのみカウントされます。 場合によっては、コントリビューションを表示するためにグラフを再構築する必要があります。'
redirect_from:
  - /articles/why-are-my-contributions-not-showing-up-on-my-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - プロフィール
---

### カウントされるコントリビューション

#### Issues, pull requests and discussions

Issues, pull requests and discussions will appear on your contribution graph if they were opened in a standalone repository, not a fork.

#### コミット
次の条件の**すべて**を満たしている場合、コミットはコントリビューショングラフに表示されます。
- コミットに使用されたメールアドレスが、{% data variables.product.product_name %} アカウントに関連付けられている場合。
- コミットが、フォークではなくスタンドアロンのリポジトリで行われた場合。
- コミットが以下で行われた場合:
  - リポジトリのデフォルトブランチ内
  - `gh-pages` ブランチ (プロジェクトサイトのリポジトリの場合) 内

プロジェクトサイトに関する詳しい情報については「[{% data variables.product.prodname_pages %}について](/github/working-with-github-pages/about-github-pages#types-of-github-pages-sites)」を参照してください。

また、次のうち**少なくとも 1 つ**が該当する必要があります:
- リポジトリのコラボレーターであるか、またはリポジトリを所有する Organization のメンバーであること。
- リポジトリをフォークしたこと。
- リポジトリでプルリクエストまたは Issue を開いていること。
- リポジトリに Star を付けたこと。

### コントリビューションがカウントされない一般的な理由

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

#### コミットしてからまだ 24 時間経過していない

コントリビューションとしてカウントするための要件を満たすコミットを行った後、コントリビューションがコントリビューショングラフに表示されるまで、最大 24 時間待つ必要があります。

#### Your local Git commit email isn't connected to your account

Commits must be made with an email address that is connected to your account on {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %}, or the {% data variables.product.product_name %}-provided `noreply` email address provided to you in your email settings,{% endif %} in order to appear on your contributions graph.{% if currentVersion == "free-pro-team@latest" %} For more information about `noreply` email addresses, see "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#about-commit-email-addresses)."{% endif %}

コミット URL の最後に `.patch` を追加すると、コミットに使用されたメールアドレスを確認できます。例: <a href="https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch" data-proofer-ignore>https://github.com/octocat/octocat.github.io/commit/67c0afc1da354d8571f51b6f0af8f2794117fd10.patch</a>:

```
From 67c0afc1da354d8571f51b6f0af8f2794117fd10 Mon Sep 17 00:00:00 2001
From: The Octocat <octocat@nowhere.com>
Date: Sun, 27 Apr 2014 15:36:39 +0530
Subject: [PATCH] より良いウェルカムメッセージのためのインデックスを更新
```

[`From:`] フィールドのメールアドレスは、[ローカル Git 設定](/articles/set-up-git)で設定されたアドレスです。 この例では、コミットに使用されたメールアドレスは、`octocat@nowhere.com` です。

If the email address used for the commit is not connected to your account on {% data variables.product.product_name %}, {% if currentVersion == "github-ae@latest" %}change the email address used to author commits in Git. For more information, see "[Setting your commit email address](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)."{% else %}you must [add the email address](/articles/adding-an-email-address-to-your-github-account) to your {% data variables.product.product_name %} account. Your contributions graph will be rebuilt automatically when you add the new address.{% endif %}

{% warning %}

`jane@computer.local` などの汎用メールアドレスを {% data variables.product.product_name %} アカウントに追加することはできません。 コミットにこのようなメールアドレスを使用した場合、そのコミットは、{% data variables.product.product_name %} プロフィールにリンクされず、コントリビューショングラフに表示されません。

{% endwarning %}

#### デフォルトまたは `gh-pages` ブランチでコミットされていません

コミットがデフォルトのブランチまたは `gh-pages` ブランチ (プロジェクトサイトを持つリポジトリの場合) で行われた場合にのみカウントされます。 詳しい情報については、「[{% data variables.product.prodname_pages %} について](/github/working-with-github-pages/about-github-pages#types-of-github-pages-sites)」を参照してください。

コミットがデフォルト以外または `gh-pages` 以外のブランチにあり、コントリビューションにカウントする場合は、以下のうち 1 つを行う必要があります:
- 変更をデフォルトのブランチまたは `gh-pages` ブランチにマージするには、[プルリクエストを開きます](/articles/creating-a-pull-request)。
- リポジトリの[デフォルトブランチを変更します](/github/administering-a-repository/changing-the-default-branch)。

{% warning %}

リポジトリのデフォルトブランチを変更すると、すべてのリポジトリコラボレータにも変更されます。 これを行うのは、新しいブランチを将来のすべてのプルリクエストとコミットが行われるベースにしたい場合だけにしてください。

{% endwarning %}

#### コミットがフォークで行われました

フォークで行われたコミットは、 コントリビューションにはカウントされません。 カウントには、次のいずれかを実行する必要があります:
- 変更内容を親リポジトリにマージするために、[プルリクエストを開きます](/articles/creating-a-pull-request)。
- フォークをデタッチして、{% data variables.product.product_name %} 上のスタンドアロンリポジトリに変換するために、{% data variables.contact.contact_support %} に連絡してください。 フォークに独自のフォークがある場合は、フォークがリポジトリと一緒に新しいネットワークに移動するのか、現在のネットワークに残るのかを {% data variables.contact.github_support %}に連絡してください。 詳細は「[フォークについて](/articles/about-forks/)」を参照してください。

### 参考リンク

- [プロフィールでプライベートコントリビューションを公開または非表示にする](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)
- [プロフィールページ上にコントリビューションを表示する](/articles/viewing-contributions-on-your-profile-page)
