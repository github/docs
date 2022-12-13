---
ms.openlocfilehash: f7065b89a94ee3b76a4956a0cf06ea53c03187e2
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/27/2022
ms.locfileid: "148114071"
---
{% ifversion not fpt %}Los propietarios de la organización y los administradores de seguridad pueden acceder a la información general de seguridad a nivel de organización{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %} ver alertas en varias organizaciones a través de la descripción general de seguridad a nivel empresarial. Los propietarios de empresas solo pueden ver repositorios y alertas para las organizaciones en las que se agregan como propietarios de la organización o administradores de seguridad{% endif %}. {% ifversion ghec or ghes > 3.6 or ghae > 3.6 %}Los miembros de la organización pueden acceder a la información general de seguridad a nivel de organización para ver los resultados de los repositorios en los que tienen privilegios de administrador o se les ha concedido acceso a las alertas de seguridad.{% else %}Los miembros de un equipo pueden ver la información general de seguridad de los repositorios para los que el equipo tiene privilegios de administrador.{% endif %}{% endif %}
