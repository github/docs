---
ms.openlocfilehash: d7d401ed18395e4dd30f45df07e850338fa43da9
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145096595"
---
- Os clientes que cancelarem um plano pago comprado em {% data variables.product.prodname_marketplace %} devem ser automaticamente rebaixados para o plano gratuito do aplicativo, se houver. {% data reusables.marketplace.cancellation-clarification %} é altamente recomendável permitir que os clientes reativem seu plano anterior.
- Os clientes conseguirão fazer o upgrade por meio da interface do usuário do aplicativo se você fornecer uma [URL de upgrade](/marketplace/integrating-with-the-github-marketplace-api/upgrading-and-downgrading-plans/#about-upgrade-urls) neste formato: `https://www.github.com/marketplace/<LISTING_NAME>/upgrade/<LISTING_PLAN_NUMBER>/<CUSTOMER_ACCOUNT_ID>`
- Os clientes devem ser capazes de modificar quais usuários têm acesso ao seu aplicativo a partir do site do seu aplicativo, caso tenham comprado assentos (por plano de preços unitários) ou que o plano ofereça colaboradores ilimitados.
- Os clientes devem poder ver as seguintes alterações em sua conta imediatamente na cobrança, perfil ou seção de configurações de conta do site:
  - Plano e preço atuais.
  - Novos planos comprados.
  - Upgrades, downgrades, cancelamentos e o número de dias restantes em uma avaliação gratuita.
  - Alterações nos ciclos de faturamento (mensal ou anual).
  - Uso e recursos restantes para planos fixos e por unidade. Por exemplo, se o plano de preços é por unidade, o site do aplicativo deve mostrar unidades usadas e unidades disponíveis.
