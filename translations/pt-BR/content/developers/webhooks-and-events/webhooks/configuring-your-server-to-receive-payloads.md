---
title: Configurar seu servidor para receber cargas
intro: Aprenda a configurar um servidor para gerenciar as cargas de webhook recebidas.
redirect_from:
  - /webhooks/configuring
  - /developers/webhooks-and-events/configuring-your-server-to-receive-payloads
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
shortTitle: Configure server for webhooks
ms.openlocfilehash: c306cadf4dd8d9cd573d694419a51179c8995797
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132976'
---
Agora que nosso webhook está pronto para entregar mensagens, vamos configurar um servidor do Sinatra básico para processar o conteúdo recebido.

{% note %}

**Observação:** baixe o código-fonte completo deste projeto [no repositório platform-samples][platform samples].

{% endnote %}

## Escrevendo o servidor

Queremos que nosso servidor ouça as solicitações `POST`, em `/payload`, porque foi nele que informamos ao GitHub a URL de webhook. Como você usou o `ngrok` para expor o ambiente local, não precisa configurar um servidor real em algum lugar online e pode testar o código localmente.

Vamos configurar um pouco o aplicativo Sinatra para fazer algo com as informações. Nossa configuração inicial 
pode ficar parecida com esta:

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  push = JSON.parse(request.body.read)
  puts "I got some JSON: #{push.inspect}"
end
```

(Se você não estiver familiarizado com o funcionamento do Sinatra, recomendamos [ler o guia do Sinatra][Sinatra]).

Inicie este servidor.

Como configuramos o webhook para ouvir os eventos que processam `Issues`, vá em frente e crie um problema no repositório com o qual você está testando. Depois de criá-lo, volte ao terminal. Você deve ver algo assim em sua saída:

```shell
$ ~/Developer/platform-samples/hooks/ruby/configuring-your-server $ ruby server.rb
> == Sinatra/1.4.4 has taken the stage on 4567 for development with backup from Thin
> >> Thin web server (v1.5.1 codename Straight Razor)
> >> Maximum connections set to 1024
> >> Listening on localhost:4567, CTRL+C to stop
> I got some JSON: {"action"=>"opened", "issue"=>{"url"=>"...
```

Sucesso! Você configurou seu servidor com sucesso para ouvir webhooks. O servidor já pode processar essas informações da forma que você achar melhor. Por exemplo, se você estiver configurando um aplicativo Web "real", o ideal será registrar em log uma parte da saída JSON em um banco de dados.

Para obter mais informações sobre como trabalhar com webhooks por diversão e para ganhar dinheiro, acesse o guia [Como testar webhooks](/webhooks/testing).

[platform samples]: https://github.com/github/platform-samples/tree/master/hooks/ruby/configuring-your-server
[Sinatra]: http://www.sinatrarb.com/
