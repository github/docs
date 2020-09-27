{% note %}

**ノート:** ファイル中の特定の行にコメントするには、まずdiff中でその行の_位置_を判断しなければなりません。 GitHub REST APIは、`application/vnd.github.v3.diff`という[メディアタイプ](/v3/media/#commits-commit-comparison-and-pull-requests)を提供しています。 プルリクエストのdiffを見るには、このメディアタイプを[single pull request](/v3/pulls/#get-a-pull-request)エンドポイントの呼び出しの`Accept`ヘッダに追加してください。

`position`の値は、コメントを追加したいファイル中の最初の"@@"ハンクヘッダから数えた行数に等しくなります。 "@@"の行のすぐ下の行の位置は1、次の行の位置は2というようになります。 diff中の位置は、空白行や追加のハンクの行も含めて、新しいファイルの先頭まで増え続けます。

{% endnote %}
