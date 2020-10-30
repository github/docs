---
title: Issue およびプルリクエストのファイル添付
intro: Issue を開いたりプルリクエストを更新したりする際に、Issue の添付を使用して機能の提案やバグのスクリーンショットの画像をアップロードできます。
redirect_from:
  - /articles/issue-attachments/
  - /articles/file-attachments-on-issues-and-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% warning %}

**警告:**Pull Request や Issue へのコメントに画像添付を追加した場合、その Pull Request がプライベートリポジトリのものである場合、{% if currentVersion != "free-pro-team@latest" %}またはプライベートモードが有効化されている場合も、{% endif %}匿名化した画像 URL は認証なしに誰もが見ることができます。 機密の画像をプライベートにしておきたい場合は、それらを認証が必要なプライベートなネットワークあるいはサーバーから提供するようにしてください。 {% if currentVersion == "free-pro-team@latest" %}匿名化した URL の詳細については、「[匿名化された画像 URL について](/articles/about-anonymized-image-urls)」を参照してください。{% endif %}

{% endwarning %}

Issue やプルリクエストの会話にファイルを添付するには、コメントボックスにファイルをドラッグアンドドロップします。 または、コメントボックスの下部にあるバーをクリックしてコンピュータからファイルを参照、選択、追加することもできます。

![コンピュータから添付ファイルを選択する](/assets/images/help/pull_requests/select-bar.png)

{% tip %}

**ヒント:** Chrome をお使いの場合は、ボックスに画像を直接コピーして貼り付けることもできます。

{% endtip %}

ファイルの最大サイズは 25MB で、画像の最大サイズは 10MB です。

以下のファイルがサポートされています:

* PNG (*.png*)
* GIF (*.gif*)
* JPEG (*.jpg*)
* ログファイル (*.log*)
* Microsoft Word (*.docx*)、Powerpoint (*.pptx*)、および Excel (*.xlsx*) 文書
* テキストファイル (*.txt*)
* PDF (*.pdf*)
* ZIP (*.zip*, *.gz*)

![添付アニメーション GIF](/assets/images/help/pull_requests/dragging_images.gif)
