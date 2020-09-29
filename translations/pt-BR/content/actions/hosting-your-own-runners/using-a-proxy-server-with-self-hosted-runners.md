---
title: Usar um servidor proxy com executores auto-hospedados
intro: 'Você pode configurar executores auto-hospedados para usar um servidor proxy para comunicar-se com {% data variables.product.product_name %}.'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### Configurar um servidor proxy usando variáveis de ambiente

Se você precisar de um executor auto-hospedado para comunicar-se por meio de um servidor proxy, o aplicativo do executor auto-hospedado usará as configurações proxy definidas nas variáveis do ambiente a seguir:

* `https_proxy`: URL Proxy para tráfego HTTPS. Se necessário, você também poderá incluir credenciais de autenticação básica. Por exemplo:
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `http_proxy`: URL proxy para tráfego HTTP. Se necessário, você também poderá incluir credenciais de autenticação básica. Por exemplo:
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `no_proxy`: Listas de hosts separados vírgula que não devem usar um proxy. São permitidos apenas nomes de host em `no_proxy`. Você não pode usar endereços IP. Por exemplo:
  * `example.com`
  * `example.com,myserver.local:443,example.org`

As variáveis do ambiente proxy são lidas quando o aplicativo do executor auto-hospedado inicia. Portanto, você deve definir as variáveis do ambiente antes de configurar ou iniciar o aplicativo do executor auto-hospedado. Se a sua configuração de proxy for alterada, você deverá reiniciar o aplicativo do executor auto-hospedado.

No Windows, os nomes da variável do ambiente proxy não diferenciam maiúsculas de minúsculas. Nos sistemas Linux e macOS, recomendamos que você use variáveis de ambiente em minúscula. Se você tiver uma variável de ambiente tanto maiúscula quanto minúscula no Linux ou macOS, como, por exemplo `https_proxy` e `HTTPS_PROXY`, o aplicativo executor auto-hospedado usará a variável minúscula do ambiente.

### Usar um arquivo .env para definir a configuração de proxy

Se não for prático definir as variáveis do ambiente, você poderá definir as variáveis da configuração de proxy em um arquivo de nome _.env_ no diretório do aplicativo do executor auto-hospedado. Por exemplo, isso pode ser necessário se você desejar configurar um aplicativo executor como um serviço em uma conta de sistema. Quando o aplicativo executor é iniciado, ele lerá as variáveis definidas em _.env_ para a configuração de proxy.

Um exemplo de configuração de proxy _.env_ é mostrado abaixo:

```
https_proxy=http://proxy.local:8080
no_proxy=example.com,myserver.local:443
```

### Definir configuração de proxy para contêineres Docker

Se você usar ações do contêiner Dock ou contêineres de serviço nos seus fluxos de trabalho, você também deverá configurar o Docker para usar o seu servidor proxy além de definir as variáveis do ambiente acima.

Para obter mais informações sobre a configuração do Docker necessária, consulte "[Configurar Docker para usar um servidor proxy](https://docs.docker.com/network/proxy/)" no documento do Docker.
