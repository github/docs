---
title: Transmissão do log de auditoria para a sua empresa
intro: 'Você pode transmitir dados de auditoria e eventos do Git de {% data variables.product.prodname_dotcom %} para um sistema externo de gerenciamento de dados.'
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
  - Organizations
shortTitle: Transmitir logs de auditoria
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
  - /admin/user-management/managing-organizations-in-your-enterprise/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
permissions: Enterprise owners can configure audit log streaming.
---

## Sobre a transmissão do log de auditoria

Para ajudar a proteger sua propriedade intelectual e manter a conformidade da sua organização, você pode usar o a transmissão para manter cópias dos seus dados e monitoramento do log de auditoria:
{% data reusables.audit_log.audited-data-list %}

Os benefícios do streaming de dados de auditoria incluem:

* **Exploração de dados**. Você pode examinar eventos transmitidos usando sua ferramenta preferida para consultar grandes quantidades de dados. A transmissão contém eventos de auditoria e Git em toda a conta corporativa.
* **Continuidade dos dados**. Você pode pausar a transmissão por até sete dias sem perder nenhum dado da auditoria.
* **Retenção de dados**. Você pode manter seus registros de auditoria exportados e dados de eventos do Git se precisar.

Os proprietários das empresas podem configurar, pausar ou excluir uma transmissão a qualquer momento. A transmissão exporta os dados de auditoria para todas as organizações da sua empresa.

## Configurando a transmissão do log de auditoria

Você configurou o fluxo do log de auditoria em {% data variables.product.product_name %} seguindo as instruções do seu provedor.

