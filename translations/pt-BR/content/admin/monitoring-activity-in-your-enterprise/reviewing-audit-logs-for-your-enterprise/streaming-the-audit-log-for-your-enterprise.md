---
title: Como transmitir o log de auditoria para sua empresa
intro: 'Você pode transmitir dados de auditoria e eventos do Git de {% data variables.product.prodname_dotcom %} para um sistema externo de gerenciamento de dados.'
miniTocMaxHeadingLevel: 3
versions:
  feature: audit-log-streaming
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
  - Organizations
shortTitle: Stream audit logs
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
  - /admin/user-management/managing-organizations-in-your-enterprise/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
permissions: Enterprise owners can configure audit log streaming.
ms.openlocfilehash: bc6b452cae84df8d42e1287d7208ff7d2ca9670b
ms.sourcegitcommit: 242c4c1f72a2d436aeab985c7d8dedd581f43bb9
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 08/15/2022
ms.locfileid: '147573437'
---
{% ifversion ghes %} {% note %}

**Observação:** o straming de log de auditoria está em versão beta no momento para {% data variables.product.product_name %} e está sujeito a alterações.

{% endnote %} {% endif %}

## <a name="about-audit-log-streaming"></a>Sobre a transmissão do log de auditoria

Para ajudar a proteger sua propriedade intelectual e manter a conformidade para sua organização, você pode usar o streaming para manter cópias dos dados do log de auditoria e monitore: {% data reusables.audit_log.audited-data-list %}

Os benefícios do streaming de dados de auditoria incluem:

* **Exploração de dados**. Você pode examinar eventos transmitidos usando sua ferramenta preferida para consultar grandes quantidades de dados. O streaming contém eventos de auditoria e do Git em toda a conta corporativa.{% ifversion pause-audit-log-stream %}
* **Continuidade dos dados**. Você pode pausar a transmissão por até sete dias sem perder nenhum dado da auditoria.{% endif %}
* **Retenção de dados**. Você pode manter os logs de auditoria e os dados de eventos do Git exportados o tempo necessário.

Os proprietários empresariais podem configurar{% ifversion pause-audit-log-stream %}, pausar{% endif %} ou excluir um fluxo a qualquer momento. O streaming exporta os dados de auditoria e de eventos do Git para todas as organizações da sua empresa.

## <a name="setting-up-audit-log-streaming"></a>Configurando a transmissão do log de auditoria

Você configurou o fluxo do log de auditoria em {% data variables.product.product_name %} seguindo as instruções do seu provedor.

