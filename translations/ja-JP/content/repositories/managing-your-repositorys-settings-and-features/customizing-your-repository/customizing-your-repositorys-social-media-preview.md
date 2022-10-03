---
title: リポジトリのソーシャルメディア向けプレビューをカスタマイズする
intro: リポジトリにリンクされた時にソーシャルメディアプラットフォームに表示される画像をカスタマイズできます。
redirect_from:
  - /articles/customizing-your-repositorys-social-media-preview
  - /github/administering-a-repository/customizing-your-repositorys-social-media-preview
  - /github/administering-a-repository/managing-repository-settings/customizing-your-repositorys-social-media-preview
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Social media preview
ms.openlocfilehash: a778b0fd95533a15806cc0034769fbf0feb3b217
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132234'
---
画像を追加するまでは、リポジトリへのリンクは、リポジトリの基本的な情報とオーナーのアバターを表示します。 リポジトリに画像を追加すると、さまざまなソーシャルプラットフォーム上で、あなたのプロジェクトが見つかりやすくなります。

## リポジトリのソーシャル メディア プレビューをカスタマイズするための画像を追加する

{% ifversion not ghae %}画像はプライベート リポジトリにアップロードできますが、画像はパブリック リポジトリからのみ共有できます。{% endif %}

{% tip %}

**ヒント:** 画像は、1 MB 未満の PNG、JPG、GIF のいずれかのファイルである必要があります。 最高の画質を得るため、画像は 640 × 320 ピクセルに収めるようおすすめします。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. [ソーシャル プレビュー] で **[編集]** をクリックします
    - 新しい画像を追加するには、 **[画像のアップロード]** をクリックします。
    - 画像を削除するには、 **[画像の削除]** をクリックします

    ![ソーシャルプレビューのドロップダウン](/assets/images/help/repository/social-preview.png)

## 透明度について

透明度の高い PNG 画像がサポートされています。 多くの通信プラットフォームではダーク モードがサポートされているため、透明なソーシャル プレビューを使用すると便利な場合があります。 下の透明な画像は、暗い背景で使用できます。ただし、常にそうであるとは限りません。 

透明度のある画像を使用する場合は、透明度をサポートしていないさまざまな色の背景やプラットフォームでどのように表示されるかに注意してください。

{% tip %}

**ヒント:** わからない場合は、背景が無地の画像を使用することをお勧めします。
{% endtip %}

![ソーシャル プレビューの透明度](/assets/images/help/repository/social-preview-transparency.png)
