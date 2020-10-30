---
title: 保護されたブランチと必須のステータスチェックについて
intro: '保護されたブランチは、リポジトリのコラボレータが回復不能な変更をブランチに行えないことを確実にします。 必須ステータスチェックにより、コラボレータが保護されたブランチに変更を加える前に、すべての必須 CI テストにパスしていることが保証されます。 Organization に属するリポジトリ内のブランチは、特定のユーザ{% if currentVersion ver_gt "enterprise-server@2.18" %}、{% else %} または{% endif %}チーム{% if currentVersion ver_gt "enterprise-server@2.18" %}、またはアプリ{% endif %}のみがブランチにプッシュできるように設定できます。'
redirect_from:
  - /enterprise/admin/developer-workflow/about-protected-branches-and-required-status-checks
versions:
  enterprise-server: '*'
---

*保護されたブランチ*は、リポジトリの管理者が保護することにしたブランチに対する Git のいくつかの機能をブロックします。 保護されたブランチは、

* フォースプッシュできません。
* 削除できません。
* [必須のステータスチェック](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/configuring-protected-branches-and-required-status-checks#enabling-required-status-checks)をパスするまでは、変更をマージできません。

リポジトリに対する管理者権限を持つユーザなら誰でも、保護されたブランチに常にプッシュできます。 *ブランチ制限*を有効化している場合、権限を与えられたユーザ{% if currentVersion ver_gt "enterprise-server@2.18" %}、{% else %}または{% endif %}チーム{% if currentVersion ver_gt "enterprise-server@2.18" %}、またはアプリ{% endif %}のみが、保護されたブランチにプッシュできます。 詳しい情報については[保護されたブランチと必須のステータスチェックの設定](/enterprise/{{ currentVersion }}/admin/guides/developer-workflow/configuring-protected-branches-and-required-status-checks)を参照してください。

![制限されたブランチの権限](/assets/images/help/repository/restrict-branch-users.png).

{% tip %}

**注釈:** [Include administrators] が選択されていて、ブランチで[ステータスチェック必須](/articles/enabling-required-status-checks)にしており、かつステータスチェックが失敗した場合は、管理者権限を持つ人{% if currentVersion ver_gt "enterprise-server@2.18" %}やアプリ{% endif %}であっても、保護されたブランチに変更をプッシュしようとすれば失敗することになります。

{% endtip %}
