---
title: GitHub Advanced Security のライセンスについて
intro: 'プライベートリポジトリまたは内部リポジトリで {% data variables.product.prodname_GH_advanced_security %} 機能を使用する場合は、ライセンスが必要です。 これらの機能は、パブリックリポジトリで無料で利用できます。'
product: '{% data reusables.gated-features.ghas %}'
versions:
  free-pro-team: '*'
---

### {% data variables.product.prodname_GH_advanced_security %} のライセンスについて

{% data variables.product.prodname_dotcom_the_website %} のパブリックリポジトリ以外のリポジトリで {% data variables.product.prodname_GH_advanced_security %} 機能を使用する場合は、ライセンスが必要です。 {% data variables.product.prodname_GH_advanced_security %} に関する詳しい情報については、「[{% data variables.product.prodname_GH_advanced_security %} について](/github/getting-started-with-github/about-github-advanced-security)」を参照してください。

{% data reusables.advanced-security.license-overview %}

Enterprise アカウントの {% data variables.product.prodname_GH_advanced_security %} のライセンスについては、{% data variables.contact.contact_enterprise_sales %} にお問い合わせください。

### {% data variables.product.prodname_GH_advanced_security %} のコミッター番号について

{% data variables.product.prodname_dotcom_the_website %} の {% data variables.product.prodname_GH_advanced_security %} の 2 つのコミッター数を記録して表示します。

- **コミッター**は、Organization 内の少なくとも 1 つのプライベートリポジトリにコントリビュートし、ライセンスのシートを使用するコミッターの数です。 つまり、Organization のメンバー、外部のコラボレータでもあるか、Enterprise 内の Organization に参加するための保留中の招待状を持っています。
- **このリポジトリ/Organization に固有**は、このリポジトリまたはこの Organization のリポジトリにのみコントリビュートしたコミッターの数です。 この数値は、そのリポジトリまたは Organization の {% data variables.product.prodname_GH_advanced_security %} を無効にすることで解放できるライセンスシートの数を示しています。

一意のコミッターがない場合、これは、すべてのアクティブなコミッターが {% data variables.product.prodname_GH_advanced_security %} を使用する他のリポジトリまたは Organization にもコントリビュートしていることを意味します。 そのリポジトリまたは Organization の機能を無効にしても、ライセンスのシートは解放されません。

{% note %}

**注釈:** ライセンスで使用されるシートの総数は、各リポジトリまたは Organization のコミッターまたは一意のコミッターの合計ではありません。 これは、複数のリポジトリや Organization にコントリビュートしている人がいるためです。 使用されたシートの数は、Enterprise アカウント全体で測定され、コントリビュートしているリポジトリや Organization の数に関係なく、各人が 1 回だけカウントされるようにします。

{% endnote %}

### {% data variables.product.prodname_GH_advanced_security %} のライセンス利用を管理する

単一のリポジトリまたは Organization 内のすべてのリポジトリに対して {% data variables.product.prodname_GH_advanced_security %} を有効にすると、{% data variables.product.company_short %} は、使用する追加のシートの数を示し、確認を求めるプロンプトを表示します。 If you disable access to {% data variables.product.prodname_GH_advanced_security %}, any seats used by "unique" committers are freed up. This makes it easy to understand the impact of your changes on the use of your license.

If you are over your license limit, {% data variables.product.prodname_GH_advanced_security %} continues to work on all repositories where it is already enabled. However, in organizations where {% data variables.product.prodname_GH_advanced_security %} is enabled for new repositories, repositories will be created with the feature disabled. In addition, the option to enable {% data variables.product.prodname_GH_advanced_security %} for existing repositories will not be available. If you change the visibility of a public repository to private then {% data variables.product.prodname_GH_advanced_security %} will be disabled for that repository.

As soon as you free up some seats, by disabling {% data variables.product.prodname_GH_advanced_security %} for some repositories or by increasing your license size, the options for enabling {% data variables.product.prodname_GH_advanced_security %} will work again as normal.

You can enforce policies to allow or disallow the use of {% data variables.product.prodname_advanced_security %} by organizations owned by your enterprise account. For more information, see "[Enforcing policies for {% data variables.product.prodname_advanced_security %} in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise-account)."

For more information on viewing license usage, see "[Viewing your {% data variables.product.prodname_GH_advanced_security %} usage](/github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-advanced-security-usage)."

### Getting the most out of your {% data variables.product.prodname_GH_advanced_security %} license

When you decide which repositories and organizations to prioritize for {% data variables.product.prodname_GH_advanced_security %}, you should review them and identify:

- Codebases that are the most critical to your company's success. These are the projects for which the introduction of vulnerable code, hard-coded secrets, or vulnerable dependencies would have the greatest impact on your company.
- Codebases with the highest commit frequency. These are the most actively developed projects, consequently there is a higher risk that security problems could be introduced.

When you have enabled {% data variables.product.prodname_GH_advanced_security %} for these organizations or repositories, you should assess which other codebases you could add without adding any extra unique committers and using up more seats on your license. After this, review the next most important and busy codebases. If you want to increase the number of seats in your license, contact {% data variables.contact.contact_enterprise_sales %}.
