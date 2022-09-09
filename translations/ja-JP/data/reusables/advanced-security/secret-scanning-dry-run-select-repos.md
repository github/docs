---
ms.openlocfilehash: 55be1692eaf41dbee91aa298eeb9a969e5b91b42
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147549077"
---
{%- ifversion custom-pattern-dry-run-ga %}
1. ドライ ランを実行するリポジトリを選びます。
   * Organization 全体でドライ ランを実行するには、**Organization のすべてのリポジトリ** を選びます。
   ![ドライ ラン用に選択されたリポジトリを示すスクリーンショット](/assets/images/help/repository/secret-scanning-dry-run-custom-pattern-all-repos.png)
   * ドライ ランを実行するリポジトリを指定するには、 **[選択済みリポジトリ]** を選び、最大 10 個のリポジトリを検索して選びます。
   ![ドライ ラン用に選択されたリポジトリを示すスクリーンショット](/assets/images/help/repository/secret-scanning-dry-run-custom-pattern-select-repos-option.png)
1. 新しいカスタム パターンをテストする準備ができたら、 **[実行]** をクリックします。
{%- else %}
1. ドライ ランを実行するリポジトリを最大 10 個検索して選択します。
   ![ドライ ラン用に選択されたリポジトリを示すスクリーンショット](/assets/images/help/repository/secret-scanning-dry-run-custom-pattern-select-repo.png)
1. 新しいカスタム パターンをテストする準備ができたら、 **[ドライ ラン]** をクリックします。
{%- endif %}
