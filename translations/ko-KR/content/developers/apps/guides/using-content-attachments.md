---
title: 콘텐츠 첨부 파일 사용
intro: 콘텐츠 첨부 파일을 사용하면 GitHub 앱에서 등록된 도메인에 연결되는 URL에 대한 자세한 정보를 GitHub에 제공할 수 있습니다. GitHub는 앱에서 제공하는 정보를 이슈 또는 끌어오기 요청의 본문이나 주석의 URL 아래에 렌더링합니다.
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
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147081025'
---
{% data reusables.pre-release-program.content-attachments-public-beta %}

## 콘텐츠 첨부 파일 정보

GitHub 앱은 `content_reference` 이벤트를 트리거하는 도메인을 등록할 수 있습니다. 누군가가 본문에 등록된 도메인에 연결되는 URL이나 이슈 또는 끌어오기 요청에 대한 설명을 포함하는 경우 앱은 [ 웹후크`content_reference`](/webhooks/event-payloads/#content_reference)를 수신합니다. 콘텐츠 첨부 파일을 사용하여 이슈 또는 끌어오기 요청에 추가된 URL에 대한 더 많은 컨텍스트나 데이터를 시각적으로 제공할 수 있습니다. URL은 `http://` 또는 `https://`로 시작하는 정규화된 URL이어야 합니다. markdown 링크의 일부인 URL은 무시되며 `content_reference` 이벤트를 트리거하지 않습니다.

{% data variables.product.prodname_unfurls %} API를 사용하려면 GitHub 앱에 대한 콘텐츠 참조를 구성해야 합니다.
* 앱에 “콘텐츠 참조”에 대한 `Read & write` 권한을 부여합니다.
* “콘텐츠 참조” 권한을 구성할 때 공개적으로 액세스할 수 있는 유효한 도메인을 최대 5개까지 등록합니다. 콘텐츠 참조 도메인을 구성할 때는 IP 주소를 사용하지 마세요. 도메인 이름(example.com) 또는 하위 도메인(subdomain.example.com)을 등록할 수 있습니다.
* 사용자 앱은 “콘텐츠 참조” 이벤트를 구독합니다.

앱이 리포지토리에 설치되면, 등록된 도메인에 대한 URL이 포함된 리포지토리에서 이슈 또는 끌어오기 요청 설명이 콘텐츠 참조 이벤트를 생성합니다. 앱은 콘텐츠 참조 URL 게시 6시간 이내에 콘텐츠 첨부 파일을 만들어야 합니다.

콘텐츠 첨부 파일은 URL을 소급하여 업데이트하지 않습니다. 위에서 설명한 요구 사항을 사용하여 앱을 구성한 후 누군가가 리포지토리에 앱을 설치한 후에는 이슈 또는 끌어오기 요청에 추가된 URL에 대해서만 작동합니다.

GitHub 앱 사용 권한 및 이벤트 구독을 구성하는 데 필요한 단계는 “[GitHub 앱 만들기](/apps/building-github-apps/creating-a-github-app/)” 또는 “[GitHub 앱의 사용 권한 편집](/apps/managing-github-apps/editing-a-github-app-s-permissions/)”을 참조하세요.

## 콘텐츠 첨부 파일 흐름 구현

콘텐츠 첨부 파일 흐름은 이슈 또는 끌어오기 요청의 URL, `content_reference` 웹후크 이벤트 및 이슈를 업데이트하거나 추가 정보로 요청을 끌어오기 위해 호출해야 하는 REST API 엔드포인트 간의 관계를 보여 줍니다.

**1단계.** [About content attachments](#about-content-attachments)(콘텐츠 첨부 파일 정보)에 설명된 지침을 사용하여 앱을 설정합니다. [Probot 앱 예제](#example-using-probot-and-github-app-manifests)를 사용하여 콘텐츠 첨부 파일을 시작할 수도 있습니다.

**2단계.** 이슈 또는 끌어오기 요청에 등록한 도메인의 URL을 추가합니다. `http://` 또는 `https://`로 시작하는 정규화된 URL을 사용해야 합니다.

![이슈에 추가된 URL](/assets/images/github-apps/github_apps_content_reference.png)

**3단계.** 앱은 `created` 작업으로 [`content_reference` webhook](/webhooks/event-payloads/#content_reference)(웹후크)를 수신합니다.

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

**4단계.** 앱은 REST API를 사용하여 `content_reference` `id` 및 `repository` `full_name` 필드 사용을 통해 [콘텐츠 첨부 파일을 만들기](/rest/reference/apps#create-a-content-attachment)를 수행합니다. 또한 `installation` `id`가 필요하며 [GitHub 앱 설치](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)로 인증해야 합니다.

{% data reusables.pre-release-program.corsair-preview %} {% data reusables.pre-release-program.api-preview-warning %}

`body` 매개 변수는 다음과 같이 markdown을 포함할 수 있습니다.

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

설치 토큰을 만드는 방법에 대한 자세한 내용은 “[GitHub 앱으로 인증](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)”을 참조하세요.

**5단계** 끌어오기 요청 또는 이슈 설명의 링크 아래에 새 콘텐츠 첨부 파일이 표시됩니다.

![이슈의 참조에 첨부된 콘텐츠](/assets/images/github-apps/content_reference_attachment.png)

## GraphQL의 콘텐츠 첨부 파일 사용
`node_id`를 [`content_reference` 웹후크](/webhooks/event-payloads/#content_reference) 이벤트에서 제공하므로 GraphQL API의 `createContentAttachment` 변형을 참조할 수 있습니다.

{% data reusables.pre-release-program.corsair-preview %} {% data reusables.pre-release-program.api-preview-warning %}

예를 들면 다음과 같습니다.

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
cURL 예제:

```shell
curl -X "POST" "{% data variables.product.api_url_code %}/graphql" \
     -H 'Authorization: Bearer $INSTALLATION_TOKEN' \
     -H 'Accept: application/vnd.github.corsair-preview+json' \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "query": "mutation {\\n  createContentAttachment(input:{contentReferenceId: \\"MDE2OkNvbnRlbnRSZWZlcmVuY2UxNjA1\\", title:\\"[A-1234] Error found in core/models.py file\\", body:\\"You have used an email that already exists for the user_email_uniq field.\n ## DETAILS:\n\nThe (email)=(Octocat@github.com) already exists.\n\n The error was found in core/models.py in get_or_create_user at line 62.\n\n\self.save()\\"}) {\\n    contentAttachment {\\n      id,\\n      title,\\n      body\\n    }\\n  }\\n}"
}'
```

`node_id`에 대한 자세한 내용은 “[전역 노드 ID 사용](/graphql/guides/using-global-node-ids)”을 참조하세요.

## Probot 및 GitHub 앱 매니페스트를 사용하는 예제

{% data variables.product.prodname_unfurls %} API를 사용할 수 있는 GitHub 앱을 빠르게 설정하기 위해 [Probot](https://probot.github.io/)을 사용할 수 있습니다. Probot이 GitHub 앱 메니페스트를 사용하는 방법을 알아보려면 “[매니페스트에서 GitHub 앱 만들기](/apps/building-github-apps/creating-github-apps-from-a-manifest/)”를 참조하세요.

Probot 앱을 만들려면 다음 단계를 수행합니다.

1. [새 GitHub 앱을 생성합니다](https://probot.github.io/docs/development/#generating-a-new-app).
2. 생성한 프로젝트를 열고 `app.yml` 파일의 설정을 사용자 지정합니다. `content_reference` 이벤트를 구독하고 `content_references` 쓰기 권한을 사용하도록 설정합니다.

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

3. 이 코드를 `index.js` 파일에 추가하여 `content_reference` 이벤트를 처리하고 REST API를 호출합니다.

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

4. [GitHub 앱을 로컬에서 실행합니다](https://probot.github.io/docs/development/#running-the-app-locally). `http://localhost:3000`으로 이동하여 **GitHub 앱 등록** 버튼을 클릭합니다.

   ![Probot GitHub 앱 등록](/assets/images/github-apps/github_apps_probot-registration.png)

5. 테스트 리포지토리에 앱을 설치합니다.
6. 테스트 리포지토리에서 이슈를 만듭니다.
7. `app.yml` 파일에서 구성한 URL을 포함하는 열린 이슈에 설명을 추가합니다.
8. 이슈 설명을 살펴보면 다음과 같은 업데이트가 표시됩니다.

   ![이슈의 참조에 첨부된 콘텐츠](/assets/images/github-apps/content_reference_attachment.png)
