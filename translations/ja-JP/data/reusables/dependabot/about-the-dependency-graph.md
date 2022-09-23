---
ms.openlocfilehash: 8cf9b4b70c5295ad2c7178a586fd660e05a88076
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "146458197"
---
依存関係グラフは、リポジトリに格納されているマニフェストおよびロック ファイル{% ifversion dependency-submission-api %}と、Dependency submission API (ベータ) を使用してリポジトリに送信された依存関係{% endif %}の概要です。 それぞれのリポジトリについて、以下が表示されます:{% ifversion fpt or ghec %}

- リポジトリが依存している依存関係、エコシステム、パッケージ
- リポジトリに依存する対象、リポジトリ、パッケージ{% else %}依存関係、すなわちリポジトリが依存するエコシステムとパッケージ。 {% data variables.product.product_name %} は、依存関係に関する情報、リポジトリに依存するリポジトリとパッケージを計算しません。{% endif %}
