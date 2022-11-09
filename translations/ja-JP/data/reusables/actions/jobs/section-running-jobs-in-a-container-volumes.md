---
ms.openlocfilehash: 286ed6049cd19b1d7f4c5c7dfb4d737dd0f68475
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089488"
---
`jobs.<job_id>.container.volumes` を使用して、コンテナーで使用するボリュームの `array` を設定します。 volumes (ボリューム) を使用すると、サービス間で、または1つのジョブのステップ間でデータを共有できます。 指定できるのは、名前付きDockerボリューム、匿名Dockerボリューム、またはホスト上のバインドマウントです。

ボリュームを指定するには、ソースパスとターゲットパスを指定してください。

`<source>:<destinationPath>`.

`<source>` は、ホスト マシン上のボリューム名または絶対パスであり、`<destinationPath>` は、コンテナー内の絶対パスです。

#### 例: コンテナーにボリュームをマウントする

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```
