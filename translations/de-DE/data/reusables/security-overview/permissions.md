---
ms.openlocfilehash: f7065b89a94ee3b76a4956a0cf06ea53c03187e2
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/27/2022
ms.locfileid: "148114007"
---
{% ifversion not fpt %}Organisationsbesitzer*innen und Sicherheitsmanager*innen können auf die Sicherheitsübersicht auf Organisationsebene zugreifen{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %} und Warnungen für mehrere Organisation mithilfe der Sicherheitsübersicht auf Unternehmensebene anzeigen. Unternehmensbesitzer*innen können nur Repositorys und Warnungen für Organisationen anzeigen, denen sie als Organisationsbesitzer*in oder Sicherheitsmanager*in hinzugefügt wurden.{% endif %} {% ifversion ghec or ghes > 3.6 or ghae > 3.6 %}Organisationsmitglieder können auf die Sicherheitsübersicht auf Organisationsebene zugreifen, um Ergebnisse für Repositorys anzuzeigen, in denen sie über Administratorrechte verfügen oder Zugriff auf Sicherheitswarnungen erhalten haben.{% else %}Die Mitglieder eines Teams können die Sicherheitsübersicht für Repositorys anzeigen, für die das Team über Administratorberechtigungen verfügt.{% endif %}{% endif %}
