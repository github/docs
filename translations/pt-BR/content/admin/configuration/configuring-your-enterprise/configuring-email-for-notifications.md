---
title: Configurar notificações de e-mail
intro: 'Para facilitar a resposta rápida dos usuários à atividade em {% data variables.product.product_name %}, você pode configurar {% data variables.product.product_location %} para enviar notificações por e-mail para problema, pull request e comentários do commit.'
redirect_from:
  - /enterprise/admin/guides/installation/email-configuration
  - /enterprise/admin/articles/configuring-email
  - /enterprise/admin/articles/troubleshooting-email
  - /enterprise/admin/articles/email-configuration-and-troubleshooting
  - /enterprise/admin/user-management/configuring-email-for-notifications
  - /admin/configuration/configuring-email-for-notifications
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Notifications
shortTitle: Configure email notifications
ms.openlocfilehash: d50e5dce6c5bdb6acd28f36172b9e8f9c5c09993
ms.sourcegitcommit: 6a266bff4d8c9ee928560c3af45eddd7fb4f3a0c
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/26/2022
ms.locfileid: '147410152'
---
{% ifversion ghae %} Os proprietários da empresa podem configurar emails para notificações.
{% endif %}
## <a name="configuring-smtp-for-your-enterprise"></a>Configurar SMTP para sua empresa

{% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.email-settings %}
4. Selecione **Habilitar email**. Isso habilitará os emails de saída e de entrada. No entanto, para que os emails de entrada funcionem, defina também as configurações de DNS, conforme descrito em "[Como definir as configurações de DNS e de firewall para permitir emails de entrada](#configuring-dns-and-firewall-settings-to-allow-incoming-emails)".
![Habilitar email de saída](/assets/images/enterprise/management-console/enable-outbound-email.png)
5. Digite as configurações para o seu servidor SMTP.
      - No campo **Endereço do servidor**, digite o endereço do servidor SMTP.
      - No campo **Porta**, digite a porta que o servidor SMTP usa para enviar emails.
      - No campo **Domínio**, digite o nome de domínio que o servidor SMTP enviará com a resposta HELO, se houver.
      - Selecione o menu suspenso **Autenticação** e escolha o tipo de criptografia usado pelo servidor SMTP.
      - No campo **Endereço de email no-reply**, digite o endereço de email a ser usado nos campos De e Para em todos os emails de notificação.      
6. Caso deseje descartar todos os emails recebidos destinados ao endereço no-reply, selecione **Descartar emails recebidos no endereço de email no-reply**.
![Caixa de seleção usada para descartar emails destinados ao endereço de email no-reply](/assets/images/enterprise/management-console/discard-noreply-emails.png)
7. Em **Suporte**, escolha um tipo de link para oferecer suporte adicional aos usuários.
    - **Email:** um endereço de email interno.
    - **URL:** um link para um site de suporte interno. Inclua `http://` ou `https://`.
  ![Email ou URL de suporte](/assets/images/enterprise/management-console/support-email-url.png)
