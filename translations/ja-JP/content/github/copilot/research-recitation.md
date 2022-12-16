---
title: 暗唱について調査する
intro: A first look at rote learning in {% data variables.product.prodname_dotcom %} Copilot suggestions.
redirect_from:
- /early-access/github/copilot/research-recitation
versions:
  fpt: '*'
ms.openlocfilehash: cacf9a63013c5bbf9b7d867e088640ff01400289
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 05/17/2022
ms.locfileid: "145068506"
---
投稿者: Albert Ziegler (@wunderalbert)

## <a name="-data-variablesproductprodname_dotcom--copilot-parrot-or-crow"></a>{% data variables.product.prodname_dotcom %} Copilot: オウムなのか、カラスなのか
{% data variables.product.prodname_dotcom %} Copilot の提案での暗記学習の概要。

## <a name="introduction"></a>はじめに

{% data variables.product.prodname_dotcom %} Copilot は、数十億行のパブリック コードでトレーニングされます。 Copilot がユーザーに対して行う提案は、そのユーザーのコードに合わせてありますが、その背後の処理は、結局は他のユーザーが記述したコードに基づく情報が含まれているのです。

提案されたコードと、影響を与えたコードとの間の関係は、どの程度直接的なのでしょうか。 最近の興味深い論文<sup id="anchor1">[1](#footnote1)</sup>で、Bender、Gebru らは、{% data variables.product.prodname_dotcom %} Copilot を動かす人工知能システムについて「確率的おうむ返し」という表現を作り出しました。 また、{% data variables.product.company_short %} の機械学習エンジニア<sup id="anchor2">[2](#footnote2)</sup>として、ウォーター クーラー チャット中に「これらのシステムは『記憶力が抜群の幼い子ども』みたいだ」と発言したのです。

これらは意図的に過度に単純化しています。 多くの {% data variables.product.prodname_dotcom %} Copilot の提案は、ユーザーが取り組んでいる特定のコード ベースにかなり厳密に合わせているように感じます。 多くの場合、それは、オウムというよりは、小さなブロックから斬新なツールを作るカラスのようです <sup id="anchor3">[3](#footnote3)</sup>。 しかし、{% data variables.product.prodname_dotcom %} Copilot が優れた記憶力を持っていることは否定できません。

![Copilot の動画デモ](/assets/images/help/copilot/resources_recitation_example_zen.gif)

ここで、{% data variables.product.prodname_dotcom %} Copilot に対して、明らかに暗記している、ある有名な文章を暗唱するよう意図的に指示しました<sup id="anchor4">[4](#footnote4)</sup>。 私も、文章をいくつか暗記しています。 たとえば、学校で学んだいくつかの詩は今でも覚えています。 だからといって、話題に関係なく、突然、弱強四歩格のリズムになって水仙についての詩を詠んで会話を脱線させようと思ったことは一度もありません。

では、そのようなこと (というよりは、それと同等のコーディング) は、{% data variables.product.prodname_dotcom %} Copilot がしがちなことなのでしょうか。 その提案のいくつが独自のもので、トレーニング中に見た可能性の高いコードをどれだけの頻度でただ機械的にまねているのでしょうか。

## <a name="the-experiment"></a>実験

{% data variables.product.prodname_dotcom %} Copilot の初期の開発で、社内試用の一環として、300 人近くの従業員が毎日の作業で使用しました。 この試用では、暗唱のテストに適したデータセットが用意されました。 {% data variables.product.prodname_dotcom %} Copilot によって、以前に見たことから引用した提案がされた頻度を調べたいと思いました。

調査は、期限が 2021 年 5 月 7 日 (そのデータの抽出を開始した日) の Python の提案に制限しました。 それにより、396 以上の "ユーザー週" つまり、ユーザーが Python コードで {% data variables.product.prodname_dotcom %} Copilot をアクティブに使用したカレンダー週にわたる、453,780 件の提案が残りました。

### <a name="automatic-filtering"></a>自動フィルター処理

提案は 453,780 件と多数ですが、その多くはそのまま破棄できます。 興味深いケースを見るために、提案で、{% data variables.product.prodname_dotcom %} Copilot がトレーニングされているコードと同じ順序になっている "単語" の並びを検討します。 このコンテキストでは、句読点、角かっこ、またはその他の特殊文字はすべて "単語" としてカウントされますが、タブ、スペース、または改行は完全に無視されます。 つまり、引用符は、1 つのタブまたは 8 つのスペースでインデントされていても、引用符のままです。

たとえば、{% data variables.product.prodname_dotcom %} Copilot の提案の 1 つは、次のように、空白で区切られた数値の正規表現でした。

```
r'^\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+\s+\d+'
```

これは、上述の意味では、ちょうど 100 個の "単語" になりますが、特に極端な例です。空でないコード行に含まれる "単語" は、平均で 10 個のみです。 私はこの調査を、{% data variables.product.prodname_dotcom %} Copilot がトレーニングされたコードとの重複が、少なくとも 60 個ほどの "単語" である場合に限定しました。 区切りをどこかに設定する必要がありますが、短いシーケンスに関心をひかれることはかなりまれだと思います。 実際、後で特定された興味深いケースのほとんどは、そのしきい値である 60 をかなり超えています。

重複が、ユーザーが既に書いていたものにまで及ぶ場合は、その長さも重要です。 結局のところ、ユーザーは {% data variables.product.prodname_dotcom %} Copilot の助けを借りてそのコンテキストを記述している可能性があるのです。

次の例では、ユーザーがごく普通のスニペットを記述し始めています。 {% data variables.product.prodname_dotcom %}Copilot がこれを完成させます。 出来あがったもの自体は、やや短いものの、既存のコードと共にしきい値を超え、保持されます。 

![コード例](/assets/images/help/copilot/example_last_straw.png)

この手順は、上記の 2 つのように、多くの比較的 "つまらない" 例が通るほど、制限が緩やかです。 しかしそれでも、99% 以上の Copilot の提案を整理して、興味深いケースに対して人間による分析を効果的に調整できます。

### <a name="manual-bucketing"></a>手動のバケッティング

フィルター処理の結果、473 個の候補が残りました。 しかし、それらはさまざまな形式になりました。

1. 一部のケースでは、フィルター処理を通った別のケースを基本的に繰り返すだけでした。 たとえば、{% data variables.product.prodname_dotcom %} Copilot により提案が行われ、開発者がコメント行を入力し、{% data variables.product.prodname_dotcom %} Copilot で非常によく似た提案が再び提供されることがあります。 このようなケースは、重複として分析から削除しました。
2. いくつかは、長い繰り返しのシーケンスでした。 次の例のように、`‘<p>’` のブロックが繰り返される場所は、もちろん、トレーニング セット内のどこかにあります。 <br>![繰り返しの例](/assets/images/help/copilot/example_repetitions.png)<br> このような提案は、役に立つ場合 (テストケース、正規表現)、あるいは、役に立たない場合 (この場合のように、疑わしいと思われる) があります。 しかしいずれにしても、これらは、この調査を始めたときに私が思っていた暗記学習の考えに合っていません。
3. 一部は、自然数、素数、株価ティッカー、ギリシャ語のアルファベットなどの標準的な一覧表でした。 <br>![ギリシャ語のアルファベットの例](/assets/images/help/copilot/example_greek.png)
4. いくつかは、ごくわずかな普通の自由度で物事を行うことの、一般的で直接的な方法、おそらく普遍的な方法でした。 たとえば、次の中間の部分は、Beautiful Soup パッケージを使用してウィキペディア リストを解析する標準的な方法とまったく同じように思われます。 実際、{% data variables.product.prodname_dotcom %} Copilot のトレーニング データ <sup id="anchor5">[5](#footnote5)</sup> で見つかった最も一致するスニペットでは、このようなコードを使用して別の記事を解析し、その結果を使用してさまざまな操作を行います。 <br>![Beautiful Soup の例](/assets/images/help/copilot/example_beautiful_soup.png) <br>これも、私が考える引用に当てはまりません。 誰かが「ゴミを出してくる。すぐ戻るよ」と言う場合、その特定のフレーズが以前に何度も発言されていても、それは引用ではなく、事実を淡々と述べるものである、といったようなものです。
5. さらに、その他のすべてのケースがあります。 コードまたはコメントのいずれかに少なくともいくつかの重複があるケースです。 これらは私が非常に興味があるものなので、これから集中して進めます。

このバケッティングには必ずエッジ ケース <sup id="anchor6">[6](#footnote6)</sup> があり、分類する必要があると考える方法によって有用性が異なる場合があります。 そもそも、バケットのセット全体に異論もあるかもしれません。

そのため、私達はそのデータセット <sup id="anchor7">[7](#footnote7)</sup> をオープン ソースにしました。 したがって、バケットについての考え少し異なる場合や、GitHub Copilot によるトレーニング セットのおうむ返しの他の側面に興味がある場合は、次のセクションを無視して、独自の結論を出していただいて結構です。

## <a name="results"></a>結果

![概要プロット](/assets/images/help/copilot/plot_buckets.png)

自動フィルターでは、{% data variables.product.prodname_dotcom %} Copilot の提案のほとんどについて、トレーニングに使用するコードとの大きな重複は見つかりませんでした。 しかし、それによって 473 件のケースに注目しました。 最初のバケット (他のケースとよく似たケース) を削除すると、185 件の提案が残りました。 そのうち、144 件はバケット 2 から 4 に分類されました。 これにより、41 件のケースが最後のバケットに、つまり私が考えている用語の意味で「暗唱」に残りました。

これは、**10 ユーザー週ごとに 1 回の暗唱イベント** に相当します (95% 信頼区間: 7 - 13 週間、ポアソンテストを使用)。

もちろん、これは {% data variables.product.prodname_dotcom %} と、{% data variables.product.prodname_dotcom %} Copilot を試した Microsoft 開発者で測定しました。 自分のコーディングの動作がこれらと大きく異なる場合、結果は異なる可能性があります。 特に、これらの開発者の中には、Python プロジェクトでのみパートタイムで作業している人もいます。その点は区別できなかったので、特定の週にユーザーとして Python を書くすべてのユーザーを数えました。

10 週間で 1 つのイベントは多いようには思えませんが、0 でもありません。 そして、興味深い 3 つのことがわかりました。

### <a name="-data-variablesproductprodname_dotcom--copilot-quotes-when-it-lacks-specific-context"></a>{% data variables.product.prodname_dotcom %} Copilot では、特定のコンテキストがない場合に引用します。

歌の歌詞を覚えたいと思ったら、それを何度も聴かなければなりません。 {% data variables.product.prodname_dotcom %} Copilot も違いはありません。コードのスニペットを暗記するには、そのスニペットをたくさん見る必要があります。 各ファイルは {% data variables.product.prodname_dotcom %} Copilot に 1 回しか表示されないので、スニペットはパブリック コード内のさまざまなファイルに存在している必要があります。

手動ラベル付け中に選ばれた 41 件の主なケースのうち、異なるファイルが 10 個未満の場合は何も表示されません。 ほとんど (35 件のケース) では 100 回以上表示されます。 以前、{% data variables.product.prodname_dotcom %} Copilot が、トレーニング中に 70 万以上というとてつもない回数で表示されたものから空のファイルを開始するよう提案したことがありました。これは GNU 一般公衆ライセンスでした。

次のプロットは、バケット 5 の結果の一致したファイルの数 (各結果の下部に 1 つの赤いマーク) と、バケット 2 から 4 を示しています。 バケット 1 を残しました。これは実際には、バケット 2 から 4 のケースの重複とバケット 5 のケースの重複の組み合わせです。 推定分布は赤い線で表示されています。100 から 1,000 の一致の間でピークが発生します。

![一致するプロットの数](/assets/images/help/copilot/plot_copies.png)

### <a name="-data-variablesproductprodname_dotcom--copilot-mostly-quotes-in-generic-contexts"></a>{% data variables.product.prodname_dotcom %} Copilot では、主に一般的なコンテキストで引用します。

時間の経過とともにて、各ファイルは一意になります。 しかし、{% data variables.product.prodname_dotcom %} Copilot はそれを待っていません <sup id="anchor8">[8](#footnote8)</sup>。ファイルがまだ非常に一般的である間にソリューションを提供します。 また、動作するための特定なものがない場合は、他の場所から引用する可能性がそれ以外の場合よりもかなりと高くなります。

![コンテキスト長プロット](/assets/images/help/copilot/plot_context.png)

もちろん、ソフトウェア開発者は、ほとんどの時間をファイルの詳細に費やします。そのコンテキストは、{% data variables.product.prodname_dotcom %} Copilot が独自の提案を提供するのに十分に一意です。 一方、{% data variables.product.prodname_dotcom %} Copilot ではどのようなプログラムになるかわからないため、最初の提案はかなりいい加減です。 しかし、特に小さいプロジェクトやスタンドアロンのスクリプトでは、少量のコンテキストでも、ユーザーが何をしたいのかを合理的に推測するのに十分な場合があります。 また、それでもまだ十分に汎用的で、{% data variables.product.prodname_dotcom %} Copilot が暗記しているソリューションの 1 つが有望であると考える場合があります。

![コード例](/assets/images/help/copilot/example_robot.png)

これは、さまざまなバリエーションでアップロードされたロボット クラスのコースワークからほとんど直接取っています <sup id="anchor9">[9](#footnote9)</sup>。

### <a name="detection-is-only-as-good-as-the-tool-that-does-the-detecting"></a>検出は、検出を行うツールと同じくらい優れている

現在のフォームでは、広く適用すると、フィルターによってかなりの数の不要なケースが見つかります。 しかし、それでも、ノイズは多すぎてはいけません。 実験の内部ユーザーの場合、週に平均で 1 件ちょっとが見つかる可能性があります (バーストの可能性はありますが)。 そのうち、約 17% (二項検定を使用した 95% 信頼区間: 14% - 21%) が 5 番目のバケットに含まれます。

もちろん、絶対に確実なものなどはありません。だから、これもだまされる可能性があります。 ビルド中のツールにより検出するのがやや難しい場合もありますが、それでも明らかなソースがあります。 Python の Zen に戻すには:

![Zen のバリエーション](/assets/images/help/copilot/resources_recitation_example_zen_caw.gif)

## <a name="conclusion-and-next-steps"></a>まとめと次の手順

この調査で示しているのは、{% data variables.product.prodname_dotcom %} Copilot では、コードの本文を逐語的に引用 _できます_ が、そうすることはあまりなく、その場合、ほとんどは誰もが引用するコードを引用し、糸口を見つけるかのように、ほとんどの場合はファイルの先頭で引用していることです。

しかし、GitHub Copilot でコードを暗唱するのと、自分が詩を暗唱するのとでは、まだ大きな違いがあります。自分は引用しているタイミングが _わかって_ います。 Copilot で独自のアイデアを思い付くのではなく、既存のコードをそのまま模倣するタイミングも知りたいと思います。 そうすれば、そのコードに関する背景情報を検索し、クレジットが入る予定のところにクレジットを含めることができます。

答えは明らかです。この分析で使用した事前フィルター処理ソリューションを共有して、トレーニング セットとの重複を検出します。 候補にトレーニング セットからコピーされたスニペットが含まれている場合、UI では引用した場所が示されるだけです。 これで、適切な属性を含める、あるいは、そのコードをまったく使用しないことを決定することができます。

この重複検索はまだ Technical Preview に統合されていませんが、そのようにする予定です。 そして、引用率の低下と、その検出をより正確なものにすることの両方に引き続き取り組みます。

<br><br>

### <a name="footnotes"></a>脚注

<a name="footnote1">1</a>: [確率的おうむ返しの危険性について: 言語モデルが大きすぎる可能性があるか](https://dl.acm.org/doi/10.1145/3442188.3445922) [^](#anchor1)

<a name="footnote2">2</a>: [Tiferet Gazit](https://github.com/tiferet) [^](#anchor2)

<a name="footnote3">3</a>: von Bayern らによる、カラスの創造的な知恵に関する、「[ニューカレドニアのカラスによる複合ツールの構築](https://www.nature.com/articles/s41598-018-33458-z)」を参照 [^](#anchor3)

<a name="footnote4">4</a>: Carlini らによる、トレーニング データのリコールを意図的にトリガーする方法に関する、「[大規模言語モデルからのトレーニング データの抽出](https://arxiv.org/pdf/2012.07805.pdf)」を参照。 [^](#anchor4)

<a name="footnote5">5</a>: jaeteekae: [DelayedTwitter](https://github.com/jaeteekae/DelayedTwitter/blob/0a0b03de74c03cfbf36877ffded0cb1312d59642/get_top_twitter_accounts.py#L21) [^](#anchor5)

<a name="footnote6">6</a>: おそらく、_それほど_ 多くはありません。 ケースにラベルを付けるのを手伝うよう、何人かの開発者に依頼し、不明な点があれば彼らの判断で注意喚起するよう、全員が指示されました。 これは、10% 未満の 34 件のケースでのみ発生しました。 [^](#anchor6)

<a name="footnote7">7</a>: [パブリック データセット](/assets/images/help/copilot/matched_snippets.csv)では、トレーニング セットでも見つかった Copilot の提案の一部、見つかった頻度、パブリック コードで発生する例へのリンクを一覧表示します。 プライバシー上の理由から、入力候補の一致しない部分や、ユーザーが入力したコード コンテキストは含めていません (その長さだけを示しています)。 [^](#anchor7)

<a name="footnote8">8</a>: 実際には、この実験が行われたので、{% data variables.product.prodname_dotcom %} Copilot は、必要なファイル コンテンツが最小限になるように変更 _されています_。 そのため、ここでフラグが設定された提案の一部は、現在のバージョンでは表示されませんでした。 [^](#anchor8)

<a name="footnote9">9</a>: jenevans33 など: [CS8803-1](https://github.com/jenevans33/CS8803-1/blob/eca1bbc27ca6f7355dbc806b2f95964b59381605/src/Final/ekfcode.py#L23) [^](#anchor9)
