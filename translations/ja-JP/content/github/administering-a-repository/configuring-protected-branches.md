---
title: 保護されたブランチを設定する
intro: リポジトリのオーナーか、リポジトリの管理者権限がある場合、リポジトリのブランチ保護をカスタマイズし、2 つ以上のプルリクエストレビューを要求したり、プルリクエストのマージを許可する前に特定のステータスチェックを必須としたりするなど、特定のワークフローを強制できます。
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/configuring-protected-branches
  - /enterprise/admin/developer-workflow/configuring-protected-branches-and-required-status-checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---


{% data reusables.repositories.branch-rules-example %}

ワイルドカード構文 `*` で、リポジトリのすべてのブランチに対して自動ブランチ保護を設定することも可能です。 {% data variables.product.prodname_dotcom %}は、`File.fnmatch` 構文に `File::FNM_PATHNAME` フラグを使用するので、ワイルドカードはディレクトリの区切り文字 (`/`) には一致しません。 たとえば、`qa/*` は、`qa/` で始まり、1 つのスラッシュが含まれるすべてのブランチにマッチします。 `qa/**/*` とすると、複数のスラッシュにマッチします。また、より多くのブランチにマッチさせるため、`qa` の文字列を `qa**/**/*` とすることもできます。 ブランチのルールに関する構文オプションの詳しい情報については、 [fnmatch ドキュメンテーション](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch)を参照してください。

既存のブランチのルールに例外を作成するため、特定のブランチ名に対するルールなど、優先度の高いブランチ保護ルールを新しく作成できます。 優先順位などの、保護されたブランチのルール設定に関する詳しい情報については、「[保護されたブランチについて](/github/administering-a-repository/about-protected-branches)」を参照してください。

{% note %}

**メモ:** 指定したブランチがリポジトリにまだ存在していない場合でも、ブランチのルールは作成できます。

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.repository-branches %}
{% data reusables.repositories.add-branch-protection-rules %}
6. また、ブランチの特定のルールを設定することも可能です。 ![保護されたブランチのルール設定](/assets/images/help/branches/branch-rule-settings.png)
7. ブランチの保護ルールを確定するには、[**Create**] または [**Save changes**] をクリックします。

### 参考リンク

- [保護されたブランチについて](/github/administering-a-repository/about-protected-branches)
- [ステータスチェック必須について](/github/administering-a-repository/about-required-status-checks)
- [ステータスチェック必須の有効化](/github/administering-a-repository/enabling-required-status-checks)
- [ブランチ制限について](/github/administering-a-repository/about-branch-restrictions)
- [ブランチ制限の有効化](/github/administering-a-repository/enabling-branch-restrictions)
- 「[必須のコミット署名について](/github/administering-a-repository/about-required-commit-signing)」
