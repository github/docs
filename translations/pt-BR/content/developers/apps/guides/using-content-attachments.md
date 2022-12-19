---
title: Usar anexos de conteúdo
intro: Os anexos de conteúdo permitem que um aplicativo GitHub forneça mais informações no GitHub referente às URLs ligadas a domínios registrados. O GitHub interpreta as informações fornecidas pelo aplicativo sob a URL do texto ou comentário de um problema ou pull request.
redirect_from:
  - /apps/using-content-attachments
  - /developers/apps/using-content-attachments
versions:
  ghes: <3.4
topics:
  - GitHub Apps
ms.openlocfilehash: f557a804d48144df24398f75e90a589d563d941b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147081020'
---
{% data reusables.pre-release-program.content-attachments-public-beta %}

## Sobre os anexos de conteúdo

Um Aplicativo do GitHub pode registrar os domínios que vão disparar eventos `content_reference`. Quando alguém inclui uma URL vinculada a um domínio registrado no corpo ou no comentário de um problema ou de uma solicitação de pull, o aplicativo recebe o [webhook `content_reference`](/webhooks/event-payloads/#content_reference). Você pode usar os anexos de conteúdo para fornecer visualmente mais contexto ou dados para a URL adicionada a um problema ou pull request. A URL precisa ser uma URL totalmente qualificada, começando com `http://` ou `https://`. As URLs que fazem parte de um link markdown são ignoradas e não disparam o evento `content_reference`.

Antes de usar a API {% data variables.product.prodname_unfurls %}, você deverá configurar as referências de conteúdo para o seu aplicativo GitHub:
* Conceda permissões `Read & write` ao seu aplicativo nas "Referências de conteúdo".
* Registre até 5 domínios válidos e publicamente acessíveis ao configurar a permissão de "Referências de conteúdo". Não use endereços IP ao configurar domínios de referência de conteúdo. Você pode registrar um nome de domínio (exemplo.com) ou um subdomínio (subdomínio.exemplo.com).
* Assine seu aplicativo no evento "Referência do conteúdo".

Uma vez instalado seu aplicativo em um repositório, Os comentários do problema ou pull request no repositório que contêm URLs para seus domínios registrados gerarão um evento de referência de conteúdo. O aplicativo deve criar um anexo de conteúdo em seis horas após a URL de referência de conteúdo ser postada.

Os anexos de conteúdo não farão a atualização retroativa das URLs. Funciona apenas para as URLs adicionadas a problemas ou pull requests depois que você configurar o aplicativo que usa os requisitos descritos acima e, em seguida, alguém instalar o aplicativo em seu repositório.

Confira "[Como criar um Aplicativo do GitHub](/apps/building-github-apps/creating-a-github-app/)" ou "[Como editar as permissões de um Aplicativo do GitHub" para ver as etapas necessárias](/apps/managing-github-apps/editing-a-github-app-s-permissions/) para configurar as permissões do Aplicativo do GitHub e as assinaturas de evento.

## Implementar o fluxo de anexo de conteúdo

O fluxo de anexo de conteúdo mostra a relação entre a URL no problema ou na solicitação de pull, o evento de webhook `content_reference` e o ponto de extremidade da API REST que você precisa chamar para atualizar o problema ou a solicitação de pull com informações adicionais:

