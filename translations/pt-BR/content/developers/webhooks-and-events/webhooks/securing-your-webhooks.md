---
title: Protegendo seus webhooks
intro: 'Certifique-se de que seu servidor só esteja recebendo as solicitações esperadas do {% data variables.product.prodname_dotcom %} por motivos de segurança.'
redirect_from:
  - /webhooks/securing
  - /developers/webhooks-and-events/securing-your-webhooks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Webhooks
---

Assim que seu servidor estiver configurado para receber cargas, ele ouvirá qualquer carga enviada para o ponto de extremidade que você configurou. Por motivos de segurança, você provavelmente vai querer limitar os pedidos para aqueles provenientes do GitHub. Existem algumas maneiras de fazer isso. Você poderia, por exemplo, optar por permitir solicitações do endereço IP do GitHub. No entanto, um método muito mais fácil é configurar um token secreto e validar a informação.

{% data reusables.webhooks.webhooks-rest-api-links %}

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

Quando seu token secreto está definido, {% data variables.product.product_name %} o utiliza para criar uma assinatura de hash com cada carga. Esta assinatura hash está incluída com os cabeçalhos de cada solicitação como {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 2" ou currentVersion == "github-ae@latest" %}`X-Hub-Signature-256`{% elsif currentVersion ver_lt "enterprise-server@2.23" %}`X-Hub-Signature`{% endif %}.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
{% note %}

**Observação:** Para compatibilidade com versões anteriores, também incluímos o cabeçalho `X-Hub-Signature` gerado usando a função de hash SHA-1. Se possível, recomendamos que você use o cabeçalho `X-Hub-Signature-256` para melhorar a segurança. O exemplo abaixo demonstra o uso do cabeçalho `X-Hub-Signature-256`.

{% endnote %}
{% endif %}

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

O objetivo é calcular um hash usando seu `SECRET_TOKEN` e garantir que o resultado corresponda ao hash de {% data variables.product.product_name %}. {% data variables.product.product_name %} usa um resumo hexadecimal HMAC para calcular o hash. Portanto, você pode reconfigurar o seu servidor para que se pareça mais ou menos assim:

``` ruby
post '/payload' do
  request.body.rewind
  payload_body = request.body.read
  verify_signature(payload_body)
  push = JSON.parse(payload_body)
  "I got some JSON: #{push.inspect}"
end

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
def verify_signature(payload_body)
  signature = 'sha256=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha256'), ENV['SECRET_TOKEN'], payload_body)
  return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature, request.env['HTTP_X_HUB_SIGNATURE_256'])
end{% elsif currentVersion ver_lt "enterprise-server@2.23" %}
def verify_signature(payload_body)
  signature = 'sha1=' + OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new('sha1'), ENV['SECRET_TOKEN'], payload_body)
  return halt 500, "Signatures didn't match!" unless Rack::Utils.secure_compare(signature, request.env['HTTP_X_HUB_SIGNATURE'])
end{% endif %}
```

{% note %}

**Observação:** As cargas de webhook podem conter caracteres de unicode. Se o seu idioma e a implementação de servidor especificarem uma codificação de caracteres, certifique-se de que você manipula a carga como UTF-8.

{% endnote %}

A sua linguagem e implementações do servidor podem ser diferentes deste código de exemplo. No entanto, há uma série de aspectos muito importantes a destacar:

* Não importa qual implementação você usar, a assinatura hash começa com {% if currentVersion == "free-pro-team@latest" ou currentVersion ver_gt "enterprise-server@2. 2" or "github-ae@latest" %}`sha256=`{% elsif currentVersion ver_lt "enterprise-server@2. 3" %}`sha1=`{% endif %}, usando a chave do seu token secreto e o seu texto de carga.

* Não **se recomenda** usar um operador simples de`==`. Um método como [`secure_compare`][secure_compare] executa uma comparação de strings "tempo constante", o que ajuda a mitigar certos ataques de tempo contra operadores de igualdade regular.

[secure_compare]: https://rubydoc.info/github/rack/rack/master/Rack/Utils:secure_compare
