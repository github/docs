---
ms.openlocfilehash: 35dfd476fcffeaf23740ff0513b2675390f9a76f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145068117"
---
イメージのコンテナー レジストリでイメージをプルするための認証が必要な場合は、`jobs.<job_id>.container.credentials` を使って `username` と `password` の `map` を設定できます。 資格情報は、[`docker login`](https://docs.docker.com/engine/reference/commandline/login/) コマンドに指定するのと同じ値です。
