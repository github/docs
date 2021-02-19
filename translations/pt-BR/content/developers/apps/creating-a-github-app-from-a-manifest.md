---
title: Criar um aplicativo do GitHub a partir de um manifesto
intro: 'Um manifesto do aplicativo GitHub é um aplicativo GitHub pré-configurado que você pode compartilhar com qualquer pessoa que queira usar seu aplicativo em seus repositórios pessoais. O fluxo do manifesto permite que alguém crie, instale, e comece a estender rapidamente um aplicativo GitHub sem a necessidade de registrar o aplicativo ou conectar o registro ao código do aplicativo hospedado.'
redirect_from:
  - /apps/building-github-apps/creating-github-apps-from-a-manifest
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


### Sobre os manifestos do aplicativo GitHub

Quando alguém cria um aplicativo GitHub a partir de um manifesto, é necessário apenas seguir uma URL e nomear o aplicativo. O manifesto inclui as permissões, eventos e URL do webhook necessários para registrar o aplicativo automaticamente. O fluxo do manifesto cria o registro do aplicativo GitHub e recupera o segredo do webhook do aplicativo, a chave privada (arquivo PEM) e o ID do aplicativo GitHub. A pessoa que cria o aplicativo a partir do manifesto será proprietária do aplicativo e poderá escolher [editar as configurações do aplicativo](/apps/managing-github-apps/modifying-a-github-app/), excluí-lo ou transferi-lo para outra pessoa no GitHub.

