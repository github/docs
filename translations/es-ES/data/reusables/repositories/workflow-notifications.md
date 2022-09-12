---
ms.openlocfilehash: 307a695e8a973c7b37a29ebbeb4606a8ed43d38d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145117810"
---
Si habilitas las notificaciones web o por correo electrónico para {% data variables.product.prodname_actions %}, recibirás una notificación cuando alguna ejecución de flujo de trabajo que hayas activado se complete. La notificación incluirá el estado de la ejecución de flujo de trabajo (que incluye ejecuciones exitosas, fallidas, neutrales y canceladas). También puedes elegir recibir una notificación solo cuando falle una ejecución de flujo de trabajo. Para más información sobre cómo habilitar o deshabilitar las notificaciones, vea "[Acerca de las notificaciones](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)".

Las notificaciones par alos flujos de trabajo programados se envían al usuario que creó el flujo de trabajo inicialmente. Si otro usuario actualiza la sintaxis de cron en el archivo de flujo de trabajo, las notificaciones posteriores se enviarán a este usuario en vez de al otro.{% ifversion fpt or ghes or ghec %} Si se deshabilita un flujo de trabajo y luego se vuelve a habilitar, las notificaciones se enviarán al usuario que haya vuelto a habilitar el flujo de trabajo en vez de al que ha modificado la sintaxis de cron por última vez.{% endif %}

También puede ver el estado de las ejecuciones de flujo de trabajo en la pestaña Acciones de un repositorio. Para más información, vea "[Administración de una ejecución de flujo de trabajo](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run)".
