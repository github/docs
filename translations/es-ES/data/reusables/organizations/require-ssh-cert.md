---
ms.openlocfilehash: abb4b47406958c1933c5c2bdf7d7e2e2c1091907
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/28/2022
ms.locfileid: "148184066"
---
1. Opcionalmente, para exigir que los miembros usen certificados SSH, seleccione **Exigir certificados SSH** y, después, haga clic en **Guardar**.
    ![Casilla para exigir el certificado SSH y botón de guardar](/assets/images/help/organizations/require-ssh-cert.png)

   {% note %}

   **Nota:** Cuando se requieren certificados SSH, el requisito no se aplica a integraciones de terceros autorizadas o a características de {% data variables.product.prodname_dotcom %} como {% data variables.product.prodname_actions %}{% ifversion fpt or ghec %} y {% data variables.product.prodname_codespaces %}{% endif %}, que son entornos de confianza dentro del ecosistema {% data variables.product.prodname_dotcom %}.

   {% endnote %}
