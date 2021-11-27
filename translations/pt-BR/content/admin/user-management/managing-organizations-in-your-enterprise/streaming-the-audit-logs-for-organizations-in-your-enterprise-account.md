---
title: Transmitir os logs de auditoria para organizações da sua conta corporativa
intro: 'Os proprietários corporativos podem transmitir dados de auditoria e eventos Git de {% data variables.product.prodname_dotcom %} para um sistema externo de gerenciamento de dados.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
  - Organizations
shortTitle: Transmitir os logs de auditoria da organização
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
---

{% note %}

**Observação:** A transmissão do log de auditoria está atualmente em beta para {% data variables.product.prodname_ghe_cloud %} e sujeito a alterações.

{% endnote %}

## Sobre a exportação dos dados de auditoria

Você pode extrair dados de eventos de auditoria de {% data variables.product.prodname_dotcom %} e Git de várias maneiras:

* Acesse a página de log de auditoria em {% data variables.product.prodname_dotcom %} e clique em **Exportar**. <br/> Para obter mais informações, consulte "[Visualizando os logs de auditoria para organizações na conta corporativa](/github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/viewing-the-audit-logs-for-organizations-in-your-enterprise-account)" e "[Exportando o log de auditoria](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#exporting-the-audit-log)".
* Use a API para fazer uma pesquisa para novos eventos de log de auditoria. <br/> Para obter mais informações, consulte "[Usando a API de log de auditoria](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#using-the-audit-log-api)".
* Configure {% data variables.product.product_name %} para transmitir dados de auditoria enquanto eventos são registrados.

## Sobre a transmissão do log de auditoria

Para ajudar a proteger sua propriedade intelectual e manter a conformidade da sua organização, você pode usar o a transmissão para manter cópias dos seus dados e monitoramento do log de auditoria:
{% data reusables.audit_log.audited-data-list %}

Os benefícios do streaming de dados de auditoria incluem:

* **Exploração de dados**. Você pode examinar eventos transmitidos usando sua ferramenta preferida para consultar grandes quantidades de dados. A transmissão contém eventos de auditoria e Git em toda a conta corporativa.
* **Continuidade dos dados**. Você pode pausar a transmissão por até sete dias sem perder nenhum dado da auditoria.
* **Retenção de dados**. Você pode manter seus registros de auditoria exportados e dados do Git pelo tempo que precisar.

Os proprietários das empresas podem configurar, pausar ou excluir uma transmissão a qualquer momento. A transmissão exporta os dados de auditoria para todas as organizações da sua empresa.

## Configurando a transmissão do log de auditoria

{% data variables.product.prodname_dotcom %} supports streaming of audit data to Splunk, Azure Event Hubs, and Amazon S3.

You set up the audit log stream from the Log streaming tab of the Audit log page in your enterprise settings.

### Navigating to the Log streaming tab

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
1. Clique na aba **Transmissão de log**.

From the Log streaming tab you can set up an audit log stream by following the steps in one of the sections below.

### Configurando a transmissão para o Splunk

Para transmitir os logs de auditoria para o Coletor de Eventos HTTP (HEC) do Splunk, você deverá garantir que o ponto de extremidade esteja configurado para aceitar conexões HTTPS. Para obter mais informações, consulte o artigo da documentação do Splunk "[Configurar e usar o Coletor de Eventos HTTP na Web do Splunk](https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector)".

1. Go to the Log streaming tab in your enterprise settings. For more information, see "[Navigating to the Log streaming tab](#navigating-to-the-log-streaming-tab)."
1. Clique **Configurar transmissão** e selecione **Splunk**. ![Escolha Splunk no menu suspenso](/assets/images/help/enterprises/audit-stream-choice-splunk.png)
1. Na página de configuração, insira:
   * O domínio para o qual o aplicativo deseja que você transmita está hospedado.

     Se você estiver usando a Nuvem do Splunk, o `Domínio` deverá ser `http-input- http<host>`, em que `host` é o domínio que você usa na nuvem do Splunk. Por exemplo: `http-inputs-mycompany.splunkcloud.com`.

   * A porta sobre a qual o aplicativo aceita dados.<br>

     Se você estiver usando a Nuvem do Splunk, a `Porta` deverá ser `443` se você não mudou a configuração da porta. Se você estiver usando a versão de teste gratuito da Nuvem do Splunk, a `Porta` deverá ser `8088`.

   * Um token que {% data variables.product.prodname_dotcom %} pode usar para efetuar a autenticação no aplicativo de terceiros. ![Insira as configurações da transmissão](/assets/images/help/enterprises/audit-stream-add-splunk.png)

1. Deixe a caixa de seleção **Habilitar verificação SSL** marcada.

    Os logs de auditoria são sempre transmitidos como dados criptografados. No entanto, com esta opção selecionada, {% data variables.product.prodname_dotcom %} verifica o certificado SSL da sua instância do Splunk ao realizar os eventos. A verificação SSL ajuda a garantir que os eventos sejam entregues no ponto de extremidade da sua URL de forma segura. Você pode limpar a seleção desta opção, mas recomendamos que saia da verificação SSL habilitada.
1. Clique **Check endpoint** para verificar se {% data variables.product.prodname_dotcom %} pode conectar-se ao ponto de extremidade do Splunk. ![Verificar o ponto de extremidade](/assets/images/help/enterprises/audit-stream-check-splunk.png)
1. Depois de verificar com sucesso o ponto de extremidade, clique em **Salvar**.

