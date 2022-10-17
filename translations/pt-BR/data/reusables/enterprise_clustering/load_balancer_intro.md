---
ms.openlocfilehash: b9aa2cbac3e32319aac7d2b7ef53422f53125643
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: "147875555"
---
Um design de balanceador de carga usa um dispositivo de rede para direcionar o Git e o tráfego HTTP para appliances individuais {% data variables.product.prodname_ghe_server %}. Você pode usar um balanceador de carga para restringir o tráfego direto para o appliance para fins de segurança, ou redirecionar o tráfego se necessário sem alterações no registro de DNS. Recomendamos fortemente usar um balanceador de carga baseado em TCP que suporte o protocolo PROXY.
