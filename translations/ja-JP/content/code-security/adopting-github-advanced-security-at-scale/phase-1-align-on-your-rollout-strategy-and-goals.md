---
title: 'フェーズ 1: ロールアウト戦略と目標に合わせる'
intro: '{% data variables.product.prodname_code_scanning %} と {% data variables.product.prodname_secret_scanning %} を有効にする前に、企業全体に GHAS をロールアウトする方法を計画します。'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 1. Align on strategy
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: b2677cf11c300ad657f9bd6b8862fb1f292c2fb7
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109709'
---
{% note %}

この記事は、大規模な {% data variables.product.prodname_GH_advanced_security %} の導入に関するシリーズの一部です。 このシリーズの概要については、「[大規模な {% data variables.product.prodname_GH_advanced_security %} の導入の概要](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale)」を参照してください。

{% endnote %}

### 会社のロールアウトに対して明確な目標を設定する

会社のロールアウトの方向性に対する基盤を構築するには、社内の GHAS の目標を要約し、それらの目標を Team に伝えます。 Team の足並みが揃っている限り、目標は単純でも複雑でもかまいません。 目標に関するサポートが必要な場合、{% data variables.product.prodname_professional_services %} は、お客様や他の顧客との経験に基づく推奨事項を提供できます。

GHAS のロールアウトの目標の例を次に示します。

  - **脆弱性の数を減らす:** これは、一般的なものである場合もあれば、GHAS などのツールによって防止された可能性がある重大な脆弱性の影響を最近会社が受けたことが原因である場合もあります。
  - **高リスクのリポジトリを識別する:** 一部の会社は、最もリスクの高いリポジトリをターゲットにし、脆弱性を修復することでリスクを軽減できるようにすることだけを望んでいる場合があります。
  -  **修復率を上げる:** セキュリティ負債の蓄積を防ぐために、開発者による結果の導入を促進し、これらの脆弱性がタイムリーに修復されるようにすることをお勧めします。  
  - **コンプライアンス要件を満たす**: たとえば、多くの医療会社が GHAS を使用して、PHI (個人健康情報) の流出を防いでいます。
  - **秘密の漏洩を防ぐ**: 多くの会社は、ソフトウェア キーや財務データなど、重要な情報が漏洩するのを防ぎたいと考えています。

### セキュリティ グループと開発グループの両方でロールアウトを主導する

GHAS ロールアウトにセキュリティ Team と開発 Team の両方が含まれている会社は、セキュリティ グループのみが含まれていてパイロットの完了後に開発 Team が含まれる会社よりも、成功する傾向があります。 

GHAS では、開発者のワークフローにシームレスに統合することで、開発者を中心とするソフトウェア セキュリティへのアプローチが採用されています。 プロセスの早い段階から開発グループが主要メンバーとして参加すると、ロールアウトのリスクが低下し、組織の同意を得やすくなります。

早期に (理想的には購入時から) 開発グループを関与させると、会社は GHAS を利用して、開発プロセスの早い段階でセキュリティ上の懸念に対処できます。 両方のグループが連携すると、プロセスの早い段階で調整を行い、サイロを取り除いて、作業関係を構築して強化し、ロールアウトに対してより大きな責任を担います。 


### GHAS について学習する

ロールアウトに対する現実的な期待を設定するには、すべての利害関係者が GHAS のしくみに関する次の重要な事実を理解していることを確認してください。

#### 1. GHAS は、コードを保護するためのアクションを必要とする一連のセキュリティ ツールである

GHAS は、毎日のワークフローで構成、保守、使用され、他のツールと組み合わされることで価値が高まるツール スイートです。 

#### 2. GHAS は、使用する前に調整する必要がある

リポジトリに GHAS が設定されたら、会社のニーズを満たすように GHAS を構成する必要があります。 特に Code Scanning は、初期結果の評価や、将来のスキャンに備えた調整など、さらなるカスタマイズを必要とします。 多くの顧客においては、アプリケーションの脅威モデルに基づいて Code Scanning が調整されるまで、初期スキャンによって限定的な結果または無関係な結果が返されます。

#### 3. GHAS ツールは、まとめて使用し、アプリケーション セキュリティ プログラムに統合すると、最も効果的である

GHAS は、すべてのツールを一緒に使うと最も効果的です。 GHAS を他のツールやアクティビティ (侵入テストや動的スキャンなど) と統合することで、アプリケーション セキュリティ プログラムの有効性がさらに向上します。 複数の保護レイヤーを常に利用することをお勧めします。

#### 4. カスタム {% data variables.product.prodname_codeql %} クエリは、一部の会社がスキャン結果のカスタマイズとターゲット設定に使用します 

Code Scanning では、世界で最も強力なコード分析エンジンである {% data variables.product.prodname_codeql %} が利用されています。 多くのお客様にとっては、コミュニティで使用可能な基本クエリ セットと追加クエリで十分です。 ただし、会社によっては、異なる結果をターゲットにしたり、誤検知を減らしたりするために、カスタム {% data variables.product.prodname_codeql %} クエリが必要になる場合があります。

カスタム {% data variables.product.prodname_codeql %} クエリに興味がある場合は、まず GHAS のロールアウトと実装を完了することをお勧めします。 その後、会社が準備できてから {% data variables.product.prodname_professional_services %} を使用すると、要件をナビゲートし、会社にカスタム クエリが必要であることを確認できます。  

#### 5. {% data variables.product.prodname_codeql %} では、Pull Request で行われた変更だけでなく、コードベース全体がスキャンされる

pull request から code scanning を実行すると、pull request で行われた変更だけでなく、完全なコードベースがスキャンに含まれます。 コードベース全体のスキャンは、コードベース内のすべての相互作用に対して変更がすべてレビューされるようにするための重要なステップです。

{% note %}

このシリーズの次の記事については、「[フェーズ 2: 大規模な有効化の準備](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale)」を参照してください。

{% endnote %}
