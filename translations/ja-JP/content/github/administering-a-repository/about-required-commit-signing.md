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

ブランチで必須のコミット署名を有効にすると、コントリビュータ{% if currentVersion == "free-pro-team@latest" %}とボット{% endif %}はブランチに署名および検証されたコミットのみをプッシュできます。 詳細については、「[コミット署名の検証について](/articles/about-commit-signature-verification)」を参照してください。

コミットが署名および検証されている場合は、いつでもローカルコミットをブランチにプッシュできます。 {% if currentVersion == "free-pro-team@latest" %}{% data variables.product.product_name %}のプルリクエストを使用して、署名および検証されているコミットをブランチにマージすることもできます。 ただし、プルリクエストの作者でない限り、プルリクエストを squash して{% data variables.product.product_name %}のブランチにマージすることはできません。{% else %}ただし、プルリクエストを{% data variables.product.product_name %}のブランチにマージすることはできません。{% endif %}プルリクエストをローカルで{% if currentVersion == "free-pro-team@latest" %} squash および{% endif %}マージできます。 詳細については、「[プルリクエストをローカルでチェックアウトする](/github/collaborating-with-issues-and-pull-requests/checking-out-pull-requests-locally)」を参照してください。{% if currentVersion == "free-pro-team@latest" %}マージ方法の詳細については、「[{% data variables.product.prodname_dotcom %}のマージ方法について](/github/administering-a-repository/about-merge-methods-on-github)」を参照してください。{% endif %}

{% note %}

**メモ:** ブランチで必須コミット署名を有効化すると、コントリビュートするのが難しくなります。 コラボレータが、未署名のコミットを、必須コミット署名が有効化されたブランチにプッシュすると、コラボレータは検証済み署名を含めるためにコミットをリベースし、書き直したコミットをブランチにフォースプッシュしなければなりません。

{% endnote %}

リポジトリの管理者は、署名・検証されていないローカルコミットをプッシュできますが、管理者にもコミット署名を義務付けることが可能です。 詳しい情報については[必須コミット署名の有効化](/articles/enabling-required-commit-signing)を参照してください。

### 参考リンク

- [保護されたブランチについて](/articles/about-protected-branches)
