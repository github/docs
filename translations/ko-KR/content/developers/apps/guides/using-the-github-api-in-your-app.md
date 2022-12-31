---
title: 앱에서 GitHub API 사용
intro: 이벤트를 수신 대기하고 Octokit 라이브러리를 사용하여 REST API 작업을 수행하도록 앱을 설정하는 방법을 알아봅니다.
redirect_from:
  - /apps/building-your-first-github-app
  - /apps/quickstart-guides/using-the-github-api-in-your-app
  - /developers/apps/using-the-github-api-in-your-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Build an app with the REST API
ms.openlocfilehash: 66f5952c05e20a1eb300d4ecce94e38761edaa0e
ms.sourcegitcommit: 58f69d95fcc8a2fd1c2fb736a0ad8e7ee1858be4
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/07/2022
ms.locfileid: '148012651'
---
## 소개

이 가이드는 GitHub 앱을 빌드하고 서버에서 이를 실행하는 데 도움이 됩니다. 빌드하는 앱은 앱이 설치된 리포지토리에서 열린 모든 새 이슈에 레이블을 추가합니다.

이 프로젝트에서는 다음을 설명합니다.

* 이벤트를 수신 대기하도록 앱 프로그래밍
* Octokit.rb 라이브러리를 사용하여 REST API 작업

{% data reusables.apps.app-ruby-guides %}

