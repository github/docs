---
title: Habilitar o GitHub Packeges com AWS
intro: 'Configure {% data variables.product.prodname_registry %} com AWS como seu armazenamento externo.'
versions:
  ghes: '*'
type: tutorial
topics:
  - Administrator
  - Enterprise
  - Packages
  - Packages
shortTitle: Enable Packages with AWS
ms.openlocfilehash: 185373657cad88bc0a45e48eb5835abdf394f9ce
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145094908'
---
{% warning %}

**Avisos:**
- É fundamental que você configure todas as políticas de acesso restritivas necessárias para o seu bucket de armazenamento, porque {% data variables.product.company_short %} não aplica permissões específicas de objeto ou listas de controle de acesso adicionais (ACLs) à sua configuração do bucket de armazenamento. Por exemplo, se o seu bucket for público, os dados do bucket poderão ser acessados por meio da internet pública. Para obter mais informações, confira "[Como configurar permissões de acesso de objeto e bucket](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/set-permissions.html)" na documentação da AWS.
- Recomendamos usar um bucket dedicado para {% data variables.product.prodname_registry %}, separar do bucket que você usa para o armazenamento de {% data variables.product.prodname_actions %}.
- Certifique-se de configurar o bucket que você vai querer usar no futuro. Não recomendamos alterar seu armazenamento depois de começar a usar {% data variables.product.prodname_registry %}.

{% endwarning %}

## Pré-requisitos

Antes de poder habilitar e configurar {% data variables.product.prodname_registry %} em {% data variables.product.product_location_enterprise %}, você precisa preparar o bucket do seu armazenamento do AWS. Para preparar o bucket de armazenamento da AWS, recomendamos consultar a documentação oficial da AWS na [documentação da AWS](https://docs.aws.amazon.com/index.html).

Certifique-se de que o seu ID da sua chave e o segredo de acesso do AWS tenham as permissões a seguir:
  - `s3:PutObject`
  - `s3:GetObject`
  - `s3:ListBucketMultipartUploads`
  - `s3:ListMultipartUploadParts`
  - `s3:AbortMultipartUpload`
  - `s3:DeleteObject`
  - `s3:ListBucket`

## Habilitar {% data variables.product.prodname_registry %} com armazenamento externo do AWS

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %} {% data reusables.package_registry.enable-enterprise-github-packages %}

{% ifversion ghes %}
1. Em "Armazenamento de Pacotes", selecione **Amazon S3** e insira os detalhes do bucket de armazenamento:
    - **URL de Serviço da AWS:** A URL de serviço do bucket. Por exemplo, se o bucket S3 foi criado na `us-west-2 region`, esse valor deve ser `https://s3.us-west-2.amazonaws.com`.

      Para obter mais informações, confira "[Pontos de extremidade de serviço da AWS](https://docs.aws.amazon.com/general/latest/gr/rande.html)" na documentação da AWS.

    - **Bucket da AWS S3:** o nome do bucket S3 dedicado ao {% data variables.product.prodname_registry %}.
    - **Chave de Acesso da AWS S3** e **Chave Secreta da AWS S3**: a ID da chave de acesso e a chave secreta da AWS para acessar seu bucket.

      Para obter mais informações sobre como gerenciar chaves de acesso da AWS, confira a "[Documentação de gerenciamento de identidades e acesso da AWS](https://docs.aws.amazon.com/iam/index.html)".

    ![Caixas de entrada usadas para os detalhes do bucket da S3 AWS](/assets/images/help/package-registry/s3-aws-storage-bucket-details.png) {% endif %} {% data reusables.enterprise_management_console.save-settings %}

## Próximas etapas

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
