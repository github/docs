---
title: Checks API를 사용하여 CI 테스트 만들기
intro: '{% data variables.product.prodname_github_app %} 및 Checks API를 사용하여 테스트를 실행하는 연속 통합 서버를 빌드합니다.'
redirect_from:
  - /apps/quickstart-guides/creating-ci-tests-with-the-checks-api
  - /developers/apps/creating-ci-tests-with-the-checks-api
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: CI tests using Checks API
ms.openlocfilehash: 0459714ae9ffb8094c70a714a60a66a19964424f
ms.sourcegitcommit: 06d16bf9a5c7f3e7107f4dcd4d06edae5971638b
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179679'
---
## 소개

이 가이드에서는 테스트를 실행하는 CI(연속 통합) 서버를 빌드하는 데 사용할 [GitHub 앱](/apps/) 및 [Checks API](/rest/reference/checks)를 소개합니다.

CI는 공유 리포지토리에 코드를 자주 커밋해야 하는 소프트웨어 사례입니다. 코드를 자주 커밋하면 오류가 더 빨리 발생하며 개발자가 오류의 원인을 찾을 때 디버그해야 하는 코드의 양이 줄어듭니다. 또한 코드가 자주 업데이트되면 소프트웨어 개발 팀의 여러 구성원의 변경 내용을 보다 쉽게 병합할 수 있습니다. 이는 코드를 작성하는 데는 더 많은 시간을 할애할 수 있지만 오류를 디버깅하거나 병합 충돌을 해결하는 데 시간이 부족한 개발자에게 유용합니다. 🙌

