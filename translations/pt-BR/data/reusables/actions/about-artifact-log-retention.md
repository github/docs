---
ms.openlocfilehash: 8a86f408128b56cc31c0e8876e962994edf7cdc4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145282830"
---
Por padrão, os artefatos e arquivos de registro gerados pelos fluxos de trabalho são mantidos por 90 dias antes de ser excluídos automaticamente.

{%- ifversion fpt or ghec %} É possível ajustar o período de retenção dependendo do tipo de repositório:

- Para repositórios públicos: você pode alterar este período de retenção para qualquer lugar entre 1 dia e 90 dias.
- Para repositórios privados{% ifversion ghec %} e internos{% endif %}: você pode alterar esse período de retenção para um valor entre 1 dia ou 400 dias.
{%- else %} Você pode alterar esse período de retenção para um valor entre 1 dia e 400 dias.
{%- endif %}

Ao personalizar o período de retenção, ele só se aplica a novos artefatos e arquivos de registro e não se aplica retroativamente aos objetos existentes. Para repositórios e organizações gerenciadas, o período máximo de retenção não pode exceder o limite definido pela organização gerenciadora ou pela empresa.
