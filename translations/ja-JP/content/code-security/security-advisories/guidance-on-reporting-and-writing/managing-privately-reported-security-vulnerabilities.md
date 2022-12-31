---
title: 非公開で報告されたセキュリティの脆弱性の管理
intro: リポジトリの保守担当者は、プライベート脆弱性レポートが有効になっているリポジトリのセキュリティ リサーチャーによって非公開で報告されたセキュリティ脆弱性を管理できます。
permissions: 'Anyone with admin permissions to a repository can see, review, and manage privately-reported vulnerabilities for the repository.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Manage vulnerability reports
ms.openlocfilehash: 942533788dc6ad9280ddc023f583462c7a0ff7f8
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: '148160292'
---
{% data reusables.security-advisory.private-vulnerability-reporting-beta %}

{% data reusables.security-advisory.private-vulnerability-reporting-enable %}

## セキュリティの脆弱性を非公開で報告する方法について

プライベート脆弱性レポートを使用すると、セキュリティ リサーチャーは簡単なフォームを使用して脆弱性を直接報告できます。 

セキュリティ リサーチャーによって脆弱性が非公開で報告されると、通知を受け取り、承諾するか、さらに質問するか、拒否するかを選択できます。 レポートを承諾した場合は、セキュリティ リサーチャーと非公開で脆弱性の修正を共同で行う準備が整います。

## 非公開で報告されるセキュリティの脆弱性の管理

{% data variables.product.prodname_dotcom %} は、セキュリティ リサーチャーがリポジトリの脆弱性を非公開で報告したときにリポジトリの保守担当者に通知し、保守担当者がリポジトリを監視するか、リポジトリに対して通知を有効にした場合に通知を送信します。 詳細については、「[通知の設定](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications)」を参照してください。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-security %} {% data reusables.repositories.sidebar-advisories %}
1. 確認するアドバイザリをクリックします。 非公開で報告されるアドバイザリの状態は `Needs triage` になります。
  
   ![アドバイザリ一覧の例を示すスクリーンショット](/assets/images/help/security/advisory-list.png)
   
2. レポートを慎重に確認します。 次のようにすることができます。
   - **[一時的なプライベート フォークを開始する]** をクリックして、パッチについてセキュリティ リサーチャーと非公開で共同作業します。 これにより、提案されたアドバイザリの状態を `Needs triage` から変更することなく、共同作成者とさらに話し合う場所が提供されます。
   - **[承諾してドラフトとして開く]** をクリックして、{% data variables.product.prodname_dotcom %} のドラフト アドバイザリとして脆弱性レポートを承諾します。 このオプションを選択した場合、次のようになります。
      - これにより、レポートが公開されることはありません。
      - レポートはドラフトのリポジトリ セキュリティ アドバイザリになり、作成するドラフト アドバイザリと同じ方法で作業できます。
     セキュリティ アドバイザリの詳細については、「[リポジトリ セキュリティ アドバイザリについて](/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories)」を参照してください。
   - **[セキュリティ アドバイザリを閉じる]** をクリックして、レポートを拒否します。 可能であれば、アドバイザリを閉じる前に、レポートをセキュリティ リスクと見なさない理由を説明するコメントを追加する必要があります。

     ![外部から送信された脆弱性レポートを確認するときにリポジトリの保守担当者が使用できるオプションを示すスクリーンショット](/assets/images/help/security/advisory-maintainer-options.png)
