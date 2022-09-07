---
ms.openlocfilehash: 35dfd476fcffeaf23740ff0513b2675390f9a76f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145068117"
---
イメージのコンテナー レジストリでイメージをプルするための認証が必要な場合は、`jobs.<job_id>.container.credentials` を使って `username` と `password` の `map` を設定できます。 資格情報は、[`docker login`](https://docs.docker.com/engine/reference/commandline/login/) コマンドに指定するのと同じ値です。
