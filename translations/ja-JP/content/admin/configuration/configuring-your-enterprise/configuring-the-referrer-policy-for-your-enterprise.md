---
title: エンタープライズの参照元ポリシーの構成
shortTitle: Configure referrer policy
intro: 'クロスオリジン要求のポリシーを構成することで、{% data variables.product.product_location %} のプライバシーを向上させることができます。'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Networking
  - Privacy
  - Security
ms.openlocfilehash: 4824e938e044a89e9d0e534564214c6a46ba44da
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066492'
---
## エンタープライズの参照元ポリシーについて

参照元ポリシーは、他のユーザーが {% data variables.product.product_location %} から外部サイトへのリンクにアクセスしたときに、{% data variables.product.product_name %} が HTTP ヘッダーで送信する情報を制御します。

既定では、{% data variables.product.product_location %} のユーザーが、インスタンスのファイルまたはコメントから別のサイトへのリンクにアクセスすると、要求にはインスタンスのホスト名が `Referer` ヘッダー内のプレーン テキストで含まれます。 リンクが外部 Web サイトにつながる場合、Web サイトの所有者は、要求またはログ ファイル内のインスタンスのホスト名を読み取る可能性があります。

ユーザーがインスタンスからリンクにアクセスしたときに、{% data variables.product.product_name %} が送信する情報を制御できます。

## `same-origin` 参照元ポリシーの有効化

`same-origin` 参照元ポリシーを有効にして、外部 Web サイトへの要求から {% data variables.product.product_location %} のホスト名を除外するように最新のブラウザーに指示できます。 この設定は、インスタンス上の Web インターフェイスからのすべてのリンクに適用されます。 既定では、{% data variables.product.product_name %} では、`origin-when-cross-origin` 参照元ポリシーと `strict-origin-when-cross-origin` 参照元ポリシーが使用されます。つまり、インスタンスのホスト名は外部 Web サイトへの HTTP 要求と HTTPS 要求に表示されます。

{% note %}

**注意**: 参照元ポリシーを `same-origin` に変更すると、要求の HTTP ヘッダーにホスト名が必要な外部サイトに影響する可能性があります。

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. [ユーザー エージェント参照元ポリシー] で、 **[すべての組織で同じ配信元参照元ポリシーを有効にする]** を選択します。
  ![同じ配信元参照元ポリシーを有効にするチェック ボックス](/assets/images/enterprise/settings/referrer-policy-checkbox.png)
1. **[保存]** をクリックします。
  ![同じ配信元参照元ポリシーを有効にするための [保存] ボタン](/assets/images/enterprise/settings/referrer-policy-save-button.png)
