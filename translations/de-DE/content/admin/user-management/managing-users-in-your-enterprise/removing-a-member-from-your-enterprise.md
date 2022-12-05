---
title: Entfernen eines Mitglieds aus deinem Unternehmen
intro: Du kannst ein Mitglied aus allen Organisationen deines Unternehmens entfernen.
permissions: Enterprise owners can remove an enterprise member from the enterprise.
versions:
  feature: remove-enterprise-members
type: how_to
topics:
  - Enterprise
shortTitle: Remove member
ms.openlocfilehash: c3090cd49c2c2e8089093dc01ddeb7b69ae39416
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717989'
---
## Informationen zum Entfernen von Unternehmensmitgliedern

Wenn du ein Unternehmensmitglied aus deinem Unternehmen entfernst, wird das Mitglied aus allen Organisationen entfernt, die zu deinem Unternehmen gehören.

Wenn das Unternehmensmitglied, das du entfernst, der letzte Besitzer einer Organisation ist, die zu deinem Unternehmen gehört, wirst du Besitzer dieser Organisation.

Wenn dein Unternehmen oder eine der Organisationen, die zu deinem Unternehmens gehören, einen Identitätsanbieter zum Verwalten der Organisationsmitgliedschaft verwendet, kann es vorkommen, dass das Mitglied durch den Identitätsanbieter wieder zur Organisation hinzugefügt wird. Stelle sicher, dass du ggf. erforderliche Änderungen auch in deinem Identitätsanbieter vornimmst.

## Entfernen eines Mitglieds aus deinem Unternehmen

{% note %}

**Hinweis:** Wenn ein Unternehmensmitglied nur {% data variables.product.prodname_ghe_server %} und nicht {% data variables.product.prodname_ghe_cloud %} verwendet, kann das Unternehmensmitglied nicht auf diese Weise entfernt werden.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.people-tab %}
1. Wähle rechts neben der Person, die du entfernen möchtest, das Dropdownmenü {% octicon "gear" aria-label="The gear icon" %} aus, und klicke auf **Aus Unternehmen entfernen**.

   ![Screenshot: Option „Aus Unternehmen entfernen“ für ein Unternehmensmitglied](/assets/images/help/business-accounts/remove-member.png)
