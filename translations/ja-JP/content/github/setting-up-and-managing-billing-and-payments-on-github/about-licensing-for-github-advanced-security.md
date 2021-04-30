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

単一のリポジトリまたは Organization 内のすべてのリポジトリに対して {% data variables.product.prodname_GH_advanced_security %} を有効にすると、{% data variables.product.company_short %} は、使用する追加のシートの数を示し、確認を求めるプロンプトを表示します。 {% data variables.product.prodname_GH_advanced_security %} へのアクセスを無効にすると、「一意」のコミッターが使用するシートが解放されます。 これによって、ライセンスの使用に関する変更のインパクトを簡単に理解できます。

ライセンス制限を超えている場合、{% data variables.product.prodname_GH_advanced_security %} はすでに有効になっているすべてのリポジトリで引き続き動作します。 ただし、{% data variables.product.prodname_GH_advanced_security %} が新しいリポジトリに対して有効になっている Organization では、リポジトは機能が無効の状態で作成されます。 さらに、既存のリポジトリに対して {% data variables.product.prodname_GH_advanced_security %} を有効にするオプションは使用できなくなります。 パブリックリポジトリの可視性をプライベートに変更すると、そのリポジトリの {% data variables.product.prodname_GH_advanced_security %} は無効になります。

一部のリポジトリで {% data variables.product.prodname_GH_advanced_security %} を無効にするか、ライセンスサイズを増やすと、一部のシートを解放した直後に {% data variables.product.prodname_GH_advanced_security %} を有効にするオプションが通常どおり動作します。

Enterprise アカウントが所有する Organization による {% data variables.product.prodname_advanced_security %} の使用を許可または禁止するポリシーを適用できます。 詳しい情報については、「[Enterprise アカウントに {% data variables.product.prodname_advanced_security %} のポリシーを適用する](/github/setting-up-and-managing-your-enterprise/enforcing-policies-for-advanced-security-in-your-enterprise-account)」を参照してください。

ライセンスの使用状況の表示について詳しくは、「[{% data variables.product.prodname_GH_advanced_security %} の使用状況を表示する](/github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-advanced-security-usage)」を参照してください。

### {% data variables.product.prodname_GH_advanced_security %} ライセンスを最大限に活用する

{% data variables.product.prodname_GH_advanced_security %} の優先順位を付けるリポジトリと Organization を決定するときは、それらを確認して次のことを特定する必要があります。

- 会社の成功にとって最も重要なコードベース。 これらは、脆弱なコード、ハードコードされたシークレット、または脆弱な依存関係の導入が会社に最大の影響を与えるプロジェクトです。
- コミット頻度が最も高いコードベース。 これらは最も積極的に開発されたプロジェクトであるため、セキュリティの問題が発生するリスクが高くなります。

これらの Organization またはリポジトリに対して {% data variables.product.prodname_GH_advanced_security %} を有効にした場合、一意のコミッターを追加したり、ライセンスのシートを使い切ったりせずに、追加できる他のコードベースを評価する必要があります。 この後、次に重要でビジーなコードベースを確認します。 ライセンスのシート数を増やす場合は、{% data variables.contact.contact_enterprise_sales %} にお問い合わせください。
