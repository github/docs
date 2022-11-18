---
ms.openlocfilehash: 902c07f73a0d523e80d620ad6eef94e25f678add
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145087258"
---
{%- ifversion ghes %}
- {% data variables.product.prodname_actions %} doit être activé pour {% data variables.product.product_name %}. Un administrateur de site peut activer et configurer {% data variables.product.prodname_actions %} pour votre instance. Pour plus d’informations, consultez « [Bien démarrer avec {% data variables.product.prodname_actions %} pour {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server) ».
{%- endif %}

- Vous devez avoir accès à la machine que vous allez utiliser en tant qu’exécuteur auto-hébergé dans votre environnement.

- {% data reusables.actions.self-hosted-runner-ports-protocols %} Pour plus d’informations, consultez « [À propos des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/about-self-hosted-runners#communication-between-self-hosted-runners-and-github-ae) ».
