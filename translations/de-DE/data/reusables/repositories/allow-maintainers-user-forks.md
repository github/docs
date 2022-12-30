---
ms.openlocfilehash: 3c71b4f4d9bfae794b8325c01d85db55f91c2fa8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: "147882867"
---
1. Wenn du bei benutzereigenen Forks allen Personen mit Pushzugriff auf das Upstreamrepository erlauben möchtest, Änderungen an deinem Pull Request vorzunehmen, wähle **Bearbeitungen von Maintainern zulassen** aus.

    {% warning %}

    **Warnung:** Wenn dein Fork {% data variables.product.prodname_actions %}-Workflows enthält, lautet die Option **Bearbeitungen und Zugriff auf Geheimnisse durch Maintainer zulassen**. Wenn du die Bearbeitung des Branches eines Forks zulässt, der {% data variables.product.prodname_actions %}-Workflows enthält, kann ein Maintainer auch die Workflows des geforkten Repositorys bearbeiten, wodurch möglicherweise Werte von Geheimnissen preisgegeben werden und Zugriff auf andere Branches gewährt wird.

    {% endwarning %}
