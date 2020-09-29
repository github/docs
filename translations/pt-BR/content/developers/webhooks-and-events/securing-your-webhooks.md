---
title: Protegendo seus webhooks
intro: 'Certifique-se de que seu servidor só esteja recebendo as solicitações esperadas do {% data variables.product.prodname_dotcom %} por motivos de segurança.'
redirect_from:
  - /webhooks/securing
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---



Assim que seu servidor estiver configurado para receber cargas, ele ouvirá qualquer carga enviada para o ponto de extremidade que você configurou. Por motivos de segurança, você provavelmente vai querer limitar os pedidos para aqueles provenientes do GitHub. Existem algumas maneiras de fazer isso. Você poderia, por exemplo, optar por permitir solicitações do endereço IP do GitHub. No entanto, um método muito mais fácil é configurar um token secreto e validar a informação.


### Definir seu token secreto

Você precisará configurar seu token secreto em dois lugares: no GitHub e no seu servidor.

Para definir seu token no GitHub:

1. Navegue até o repositório onde você está configurando seu webhook.
2. Preencha a caixa de texto do segredo. Use uma string aleatória com alta entropia (por exemplo, pegando a saída de `ruby -rsecurerandom -e 'puts SecureRandom.hex(20)'` no terminal). ![Campo de webhook e token secreto](/assets/images/webhook_secret_token.png)
3. Clique em **Atualizar o webhook**.

Em seguida, configure uma variável de ambiente em seu servidor que armazene este token. Normalmente, isso é tão simples quanto executar:

```shell
$ export SECRET_TOKEN=<em>your_token</em>
```

**Nunca** pré-programe o token no seu aplicativo!

### Validar cargas do GitHub

Ao definir o seu token secreto, o GitHub usa-o para criar uma assinatura de hash com cada carga.

Esta assinatura de hash é passada junto com cada solicitação nos cabeçalhos como `X-Hub-Signature`. Suponha que você tem um servidor básico que ouve webhooks que se parece com isto:

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  push = JSON.parse(params[:payload])
  "I got some JSON: #{push.inspect}"
end
```

O objetivo é calcular um hash usando seu `SECRET_TOKEN` e garantir que o hash do GitHub corresponda com esse. O GitHub usa um hexdigest de HMAC para calcular o hash para que você possa alterar seu servidor para ficar um pouco parecido com isto:

``` ruby
post '/payload' do
  request.body.rewind
  payload_body = request.body.read
  verify_signature(payload_body)
  push = JSON.parse(params[:payload])
  "I got some JSON: #{push.inspect}"
end

def verify_signature(payload_body)
  signature = 'sha1=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha1'), ENV['SECRET_TOKEN'], payload_body)
  return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature, request.env['HTTP_X_HUB_SIGNATURE'])
end
```

Obviamente, as implementações da sua linguagem e servidor podem ser diferentes deste código. No entanto, há duas coisas muito importantes a assinalar:

* Não importa qual implementação você usa, a assinatura de hash começa com `sha1=` e usa a chave de seu token secreto e seu texto de carga.

* Não **se recomenda** usar um operador simples de`==`. Um método como o [`secure_compare`][secure_compare] executa uma comparação de string de "tempo constante", que o protege de certos ataques em tempo útil contra operadores regulares da igualdade.

[secure_compare]: http://rubydoc.info/github/rack/rack/master/Rack/Utils.secure_compare
