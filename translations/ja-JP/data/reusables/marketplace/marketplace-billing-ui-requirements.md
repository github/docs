---
ms.openlocfilehash: d7d401ed18395e4dd30f45df07e850338fa43da9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145123189"
---
- {% data variables.product.prodname_marketplace %}から購入した有料プランをキャンセルした顧客は、そのアプリケーションに無料プランがあれば自動的にダウングレードされなければなりません。 {% data reusables.marketplace.cancellation-clarification %} 顧客は以前のプランを再度有効にできるようにすることが強く推奨されます。
- 次の形式で[アップグレード URL](/marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans/#about-upgrade-urls) を指定すると、顧客はアプリのユーザー インターフェイスからアップグレードできるようになります。`https://www.github.com/marketplace/<LISTING_NAME>/upgrade/<LISTING_PLAN_NUMBER>/<CUSTOMER_ACCOUNT_ID>`
- シート（ユニット単位の価格プラン）もしくは無制限のコラボレーターを提供するプランを購入した場合、どのユーザがアプリケーションにアクセスできるかを、顧客がアプリケーションのWebサイトから変更できるようにするべきです。
- 以下の変更は、顧客が自分のアカウントで、アプリケーションのWebサイトの支払い、プロフィール、もしくはアカウント設定のセクションにおいてすぐに見ることができるようになっているべきです。
  - 現在のプランと価格。
  - 購入された新しいプラン。
  - アップグレード、ダウングレード、キャンセル、無料トライアルの残り日数。
  - 支払いサイクルの変更（月または年単位）。
  - 定額及びユニット単位のプランの利用状況と残りのリソース。 たとえば、価格プランがユニット単位であれば、アプリケーションのサイトは使用されたユニットと使用可能なユニットを表示すべきです。