- [Amazon S3](#setting-up-streaming-to-amazon-s3)
- [Armazenamento do Azure Blob](#setting-up-streaming-to-azure-blob-storage)
- [Centros de evento do Azure](#setting-up-streaming-to-azure-event-hubs)
- [Armazenamento do Google Cloud](#setting-up-streaming-to-google-cloud-storage)
- [Splunk](#setting-up-streaming-to-splunk)

### Configurando a transmissão para o Amazon S3

Para transmitir os logs de auditoria para o ponto de extremidade do Amazon S3, você deve ter um bucket e chaves de acesso. Para obter mais informações, consulte [Criando, configurando e trabahlando com buckets do Amazon S3 ](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) na documentação do AWS. Certifique-se de bloquear o acesso público ao bucket para proteger as suas informações de log de auditoria.

Para configurar a tarnsmissão do de log de auditoria de {% data variables.product.prodname_dotcom %} você vai precisar:
* O nome do seu bucket do Amazon S3
* Seu ID de acesso ao AWS
* Sua chave de segredo para o AWS

Para obter informações sobre como criar ou acessar sua chave de acesso e chave secreta, consulte [Entendendo e obtendo suas credenciais AWS](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html) na documentação do AWS.

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Clique **Configurar transmissão** e selecione **Amazon S3**.

   ![Escolha o Amazon S3 no menu suspenso](/assets/images/help/enterprises/audit-stream-choice-s3.png)

1. Na página de configuração, insira:
   * O nome do bucket para o qual você deseja transmitir. Por exemplo, `auditlog-streaming-test`.
   * Seu ID da chave de acesso. Por exemplo, `ABCAIOSFODNN7EXAMPLE1`.
   * Sua chave do segredo. Por exemplo, `aBJalrXUtnWXYZ/A1MDENG/zPxRfiCYEXAMPLEKEY`.

   ![Insira as configurações de transmissão](/assets/images/help/enterprises/audit-stream-add-s3.png)

1. Clique **Verificar ponto de extremidade** para verificar se {% data variables.product.prodname_dotcom %} pode conectar-se e gravar no ponto de extremidade do Amazon S3.

   ![Verificar o ponto de extremidade](/assets/images/help/enterprises/audit-stream-check.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### Configurando a transmissão para o Azure Blob Storage

Antes de configurar uma transmissão em {% data variables.product.prodname_dotcom %}, você deve primeiro ter criado uma conta de armazenamento e um contêiner no Microsoft Azure. Para obter detalhes, consulte a documentação da Microsoft, "[Introdução ao Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction)".

Para configurar a transmissão em {% data variables.product.prodname_dotcom %}, você precisa da URL de um token SAS.

**No portal do Microsoft Azure**:
1. Na página inicial, clique em **Contas de armazenamento**.
2. Clique no nome da conta de armazenamento que você deseja usar e clique em **Contêineres**.

   ![O link dos contêineres no Azure](/assets/images/azure/azure-storage-containers.png)

1. Clique no nome do contêiner que você deseja usar.
1. Clique **Tokens de acesso compartilhados**.

   ![O link do token de acesso compartilhado no Azure](/assets/images/azure/azure-storage-shared-access-tokens.png)

1. No menu suspenso **Permissões**, altere as permissões para somente permitir `Criar` e `Gravar`.

   ![Menu suspenso de permissões](/assets/images/azure/azure-storage-permissions.png)

1. Defina uma data de validade que esteja em conformidade com sua política de rotação de segredo.
1. Clique em **Gerar token SAS e URL**.
1. Copie o valor do campo **Blob SAS URL** que é exibido. Você usará este URL em {% data variables.product.prodname_dotcom %}.

**Em {% data variables.product.prodname_dotcom %}**:
{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Clique **Configurar a transmissão** e selecione **Azure Blob Storage**.

   ![Escolha o Azure Blob Storage a partir do menu suspenso](/assets/images/help/enterprises/audit-stream-choice-azureblob.png)

1. Na página de configuração, insira a URL do SAS do blob que você copiou no Azure. O campo **Contêiner** é preenchido automaticamente com base na URL.

   ![Insira as configurações de transmissão](/assets/images/help/enterprises/audit-stream-add-azureblob.png)

1. Clique em **Verificar ponto de extremidade** para verificar se {% data variables.product.prodname_dotcom %} pode conectar e gravar no ponto de Azure Blob Storage.

   ![Verificar o ponto de extremidade](/assets/images/help/enterprises/audit-stream-check.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### Configurando a transmissão para os Centros de Evento do Azure

Antes de configurar uma transmissão em {% data variables.product.prodname_dotcom %}, primeiro você deve ter o namespace do centro de um evento no Microsoft Azure. Em seguida, você deve criar uma instância do centro de um evento dentro do namespace. Você precisará das informações da instância do centro desse evento ao configurar a transmissão. Para obter mais informações, consulte a documentação da Microsoft, "[Início rápido: Criar um centro de eventos usando o portal do Azure](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create)".

Você precisa de duas informações sobre seu centro de eventos: o nome da sua instância e a sequência de caracteres de conexão.

**No portal do Microsoft Azure**:
1. Pesquise "Centros de Evento".

   ![Caixa de pesquisa do portal Azure](/assets/images/azure/azure-resources-search.png)

1. Selecione **Centros de evento**. Os nomes dos centros de eventos serão listados.

   ![Uma lista de centros de eventos](/assets/images/help/enterprises/azure-event-hubs-list.png)

1. Faça uma observação do nome do centro do evento para o qual você deseja transmitir.
1. Clique no centro de eventos necessário. Em seguida, no menu à esquerda, selecione **Políticas de Acesso Compartilhado**.
1. Selecione uma política de acesso compartilhada na lista de políticas ou crie uma nova política.

   ![Uma lista de políticas de acesso compartilhadas](/assets/images/help/enterprises/azure-shared-access-policies.png)

1. Clique no botão à direita do campo **Tecla primária da string de conexão** para copiar a string de conexão.

   ![A string de conexão do centro do evento](/assets/images/help/enterprises/azure-connection-string.png)

**Em {% data variables.product.prodname_dotcom %}**:
{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Clique **Configurar a transmissão ** e selecione **Centros de Evento do Azure**.

   ![Selecione Centro de Eventos do Azure no menu suspenso](/assets/images/help/enterprises/audit-stream-choice-azure.png)

1. Na página de configuração, insira:
   * O nome da instância do Centro de Eventos do Azure.
   * A string de conexão.

   ![Insira as configurações de transmissão](/assets/images/help/enterprises/audit-stream-add-azure.png)

1. Clique **Check endpoint** para verificar se {% data variables.product.prodname_dotcom %} pode conectar e gravar no ponto de extremidade do Centro de Eventos do Azure.

   ![Verificar o ponto de extremidade](/assets/images/help/enterprises/audit-stream-check.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### Configurando a transmissão para o Google Cloud Storage

Para configurar a transmissão para o Google Cloud Storage, você deve criar uma conta de serviço no Google Cloud com as credenciais e permissões apropriadas e, em seguida, configurar a transmissão do log de auditoria em {% data variables.product.product_name %} usando as credenciais da conta de serviço para autenticação.

1. Crie uma conta de serviço para o Google Cloud. Você não precisa definir os controles de acesso ou as funções do IAM para a conta de serviço. Para obter mais informações, consulte [Criar e gerenciar as contas de serviço](https://cloud.google.com/iam/docs/creating-managing-service-accounts#creating) na documentação do Google Cloud.
1. Crie uma chave JSON para a conta do serviço, e armazene a chave com segurança. Para obter mais informações, consulte [Criar e gerenciar chaves de conta de serviço](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating) na documentação do Google Cloud.
1. Se você ainda não criou um nucket, crie-o. Para obter mais informações, consulte [Criando buckets de armazenamento](https://cloud.google.com/storage/docs/creating-buckets) na documentação do Google Cloud.
1. Dê à conta de serviço a função do Storage Object Creator para o bucket. Para obter mais informações, consulte [Usando permissões de IAM da nuvem](https://cloud.google.com/storage/docs/access-control/using-iam-permissions#bucket-add) na documentação do Google Cloud.
{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Selecione o menu suspenso de configurar transmissão e clique em **Google Cloud Storage**.

   ![Captura de tela do meu suspenso "Configurar fluxo"](/assets/images/help/enterprises/audit-stream-choice-google-cloud-storage.png)

1. Em "Bucket", digite o nome do seu bucket do Google Cloud Storage.

   ![Captura de tela do campo de texto do "Bucket"](/assets/images/help/enterprises/audit-stream-bucket-google-cloud-storage.png)

1. Em "Credenciais do JSON ", cole todo o conteúdo do arquivo para a chave do JSON da sua conta de serviço.

   ![Captura de tela do campo de texto das "Credenciais do JSON"](/assets/images/help/enterprises/audit-stream-json-credentials-google-cloud-storage.png)

1. Para verificar que {% data variables.product.prodname_dotcom %} pode conectar e escrever no banco de armazenamento do Google Cloud Storage, clique em **Verificar ponto de extremidade**.

   ![Captura de tela do botão "Verificar ponto de extremidade"](/assets/images/help/enterprises/audit-stream-check-endpoint-google-cloud-storage.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### Configurando a transmissão para o Splunk

Para transmitir os logs de auditoria para o Coletor de Eventos HTTP (HEC) do Splunk, você deverá garantir que o ponto de extremidade esteja configurado para aceitar conexões HTTPS. Para obter mais informações, consulte [Configurar e usar o Coletor de Eventos de HTTP no Splunk Web](https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector) na documentação do Splunk.

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Clique **Configurar transmissão** e selecione **Splunk**.

   ![Escolha Splunk no menu suspenso](/assets/images/help/enterprises/audit-stream-choice-splunk.png)

1. Na página de configuração, insira:
   * O domínio para o qual o aplicativo deseja que você transmita está hospedado.

     Se você estiver usando a Nuvem do Splunk, o `Domínio` deverá ser `http-input- http<host>`, em que `host` é o domínio que você usa na nuvem do Splunk. Por exemplo: `http-inputs-mycompany.splunkcloud.com`.

   * A porta sobre a qual o aplicativo aceita dados.<br>

     Se você estiver usando a Nuvem do Splunk, a `Porta` deverá ser `443` se você não mudou a configuração da porta. Se você estiver usando a versão de teste gratuito da Nuvem do Splunk, a `Porta` deverá ser `8088`.

   * Um token que {% data variables.product.prodname_dotcom %} pode usar para efetuar a autenticação no aplicativo de terceiros.

   ![Insira as configurações de transmissão](/assets/images/help/enterprises/audit-stream-add-splunk.png)

1. Deixe a caixa de seleção **Habilitar verificação SSL** marcada.

    Os logs de auditoria são sempre transmitidos como dados criptografados. No entanto, com esta opção selecionada, {% data variables.product.prodname_dotcom %} verifica o certificado SSL da sua instância do Splunk ao realizar os eventos. A verificação SSL ajuda a garantir que os eventos sejam entregues no ponto de extremidade da sua URL de forma segura. Você pode limpar a seleção desta opção, mas recomendamos que saia da verificação SSL habilitada.
1. Clique **Verificar ponto de extremidade** para verificar se {% data variables.product.prodname_dotcom %} pode conectar-se e gravar no ponto de extremidade do Splunk. ![Verificar o ponto de extremidade](/assets/images/help/enterprises/audit-stream-check-splunk.png)
{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

## Pausando a transmissão do log de auditoria

A pausa da transmissão permite que você execute a manutenção no aplicativo de recebimento sem perder dados de auditoria. Os logs de auditoria são armazenados por até sete dias em {% data variables.product.product_location %} e, em seguida, são exportados quando você suspender a pausa da transmissão.

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Clique **Pausar transmissão**.

   ![Pausar a transmissão](/assets/images/help/enterprises/audit-stream-pause.png)

1. Uma mensagem de confirmação é exibida. Clique **Pausar transmissão** para confirmar.

Quando o aplicativo estiver pronto para receber registros de auditoria novamente, clique em **Retomar a transmissão** para reiniciar os logs de auditoria da transmissão.

## Excluindo a transmissão do log de auditoria

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Clique **Excluir Transmissão**.

   ![Excluir a transmissão](/assets/images/help/enterprises/audit-stream-delete.png)

1. Uma mensagem de confirmação é exibida. Clique **Excluir transmissão** para confirmar.
