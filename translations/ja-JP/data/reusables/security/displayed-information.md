既存のリポジトリで1つ以上のセキュリティ及び分析機能を有効化すると、数分のうちに{% data variables.product.prodname_dotcom %}上に結果が表示されます。

- 既存のすべてのリポジトリは、選択された設定を持ちます。
- 新しいリポジトリに対するチェックボックスを有効化していれば、新しいリポジトリは選択された設定に従うようになります。{% ifversion fpt %}
- 関連するサービスに適用するマニフェストファイルをスキャンするために権限を使用します。
- If enabled, you'll see dependency information in the dependency graph.
- If enabled, {% data variables.product.prodname_dotcom %} will generate {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies.
- If enabled, {% data variables.product.prodname_dependabot %} Security Updates will create pull requests to upgrade those dependencies.{% endif %}
