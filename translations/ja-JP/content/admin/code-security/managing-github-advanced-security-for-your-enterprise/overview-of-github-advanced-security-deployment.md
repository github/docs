---
title: GitHub Advanced Security の展開の概要
intro: これらのベスト プラクティス、ロールアウトの例、エンタープライズでテスト済みの段階的なアプローチを確認して理解することで、会社が {% data variables.product.prodname_GH_advanced_security %} (GHAS) の導入に向けて適切な準備をすることができます。
product: '{% data variables.product.prodname_GH_advanced_security %} is a set of security features designed to make enterprise code more secure. It is available for {% data variables.product.prodname_ghe_server %} 3.0 or higher, {% data variables.product.prodname_ghe_cloud %}, and open source repositories. To learn more about the features, included in {% data variables.product.prodname_GH_advanced_security %}, see "[About GitHub Advanced Security](/get-started/learning-about-github/about-github-advanced-security)."'
redirect_from:
- /admin/advanced-security/overview-of-github-advanced-security-deployment
miniTocMaxHeadingLevel: 3
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
- Advanced Security
- Code scanning
- Enterprise
- Security
ms.openlocfilehash: 9c58cc8cca76a19ccc1aa36770e4cafcf4c9fcc7
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "145120854"
---
{% data variables.product.prodname_GH_advanced_security %} (GHAS) は、世界で最も高度なセマンティック コード分析エンジンである CodeQL などの統合ツールを使用しており、チームがより安全なコードをより速く構築するのに役立ちます。 GHAS は、Enterprise 全体の開発者の積極的な参加を必要とするツールのスイートです。 投資収益率を最大限に高めるためには、GHAS を使用、適用、維持してコードを真に保護する方法を学ぶ必要があります。

会社の新しいソフトウェアに取り組む上で最も大きな課題の 1 つは、ロールアウトと実装のプロセスに加え、ロールアウトを成功させるために必要な組織の支持を推進するための文化的な変化をもたらすことです。

GHAS を用いたこのプロセスに関する会社の理解と準備が進むよう、この概要では次のことを目的とします。
  - 会社にとって GHAS のロールアウトとはどのようなものかを説明します。
  - 会社によるロールアウトの準備を支援します。
  - 会社のロールアウトが成功する可能性が高くなるよう、重要なベスト プラクティスを共有します。

{% data variables.product.prodname_GH_advanced_security %} で使用できるセキュリティ機能については、「[{% data variables.product.prodname_dotcom %} のセキュリティ機能](/code-security/getting-started/github-security-features)」をご覧ください。

## <a name="recommended-phased-approach-for-ghas-rollouts"></a>GHAS のロールアウトに推奨される段階的アプローチ

業界と GitHub のベスト プラクティスから開発された GHAS のロールアウトの段階的アプローチを作成しました。 このアプローチは、{% data variables.product.prodname_professional_services %} と連携して、または独立してロールアウトに利用できます。

段階的アプローチをお勧めしますが、会社のニーズに基づいて調整できます。 また、ロールアウトと実装のタイムラインを作成し、従うことをお勧めします。 計画を立て始めるにあたり、会社に最適な理想的なアプローチとタイムラインを協力して明らかにできます。

![GitHub Advanced Security ロールアウトと展開の 3 つのフェーズを示す図。フェーズ 0: 計画とキックオフ、フェーズ 1: パイロット プロジェクト、フェーズ 2: 早期導入者向けの組織の同意とロールアウト、フェーズ 3: 組織の完全なロールアウトと変更管理など](/assets/images/enterprise/security/advanced-security-phased-approach-diagram.png)


お客様が {% data variables.product.prodname_GH_advanced_security %} の展開を成功できるよう支援した経験に基づき、ほとんどのお客様はこれらのフェーズに従うものと思われます。 会社のニーズに応じて、このアプローチを変更し、いくつかのフェーズやステップを変更または削除する必要がある場合があります。

これらの各フェーズの実装に関する詳細なガイドについては、「[Enterprise に {% data variables.product.prodname_GH_advanced_security %} を展開する](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise)」をご覧ください。 次のセクションでは、これらの各フェーズの概要について説明します。