- [Amazon S3](#setting-up-streaming-to-amazon-s3)
- [Armazenamento de Blobs do Azure](#setting-up-streaming-to-azure-blob-storage)
- [Hubs de eventos do Azure](#setting-up-streaming-to-azure-event-hubs)
- [Google Cloud Storage](#setting-up-streaming-to-google-cloud-storage)
- [Splunk](#setting-up-streaming-to-splunk)

### <a name="setting-up-streaming-to-amazon-s3"></a>Configurando a transmissão para o Amazon S3

{% ifversion streaming-oidc-s3 %} Você pode configurar o streaming para o S3 com chaves de acesso ou, para evitar o armazenamento de segredos de longa duração no {% data variables.product.product_name %}, com o OIDC (OpenID Connect).

- [Como configurar o streaming para o S3 com chaves de acesso](#setting-up-streaming-to-s3-with-access-keys)
- [Como configurar o streaming para o S3 com o OpenID Connect](#setting-up-streaming-to-s3-with-openid-connect)
- [Desabilitação do streaming para S3 com o OpenID Connect](#disabling-streaming-to-s3-with-openid-connect)

#### <a name="setting-up-streaming-to-s3-with-access-keys"></a>Como configurar o streaming para o S3 com chaves de acesso
{% endif %}

Para transmitir os logs de auditoria para o ponto de extremidade do Amazon S3, você deve ter um bucket e chaves de acesso. Para obter mais informações, confira [Como criar, configurar e trabalhar com buckets do Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) na documentação da AWS. Certifique-se de bloquear o acesso público ao bucket para proteger as suas informações de log de auditoria. 

Para configurar a tarnsmissão do de log de auditoria de {% data variables.product.prodname_dotcom %} você vai precisar:
* O nome do seu bucket do Amazon S3
* Seu ID de acesso ao AWS
* Sua chave de segredo para o AWS

Para obter informações sobre como criar ou acessar a ID da chave de acesso e a chave secreta, confira [Noções básicas e obtenção das suas credenciais da AWS](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html) na documentação da AWS.

{% data reusables.enterprise.navigate-to-log-streaming-tab %} {% data reusables.audit_log.streaming-choose-s3 %}{% ifversion streaming-oidc-s3 %}
1. Em "Autenticação", clique em **Chaves de acesso**.

   ![Captura de tela das opções de autenticação de streaming para o Amazon S3](/assets/images/help/enterprises/audit-log-streaming-s3-access-keys.png){% endif %}
1. Defina as configurações de fluxo.

   - Em "Bucket", digite o nome do bucket de destino da transmissão. Por exemplo, `auditlog-streaming-test`.
   - Em "ID da Chave de Acesso", digite a ID da chave de acesso. Por exemplo, `ABCAIOSFODNN7EXAMPLE1`.
   - Em "Chave Secreta", digite a chave secreta. Por exemplo, `aBcJalrXUtnWXYZ/A1MDENG/zPxRfiCYEXAMPLEKEY`.
{% data reusables.audit_log.streaming-check-s3-endpoint %} {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion streaming-oidc-s3 %}
#### <a name="setting-up-streaming-to-s3-with-openid-connect"></a>Como configurar o streaming para o S3 com o OpenID Connect

{% note %}

**Nota:** o streaming para o Amazon S3 com o OpenID Connect está atualmente em beta e sujeito a alterações.

{% endnote %}

1. Na AWS, adicione o provedor do OIDC do {% data variables.product.prodname_dotcom %} para IAM. Para obter mais informações, confira [Como criar provedores de identidade do OIDC (OpenID Connect)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html) na documentação da AWS.

   - Para a URL do provedor, use `https://oidc-configuration.audit-log.githubusercontent.com`.
   - Para "Audiência", use `sts.amazonaws.com`.
1. Crie um bucket e bloqueie o acesso público a ele. Para obter mais informações, confira [Como criar, configurar e trabalhar com buckets do Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) na documentação da AWS.
1. Crie uma política que permita que o {% data variables.product.company_short %} escreva no bucket. O {% data variables.product.prodname_dotcom %} requer apenas as permissões a seguir.

   ```
   {
      "Version": "2012-10-17",
      "Statement": [
         {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
               "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::example-bucket/*"
        }
      ]
   }
   ```
   Para obter mais informações, confira [Como criar políticas de IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html) na documentação da AWS.
1. Configure a política de função e de confiança para o IdP do {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira [Como criar uma função para identidade da Web ou OpenID Connect Federation (console)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html) na documentação da AWS.
  
   - Adicione a política de permissões que você criou acima para permitir gravações no bucket.
   - Edite a relação de confiança para adicionar o campo `sub` às condições de validação, substituindo `ENTERPRISE` pelo nome da sua empresa.
     ```
     "Condition": {
        "StringEquals": {
           "oidc-configuration.audit-log.githubusercontent.com:aud": "sts.amazonaws.com",
           "oidc-configuration.audit-log.githubusercontent.com:sub": "https://github.com/ENTERPRISE"
         }
      }
      ```
   - Anote o ARN (Nome do Recurso da Amazon) da função criada.
{% data reusables.enterprise.navigate-to-log-streaming-tab %} {% data reusables.audit_log.streaming-choose-s3 %}
1. Em "Autenticação", clique em **OpenID Connect**.

   ![Captura de tela das opções de autenticação de streaming para o Amazon S3](/assets/images/help/enterprises/audit-log-streaming-s3-oidc.png)
1. Defina as configurações de fluxo.

   - Em "Bucket", digite o nome do bucket de destino da transmissão. Por exemplo, `auditlog-streaming-test`.
   - Em "Função do ARN", digite a função do ARN que você já havia anotado. Por exemplo, `arn:aws::iam::1234567890:role/github-audit-log-streaming-role`.
{% data reusables.audit_log.streaming-check-s3-endpoint %} {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

#### <a name="disabling-streaming-to-s3-with-openid-connect"></a>Desabilitação do streaming para S3 com o OpenID Connect

Para desabilitar o streaming para S3 com o OIDC por qualquer motivo, como a descoberta de uma vulnerabilidade de segurança no OIDC, exclua o provedor OIDC do {% data variables.product.prodname_dotcom %} criado na AWS ao configurar o streaming. Para obter mais informações, confira [Como criar provedores de identidade do OIDC (OpenID Connect)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html) na documentação da AWS.

Em seguida, configure o streaming com chaves de acesso até que a vulnerabilidade seja resolvida. Para saber mais, confira "[Configuração do streaming para S3 com chaves de acesso](#setting-up-streaming-to-s3-with-access-keys)".

{% endif %}

### <a name="setting-up-streaming-to-azure-blob-storage"></a>Configurando a transmissão para o Azure Blob Storage

Antes de configurar uma transmissão em {% data variables.product.prodname_dotcom %}, você deve primeiro ter criado uma conta de armazenamento e um contêiner no Microsoft Azure. Para obter detalhes, confira a documentação da Microsoft: "[Introdução ao Armazenamento de Blobs do Azure](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction)". 

Para configurar a transmissão em {% data variables.product.prodname_dotcom %}, você precisa da URL de um token SAS.

**No portal do Microsoft Azure**:
1. Na Página Inicial, clique em **Contas do Armazenamento**.
2. Clique no nome da conta de armazenamento que deseja usar e clique em **Contêineres**.
   
   ![O link dos contêineres no Azure](/assets/images/azure/azure-storage-containers.png)

1. Clique no nome do contêiner que você deseja usar.
1. Clique em **Tokens de acesso compartilhado**. 
   
   ![O link do token de acesso compartilhado no Azure](/assets/images/azure/azure-storage-shared-access-tokens.png)

1. No menu suspenso **Permissões**, altere as permissões para permitir apenas `Create` e `Write`.
   
   ![Menu suspenso de permissões](/assets/images/azure/azure-storage-permissions.png)

1. Defina uma data de validade que esteja em conformidade com sua política de rotação de segredo.
1. Clique em **Gerar token SAS e URL**.
1. Copie o valor do campo **URL SAS de Blob** exibido. Você usará este URL em {% data variables.product.prodname_dotcom %}.

**No {% data variables.product.prodname_dotcom %}** : {% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Clique em **Configurar fluxo** e selecione **Armazenamento de Blobs do Azure**.
   
   ![Escolha o Azure Blob Storage a partir do menu suspenso](/assets/images/help/enterprises/audit-stream-choice-azureblob.png)

1. Na página de configuração, insira a URL do SAS do blob que você copiou no Azure. O campo **Contêiner** é preenchido automaticamente com base na URL.

   ![Insira as configurações de transmissão](/assets/images/help/enterprises/audit-stream-add-azureblob.png)
  
1. Clique em **Verificar ponto de extremidade** para verificar se o {% data variables.product.prodname_dotcom %} pode se conectar ao ponto de extremidade do Armazenamento de Blobs do Azure e fazer gravações nele.
   
   ![Verificar o ponto de extremidade](/assets/images/help/enterprises/audit-stream-check.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### <a name="setting-up-streaming-to-azure-event-hubs"></a>Configurando a transmissão para os Centros de Evento do Azure

Antes de configurar uma transmissão em {% data variables.product.prodname_dotcom %}, primeiro você deve ter o namespace do centro de um evento no Microsoft Azure. Em seguida, você deve criar uma instância do centro de um evento dentro do namespace. Você precisará das informações da instância do centro desse evento ao configurar a transmissão. Para obter detalhes, confira a documentação da Microsoft: "[Guia de Início Rápido: Criar um hub de eventos usando o portal do Azure](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create)". 

Você precisa de duas informações sobre seu centro de eventos: o nome da sua instância e a sequência de caracteres de conexão. 

**No portal do Microsoft Azure**:
1. Pesquise "Centros de Evento".

   ![Caixa de pesquisa do portal Azure](/assets/images/azure/azure-resources-search.png )

1. Selecione a opção **Hubs de Eventos**. Os nomes dos centros de eventos serão listados. 
   
   ![Uma lista de centros de eventos](/assets/images/help/enterprises/azure-event-hubs-list.png)

1. Faça uma observação do nome do centro do evento para o qual você deseja transmitir.
1. Clique no centro de eventos necessário. Em seguida, no menu à esquerda, selecione **Políticas de Acesso Compartilhado**.
1. Selecione uma política de acesso compartilhada na lista de políticas ou crie uma nova política.
   
   ![Uma lista de políticas de acesso compartilhadas](/assets/images/help/enterprises/azure-shared-access-policies.png)

1. Clique no botão à direita do campo **Chave primária da cadeia de conexão** para copiar a cadeia de conexão.
   
   ![A string de conexão do centro do evento](/assets/images/help/enterprises/azure-connection-string.png)

**No {% data variables.product.prodname_dotcom %}** : {% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Clique em **Configurar fluxo** e selecione **Hubs de Eventos do Azure**.
   
   ![Selecione Centro de Eventos do Azure no menu suspenso](/assets/images/help/enterprises/audit-stream-choice-azure.png)

1. Na página de configuração, insira:
   * O nome da instância do Centro de Eventos do Azure.
   * A cadeia de conexão.
  
   ![Insira as configurações de transmissão](/assets/images/help/enterprises/audit-stream-add-azure.png)
   
1. Clique em **Verificar ponto de extremidade** para verificar se o {% data variables.product.prodname_dotcom %} pode se conectar ao ponto de extremidade do Hub de Eventos do Azure e fazer gravações nele.
   
   ![Verificar o ponto de extremidade](/assets/images/help/enterprises/audit-stream-check.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### <a name="setting-up-streaming-to-google-cloud-storage"></a>Configurando a transmissão para o Google Cloud Storage

Para configurar a transmissão para o Google Cloud Storage, você deve criar uma conta de serviço no Google Cloud com as credenciais e permissões apropriadas e, em seguida, configurar a transmissão do log de auditoria em {% data variables.product.product_name %} usando as credenciais da conta de serviço para autenticação.

1. Crie uma conta de serviço para o Google Cloud. Você não precisa definir os controles de acesso ou as funções do IAM para a conta de serviço. Para obter mais informações, confira [Como criar e gerenciar contas de serviço](https://cloud.google.com/iam/docs/creating-managing-service-accounts#creating) na documentação do Google Cloud.
1. Crie uma chave JSON para a conta do serviço, e armazene a chave com segurança. Para obter mais informações, confira [Como criar e gerenciar chaves de conta de serviço](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating) na documentação do Google Cloud.
1. Se você ainda não criou um nucket, crie-o. Para obter mais informações, confira [Como criar buckets de armazenamento](https://cloud.google.com/storage/docs/creating-buckets) na documentação do Google Cloud.
1. Dê à conta de serviço a função do Storage Object Creator para o bucket. Para obter mais informações, confira [Como usar permissões de IAM de Nuvem](https://cloud.google.com/storage/docs/access-control/using-iam-permissions#bucket-add) na documentação do Google Cloud.
{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Selecione o menu suspenso Configurar fluxo e clique em **Google Cloud Storage**.

   ![Captura de tela do menu suspenso "Configurar fluxo"](/assets/images/help/enterprises/audit-stream-choice-google-cloud-storage.png)

1. Em "Bucket", digite o nome do seu bucket do Google Cloud Storage.

   ![Captura de tela do campo de texto "Bucket"](/assets/images/help/enterprises/audit-stream-bucket-google-cloud-storage.png)

1. Em "Credenciais do JSON ", cole todo o conteúdo do arquivo para a chave do JSON da sua conta de serviço.

   ![Captura de tela do campo de texto "Credenciais JSON"](/assets/images/help/enterprises/audit-stream-json-credentials-google-cloud-storage.png)

1. Para verificar se o {% data variables.product.prodname_dotcom %} pode se conectar ao bucket do Google Cloud Storage e fazer gravações nele, clique em **Verificar ponto de extremidade**. 

   ![Captura de tela do botão "Verificar ponto de extremidade"](/assets/images/help/enterprises/audit-stream-check-endpoint-google-cloud-storage.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### <a name="setting-up-streaming-to-splunk"></a>Configurando a transmissão para o Splunk

Para transmitir os logs de auditoria para o Coletor de Eventos HTTP (HEC) do Splunk, você deverá garantir que o ponto de extremidade esteja configurado para aceitar conexões HTTPS. Para obter mais informações, confira [Configurar e usar o Coletor de Eventos HTTP no Splunk Web](https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector) na documentação do Splunk.

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Clique em **Configurar fluxo** e selecione **Splunk**.
   
   ![Escolha Splunk no menu suspenso](/assets/images/help/enterprises/audit-stream-choice-splunk.png)

1. Na página de configuração, insira:
   * O domínio para o qual o aplicativo deseja que você transmita está hospedado.
  
     Se você estiver usando o Splunk Cloud, `Domain` deverá ser `http-inputs-<host>`, em que `host` é o domínio que você usa no Splunk Cloud. Por exemplo: `http-inputs-mycompany.splunkcloud.com`. 

   * A porta sobre a qual o aplicativo aceita dados.<br>

     Se você estiver usando o Splunk Cloud, `Port` deverá ser `443`, se você não tiver alterado a configuração da porta. Se você estiver usando a versão de avaliação gratuita do Splunk Cloud, `Port` deverá ser `8088`.

   * Um token que {% data variables.product.prodname_dotcom %} pode usar para efetuar a autenticação no aplicativo de terceiros.
  
   ![Insira as configurações de transmissão](/assets/images/help/enterprises/audit-stream-add-splunk.png)

1. Mantenha a caixa de seleção **Habilitar verificação SSL** marcada.

    Os logs de auditoria são sempre transmitidos como dados criptografados. No entanto, com esta opção selecionada, {% data variables.product.prodname_dotcom %} verifica o certificado SSL da sua instância do Splunk ao realizar os eventos. A verificação SSL ajuda a garantir que os eventos sejam entregues no ponto de extremidade da sua URL de forma segura. Você pode limpar a seleção desta opção, mas recomendamos que saia da verificação SSL habilitada.
1. Clique em **Verificar ponto de extremidade** para verificar se o {% data variables.product.prodname_dotcom %} pode se conectar ao ponto de extremidade do Splunk e fazer gravações nele.
   ![Verificar o ponto de extremidade](/assets/images/help/enterprises/audit-stream-check-splunk.png) {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion pause-audit-log-stream %}
## <a name="pausing-audit-log-streaming"></a>Pausando a transmissão do log de auditoria

A pausa da transmissão permite que você execute a manutenção no aplicativo de recebimento sem perder dados de auditoria. Os logs de auditoria são armazenados por até sete dias em {% data variables.product.product_location %} e, em seguida, são exportados quando você suspender a pausa da transmissão.

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Clique em **Pausar fluxo**.
   
   ![Pausar a transmissão](/assets/images/help/enterprises/audit-stream-pause.png)

1. Uma mensagem de confirmação é exibida. Clique em **Pausar fluxo** para confirmar.

Quando o aplicativo estiver pronto para receber logs de auditoria novamente, clique em **Retomar fluxo** para reiniciar os logs de auditoria de streaming.
{% endif %}

## <a name="deleting-the-audit-log-stream"></a>Excluindo a transmissão do log de auditoria

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Clique em **Excluir fluxo**.
   
   ![Excluir a transmissão](/assets/images/help/enterprises/audit-stream-delete.png)

1. Uma mensagem de confirmação é exibida. Clique em **Excluir fluxo** para confirmar.
