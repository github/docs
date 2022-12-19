---
ms.openlocfilehash: 286ed6049cd19b1d7f4c5c7dfb4d737dd0f68475
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089491"
---
Verwende `jobs.<job_id>.container.volumes` zum Festlegen eines `array` von Volumes, die der Container verwenden soll. Mithilfe von Volumes kannst Du Daten zwischen Diensten oder anderen Schritten in einem Job austauschen. Du kannst benannte Docker-Volumes, anonyme Docker-Volumes oder Bind-Mounts auf dem Host angegeben.

Um ein Volume festzulegen, gibst du den Quell- und Zielpfad an:

`<source>:<destinationPath>`.

`<source>` ist ein Volumename oder ein absoluter Pfad auf dem Hostcomputer, und `<destinationPath>` ist ein absoluter Pfad im Container.

#### Beispiel: Einbinden von Volumes in einem Container

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```
