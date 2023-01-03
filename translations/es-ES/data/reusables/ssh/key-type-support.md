---
ms.openlocfilehash: efa96c86f8e6393265a4052e0ce6d650a21805b4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107345"
---
{% ifversion fpt or ghec %} {% note %}

**Nota:** En {% data variables.product.company_short %} se ha mejorado la seguridad mediante la eliminación de los tipos de clave antiguos y no seguros el 15 de marzo de 2022.

A partir de esa fecha, ya no se admiten las claves DSA (`ssh-dss`). No puedes agregar claves DSA nuevas a tu cuenta personal en {% data variables.location.product_location %}.

Las claves RSA (`ssh-rsa`) con `valid_after` antes del 2 de noviembre de 2021 pueden seguir usando cualquier algoritmo de firma. Las llaves RSA que se generaron después de esta fecha deberán utilizar un algoritmo de firma de tipo SHA-2. Algunos clientes más angituos podrían necesitar actualizarse para poder utilizar firmas de tipo SHA-2.

{% endnote %}

{% elsif ghes = 3.6 or ghes = 3.7 or ghes = 3.8 %}

{% note %}

**Nota**: De forma predeterminada, con {% data variables.product.product_name %} 3.6 y versiones posteriores, a partir de la fecha límite de medianoche UTC del 1 de agosto de 2022, se producirá un error en las conexiones SSH que cumplan **las dos** condiciones siguientes.

<br/>

{% data reusables.ssh.rsa-sha-1-connection-failure-criteria %}

{% data variables.product.product_name %} 3.6 y versiones posteriores tampoco admite conexiones SSH que usan cifrados DSA, HMAC-SHA-1 o CBC. Las claves SSH RSA cargadas antes de la fecha límite pueden seguir autenticándose mediante la función hash SHA-1, siempre que la clave siga siendo válida. Para obtener más información sobre cómo encontrar la versión de {% data variables.product.product_name %} que usas, consulta "[Acerca de las versiones de {% data variables.product.prodname_docs %}](/get-started/learning-about-github/about-versions-of-github-docs#github-enterprise-server)".

El administrador del sitio puede ajustar la fecha límite de las conexiones que utilizan RSA-SHA-1 y puede bloquear todas las conexiones que utilizan RSA-SHA-1. Para obtener más información, ponte en contacto con el administrador del sitio o consulta "[Configuración de conexiones SSH a la instancia](/admin/configuration/configuring-your-enterprise/configuring-ssh-connections-to-your-instance)".

{% endnote %}

{% endif %}
