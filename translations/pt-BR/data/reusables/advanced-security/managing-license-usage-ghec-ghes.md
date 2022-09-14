---
ms.openlocfilehash: c47a4efc23963dcfa0be69207387cd2d02704aef
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: "147875614"
---
Ao habilitar ou desabilitar {% data variables.product.prodname_advanced_security %} para repositórios, {% data variables.product.prodname_dotcom %} mostra uma visão geral das alterações no uso da sua licença. Se você desabilitar o acesso a {% data variables.product.prodname_GH_advanced_security %}, todas as estações usadas por committers "únicos" serão liberadas.

Se você exceder limite de licença, {% data variables.product.prodname_GH_advanced_security %} irá continuar a funcionar em todos os repositórios onde já está habilitado. No entanto, em organizações onde {% data variables.product.prodname_GH_advanced_security %} está habilitado para novos repositórios, os repositórios serão criados com o recurso desabilitado. Além disso, a opção para habilitar o {% data variables.product.prodname_GH_advanced_security %} nos repositórios existentes não estará disponível.{% ifversion fpt or ghec %} Se você alterar a visibilidade de um repositório público para privado, o {% data variables.product.prodname_GH_advanced_security %} será desabilitado nesse repositório.{% endif %}

Assim que você liberar algumas estações, desabilitando {% data variables.product.prodname_GH_advanced_security %} para alguns repositórios ou aumentando o tamanho da sua licença, as opções para habilitar {% data variables.product.prodname_GH_advanced_security %} funcionarão de novo normalmente.
