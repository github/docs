---
ms.openlocfilehash: 744983c086ce7f67bb25cd9508e080ceb12ea517
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145108185"
---
Dans le cas où un client met à niveau son plan et que le paiement échoue, GitHub rétablit son abonnement {% data variables.product.prodname_marketplace %} dans son état précédent. GitHub envoie également un e-mail au client pour l’informer de l’échec et lui permettre de retenter son achat. Vous recevrez un webhook avec l’action `changed` vous demandant de revenir au plan précédent.
