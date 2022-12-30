---
ms.openlocfilehash: 9007a7541d3ee57656a975af1bf430673c796d09
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: "145107325"
---
Si vous utilisez un domaine apex comme domaine personnalisé, nous vous recommandons également de configurer un sous-domaine `www`. Si vous configurez les enregistrements appropriés pour chaque type de domaine à travers votre fournisseur DNS, {% data variables.product.prodname_pages %} crée automatiquement les redirections entre les domaines. Par exemple, si vous configurez `www.example.com` comme domaine personnalisé pour votre site et que vous avez des enregistrements DNS {% data variables.product.prodname_pages %} configurés pour les domaines `www` et apex, `example.com` redirige vers `www.example.com`. Notez que les redirections automatiques s’appliquent uniquement au sous-domaine `www`. Les redirections automatiques ne s’appliquent à aucun autre sous-domaine, par exemple, `blog`.