CI 서버는 코드 Linter(스타일 양식 확인), 보안 검사, 코드 검사 및 리포지토리의 새 코드 커밋에 대한 기타 검사와 같은 CI 테스트를 실행하는 코드를 호스트합니다. CI 서버는 스테이징 또는 프로덕션 서버에 코드를 빌드하고 배포할 수도 있습니다. GitHub 앱으로 만들 수 있는 CI 테스트 유형의 몇 가지 예제를 보려면 GitHub Marketplace에서 제공하는 [연속 통합 앱](https://github.com/marketplace/category/continuous-integration)을 확인하세요.

{% data reusables.apps.app-ruby-guides %}

### Checks API 개요

[Checks API](/rest/reference/checks)를 사용하면 리포지토리의 각 코드 커밋에 대해 자동으로 실행되는 CI 테스트를 설정할 수 있습니다. Checks API는 끌어오기 요청의 **검사** 탭에서 GitHub의 각 검사에 대한 자세한 정보를 보고합니다. Checks API를 사용하면 특정 코드 줄에 대한 추가 세부 정보가 포함된 주석을 만들 수 있습니다. 주석은 **검사** 탭에 표시됩니다. 끌어오기 요청의 일부인 파일에 대한 주석을 만들면 주석이 **변경된 파일** 탭에도 표시됩니다.

검사 도구 모음은 검사 실행(개별 CI 테스트) 그룹입니다.  검사 도구 모음과 검사 실행에는 모두 GitHub의 끌어오기 요청에 표시되는 상태가 포함됩니다. 상태를 사용하면 코드 커밋으로 인해 오류가 발생하는 시기를 확인할 수 있습니다. 상태를 [보호된 분기](/rest/reference/repos#branches)와 함께 사용하면 사용자가 끌어오기 요청을 조기에 병합하지 못하도록 할 수 있습니다. 자세한 내용은 “[보호된 분기 정보](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)”를 참조하세요.

Checks API는 새 코드가 리포지토리에 푸시될 때마다 리포지토리에 설치된 모든 GitHub 앱에 [`check_suite` 웹후크 이벤트](/webhooks/event-payloads/#check_suite)를 보냅니다. 모든 Checks API 이벤트 작업을 수신하려면 앱에 `checks:write` 권한이 있어야 합니다. GitHub는 기본 흐름을 사용하여 리포지토리에서 새 코드 커밋에 대한 `check_suite` 이벤트를 자동으로 만듭니다. 원하는 경우 [검사 도구 모음의 리포지토리 기본 설정 업데이트](/rest/reference/checks#update-repository-preferences-for-check-suites)를 수행합니다. 다음은 기본 흐름의 작동 방식입니다.

1. 누군가가 리포지토리에 코드를 푸시할 때마다 GitHub는 `checks:write` 권한이 있는 리포지토리에 설치된 모든 GitHub 앱에 `requested` 작업으로 `check_suite` 이벤트를 보냅니다. 이 이벤트를 통해 앱은 코드가 푸시되었고 GitHub에서 자동으로 새 검사 도구 모음을 만들었다는 것을 알 수 있습니다.
1. 이 이벤트를 수신한 앱은 해당 도구 모음에 [검사 실행 추가](/rest/reference/checks#create-a-check-run)가 가능합니다.
1. 검사 실행에는 특정 코드 줄에 표시되는 [주석](/rest/reference/checks#annotations-object)이 포함될 수 있습니다.

**이 가이드에서 배울 내용은 다음과 같습니다.**

* 1부: Checks API를 사용하여 CI 서버의 프레임워크 설정
  * GitHub 앱을 Checks API 이벤트를 수신하는 서버로 구성합니다.
  * 리포지토리가 새로 푸시된 커밋을 수신할 때 CI 테스트에 대한 새 검사 실행을 만듭니다.
  * 재실행 검사는 사용자가 GitHub에서 해당 작업을 요청할 때 실행됩니다.
* 2부: Linter CI 테스트를 추가하여 만든 CI 서버 프레임워크를 기반으로 빌드
  * `status``conclusion` 및`output` 세부 정보를 사용하여 검사 실행을 업데이트합니다.
  * GitHub에 있는 끌어오기 요청의 **검사** 및 **변경된 파일** 탭에 표시되는 코드 줄에 주석을 만듭니다.
  * 끌어오기 요청의 **검사** 탭에서 “이 문제 해결” 단추를 노출하여 Linter 권장 사항을 자동으로 수정합니다.

이 빠른 시작을 완료할 때 Check API CI 서버가 수행할 작업을 알아보려면 아래 데모를 확인하세요.

![Checks API CI 서버 빠른 시작의 데모](/assets/images/github-apps/github_apps_checks_api_ci_server.gif)

## 필수 조건

시작하기 전에 [GitHub 앱](/apps/), [웹후크](/webhooks) 및 [Checks API](/rest/reference/checks)를 숙지할 수 있습니다. [REST API 문서](/rest)에서 더 많은 API를 찾을 수 있습니다. Checks API는 [GraphQL](/graphql)에서도 사용할 수 있지만 이 빠른 시작에서는 REST를 중심으로 합니다. 자세한 내용은 GraphQL [검사 도구 모음](/graphql/reference/objects#checksuite) 및 [검사 실행](/graphql/reference/objects#checkrun) 개체를 참조하세요.

[Ruby 프로그래밍 언어](https://www.ruby-lang.org/en/), [Smee](https://smee.io/) 웹후크 페이로드 배달 서비스, GitHub REST API용 [Octokit.rb Ruby 라이브러리](http://octokit.github.io/octokit.rb/) 및 [Sinatra 웹 프레임워크](http://sinatrarb.com/)를 사용하여 Checks API CI 서버 앱을 만듭니다.

이 프로젝트를 완료하기 위해 도구 또는 개념의 전문가가 될 필요는 없습니다. 이 가이드에서는 필요한 모든 단계를 안내합니다. Checks API를 사용하여 CI 테스트 만들기를 시작하기 전에 다음을 수행해야 합니다.

1. [Checks API로 CI 테스트 만들기](https://github.com/github-developer/creating-ci-tests-with-the-checks-api) 리포지토리를 복제합니다.
  ```shell
    $ git clone https://github.com/github-developer/creating-ci-tests-with-the-checks-api.git
  ```

  빠른 시작에서 사용할 템플릿 코드가 있는 `template_server.rb` 파일과 완료된 프로젝트 코드가 있는 `server.rb` 파일을 디렉터리에서 찾을 수 있습니다.

1. “[개발 환경 설정](/apps/quickstart-guides/setting-up-your-development-environment/)” 빠른 시작의 단계에 따라 앱 서버를 구성하고 실행합니다. **참고:** [GitHub 앱 템플릿 리포지토리 복제](/apps/quickstart-guides/setting-up-your-development-environment/#prerequisites) 대신 빠른 시작의 이전 단계에서 복제한 리포지토리의 `template_server.rb` 파일을 사용합니다.

  이전에 GitHub 앱 빠른 시작을 완료한 경우 새 GitHub 앱을 등록하고 빠른 시작에서 사용할 새 Smee 채널을 시작해야 합니다.

  템플릿 GitHub 앱 설정에 문제가 있는 경우 [문제 해결](/apps/quickstart-guides/setting-up-your-development-environment/#troubleshooting) 섹션을 참조하세요.

## 1부. Checks API 인터페이스 만들기

1부에서는 `check_suite` 웹후크 이벤트를 수신하고 검사 실행을 만들고 업데이트하는 데 필요한 코드를 추가합니다. GitHub에서 검사를 다시 요청했을 때 검사 실행을 만드는 방법도 알아봅니다. 이 섹션의 마지막에서는 GitHub 끌어오기 요청에서 만든 검사 실행을 확인할 수 있습니다.

검사 실행은 이 섹션의 코드에 대한 검사를 수행하지 않습니다. [2부: Octo RuboCop CI 테스트 만들기](#part-2-creating-the-octo-rubocop-ci-test)에서 해당 기능을 추가합니다.

웹후크 페이로드를 로컬 서버로 전달하는 Smee 채널이 이미 구성되어 있어야 합니다. 서버가 실행 중이고 테스트 리포지토리에 등록하고 설치한 GitHub 앱에 연결되어야 합니다. “[개발 환경 설정](/apps/quickstart-guides/setting-up-your-development-environment/)”의 단계를 완료하지 않은 경우 계속하려면 이 작업을 수행해야 합니다.

그럼 시작하겠습니다. 1부에서 완료할 단계는 다음과 같습니다.

1. [앱 권한 업데이트](#step-11-updating-app-permissions)
1. [이벤트 처리 추가](#step-12-adding-event-handling)
1. [검사 실행 만들기](#step-13-creating-a-check-run)
1. [검사 실행 업데이트](#step-14-updating-a-check-run)

## 1\.1단계. 앱 권한 업데이트

[앱을 처음으로 등록](#prerequisites)했을 때 기본 사용 권한을 수락했으므로, 앱은 대부분의 리소스에 액세스할 수 없습니다. 이 예제에서는 앱에 검사를 읽고 쓸 수 있는 권한이 필요합니다.

앱의 사용 권한 업데이트 방법은 다음과 같습니다.

1. [앱 설정 페이지](https://github.com/settings/apps)에서 앱을 선택하고 사이드바에서 **사용 권한 및 웹후크** 를 클릭합니다.
1. “사용 권한” 섹션에서 “검사”를 찾고 옆에 있는 Access 드롭다운에서 **읽기 및 쓰기** 를 선택합니다.
1. “이벤트 구독” 섹션에서 **검사 도구 모음** 및 **검사 실행** 을 선택하여 이벤트를 구독합니다.
{% data reusables.apps.accept_new_permissions_steps %}

좋습니다! 수행하려는 작업을 수행할 수 있는 권한이 앱에 있습니다. 이제 이벤트를 처리하는 코드를 추가할 수 있습니다.

## 1\.2 단계. 이벤트 처리 추가

이제 앱이 **검사 도구 모음** 및 **검사 실행** 이벤트를 구독했으므로 [`check_suite`](/webhooks/event-payloads/#check_suite)및 [`check_run`](/webhooks/event-payloads/#check_run) 웹후크 수신을 시작합니다. GitHub에서 웹후크 페이로드를 `POST` 요청으로 보냅니다. Smee 웹후크 페이로드를 `http://localhost/event_handler:3000`으로 전달했으므로 서버는 `post '/event_handler'` 경로에서 `POST` 요청 페이로드를 받게 됩니다.

빈 `post '/event_handler'` 경로는 [필수 조건](#prerequisites) 섹션에서 다운로드한 `template_server.rb` 파일에 이미 포함되어 있습니다. 빈 경로는 다음과 같습니다.

``` ruby
  post '/event_handler' do

    # # # # # # # # # # # #
    # ADD YOUR CODE HERE  #
    # # # # # # # # # # # #

    200 # success status
  end
```

다음 코드를 추가하여 `check_suite` 이벤트를 처리하려면 이 경로를 사용합니다.

``` ruby
# Get the event type from the HTTP_X_GITHUB_EVENT header
case request.env['HTTP_X_GITHUB_EVENT']
when 'check_suite'
  # A new check_suite has been created. Create a new check run with status queued
  if @payload['action'] == 'requested' || @payload['action'] == 'rerequested'
    create_check_run
  end
end
```

GitHub에서 보내는 모든 이벤트에는 `POST` 요청의 이벤트 유형을 나타내는 `HTTP_X_GITHUB_EVENT`라는 요청 헤더가 포함됩니다. 지금은 새 검사 도구 모음을 만들 때 내보내지는 `check_suite` 형식의 이벤트에만 관심이 있습니다. 각 이벤트에는 이벤트를 트리거한 작업 유형을 나타내는 추가 `action` 필드가 있습니다. `check_suite`의 경우 `action` 필드는 `requested`, `rerequested` 또는 `completed`가 될 수 있습니다.

`requested` 작업은 코드가 리포지토리에 푸시될 때마다 검사 실행을 요청하고, `rerequested` 작업은 리포지토리에 이미 있는 코드에 대한 검사를 다시 실행하도록 요청합니다. `requested` 및 `rerequested` 작업에서 모두 검사 실행 만들기를 요구하므로 `create_check_run`이라는 도우미를 호출합니다. 이제 해당 메서드를 작성해 보겠습니다.

## 1\.3단계. 검사 실행 만들기

다른 경로로도 이 새 메서드를 사용하려면 메서드를 [Sinatra 도우미](https://github.com/sinatra/sinatra#helpers)로 추가합니다. `helpers do`에서 `create_check_run` 메서드를 추가합니다.

``` ruby
# Create a new check run with the status queued
def create_check_run
  @installation_client.create_check_run(
    # [String, Integer, Hash, Octokit Repository object] A GitHub repository.
    @payload['repository']['full_name'],
    # [String] The name of your check run.
    'Octo RuboCop',
    # [String] The SHA of the commit to check 
    # The payload structure differs depending on whether a check run or a check suite event occurred.
    @payload['check_run'].nil? ? @payload['check_suite']['head_sha'] : @payload['check_run']['head_sha'],
    # [Hash] 'Accept' header option, to avoid a warning about the API not being ready for production use.
    accept: 'application/vnd.github+json'
  )
end
```

이 코드는 [create_check_run 메서드](https://msp-greg.github.io/octokit/Octokit/Client/Checks.html#create_check_run-instance_method)를 사용하여 “[검사 실행 만들기](/rest/reference/checks#create-a-check-run)” 엔드포인트를 호출합니다.

검사 실행을 만들려면 `name`과 `head_sha`라는 두 개의 입력 매개 변수만 필요합니다. 빠른 시작의 뒷부분에서 [RuboCop](https://rubocop.readthedocs.io/en/latest/)을 사용하여 CI 테스트를 구현합니다. 따라서 여기서는 “Octo RuboCop”이라는 이름이 사용되지만 검사 실행에는 원하는 이름을 선택할 수 있습니다.

지금은 기본 기능이 작동하도록 필수 매개 변수만 제공하지만 나중에 검사 실행에 대한 자세한 정보를 수집할 때는 검사 실행을 업데이트합니다. 기본적으로 GitHub에서는 `status`를 `queued`로 설정합니다.

GitHub에서는 특정 커밋 SHA에 대한 검사 실행을 만듭니다. 따라서 `head_sha`가 필수 매개 변수입니다. 웹후크 페이로드에서 커밋 SHA를 찾을 수 있습니다. 지금은 `check_suite` 이벤트에 대한 검사 실행만 만들고 있지만 `head_sha`가 이벤트 페이로드의 `check_suite` 및 `check_run` 개체 모두에 포함된다는 것을 아는 것이 좋습니다.

위의 코드에서는 `if/else` 문처럼 작동하는 [삼항 연산자](https://ruby-doc.org/core-2.3.0/doc/syntax/control_expressions_rdoc.html#label-Ternary+if)를 사용하여 페이로드에 `check_run` 개체가 포함되어 있는지 확인합니다. 포함되어 있는 경우 `check_run` 개체에서 `head_sha`를 읽고, 포함되어 있지 않은 경우 `check_suite` 개체에서 읽습니다.

이 코드를 테스트하려면 터미널에서 서버를 다시 시작합니다.

```shell
$ ruby template_server.rb
```

{% data reusables.apps.sinatra_restart_instructions %}

이제 앱을 설치한 리포지토리에서 끌어오기 요청을 엽니다. 앱은 끌어오기 요청에서 검사 실행을 만들어 응답해야 합니다. **검사** 탭을 클릭하면 다음과 같이 표시됩니다.

![큐에 대기 중인 검사 실행](/assets/images/github-apps/github_apps_queued_check_run.png)

검사 탭에 다른 앱이 표시되는 경우 검사에 대한  **읽기 및 쓰기** 권한이 있고 **검사 도구 모음** 및 **검사 실행** 이벤트를 구독하는 다른 앱이 리포지토리에 설치되어 있음을 의미합니다.

좋습니다! GitHub에 확인 실행을 만들라고 지시했습니다. 검사 실행 상태가 노란색 아이콘 옆에 `queued`로 설정된 것을 볼 수 있습니다. 다음으로 GitHub에서 검사 실행을 만들고 상태를 업데이트할 때까지 기다려야 합니다.

## 1\.4단계. 검사 실행 업데이트

`create_check_run` 메서드가 실행되면 메서드가 GitHub에 새 검사 실행을 만들도록 요청합니다. GitHub가 검사 실행 만들기를 마치면 `created` 작업과 함께 `check_run` 웹후크 이벤트를 받게 됩니다. 이 이벤트는 검사 실행을 시작하는 신호입니다.

`created` 작업을 찾으려면 이벤트 처리기를 업데이트해야 합니다. 이벤트 처리기를 업데이트하는 동안 `rerequested` 작업에 대한 조건을 추가할 수 있습니다. “다시 실행” 단추를 클릭하여 GitHub에서 단일 테스트를 다시 실행하는 경우 GitHub에서는 `rerequested` 검사 실행 이벤트를 앱으로 보냅니다. 검사 실행이 `rerequested`인 경우에는 프로세스를 처음부터 시작하고 새 검사 실행을 만드는 것이 좋습니다.

`post '/event_handler'` 경로에 `check_run` 이벤트의 조건을 포함하려면 `case request.env['HTTP_X_GITHUB_EVENT']` 아래에 다음 코드를 추가합니다.

``` ruby
when 'check_run'
  # Check that the event is being sent to this app
  if @payload['check_run']['app']['id'].to_s === APP_IDENTIFIER
    case @payload['action']
    when 'created'
      initiate_check_run
    when 'rerequested'
      create_check_run
    end
  end
```

GitHub에서 필요한 검사 권한이 있는 리포지토리에 설치된 모든 앱에 `created` 검사 실행에 대한 모든 이벤트를 보냅니다. 즉, 앱이 다른 앱에서 만든 검사 실행을 받게 됩니다. `created` 검사 실행은 검사 실행을 요청받고 있는 앱으로만 GitHub에서 보내는 `requested` 또는 `rerequested` 검사 도구 모음과 약간 다릅니다. 위의 코드는 검사 실행의 애플리케이션 ID를 찾습니다. 이렇게 하면 리포지토리의 다른 앱에 대한 모든 검사 실행이 필터링됩니다.

다음으로 검사 실행 상태를 업데이트하고 CI 테스트를 시작할 준비를 하는 `initiate_check_run` 메서드를 작성합니다.

이 섹션에서는 CI 테스트를 아직 시작하지는 않지만 검사 실행의 상태를 `queued`에서 `pending`으로 업데이트한 다음 `pending`에서 `completed`로 업데이트하여 검사 실행의 전체 흐름을 확인하는 방법을 안내합니다. “[2부: Octo RuboCop CI 테스트 만들기](#part-2-creating-the-octo-rubocop-ci-test)”에서 실제로 CI 테스트를 수행하는 코드를 추가합니다.

`initiate_check_run` 메서드를 만들고 검사 실행의 상태를 업데이트해 보겠습니다. 도우미 섹션에 다음 코드를 추가합니다.

``` ruby
# Start the CI process
def initiate_check_run
  # Once the check run is created, you'll update the status of the check run
  # to 'in_progress' and run the CI process. When the CI finishes, you'll
  # update the check run status to 'completed' and add the CI results.

  @installation_client.update_check_run(
    @payload['repository']['full_name'],
    @payload['check_run']['id'],
    status: 'in_progress',
    accept: 'application/vnd.github+json'
  )

  # ***** RUN A CI TEST *****

  # Mark the check run as complete!
  @installation_client.update_check_run(
    @payload['repository']['full_name'],
    @payload['check_run']['id'],
    status: 'completed',
    conclusion: 'success',
    accept: 'application/vnd.github+json'
  )
end
```

이미 만든 검사 실행을 업데이트하기 위해 위의 코드가 [`update_check_run` Octokit 메서드](https://msp-greg.github.io/octokit/Octokit/Client/Checks.html#update_check_run-instance_method)를 사용하여 “[검사 실행 업데이트](/rest/reference/checks#update-a-check-run)” API 엔드포인트를 호출합니다.

이 코드가 수행하는 작업을 살펴보겠습니다. 먼저 검사 실행 상태를 `in_progress`로 업데이트하고 `started_at` 시간을 현재 시간으로 암시적으로 설정합니다. 빠른 시작의 [2부](#part-2-creating-the-octo-rubocop-ci-test)에서는 실제 CI 테스트를 시작하는 코드를 `***** RUN A CI TEST *****` 아래에 추가합니다. 지금은 해당 섹션을 자리 표시자로 남겨 두므로 뒤에 오는 코드는 CI 프로세스가 성공하고 모든 테스트가 통과한다는 것을 시뮬레이션합니다. 마지막으로 코드는 검사 실행의 상태를 다시 `completed`로 업데이트합니다.

“[검사 실행 업데이트](/rest/reference/checks#update-a-check-run)” 문서를 보면 `completed`인 상태를 제공할 때 `conclusion` 및 `completed_at` 매개 변수가 필요하다는 것을 알 수 있습니다. `conclusion`에 검사 실행의 결과가 요약되어 있으며 결과는 `success`, `failure`, `neutral`, `cancelled`, `timed_out` 또는 `action_required`이 될 수 있습니다. 결론을 `success`로, `completed_at` 시간을 현재 시간으로, 상태를 `completed`로 설정합니다.

검사에 대한 자세한 내용을 제공할 수도 있지만 다음 섹션에서 제공하도록 합니다. `template_server.rb`를 다시 실행하여 이 코드를 다시 테스트해 보겠습니다.

```shell
$ ruby template_server.rb
```

열린 끌어오기 요청으로 이동하여 **검사** 탭을 클릭합니다. 왼쪽 상단 구석에서 “모두 다시 실행” 단추를 클릭합니다. 검사 실행이 `pending`에서 `in_progress`로 이동하고 `success`로 끝나는 것을 볼 수 있습니다.

![완료된 검사 실행](/assets/images/github-apps/github_apps_complete_check_run.png)

## 2부. Octo RuboCop CI 테스트 만들기

[RuboCop](https://rubocop.readthedocs.io/en/latest/)은 Ruby 코드 Linter 및 포맷터로, Ruby 코드를 검사하여 “[Ruby 스타일 가이드](https://github.com/rubocop-hq/ruby-style-guide)”를 준수하는지 확인합니다. RuboCop에는 다음과 같은 세 가지 기본 기능이 있습니다.

* 코드 스타일을 확인하는 린팅
* 코드 서식
* `ruby -w`를 사용하여 네이티브 Ruby 린팅 기능을 대체합니다.

이제 Checks API 이벤트를 수신하고 검사 실행을 만들기 위해 인터페이스를 만들었으므로 CI 테스트를 구현하는 검사 실행을 만들 수 있습니다.

앱은 CI 서버에서 RuboCop을 실행하고 RuboCop이 GitHub에 보고하는 결과를 보고하는 검사 실행(이 경우 CI 테스트)을 만듭니다.

Checks API를 사용하면 상태, 이미지, 요약, 주석, 요청된 작업을 포함하여 각 검사 실행에 대한 다양한 세부 정보를 보고할 수 있습니다.

주석은 리포지토리의 특정 코드 줄에 대한 정보입니다. 주석을 사용하면 추가 정보를 표시하려는 코드의 정확한 부분을 정확히 파악하고 시각화할 수 있습니다. 해당 정보는 설명, 오류, 경고 등 모든 것이 될 수 있습니다. 이 빠른 시작에서는 주석을 사용하여 RuboCop 오류를 시각화합니다.

요청된 작업을 활용하기 위해 앱 개발자는 끌어오기 요청의 **검사** 탭에서 단추를 만들 수 있습니다. 누군가가 해당 단추 중 하나를 클릭하면 GitHub 앱에 `requested_action``check_run` 이벤트가 전송됩니다. 앱이 수행하는 작업은 앱 개발자가 전부 구성할 수 있습니다. 이 빠른 시작에서는 사용자가 RuboCop에서 발견한 오류를 수정하도록 요청할 수 있는 단추를 추가하는 방법을 안내합니다. RuboCop은 명령줄 옵션을 사용하여 오류 자동 수정을 지원하며 사용자는 이 옵션을 활용하도록 `requested_action`을 구성합니다.

그럼 시작하겠습니다. 이 섹션에서 완료할 단계는 다음과 같습니다.

1. [Ruby 파일 추가](#step-21-adding-a-ruby-file)
1. [리포지토리 복제](#step-22-cloning-the-repository)
1. [RuboCop 실행](#step-23-running-rubocop)
1. [RuboCop 오류 수집](#step-24-collecting-rubocop-errors)
1. [CI 테스트 결과를 사용하여 검사 실행 업데이트](#step-25-updating-the-check-run-with-ci-test-results)
1. [RuboCop 오류 자동 수정](#step-26-automatically-fixing-rubocop-errors)
1. [보안 팁](#step-27-security-tips)

## 2\.1 단계. Ruby 파일 추가

RuboCop에 대한 특정 파일 또는 전체 디렉터리를 전달하여 확인할 수 있습니다. 이 빠른 시작에서는 전체 디렉터리에서 RuboCop을 실행합니다. RuboCop은 Ruby 코드만 검사하므로 리포지토리에 오류가 포함된 Ruby 파일이 하나 이상 있어야 합니다. 아래에 제공된 예제 파일에는 몇 가지 오류가 포함되어 있습니다. 앱이 설치되어 있는 리포지토리에 이 예제 Ruby 파일을 추가합니다(`myfile.rb`에서와 같이 확장명 `.rb`로 파일 이름을 만듭니다).

```ruby
# The Octocat class tells you about different breeds of Octocat
class Octocat
  def initialize(name, *breeds)
    # Instance variables
    @name = name
    @breeds = breeds
  end

  def display
    breed = @breeds.join("-")

    puts "I am of #{breed} breed, and my name is #{@name}."
  end
end

m = Octocat.new("Mona", "cat", "octopus")
m.display
```

## 2\.2 단계. 리포지토리 복제

RuboCop은 명령줄 유틸리티로 사용할 수 있습니다. 즉, GitHub 앱은 RuboCop에서 파일을 구문 분석할 수 있도록 CI 서버에서 리포지토리의 로컬 복사본을 복제해야 합니다. Ruby 앱에서 Git 작업을 실행하려면 [ruby-git](https://github.com/ruby-git/ruby-git) gem을 사용할 수 있습니다.

`building-a-checks-api-ci-server` 리포지토리의 `Gemfile`에는 ruby-git gem이 이미 포함되어 있으며 [필수 구성 요소 단계](#prerequisites)에서 `bundle install`을 실행했을 때 ruby-git gem을 설치했습니다. gem을 사용하려면 `template_server.rb` 파일 맨 위에 다음 코드를 추가합니다.

``` ruby
require 'git'
```

리포지토리를 복제하려면 앱에 “리포지토리 콘텐츠”에 대한 읽기 권한이 필요합니다. 빠른 시작의 뒷부분에서 쓰기 권한이 필요한 콘텐츠를 GitHub로 푸시해야 합니다. 계속해서 앱의 “리포지토리 콘텐츠” 권한을 지금 **읽기 및 쓰기** 로 설정하면 나중에 다시 업데이트할 필요가 없습니다. 앱의 사용 권한 업데이트 방법은 다음과 같습니다.

1. [앱 설정 페이지](https://github.com/settings/apps)에서 앱을 선택하고 사이드바에서 **사용 권한 및 웹후크** 를 클릭합니다.
1. “사용 권한” 섹션에서 “리포지토리 콘텐츠”를 찾고 옆에 있는 “액세스” 드롭다운에서 **읽기 및 쓰기** 를 선택합니다.
{% data reusables.apps.accept_new_permissions_steps %}

GitHub 앱의 권한을 사용하여 리포지토리를 복제하려면 아래 예제에 표시된 앱의 설치 토큰(`x-access-token:<token>`)을 사용할 수 있습니다.

```shell
git clone https://x-access-token:<token>@github.com/<owner>/<repo>.git
```

위의 코드는 HTTP를 통해 리포지토리를 복제합니다. 리포지토리 소유자(사용자 또는 조직) 및 리포지토리 이름을 포함하는 전체 리포지토리 이름이 필요합니다. 예를 들어 [octocat Hello-World](https://github.com/octocat/Hello-World) 리포지토리의 전체 이름은 `octocat/hello-world`입니다.

앱은 리포지토리를 복제한 후 최신 코드 변경 내용을 풀하고 특정 Git 참조를 체크 아웃해야 합니다. 이 모든 작업을 수행하는 코드는 자체 메서드에 잘 맞습니다. 작업을 수행하려면 메서드에 체크 아웃할 리포지토리와 참조의 이름과 전체 이름이 필요합니다. 참조는 커밋 SHA, 분기 또는 태그가 될 수 있습니다. 다음 새 메서드를 `template_server.rb`의 도우미 메서드 섹션에 추가합니다.

``` ruby
# Clones the repository to the current working directory, updates the
# contents using Git pull, and checks out the ref.
#
# full_repo_name  - The owner and repo. Ex: octocat/hello-world
# repository      - The repository name
# ref             - The branch, commit SHA, or tag to check out
def clone_repository(full_repo_name, repository, ref)
  @git = Git.clone("https://x-access-token:#{@installation_token.to_s}@github.com/#{full_repo_name}.git", repository)
  pwd = Dir.getwd()
  Dir.chdir(repository)
  @git.pull
  @git.checkout(ref)
  Dir.chdir(pwd)
end
```

위의 코드는 `ruby-git` gem을 사용하여 앱의 설치 토큰을 통해 리포지토리를 복제합니다. 이 코드는 `template_server.rb`와 동일한 디렉터리에 있는 코드를 복제합니다. 리포지토리에서 Git 명령을 실행하려면 코드를 리포지토리 디렉터리로 변경해야 합니다. 디렉터리를 변경하기 전에 코드는 현재 작업 디렉터리를 변수(`pwd`)에 저장하여 `clone_repository` 메서드를 끝내기 전에 반환할 위치를 기억합니다.

리포지토리 디렉터리에서 이 코드는 최신 변경 내용(`@git.pull`)을 가져와 병합하고, 참조(`@git.checkout(ref)`)를 체크 아웃한 다음, 디렉터리를 원래 작업 디렉터리(`pwd`)로 다시 변경합니다.

이제 리포지토리를 복제하고 참조를 체크 아웃하는 메서드가 있습니다. 다음으로, 필요한 입력 매개 변수를 가져와서 새 `clone_repository` 메서드를 호출하는 코드를 추가해야 합니다. `initiate_check_run` 도우미 메서드의 `***** RUN A CI TEST *****` 주석 아래에 다음 코드를 추가합니다.

``` ruby
# ***** RUN A CI TEST *****
full_repo_name = @payload['repository']['full_name']
repository     = @payload['repository']['name']
head_sha       = @payload['check_run']['head_sha']

clone_repository(full_repo_name, repository, head_sha)
```

위의 코드는 `check_run` 웹후크 페이로드에서 전체 리포지토리 이름 및 커밋의 헤드 SHA를 가져옵니다.

## 2\.3 단계. RuboCop 실행

좋습니다! CI 서버를 사용하여 리포지토리를 복제하고 검사 실행을 만듭니다. 이제 [RuboCop Linter](https://docs.rubocop.org/rubocop/usage/basic_usage.html#code-style-checker) 및 [Checks API 주석](/rest/reference/checks#create-a-check-run)의 핵심 세부 정보를 살펴보겠습니다.

다음 코드는 RuboCop을 실행하고 스타일 코드 오류를 JSON 형식으로 저장합니다. [이전 단계](#step-22-cloning-the-repository)에서 추가한 `clone_repository`에 대한 호출 아래와 완료할 검사 실행을 업데이트하는 코드 위에 이 코드를 추가합니다.

``` ruby
# Run RuboCop on all files in the repository
@report = `rubocop '#{repository}' --format json`
logger.debug @report
`rm -rf #{repository}`
@output = JSON.parse @report
```

위의 코드는 리포지토리의 디렉터리에 있는 모든 파일에서 RuboCop을 실행합니다. `--format json` 옵션은 린팅 결과의 복사본을 컴퓨터 구문 분석 가능한 형식으로 저장하는 편리한 방법입니다. 자세한 내용 및 JSON 형식의 예제는 [RuboCop 문서](https://docs.rubocop.org/rubocop/formatters.html#json-formatter)를 참조하세요.

이 코드는 RuboCop 결과를 `@report` 변수에 저장하므로 리포지토리의 체크 아웃을 안전하게 제거할 수 있습니다. 또한 이 코드는 `@output` 변수를 사용하여 GitHub 앱의 키와 값에 쉽게 액세스할 수 있도록 JSON을 구문 분석합니다.

{% note %}

**참고:** 리포지토리를 제거하는 데 사용되는 명령(`rm -rf`)은 실행 취소할 수 없습니다. [2.7단계. 보안 팁](#step-27-security-tips)에서 앱에서 의도한 것과 다른 디렉터리를 제거하는 데 사용할 수 있는 삽입된 악성 명령에 대한 웹후크를 확인하는 방법을 알아보세요. 예를 들어 악의적인 작업자가 리포지토리 이름이 `./`인 웹후크를 보내는 경우 앱이 루트 디렉터리를 제거합니다. 😱 어떤 이유로 웹후크를 보낸 사람의 유효성을 검사할 때 `verify_webhook_signature` 메서드(`template_server.rb`에 포함)를 사용하지 않는 경우 리포지토리 이름이 유효한지 확인해야 합니다.

{% endnote %}

이 코드가 작동하는지 테스트하고 서버의 디버그 출력에서 RuboCop에서 보고한 오류를 확인할 수 있습니다. `template_server.rb` 서버를 다시 시작하고, 앱을 테스트하는 리포지토리에서 새 끌어오기 요청을 만듭니다.

```shell
$ ruby template_server.rb
```

디버그 출력에는 린팅 오류가 표시되지만 서식으로 인쇄되지는 않습니다. [JSON 포맷터](https://jsonformatter.org/)와 같은 웹 도구를 사용하여 다음과 같이 서식이 지정된 린팅 오류 출력과 같은 JSON 출력의 서식을 지정할 수 있습니다.

```json
{
  "metadata": {
    "rubocop_version": "0.60.0",
    "ruby_engine": "ruby",
    "ruby_version": "2.3.7",
    "ruby_patchlevel": "456",
    "ruby_platform": "universal.x86_64-darwin18"
  },
  "files": [
    {
      "path": "Octocat-breeds/octocat.rb",
      "offenses": [
        {
          "severity": "convention",
          "message": "Style/StringLiterals: Prefer single-quoted strings when you don't need string interpolation or special symbols.",
          "cop_name": "Style/StringLiterals",
          "corrected": false,
          "location": {
            "start_line": 17,
            "start_column": 17,
            "last_line": 17,
            "last_column": 22,
            "length": 6,
            "line": 17,
            "column": 17
          }
        },
        {
          "severity": "convention",
          "message": "Style/StringLiterals: Prefer single-quoted strings when you don't need string interpolation or special symbols.",
          "cop_name": "Style/StringLiterals",
          "corrected": false,
          "location": {
            "start_line": 17,
            "start_column": 25,
            "last_line": 17,
            "last_column": 29,
            "length": 5,
            "line": 17,
            "column": 25
          }
        }
      ]
    }
  ],
  "summary": {
    "offense_count": 2,
    "target_file_count": 1,
    "inspected_file_count": 1
  }
}
```

## 2\.4단계. RuboCop 오류 수집

`@output` 변수에는 RuboCop 보고서의 구문 분석된 JSON 결과가 포함됩니다. 위와 같이 결과에는 `summary` 섹션이 포함되어 있기 때문에 코드가 오류의 유무를 신속하게 확인할 수 있습니다. 다음 코드는 보고된 오류가 없는 경우 검사 실행 결론을 `success`로 설정합니다. RuboCop은 `files` 배열의 각 파일에 대한 오류를 보고하므로 오류가 있는 경우 파일 개체에서 일부 데이터를 추출해야 합니다.

Checks API를 사용하면 특정 코드 줄에 대한 주석을 만들 수 있습니다. 검사 실행을 만들거나 업데이트할 때 주석을 추가할 수 있습니다. 이 빠른 시작에서는 주석으로 [검사 실행을 업데이트](/rest/reference/checks#update-a-check-run)합니다.

Checks API는 주석 수를 API 요청당 최대 50개로 제한합니다. 50개 이상의 주석을 만들려면 [검사 실행 업데이트](/rest/reference/checks#update-a-check-run) 엔드포인트에 대한 요청을 여러 차례 수행해야 합니다. 예를 들어 105개의 주석을 만들려면 [검사 실행 업데이트](/rest/reference/checks#update-a-check-run) 엔드포인트를 세 번 호출해야 합니다. 처음 두 요청에는 각각 50개의 주석이 있고, 세 번째 요청에는 나머지 5개의 주석이 포함됩니다. 검사 실행을 업데이트할 때마다 검사 실행에 이미 존재하는 주석 목록에 주석이 추가됩니다.

검사 실행에는 주석이 개체 배열로 예상됩니다. 각 주석 개체에는 `path`, `start_line`, `end_line`, `annotation_level` 및 `message`가 포함되어야 합니다. RuboCop도 `start_column` 및 `end_column`을 제공하므로 주석에 선택적 매개 변수를 포함할 수 있습니다. 주석은 동일한 줄에서 `start_column` 및 `end_column`만 지원합니다. 자세한 내용은[`annotations` 개체](/rest/reference/checks#annotations-object-1)를 참조하세요.

각 주석을 만드는 데 필요한 정보를 RuboCop에서 추출합니다. [이전 섹션](#step-23-running-rubocop)에서 추가한 코드에 다음 코드를 추가합니다.

``` ruby
annotations = []
# You can create a maximum of 50 annotations per request to the Checks
# API. To add more than 50 annotations, use the "Update a check run" API
# endpoint. This example code limits the number of annotations to 50.
# See /rest/reference/checks#update-a-check-run
# for details.
max_annotations = 50

# RuboCop reports the number of errors found in "offense_count"
if @output['summary']['offense_count'] == 0
  conclusion = 'success'
else
  conclusion = 'neutral'
  @output['files'].each do |file|

    # Only parse offenses for files in this app's repository
    file_path = file['path'].gsub(/#{repository}\//,'')
    annotation_level = 'notice'

    # Parse each offense to get details and location
    file['offenses'].each do |offense|
      # Limit the number of annotations to 50
      next if max_annotations == 0
      max_annotations -= 1

      start_line   = offense['location']['start_line']
      end_line     = offense['location']['last_line']
      start_column = offense['location']['start_column']
      end_column   = offense['location']['last_column']
      message      = offense['message']

      # Create a new annotation for each error
      annotation = {
        path: file_path,
        start_line: start_line,
        end_line: end_line,
        start_column: start_column,
        end_column: end_column,
        annotation_level: annotation_level,
        message: message
      }
      # Annotations only support start and end columns on the same line
      if start_line == end_line
        annotation.merge({start_column: start_column, end_column: end_column})
      end

      annotations.push(annotation)
    end
  end
end
```

이 코드는 주석의 총 수를 50으로 제한합니다. 그러나 각 50개 주석 배치에 대한 검사 실행을 업데이트하도록 이 코드를 수정할 수 있습니다. 위의 코드에는 제한을 50으로 설정하는 변수 `max_annotations`가 포함되어 있으며, 공격을 반복하는 루프에서 사용됩니다.

`offense_count`가 0이면 CI 테스트는 `success`입니다. 오류가 있는 경우 이 코드는 코드 Linter의 오류를 엄격하게 적용하지 않도록 결론을 `neutral`로 설정합니다. 그러나 린팅 오류가 있을 때 검사 도구 모음이 실패하도록 하려는 경우 결론을 `failure`로 변경할 수 있습니다.

오류가 보고되면 위의 코드는 RuboCop 보고서의 `files` 배열을 반복합니다. 또한 각 파일에 대해 파일 경로를 추출하고 주석 수준을 `notice`로 설정합니다. 사용자는 더 나아가 각 유형의 [RuboCop Cop](https://docs.rubocop.org/rubocop/cops.html)에 대해 특정 경고 수준을 설정할 수 있지만 이 빠른 시작에서 작업을 더 간단하게 유지하려면 모든 오류가 `notice` 수준으로 설정됩니다.

또한 이 코드는 `offenses` 배열의 각 오류를 반복하고 공격 및 오류 메시지의 위치를 수집합니다. 필요한 정보를 추출한 후 코드는 각 오류에 대한 주석을 만들어 `annotations` 배열에 저장합니다. 주석은 동일한 줄의 시작 및 끝 열만 지원하므로 시작 및 끝 줄 값이 동일한 경우에 `start_column` 및 `end_column`이 `annotation` 개체에만 추가됩니다.

이 코드로는 검사 실행에 대한 주석을 아직 만들지 않습니다. 다음 섹션에서 해당 코드를 추가합니다.

## 2\.5단계. CI 테스트 결과를 사용하여 검사 실행 업데이트

GitHub의 각 검사 실행에는 `title`, `summary`, `text`, `annotations` 및 `images`를 포함하는 `output` 개체가 포함됩니다. `output`에는 `summary` 및 `title` 매개 변수만 필요하지만 이 매개 변수만으로는 많은 세부 정보가 제공되지 않으므로 이 빠른 시작에서는 `text`와 `annotations`도 추가합니다. 이 코드는 이미지를 추가하지 않지만 원하는 경우 자유롭게 추가할 수 있습니다.

`summary`의 경우 이 예제에서는 RuboCop의 요약 정보를 사용하고 일부 줄 바꿈(`\n`)을 추가하여 출력의 서식을 지정합니다. `text` 매개 변수에 추가하는 항목을 사용자 지정할 수 있지만 이 예제에서는 `text` 매개 변수를 RuboCop 버전으로 설정합니다. `summary`와 `text`를 설정하려면 [이전 섹션](#step-24-collecting-rubocop-errors)에서 추가한 코드에 다음 코드를 추가합니다.

``` ruby
# Updated check run summary and text parameters
summary = "Octo RuboCop summary\n-Offense count: #{@output['summary']['offense_count']}\n-File count: #{@output['summary']['target_file_count']}\n-Target file count: #{@output['summary']['inspected_file_count']}"
text = "Octo RuboCop version: #{@output['metadata']['rubocop_version']}"
```

이제 검사 실행을 업데이트하는 데 필요한 모든 정보가 있습니다. [이 빠른 시작의 전반부](#step-14-updating-a-check-run)에서는 이 코드를 추가하여 검사 실행의 상태를 `success`로 설정했습니다.

``` ruby
# Mark the check run as complete!
@installation_client.update_check_run(
  @payload['repository']['full_name'],
  @payload['check_run']['id'],
  status: 'completed',
  conclusion: 'success',
  accept: 'application/vnd.github+json'
)
```

RuboCop 결과에 따라 설정한 `conclusion` 변수를 사용하도록 코드를 `success` 또는 `neutral`로 업데이트해야 합니다. 다음을 사용하여 코드를 업데이트할 수 있습니다.

``` ruby
# Mark the check run as complete! And if there are warnings, share them.
@installation_client.update_check_run(
  @payload['repository']['full_name'],
  @payload['check_run']['id'],
  status: 'completed',
  conclusion: conclusion,
  output: {
    title: 'Octo RuboCop',
    summary: summary,
    text: text,
    annotations: annotations
  },
  actions: [{
    label: 'Fix this',
    description: 'Automatically fix all linter notices.',
    identifier: 'fix_rubocop_notices'
  }],
  accept: 'application/vnd.github+json'
)
```

CI 테스트의 상태를 기반으로 결론을 설정하고 RuboCop 결과의 출력을 추가했으므로 CI 테스트 만들기를 완료했습니다. 축하합니다. 🙌

위의 코드는 또한 `actions` 개체를 통해 [요청된 작업](https://developer.github.com/changes/2018-05-23-request-actions-on-checks/)이라는 기능을 CI 서버에 추가합니다. {% ifversion fpt or ghec %}([GitHub Actions](/actions)와 관련이 없습니다.) {% endif %}요청된 작업으로 GitHub의 **검사** 탭에 단추가 추가되면 다른 사용자가 추가 작업을 수행하도록 검사 실행을 요청할 수 있습니다. 추가 작업은 앱에서 전부 구성할 수 있습니다. 예를 들어 RuboCop에는 Ruby 코드에서 찾은 오류를 자동으로 수정하는 기능이 있으므로 CI 서버는 요청된 작업 단추를 사용하여 사용자가 자동 오류 수정을 요청할 수 있도록 할 수 있습니다. 누군가가 단추를 클릭하면 앱이 `requested_action` 동작으로 `check_run` 이벤트를 받습니다. 요청된 각 작업에는 클릭한 단추를 판단하기 위해 앱에서 사용하는 `identifier`가 있습니다.

위의 코드에는 RuboCop이 아직 오류를 자동으로 수정하지 않습니다. 해당 기능은 다음 섹션에서 추가합니다. 하지만 먼저 `template_server.rb` 서버를 다시 시작하고 새 끌어오기 요청을 만들어 방금 만든 CI 테스트를 살펴보세요.

```shell
$ ruby template_server.rb
```

주석이 **검사** 탭에 표시됩니다.

![검사 탭에서 주석 검사 실행](/assets/images/github-apps/github_apps_checks_annotations.png)

요청된 작업을 추가하여 만든 “이 문제 해결” 단추를 확인합니다.

![요청된 작업 검사 실행 단추](/assets/images/github-apps/github_apps_checks_fix_this_button.png)

주석이 PR에 이미 포함된 파일과 관련된 경우 주석도 **변경된 파일** 탭에 표시됩니다.

![변경된 파일 탭에서 주석 검사 실행](/assets/images/github-apps/github_apps_checks_annotation_diff.png)

## 2\.6단계. RuboCop 오류 자동 수정

지금까지 잘 따라오신 분들을 칭찬합니다. 👏 CI 테스트는 이미 만들었습니다. 이 섹션에서는 발견한 오류를 RuboCop을 사용하여 자동으로 수정하는 기능을 하나 더 추가합니다. 이미 [이전 섹션](#step-25-updating-the-check-run-with-ci-test-results)에서 “이 문제 해결” 단추를 추가했습니다. 이제는 누군가 “이 문제 해결” 단추를 클릭할 때 트리거되는 `requested_action` 검사 실행 이벤트를 처리하는 코드를 추가하겠습니다.

RuboCop 도구는 발견한 오류를 자동으로 수정하는 `--auto-correct` 명령줄 옵션을 [제공](https://docs.rubocop.org/rubocop/usage/basic_usage.html#auto-correcting-offenses)합니다. `--auto-correct` 기능을 사용하면 업데이트가 서버의 로컬 파일에 적용됩니다. RuboCop으로 오류를 수정한 후 변경 내용을 GitHub 푸시해야 합니다.

리포지토리로 푸시하려면 앱에 “리포지토리 콘텐츠”에 대한 쓰기 권한이 있어야 합니다. [2.2단계. 리포지토리 복제](#step-22-cloning-the-repository)에서 권한을 **읽기 및 쓰기** 로 설정했으므로 설정이 모두 완료되었습니다.

파일을 커밋하려면 Git에서 커밋과 연결할 [사용자 이름](/github/getting-started-with-github/setting-your-username-in-git/) 및 [메일](/articles/setting-your-commit-email-address-in-git/)을 알고 있어야 합니다. `.env` 파일에서 두 개의 환경 변수를 추가하여 이름(`GITHUB_APP_USER_NAME`) 및 메일(`GITHUB_APP_USER_EMAIL`) 설정을 저장합니다. 앱의 이름으로 이름을 사용할 수 있으며 메일은 이 예제에서 사용하고자 하는 아무 메일이나 가능합니다. 예를 들면 다음과 같습니다.

```ini
GITHUB_APP_USER_NAME=Octoapp
GITHUB_APP_USER_EMAIL=octoapp@octo-org.com
```

작성자와 커밋한 사람의 이름과 메일로 `.env` 파일을 업데이트하면 환경 변수를 읽고 Git 구성을 설정하는 코드를 추가할 준비가 됩니다. 곧 해당 코드를 추가할 것입니다.

누군가가 "이 문제 해결" 단추를 클릭하면 앱에서 작업 유형이 `requested_action`인 [검사 실행 웹후크](/webhooks/event-payloads/#check_run)를 받습니다.

[1.4단계. 검사 실행 업데이트](#step-14-updating-a-check-run)에서 `event_handler`를 업데이트하여 `check_run` 이벤트에서 작업을 찾았습니다. `created` 및 `rerequested` 작업 형식을 처리할 case 문이 이미 있습니다.

``` ruby
when 'check_run'
  # Check that the event is being sent to this app
  if @payload['check_run']['app']['id'].to_s === APP_IDENTIFIER
    case @payload['action']
    when 'created'
      initiate_check_run
    when 'rerequested'
      create_check_run
  end
end
```

`rerequested` case 뒤에 다른 `when` 문을 추가하여 `rerequested_action` 이벤트를 처리합니다.

``` ruby
when 'requested_action'
  take_requested_action
```

이 코드는 앱에 대한 모든 `requested_action` 이벤트를 처리하는 새 메서드를 호출합니다. 코드의 도우미 메서드 섹션에 다음 메서드를 추가합니다.

``` ruby
# Handles the check run `requested_action` event
# See /webhooks/event-payloads/#check_run
def take_requested_action
  full_repo_name = @payload['repository']['full_name']
  repository     = @payload['repository']['name']
  head_branch    = @payload['check_run']['check_suite']['head_branch']

  if (@payload['requested_action']['identifier'] == 'fix_rubocop_notices')
    clone_repository(full_repo_name, repository, head_branch)

    # Sets your commit username and email address
    @git.config('user.name', ENV['GITHUB_APP_USER_NAME'])
    @git.config('user.email', ENV['GITHUB_APP_USER_EMAIL'])

    # Automatically correct RuboCop style errors
    @report = `rubocop '#{repository}/*' --format json --auto-correct`

    pwd = Dir.getwd()
    Dir.chdir(repository)
    begin
      @git.commit_all('Automatically fix Octo RuboCop notices.')
      @git.push("https://x-access-token:#{@installation_token.to_s}@github.com/#{full_repo_name}.git", head_branch)
    rescue
      # Nothing to commit!
      puts 'Nothing to commit'
    end
    Dir.chdir(pwd)
    `rm -rf '#{repository}'`
  end
end
```

위의 코드는 [2.2단계. 리포지토리 복제](#step-22-cloning-the-repository)에서 추가한 코드와 마찬가지로 리포지토리를 복제합니다 `if` 문은 요청된 작업의 식별자가 RuboCop 단추 식별자(`fix_rubocop_notices`)와 일치하는지 확인합니다. 일치하는 경우 코드는 리포지토리를 복제하고, Git 사용자 이름 및 메일을 설정하고, `--auto-correct` 옵션을 사용하여 RuboCop을 실행합니다. `--auto-correct` 옵션은 로컬 CI 서버 파일에 변경 내용을 자동으로 적용합니다.

파일은 로컬로 변경되지만 여전히 파일을 GitHub로 푸시해야 합니다. 편리한 `ruby-git` gem을 다시 사용하여 모든 파일을 커밋합니다. Git에는 수정되거나 삭제된 모든 파일을 스테이징하고 커밋하는 단일 명령(`git commit -a`)이 있습니다. `ruby-git`를 사용하여 동일한 작업을 수행하기 위해 위의 코드에서 `commit_all` 메서드를 사용합니다. 그런 다음 코드는 Git `clone` 명령과 동일한 인증 방법을 사용하는 설치 토큰을 통해 커밋된 파일을 GitHub로 푸시합니다. 마지막으로 코드는 리포지토리 디렉터리를 제거하여 작업 디렉터리가 다음 이벤트에 대해 준비되었는지 확인합니다.

정말 간단하죠. 이제 작성한 코드가 Checks API CI 서버를 완성합니다. 💪 `template_server.rb` 서버를 다시 시작하고 새 끌어오기 요청을 만듭니다.

```shell
$ ruby template_server.rb
```

{% data reusables.apps.sinatra_restart_instructions %}

이번에는 "이 문제 해결" 단추를 클릭하여 **검사** 탭에서 RuboCop이 발견한 오류를 자동으로 수정합니다.

**커밋** 탭에 Git 구성에서 설정한 사용자 이름으로 새 커밋이 표시됩니다. 업데이트를 보려면 브라우저를 새로 고쳐야 할 수 있습니다.

![Octo RuboCop 알림을 자동으로 수정하는 새 커밋](/assets/images/github-apps/github_apps_new_requested_action_commit.png)

새 커밋이 리포지토리로 푸시되었으므로 **검사** 탭에 Octo RuboCop의 새 검사 도구 모음이 표시됩니다. 그러나 이번에는 RuboCop이 오류를 모두 수정했기 때문에 오류가 없습니다. 🎉

![검사 도구 모음 또는 검사 실행 오류 없음](/assets/images/github-apps/github_apps_checks_api_success.png)

[Checks API로 CI 테스트 만들기](https://github.com/github-developer/creating-ci-tests-with-the-checks-api) 리포지토리에서 `server.rb` 파일에 방금 빌드한 앱의 완성된 코드를 찾을 수 있습니다.

## 2\.7단계. 보안 팁

템플릿 GitHub 앱 코드에는 들어오는 웹후크 페이로드를 확인하여 신뢰할 수 있는 소스에서 온 것인지 확인하는 메서드가 이미 있습니다. 웹후크 페이로드의 유효성을 검사하지 않는 경우 리포지토리 이름이 웹후크 페이로드에 포함될 때 웹후크에 악의적으로 사용할 수 있는 임의의 명령이 포함되어 있지 않는지 확인해야 합니다. 아래 코드는 리포지토리 이름에 라틴어 알파벳 문자, 하이픈 및 밑줄만 포함되는지 확인합니다. 전체 예제를 제공하기 위해 이 빠른 시작의 [도우미 리포지토리](https://github.com/github-developer/creating-ci-tests-with-the-checks-api)에 있는 전체 `server.rb` 코드에는 들어오는 웹후크 페이로드의 유효성을 검사하는 메서드와 리포지토리 이름을 확인하는 이 검사가 모두 포함됩니다.

``` ruby
# This quickstart example uses the repository name in the webhook with
# command-line utilities. For security reasons, you should validate the
# repository name to ensure that a bad actor isn't attempting to execute
# arbitrary commands or inject false repository names. If a repository name
# is provided in the webhook, validate that it consists only of latin
# alphabetic characters, `-`, and `_`.
unless @payload['repository'].nil?
  halt 400 if (@payload['repository']['name'] =~ /[0-9A-Za-z\-\_]+/).nil?
end
```

## 문제 해결

다음은 몇 가지 일반적인 문제와 제안된 해결 방법입니다. 다른 문제가 발생하면 {% data reusables.support.prodname_support_forum_with_url %}에서 도움말이나 조언을 요청할 수 있습니다.

* **Q:** 내 앱이 GitHub 코드를 푸시하지 않습니다. RuboCop에서 자동으로 실행으로 수정 사항이 표시되지 않습니다.

    **A:** “리포지토리 콘텐츠”에 대한 **읽기 및 쓰기** 권한이 있고 설치 토큰을 사용하여 리포지토리를 복제하고 있는지 확인하세요. 자세한 내용은 [2.2단계. 리포지토리 복제](#step-22-cloning-the-repository)를 참조하세요.

* **Q:** 리포지토리 복제와 관련된 `template_server.rb` 디버그 출력에 오류가 표시됩니다.

    **A:** 다음 오류가 표시되면 `initiate_check_run` 또는 `take_requested_action` 메서드 중 하나 또는 둘 다에서 리포지토리의 체크 아웃을 삭제하지 않은 것입니다.

    ```shell
    2018-11-26 16:55:13 - Git::GitExecuteError - git  clone '--' 'https://x-access-token:ghs_9b2080277016f797074c4dEbD350745f4257@github.com/codertocat/octocat-breeds.git' 'Octocat-breeds'  2>&1:fatal: destination path 'Octocat-breeds' already exists and is not an empty directory.:
    ```

    코드와 `server.rb` 파일을 비교하여 `initiate_check_run` 메서드와 `take_requested_action` 메서드에 동일한 코드가 있는지 확인하세요.

* **Q:** GitHub의 “검사” 탭에 새 검사 실행이 표시되지 않습니다.

    **A:** Smee를 다시 시작하고 `template_server.rb` 서버를 다시 실행합니다.

* **Q:** GitHub “검사” 탭에 "모두 다시 실행" 단추가 표시되지 않습니다.

    **A:** Smee를 다시 시작하고 `template_server.rb` 서버를 다시 실행합니다.

## 결론

이 가이드의 자세한 설명을 통해 Checks API를 사용한 CI 서버 만들기의 기초를 배웠습니다. 요약하면 다음과 같습니다.

* Checks API 이벤트를 수신하고 검사 실행을 만들도록 서버를 구성했습니다.
* RuboCop을 사용하여 리포지토리의 코드를 확인하고 오류에 대한 주석을 만들었습니다.
* Linter 오류를 자동으로 수정하는 요청된 작업을 구현했습니다.

## 다음 단계

다음에 수행할 작업에 대한 몇 가지 아이디어를 살펴봅니다.

* 현재 “이 문제 해결” 단추가 항상 표시됩니다. RuboCop에서 오류를 발견하는 경우에만 “이 문제 해결” 단추를 표시하도록 작성한 코드를 업데이트합니다.
* RuboCop에서 헤드 분기에 직접 파일을 커밋하지 않으려면 헤드 분기를 기반으로 하는 새 분기를 사용하여 [끌어오기 요청 만들기](/rest/reference/pulls#create-a-pull-request)를 수행하도록 코드를 업데이트할 수 있습니다.
