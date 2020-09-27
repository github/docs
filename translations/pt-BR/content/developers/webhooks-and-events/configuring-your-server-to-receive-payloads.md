---
title: Configurar seu servidor para receber cargas
intro: Aprenda a configurar um servidor para gerenciar as cargas de webhook recebidas.
redirect_from:
  - /webhooks/configuring
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---



Agora que nosso webhook está pronto para enviar mensagens, vamos configurar um servidor do Sinatra básico para gerenciar as cargas recebidas.

Lembre-se de que definimos especificamente nossa URL de webhook como `http://localhost:4567/payload`. Uma vez que estamos desenvolvendo localmente, precisamos expor nosso ambiente de desenvolvimento local à internet, para que o GitHub possa enviar mensagens e nosso servidor local possa processá-las.

Observação: você pode baixar o código-fonte completo para este projeto [no repositório de amostra de plataforma][platform samples].

### Usando o ngrok

Primeiro, vamos instalar um programa para expor nosso host local à internet. Nós usaremos o ngrok para fazer isso. [ngrok é um download grátis](https://ngrok.com/download), disponível para todos os principais sistemas operacionais.

Após concluir essa etapa, você poderá expor seu host local, executando `./ngrok http 4567` na linha de comando. Você deve ver uma linha parecida mais ou menos com isso:

```shell
$ Forwarding    http://7e9ea9dc.ngrok.io -> 127.0.0.1:4567
```

Copie essa URL `*.ngrok.io` estranha! Estamos agora *retornando* para a URL da carga e colando este servidor nesse campo. Deve parecer como `http://7e9ea9dc.ngrok.io/payload`.

Ao fazer isso, nós nos preparamos para expor nosso host local no caminho `/payload` para a internet.

### Escrevendo o servidor

Agora vem a parte divertida! Queremos que nosso servidor escute as solicitações de `POST`, em `/payload`, porque foi onde informamos ao GitHub que era a nossa URL. Já que o ngrok está expondo o nosso ambiente local. não precisamos configurar um servidor real on-line e podemos testar felizmente o nosso código localmente.

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
