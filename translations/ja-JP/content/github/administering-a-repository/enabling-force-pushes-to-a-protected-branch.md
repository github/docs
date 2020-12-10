---
title: 保護されたブランチへのフォースプッシュを有効化する
intro: 保護されたブランチへのフォースプッシュを有効化することができます。
product: '{% data reusables.gated-features.protected-branches %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.20'
  github-ae: '*'
---

リポジトリに対する管理者権限があるユーザは、フォースプッシュを有効化できます。

### 保護されたブランチへのフォースプッシュについて

デフォルトでは、フォースプッシュはすべての保護されたブランチでブロックされます。 保護されたブランチのフォースプッシュを有効にすると、少なくともリポジトリへの書き込み権限を持つユーザは、管理者権限を持つブランチを含め、ブランチをフォースプッシュできます。

フォースプッシュを有効化しても、他のブランチ保護ルールは上書きされません。 たとえば、ブランチに直線状のコミット履歴が必要な場合、そのブランチにマージコミットをフォースプッシュすることはできません。

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}You cannot enable force pushes for a protected branch if a site administrator has blocked force pushes to all branches in your repository. 詳しい情報については、「[ユーザアカウントもしくはOrganizationが所有するリポジトリへのフォースプッシュのブロック](/enterprise/{{ currentVersion }}/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)」を参照してください。

サイト管理者がデフォルトブランチへのフォースプッシュのみをブロックしている場合、他の保護されたブランチに対してフォースプッシュを有効にできます。{% endif %}

{% data reusables.repositories.protected-branches-options %}

### フォースプッシュの有効化

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. [Rules applied to everyone including administrators] で、 [**Allow force pushes**] を選択します。 ![フォースプッシュオプションを許可する](/assets/images/help/repository/allow-force-pushes.png)
7. ** Create（作成）**をクリックしてください。