### Configurando a transmissão para os Centros de Evento do Azure

Antes de configurar uma transmissão em {% data variables.product.prodname_dotcom %}, primeiro você deve ter o namespace do centro de um evento no Microsoft Azure. Em seguida, você deve criar uma instância do centro de um evento dentro do namespace. Você precisará das informações da instância do centro desse evento ao configurar a transmissão. Para obter mais informações, consulte a documentação da Microsoft, "[Início rápido: Criar um centro de eventos usando o portal do Azure](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create)".

Você precisa de duas informações sobre seu centro de eventos: o nome da sua instância e a sequência de caracteres de conexão.

**No portal do Microsoft Azure**:
1. No menu à esquerda selecione **Entidades**. Em seguida, selecione **Centros de Eventos**. Os nomes dos centros de eventos serão listados. ![Uma lista de centros de eventos](/assets/images/help/enterprises/azure-event-hubs-list.png)
1. Faça uma observação do nome do centro do evento para o qual você deseja transmitir.
1. Clique no centro de eventos necessário. Em seguida, no menu à esquerda, selecione **Políticas de Acesso Compartilhado**.
1. Selecione uma política de acesso compartilhada na lista de políticas ou crie uma nova política. ![Uma lista de políticas de acesso compartilhadas](/assets/images/help/enterprises/azure-shared-access-policies.png)
1. Clique no botão à direita do campo **Tecla primária da string de conexão** para copiar a string de conexão. ![A string de conexão do centro do evento](/assets/images/help/enterprises/azure-connection-string.png)

**Em {% data variables.product.prodname_dotcom %}**:
1. Go to the Log streaming tab in your enterprise settings. For more information, see "[Navigating to the Log streaming tab](#navigating-to-the-log-streaming-tab)."
1. Clique **Configurar a transmissão ** e selecione **Centros de Evento do Azure**. ![Escolha Splunk no menu suspenso](/assets/images/help/enterprises/audit-stream-choice-azure.png)
1. Na página de configuração, insira:
   * O nome da instância do Centro de Eventos do Azure.
   * A string de conexão. ![Insira as configurações da transmissão](/assets/images/help/enterprises/audit-stream-add-azure.png)
1. Clique **Verificar ponto de extremidade** para verificar se {% data variables.product.prodname_dotcom %} pode conectar-se ao ponto de extremidade do Azure. ![Verificar o ponto de extremidade](/assets/images/help/enterprises/audit-stream-check.png)
1. Depois de verificar com sucesso o ponto de extremidade, clique em **Salvar**.

### Setting up streaming to Amazon S3

To stream audit logs to Amazon's S3 endpoint, you must have a bucket and access keys. For more information, see the AWS documentation "[Creating, configuring, and working with Amazon S3 buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html)." Make sure to block public access to the bucket to protect your audit log information.

To set up audit log streaming from {% data variables.product.prodname_dotcom %} you will need:
* The name of your Amazon S3 bucket
* Your AWS access key ID
* Your AWS secret key

For information on creating or accessing your access key ID and secret key, see the AWS documentation "[Understanding and getting your AWS credentials](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html)."

1. Go to the Log streaming tab in your enterprise settings. For more information, see "[Navigating to the Log streaming tab](#navigating-to-the-log-streaming-tab)."
1. Click **Configure stream** and select **Amazon S3**. ![Choose Amazon S3 from the drop-down menu](/assets/images/help/enterprises/audit-stream-choice-s3.png)
1. Na página de configuração, insira:
   * The name of the bucket you want to stream to. For example, `auditlog-streaming-test`.
   * Your access key ID. For example, `ABCAIOSFODNN7EXAMPLE1`.
   * Your secret key. For example, `aBcJalrXUtnWXYZ/A1MDENG/zPxRfiCYEXAMPLEKEY`. ![Insira as configurações da transmissão](/assets/images/help/enterprises/audit-stream-add-s3.png)
1. Click **Check endpoint** to verify that {% data variables.product.prodname_dotcom %} can connect to the Amazon S3 endpoint. ![Verificar o ponto de extremidade](/assets/images/help/enterprises/audit-stream-check.png)
1. Depois de verificar com sucesso o ponto de extremidade, clique em **Salvar**.

## Pausando a transmissão do log de auditoria

A pausa da transmissão permite que você execute a manutenção no aplicativo de recebimento sem perder dados de auditoria. Os logs de auditoria são armazenados por até sete dias em {% data variables.product.product_location %} e, em seguida, são exportados quando você suspender a pausa da transmissão.

1. Exibe a aba "Transmissão de registro", como descrito acima.
1. Clique **Pausar transmissão**. ![Pausar a transmissão](/assets/images/help/enterprises/audit-stream-pause.png)
1. Uma mensagem de confirmação é exibida. Clique **Pausar transmissão** para confirmar.

Quando o aplicativo estiver pronto para receber registros de auditoria novamente, clique em **Retomar a transmissão** para reiniciar os logs de auditoria da transmissão.

## Excluindo a transmissão do log de auditoria

1. Exibe a aba "Transmissão de registro", como descrito acima.
1. Clique **Excluir Transmissão**. ![Excluir a transmissão](/assets/images/help/enterprises/audit-stream-delete.png)
2. Uma mensagem de confirmação é exibida. Clique **Excluir transmissão** para confirmar.