8. [Teste da entrega de emails](#testing-email-delivery).
{% elsif ghae %} {% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.email-tab %}
2. Selecione **Habilitar email**.
  ![Caixa de seleção "Habilitar" da definição das configurações de email](/assets/images/enterprise/configuration/ae-enable-email-configure.png)
3. Digite as configurações para o seu servidor de e-mail.
    - No campo **Endereço do servidor**, digite o endereço do servidor SMTP.
    - No campo **Porta**, digite a porta que o servidor SMTP usa para enviar emails.
    - No campo **Domínio**, digite o nome de domínio que o servidor SMTP enviará com a resposta HELO, se houver.
    - Selecione o menu suspenso **Autenticação** e escolha o tipo de criptografia usado pelo servidor SMTP.
    - No campo **Endereço de email no-reply**, digite o endereço de email a ser usado nos campos De e Para em todos os emails de notificação.
4. Caso deseje descartar todos os emails recebidos destinados ao endereço de email no-reply, selecione **Descartar emails recebidos no endereço de email no-reply**.
  ![Caixa de seleção "Descartar" da definição das configurações de email](/assets/images/enterprise/configuration/ae-discard-email.png)
5. Clique em **Configurações de email de teste**.
  ![Botão "Configurações de email de teste" da definição das configurações de email](/assets/images/enterprise/configuration/ae-test-email.png)
6. Em "Enviar email de teste para", digite o endereço de email para o qual deseja enviar um email de teste e clique em **Enviar email de teste**.
  ![Botão "Enviar email de teste" da definição de configurações de email](/assets/images/enterprise/configuration/ae-send-test-email.png)
7. Clique em **Salvar**.
  ![Botão "Salvar" da configuração de contato de suporte da empresa](/assets/images/enterprise/configuration/ae-save.png) {% endif %}

{% ifversion ghes %}
## <a name="testing-email-delivery"></a>Testar a entrega de e-mails

1. Na parte superior da seção **Email**, clique em **Configurações de email de teste**.
![Configurações de email de teste](/assets/images/enterprise/management-console/test-email.png)
2. No campo **Enviar email de teste para**, digite um endereço que receberá o email de teste.
![Testar endereço de email](/assets/images/enterprise/management-console/test-email-address.png)
3. Clique em **Enviar email de teste**.
![Enviar email de teste](/assets/images/enterprise/management-console/test-email-address-send.png)

  {% tip %}

  **Dica:** se ocorrerem erros de SMTP durante o envio de um email de teste, como falha de entrega imediatas ou erro de configuração de email de saída, você os verá na caixa de diálogo Configurações de email de teste.

  {% endtip %}

4. Se o email de teste falhar, [resolva os problemas das configurações de email](#troubleshooting-email-delivery).
5. Quando o email de teste for concluído com sucesso, clique em **Salvar configurações** na parte inferior da página.
![Botão Salvar configurações](/assets/images/enterprise/management-console/save-settings.png) {% data reusables.enterprise_site_admin_settings.wait-for-configuration-run %}

{% ifversion require-tls-for-smtp %}
## <a name="enforcing-tls-for-smtp-connections"></a>Como impor TLS para conexões SMTP

Você pode impor a criptografia TLS para todas as conexões SMTP de entrada, o que pode ajudar a atender a um requisito de certificação ISO-27017.

{% data reusables.enterprise_site_admin_settings.email-settings %}
1. Em "Autenticação", selecione **Impor autenticação TLS (recomendado)** .

   ![Captura de tela da caixa de seleção "Impor autenticação TLS (recomendado)"](/assets/images/enterprise/configuration/enforce-tls-for-smtp-checkbox.png) {% data reusables.enterprise_management_console.save-settings %} {% endif %}

## <a name="configuring-dns-and-firewall-settings-to-allow-incoming-emails"></a>Configurar DNS e firewall para o recebimento de e-mails

Se quiser permitir o recebimento de respostas para os e-mails de notificação, você deverá definir suas configurações DNS.

1. A porta 25 da instância deve estar acessível para o seu servidor SMTP.
2. Crie um registro A que aponta para `reply.[hostname]`. Dependendo do provedor DNS e da configuração do host da instância, você poderá criar um registro A individual que aponta para `*.[hostname]`.
3. Crie um registro MX que aponta para `reply.[hostname]`, de modo que os emails desse domínio sejam roteados para a instância.
4. Crie um registro MX que aponta `noreply.[hostname]` para `[hostname]`, de modo que as respostas ao endereço `cc` em emails de notificação sejam roteadas para a instância. Para obter mais informações, confira {% ifversion ghes %}"[Como configurar notificações](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications){% else %}"[Sobre as notificações por email](/github/receiving-notifications-about-activity-on-github/about-email-notifications){% endif %}".

## <a name="troubleshooting-email-delivery"></a>Resolver problemas na entrega de e-mails

### <a name="create-a-support-bundle"></a>Criar um pacote de suporte

Se não for possível determinar o que há de errado na mensagem de erro exibida, baixe um [pacote de suporte](/enterprise/admin/guides/enterprise-support/providing-data-to-github-support) que contém toda a conversa SMTP entre o servidor de email e o {% data variables.product.prodname_ghe_server %}. Depois de baixar e extrair o pacote, verifique as entradas em *enterprise-manage-logs/unicorn.log* em busca do log de toda a conversa SMTP e dos erros relacionados.

O log unicorn mostrará uma transação semelhante a esta:

```shell
This is a test email generated from https://10.0.0.68/setup/settings
Connection opened: smtp.yourdomain.com:587
-> "220 smtp.yourdomain.com ESMTP nt3sm2942435pbc.14\r\n"
<- "EHLO yourdomain.com\r\n"
-> "250-smtp.yourdomain.com at your service, [1.2.3.4]\r\n"
-> "250-SIZE 35882577\r\n"
-> "250-8BITMIME\r\n"
-> "250-STARTTLS\r\n"
-> "250-ENHANCEDSTATUSCODES\r\n"
-> "250 PIPELINING\r\n"
<- "STARTTLS\r\n"
-> "220 2.0.0 Ready to start TLS\r\n"
TLS connection started
<- "EHLO yourdomain.com\r\n"
-> "250-smtp.yourdomain.com at your service, [1.2.3.4]\r\n"
-> "250-SIZE 35882577\r\n"
-> "250-8BITMIME\r\n"
-> "250-AUTH LOGIN PLAIN XOAUTH\r\n"
-> "250-ENHANCEDSTATUSCODES\r\n"
-> "250 PIPELINING\r\n"
<- "AUTH LOGIN\r\n"
-> "334 VXNlcm5hbWU6\r\n"
<- "dGhpc2lzbXlAYWRkcmVzcy5jb20=\r\n"
-> "334 UGFzc3dvcmQ6\r\n"
<- "aXRyZWFsbHl3YXM=\r\n"
-> "535-5.7.1 Username and Password not accepted. Learn more at\r\n"
-> "535 5.7.1 http://support.yourdomain.com/smtp/auth-not-accepted nt3sm2942435pbc.14\r\n"
```

Esse log mostra que o appliance:

* Abriu uma conexão com o servidor SMTP (`Connection opened: smtp.yourdomain.com:587`).
* Fez uma conexão com sucesso e optou por usar o TLS (`TLS connection started`).
* Foi realizado o tipo de autenticação `login` (`<- "AUTH LOGIN\r\n"`).
* O servidor SMTP rejeitou a autenticação como inválida (`-> "535-5.7.1 Username and Password not accepted.`).

### <a name="check--data-variablesproductproduct_location--logs"></a>Verificar os logs da {% data variables.product.product_location %}

Caso precise verificar o funcionamento dos emails de entrada, há dois arquivos de log que você pode verificar na instância: */var/log/mail.log* e */var/log/mail-replies/metroplex.log*.

*/var/log/mail.log* verifica se as mensagens estão chegando ao servidor. Veja um exemplo de resposta de e-mail com êxito:

```
Oct 30 00:47:18 54-171-144-1 postfix/smtpd[13210]: connect from st11p06mm-asmtp002.mac.com[17.172.124.250]
Oct 30 00:47:19 54-171-144-1 postfix/smtpd[13210]: 51DC9163323: client=st11p06mm-asmtp002.mac.com[17.172.124.250]
Oct 30 00:47:19 54-171-144-1 postfix/cleanup[13216]: 51DC9163323: message-id=<b2b9c260-4aaa-4a93-acbb-0b2ddda68579@me.com>
Oct 30 00:47:19 54-171-144-1 postfix/qmgr[17250]: 51DC9163323: from=<tcook@icloud.com>, size=5048, nrcpt=1 (queue active)
Oct 30 00:47:19 54-171-144-1 postfix/virtual[13217]: 51DC9163323: to=<reply+i-1-1801beb4df676a79250d1e61e54ab763822c207d-5@reply.ghe.tjl2.co.ie>, relay=virtual, delay=0.12, delays=0.11/0/0/0, dsn=2.0.0, status=sent (delivered to maildir)
Oct 30 00:47:19 54-171-144-1 postfix/qmgr[17250]: 51DC9163323: removed
Oct 30 00:47:19 54-171-144-1 postfix/smtpd[13210]: disconnect from st11p06mm-asmtp002.mac.com[17.172.124.250]
```

Observe que o cliente se conecta e depois a fila fica ativa. Em seguida, a mensagem é entregue, o cliente é removido da fila e a sessão é desconectada.

*/var/log/mail-replies/metroplex.log* mostra se os emails de entrada estão sendo processados para serem adicionados a problemas e solicitações de pull como respostas. Veja um exemplo de mensagem com êxito:

```
[2014-10-30T00:47:23.306 INFO (5284) #] metroplex: processing <b2b9c260-4aaa-4a93-acbb-0b2ddda68579@me.com>
[2014-10-30T00:47:23.333 DEBUG (5284) #] Matched /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie
[2014-10-30T00:47:23.334 DEBUG (5284) #] Moving /data/user/mail/reply/new/1414630039.Vfc00I12000eM445784.ghe-tjl2-co-ie => /data/user/incoming-mail/success
```

Você observará que `metroplex` captura a mensagem de entrada, processa-a e move o arquivo para `/data/user/incoming-mail/success`.{% endif %}

### <a name="verify-your-dns-settings"></a>Verificar as configurações DNS

Para processar corretamente os e-mails de entrada, você deve configurar um registro A válido (ou CNAME) e um registro MX. Para obter mais informações, confira "[Como definir as configurações de DNS e de firewall para permitir emails de entrada](#configuring-dns-and-firewall-settings-to-allow-incoming-emails)".

### <a name="check-firewall-or-aws-security-group-settings"></a>Verificar as configurações de firewall ou grupo de segurança do AWS

Se a {% data variables.product.product_location %} estiver protegida por um firewall ou estiver sendo fornecida por meio de um grupo de segurança da AWS, verifique se a porta 25 está aberta para todos os servidores de email que enviam mensagens para `reply@reply.[hostname]`.

### <a name="contact-support"></a>Contate o suporte
{% ifversion ghes %} Se você ainda não conseguir resolver o problema, entre em contato com o {% data variables.contact.contact_ent_support %}. Anexe o arquivo de saída do `http(s)://[hostname]/setup/diagnostics` ao email para nos ajudar a solucionar o problema.
{% elsif ghae %} Entre em contato com o {% data variables.contact.github_support %} para obter ajuda com a configuração do email para envio de notificações por meio do servidor SMTP. Para obter mais informações, confira "[Como receber ajuda do {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support)".
{% endif %}
