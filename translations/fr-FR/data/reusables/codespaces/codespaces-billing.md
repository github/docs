---
ms.openlocfilehash: 845c770a8a03c57a4c10a84d28fd4d3d78282042
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "147111121"
---
Les {% data variables.product.prodname_codespaces %} sont facturés en dollars US (USD) en fonction de leur utilisation du calcul et du stockage.

### Calcul de l’utilisation du calcul
L’utilisation de la capacité de calcul est définie comme étant le nombre total de minutes de fonctionnement opérationnel pendant lesquelles une instance {% data variables.product.prodname_github_codespaces %} est active. L’utilisation du calcul est calculée en additionnant le nombre réel de minutes utilisées par tous les codespaces. Ces totaux sont signalés quotidiennement au service de facturation, et facturés mensuellement.

La durée de bon fonctionnement est contrôlée par l’arrêt de votre codespace, qui peut être effectué manuellement ou automatiquement après une période d’inactivité spécifiée par un développeur. Pour plus d’informations, consultez « [Fermeture ou arrêt de codespace](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace) ».

### Calcul de l’utilisation du stockage
Pour la facturation de {% data variables.product.prodname_github_codespaces %}, ceci inclut tout le stockage utilisé par tous les codespaces dans votre compte. Cela inclut tous les fichiers utilisés par les codespaces, comme les dépôts clonés, les fichiers de configuration et les extensions. Ces totaux sont signalés quotidiennement au service de facturation, et facturés mensuellement. À la fin du mois, {% data variables.product.prodname_dotcom %} arrondit votre stockage au Mo le plus proche. 