###  <a name="-octicon-milestone-aria-labelthe-milestone-icon--phase-0-planning--kickoff"></a>{% octicon "milestone" aria-label="The milestone icon" %} フェーズ 0: 計画とキックオフ

このフェーズでの全体的な目標は、ロールアウトを計画して準備し、ユーザー、プロセス、テクノロジを配置してロールアウトできる状態にすることです。 また、チーム全体での GHAS の導入と使用状況を測定するために使われる成功基準も検討する必要があります。

### <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-1-pilot-projects"></a>{% octicon "milestone" aria-label="The milestone icon" %} フェーズ 1: パイロット プロジェクト

GHAS の実装を始めるには、最初にいくつかの影響の大きいプロジェクトやチームで初期ロールアウトをパイロットすることをお勧めします。 これにより、社内の最初のグループが GHAS に慣れ、GHAS を有効にして構成する方法を学習し、GHAS に関する強固な基盤を構築してから、会社の残りの部分にロールアウトすることができます。

### <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-2-organizational-buy-in--rollout-preparation"></a>{% octicon "milestone" aria-label="The milestone icon" %} フェーズ 2: 組織としての了承とロールアウトの準備

フェーズ 2 では、前のフェーズを総括し、会社の残りの部分に対するさらに大規模なロールアウトを準備します。 このフェーズでの組織の同意とは、パイロット プロジェクトの後で作業を進めるという会社の決定、または会社が時間をかけて GHAS を使用および導入すること (これが最も一般的です) です。 会社が時間をかけて GHAS を採用することを決定した場合、フェーズ 2 からフェーズ 3 さらにその先へと進むことができます。

### <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-3-full-organizational-rollout--change-management"></a>{% octicon "milestone" aria-label="The milestone icon" %} フェーズ 3: 組織への全体なロールアウトと変更管理

会社の意思が統一されたら、ロールアウト計画に基づいて、会社の残りの部分への GHAS のロールアウトを開始できます。 このフェーズでは、GHAS のロールアウトの間に行う必要がある組織の変更に計画が対応していることを確認し、現在のワークフローに対する変更の必要性、価値、影響をチームが理解することが重要です。

## <a name="best-practices-for-a-successful-ghas-rollout"></a>GHAS のロールアウトを成功させるベスト プラクティス

GHAS のロールアウトを成功させた企業には似た特性がいくつかあり、それによって成功がもたらされたことがわかりました。 お客様の会社で GHAS のロールアウトが成功する可能性が高くなるよう、これらのベスト プラクティスを確認します。

### <a name="-octicon-checklist-aria-labelthe-checklist-icon--set-clear-goals-for-your-companys-rollout"></a>{% octicon "checklist" aria-label="The checklist icon" %} 会社のロールアウトの明確な目標を設定する

目標を設けることは当たり前のように思えますが、明確な目標を決めずに GHAS のロールアウトを始めた企業をいくつか目にしています。 そのような企業では、ロールアウト プロセスを完了し、会社で GHAS の価値を実現するために必要な、組織の真の同意を得ることがいっそう困難になります。

ロールアウトと実装の計画を始めたら、会社での GHAS の目標のアウトラインを作成し、それらがチームに伝わるようにします。 出発点と統一がある限り、目標は非常に詳細なものでも単純なものでもかまいません。 これにより、会社のロールアウトの方向性の基礎が構築され、そこに到達するための計画を立てるのに役立ちます。 目標に関するサポートが必要な場合は、{% data variables.product.prodname_professional_services %} から提供される、お客様との経験や、他の顧客との以前の協力に基づく推奨事項が役に立ちます。

