---
title: Habilitar o GitHub Actions com armazenamento do Amazon S3
intro: 'Você pode habilitar {% data variables.product.prodname_actions %} em {% data variables.product.prodname_ghe_server %} e usar o armazenamento Amazon S3 para armazenar artefatos gerados por execuções de fluxo de trabalho.'
permissions: 'Os administradores de site podem ativar o {% data variables.product.prodname_actions %} e definir as configurações empresariais.'
versions:
  enterprise-server: '>=3.0'
---

### Pré-requisitos

{% data reusables.actions.enterprise-s3-support-warning %}

Antes de habilitar {% data variables.product.prodname_actions %}, certifique-se de que você realizou os seguintes passos:

* Crie seu bucket do Amazon S3 para armazenar artefatos gerados pelas execuções do fluxo de trabalho. {% indented_data_reference site.data.reusables.actions.enterprise-s3-permission spaces=2 %}

{% data reusables.actions.enterprise-common-prereqs %}

### Habilitar {% data variables.product.prodname_actions %} com armazenamento do Amazon S3

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.actions %}
{% data reusables.actions.enterprise-enable-checkbox %}
1. Em "Artefato & Registro de Armazenamento", selecione **Amazon S3**, e insira as informações do seu grupo de armazenamento:

   * **URL de serviço do AWS**: A URL do serviço para seu bucket. Por exemplo, se o seu bucket S3 foi criado na região `us-west-2`, esse valor deverá ser `https://s3.us-west-2.amazonaws.com`.

     Para obter mais informações, consulte "[pontos de extremidade do serviço AWS](https://docs.aws.amazon.com/general/latest/gr/rande.html)" na documentação do AWS.
   * **Balde S3 AWS**: O nome do seu bucket S3.
   * **Chave de acesso do AWS S3** e **Chave de segredo do AWS S3**: A chave de acesso AWS e chave do segredo para o seu bucket. Para mais informações sobre como gerenciar as chaves de acesso do AWS, consulte a "[Documentação de identidade do AWS e gerenciamento de acesso](https://docs.aws.amazon.com/iam/index.html)".

   ![Botão de opção para selecionar o armazenamento do Amazon S3 e campos para configuração S3](/assets/images/enterprise/management-console/actions-aws-s3-storage.png)
{% data reusables.enterprise_management_console.save-settings %}

{% data reusables.actions.enterprise-postinstall-nextsteps %}
