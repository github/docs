---
title: プロジェクト（ベータ）のインサイトの利用
intro: プロジェクトのデータから構築されたグラフを表示させ、カスタマイズできます。
allowTitleToDifferFromFilename: true
miniTocMaxHeadingLevel: 2
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Projects
  - Organizations
---

{% data reusables.projects.insights-alpha %}

## インサイトについて

インサイトを使って、プロジェクトに追加されたアイテムをソースデータとして利用し、グラフを表示及びカスタマイズできます。 デフォルトの「バーンアップ」グラフは、時間の経過に伴うアイテムのステータスを表示し、進捗を可視化できます。 デフォルトのグラフにフィルタを適用し、プロジェクトを見ることができる誰もが利用できるグラフをカスタマイズして保存することもできます。

![現在の繰り返しに対するデフォルトのバーンアップグラフの例を表示しているスクリーンショット](/assets/images/help/issues/burnup-example.png)

## グラフの作成

1. プロジェクトにアクセスします。
2. 右上で{% octicon "graph" aria-label="the graph icon" %}をクリックし、インサイトにアクセスします。 この機能は現在プライベートプレビュー中であり、すべての組織で利用できるわけではありません。 Organizationでインサイトがまだ有効化されていない場合は、{% octicon "graph" aria-label="the graph icon" %}アイコンは利用できません。
3. 左のメニューで**New chart（新規グラフ）**をクリックしてください。
4. あるいは、新しいグラフの名前を変更するには{% octicon "triangle-down" aria-label="The triangle icon" %}をクリックし、新しい名前を入力し、<kbd>Return</kbd>を押してください。
5. グラフの上で、グラフを構築するのに使われたデータを変更するフィルタを入力してください。 詳しい情報については「[プロジェクトのフィルタリング](/issues/trying-out-the-new-projects-experience/filtering-projects)」を参照してください。
6. フィルタのテキストボックスの右で、**Save changes（変更を保存）**をクリックしてください。
