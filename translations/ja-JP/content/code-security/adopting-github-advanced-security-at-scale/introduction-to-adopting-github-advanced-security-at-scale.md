---
title: 大規模な GitHub Advanced Security の導入の概要
intro: '業界と GitHub のベスト プラクティスに従って、企業で {% data variables.product.prodname_GH_advanced_security %} を大規模に導入できます。'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: Introduction
redirect_from:
  - /admin/advanced-security/overview-of-github-advanced-security-deployment
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/overview-of-github-advanced-security-deployment
  - /admin/advanced-security/deploying-github-advanced-security-in-your-enterprise
  - /admin/code-security/managing-github-advanced-security-for-your-enterprise/deploying-github-advanced-security-in-your-enterprise
miniTocMaxHeadingLevel: 2
ms.openlocfilehash: f42a461b3c53565725d6909680fa8e6a202c0439
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109716'
---
## これらの記事について

{% data variables.product.prodname_GH_advanced_security %} (GHAS) は、CodeQL を使用したシークレット スキャンやコード スキャンなどの統合ツールを使用しており、チームがより安全なコードをより速く構築するのに役立ちます。 {% data variables.product.prodname_GH_advanced_security %} で使用できるセキュリティ機能については、「[GitHub Advanced Security について](/get-started/learning-about-github/about-github-advanced-security)」をご覧ください。

GHAS は、Enterprise 全体の開発者の積極的な参加を必要とするツールのスイートです。 投資収益率を最大限に高めるためには、GHAS を使用、適用、維持する方法を学ぶ必要があります。


業界と GitHub のベスト プラクティスから開発された GHAS のロールアウトの段階的アプローチを作成しました。 ほとんどのお客様は、{% data variables.product.prodname_GH_advanced_security %} のデプロイが成功したお客様の経験に基づいて、これらのフェーズに従うことを望んでいると思われますが、企業のニーズを満たすためにこのアプローチを変更する必要がある場合があります。 

大規模な Organization 全体での GHAS の有効化は、6 つのコア フェーズに分けることができます。

1. [**ロールアウトの戦略と目標の調整**](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals): 成功はどのようになるかを考え、GHAS がどのように企業に実装されるかを調整します。 このフェーズには数日または 1 週間しかかからない場合がありますが、ロールアウトの残りの部分に対する強固な基盤が築かれます。
  
2. [**大規模な有効化の準備**](/code-security/adopting-github-advanced-security-at-scale/phase-2-preparing-to-enable-at-scale): 開発者を準備し、リポジトリに関するデータを収集し、次のフェーズの準備ができていることを確認します。
  
3. [**パイロット プログラム**](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs): 必要に応じて、影響の大きいいくつかのプロジェクトとチームへの最初のロールアウトのパイロットを行います。 これにより、社内の最初のグループが GHAS に慣れてから、企業の残りの部分にロールアウトすることができます。 
  
4. [**内部ドキュメントを作成する**](/code-security/adopting-github-advanced-security-at-scale/phase-4-create-internal-documentation): GHAS のコンシューマー向けの内部ドキュメントを作成して伝達します。 GHAS を使用する開発者、セキュリティ エンジニア、その他のユーザーに適切なドキュメントが提供されていないと、ロールアウトで価値が失われます。
  
5. [ **{% data variables.product.prodname_code_scanning %} のロールアウトとスケーリング**](/code-security/adopting-github-advanced-security-at-scale/phase-5-rollout-and-scale-code-scanning): 利用可能な API を活用し、先ほど収集したリポジトリ データを使用して、チーム別および言語ごとに Enterprise 全体で{% data variables.product.prodname_code_scanning %} を自動的にロールアウトします。
  
6. [ **{% data variables.product.prodname_secret_scanning %} のロールアウトとスケーリング**](/code-security/adopting-github-advanced-security-at-scale/phase-6-rollout-and-scale-secret-scanning): {% data variables.product.prodname_secret_scanning %} をロールアウトします。これは構成が少ないため、{% data variables.product.prodname_code_scanning %} よりも導入が簡単です。 それでも、新旧の結果を処理するための戦略を立てることが重要です。

## {% data variables.contact.github_support %} と {% data variables.product.prodname_professional_services_team %}

実装中に問題が発生した場合や、ご不明な点がある場合は、ドキュメントで解決策を検索するか、{% data variables.contact.github_support %} にお問い合わせください。 詳しくは、「[GitHub Support について](/support/learning-about-github-support/about-github-support)」をご覧ください。

ロールアウト プロセス全体のガイダンスをご希望の場合は、{% data variables.product.prodname_professional_services %} が、お客様と協力して {% data variables.product.prodname_GH_advanced_security %} のロールアウトと実装を成功させることができます。 ガイダンスとサポートにはさまざまなオプションを提供しています。 また、{% data variables.product.prodname_GH_advanced_security %} の価値を最適化するため、お客様の企業でご利用いただけるトレーニングや短期集中講座もご用意しています。

Professional Service でご利用になれるすべてのオプションについて詳しくは、営業担当者にお問い合わせください。 詳細については、{% data variables.contact.contact_enterprise_sales %} にお問い合わせください。

{% note %}

このシリーズの最初の記事は「[フェーズ 1: ロールアウトの戦略とゴールの調整](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals)」を参照してください。

{% endnote %}
