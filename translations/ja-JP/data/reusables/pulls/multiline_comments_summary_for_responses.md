{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}

##### 複数行コメントの概要

{% note %}

**ノート:** 開発者は、新しいパラメータとレスポンスフィールドをプレビューで利用できます。 プレビューの期間中、これらのレスポンスフィールドは事前の通告なしに変更されることがあります。 完全な詳細については[ブログポスト](https://developer.github.com/changes/2019-10-03-multi-line-comments)を参照してください。

{% endnote %}

レスポンス中で複数行のコメントをサポートしているフィールドを示すには、`comfort-fade`プレビューヘッダと`line` パラメータを使ってください。

`comfort-fade`プレビューヘッダを使うと、レスポンスは以下を示します。
- 複数行のコメントについて、`start_line`、`original_start_line`、`start_side`、`line`、`original_line`、`side`の値。
- 単一行のコメントについて、`line`、`original_line`、`side`の値と、`start_line`、`original_start_line`、`start_side`では`null`値。

`comfort-fade`プレビューヘッダを使わない場合、複数行と単一行のコメントは、レスポンスでは単一の` position`属性を持って同じようになります。 レスポンスは以下を示します。
- 複数行のコメントについては、`position`属性にコメントの範囲の最終行。
- 単一行のコメントについては、`position`属性に参照コメントのdiffのポジションの方法を採ります。 詳しい情報については、[入力パラメータ](/v3/pulls/comments/#parameters-2)テーブルの`position`を参照してください。

{% endif %}
