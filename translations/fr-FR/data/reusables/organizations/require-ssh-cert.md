---
ms.openlocfilehash: abb4b47406958c1933c5c2bdf7d7e2e2c1091907
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/28/2022
ms.locfileid: "148184047"
---
1. Pour exiger que les membres utilisent des certificats SSH, vous pouvez sélectionner **Exiger des certificats SSH**, puis cliquer sur **Enregistrer**.
    ![Case à cocher Exiger un certificat SSH et bout Enregistrer](/assets/images/help/organizations/require-ssh-cert.png)

   {% note %}

   **Remarque :** quand vous avez besoin de certificats SSH, cette exigence ne s’applique pas aux intégrations tierces autorisées ni aux fonctionnalités {% data variables.product.prodname_dotcom %} comme {% data variables.product.prodname_actions %}{% ifversion fpt or ghec %} et {% data variables.product.prodname_codespaces %}{% endif %} qui sont des environnements de confiance au sein de l’écosystème {% data variables.product.prodname_dotcom %}.

   {% endnote %}
