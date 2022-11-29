---
ms.openlocfilehash: 110de05126a0656467f63f7c377b257adf401c26
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147064961"
---
Lorsque vous autorisez un secret à être poussé, une alerte est créée sous l’onglet « Sécurité ». {% data variables.product.prodname_dotcom %} ferme l’alerte et n’envoie pas de notification si vous spécifiez que le secret est un faux positif ou qu’il est utilisé uniquement dans les tests. Si vous spécifiez que le secret est bien réel et que vous le corrigerez plus tard, {% data variables.product.prodname_dotcom %} garde l’alerte de sécurité ouverte et envoie des notifications à l’auteur du commit, ainsi qu’aux administrateurs du dépôt. Pour plus d’informations, consultez « [Gestion des alertes à partir de l’analyse des secrets](/code-security/secret-scanning/managing-alerts-from-secret-scanning) ».