GHAS のロールアウトの目標の例を次に示します。
  - **脆弱性の数を減らす:** これは、一般的なものである場合もあれば、GHAS などのツールによって防止された可能性があると考えられる重大な脆弱性の影響を最近会社が受けたためである場合もあります。
  - **高リスクのリポジトリを識別する:** 一部の企業は、最もリスクの高いリポジトリをターゲットにし、脆弱性の修復とリスクの軽減を始められるようにすることだけを望んでいる場合があります。
  -  **修復率を上げる:** これは、開発者による結果の導入を促進して、これらの脆弱性がタイムリーに修復されるようにし、セキュリティ負債の蓄積を防ぐことによって実現できます。  
  - **コンプライアンス要件を満たす:** これは、新しいコンプライアンス要件やより具体的なものを作成するだけの簡単なことで済む場合があります。 多くの医療会社が GHAS を使用して、PHI (個人的な健康情報) の流出を防いでいます。
  - **シークレットの漏えいを防ぐ:** これは多くの場合、ソフトウェア キー、顧客データ、財務データなどの重要な情報が漏洩した (またはそれを防止したい) 企業の目標です。
  - **依存関係の管理:** 多くの場合、これは、パッチが適用されていない依存関係からのハッキングによって被害を受けた可能性がある企業や、脆弱な依存関係を更新してこれらの種類の攻撃を防ごうとする企業の目標です。  

### <a name="-octicon-checklist-aria-labelthe-checklist-icon--establish-clear-communication-and-alignment-between-your-teams"></a>{% octicon "checklist" aria-label="The checklist icon" %} チーム間の明確なコミュニケーションと連携を確立する

明確なコミュニケーションと連携は、プロジェクトの成功に不可欠であり、GHAS のロールアウトも同じです。 GHAS の購入からロールアウトを通して、セキュリティ グループと開発グループおよびエグゼクティブ スポンサー (CISO または VP) の間に明確なコミュニケーションと連携がある企業は、ロールアウトに成功する可能性が高いことがわかっていますｊ。

GHAS のロールアウトを通してこれらのグループが連携することを確認するだけでなく、いくつかの特定の領域に注目することをお勧めします。

#### <a name="rollout-planning"></a>ロールアウトの計画

GHAS をどのように会社に展開しますか。 多くのアイデアや意見が存在する可能性があります。 次に、先に進む前に、回答して調整することを検討する必要があるいくつかの質問を示します。
  - パイロットにはどのチームを含めますか?
  - パイロットでは何のプロジェクトに重点を置きますか?
  - ロールアウトではプロジェクトの優先順位をどのように決めますか?
  - パイロット以降では成功をどのように測定する予定ですか?
  - チームはどのようなレベルの変更に毎日取り組みますか? それをどのように伝えますか?
  - ロールアウトの計画を会社全体にどのように伝えますか?
  - チームをどのようにトレーニングする予定ですか?
  - 最初にスキャン結果をどのように管理しますか? (詳しくは、次の「結果の処理」セクションを参照してください)

#### <a name="processing-results"></a>結果の処理

GHAS をチームに展開する前に、継続的な結果の管理方法を明確に調整しておく必要があります。 最初は、結果を参考として扱うようにし、それでブロックしないことをお勧めします。 会社には完全な CI/CD パイプラインがある可能性があるため、会社のプロセスをブロックしないように、このアプローチをお勧めします。 これらの結果の処理に慣れたら、制限のレベルを徐々に上げ、会社にとってより正確なレベルにすることができます。

### <a name="-octicon-checklist-aria-labelthe-checklist-icon---lead-your-rollout-with-both-your-security-and-development-groups"></a>{% octicon "checklist" aria-label="The checklist icon" %} セキュリティ グループと開発グループの両方でロールアウトをリードする

多くの企業では、セキュリティ グループが GHAS のロールアウトの作業をリードしています。 多くの場合、パイロットが終了するまで、開発チームはロールアウト プロセスに含まれません。 ただし、セキュリティ チームと開発チームの両方でロールアウトをリードする企業の方が、GHAS のロールアウトに成功する可能性が高い傾向があることがわかっています。

なぜですか? GHAS では、開発者のワークフローにシームレスに統合することで、開発者を中心とするソフトウェア セキュリティへのアプローチが採用されています。 プロセスの早い段階から開発グループが主要メンバーとして参加しないと、ロールアウトのリスクが高くなり、組織の同意を得ることが困難になります。

開発グループが早くから関与していると (理想的には購入から)、セキュリティ グループと開発グループはプロセスの早い段階で連携を実現できます。 これは、2 つのグループ間のサイロを取り除き、作業関係を構築および強化し、よくある "壁に向かって物を投げている" ような心理状態にグループがならないようにするのに役立ちます。 これらのすべては、全体的な目標をサポートして、企業が移行を行い、開発プロセスの早い段階からセキュリティ上の懸念に対処するために GHAS を利用し始めるのを助けます。

