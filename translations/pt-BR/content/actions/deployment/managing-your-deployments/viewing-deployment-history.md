---
title: Exibir o histórico de implantações
intro: Veja as implantações atuais e anteriores para o seu repositório.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: View deployment history
redirect_from:
  - /developers/overview/viewing-deployment-history
  - /actions/deployment/viewing-deployment-history
ms.openlocfilehash: 2941d8de6af3b7505a3c05a6b15436d32becea9b
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145085293'
---
Você pode fornecer implantações por meio do {% data variables.product.prodname_actions %} e de ambientes ou com a API REST e aplicativos de terceiros. {% ifversion fpt or ghae ghes > 3.0 or ghec %}Para obter mais informações sobre como usar ambientes para implantação com o {% data variables.product.prodname_actions %}, confira "[Como usar ambientes para implantação](/actions/deployment/using-environments-for-deployment)". {% endif %}Para obter mais informações sobre as implantações com a API REST, confira "[Repositórios](/rest/reference/repos#deployments)".

Para ver as implantações atuais e anteriores, clique em **Ambientes** na home page do repositório.
{% ifversion ghae %} ![Ambientes](/assets/images/enterprise/2.22/environments-sidebar.png){% else %} ![Ambientes](/assets/images/environments-sidebar.png){% endif %}

A página de implantações exibe a última implantação ativa de cada ambiente do seu repositório. Se a implantação incluir uma URL de ambiente, será mostrado um botão **Exibir implantação** vinculado à URL ao lado da implantação.

O registro da atividade mostra o histórico de implantação para seus ambientes. Por padrão, apenas a implantação mais recente para um ambiente tem o status `Active`. Todas as implantações anteriormente ativas têm o status `Inactive`. Para obter mais informações sobre a inativação automática de implantações, confira "[Implantações inativas](/rest/reference/deployments#inactive-deployments)".

Você também pode usar a API REST para obter informações sobre implantações. Para obter mais informações, confira "[Repositórios](/rest/reference/repos#deployments)".
