---
title: 必須コミット署名について
intro: コミット署名を必須にすると、コラボレータが保護されたブランチにプッシュできるのは検証された署名済みのコミットのみになります。
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-required-commit-signing
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

リポジトリでブランチ保護を強制している場合、必須コミット署名をセットアップできます。 詳しい情報については[保護されたブランチの設定](/articles/configuring-protected-branches/)を参照してください。

When you enable required commit signing on a branch, contibutors {% if currentVersion == "free-pro-team@latest" %}and bots{% endif %} can only push commits that have been signed and verified to the branch. 詳細については、「[コミット署名の検証について](/articles/about-commit-signature-verification)」を参照してください。

コミットが署名および検証されている場合は、いつでもローカルコミットをブランチにプッシュできます。 {% if currentVersion == "free-pro-team@latest" %}You can also merge signed and verified commits into the branch using a pull request on {% data variables.product.product_name %}. However, you cannot squash and merge a pull request into the branch on {% data variables.product.product_name %} unless you are the author of the pull request.{% else %} However, you cannot merge pull requests into the branch on {% data variables.product.product_name %}.{% endif %} You can {% if currentVersion == "free-pro-team@latest" %}squash and {% endif %}merge pull requests locally. For more information, see "[Checking out pull requests locally](/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally)."{% if currentVersion == "free-pro-team@latest" %} For more information about merge methods, see "[About merge methods on {% data variables.product.prodname_dotcom %}](/github/administering-a-repository/about-merge-methods-on-github)."{% endif %}

{% note %}

**メモ:** ブランチで必須コミット署名を有効化すると、コントリビュートするのが難しくなります。 コラボレータが、未署名のコミットを、必須コミット署名が有効化されたブランチにプッシュすると、コラボレータは検証済み署名を含めるためにコミットをリベースし、書き直したコミットをブランチにフォースプッシュしなければなりません。

{% endnote %}

リポジトリの管理者は、署名・検証されていないローカルコミットをプッシュできますが、管理者にもコミット署名を義務付けることが可能です。 詳しい情報については[必須コミット署名の有効化](/articles/enabling-required-commit-signing)を参照してください。

### 参考リンク

- [保護されたブランチについて](/articles/about-protected-branches)