#### <a name="-octicon-people-aria-labelthe-people-icon--recommended-key-roles-for-your-rollout-team"></a>{% octicon "people" aria-label="The people icon" %} ロールアウト チームに推奨される主要な役割

ロールアウトと実装の計画と実行全体を通してグループの適切な代表となることができるよう、チームがいくつかの重要な役割を持つことをお勧めします。

ロールアウト チームには、次の役割が含まれることを強くお勧めします。
- **エグゼクティブ スポンサー:** これは多くの場合、CISO、CIO、セキュリティ担当副社長、またはエンジニアリング担当副社長です。
- **技術セキュリティ リーダー:** 技術セキュリティ リーダーは、実装プロセス全体を通して、セキュリティ チームに代わって技術サポートを提供します。
- **技術開発リーダー:** 技術開発リーダーは技術サポートを提供し、開発チームと共に実装作業をリードする可能性があります。  

ロールアウト チームには、次の役割も含まれることをお勧めします。
- **プロジェクト マネージャー:** プロジェクト マネージャーがロールアウト プロセスに参加するのが早いほど、成功の可能性が高くなることがわかっています。  
- **品質保証エンジニア:** 会社の品質保証チームのメンバーを含めると、プロセスの変更が QA チームで確実に考慮されます。

### <a name="-octicon-checklist-aria-labelthe-checklist-icon--understand-key-ghas-facts-to-prevent-common-misconceptions"></a>{% octicon "checklist" aria-label="The checklist icon" %} 一般的な誤解を防ぐために、GHAS の重要な事実を理解する

GHAS の実装を始めるときは、GHAS のロールアウトに関して企業が持つ多くの一般的な誤解を防ぐために、GHAS とはどのようなもので何ができるかということについて、重要な基本的事実を理解しておくことが重要です。

{% note %}

