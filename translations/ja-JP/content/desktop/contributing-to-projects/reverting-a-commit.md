---
title: コミットの打ち消し
intro: 特定のコミットを打ち消して、その変更をブランチから取り除くことができます。
versions:
  free-pro-team: '*'
---

コミットを打ち消しすると、打ち消し自体もコミットになります。 元のコミットもリポジトリの履歴に残ります。

{% tip %}

**ヒント：**複数のコミットを打ち消しするときは、最新のコミットから最古のコミットまでの順で打ち消しするのがお勧めです。 別の順番でコミットを打ち消しすると、マージコンフリクトが発生する場合があります。

{% endtip %}

{% mac %}

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.revert-commit %}
  ![Diffビューの上にあるRevertオプション](/assets/images/help/desktop/commit-revert-mac.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.revert-commit %}
  ![Diffビューの上にあるRevertオプション](/assets/images/help/desktop/commit-revert-win.png)

{% endwindows %}
