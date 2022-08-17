{% ifversion actions-unified-inputs %}

{% note %}

**ノート**: ワークフローは`github.event.inputs`コンテキスト内の入力も受け取ります。 `inputs`コンテキストと`github.event.inputs`コンテキスト内の情報は、`inputs`コンテキストが論理値の値を文字列に変換せずに論理値のままで保持することを除けば、同一です。

{% endnote %}
{% endif %}
