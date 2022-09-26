---
ms.openlocfilehash: 7ab0c705855f1bd271c17eacc9a2533184d1b5f1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145117809"
---
{% ifversion ghae %} Si las directivas de tu empresa permiten la bifurcación de repositorios privados e internos, puedes bifurcar un repositorio a tu cuenta personal o a una organización donde tengas permisos de creación de repositorios. Para más información, vea "[Roles en una organización](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

{% elsif ghes or ghec %} Puedes bifurcar un repositorio privado o interno en tu cuenta personal o en una organización en {% data variables.product.product_location %} donde tengas permisos de creación de repositorios, si la configuración del repositorio y las directivas empresariales permiten la bifurcación.

{% elsif fpt %} Si tienes acceso a un repositorio privado y el propietario permite las bifurcaciones, puedes bifurcar el repositorio a tu cuenta personal o a cualquier organización de {% data variables.product.prodname_team %} en la que tengas permisos de creación de repositorios. No puedes bifurcar un repositorio privado a una organización que use {% data variables.product.prodname_free_team %}. Para más información, vea "[Productos de GitHub](/articles/githubs-products)".
{% endif %}
