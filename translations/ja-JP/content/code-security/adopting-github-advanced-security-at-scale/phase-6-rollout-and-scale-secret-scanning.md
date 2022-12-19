---
title: 'フェーズ 6: secret scanning のロールアウトとスケーリング'
intro: 'この最後のフェーズでは、{% data variables.product.prodname_secret_scanning %} のロールアウトについて重点的に取り上げます。 {% data variables.product.prodname_secret_scanning_caps %} は、必要な構成が少ないため、{% data variables.product.prodname_code_scanning %} よりも簡単にロールアウトできるツールですが、新しい結果と古い結果を処理するための戦略を策定することが重要です。'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 6. Rollout secret scanning
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 15254d9a4d490f6eeff566cd71d94da7c6e8c467
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158758'
---
{% note %}

この記事は、{% data variables.product.prodname_GH_advanced_security %} の大規模な導入に関するシリーズの一部です。 このシリーズの前の記事については、「[フェーズ 5: code scanning のロールアウトとスケーリング](/code-security/adopting-github-advanced-security-at-scale/phase-5-rollout-and-scale-code-scanning)」を参照してください。

{% endnote %}

Organization 内の個々のリポジトリまたはすべてのリポジトリに対して secret scanning を有効にすることができます。 詳しい情報については、「[リポジトリのセキュリティと分析設定を管理する](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)」または「[Organization のセキュリティと分析設定を管理する](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)」を参照してください。

この記事では、Organization 内のすべてのリポジトリに対する {% data variables.product.prodname_secret_scanning %} の有効化に重点を置いてプロセスの概要について説明します。 この記事で説明する原則は、時間をずらして、個々のリポジトリに対して {% data variables.product.prodname_secret_scanning %} を有効にする場合でも適用できます。 

### 1. 新しくコミットされたシークレットに集中する

{% data variables.product.prodname_secret_scanning %} を有効にする場合、secret scanning によって検出された、新しくコミットされた資格情報の修復に集中する必要があります。 コミットされた資格情報のクリーンアップに集中すると、開発者は誤って新しい視覚情報をプッシュし続ける可能性があります。つまり、シークレットの合計数は、意図したとおりに減少せず、ほぼ同じレベルにとどまります。 現在のシークレットを取り消すことに集中する前に、新しい資格情報が漏洩するのを止めることが不可欠なのは、このためです。

新しくコミットされた資格情報に取り組むためのアプローチはいくつかありますが、その一例は次のとおりです。