**Etapa 1.** Configure seu aplicativo usando as diretrizes descritas em [Sobre os anexos de conteúdo](#about-content-attachments). Use também o [exemplo de Aplicativo do Probot](#example-using-probot-and-github-app-manifests) para começar a usar anexos de conteúdo.

**Etapa 2.** Adicione a URL para o domínio que você registrou em uma solicitação de pull ou em um problema. Você precisa usar uma URL totalmente qualificada que comece com `http://` ou `https://`.

![URL adicionada a um problema](/assets/images/github-apps/github_apps_content_reference.png)

**Etapa 3.** Seu aplicativo receberá o [webhook `content_reference`](/webhooks/event-payloads/#content_reference) com a ação `created`.

``` json
{
  "action": "created",
  "content_reference": {
    "id": 17,
    "node_id": "MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA5",
    "reference": "errors.ai"
  },
  "repository": {
    "full_name": "Codertocat/Hello-World",
  },
  "sender": {...},
  "installation": {
    "id": 371641,
    "node_id": "MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uMzcxNjQx"
  }
}
```

**Etapa 4.** O aplicativo usa os campos `id` do `content_reference` e `full_name` do `repository` para [criar um anexo de conteúdo](/rest/reference/apps#create-a-content-attachment) usando a API REST. Você também precisará da `id` do `installation` para se autenticar como uma [instalação do Aplicativo do GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation).

{% data reusables.pre-release-program.corsair-preview %} {% data reusables.pre-release-program.api-preview-warning %}

O parâmetro `body` pode conter um markdown:

```shell
curl -X POST \
  {% data variables.product.api_url_code %}/repos/Codertocat/Hello-World/content_references/17/attachments \
  -H 'Accept: application/vnd.github.corsair-preview+json' \
  -H 'Authorization: Bearer $INSTALLATION_TOKEN' \
  -d '{
    "title": "[A-1234] Error found in core/models.py file",
    "body": "You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n self.save()"
}'
```

Para obter mais informações sobre como criar um token de instalação, confira "[Autenticação como um Aplicativo do GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)".

**Etapa 5.** Você verá o novo anexo de conteúdo aparecer no link em um comentário de uma solicitação de pull ou de um problema:

![Conteúdo anexado a uma referência em um problema](/assets/images/github-apps/content_reference_attachment.png)

## Usar anexos de conteúdo no GraphQL
Fornecemos a `node_id` no evento de [webhook `content_reference`](/webhooks/event-payloads/#content_reference) para que você possa se referir à mutação `createContentAttachment` na API do GraphQL.

{% data reusables.pre-release-program.corsair-preview %} {% data reusables.pre-release-program.api-preview-warning %}

Por exemplo:

``` graphql
mutation {
  createContentAttachment(input: {
    contentReferenceId: "MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA1",
    title: "[A-1234] Error found in core/models.py file",
    body:"You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n self.save()"
  }) {
    contentAttachment {
      ... on ContentAttachment {
        id
        title
        body
      }
    }
  }
}
```
Exemplo de cURL:

```shell
curl -X "POST" "{% data variables.product.api_url_code %}/graphql" \
     -H 'Authorization: Bearer $INSTALLATION_TOKEN' \
     -H 'Accept: application/vnd.github.corsair-preview+json' \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "query": "mutation {\\n  createContentAttachment(input:{contentReferenceId: \\"MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA1\\", title:\\"[A-1234] Error found in core/models.py file\\", body:\\"You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n\self.save()\\"}) {\\n    contentAttachment {\\n      id,\\n      title,\\n      body\\n    }\\n  }\\n}"
}'
```

Para obter mais informações sobre `node_id`, confira "[Como usar IDs de nó global](/graphql/guides/using-global-node-ids)".

## Exemplo de uso de manifestos do Probot e do aplicativo GitHub

Para configurar rapidamente um Aplicativo do GitHub que possa usar a API do {% data variables.product.prodname_unfurls %}, use o [Probot](https://probot.github.io/). Confira "[Como criar Aplicativos do GitHub com base em um manifesto](/apps/building-github-apps/creating-github-apps-from-a-manifest/)" para saber como o Probot usa os Manifestos de Aplicativo do GitHub.

Para criar um aplicativo Probot, siga as etapas a seguir:

1. [Gerar um novo Aplicativo do GitHub](https://probot.github.io/docs/development/#generating-a-new-app).
2. Abra o projeto que você criou e personalize as configurações no arquivo `app.yml`. Inscreva-se no evento `content_reference` e habilite permissões de gravação em `content_references`:

   ``` yml
    default_events:
      - content_reference
    # The set of permissions needed by the GitHub App. The format of the object uses
    # the permission name for the key (for example, issues) and the access type for
    # the value (for example, write).
    # Valid values are `read`, `write`, and `none`
    default_permissions:
      content_references: write

    content_references:
      - type: domain
        value: errors.ai
      - type: domain
        value: example.org
   ```

3. Adicione este código ao arquivo `index.js` para tratar os eventos `content_reference` e chamar a API REST:

    ``` javascript
    module.exports = app => {
      // Your code here
      app.log('Yay, the app was loaded!')
       app.on('content_reference.created', async context => {
        console.log('Content reference created!', context.payload)
         // Call the "Create a content reference" REST endpoint
        await context.github.request({
          method: 'POST',
          headers: { accept: 'application/vnd.github.corsair-preview+json' },
          url: `/repos/${context.payload.repository.full_name}/content_references/${context.payload.content_reference.id}/attachments`,
          // Parameters
          title: '[A-1234] Error found in core/models.py file',
          body: 'You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\nself.save()'
        })
      })
    }
    ```

4. [Execute o Aplicativo do GitHub localmente](https://probot.github.io/docs/development/#running-the-app-locally). Navegue até `http://localhost:3000` e clique no botão **Registrar Aplicativo do GitHub**:

   ![Registrar um aplicativo GitHub do Probot](/assets/images/github-apps/github_apps_probot-registration.png)

5. Instale o aplicativo em um repositório de teste.
6. Crie um problema no seu repositório de teste.
7. Adicione um comentário ao problema que você abriu que inclui a URL configurada no arquivo `app.yml`.
8. Dê uma olhada no comentário do problema e você verá uma atualização que se parece com isso:

   ![Conteúdo anexado a uma referência em um problema](/assets/images/github-apps/content_reference_attachment.png)
