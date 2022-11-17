---
ms.openlocfilehash: 286ed6049cd19b1d7f4c5c7dfb4d737dd0f68475
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145086316"
---
Utilisez `jobs.<job_id>.container.volumes` pour définir un `array` de volumes à utiliser par le conteneur. Vous pouvez utiliser des volumes pour partager des données entre des services ou d’autres étapes d’un travail. Vous pouvez spécifier des volumes Docker nommés, des volumes Docker anonymes ou des montages de liaisons sur l’hôte.

Pour spécifier un volume, vous spécifiez le chemin source et le chemin de destination :

`<source>:<destinationPath>`.

La valeur `<source>` est un nom de volume ou un chemin absolu sur la machine hôte et `<destinationPath>` est un chemin absolu dans le conteneur.

#### Exemple : Montage de volumes dans un conteneur

```yaml
volumes:
  - my_docker_volume:/volume_mount
  - /data/my_data
  - /source/directory:/destination/directory
```