1. **通知**: Webhook を使用して、新しいシークレット アラートが、可能な限り迅速に適切なチームに表示されるようにします。 Webhook は、シークレット アラートが作成または解決されるか、もう一度開かれたときに発生します。 その後、Webhook ペイロードを解析し、Slack、Teams、Splunk、メールなど、自分やチームが使用するツールと統合できます。 詳しい情報については、「[Webhook について](/developers/webhooks-and-events/webhooks/about-webhooks)」および「[Webhook イベントとペイロード](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#secret_scanning_alert)」を参照してください。
2. **フォローアップ**: すべてのシークレットの種類に対して機能する高度な修復プロセスを作成します。 たとえば、シークレットをコミットした開発者とそのプロジェクトの技術リーダーに連絡し、シークレットを GitHub にコミットする危険性を強調し、検出されたシークレットの取り消しと更新を依頼することができます。

  {% note %}
  
  **注:** この手順を自動化できます。 数百のリポジトリを持つ大規模な Enterprise および Organization の場合、手動によるフォローアップを持続するのは不可能です。 最初の手順で定義した Webhook プロセスに自動化を取り入れることができます。 Webhook ペイロードには、漏洩したシークレットに関するリポジトリおよび Organization 情報が含まれます。 この情報を使って、リポジトリの現在のメンテナンス担当者に連絡し、責任者宛のメールやメッセージを作成したり、issue を開いたりすることができます。
  
  {% endnote %} 
3. **教育**: シークレットをコミットした開発者に割り当てる内部トレーニング ドキュメントを作成します。 このトレーニング ドキュメントでは、シークレットをコミットすることによって生じるリスクを説明し、開発中のシークレットの安全な使用についてベスト プラクティス情報を指示します。 開発者が経験から学ばず、シークレットのコミットを続ける場合、エスカレーション プロセスを作成できますが、通常は教育する方が効果的です。

漏洩した新しいシークレットについて最後の 2 つの手順を繰り返します。 このプロセスにより、開発者はコードで使用されるシークレットを安全に管理することに対して責任を負うようになり、新しくコミットされたシークレットの削減を測定できます。

{% note %}

**注:** より先進的な組織では、特定の種類のシークレットの自動修正を実行することが必要な場合があります。 [GitHub Secret Scanner Auto Remediator](https://github.com/NickLiffen/GSSAR) と呼ばれるオープンソース イニシアチブがあります。これを AWS、Azure、または GCP 環境にデプロイし、最も重要として定義した内容に基づいて特定の種類のシークレットを自動的に取り消すように調整できます。 これは、より自動化されたアプローチでコミットされる新しいシークレットに対応できる優れた方法でもあります。

{% endnote %}

### 2. 以前にコミットされたシークレットを最も重要なものから順に修復する

新しく公開されたシークレットを監視、通知、修復するプロセスを確立したら、{% data variables.product.prodname_GH_advanced_security %} が導入される前にコミットされたシークレットの作業を開始できます。

最も重要なシークレットを定義する方法は、Organization のプロセスと統合によって異なります。 たとえば、企業は Slack を使用していない場合、Slack Incoming Webhook のシークレットについて心配しない可能性があります。 Organization にとって最も重要な資格情報の種類の上位 5 つに注目することから始めると便利な場合があります。

シークレットの種類を決定したら、次の手順を実行できます。

1. 各種類のシークレットを修復するためのプロセスを定義します。 多くの場合、実際の手順は、シークレットの種類によって大きく異なります。 ドキュメントまたは内部のナレッジ ベースに、シークレットの種類ごとのプロセスを書き留めます。
  
  {% note %}
  
  **注:** シークレットを取り消すためのプロセスを作成する場合、中央のチームではなく、リポジトリを保守しているチームにシークレットを取り消す責任を与えます。 GHAS の原則の 1 つは、特に、開発者がセキュリティ イシューを作成した場合、開発者がセキュリティの所有権を取得し、セキュリティ イシューを修正する責任を担うことです。

  {% endnote %}

2. 資格情報を取り消すためにチームが従うプロセスを作成したら、シークレットの種類と、漏洩したシークレットに関連付けられているその他のメタデータに関する情報を照合して、新しいプロセスの伝達先を識別することができます。
  
  {% ifversion not ghae %}
  
  この情報を収集するには、セキュリティの概要を使用できます。 セキュリティの概要の使用に関する詳しい情報については、「[セキュリティの概要でのアラートのフィルタリング](/code-security/security-overview/filtering-alerts-in-the-security-overview)」を参照してください。
  
  {% endif %}
  
  収集する必要がある情報としては、次のものがあります。
  
    - Organization
    - リポジトリ
    - シークレットの種類
    - シークレット値
    - 連絡先のリポジトリの保守管理者
  
  {% note %}
  
  **注:** その種類の漏洩したシークレットが少ない場合は、UI を使用します。 数百ものシークレットが漏洩した場合は、API を使用して情報を収集します。 詳しい情報については、「[secret scanning REST API](/rest/reference/secret-scanning)」を参照してください。
    
  {% endnote %}

3. 漏洩したシークレットに関する情報を収集したら、シークレットの各種類によって影響を受けるリポジトリを保守しているユーザーを対象とした通信計画を作成します。 電子メールまたはメッセージングを使用でき、影響を受けるリポジトリに GitHub イシューを作成することもできます。 これらのツールによって提供される API を使用して自動的に連絡を送信できる場合、これにより、複数のシークレットの種類にまたがって簡単にスケーリングできます。

### 3. プログラムを拡張してより多くのシークレットの種類とカスタム パターンを含める

これで、5 つの最も重要なシークレットの種類を超えて、教育にさらに焦点を当てた、より包括的なリストに拡張できます。 対象としたさまざまなシークレットの種類について前の手順を繰り返し、以前にコミットされたシークレットを修正できます。

また、初期のフェーズで照合されたより多くのカスタム パターンを含めて、さらに多くのパターンを送信するようにセキュリティ チームや開発者チームに促し、新しいシークレットの種類タイプが作成されたときに新しいパターンを送信するプロセスを確立することもできます。 詳細については、[シークレット スキャンのカスタム パターンの定義](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)に関する記事を参照してください。

{% ifversion secret-scanning-push-protection %}

また、secret scanning を使用してプッシュ保護を有効にすることもできます。 有効にすると、secret scanning により、信頼度の高いシークレットについてプッシュがチェックされ、ブロックされます。 詳細については、「[Protecting pushes with secret scanning (シークレット スキャンによるプッシュの保護)](/code-security/secret-scanning/protecting-pushes-with-secret-scanning#using-secret-scanning-as-a-push-protection-from-the-command-line)」を参照してください。

{% endif %}

他のシークレットの種類の修復プロセスを引き続き構築する際は、組織内の GitHub のすべての開発者と共有できるプロアクティブなトレーニング資料の作成を開始します。 この時点まで、焦点の多くはリアクティブでした。 焦点をプロアクティブに変えて、まず、開発者が GitHub に資格情報をプッシュしないように促すことは、優れたアイデアです。 これは複数の方法で実現できますが、リスクと理由を説明する短いドキュメントを作成することが出発点として適しています。

{% note %}

これは、{% data variables.product.prodname_GH_advanced_security %} の大規模な導入に関するシリーズの最後の記事です。 ご質問がある場合、またはサポートが必要な場合は、「[{% data variables.product.prodname_GH_advanced_security %} の大規模な導入の概要](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale#github-support-and-professional-services)」にある {% data variables.contact.github_support %} と {% data variables.product.prodname_professional_services_team %} に関するセクションを参照してください。

{% endnote %}