**注:** GHAS の教育の拡大に関心がある場合、{% data variables.product.prodname_professional_services %} には、会社が GHAS の準備をするために必要なトピックなど、追加の教育とトレーニングのためのさまざまなオプションが用意されています。 これらのオファリングは、ワークショップ、デモンストレーション、ブートキャンプの形式で実施できます。 トピックの範囲は、GHAS の展開や GHAS の基本的な使用方法から、チームのスキルを引き続き高めるためのより高度なトピックまで及びます。 {% data variables.product.prodname_professional_services_team %} チームの利用について詳しくは、「[{% data variables.product.prodname_professional_services %}](#github-professional-services)」をご覧ください。

{% endnote %}


#### <a name="fact-1-ghas-is-a-suite-of-security-tools-that-require-action-to-protect-your-code"></a>事実 1: GHAS は、コードを保護するためのアクションを必要とする一連のセキュリティ ツールです。

インストールされて忘れられるセキュリティ ソフトウェアではありません。GHAS それ自体だけでは、コードは保護されません。 GHAS は、毎日のワークフローで構成、保守、使用され、他のツールと組み合わされることで価値が高まるツールのスイートです。

#### <a name="fact-2-ghas-will-require-adjustment-out-of-the-box"></a>事実 2: GHAS は、使用する前に調整する必要があります。

GHAS をリポジトリでセットアップしたら、会社のニーズに合わせて動作させるため、追加の手順を実行する必要があります。 特に code scanning については、さらに構成を行って結果を微調整する必要があります。たとえば、将来のスキャンで取得される内容を調整するため、スキャンによるフラグの設定をカスタマイズします。 多くのお客様は、初期スキャンでは、結果が得られなかったり、アプリケーションの脅威モデルに基づいて関連のない結果が得られるため、会社のニーズに合わせて調整する必要があることがわかります。

#### <a name="fact-3-ghas-tools-are-most-effective-when-used-together-but-the-most-effective-appsec-programs-involve-the-use-of-additional-toolsactivities"></a>事実 3: GHAS のツールは一緒に使った場合に最も効果的ですが、最も効果的な AppSec プログラムには追加のツールやアクティビティの使用が含まれます。

GHAS は、すべてのツールを一緒に使うと最も効果的です。 企業が侵入テストや動的スキャンなどの他のツールやアクティビティと GHAS を統合すると、AppSec プログラムの有効性がさらに向上します。 複数の保護レイヤーを常に利用することをお勧めします。

#### <a name="fact-4-not-all-companies-will-useneed-custom--data-variablesproductprodname_codeql--queries-but-they-can--help-you-customizetarget-scan-results"></a>事実 4: カスタム {% data variables.product.prodname_codeql %} クエリを使用しない、または必要としない企業もありますが、それはスキャン結果のカスタマイズやターゲット設定に役立ちます。

code scanning では、世界で最も強力なコード分析エンジンである {% data variables.product.prodname_codeql %} が利用されています。 多くの企業はカスタム クエリを記述できることに注目していますが、GitHub のお客様の多くは、基本クエリのセットとコミュニティで利用できる追加のクエリで十分です。 ただし、多くの企業では、結果の擬陽性率を下げたり、会社で必要な結果を対象とする新しいクエリを作成するために、カスタム {% data variables.product.prodname_codeql %} クエリが必要になる場合があります。

ただし、カスタム {% data variables.product.prodname_codeql %} クエリを作成する場合は、カスタム クエリについて調べる前に、GHAS のロールアウトと実装を完了することをお勧めします。

{% note %}

**注:** セキュリティ プラクティスにさらに深く取り組む前に、GHAS に関する強固な基盤を持つことが会社にとって重要です。

{% endnote %}

準備ができたら、GitHub のカスタマー サクセス チームは、お客様が満たす必要のある要件をかじ取りし、カスタム クエリの適切なユース ケースを用意するのを、手助けすることができます。  

#### <a name="fact-5--data-variablesproductprodname_codeql--scans-the-whole-code-base-not-just-the-changes-made-in-a-pull-request"></a>事実 5: {% data variables.product.prodname_codeql %} は、pull request で行われた変更だけでなく、コード ベース全体をスキャンします。

pull request から code scanning を実行すると、pull request で行われた変更だけでなく、完全なコードベースがスキャンに含まれます。 その時点でこれを行う必要はないように見えますが、コードベース内のすべての相互作用に対して変更がすべてレビューされるようにするための重要なステップです。

## <a name="examples-of-successful--data-variablesproductprodname_gh_advanced_security--rollouts"></a>{% data variables.product.prodname_GH_advanced_security %} のロールアウトの成功例

GHAS のロールアウトと実装を成功させるためのいくつかの鍵について理解が深まったので、ここではロールアウトを成功させた顧客の例をいくつか紹介します。 お客様の会社がそれに当てはまらない場合でも、{% data variables.product.prodname_dotcom %} は、ロールアウトのニーズに合うカスタマイズされたパスを構築するのに役立ちます。

### <a name="example-rollout-for-a-mid-sized-healthcare-technology-company"></a>中規模の医療技術企業のロールアウトの例  

サンフランシスコを拠点とする中規模の医療技術会社が、GHAS のロールアウト プロセスに成功しました。 有効にする必要があるリポジトリは多くなかったかもしれませんが、この会社の成功の鍵は、ロールアウトのためによく組織化されて統一されたチームを用意し、プロセスの間の問題のトラブルシューティングで {% data variables.product.prodname_dotcom %} と連携するための中心となる連絡先をはっきりと設けたことでした。 これにより、2 か月かからずにロールアウトを完了できました。

さらに、開発チームを関与させることで、ロールアウトが完了した後、チームは pull request レベルで code scanning を使用できました。

### <a name="example-rollout-for-a-mid-sized-data-platform-company"></a>中規模のデータ プラットフォーム企業のロールアウトの例

あるグローバル データ プラットフォーム企業は、GHAS でこれまでに大きな成功を収めています。 最初の実装が完了し、現在はロールアウト プロセスを進めています。 この会社は、セキュリティ態勢とツールについて成熟しており、会社としてよく統一されています。 これにより、その会社は自力で十分に運用でき、ロールアウトを迅速かつ円滑に進めることができます。

この会社の強力な連携、効率的な運用、セキュリティ ツールの成熟度により、GHAS を短時間で実装し、{% data variables.product.prodname_codeql %} のための優れた基盤を構築することができました。 その実装によって、異なるリポジトリ間で {% data variables.product.prodname_codeql %} を自動的に有効にできるようになりました。

セキュリティと技術的な成熟に加えて、この会社の成功のもう 1 つの重要な鍵は、チームがプロジェクトを推進するための、プロジェクト所有者と一本化された連絡先がいることです。 重要なのは、この主連絡先がいることだけではなく、非常に有能で高いスキルを持ち、ロールアウトの成功に直接貢献していることです。

## <a name="prerequisites-for-your-company-before-rolling-out-ghas"></a>会社が GHAS をロールアウトする前提条件

{% data variables.product.prodname_professional_services %} は、会社がこれらの前提条件を分析して理解し、GHAS の実装プロセスを準備するのに役立つ、追加のサポートを提供します。

 ### <a name="cicd-systems-and-process"></a>CI/CD システムとプロセス

会社が継続的インテグレーションまたは継続的デリバリー (CI/CD) のシステムとプロセスに関する投資または実装をまだ行っていない場合は、GHAS の導入と共にこの手順を実行することをお勧めします。 これは、お客様の会社にとって大きな変化である可能性があります。GitHub は、お客様と協力して、CI/CD システムの実装に関する推奨事項とガイダンスを提供したり、必要なトレーニングをサポートしたりできます。

### <a name="requirements-to-install--data-variablesproductprodname_gh_advanced_security-"></a>{% data variables.product.prodname_GH_advanced_security %} をインストールするための要件

GHAS のインストールには、会社で使われているテクノロジの組み合わせに基づいて、いくつかの異なるパスを使用できます。 このセクションでは、会社で必要になるかもしれないさまざまなパスの内容を簡単に説明します。

{% ifversion ghes %}

#### <a name="-data-variablesproductprodname_ghe_server-"></a>{% data variables.product.prodname_ghe_server %}

会社のニーズがサポートされているバージョンの {% data variables.product.prodname_ghe_server %} (GHES) を利用することが重要です。

以前のバージョンの GHES (3.0 より前) を使用していて、アップグレードしたい場合は、アップグレードを進める前に満たす必要があるいくつかの要件があります。 詳細については、次を参照してください。
  - [{% data variables.product.prodname_ghe_server %} をアップグレードする](/enterprise-server@2.22/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server)
  - [アップグレードの要求事項](/enterprise-server@2.20/admin/enterprise-management/upgrade-requirements)

サード パーティの CI/CD システムを使っていて、{% data variables.product.prodname_code_scanning %} を使いたい場合は、{% data variables.product.prodname_codeql_cli %} をダウンロードしてあることを確認します。 詳しくは、「[CI システムでの CodeQL の code scanning について](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)」をご覧ください。

GHAS のロールアウトに {% data variables.product.prodname_professional_services %} を利用している場合は、キックオフ会議でこれらの項目について詳しく合う準備をしてください。

{% endif %}

{% ifversion ghec %}

#### <a name="-data-variablesproductprodname_ghe_cloud-"></a>{% data variables.product.prodname_ghe_cloud %}

{% data variables.product.prodname_ghe_cloud %} (GHEC) のお客様の場合は、利用する予定の CI/CD に応じて満たす必要がある前提条件があります。

CI/CD に {% data variables.product.prodname_actions %} を使う場合:
- {% data variables.product.prodname_code_scanning %} を適切に統合して利用できるようにするには、インストールを始める前に、{% data variables.product.prodname_actions %} の基本的な理解が必要です。

CI/CD にサード パーティのツールを使う場合:
- {% data variables.product.prodname_codeql_cli %} を統合するには、CI/CD システムおよび *nix と Windows (特に、コマンドの実行方法と、成功と失敗の通知方法) についての基本を理解しておく必要があります。 サード パーティ製ツールを統合する方法について詳しくは、「[既存の CI システムで CodeQL code scanningを使用する](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system)」をご覧ください。

{% endif %}

## <a name="partnering-with-github-for-your-rollout"></a>ロールアウトでの GitHub との協力

GHAS の実装を準備するときは、このプロジェクトを成功させるために会社から何が必要かを検討することが重要です。 GHAS の実装を最大限に成功させるには、プロセス全体を通して GitHub とお客様の両方が責任を共有し、プロジェクトを所有するお客様の利害関係者を明きらかにする必要があります。

#### <a name="success-model-for-customer-and-github-responsibilities"></a>お客様と GitHub の責任の成功モデル

**お客様の責任**
- インフラストラクチャとプロセスの前提条件の用意
- 計画と実行を含むロールアウトと実装の管理
- 内部トレーニング
- (省略可能) GitHub Community への {% data variables.product.prodname_codeql %} クエリの提供

**GitHub の責任**

- {% ifversion ghes %}{% data variables.product.prodname_ghe_server %}、{% endif %}{% data variables.product.prodname_actions %}、{% data variables.product.prodname_GH_advanced_security %} などの機能のメンテナンスと強化
- 次のサービスの提供、保守、配信: {% data variables.product.prodname_dotcom %} ドキュメント、{% data variables.product.prodname_dotcom %} Community、{% data variables.product.prodname_dotcom %} サポート

{% note %}

**注:** {% data variables.product.prodname_professional_services %} は、お客様の責任の多くをサポートするのに役立ちます。 詳しくは、「[GitHub のサービスとサポート](#github-services-and-support)」をご覧ください。

{% endnote %}

## <a name="-data-variablesproductprodname_dotcom--services-and-support"></a>{% data variables.product.prodname_dotcom %} のサービスとサポート

### <a name="-data-variablesproductprodname_dotcom--support"></a>{% data variables.product.prodname_dotcom %} のサポート

実装の間に問題が発生した場合は、ソリューションに関する詳細なドキュメントを検索するか、{% data variables.product.prodname_dotcom %} のサポートを利用できます。これは、問題が発生した場合にサポートできる高度な技術エンジニアのチームです。 詳しくは、「[GitHub Enterprise サポート](https://enterprise.github.com/support)」をご覧ください。

さらに、[{% data variables.product.prodname_gcf %}](https://github.community/) を試すこともできます。

Premium サポート プランを購入した場合は、[Premium サポート ポータル](https://enterprise.github.com/support)でチケットを送信できます。 購入したサポート プランがわからない場合は、営業担当者に問い合わせるか、プラン のオプションを確認してください。

Premium サポート プランのオプションについて詳しくは、以下をご覧ください。
  - [Premium サポート](https://github.com/premium-support) {% ifversion ghec %}
  - [{% data variables.product.prodname_ghe_cloud %} の GitHub Premium サポートについて](/github/working-with-github-support/about-github-premium-support-for-github-enterprise-cloud){% endif %}{% ifversion ghes %}
  - [{% data variables.product.prodname_ghe_server %} の GitHub Premium サポートについて](/admin/enterprise-support/overview/about-github-premium-support-for-github-enterprise-server){% endif %}

### <a name="-data-variablesproductprodname_professional_services-"></a>{% data variables.product.prodname_professional_services %}

{% data variables.product.prodname_professional_services_team %} チームは、お客様と協力して、{% data variables.product.prodname_GH_advanced_security %} のロールアウトと実装を成功させことができます。 実装に必要と思われるガイダンスとサポートの種類のための、さまざまなオプションが用意されています。 また、お客様が GHAS から最大限の価値を得られるようにするためのトレーニングとブートキャンプも用意されています。

実装のために {% data variables.product.prodname_professional_services_team %} チームの協力を得たい場合は、最初にシステムの設計とインフラストラクチャ、および GHAS で設定するリポジトリの数について検討し、これらについて話し合えるようにすることをお勧めします。 さらに、このロールアウトで達成したい目標についての検討を始めます。

実装は、GHAS の使用方法を習得するセキュリティ主導の取り組みの成功における 1 つのステップにすぎません。 実装が完了したら、インフラストラクチャとコードベース全体のロールアウトについてさらに学習する必要があります。 {% data variables.product.prodname_professional_services_team %} で使用可能なすべてのオプションについて詳しくは、営業担当者にお問い合わせください。

最初に追加のサービスをオプトアウトしたものの、実装を始めるに当たって追加のサポートが必要であることがわかった場合は、営業担当者に連絡して、実装をサポートするために必要なサービス オプションについて話し合ってください。