Você pode usar o [Probot](https://probot.github.io/) para começar com manifestos do aplicativo GitHub ou ver um exemplo de implementação. Consulte "[Usando o Probot para implementar o fluxo do manifesto do aplicativo GitHub](#using-probot-to-implement-the-github-app-manifest-flow)" para saber mais.

Aqui estão alguns cenários em que você pode usar manifestos do aplicativo GitHub para criar aplicativos pré-configurados:

* Ajude novos membros da equipe a familiarizar-se rapidamente ao desenvolver os aplicativos GitHub.
* Permita que outras pessoas estendam o aplicativo GitHub usando as APIs do GitHub sem exigir que configurem um aplicativo.
* Crie desenhos de referência do aplicativo GitHub para compartilhar com a comunidade do GitHub.
* Certifique-se de implementar os aplicativos GitHub em ambientes de desenvolvimento e produção usando a mesma configuração.
* Monitore as revisões de configuração do aplicativo GitHub.

### Implemente o fluxo do manifesto do aplicativo GitHub

O fluxo do manifesto do aplicativo GitHub usa um processo de handshaking semelhante ao [fluxo do OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/). O fluxo usa um manifesto para [registrar um aplicativo GitHub](/apps/building-github-apps/creating-a-github-app/) e recebe um `código temporário` usado para recuperar a chave privada do aplicativo, segredo de webhook e ID.

{% note %}

**Observação:** Você deve concluir todos os três passos do fluxo do manifesto do aplicativo GitHub dentro de uma hora.

{% endnote %}

Siga estas etapas para implementar o fluxo do Manifesto do aplicativo GitHub:

1. Você redireciona as pessoas para o GitHub para criar um novo aplicativo GitHub.
1. O GitHub redireciona as pessoas de volta para o seu site.
1. Você troca o código temporário para recuperar a configuração do aplicativo.

#### 1. Você redireciona as pessoas para o GitHub para criar um novo aplicativo GitHub

Para redirecionar as pessoas para criar um novo aplicativo GitHub, [fornece um link](#examples) para que cliquem que envia uma solicitação `POST` para `https://github. om/settings/apps/new` para uma conta de usuário ou `https://github. om/organizações/ORGANIZAÇÃO/configurações/apps/novo` para uma conta de organização substituindo `ORGANIZAÇÃO` pelo nome da conta da organização, em que o aplicativo será criado.

Você deve incluir os [parâmetros do manifesto do aplicativo GitHub](#github-app-manifest-parameters) como uma string codificada por JSON em um parâmetro denominado `manifesto`. Você também pode incluir um parâmetro `estado` [](#parameters) para segurança adicional.

A pessoa que está criando o aplicativo será redirecionada para uma página do GitHub com um campo de entrada em que poderá editar o nome do aplicativo que você incluiu no parâmetro do `manifesto`. Se você não incluir um `nome` no `manifesto`, será possível definir seu próprio nome para o aplicativo neste campo.

![Criar um manifesto do aplicativo GitHub](/assets/images/github-apps/create-github-app-manifest.png)

##### Parâmetros do manifesto do aplicativo GitHub

 | Nome                  | Tipo      | Descrição                                                                                                                                                                                                                                                     |
 | --------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | `name`                | `string`  | O nome do aplicativo GitHub.                                                                                                                                                                                                                                  |
 | `url`                 | `string`  | **Obrigatório.** A página inicial do seu aplicativo GitHub.                                                                                                                                                                                                   |
 | `hook_attributes`     | `objeto`  | A configuração do webhook do aplicativo GitHub.                                                                                                                                                                                                               |
 | `redirect_url`        | `string`  | A URL completa para onde redirecionar depois que a pessoa instalar o aplicativo GitHub.                                                                                                                                                                       |
 | `descrição`           | `string`  | Uma descrição do aplicativo GitHub.                                                                                                                                                                                                                           |
 | `público`             | `boolean` | Defina como `verdadeiro` quando o seu aplicativo GitHub estiver disponível para o público ou `falso` quando for acessível somente pelo proprietário do aplicativo.                                                                                            |
 | `default_events`      | `array`   | Lista de [eventos](/webhooks/event-payloads) assinada pelo aplicativo GitHub.                                                                                                                                                                                 |
 | `default_permissions` | `objeto`  | O conjunto de [permissões](/rest/reference/permissions-required-for-github-apps) exigido pelo aplicativo GitHub. O formato do objeto usa o nome de permissão para a chave (por exemplo, `problemas`) e o tipo de acesso para o valor (por exemplo, `gravar`). |

O objeto `hook_attributes` tem a chave a seguir:

| Nome    | Tipo      | Descrição                                                                          |
| ------- | --------- | ---------------------------------------------------------------------------------- |
| `url`   | `string`  | **Obrigatório.** A URL do servidor que receberá as solicitações `POST` do webhook. |
| `ativo` | `boolean` | Implementar detalhes do evento quando esse hook é acionado. O padrão é verdadeiro. |

##### Parâmetros

 | Nome     | Tipo     | Descrição                                   |
 | -------- | -------- | ------------------------------------------- |
 | `estado` | `string` | {% data reusables.apps.state_description %}

##### Exemplos

Este exemplo usa um formulário em uma página web com um botão que aciona a solicitação `POST` para uma conta de usuário:

```html
<form action="https://github.com/settings/apps/new?state=abc123" method="post">
 Criar um manifesto do aplicativo GitHub: <input type="text" name="manifest" id="manifest"><br>
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
   "redirect_url": "https://example.com/callback",
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
Este exemplo usa um formulário em uma página web com um botão que aciona a solicitação `POST` para uma conta da organização. Substitua `ORGANIZAÇÃO` pelo nome da conta da organização em que você deseja criar o aplicativo.

```html
<form action="https://github.com/organizations/<em>ORGANIZATION</em>/settings/apps/new?state=abc123" method="post">
 Criar um manifesto do aplicativo GitHub: <input type="text" name="manifest" id="manifest"><br>
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
   "redirect_url": "https://example.com/callback",
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

#### 2. O GitHub redireciona as pessoas de volta para o seu site

Quando a pessoa clica em **Criar aplicativo GitHub**, O GitHub redireciona para o `redirect_url` com um `código` temporário em um parâmetro de código. Por exemplo:

    https://example.com/callback?code=a180b1a3d263c81bc6441d7b990bae27d4c10679

Se você forneceu um parâmetro `estado`, você também verá esse parâmetro em `redirect_url`. Por exemplo:

    https://example.com/callback?code=a180b1a3d263c81bc6441d7b990bae27d4c10679&state=abc123

#### 3. Você troca o código temporário para recuperar a configuração do aplicativo

Para concluir o handshake, enviar o código temporário `` em uma solicitação `POST` para [Criar um aplicativo GitHub a partir do ponto de extremidade](/rest/reference/apps#create-a-github-app-from-a-manifest) de um manifesto. A resposta incluirá o `id` (ID do aplicativo GitHub), `pem` (chave privada) e `webhook_secret`. O GitHub cria um segredo webhook para o aplicativo automaticamente. Você pode armazenar esses valores em variáveis de ambiente no servidor do aplicativo. Por exemplo, se o aplicativo usar [dotenv](https://github.com/bkeepers/dotenv) para armazenar variáveis de ambiente, você armazenará as variáveis no arquivo `.env` do seu aplicativo.

Você deve concluir esta etapa do fluxo do manifesto do aplicativo GitHub em uma hora.

{% note %}

**Observação:** Esse ponto final tem limite de taxa. Consulte [Limites de taxa](/rest/reference/rate-limit) para saber como obter seu status atual do limite de taxa.

{% endnote %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %}
{% data reusables.pre-release-program.fury-pre-release %}
{% data reusables.pre-release-program.api-preview-warning %}
{% endif %}

    POST /app-manifests/:code/conversions

Para obter mais informações sobre a resposta do ponto de extremidade, consulte [Criar um aplicativo GitHub a partir de um manifesto](/rest/reference/apps#create-a-github-app-from-a-manifest).

Quando a etapa final do fluxo de manifesto for concluída, a pessoa que estiver criando o aplicativo a partir do fluxo será proprietária de um aplicativo GitHub registrado e poderá instalar em qualquer um dos seus repositórios pessoais. A pessoa pode optar por estender o aplicativo usando as APIs do GitHub, transferir a propriedade para outra pessoa ou excluí-lo a qualquer momento.

### Usar o Probot para implementar o fluxo de manifesto do aplicativo GitHub

[Probot](https://probot.github.io/) é uma estrutura construído com [Node.js](https://nodejs.org/) que realiza muitas das tarefas necessárias para todos os aplicativos GitHub, como, por exemplo, validar webhooks e efetuar a autenticação. O Probot implementa [fluxo do manifesto do aplicativo GitHub](#implementing-the-github-app-manifest-flow), facilitando a criação e o compartilhamento dos designs de referência do aplicativo GitHub com a comunidade do GitHub.

Para criar um aplicativo Probot que você pode compartilhar, siga estas etapas:

1. [Gerar um novo aplicativo GitHub](https://probot.github.io/docs/development/#generating-a-new-app).
1. Abra o projeto que você criou e personalize as configurações no arquivo `app.yml`. O Probot usa as configurações no `app.yml` como [parâmetros do manifesto do aplicativo GitHub](#github-app-manifest-parameters).
1. Adicione o código personalizado do seu aplicativo.
1. [Execute o aplicativo GitHub localmente](https://probot.github.io/docs/development/#running-the-app-locally) ou [hospede-o em qualquer lugar que desejar](#hosting-your-app-with-glitch). Ao acessar a URL do aplicativo hospedado, você encontrará uma página web com o botão de **Registrar o aplicativo GitHub**, em que as pessoas podem clicar para criar um aplicativo pré-configurado. A página abaixo é a implementação do Probot da [etapa 1](#1-you-redirect-people-to-github-to-create-a-new-github-app) no fluxo do manifesto do aplicativo GitHub:

![Registrar um aplicativo GitHub do Probot](/assets/images/github-apps/github_apps_probot-registration.png)

Ao usar [dotenv](https://github.com/bkeepers/dotenv), o Probot cria um arquivo `.env` e define o `APP_ID`, a `PRIVATE_KEY`, e as variáveis de ambiente `WEBHOOK_SECRET` com os valores [recuperados da configuração do aplicativo](#3-you-exchange-the-temporary-code-to-retrieve-the-app-configuration).

#### Hospedar seu aplicativo com Glitch

Você pode ver um [exemplo do aplicativo Probot](https://glitch.com/~auspicious-aardwolf) que usa o [Glitch](https://glitch.com/) para hospedar e compartilhar o aplicativo. O exemplo usa a [API de verificação](/rest/reference/checks) e seleciona as verificações e permissões necessárias dos eventos da API e no arquivo `app.yml`. Glitch é uma ferramenta que permite que você "mescle seus próprios aplicativos". Mesclar um aplicativo cria uma cópia do aplicativo que a Glitch hospeda e implementa. Consulte "[Sobre a Glitch](https://glitch.com/about/)" para aprender sobre como mesclar aplicativos Glitch.
