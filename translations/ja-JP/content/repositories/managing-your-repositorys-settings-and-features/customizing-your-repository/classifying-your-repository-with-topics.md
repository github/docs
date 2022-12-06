---
title: トピックでリポジトリを分類する
intro: あなたのプロジェクトを他の人が見つけて貢献しやすくするために、プロジェクトの目的、分野、主催グループなどの、リポジトリに関するトピックを追加できます。
redirect_from:
  - /articles/about-topics
  - /articles/classifying-your-repository-with-topics
  - /github/administering-a-repository/classifying-your-repository-with-topics
  - /github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Classify with topics
ms.openlocfilehash: 26f51423140c086bbea019666b8d569419da3b38
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108887'
---
## Topics について

Topics を利用すれば、特定の領域に関するリポジトリを調べたり、コントリビュートするプロジェクトを見つけたり、特定の問題に対する新たなソリューションを見つけ出すことができます。 Topics は、リポジトリのメインページに表示されます。 トピック名をクリックして、{% ifversion fpt or ghec %}関連するトピックや、そのトピックに分類される他のリポジトリのリストを見たりすることができます。{% else %}そのトピックの他のリポジトリを検索することができます。{% endif %}

![Topics を表示しているテストリポジトリのメインページ](/assets/images/help/repository/os-repo-with-topics.png)

最も使われているトピックを参照するには、 https://github.com/topics/ にアクセスします。

{% ifversion fpt or ghec %}[github/explore](https://github.com/github/explore) リポジトリにある {% data variables.product.product_name %} の注目のトピックのセットにコントリビュートできます。 {% endif %}

リポジトリの管理者は、リポジトリに好きなトピックを追加できます。 リポジトリを分類するのに役立つトピックには、そのリポジトリの意図する目的、主題の領域、コミュニティ、言語などがあります。{% ifversion fpt or ghec %}加えて、{% data variables.product.product_name %} はパブリックなリポジトリの内容を分析し、推奨されるトピックを生成します。リポジトリの管理者は、これを受諾することも拒否することもできます。 プライベートリポジトリの内容は分析されず、Topics が推奨されることはありません。{% endif %}

{% ifversion fpt %}パブリックとプライベート{% elsif ghec or ghes %}パブリック、プライベート、内部{% elsif ghae %}プライベートと内部{% endif %}のリポジトリにはトピックを含めることができますが、トピック検索結果にはアクセスできるプライベート リポジトリのみが表示されます。

特定のトピックに関連付けられているリポジトリを検索できます。 詳細については、「[リポジトリを検索する](/search-github/searching-on-github/searching-for-repositories#search-by-topic)」を参照してください。 また、{% data variables.product.product_name %} 上でトピックのリストを検索することもできます。 詳しくは、「[トピックを検索する](/search-github/searching-on-github/searching-topics)」をご覧ください。

## Topics をリポジトリに追加する

{% note %}

**注:** トピック名は、プライベート リポジトリ内からトピックを作成した場合でも、常にパブリックになります。

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
2. [バージョン情報] の右側にある {% octicon "gear" aria-label="The Gear icon" %} をクリックします。
  ![リポジトリのメイン ページにある歯車アイコン](/assets/images/help/repository/edit-repository-details-gear.png)
3. [Topics] で、リポジトリに追加するトピックを入力してから、スペースを入力します。
  ![トピックの入力フォーム](/assets/images/help/repository/add-topic-form.png)
4. トピックの追加が終わったら、 **[変更の保存]** をクリックします。
  ![[リポジトリの詳細の編集] の [変更の保存] ボタン](/assets/images/help/repository/edit-repository-details-save-changes-button.png)
