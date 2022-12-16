---
ms.openlocfilehash: 6d101895af1ae0e202ebfb49119c83a14682de09
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145091249"
---
{% ifversion fpt or ghec %} {% note %}

**Hinweis**: Die Ausführung von Workflows, die von {% data variables.product.prodname_dependabot %}-Pull Requests ausgelöst werden, erfolgt wie bei einem geforkten Repository und nutzt dementsprechend ein schreibgeschütztes `GITHUB_TOKEN`. Diese Workflowausführungen können nicht auf Geheimnisse zugreifen. Strategien zum Gewährleisten von Sicherheit für diese Workflows findest du unter [Sichern von GitHub Actions und Workflows: Verhindern von PWN-Anforderungen](https://securitylab.github.com/research/github-actions-preventing-pwn-requests).

{% endnote %} {% endif %}
