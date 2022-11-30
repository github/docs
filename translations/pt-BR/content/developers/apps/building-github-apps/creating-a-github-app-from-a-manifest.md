---
title: Criar um aplicativo do GitHub a partir de um manifesto
intro: 'Um manifesto do aplicativo GitHub é um aplicativo GitHub pré-configurado que você pode compartilhar com qualquer pessoa que queira usar seu aplicativo em seus repositórios pessoais. O fluxo do manifesto permite que alguém crie, instale, e comece a estender rapidamente um aplicativo GitHub sem a necessidade de registrar o aplicativo ou conectar o registro ao código do aplicativo hospedado.'
redirect_from:
  - /apps/building-github-apps/creating-github-apps-from-a-manifest
  - /developers/apps/creating-a-github-app-from-a-manifest
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: App creation manifest flow
ms.openlocfilehash: 9ff6fa93e0f31de16e6ee2d96f1d7665742151d3
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135702'
---
## Sobre os manifestos do aplicativo GitHub

Quando alguém cria um aplicativo GitHub a partir de um manifesto, é necessário apenas seguir uma URL e nomear o aplicativo. O manifesto inclui as permissões, eventos e URL do webhook necessários para registrar o aplicativo automaticamente. O fluxo do manifesto cria o registro do aplicativo GitHub e recupera o segredo do webhook do aplicativo, a chave privada (arquivo PEM) e o ID do aplicativo GitHub. A pessoa que cria o aplicativo com base no manifesto será o proprietário do aplicativo e poderá optar por [editar as configurações do aplicativo](/apps/managing-github-apps/modifying-a-github-app/), excluí-lo ou transferi-lo para outra pessoa no GitHub.

