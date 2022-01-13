---
title: Visualizar histórico de implantação
intro: Veja as implantações atuais e anteriores para o seu repositório.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Ver histórico de implantação
redirect_from:
  - /developers/overview/viewing-deployment-history
  - /actions/deployment/viewing-deployment-history
---


Você pode realizar implantações por meio de de {% ifversion fpt or ghae or ghes > 3.0 or ghec %}{% data variables.product.prodname_actions %} e ambientes ou com {% endif %}a API REST e aplicativos de terceiros. {% ifversion fpt or ghae ghes > 3.0 or ghec %}Para obter mais informações sobre o uso de ambientes para implantar com {% data variables.product.prodname_actions %}, consulte "[Usando ambientes para implantação](/actions/deployment/using-environments-for-deployment)". {% endif %}Para obter mais informações sobre implantações com a API REST, consulte "[Repositórios](/rest/reference/repos#deployments)".

Para visualizar implantações atuais e anteriores, clique em **Ambientes** na página inicial do repositório.
{% ifversion ghae %}
![Ambientes](/assets/images/enterprise/2.22/environments-sidebar.png){% else %}
![Environments](/assets/images/environments-sidebar.png){% endif %}

A página de implantações exibe a última implantação ativa de cada ambiente do seu repositório. Se a implantação incluir uma URL de ambiente, um botão **Exibir implantação** que vincula à URL será exibido ao lado da implantação.

O registro da atividade mostra o histórico de implantação para seus ambientes. Por padrão, apenas a implantação mais recente para um ambiente tem um status `Ativo`; todas as implantações ativas anteriormente têm um status `Inativo`. Para obter mais informações sobre inativação automática de implantações, consulte "[Implantações inativas](/rest/reference/deployments#inactive-deployments)".

Você também pode usar a API REST para obter informações sobre implantações. Para obter mais informações, consulte "[Repositórios](/rest/reference/repos#deployments)".
