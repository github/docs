---
title: Solução de problemas de SSL
intro: Em caso de problemas de SSL com seu appliance, veja o que você pode fazer para resolvê-los.
redirect_from:
- /enterprise/admin/articles/troubleshooting-ssl-errors
- /enterprise/admin/categories/dns-ssl-and-subdomain-configuration
- /enterprise/admin/installation/troubleshooting-ssl-errors
- /enterprise/admin/configuration/troubleshooting-ssl-errors
- /admin/configuration/troubleshooting-ssl-errors
versions:
  ghes: '*'
type: how_to
topics:
- Enterprise
- Errors
- Infrastructure
- Networking
- Security
- Troubleshooting
shortTitle: Troubleshoot SSL errors
ms.openlocfilehash: cfe73a647b539fa8c9c2aef54f8bc51f2b1becae
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145095967"
---
## <a name="removing-the-passphrase-from-your-key-file"></a>Remover a frase secreta do arquivo de chave

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

Para obter mais informações sobre o OpenSSL, confira a [documentação do OpenSSL](https://www.openssl.org/docs/).

## <a name="converting-your-ssl-certificate-or-key-into-pem-format"></a>Converter o certificado ou chave SSL em formato PEM

Se você tiver o OpenSSL instalado, converta sua chave no formato PEM usando o comando `openssl`. Por exemplo, você pode converter uma chave do formato DER para o formato PEM.

```shell
$ openssl rsa -in yourdomain.der -inform DER -out yourdomain.key -outform PEM
```

Se não tiver, você pode usar a ferramenta SSL Converter para converter seu certificado em formato PEM. Para obter mais informações, confira a [documentação da ferramenta SSL Converter](https://www.sslshopper.com/ssl-converter.html).

## <a name="unresponsive-installation-after-uploading-a-key"></a>Instalação parada após upload de chave

Se o {% data variables.product.product_location %} não responder após o upload de uma chave SSL, [entre em contato com o Suporte do {% data variables.product.prodname_enterprise %}](https://enterprise.github.com/support) com detalhes específicos, incluindo uma cópia do certificado SSL.

## <a name="certificate-validity-errors"></a>Erros de validade de certificado

Se não conseguirem verificar a validade de um certificado SSL, clientes como navegadores da web e Gits de linha de comando exibirão uma mensagem de erro. Isso costuma acontecer com certificados autoassinados e certificados de "raiz encadeada" emitidos a partir de um certificado raiz intermediário não reconhecido pelo cliente.

Se você estiver usando um certificado assinado por uma autoridade de certificação (CA), o arquivo de certificado que você carregar no {% data variables.product.prodname_ghe_server %} deverá incluir uma cadeia de certificados com o certificado raiz da autoridade certificada em questão. Para criar esse arquivo, concatene toda a sua cadeia de certificados (ou "pacote de certificados") até o fim, garantindo que o certificado principal com o nome de host seja o primeiro. Na maioria dos sistemas, fazer isso é possível com um comando semelhante ao seguinte:

```shell
$ cat yourdomain.com.crt bundle-certificates.crt > yourdomain.combined.crt
```

Você deve conseguir baixar um pacote de certificados (por exemplo, `bundle-certificates.crt`) da autoridade de certificação ou do fornecedor de SSL.

## <a name="installing-self-signed-or-untrusted-certificate-authority-ca-root-certificates"></a>Instalar certificados raiz de autoridade de certificação (CA) autoassinada ou não confiável

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

## <a name="updating-an-ssl-certificate"></a>Atualizando um certificado SSL

Você pode gerar um novo certificado autoassinado ou atualizar um certificado SSL existente para o {% data variables.product.product_location %} com o utilitário de linha de comando `ghe-ssl-certificate-setup`. Para obter mais informações, confira "[Utilitários de linha de comando](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-ca-certificate-setup)".