단계를 완료했으면 전체 GitHub API 제품군을 사용하여 다른 종류의 통합을 개발할 준비가 된 것입니다. {% ifversion fpt or ghec %}[GitHub 마켓플레이스](https://github.com/marketplace) 및 [GitHub에서 사용](https://github.com/works-with)에서 성공적인 예제를 확인할 수 있습니다.{% endif %}

## 필수 조건

다음 사항을 기본적으로 이해하는 것이 좋습니다.

* [GitHub 앱](/apps/about-apps)
* [Webhook](/webhooks)
* [Ruby 프로그래밍 언어](https://www.ruby-lang.org/en/)
* [REST API](/rest)
* [Sinatra](http://sinatrarb.com/)

자신의 경험 수준에 맞춰 따라갈 수 있으며 설정에 필요한 정보를 제공해 드립니다.

이 작업을 수행하려면 다음이 필요합니다.

1. [앱 리포지토리에서 GitHub API 사용](https://github.com/github-developer/using-the-github-api-in-your-app)을 복제합니다.
  ```shell
    $ git clone https://github.com/github-developer/using-the-github-api-in-your-app.git
  ```

  빠른 시작에서 사용할 템플릿 코드가 있는 `template_server.rb` 파일과 완료된 프로젝트 코드가 있는 `server.rb` 파일을 디렉터리에서 찾을 수 있습니다.

1. [개발 환경 설정](/apps/quickstart-guides/setting-up-your-development-environment/)에서 빠른 시작의 단계에 따라 `template_server.rb` 앱 서버를 구성하고 실행합니다. 이전에 [개발 환경 설정](/apps/quickstart-guides/setting-up-your-development-environment/) 이외의 GitHub 앱 빠른 시작을 완료한 경우 새로운 GitHub 앱을 등록하고 이 빠른 시작에서 사용할 새 Smee 채널을 시작해야 합니다.

  이 빠른 시작에는 `template_server.rb`개발 환경 설정[과 동일한 ](/apps/quickstart-guides/setting-up-your-development-environment/) 코드가 포함되어 있습니다. **참고:** [개발 환경 설정](/apps/quickstart-guides/setting-up-your-development-environment/) 빠른 시작을 따라가면서 앱 리포지토리의 [GitHub API 사용](https://github.com/github-developer/using-the-github-api-in-your-app)에 포함된 프로젝트 파일을 사용해야 합니다.

  템플릿 GitHub 앱 설정에 문제가 있는 경우 [문제 해결](/apps/quickstart-guides/setting-up-your-development-environment/#troubleshooting) 섹션을 참조하세요.

## 앱 빌드

이제 `template_server.rb` 코드를 잘 알게 되었으므로 앱이 설치된 리포지토리에 열린 모든 이슈에 `needs-response` 레이블을 자동으로 추가하는 코드를 만들 수 있습니다.

`template_server.rb` 파일에는 아직 사용자 지정되지 않은 앱 템플릿 코드가 포함되어 있습니다. 이 파일에는 웹후크 이벤트를 처리하기 위한 몇 가지 자리 표시자 코드와 Octokit.rb 클라이언트를 초기화하기 위한 다른 코드가 표시됩니다.

{% note %}

**참고:** `template_server.rb`에는 이 가이드를 보완하고 추가 기술 세부 정보를 설명하는 많은 코드 주석이 포함되어 있습니다. 이 섹션을 계속 진행하기 전 해당 파일의 주석을 읽어 보면 코드 작동 방법에 대한 개요를 확인하는 데 도움이 됩니다.

이 가이드가 끝날 때까지 작성할 최종 사용자 지정 코드가 [`server.rb`](https://github.com/github-developer/using-the-github-api-in-your-app/blob/master/server.rb)에 제공됩니다. 끝까지 기다렸다가 확인해 보세요.

{% endnote %}

첫 번째 GitHub 앱을 만들기 위해 완료할 단계는 다음과 같습니다.

1. [앱 권한 업데이트](#step-1-update-app-permissions)
2. [이벤트 처리 추가](#step-2-add-event-handling)
3. [새 레이블 만들기](#step-3-create-a-new-label)
4. [레이블 처리 추가](#step-4-add-label-handling)

## 1단계. 앱 권한 업데이트

[앱을 처음으로 등록](/apps/quickstart-guides/setting-up-your-development-environment/#step-2-register-a-new-github-app)했을 때 기본 사용 권한을 수락했으므로, 앱은 대부분의 리소스에 액세스할 수 없습니다. 이 예제에서는 앱에서 이슈를 읽고 레이블을 쓸 수 있는 권한이 필요합니다.

앱의 사용 권한 업데이트 방법은 다음과 같습니다.

1. [앱 설정 페이지](https://github.com/settings/apps)에서 앱을 선택하고 사이드바에서 **사용 권한 및 웹후크** 를 클릭합니다.
1. “권한” 섹션에서 “이슈”를 찾은 후 그 옆에 있는 “액세스” 드롭다운에서 **읽기 및 쓰기** 를 선택합니다. 설명에 따르면 이 옵션은 사용자에게 필요한 이슈 및 레이블 모두에 대한 액세스 권한을 부여합니다.
1. “이벤트 구독” 섹션에서 이벤트를 구독할 **이슈** 를 선택합니다.
{% data reusables.apps.accept_new_permissions_steps %}

좋습니다! 수행하려는 작업을 수행할 수 있는 권한이 앱에 있습니다. 이제 코드를 추가하여 작동시킬 수 있습니다.

## 2단계. 이벤트 처리 추가

앱에서 가장 먼저 해야 할 일은 열려 있는 새 이슈를 수신 대기하는 것입니다. 이제 **이슈** 이벤트를 구독했으므로 특정 이슈 관련 작업이 발생할 때 트리거되는 [`issues`](/webhooks/event-payloads/#issues) 웹후크를 수신하기 시작합니다. 코드에서 원하는 특정 작업에 대해 이 이벤트 유형을 필터링할 수 있습니다.

GitHub에서 웹후크 페이로드를 `POST` 요청으로 보냅니다. Smee 웹후크 페이로드를 `http://localhost/event_handler:3000`으로 전달했으므로 서버는 `post '/event_handler'` 요청 페이로드를 `POST` 경로로 수신합니다.

빈 `post '/event_handler'` 경로는 [필수 조건](#prerequisites) 섹션에서 다운로드한 `template_server.rb` 파일에 이미 포함되어 있습니다. 빈 경로는 다음과 같습니다.

``` ruby
  post '/event_handler' do

    # # # # # # # # # # # #
    # ADD YOUR CODE HERE  #
    # # # # # # # # # # # #

    200 # success status
  end
```

다음 코드를 추가하여 `issues` 이벤트를 처리하려면 이 경로를 사용합니다.

``` ruby
case request.env['HTTP_X_GITHUB_EVENT']
when 'issues'
  if @payload['action'] === 'opened'
    handle_issue_opened_event(@payload)
  end
end
```

GitHub에서 보내는 모든 이벤트에는 `POST` 요청의 이벤트 유형을 나타내는 `HTTP_X_GITHUB_EVENT`라는 요청 헤더가 포함됩니다. 지금은 `issues` 이벤트 유형에만 관심이 있습니다. 각 이벤트에는 이벤트를 트리거한 작업 유형을 나타내는 추가 `action` 필드가 있습니다. `issues`의 경우 `action` 필드는 `assigned`, `unassigned`, `labeled`, `unlabeled`, `opened`, `edited`, `milestoned`, `demilestoned`, `closed` 또는 `reopened`가 될 수 있습니다.

이벤트 처리기를 테스트하려면 임시 도우미 메서드를 추가해 보세요. 나중에 [레이블 처리를 추가](#step-4-add-label-handling)할 때 업데이트합니다. 지금은 코드의 `helpers do` 섹션 내에 다음 코드를 추가합니다. 새 메서드를 다른 도우미 메서드의 위 또는 아래에 배치할 수 있습니다. 순서는 중요하지 않습니다.

``` ruby
def handle_issue_opened_event(payload)
  logger.debug 'An issue was opened!'
end
```

이 메서드는 JSON 형식의 이벤트 페이로드를 인수로 받습니다. 즉, 메서드의 페이로드를 구문 분석하고 필요한 특정 데이터로 드릴다운할 수 있습니다. 특정 시점에 전체 페이로드를 검사하는 것이 좋습니다. `logger.debug 'An issue was opened!`를 `logger.debug payload`로 변경해 보세요. 표시되는 페이로드 구조는 [`issues` 웹후크 이벤트 문서에 표시된 내용](/webhooks/event-payloads/#issues)과 일치해야 합니다.

좋습니다! 변경 내용을 테스트할 차례입니다.

{% data reusables.apps.sinatra_restart_instructions %}

브라우저에서 앱을 설치한 리포지토리를 방문합니다. 이 리포지토리에서 새 이슈를 엽니다. 이슈는 사용자가 원하는 무엇이든 말할 수 있습니다. 단지 테스트용이기 때문입니다.

터미널을 다시 살펴보면 출력에 다음과 같은 메시지가 표시됩니다. `An issue was opened!` 축하합니다! 앱에 이벤트 처리기를 추가했습니다. 💪

## 3단계. 새 레이블 만들기

이제 앱에서 이슈가 열리는 시기를 알 수 있습니다. 이제 앱이 설치된 리포지토리에서 새로 열린 이슈에 `needs-response` 레이블을 추가하려고 합니다.

레이블을 어디에나 _추가_ 하려면 리포지토리에서 사용자 지정 레이블을 _생성_ 해야 합니다. 이 작업은 한 번만 하면 됩니다. 이 가이드의 목적을 위해 GitHub에서 레이블을 수동으로 만듭니다. 리포지토리에서 **이슈** 와 **레이블** 을 차례로 클릭한 다음 **새 레이블** 을 클릭합니다. 새 레이블의 이름을 `needs-response`로 지정합니다.

{% tip %}

**팁**: 앱이 프로그래밍 방식으로 레이블을 만들 수 있다면 좋지 않을까요? [가능합니다](/rest/reference/issues#create-a-label). 이 가이드의 단계를 완료한 후 코드를 추가하여 직접 수행해 보세요.

{% endtip %}

이제 레이블이 있으므로 REST API를 사용하여 [새로 열린 이슈에 레이블을 추가](/rest/reference/issues#add-labels-to-an-issue)하도록 앱을 프로그래밍할 수 있습니다.

## 4단계. 레이블 처리 추가

축하합니다. 앱에 레이블 처리를 추가하는 마지막 단계까지 완료했습니다. 이 작업의 경우 [Octokit.rb Ruby 라이브러리](http://octokit.github.io/octokit.rb/)를 사용하는 것이 좋습니다.

Octokit.rb 문서에서 [레이블 메서드](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html) 목록을 찾습니다. 사용할 메서드는 [`add_labels_to_an_issue`](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html#add_labels_to_an_issue-instance_method)입니다.

다시 `template_server.rb`에서 이전에 정의한 메서드를 찾습니다.

``` ruby
def handle_issue_opened_event(payload)
  logger.debug 'An issue was opened!'
end
```

[`add_labels_to_an_issue`](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html#add_labels_to_an_issue-instance_method) 문서를 보면 세 개의 인수를 이 메서드에 전달해야 합니다.

* 리포지토리(`"owner/name"` 형식의 문자열)
* 이슈 번호(정수)
* 레이블(배열)

페이로드를 구문 분석하여 리포지토리와 이슈 번호를 모두 가져올 수 있습니다. 레이블 이름은 항상 동일(`needs-response`)하기 때문에 레이블 배열에서 하드 코딩된 문자열로 전달할 수 있습니다. 해당 부분을 통합하면 업데이트된 메서드가 다음과 같이 표시될 수 있습니다.

``` ruby
# When an issue is opened, add a label
def handle_issue_opened_event(payload)
  repo = payload['repository']['full_name']
  issue_number = payload['issue']['number']
  @installation_client.add_labels_to_an_issue(repo, issue_number, ['needs-response'])
end
```

테스트 리포지토리에서 새 이슈를 열고 어떤 일이 일어나는지 확인해 보세요. 아무 일도 발생하지 않는다면 새로 고침하세요.

터미널에는 많은 정보가 표시되지 않지만 봇 사용자가 이슈에 레이블을 추가한 것을 확인할 수 있습니다.

{% note %}

**참고:** GitHub 앱이 API를 통해 레이블 추가와 같은 작업을 수행하는 경우, GitHub에서는 해당 작업을 봇 계정에서 수행하는 것으로 표시합니다. 자세한 내용은 “[컴퓨터 vs. 봇 계정](/apps/differences-between-apps/#machine-vs-bot-accounts)”을 참조하세요.

{% endnote %}

축하합니다! 작업 앱을 성공적으로 빌드했습니다. 🎉

[앱 템플릿 리포지토리](https://github.com/github-developer/using-the-github-api-in-your-app)에서 `server.rb`의 최종 코드를 볼 수 있습니다.

이 다음에 해야할 일에 대한 자세한 아이디어는 “[다음 단계](#next-steps)”를 참조하세요.

## 문제 해결

다음은 몇 가지 일반적인 문제와 제안된 해결 방법입니다. 다른 문제가 발생하면 {% 데이터 reusables.support.prodname_support_forum_with_url %}에서 도움말이나 조언을 요청할 수 있습니다.

* **Q:** 서버가 이벤트를 수신 대기하지 않습니다. Smee 클라이언트가 터미널 창에서 실행 중이고 새 이슈를 열어 GitHub.com에서 이벤트를 보내고 있지만 서버를 실행하는 터미널 창에는 출력이 표시되지 않습니다.

    **A:** 앱 설정에 올바른 Smee 도메인이 없을 수도 있습니다. [앱 설정 페이지](https://github.com/settings/apps)를 방문하여 “[GitHub에 새 앱 등록](/apps/quickstart-guides/setting-up-your-development-environment/#step-2-register-a-new-github-app)”에 표시된 필드를 다시 확인합니다. 이 필드의 도메인은 “[새 Smee 채널 시작](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel)”의 `smee -u <unique_channel>` 명령에 사용한 도메인과 일치해야 합니다.

* **Q:** 내 앱이 작동하지 않습니다. 새 이슈를 열었지만 새로 고침 후에도 레이블이 추가되지 않았습니다.

    **A:** 다음 사항을 모두 충족하는지 확인합니다.

    * 이슈를 여는 리포지토리에 [앱을 설치](/apps/quickstart-guides/setting-up-your-development-environment/#step-7-install-the-app-on-your-account) 했습니다.
    * 터미널 창에서 [Smee 클라이언트가 실행](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel) 중입니다.
    * 다른 터미널 창에서 오류 없이 [웹 서버가 실행](/apps/quickstart-guides/setting-up-your-development-environment/#step-6-start-the-server) 중입니다.
    * 앱에는 [이슈에 대한 읽기 및 쓰기 권한이 있으며 이슈 이벤트를 구독](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel)합니다.
    * 권한을 업데이트한 후 [메일을 확인](#step-1-update-app-permissions)하고 새 권한을 수락했습니다.

## 결론

이 가이드를 통해 GitHub 앱을 개발하기 위한 기본 구성 요소를 배웠습니다. 요약하면 다음과 같습니다.

* 이벤트를 수신 대기하도록 앱 프로그래밍
* Octokit.rb 라이브러리를 사용하여 REST API 작업

## 다음 단계

다음에 수행할 작업에 대한 몇 가지 아이디어를 살펴봅니다.

* [GraphQL을 사용하여 앱을 다시 작성합니다](https://developer.github.com/changes/2018-04-30-graphql-supports-github-apps/).
* [Probot](https://github.com/probot/probot)을 사용하여 Node.js에서 앱을 다시 작성합니다.
* 앱에서 `needs-response` 레이블이 이슈에 이미 있는지 여부를 확인하고, 없으면 추가합니다.
* 봇이 레이블을 성공적으로 추가하면 터미널에 메시지를 표시합니다. (힌트: 메시지에 대한 조건으로 `needs-response` 레이블 ID와 페이로드의 레이블 ID를 비교하여 관련 레이블이 추가된 경우에만 메시지가 표시되고 다른 레이블은 표시되지 않습니다.)
* 앱에 방문 페이지를 추가하고 이를 위해 [Sinatra 경로](https://github.com/sinatra/sinatra#routes)를 연결합니다.
* 호스트된 서버(예: Heroku)로 코드를 이동합니다. 앱 설정을 새 도메인으로 업데이트하세요.
* 프로젝트를 공유하거나 {% 데이터 reusables.support.prodname_support_forum_with_url %}{% ifversion fpt 또는 ghec %}에서 조언을 얻습니다.
* 다른 사용자에게 도움이 될 참신한 새 앱을 빌드했나요? [GitHub 마켓플레이스에 추가](/apps/marketplace/creating-and-submitting-your-app-for-approval/)하세요.{% endif %}
