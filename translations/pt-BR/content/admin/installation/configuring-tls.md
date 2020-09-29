---
title: Configurar o TLS
intro: 'Você pode configurar o protocolo de Segurança de Camada de Transporte (TLS, Transport Layer Security) na {% data variables.product.product_location_enterprise %} para uso de certificados assinados por uma autoridade de certificação confiável.'
redirect_from:
  - /enterprise/admin/articles/ssl-configuration/
  - /enterprise/admin/guides/installation/about-tls/
  - /enterprise/admin/installation/configuring-tls
versions:
  enterprise-server: '*'
---

### Sobre o protocolo Transport Layer Security

O TLS, protocolo que substituiu o SSL, fica habilitado e configurado com um certificado autoassinado quando o {% data variables.product.prodname_ghe_server %} é iniciado pela primeira vez. Como os certificados autoassinados não são considerados confiáveis por navegadores da web e clientes Git, esses clientes reportarão avisos de certificados até você desabilitar o TLS ou fazer upload de um certificado assinado por uma autoridade confiável, como o Let's Encrypt.

O appliance do {% data variables.product.prodname_ghe_server %} enviará os headers de HTTP Strict Transport Security quando o SSL for habilitado. Desabilitar o TLS fará os usuários perderem o acesso ao appliance, pois seus navegadores não permitirão o downgrade de protocolo para HTTP. Para obter mais informações, consulte "[HTTP Strict Transport Security (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)" na Wikipedia.

{% data reusables.enterprise_installation.terminating-tls %}

Para permitir o uso do FIDO U2F para autenticação de dois fatores, você deve habilitar o TLS na sua instância. Para obter mais informações, consulte "[Configurar a autenticação de dois fatores](/articles/configuring-two-factor-authentication)".

### Pré-requisitos

Para usar o TLS em produção, você deve ter um certificado em formato PEM não criptografado assinado por uma autoridade de certificação confiável.

Seu certificado também precisará de nomes alternativos da entidade (SAN, Subject Alternative Names) configurados para os subdomínios listados em "[Habilitar isolamento de subdomínio](/enterprise/{{ currentVersion }}/admin/guides/installation/enabling-subdomain-isolation#about-subdomain-isolation)" e deverá incluir a cadeia completa de certificados, caso tenha sido assinado por uma autoridade de certificação intermediária. Para obter mais informações, consulte "[Subject Alternative Name](http://en.wikipedia.org/wiki/SubjectAltName)" na Wikipedia.

Você pode gerar uma solicitação de assinatura de certificado (CSR, Certificate Signing Request) para sua instância usando o comando `ghe-ssl-generate-csr`. Para obter mais informações, consulte "[Utilitários de linha de comando](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities/#ghe-ssl-generate-csr)".

### Fazer upload de um certificado TLS personalizado

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
{% data reusables.enterprise_management_console.select-tls-only %}
4. Em "TLS Protocol support" (Suporte ao protocolo TLS), selecione os protocolos que deseja permitir. ![Botões com opções de protocolos TLS](/assets/images/enterprise/management-console/tls-protocol-support.png)
5. Em "Certificate" (Certificado), clique em **Choose File** (Escolher arquivo) para escolher um certificado TLS ou uma cadeia de certificados (no formato PEM) para instalação. Em geral, esse arquivo tem extensão *.pem*, *.crt* ou *.cer*. ![Botão para localizar arquivo de certificado TLS](/assets/images/enterprise/management-console/install-tls-certificate.png)
6. Em "Unencrypted key" (Chave não criptografada), clique em **Choose File** (Escolher arquivo) para escolher a chave TLS (em formato PEM) para instalação. Em geral, esse arquivo tem extensão *.key*. ![Botão para localizar arquivo de chave TLS](/assets/images/enterprise/management-console/install-tls-key.png)

  {% warning %}

  **Aviso**: a chave TLS não deve ter frase secreta. Para obter mais informações, consulte "[Remover a frase secreta de um arquivo de chave](/enterprise/{{ currentVersion }}/admin/guides/installation/troubleshooting-ssl-errors#removing-the-passphrase-from-your-key-file)".

  {% endwarning %}
{% data reusables.enterprise_management_console.save-settings %}

### Sobre o suporte Let's Encrypt

Let's Encrypt é uma autoridade de certificação pública que emite certificados TLS gratuitos, automatizados e reconhecidos como confiáveis pelos navegadores usando o protocolo ACME. Você pode obter e renovar automaticamente os certificados Let's Encrypt no seu appliance sem depender de manutenção manual.

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

Ao habilitar a automação do gerenciamento de certificados TLS usando o Let's Encrypt, sua {% data variables.product.product_location_enterprise %} entrará em contato com os servidores do Let's Encrypt para obter um certificado. Para renovar um certificado, os servidores do Let's Encrypt devem validar o controle do nome de domínio configurado com solicitações HTTP de entrada.

Você também pode usar o utilitário de linha de comando `ghe-ssl-acme` na {% data variables.product.product_location_enterprise %} para gerar automaticamente um certificado Let's Encrypt. Para obter mais informações, consulte "[Utilitários de linha de comando](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities#ghe-ssl-acme)".

### Configurar o TLS usando Let's Encrypt

{% data reusables.enterprise_installation.lets-encrypt-prerequisites %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
{% data reusables.enterprise_management_console.select-tls-only %}
5. Selecione **Enable automation of TLS certificate management using Let's Encrypt** (Habilitar a automação do gerenciamento de certificados TLS com Let's Encrypt). ![Caixa de seleção para habilitar Let's Encrypt](/assets/images/enterprise/management-console/lets-encrypt-checkbox.png)
{% data reusables.enterprise_management_console.save-settings %}
{% data reusables.enterprise_management_console.privacy %}
7. Clique em **Request TLS certificate** (Solicitar certificado TSL). ![Botão Request TLS certificate (Solicitar certificado TSL)](/assets/images/enterprise/management-console/request-tls-button.png)
8. Clique em **Save configuration** (Salvar configuração).
