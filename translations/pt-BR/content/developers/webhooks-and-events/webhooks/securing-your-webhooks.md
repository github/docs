---
title: Protegendo seus webhooks
intro: 'Certifique-se de que seu servidor só esteja recebendo as solicitações esperadas do {% data variables.product.prodname_dotcom %} por motivos de segurança.'
redirect_from:
  - /webhooks/securing
  - /developers/webhooks-and-events/securing-your-webhooks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
ms.openlocfilehash: c3597365ae7cf9f96375201d6938c4f6675a8eae
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147707476'
---
Assim que seu servidor estiver configurado para receber cargas, ele ouvirá qualquer carga enviada para o ponto de extremidade que você configurou. Por motivos de segurança, você provavelmente vai querer limitar os pedidos para aqueles provenientes do GitHub. Existem algumas maneiras de fazer isso. Você poderia, por exemplo, optar por permitir solicitações do endereço IP do GitHub. No entanto, um método muito mais fácil é configurar um token secreto e validar a informação.

{% data reusables.webhooks.webhooks-rest-api-links %}

## Definir seu token secreto

Você precisará configurar seu token secreto em dois lugares: no GitHub e no seu servidor.

Para definir seu token no GitHub:

1. Navegue até o repositório em que você está configurando seu webhook.
2. Preencha a caixa de texto do segredo. Use uma cadeia de caracteres aleatória com alta entropia (por exemplo, usando a saída de `ruby -rsecurerandom -e 'puts SecureRandom.hex(20)'` no terminal).
![Campo de token secreto do webhook](/assets/images/webhook_secret_token.png)
3. Clique em **Atualizar Webhook**.

Em seguida, configure uma variável de ambiente em seu servidor que armazene este token. Normalmente, isso é tão simples quanto executar:

```shell
$ export SECRET_TOKEN=<em>your_token</em>
```

**Nunca** embuta o token em código no aplicativo.

## Validando conteúdos do GitHub

Quando seu token secreto está definido, {% data variables.product.product_name %} o utiliza para criar uma assinatura de hash com cada carga. Essa assinatura de hash é incluída nos cabeçalhos de cada solicitação como `x-hub-signature-256`.

{% ifversion fpt or ghes or ghec %} {% note %}

**Observação:** para compatibilidade com versões anteriores, também incluímos o cabeçalho `x-hub-signature` gerado usando a função de hash SHA-1. Se possível, recomendamos que você use o cabeçalho `x-hub-signature-256` para aprimorar a segurança. O exemplo abaixo demonstra o uso do cabeçalho `x-hub-signature-256`.

{% endnote %} {% endif %}

Por exemplo, se você tem um servidor básico que ouve webhooks, ele poderá ser configurado de forma semelhante a isso:

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  request.body.rewind
  push = JSON.parse(request.body.read)
  "I got some JSON: #{push.inspect}"
end
```

A intenção é calcular um hash usando o `SECRET_TOKEN` e garantir que o resultado corresponda ao hash do {% data variables.product.product_name %}. {% data variables.product.product_name %} usa um resumo hexadecimal HMAC para calcular o hash. Portanto, você pode reconfigurar o seu servidor para que se pareça mais ou menos assim:

``` ruby
post '/payload' do
  request.body.rewind
  payload_body = request.body.read
  verify_signature(payload_body)
  push = JSON.parse(payload_body)
  "I got some JSON: #{push.inspect}"
end

def verify_signature(payload_body)
  signature = 'sha256=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha256'), ENV['SECRET_TOKEN'], payload_body)
  return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature, request.env['HTTP_X_HUB_SIGNATURE_256'])
end
```

{% note %}

**Observação:** as cargas de webhook podem conter caracteres Unicode. Se o seu idioma e a implementação de servidor especificarem uma codificação de caracteres, certifique-se de que você manipula a carga como UTF-8.

{% endnote %}

A sua linguagem e implementações do servidor podem ser diferentes deste código de exemplo. No entanto, há uma série de aspectos muito importantes a destacar:

* Independentemente da implementação usada, a assinatura de hash começa com `sha256=`, usando a chave do token secreto e o corpo da carga.

* Não `==`recomendamos **usar um operador** simples. Um método como [`secure_compare`][secure_compare] executa uma comparação de cadeia de caracteres de "tempo constante", que ajuda a atenuar determinados ataques de tempo contra operadores de igualdade regulares.

[secure_compare]: https://rubydoc.info/github/rack/rack/main/Rack/Utils:secure_compare
