リポジトリで{% data variables.product.prodname_advanced_security %}を有効化あるいは無効化すると、{% data variables.product.prodname_dotcom %}はライセンスの利用に関する変更の概要を表示します。 {% data variables.product.prodname_GH_advanced_security %} へのアクセスを無効にすると、「一意」のコミッターが使用するシートが解放されます。

ライセンス制限を超えている場合、{% data variables.product.prodname_GH_advanced_security %} はすでに有効になっているすべてのリポジトリで引き続き動作します。 ただし、{% data variables.product.prodname_GH_advanced_security %} が新しいリポジトリに対して有効になっている Organization では、リポジトは機能が無効の状態で作成されます。 加えて、既存のリポジトリに対する{% data variables.product.prodname_GH_advanced_security %}の有効化のオプションは利用できなくなります。{% if currentVersion == "free-pro-team@latest" %}パブリックリポジトリの可視性をプライベートに変更すると、そのリポジトリでは{% data variables.product.prodname_GH_advanced_security %}は無効化されます。{% endif %}

一部のリポジトリで {% data variables.product.prodname_GH_advanced_security %} を無効にするか、ライセンスサイズを増やすと、一部のシートを解放した直後に {% data variables.product.prodname_GH_advanced_security %} を有効にするオプションが通常どおり動作します。
