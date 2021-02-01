---
title: Usar anexos de conteúdo
intro: Os anexos de conteúdo permitem que um aplicativo GitHub forneça mais informações no GitHub referente às URLs ligadas a domínios registrados. O GitHub interpreta as informações fornecidas pelo aplicativo sob a URL do texto ou comentário de um problema ou pull request.
redirect_from:
  - /apps/using-content-attachments
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.pre-release-program.content-attachments-public-beta %}

### Sobre os anexos de conteúdo

Um aplicativo GitHub pode registrar domínios que ativarão eventos `content_reference`. Quando alguém inclui uma URL que é ligada a um domínio registrado no texto ou comentário de um problema ou pull request, o aplicativo recebe o webhook[`content_reference`](/webhooks/event-payloads/#content_reference). Você pode usar os anexos de conteúdo para fornecer visualmente mais contexto ou dados para a URL adicionada a um problema ou pull request. A URL deve ser uma URL totalmente qualificada, começando com `http://` ou `https://`. As URLs que fazem parte de um link markdown são ignoradas e não ativam o evento `content_reference`.

Antes de usar a API {% data variables.product.prodname_unfurls %}, você deverá configurar as referências de conteúdo para o seu aplicativo GitHub:
* Dê ao seu aplicativo permissões de `Leitura & gravação` para as "Referências de conteúdo".
* Registre até 5 domínios válidos e publicamente acessíveis ao configurar a permissão de "Referências de conteúdo". Não use endereços IP ao configurar domínios de referência de conteúdo. Você pode registrar um nome de domínio (exemplo.com) ou um subdomínio (subdomínio.exemplo.com).
* Assine seu aplicativo no evento "Referência do conteúdo".

Uma vez instalado seu aplicativo em um repositório, Os comentários do problema ou pull request no repositório que contêm URLs para seus domínios registrados gerarão um evento de referência de conteúdo. O aplicativo deve criar um anexo de conteúdo em seis horas após a URL de referência de conteúdo ser postada.

Os anexos de conteúdo não farão a atualização retroativa das URLs. Funciona apenas para as URLs adicionadas a problemas ou pull requests depois que você configurar o aplicativo que usa os requisitos descritos acima e, em seguida, alguém instalar o aplicativo em seu repositório.

Consulte "[Criar um aplicativo GitHub](/apps/building-github-apps/creating-a-github-app/)" ou"[Editar as permissões de um aplicativo GitHub](/apps/managing-github-apps/editing-a-github-app-s-permissions/)" para as etapas necessárias para configurar as permissões e assinaturas de eventos do aplicativo GitHub.

### Implementar o fluxo de anexo de conteúdo

O fluxo de anexo de conteúdo mostra a relação entre a URL no problema ou pull request, o evento do webhook `content_reference`, de ` e o ponto de extremidade da API REST que você precisa chamar para atualizar o problema ou pull request com informações adicionais:</p>

<p spaces-before="0"><strong x-id="1">Etapa 1.</strong> Configure seu aplicativo usando as diretrizes definidas em <a href="#about-content-attachments">Sobre anexos de conteúdo</a>. Você também pode usar o <a href="#example-using-probot-and-github-app-manifests">exemplo do aplicativo Probot</a> para dar os primeiros passos com os anexos de conteúdo.</p>

<p spaces-before="0"><strong x-id="1">Etapa 2.</strong> Adicione a URL para o domínio que você registrou para um problema ou pull request. Você deve usar uma URL totalmente qualificada que comece com <code>http://` ou `https://`.

![URL adicionada a um problema](/assets/images/github-apps/github_apps_content_reference.png)

**Etapa 3.** Seu aplicativo receberá o [`content_reference` webhook](/webhooks/event-payloads/#content_reference) com a ação `criada`.

``` json
{
  "action": "created",
  "content_reference": {
    "id": 17,
    "node_id": "MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA5",
    "reference": "errors.ai"
  },
  "repository": {...},
  "sender": {...},
  "installation": {
    "id": 371641,
    "node_id": "MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uMzcxNjQx"
  }
}
```

**Etapa 4.** O aplicativo usa o `content_reference` `id` </code> para [Criar um anexo de conteúdo](/rest/reference/apps#create-a-content-attachment) usando a API REST. Você também precisará do `id` da `instalação` para efetuar a autenticação como uma [instalação do aplicativo GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation).

{% data reusables.pre-release-program.corsair-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

O parâmetro do `texto` pode conter markdown:

    ```shell
    curl -X POST \
      https://api.github.com/content_references/1512/attachments \
      -H 'Accept: application/vnd.github.corsair-preview+json' \
      -H 'Authorization: Bearer $INSTALLATION_TOKEN' \
      -d '{
        "title": "[A-1234] Error found in core/models.py file",
        "body": "You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n self.save()"
    }'
    ```

Para obter mais informações sobre a criação de um token de instalação, consulte "[Efetuando a autenticação como um aplicativo GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)".

**Etapa 5.** Você verá o novo anexo de conteúdo aparecer no link de um pull request ou comentário de um problema:

![Conteúdo anexado a uma referência em um problema](/assets/images/github-apps/github_apps_content_reference_attachment.png)

### Usar anexos de conteúdo no GraphQL
Nós fornecemos o `node_id` no evento [`content_reference` webhook](/webhooks/event-payloads/#content_reference) para que você possa fazer referência à mutação `createContentAttachment` na API do GraphQL.

{% data reusables.pre-release-program.corsair-preview %}
{% data reusables.pre-release-program.api-preview-warning %}

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
curl -X "POST" "https://api.github.com/graphql" \
     -H 'Authorization: Bearer $INSTALLATION_TOKEN' \
     -H 'Accept: application/vnd.github.corsair-preview+json' \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "query": "mutation {\\n  createContentAttachment(input:{contentReferenceId: \\"MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA1\\", title:\\"[A-1234] Error found in core/models.py file\\", body:\\"You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n\self.save()\\"}) {\\n    contentAttachment {\\n      id,\\n      title,\\n      body\\n    }\\n  }\\n}"
}'
```

Para obter mais informações sobre `node_id`, consulte "[Usando IDs de nós globais](/graphql/guides/using-global-node-ids)".

### Exemplo de uso de manifestos do Probot e do aplicativo GitHub

Para configurar rapidamente um aplicativo GitHub que pode usar a API do {% data variables.product.prodname_unfurls %}, você pode usar o [Probot](https://probot.github.io/). Consulte "[Criando aplicativos GitHub a partir de um manifesto](/apps/building-github-apps/creating-github-apps-from-a-manifest/)" para saber como o Probot usa manigestos do aplicativo GitHub.

Para criar um aplicativo Probot, siga as etapas a seguir:

1. [Gerar um novo aplicativo GitHub](https://probot.github.io/docs/development/#generating-a-new-app).
2. Abra o projeto que você criou e personalize as configurações no arquivo `app.yml`. Assine o evento `content_reference` e habilite as permissões de gravação `content_reference`:

   ``` yml

    default_events:
    - content_reference
    # O conjunto de permissões necessárias para o aplicativo GitHub. O formato do objeto usa
    # o nome da permissão para a chave (por exemplo, problemas) e o tipo de acesso para
    # o valor (por exemplo, gravação)
    # Valid values are `read`, `write`, and `none`
    default_permissions:
      content_references: write

    content_references:
    - type: domain
      value: errors.ai
    - type: domain
      value: example.org
   ```

3. Adicione este código ao arquivo `index.js` para lidar com eventos `content_reference` e chamar a API REST:

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
          url: `/content_references/${context.payload.content_reference.id}/attachments`,
          // Parameters
          title: '[A-1234] Error found in core/models.py file',
          body: 'You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\nself.save()'
        })
      })
    }
    ```

4. [Execute o aplicativo GitHub localmente](https://probot.github.io/docs/development/#running-the-app-locally). Acesse `http://localhost:3000` e clique no botão **Registrar aplicativo GitHub**:

   ![Registrar um aplicativo GitHub do Probot](/assets/images/github-apps/github_apps_probot-registration.png)

5. Instale o aplicativo em um repositório de teste.
6. Crie um problema no seu repositório de teste.
7. Adicione um comentário ao problema aberto que inclui a URL que você configurou no arquivo `app.yml`.
8. Dê uma olhada no comentário do problema e você verá uma atualização que se parece com isso:

   ![Conteúdo anexado a uma referência em um problema](/assets/images/github-apps/github_apps_content_reference_attachment.png)
