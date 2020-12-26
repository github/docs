---
title: 保護されたブランチについて
intro: '保護されたブランチは、リポジトリのコラボレーターが回復不能な変更をブランチに行えないようにしてくれます。 保護されたブランチを有効にすると、ステータスチェック必須やレビュー必須といった他のオプションのチェックや必須事項を有効にすることもできるようになります。'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-protected-branches
  - /enterprise/admin/developer-workflow/about-protected-branches-and-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.pull_requests.about-protected-branches %} プルリクエストのリポジトリへのマージ方法に制限を適用することができます。

リポジトリのオーナーおよびリポジトリの管理権限を持つ人は、コラボレーターがリポジトリでブランチをマージする前に特定のワークフローや必須事項を強制できます。そのためには保護されたブランチのルールを作成します。

{% data reusables.repositories.branch-rules-example %}詳しい情報については[保護されたブランチの設定](/articles/configuring-protected-branches/)を参照してください。

### 保護されたブランチのルールの優先順位付け

リポジトリが同じブランチに影響する複数の保護されたブランチのルールを持っているなら、特定のブランチ名を含むルールがもっとも高い優先順位を持ちます。 同じ特定のブランチ名を参照する保護されたブランチのルールが複数あるなら、最初に作成されたブランチルールが高い優先順位を持ちます。

`*`、`?`、`]`などの特殊文字を含む保護されたブランチのルールは、作成された順序で適用されるので、これらの文字を持つ古いルールが高い優先順位を持ちます。

### ブランチの保護の設定

When you create a branch protection rule in a repository, collaborators cannot force push to the protected branch or delete the branch{% if currentVersion == "free-pro-team@latest" %} by default{% endif %}. 他のブランチ保護設定を有効にすることができます。 詳細については、「[プルリクエストのマージ可能性を定義](/github/administering-a-repository/defining-the-mergeability-of-pull-requests)」を参照してください。

### 参考リンク

- [ステータスチェック必須について](/articles/about-required-status-checks)
- [プルリクエストのための必須レビューについて](/articles/about-required-reviews-for-pull-requests)
- 「[必須のコミット署名について](/articles/about-required-commit-signing)」
