---
ms.openlocfilehash: 50db50aff42d977575a89a2e22287b1672081ee4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "147881393"
---
Las aprobaciones de confirmación obligatorias solo se aplican a las confirmaciones realizadas a través de la interfaz web. En el caso de las confirmaciones realizadas a través de la interfaz de la línea de comandos de Git, el autor de la confirmación debe aprobar la confirmación con la opción `--signoff`. Para obtener más información, consulta la [documentación de Git](https://git-scm.com/docs/git-commit).


Puedes determinar si un repositorio al que colaboras tiene habilitadas las aprobaciones de confirmación obligatorias comprobando el encabezado del formulario de confirmación en la parte inferior del archivo que estás editando. Una vez habilitada la aprobación de confirmación obligatoria, en el encabezado aparecerá "Sign off and commit changes" (Aprobar y confirmar cambios).

![Captura de pantalla del formulario de confirmación con la aprobación obligatoria habilitada](/assets/images/help/commits/commit-form-with-signoff-enabled.png)

Antes de aprobar una confirmación, debes asegurarte de que la confirmación cumple las reglas y las licencias que rigen el repositorio donde estás realizando la confirmación. El repositorio puede usar un acuerdo de aprobación, como el certificado de origen del desarrollador de Linux Foundation. Para obtener más información, consulta [Certificado de origen del desarrollador](https://developercertificate.org/).

La aprobación de confirmaciones difiere de la firmar de confirmaciones. Para obtener más información sobre la firma de una confirmación, consulta "[Acerca de la comprobación de firma de las confirmaciones](/authentication/managing-commit-signature-verification/about-commit-signature-verification)".