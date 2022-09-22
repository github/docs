---
ms.openlocfilehash: a92a36101675ea033048f97465a87571b23ee9ef
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/12/2022
ms.locfileid: "145091305"
---
あるいは、{% data variables.product.product_name %} 上のリポジトリ {% ifversion fpt %}、組織 {% elsif ghes or ghec or ghae %}、組織、またはエンタープライズ {% endif %} へのランナーの削除のアクセス権がないものの、ランナー マシンを再利用したいのであれば、セルフホスト ランナー アプリケーション ディレクトリ内の `.runner` ファイルを削除できます。 そうすれば、セルフホストランナーアプリケーションをダウンロードし直さなくても、ランナーを再登録できるようになります。
