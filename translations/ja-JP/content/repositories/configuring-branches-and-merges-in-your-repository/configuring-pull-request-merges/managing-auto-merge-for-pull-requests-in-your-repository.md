---
title: リポジトリ内のプルリクエストの自動マージを管理する
intro: リポジトリ内のプルリクエストの自動マージを許可または禁止できます。
product: '{% data reusables.gated-features.auto-merge %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
permissions: People with maintainer permissions can manage auto-merge for pull requests in a repository.
topics:
  - Repositories
redirect_from:
  - /github/administering-a-repository/managing-auto-merge-for-pull-requests-in-your-repository
  - /github/administering-a-repository/configuring-pull-request-merges/managing-auto-merge-for-pull-requests-in-your-repository
shortTitle: Manage auto merge
---

## 自動マージについて

リポジトリ内でプルリクエストの自動マージを許可すると、書き込み権限を持つユーザは、マージの要件がすべて満たされた際に、リポジトリ内の個々のプルリクエストを、自動的にマージするよう設定できます。 If someone who does not have write permissions pushes changes to a pull request that has auto-merge enabled, auto-merge will be disabled for that pull request. 詳しい情報については「[Pull Requestの自動マージ](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)」を参照してください。

## 自動マージを管理する

{% data reusables.pull_requests.auto-merge-requires-branch-protection %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Under {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6069 %}"Pull Requests"{% else %}"Merge button"{% endif %}, select or deselect **Allow auto-merge**. ![自動マージを許可または禁止するチェックボックス](/assets/images/help/pull_requests/allow-auto-merge-checkbox.png)
