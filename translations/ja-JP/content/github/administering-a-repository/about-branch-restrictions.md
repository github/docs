---
title: ブランチ制限について
intro: 'Branches within repositories that belong to organizations can be configured so that only certain users, teams, or apps can push to the branch.'
product: '{% data reusables.gated-features.branch-restrictions %}'
redirect_from:
  - /articles/about-branch-restrictions
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

When you enable branch restrictions, only users, teams, or apps that have been given permission can push to the protected branch. 詳細については、「[ブランチ制限の有効化](/articles/enabling-branch-restrictions)」と「[保護されたブランチについて](/articles/about-protected-branches) 」を参照してください。 You can view and edit the users, teams, or apps with push access to a protected branch in the protected branch's settings.

You can only give push access to a protected branch to users, teams, or installed {% data variables.product.prodname_github_apps %} with `write` access to a repository.

People and apps with admin permissions to a repository are always able to push to a protected branch.

{% tip %}

**Note:** If "Include administrators" is selected, you've enabled required status checks on the branch, and if any status checks fail, any attempt to push changes to the protected branch will also fail, even for people and apps with admin permissions. 詳しい情報については、「[ステータスチェック必須の有効化](/articles/enabling-required-status-checks)」を参照してください。

{% endtip %}

### 参考リンク

- [保護されたブランチについて](/articles/about-protected-branches)
- [保護されたブランチの設定](/articles/configuring-protected-branches)
- [ステータスチェック必須について](/articles/about-required-status-checks)
- [ステータスチェック必須の有効化](/articles/enabling-required-status-checks)
