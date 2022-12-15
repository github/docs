---
title: GitHub Copilot について
intro: '{% data variables.product.prodname_copilot %} はオートコンプリート スタイルの候補を提示することでコーディングを支援します。 {% data variables.product.prodname_copilot %} のしくみと、{% data variables.product.prodname_copilot %} の使用時の考慮事項がわかります。'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: About GitHub Copilot
ms.openlocfilehash: 4ff4c73e61c10c2c3f75d9581bf426266122550b
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192779'
---
## {% data variables.product.prodname_copilot %} について

{% data variables.product.prodname_copilot %} では、コーディング時にオートコンプリート スタイルの候補を提示する AI ペア プログラマーです。 使用するコードを書き始めるか、そのコードに何をさせたいかを自然言語のコメントで記述することで、{% data variables.product.prodname_copilot %} から候補を取り入れることができます。 {% data variables.product.prodname_copilot %} は、編集中のファイルや関連ファイルのコンテキストを分析し、テキスト エディター内から候補の提示を行います。 {% data variables.product.prodname_copilot %} は、OpenAI によって作成された新しい AI システムである OpenAI Codex を利用しています。

{% data variables.product.prodname_copilot %} は、パブリック リポジトリに表示されるすべて言語でトレーニングされます。 各言語で、受け取る提案の品質は、その言語のトレーニング データの量と多様性によって異なります。 たとえば、JavaScript は、パブリック リポジトリで適切に表現されており、{% data variables.product.prodname_copilot %} でサポートされている最適な言語の 1 つです。 パブリック リポジトリでの表現が少ない言語では、生成される候補の信頼性が低下する可能性があります。

{% data variables.product.prodname_copilot %} は、Visual Studio Code、Visual Studio、Neovim、JetBrains での一連の IDE で拡張機能として使用できます。 詳しくは、「[{% data variables.product.prodname_copilot %} の概要](/copilot/getting-started-with-github-copilot)」を参照してください。

## {% data variables.product.prodname_copilot %} の使用

{% data variables.product.prodname_copilot %} の動作する実際の例を確認することができます。 詳しくは、[{% data variables.product.prodname_copilot %}](https://copilot.github.com/) の Web サイトを参照してください。 

{% data variables.product.prodname_copilot %} からは、無数のオープン ソース コード行から OpenAI によって構築されたモデルからの提案が提供されます。 その結果、{% data variables.product.prodname_copilot %} のトレーニング セットには、安全でないコーディング パターン、バグ、または古い API やイディオムへの参照が含まれている可能性があります。 {% data variables.product.prodname_copilot %} がこのトレーニング データに基づいて候補を生成する場合、それらの候補にも望ましくないパターンが含まれる場合があります。 

コードのセキュリティと品質を確保するのは、ご自分の責任です。 {% data variables.product.prodname_copilot %} で生成されたコードを使うときは、自分自身で書いていないコードを使うときと同じ予防措置を講じることをお勧めします。 これらの予防措置には、厳密なテスト、IP スキャン、セキュリティの脆弱性の追跡などが含まれます。 {% data variables.product.company_short %} には、{% data variables.product.prodname_actions %}、{% data variables.product.prodname_dependabot %}、{% data variables.product.prodname_codeql %}、{% data variables.product.prodname_code_scanning %} など、コード品質を監視および改善できる多数の機能が用意されています。 これらの機能はすべて、パブリック リポジトリで自由に使用できます。 詳しくは、「[{% data variables.product.prodname_actions %} について](/actions/learn-github-actions/understanding-github-actions)」と「[{% data variables.product.company_short %} のセキュリティ機能](/code-security/getting-started/github-security-features)」を参照してください。

{% data variables.product.prodname_copilot %} では、プロンプト内の不快な単語をブロックし、機密性の高いコンテキストにある候補を生成しないようにフィルターを使っています。 私たちは、{% data variables.product.prodname_copilot %} によって生成された不快な候補 (偏った、差別的、または虐待的な出力など) をよりインテリジェントに検出して削除するため、フィルター システムを常に改善することに取り組んでいます。 {% data variables.product.prodname_copilot %} によって生成された不快な候補が表示される場合は、安全対策を改善できるように、その候補を copilot-safety@github.com に直接報告してください。 

## {% data variables.product.prodname_copilot %} の課金について

{% data variables.product.prodname_copilot %} は有料機能であり、月単位または年単位のサブスクリプションが必要です。 {% data variables.product.prodname_copilot %} サブスクリプションの支払いと管理は、{% data variables.product.prodname_copilot_for_individuals %} の {% data variables.product.prodname_dotcom_the_website %} の個人アカウントから可能です。あるいは、{% data variables.product.prodname_copilot_for_business %} の {% data variables.product.prodname_ghe_cloud %} のエンタープライズ アカウントからまとめて支払い、管理できます。

確認が取れている学生、教師、および {% data variables.product.prodname_dotcom %} 上のオープン ソース プロジェクトのメンテナンス担当者は、{% data variables.product.prodname_copilot_individuals_short %} を無料で使うことができます。 無料の {% data variables.product.prodname_copilot_individuals_short %} サブスクリプションの条件を満たしている場合は、{% data variables.product.prodname_copilot %} サブスクリプション ページにアクセスしたときに、自動的に通知されます。 無料の {% data variables.product.prodname_copilot_individuals_short %} サブスクリプションの条件を満たしていない場合、60 日間の無料試用版が提供され、その後継続して使うには有料のサブスクリプションが必要になります。 {% data variables.product.prodname_copilot_for_business %} には無料試用版は含まれていません。 詳細については、「[{% data variables.product.prodname_copilot %} の課金について](/billing/managing-billing-for-github-copilot/about-billing-for-github-copilot)」を参照してください。

## JetBrains IDE での {% data variables.product.prodname_copilot %} プラグインのライセンスについて

{% data variables.product.prodname_dotcom %}, Inc. は、JetBrains プラグインのライセンサーです。 このプラグインのエンド ユーザー ライセンス契約は、[{% data variables.product.prodname_dotcom %} 追加製品および機能の利用規約](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)であり、このプラグインの使用はこれらの利用規約の対象となります。 JetBrains は、本プラグインまたはかかる契約に関連して、一切の責任または義務を負わないものとします。 プラグインを使うことにより、お客様は前述の利用規約に同意したものと見なされます。

## 参考資料

- "[{% data variables.product.company_short %} 追加製品および機能の利用規約](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)"{% ifversion ghec %}
- "[{% data variables.product.prodname_copilot_for_business %} プライバシーに関する声明](/free-pro-team@latest/site-policy/privacy-policies/github-copilot-for-business-privacy-statement)"{% endif %}