Use o [Probot](https://probot.github.io/) para começar a usar os Manifestos de Aplicativo do GitHub ou ver um exemplo de implementação. Confira "[Como usar o Probot para implementar o fluxo do Manifesto do Aplicativo do GitHub](#using-probot-to-implement-the-github-app-manifest-flow)" para saber mais.

Aqui estão alguns cenários em que você pode usar manifestos do aplicativo GitHub para criar aplicativos pré-configurados:

* Ajude novos membros da equipe a familiarizar-se rapidamente ao desenvolver os aplicativos GitHub.
* Permita que outras pessoas estendam o aplicativo GitHub usando as APIs do GitHub sem exigir que configurem um aplicativo.
* Crie desenhos de referência do aplicativo GitHub para compartilhar com a comunidade do GitHub.
* Certifique-se de implementar os aplicativos GitHub em ambientes de desenvolvimento e produção usando a mesma configuração.
* Monitore as revisões de configuração do aplicativo GitHub.

## Implemente o fluxo do manifesto do aplicativo GitHub

O fluxo do Manifesto do Aplicativo do GitHub usa um processo de handshake semelhante ao [fluxo OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/). O fluxo usa um manifesto para [registrar um Aplicativo do GitHub](/apps/building-github-apps/creating-a-github-app/) e recebe um `code` temporário usado para recuperar a chave privada, o segredo do webhook e a ID do aplicativo.

{% note %}

**Observação:** você precisa concluir as três etapas do fluxo do Manifesto do Aplicativo do GitHub em uma hora.

{% endnote %}

Siga estas etapas para implementar o fluxo do Manifesto do aplicativo GitHub:

1. Você redireciona as pessoas para o GitHub para criar um novo aplicativo GitHub.
1. O GitHub redireciona as pessoas de volta para o seu site.
1. Você troca o código temporário para recuperar a configuração do aplicativo.

### 1. Você redireciona as pessoas para o GitHub para criar um Aplicativo do GitHub

Para redirecionar as pessoas para criar um Aplicativo do GitHub, [forneça um link](#examples) para elas que envia uma solicitação `POST` em `https://github.com/settings/apps/new` para uma conta pessoal ou `https://github.com/organizations/ORGANIZATION/settings/apps/new` para uma conta de organização, substituindo `ORGANIZATION` pelo nome da conta de organização em que o aplicativo será criado.

Você precisa incluir os [parâmetros do Manifesto do Aplicativo do GitHub](#github-app-manifest-parameters) como uma cadeia de caracteres codificada em JSON em um parâmetro chamado `manifest`. Você também pode incluir um `state`[parâmetro](#parameters) para segurança adicional.

A pessoa que está criando o aplicativo será redirecionada para uma página do GitHub com um campo de entrada, em que poderá editar o nome do aplicativo que você incluiu no parâmetro `manifest`. Se você não incluir um `name` no `manifest`, ela poderá definir o nome dela para o aplicativo nesse campo.

![Criar um manifesto do aplicativo GitHub](/assets/images/github-apps/create-github-app-manifest.png)

#### Parâmetros do manifesto do aplicativo GitHub

 Nome | Tipo | Descrição
-----|------|-------------
`name` | `string` | O nome do aplicativo GitHub.
`url` | `string` | **Necessário.** A home page do seu Aplicativo do GitHub.
`hook_attributes` | `object` | A configuração do webhook do aplicativo GitHub.
`redirect_url` | `string` | O URL completo para o qual fazer o redirecionamento após um usuário iniciar a criação de um aplicativo GitHub a partir de um manifesto.
`callback_urls` | `array of strings` | Uma URL completa para a qual redirecionar após alguém autorizar uma instalação. Você pode fornecer até 10 URLs de retorno de chamada.
`setup_url` | `string` | Uma URL completa para redirecionar os usuários após a instalação do aplicativo GitHub, caso seja necessária uma configuração adicional.
`description` | `string` | Uma descrição do aplicativo GitHub.
`public` | `boolean` | Defina-o como `true` quando seu Aplicativo do GitHub estiver disponível para o público ou `false` quando ele só estiver acessível ao proprietário do aplicativo.
`default_events` | `array` | A lista de [eventos](/webhooks/event-payloads) nos quais o Aplicativo do GitHub se inscreveu.
`default_permissions` | `object` | O conjunto de [permissões](/rest/reference/permissions-required-for-github-apps) necessário para o Aplicativo do GitHub. O formato do objeto usa o nome da permissão para a chave (por exemplo, `issues`) e o tipo de acesso para o valor (por exemplo, `write`).

O objeto `hook_attributes` tem a seguinte chave:

Nome | Tipo | Descrição
-----|------|-------------
`url` | `string` | **Necessário.** A URL do servidor que receberá as solicitações `POST` de webhook.
`active` | `boolean` | Implementar detalhes do evento quando esse hook é acionado. O padrão é verdadeiro.

#### Parâmetros

 Nome | Tipo | Descrição
-----|------|-------------
`state`| `string` | {% data reusables.apps.state_description %}

#### Exemplos

Este exemplo usa um formulário em uma página da Web com um botão que dispara a solicitação `POST` para uma conta pessoal:

```html
<form action="https://github.com/settings/apps/new?state=abc123" method="post">
 Create a GitHub App Manifest: <input type="text" name="manifest" id="manifest"><br>
 <input type="submit" value="Submit">
</form>

<script>
 input = document.getElementById("manifest")
 input.value = JSON.stringify({
   "name": "Octoapp",
   "url": "https://www.example.com",
   "hook_attributes": {
     "url": "https://example.com/github/events",
   },
   "redirect_url": "https://example.com/redirect",
   "callback_urls": [
     "https://example.com/callback"
   ],
   "public": true,
   "default_permissions": {
     "issues": "write",
     "checks": "write"
   },
   "default_events": [
     "issues",
     "issue_comment",
     "check_suite",
     "check_run"
   ]
 })
</script>
```

Este exemplo usa um formulário em uma página da Web com um botão que dispara a solicitação `POST` para uma conta de organização. Substitua `ORGANIZATION` pelo nome da conta de organização em que deseja criar o aplicativo.

```html
<form action="https://github.com/organizations/ORGANIZATION/settings/apps/new?state=abc123" method="post">
 Create a GitHub App Manifest: <input type="text" name="manifest" id="manifest"><br>
 <input type="submit" value="Submit">
</form>

<script>
 input = document.getElementById("manifest")
 input.value = JSON.stringify({
   "name": "Octoapp",
   "url": "https://www.example.com",
   "hook_attributes": {
     "url": "https://example.com/github/events",
   },
   "redirect_url": "https://example.com/redirect",
   "callback_urls": [
     "https://example.com/callback"
   ],
   "public": true,
   "default_permissions": {
     "issues": "write",
     "checks": "write"
   },
   "default_events": [
     "issues",
     "issue_comment",
     "check_suite",
     "check_run"
   ]
 })
</script>
```

### 2. O GitHub redireciona as pessoas novamente para o seu site

Quando a pessoa clica em **Criar Aplicativo do GitHub**, o GitHub redireciona-a novamente para a `redirect_url` com um `code` temporário em um parâmetro de código. Por exemplo:

    https://example.com/redirect?code=a180b1a3d263c81bc6441d7b990bae27d4c10679

Se você fornecer um parâmetro `state`, também verá esse parâmetro na `redirect_url`. Por exemplo:

    https://example.com/redirect?code=a180b1a3d263c81bc6441d7b990bae27d4c10679&state=abc123

### 3. Você troca o código temporário para recuperar a configuração do aplicativo

Para concluir o handshake, envie o `code` temporário em uma solicitação `POST` ao ponto de extremidade [Criar um Aplicativo do GitHub por meio de um manifesto](/rest/reference/apps#create-a-github-app-from-a-manifest). A resposta incluirá a `id` (ID do Aplicativo do GitHub), a `pem` (a chave privada) e o `webhook_secret`. O GitHub cria um segredo webhook para o aplicativo automaticamente. Você pode armazenar esses valores em variáveis de ambiente no servidor do aplicativo. Por exemplo, se o seu aplicativo usar o [dotenv](https://github.com/bkeepers/dotenv) para armazenar variáveis de ambiente, você armazenará as variáveis no arquivo `.env` do aplicativo.

Você deve concluir esta etapa do fluxo do manifesto do aplicativo GitHub em uma hora.

{% note %}

**Observação:** esse ponto de extremidade tem limite de taxa. Confira [Limites de taxa](/rest/reference/rate-limit) para saber como obter o status do limite de taxa atual.

{% endnote %}

    POST /app-manifests/{code}/conversions

Para obter mais informações sobre a resposta do ponto de extremidade, confira [Criar um Aplicativo do GitHub com base em um manifesto](/rest/reference/apps#create-a-github-app-from-a-manifest).

Quando a etapa final do fluxo de manifesto for concluída, a pessoa que estiver criando o aplicativo a partir do fluxo será proprietária de um aplicativo GitHub registrado e poderá instalar em qualquer um dos seus repositórios pessoais. A pessoa pode optar por estender o aplicativo usando as APIs do GitHub, transferir a propriedade para outra pessoa ou excluí-lo a qualquer momento.

## Usar o Probot para implementar o fluxo de manifesto do aplicativo GitHub

O [Probot](https://probot.github.io/) é uma estrutura criada com o [Node.js](https://nodejs.org/) que executa muitas das tarefas necessárias para todos os Aplicativos do GitHub, como validar webhooks e realizar a autenticação. Ele implementa o [fluxo de manifesto do Aplicativo do GitHub](#implementing-the-github-app-manifest-flow), facilitando a criação e o compartilhamento de designs de referência do Aplicativo do GitHub com a comunidade do GitHub.

Para criar um aplicativo Probot que você pode compartilhar, siga estas etapas:

1. [Gerar um novo Aplicativo do GitHub](https://probot.github.io/docs/development/#generating-a-new-app).
1. Abra o projeto que você criou e personalize as configurações no arquivo `app.yml`. O Probot usa as configurações em `app.yml` como os [parâmetros do Manifesto do Aplicativo do GitHub](#github-app-manifest-parameters).
1. Adicione o código personalizado do seu aplicativo.
1. [Executar o Aplicativo do GitHub localmente](https://probot.github.io/docs/development/#running-the-app-locally) ou [hospedá-lo em qualquer lugar desejado](#hosting-your-app-with-glitch). Ao navegar até a URL do aplicativo hospedado, você encontrará uma página da Web com um botão **Registrar um Aplicativo do GitHub**, em que as pessoas podem clicar para criar um aplicativo pré-configurado. A página da Web abaixo é a implementação do Probot da [etapa 1](#1-you-redirect-people-to-github-to-create-a-new-github-app) no fluxo do Manifesto do Aplicativo do GitHub:

![Registrar um aplicativo GitHub do Probot](/assets/images/github-apps/github_apps_probot-registration.png)

Usando o [dotenv](https://github.com/bkeepers/dotenv), o Probot cria um arquivo `.env` e define as variáveis de ambiente `APP_ID`, `PRIVATE_KEY` e `WEBHOOK_SECRET` com os valores [recuperados da configuração do aplicativo](#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration).

### Hospedar seu aplicativo com Glitch

Veja um [exemplo de aplicativo do Probot](https://glitch.com/~auspicious-aardwolf) que usa o [Glitch](https://glitch.com/) para hospedar e compartilhar o aplicativo. O exemplo usa a [API de Verificações](/rest/reference/checks) e seleciona as permissões e os eventos da API de Verificações necessários no arquivo `app.yml`. Glitch é uma ferramenta que permite que você "mescle seus próprios aplicativos". Mesclar um aplicativo cria uma cópia do aplicativo que a Glitch hospeda e implementa. Confira "[Sobre o Glitch](https://glitch.com/about/)" para saber mais sobre como remixar aplicativos do Glitch.
