---
title: ユーザアカウントのセキュリティと分析設定を管理する
intro: '{% data variables.product.prodname_dotcom %} 上のプロジェクトのコードをセキュリティ保護し分析する機能を管理できます。'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
shortTitle: セキュリティと分析の管理
---

## セキュリティおよび分析設定の管理について

{% data variables.product.prodname_dotcom %} を使用してリポジトリを保護できます。 このトピックでは、既存または新規のすべてのリポジトリのセキュリティおよび分析機能を管理する方法について説明します。

個々のリポジトリのセキュリティおよび分析機能は引き続き管理できます。 詳しい情報については「[リポジトリのセキュリティ及び分析の設定の管理](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)」を参照してください。

You can also review the security log for all activity on your personal account. 詳細は「[セキュリティログをレビューする](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)」を参照してください。

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

For an overview of repository-level security, see "[Securing your repository](/code-security/getting-started/securing-your-repository)."

## 既存のリポジトリに対して機能を有効または無効にする

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
3. "Code security and analysis（コードのセキュリティ及び分析）"の下で、機能の右にある**Disable all（すべて無効化）**もしくは**Enable all（すべて有効化）**をクリックしてください。
  {% ifversion ghes > 3.2 %}!["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/enterprise/3.3/settings/security-and-analysis-disable-or-enable-all.png){% else %}!["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/help/settings/security-and-analysis-disable-or-enable-all.png){% endif %}
6. Optionally, enable the feature by default for new repositories that you own.
  {% ifversion ghes > 3.2 %}!["Enable by default" option for new repositories](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-by-default-in-modal.png){% else %}!["Enable by default" option for new repositories](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png){% endif %}
7. すべてのリポジトリに対してこの機能を有効または無効にするには、[**Disable FEATURE**] または [**Enable FEATURE**] をクリックします。
  {% ifversion ghes > 3.2 %}![Button to disable or enable feature](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-dependency-graph.png){% else %}![Button to disable or enable feature](/assets/images/help/settings/security-and-analysis-enable-dependency-graph.png){% endif %}

{% data reusables.security.displayed-information %}

## 既存のリポジトリに対して機能を有効または無効にする

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
3. Under "Code security and analysis", to the right of the feature, enable or disable the feature by default for new repositories that you own.
  {% ifversion ghes > 3.2 %}![Checkbox for enabling or disabling a feature for new repositories](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% else %}![Checkbox for enabling or disabling a feature for new repositories](/assets/images/help/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% endif %}

## 参考リンク

- [依存関係グラフについて](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)
- 「[{% data variables.product.prodname_dependabot_alerts %} について](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)」
- [依存関係を自動的に更新する](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically)
