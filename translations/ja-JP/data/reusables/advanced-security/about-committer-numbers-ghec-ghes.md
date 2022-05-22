{% data variables.product.product_location %} の {% data variables.product.prodname_GH_advanced_security %} の 2 つのコミッター数を記録して表示します。

- **コミッター**は、Organization 内の少なくとも 1 つの{% if currentVersion == "free-pro-team@latest" %}プライベート{% endif %}リポジトリに貢献し、Enterprise ライセンスのシートを使用するコミッターの数です。 つまり、Organization のメンバー、外部のコラボレータでもあるか、Enterprise 内の Organization に参加するための保留中の招待状を持っています。
- **このリポジトリ/Organization に固有**は、このリポジトリまたはこの Organization のリポジトリにのみコントリビュートしたコミッターの数です。 この数値は、そのリポジトリまたは Organization の {% data variables.product.prodname_GH_advanced_security %} を無効にすることで解放できるライセンスシートの数を示しています。

一意のコミッターがない場合、これは、すべてのアクティブなコミッターが {% data variables.product.prodname_GH_advanced_security %} を使用する他のリポジトリまたは Organization にもコントリビュートしているということです。 そのリポジトリまたは Organization の機能を無効にしても、ライセンスのシートは解放されません。

ユーザをEnterpriseアカウントから削除すると、そのユーザのライセンスは24時間以内に解放されます。

{% note %}

**ノート:** ユーザは複数のリポジトリもしくはOrganizationに貢献できます。 使用状況はEnterpriseアカウント全体にわたって計測され、各ユーザがいくつのリポジトリあるいはOrganizationに貢献していても、1つのシートしか使わないことを保証します。

{% endnote %}
