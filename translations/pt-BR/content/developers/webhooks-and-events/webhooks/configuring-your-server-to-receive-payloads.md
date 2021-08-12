---
title: Configurar seu servidor para receber cargas
intro: Aprenda a configurar um servidor para gerenciar as cargas de webhook recebidas.
redirect_from:
  - /webhooks/configuring
  - /developers/webhooks-and-events/configuring-your-server-to-receive-payloads
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Webhooks
---

Agora que nosso webhook está pronto para enviar mensagens, vamos configurar um servidor do Sinatra básico para gerenciar as cargas recebidas.

{% note %}

**Observação:** Você pode fazer o download do código-fonte completo para este projeto [no repositório de amostras de plataforma][platform samples].

{% endnote %}

### Escrevendo o servidor

Queremos que nosso servidor escute as solicitações de `POST`, em `/payload`, porque foi onde informamos ao GitHub que era a nossa URL. Uma vez que estamos usando ngrok para expor o nosso ambiente local, não precisamos configurar um servidor real on-line, e é possível testar tranquilamente o nosso código localmente.

Vamos configurar um pouco o aplicativo Sinatra para fazer algo com as informações. Nossa configuração inicial do a configuração pode parecer como isso:

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  push = JSON.parse(request.body.read)
  puts "I got some JSON: #{push.inspect}"
end
```

(Se você não estiver familiarizado com a forma como Sinatra funciona, recomendamos [a leitura do guia do Sinatra][Sinatra].)

Inicie este servidor.

Desde que configuramos nosso webhook para ouvir eventos que gerenciam `Problemas`, siga em frente e crie uma novo problema no repositório que você está testando. Depois de criar, volte para o terminal. Você deve ver algo assim em sua saída:

```shell
$ ~/Developer/platform-samples/hooks/ruby/configuring-your-server $ ruby server.rb
> == Sinatra/1.4.4 has taken the stage on 4567 for development with backup from Thin
> >> Thin web server (v1.5.1 codename Straight Razor)
> >> Maximum connections set to 1024
> >> Listening on localhost:4567, CTRL+C to stop
> I got some JSON: {"action"=>"opened", "issue"=>{"url"=>"...
```

Sucesso! Você configurou seu servidor com sucesso para ouvir webhooks. Seu servidor agora pode processar essas informações da forma que você achar melhor. Por exemplo, se você estiver configurando um aplicativo web "real", é possível que você queira registrar uma parte da saída do JSON em uma base de dados.

Para obter informações adicionais sobre como trabalhar com webhooks e divertir-se e lucrar, acesse o guia [Testando webhooks](/webhooks/testing).

[platform samples]: https://github.com/github/platform-samples/tree/master/hooks/ruby/configuring-your-server
[Sinatra]: http://www.sinatrarb.com/
