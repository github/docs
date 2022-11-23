---
ms.openlocfilehash: dcca3d0170e92663336865f43ddc4e7ac5204702
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147060314"
---
Das `GITHUB_TOKEN`-Geheimnis wird jedes Mal auf ein Zugriffstoken für das Repository festgelegt, wenn ein Auftrag in einem Workflow beginnt. Die Berechtigungen für dieses Zugriffstoken müssen in der Workflowdatei festgelegt werden, um Lesezugriff auf den `contents`-Bereich und Schreibzugriff auf den `packages`-Bereich zu gewähren. Weitere Informationen findest du unter [Authenticating with the GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token) („Authentifizieren mit dem GITHUB_TOKEN“).
