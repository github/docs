---
ms.openlocfilehash: 444e70adced8ef2f4fdc5f91b06a28bba89c898a
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879260"
---
{% warning %}

**Warnung:**

- Wenn du den Zugriff einer Person auf ein privates Repository entfernst, werden all ihre Forks in diesem privaten Repositorys gelöscht. Lokale Klone des privaten Repositorys werden beibehalten. Wenn der Zugriff eines Teams auf ein privates Repository widerrufen wird oder ein Team mit Zugriff auf ein privates Repository gelöscht wird und die Teammitglieder nicht über ein anderes Team auf das Repository zugreifen können, werden die privaten Forks des Repositorys gelöscht.{% ifversion ghes %}
- Wenn die [LDAP-Synchronisierung aktiviert ist](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync), verliert eine Person, die du aus einem Repository entfernst, ihren Zugriff, aber ihre Forks werden nicht gelöscht. Wenn die Person innerhalb von drei Monaten einem Team mit Zugriff auf das ursprüngliche Organisations-Repository hinzugefügt wird, wird ihr Zugriff auf die Forks bei der nächsten Synchronisierung automatisch wiederhergestellt.{% endif %}
- Du bist dafür verantwortlich, dass die Personen, denen du den Zugriff auf ein Repository entziehst, vertrauliche Informationen oder geistiges Eigentum von ihren Systemen löschen.

- Personen mit Administratorberechtigungen für ein privates{% ifversion ghes or ghae or ghec %} oder internes{% endif %} Repository können das Forken dieses Repositorys unterbinden, und Organisationsbesitzer können das Forken jedes privaten{% ifversion ghes or ghae or ghec %} oder internen{% endif %} Repositorys in einer Organisation unterbinden. Weitere Informationen findest du unter [Verwalten der Forkingrichtlinie für deine Organisation](/organizations/managing-organization-settings/managing-the-forking-policy-for-your-organization) und [Verwalten der Forkingrichtlinie für dein Repository](/github/administering-a-repository/managing-the-forking-policy-for-your-repository).

{% endwarning %}
