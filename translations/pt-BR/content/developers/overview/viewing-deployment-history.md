---
title: Visualizar histórico de implantação
intro: Veja as implantações atuais e anteriores para o seu repositório.
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

{% data reusables.actions.environments-beta %}

Você pode entregar implantações através de {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}{% data variables.product.prodname_actions %} e ambientes ou com {% endif %}API REST e aplicativos de terceiros. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}Para mais informações sobre {% data variables.product.prodname_actions %}, consulte "[{% data variables.product.prodname_actions %}](/actions) {% endif %}Para obter mais informações sobre implantações com a API REST, consulte "[Repositórios](/rest/reference/repos#deployments)".

Para visualizar implantações atuais e anteriores, clique em **Ambientes** na página inicial do repositório. ![Ambientes](/assets/images/environments-sidebar.png)

A página de implantações exibe a última implantação ativa de cada ambiente do seu repositório. Se a implantação inclui uma URL de ambiente, será exibido um botão "Exibir implantação" que vincula à URL ao lado da implantação.

O registro da atividade mostra o histórico de implantação para seus ambientes. Por padrão, apenas a implantação mais recente para um ambiente tem um status `Ativo`; todas as implantações ativas anteriormente têm um status `Inativo`. Para obter mais informações sobre inativação automática de implantações, consulte "[Implantações inativas](/rest/reference/repos#inactive-deployments)".

Você também pode usar a API REST para obter informações sobre implantações. Para obter mais informações, consulte "[Repositórios](/rest/reference/repos#deployments)".
