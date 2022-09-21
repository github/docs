---
title: Usar um servidor proxy com os executores auto-hospedados
intro: 'Você pode configurar executores auto-hospedados para usar um servidor proxy para comunicar-se com {% data variables.product.product_name %}.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Proxy servers
ms.openlocfilehash: e6c9d36b052627726f73f6a07d989a192cd1e738
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084170'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Configurar um servidor proxy usando variáveis de ambiente

Se você precisar de um executor auto-hospedado para comunicar-se por meio de um servidor proxy, o aplicativo do executor auto-hospedado usará as configurações proxy definidas nas variáveis do ambiente a seguir:

* `https_proxy`: URL de proxy para o tráfego HTTPS. Se necessário, você também poderá incluir credenciais de autenticação básica. Por exemplo:
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `http_proxy`: URL de proxy para o tráfego HTTP. Se necessário, você também poderá incluir credenciais de autenticação básica. Por exemplo:
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `no_proxy`: lista separada por vírgula de hosts que não devem usar um proxy. Somente os nomes de host são permitidos no `no_proxy`, você não pode usar endereços IP. Por exemplo:
  * `example.com`
  * `example.com,myserver.local:443,example.org`

As variáveis do ambiente proxy são lidas quando o aplicativo do executor auto-hospedado inicia. Portanto, você deve definir as variáveis do ambiente antes de configurar ou iniciar o aplicativo do executor auto-hospedado. Se sua configuração de proxy for mudada, você deverá reiniciar o aplicativo executor auto-hospedado.

No Windows, os nomes da variável do ambiente proxy não diferenciam maiúsculas de minúsculas. Nos sistemas Linux e macOS, recomendamos que você use variáveis de ambiente em minúscula. Caso tenha uma variável de ambiente em letras minúsculas e maiúsculas no Linux ou macOS (por exemplo, `https_proxy` e `HTTPS_PROXY`), o aplicativo executor auto-hospedado usará a variável de ambiente em minúsculas.

{% data reusables.actions.self-hosted-runner-ports-protocols %}

## Usar um arquivo .env para definir a configuração de proxy

Se não for prático definir as variáveis de ambiente, defina as variáveis da configuração de proxy em um arquivo chamado _.env_ no diretório do aplicativo do executor auto-hospedado. Por exemplo, isso pode ser necessário se você desejar configurar um aplicativo executor como um serviço em uma conta de sistema. Quando o aplicativo do executor é iniciado, ele lê as variáveis definidas em _.env_ para a configuração de proxy.

Um exemplo de configuração de proxy de _.env_ é mostrado abaixo:

```ini
https_proxy=http://proxy.local:8080
no_proxy=example.com,myserver.local:443
```

## Definir configuração de proxy para contêineres Docker

Se você usar ações do contêiner Dock ou contêineres de serviço nos seus fluxos de trabalho, você também deverá configurar o Docker para usar o seu servidor proxy além de definir as variáveis do ambiente acima.

Para obter informações sobre a configuração necessária do Docker, confira "[Configurar o Docker para usar um servidor proxy](https://docs.docker.com/network/proxy/)" na documentação do Docker.
