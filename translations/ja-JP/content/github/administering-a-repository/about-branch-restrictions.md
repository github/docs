---
title: ブランチ制限について
intro: 'Organization に属するリポジトリ内のブランチは、特定のユーザ{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}、{% else %} または{% endif %}チーム{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}、またはアプリ{% endif %}のみがブランチにプッシュできるように設定できます。'
product: '{% data reusables.gated-features.branch-restrictions %}'
redirect_from:
  - /articles/about-branch-restrictions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

ブランチ制限を有効化している場合、権限を与えられたユーザ{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}、{% else %}または{% endif %}チーム{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}、またはアプリ{% endif %}のみが、保護されたブランチにプッシュできます。 詳細については、「[ブランチ制限の有効化](/articles/enabling-branch-restrictions)」と「[保護されたブランチについて](/articles/about-protected-branches) 」を参照してください。 保護されたブランチの設定では、保護されたブランチへのプッシュアクセスを持つユーザ{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}、{% else %}または{% endif %}チーム{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}、またはアプリ{% endif %}を表示および編集できます。

保護されたブランチをへのプッシュアクセスを与えられる対象は、リポジトリへの`書き込み`アクセスを持つユーザ{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}、{% else %}または{% endif %}チーム{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}、またはインストールされたアプリ{% data variables.product.prodname_github_apps %}{% endif %}のみです。

リポジトリに対する管理者権限を持つ人{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}とアプリ{% endif %}は、保護されたブランチに常にプッシュできます。

{% tip %}

**注釈:** [Include administrators] が選択されていて、ブランチでステータスチェック必須にしており、かつステータスチェックが失敗した場合は、管理者権限を持つ人{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}やアプリ{% endif %}であっても、保護されたブランチに変更をプッシュしようとすれば失敗することになります。 詳しい情報については、「[ステータスチェック必須の有効化](/articles/enabling-required-status-checks)」を参照してください。

{% endtip %}

### 参考リンク

- [保護されたブランチについて](/articles/about-protected-branches)
- [保護されたブランチの設定](/articles/configuring-protected-branches)
- [ステータスチェック必須について](/articles/about-required-status-checks)
- [ステータスチェック必須の有効化](/articles/enabling-required-status-checks)
