---
ms.openlocfilehash: ad592a65f3aca30933dfd634f93abc0810015bf3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145069035"
---
# 変数

変数は、再利用可能なテキストの短い文字列です。

このディレクトリ内の YAML ファイルには、それぞれ複数の変数が含まれています。

各 YAML ファイル内の *パス*、 *ファイル名*、 *キー* によって、データ オブジェクト内のパスが決まります。

たとえば、`data/variables/foo/bar.yml` というファイルがあるとします。

```yaml
# multiple short strings in one file
meaning_of_life: 42

# and they can be nested if needed
nested:
  values:
    too: Yes!
```

その値は、次のようにアクセスできます。

```
{% data foo.bar.meaning_of_life %}

{% data foo.bar.nested.values.too %}
```
