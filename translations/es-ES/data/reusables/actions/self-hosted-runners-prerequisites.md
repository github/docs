---
ms.openlocfilehash: 902c07f73a0d523e80d620ad6eef94e25f678add
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: "145093084"
---
{%- ifversion ghes %}
- Las {% data variables.product.prodname_actions %} se deben habilitar para {% data variables.product.product_name %}. Un administrador de sitio puede habilitar y configurar {% data variables.product.prodname_actions %} para la instancia. Para obtener más información, vea "[Introducción a {% data variables.product.prodname_actions %} para {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)".
{%- endif %}

- Debe tener acceso a la máquina que usará como ejecutor autohospedado en su entorno.

- {% data reusables.actions.self-hosted-runner-ports-protocols %} Para obtener más información, vea "[Acerca de los ejecutores autohospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#communication-between-self-hosted-runners-and-github-ae)".
