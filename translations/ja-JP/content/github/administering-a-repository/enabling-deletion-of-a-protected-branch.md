---
title: 保護されたブランチの削除を有効にする
intro: リポジトリへの書き込みアクセスを持つすべてのユーザに、保護されたブランチの削除を許可できます。
product: '{{ site.data.reusables.gated-features.protected-branches }}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
---

リポジトリに対する管理者権限があるユーザは、ブランチの削除を有効化できます。

デフォルトでは、保護されたブランチは削除できません。 保護されたブランチの削除を有効にすると、少なくともリポジトリへの書き込み権限を持つユーザは、管理者権限を持つブランチを含め、ブランチを削除できます。

{{ site.data.reusables.repositories.protected-branches-options }}

{{ site.data.reusables.repositories.navigate-to-repo }}
{{ site.data.reusables.repositories.sidebar-settings }}
{{ site.data.reusables.repositories.repository-branches }}
{{ site.data.reusables.repositories.add-branch-protection-rules }}
6. [Rules applied to everyone including administrators] で、 [**Allow deletions**] を選択します。 ![ブランチ削除オプションを許可する](/assets/images/help/repository/allow-branch-deletions.png)
7. ** Create（作成）**をクリックしてください。
