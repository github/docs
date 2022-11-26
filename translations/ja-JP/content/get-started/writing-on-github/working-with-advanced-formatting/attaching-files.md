---
title: ファイルのアタッチ
intro: さまざまな種類のファイルを issue や pull request に添付することで、情報を伝達できます。
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/file-attachments-on-issues-and-pull-requests
  - /articles/issue-attachments
  - /articles/file-attachments-on-issues-and-pull-requests
  - /github/managing-your-work-on-github/file-attachments-on-issues-and-pull-requests
  - /github/writing-on-github/working-with-advanced-formatting/attaching-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 28ce895a23c83f410d4755ad4036673e5c816155
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160764'
---
{% data reusables.repositories.anyone-can-view-anonymized-url %}

Issue やプルリクエストの会話にファイルを添付するには、コメントボックスにファイルをドラッグアンドドロップします。 または、コメントボックスの下部にあるバーをクリックしてコンピュータからファイルを参照、選択、追加することもできます。

![コンピュータから添付ファイルを選択する](/assets/images/help/pull_requests/select-bar.png)

ファイルを添付すると、ファイルが {% data variables.product.product_name %} にすぐにアップロードされ、テキスト フィールドが更新されて、ファイルの匿名化された URL が表示されます。 {% ifversion fpt or ghec %}匿名化された URL の詳細については、「[匿名化された URL について](/github/authenticating-to-github/about-anonymized-urls)」を参照してください。{% endif %}

{% tip %}

**ヒント:** 多くのブラウザーでは、画像をコピーしてボックスに直接貼り付けることができます。

{% endtip %}

最大ファイル サイズ:
- 画像と gif については 10MB{% ifversion fpt or ghec %}
- 無料の GitHub プランのユーザーまたは組織が所有するリポジトリにアップロードされた動画については 10MB
- 有料の GitHub プランのユーザーまたは Organization が所有するリポジトリにアップロードされた動画については 100 MB{% elsif ghes %}
- 動画については 100MB{% endif %}
- その他のすべてのファイルでは 25MB

以下のファイルがサポートされています:

* PNG ( *.png*)
* GIF ( *.gif*)
* JPEG ( *.jpg*) {%- ifversion svg-support %}
* SVG ( *.svg*) {%- endif %}
* ログ ファイル ( *.log*)
* Microsoft Word ( *.docx*)、Powerpoint ( *.pptx*)、Excel ( *.xlsx*) の各ドキュメント
* テキスト ファイル ( *.txt*)
* PDF ( *.pdf*)
* ZIP ( *.zip*、 *.gz*、 *.tgz*){% ifversion fpt or ghec or ghes %}
* 動画 ( *.mp4*、 *.mov*、 *.webm*){% endif %}

{% ifversion fpt or ghec or ghes %}{% note %}

**注意:** 動画コーデックの互換性はブラウザー固有であり、あるブラウザーにアップロードした動画が別のブラウザーでは表示されない可能性があります。 現時点では、最大の互換性がある h.264 を使うことをお勧めします。

{% endnote %}{% endif %}

![添付アニメーション GIF](/assets/images/help/pull_requests/dragging_images.gif)
