---
title: Solução de problemas de SSL
intro: 'Em caso de problemas de SSL com seu appliance, veja o que você pode fazer para resolvê-los.'
redirect_from:
  - /enterprise/admin/articles/troubleshooting-ssl-errors/
  - /enterprise/admin/categories/dns-ssl-and-subdomain-configuration/
  - /enterprise/admin/installation/troubleshooting-ssl-errors
  - /enterprise/admin/configuration/troubleshooting-ssl-errors
  - /admin/configuration/troubleshooting-ssl-errors
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Errors
  - Infrastructure
  - Networking
  - Security
  - Troubleshooting
---

### Remover a frase secreta do arquivo de chave

Se você tiver uma máquina Linux com OpenSSL instalado, será possível remover a frase secreta.

1. Renomeie seu arquivo de chave original.
  ```shell
  $ mv yourdomain.key yourdomain.key.orig
  ```
2. Gere uma nova chave SSH sem frase secreta.
  ```shell
  $ openssl rsa -in yourdomain.key.orig -out yourdomain.key
  ```

A senha da chave será solicitada quando você executar esse comando.

Para obter mais informações sobre o OpenSSL, consulte a [Documentação do OpenSSL](https://www.openssl.org/docs/).

### Converter o certificado ou chave SSL em formato PEM

Se você tiver o OpenSSL instalado, é possível converter sua chave em formato PEM com o comando `openssl`. Por exemplo, você pode converter uma chave do formato DER para o formato PEM.

```shell
$ openssl rsa -in yourdomain.der -inform DER -out yourdomain.key -outform PEM
```

Se não tiver, você pode usar a ferramenta SSL Converter para converter seu certificado em formato PEM. Para obter mais informações, consulte a [documentação da ferramenta SSL Converter](https://www.sslshopper.com/ssl-converter.html).

### Instalação parada após upload de chave

Se a {% data variables.product.product_location %} parar de funcionar após o upload de uma chave SSL, [entre em contato com o suporte do {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/support) informando detalhes específicos, inclusive uma cópia do seu certificado SSL.

### Erros de validade de certificado

Se não conseguirem verificar a validade de um certificado SSL, clientes como navegadores da web e Gits de linha de comando exibirão uma mensagem de erro. Isso costuma acontecer com certificados autoassinados e certificados de "raiz encadeada" emitidos a partir de um certificado raiz intermediário não reconhecido pelo cliente.

Se você estiver usando um certificado assinado por uma autoridade de certificação (CA), o arquivo de certificado que você carregar no {% data variables.product.prodname_ghe_server %} deverá incluir uma cadeia de certificados com o certificado raiz da autoridade certificada em questão. Para criar esse arquivo, concatene toda a sua cadeia de certificados (ou "pacote de certificados") até o fim, garantindo que o certificado principal com o nome de host seja o primeiro. Na maioria dos sistemas, fazer isso é possível com um comando semelhante ao seguinte:

```shell
$ cat yourdomain.com.crt bundle-certificates.crt > yourdomain.combined.crt
```

Você deve poder baixar um pacote de certificados (por exemplo, `bundle-certificates.crt`) da sua autoridade certificada ou do fornecedor de SSL.

### Instalar certificados raiz de autoridade de certificação (CA) autoassinada ou não confiável

Se o seu appliance do {% data variables.product.prodname_ghe_server %} interage na rede com outras máquinas que usam certificados autoassinados ou não confiáveis, será necessário importar o certificado raiz da CA de assinatura para o armazenamento geral do sistema a fim de acessar esses sistemas por HTTPS.

1. Obtenha o certificado raiz da autoridade de certificação local e verifique se ele está no formato PEM.
2. Copie o arquivo para o seu appliance do {% data variables.product.prodname_ghe_server %} via SSH como usuário "admin" na porta 122.
  ```shell
  $ scp -P 122 rootCA.crt admin@HOSTNAME:/home/admin
  ```
3. Conecte-se ao shell administrativo do {% data variables.product.prodname_ghe_server %} via SSH como usuário "admin" na porta 122.
  ```shell
  $ ssh -p 122 admin@HOSTNAME
  ```
4. Importe o certificado no armazenamento geral do sistema.
  ```shell
  $ ghe-ssl-ca-certificate-install -c rootCA.crt
  ```
