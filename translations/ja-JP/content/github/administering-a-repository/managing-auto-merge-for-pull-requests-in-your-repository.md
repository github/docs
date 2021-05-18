---
title: リポジトリ内のプルリクエストの自動マージを管理する
intro: リポジトリ内のプルリクエストの自動マージを許可または禁止できます。
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.1'
  github-ae: '*'
permissions: People with maintainer permissions can manage auto-merge for pull requests in a repository.
topics:
  - Repositories
---

### 自動マージについて

リポジトリ内でプルリクエストの自動マージを許可すると、書き込み権限を持つユーザは、マージの要件がすべて満たされた際に、リポジトリ内の個々のプルリクエストを、自動的にマージするよう設定できます。 {% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@next" or currentVersion ver_gt "enterprise-server@3.1" %}書き込み権限を持たないユーザが、自動マージが有効なプルリクエストに変更をプッシュすると、そのプルリクエストに対する自動マージが無効となります。 {% endif %}詳しい情報については、「[プルリクエストを自動的にマージする](/github/collaborating-with-issues-and-pull-requests/automatically-merging-a-pull-request)」を参照してください。

### 自動マージを管理する

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. [Merge button] の下にある [**Allow auto-merge**] を選択または選択解除します。 ![自動マージを許可または禁止するチェックボックス](/assets/images/help/pull_requests/allow-auto-merge-checkbox.png)
