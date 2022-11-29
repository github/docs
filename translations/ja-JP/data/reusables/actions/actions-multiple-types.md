---
ms.openlocfilehash: 4c39c079fb88a8a1b86ed9359ebe55be268389bb
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145114749"
---
イベントにアクティビティの種類やフィルターを指定し、ワークフローが複数のイベントでトリガーされる場合、各イベントを個別に構成する必要があります。 構成しないイベントも含め、すべてのイベントにはコロン (`:`) を追加する必要があります。

たとえば、以下の `on` の値を持つワークフローは、次のような場合に実行されます。

- ラベルが作成されたとき
- リポジトリ内の `main` ブランチにプッシュされたとき
- {% data variables.product.prodname_pages %} 対応のブランチにプッシュされたとき

```yaml
on:
  label:
    types:
      - created
  push:
    branches:
      - main
  page_build:
```
