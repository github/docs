---
title: 리포지토리에 대한 문제 템플릿 구성
intro: 기여자가 리포지토리에서 새 문제를 공개할 때 사용할 수 있는 템플릿을 사용자 지정할 수 있습니다.
redirect_from:
  - /github/building-a-strong-community/creating-issue-templates-for-your-repository
  - /articles/configuring-issue-templates-for-your-repository
  - /github/building-a-strong-community/configuring-issue-templates-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Configure
ms.openlocfilehash: d415d95f8aeab1b053663437b6dbf6dd637e3039
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147431994'
---
{% ifversion fpt or ghes or ghec %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

## 문제 템플릿 만들기

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. “기능” 섹션의 “문제”에서 **템플릿 설정** 을 클릭합니다.
![템플릿 설정 시작 단추](/assets/images/help/repository/set-up-templates.png)
4. 템플릿 추가 드롭다운 메뉴를 사용하고 만들려는 템플릿 유형을 클릭합니다.
![템플릿 드롭다운 메뉴 추가](/assets/images/help/repository/add-template-drop-down-menu.png)
5. 리포지토리에 커밋하기 전에 템플릿을 미리 보거나 편집하려면 **미리 보기 및 편집** 을 클릭합니다.
![미리 보기 및 편집 단추](/assets/images/help/repository/preview-and-edit-button.png)
6. 서식 파일을 편집하려면 {% octicon "pencil" aria-label="The edit icon" %}을 클릭하고 필드에 입력하여 내용을 편집합니다.
![문제 템플릿 편집 단추](/assets/images/help/repository/issue-template-edit-button.png)
7. 기본 문제 제목을 자동으로 설정하려면 리포지토리에 대한 읽기 권한이 있는 사용자에게 문제를 할당하거나 문제 템플릿에 레이블을 적용하려면 다음 세부 정보를 “선택적 추가 정보”에 입력합니다. YAML Frontmatter 형식의 `title`, `labels` 또는 `assignees`을 사용하여 문제 템플릿에 이러한 세부 정보를 추가할 수도 있습니다.
![문제 템플릿에 대한 추가 정보](/assets/images/help/repository/additional-issue-template-info.png)
8. 템플릿 수정 및 미리 보기가 끝나면 페이지 오른쪽 위에 있는 **변경 내용 제안** 을 클릭합니다.
![변경 내용 제안 단추](/assets/images/help/repository/propose-changes-button.png)
9. 변경 내용을 설명하는 커밋 메시지를 입력합니다.
![문제 템플릿 커밋 메시지 필드](/assets/images/help/repository/issue-template-commit-message-field.png)
10. 커밋 메시지 필드 아래에서 템플릿을 기본 분기에 직접 커밋할지 또는 새 분기를 만들고 끌어오기 요청을 열 것인지 결정합니다. 끌어오기 요청에 대한 자세한 내용은 “[끌어오기 요청 정보](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)”를 참조하세요.
![기본 또는 열린 끌어오기 요청 선택에 대한 문제 템플릿 커밋](/assets/images/help/repository/issue-template-commit-to-master-or-open-pull-request.png)
11. **변경 내용 커밋** 을 클릭합니다. 이러한 변경 내용이 기본 분기에 병합되면 참가자가 리포지토리에서 새 문제를 열 때 사용할 수 있는 템플릿이 제공됩니다.

{% ifversion fpt or ghec %}

## 문제 양식 만들기

{% data reusables.community.issue-forms-beta %}

문제 양식을 사용하면 사용자 지정 가능한 웹 양식 필드가 있는 문제 템플릿을 만들 수 있습니다. 리포지토리에서 문제 양식을 사용하여 기여자가 특정하고 구조화된 정보를 포함하도록 장려할 수 있습니다. 문제 양식은 {% data variables.product.prodname_dotcom %} 양식 스키마를 사용하여 YAML로 작성됩니다. 자세한 내용은 “[{% data variables.product.prodname_dotcom %}의 양식 스키마 구문](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)”을 참조하세요. {% data reusables.actions.learn-more-about-yaml %}

리포지토리에서 문제 양식을 사용하려면 새 파일을 만들고 리포지토리의 `.github/ISSUE_TEMPLATE` 폴더에 추가해야 합니다.

다음은 문제 양식 구성 파일의 예입니다.

{% data reusables.community.issue-forms-sample %}

다음은 문제 양식의 렌더링된 버전입니다.
  ![렌더링된 문제 양식](/assets/images/help/repository/sample-issue-form.png)

1. 문제 양식을 만들려는 리포지토리를 선택합니다. 쓰기 권한이 있는 기존 리포지토리를 사용하거나 새 리포지토리를 만들 수 있습니다. 리포지토리를 만드는 방법에 대한 자세한 내용은 “[새 리포지토리 만들기](/articles/creating-a-new-repository)”를 참조하세요.
2. 리포지토리에서 `.github/ISSUE_TEMPLATE/FORM-NAME.yml`이라는 파일을 만들고 `FORM-NAME`을 문제 양식의 이름으로 바꿉니다. GitHub에서 새 파일을 만드는 방법에 대한 자세한 내용은 “[새 파일 만들기](/github/managing-files-in-a-repository/creating-new-files)”를 참조하세요.
3. 새 파일의 본문에 문제 양식의 내용을 입력합니다. 자세한 내용은 “[문제 양식 구문](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)”을 참조하세요.
4. 파일을 리포지토리의 기본 분기에 커밋합니다. 자세한 내용은 “[새 파일 만들기](/github/managing-files-in-a-repository/creating-new-files)”를 참조하세요.

{% endif %}

## 템플릿 선택기 구성

{% data reusables.repositories.issue-template-config %}

`blank_issues_enabled`를 `false`로 설정하여 기여자가 문제 템플릿을 사용하도록 권장할 수 있습니다. `blank_issues_enabled`를 `true`로 설정하면 사람들이 빈 문제를 열 수 있는 옵션을 갖게 됩니다.

{% note %}

**참고:** 레거시 워크플로를 사용하여 폴더에 `issue_template.md` 파일을 수동으로 만들고 `.github`*config.yml* 파일에서 빈 문제를 사용하도록 설정한 경우 사용자가 빈 문제를 열기로 선택할 때 템플릿 `issue_template.md` 이 사용됩니다. 빈 문제를 사용하지 않도록 설정하면 템플릿이 사용되지 않습니다.

{% endnote %}

{% data variables.product.product_name %}을 외부에서 특정 보고서를 받으려면 사용자를 외부 사이트로 `contact_links`를 보낼 수 있습니다.

다음은 *config.yml* 파일 예제입니다.

```yaml{:copy}
blank_issues_enabled: false
contact_links:
  - name: {% data variables.product.prodname_gcf %}
    url: https://github.com/orgs/community/discussions
    about: Please ask and answer questions here.
  - name: {% data variables.product.prodname_dotcom %} Security Bug Bounty
    url: https://bounty.github.com/
    about: Please report security vulnerabilities here.
```

구성 파일은 파일이 리포지토리의 기본 분기에 병합될 때 템플릿 선택기를 사용자 지정합니다.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. 파일 이름 필드에 `.github/ISSUE_TEMPLATE/config.yml`을 입력합니다.
  ![구성 파일 이름](/assets/images/help/repository/template-config-file-name.png)
4. 새 파일의 본문에 구성 파일의 내용을 입력합니다.
  ![구성 파일 내용](/assets/images/help/repository/template-config-file-content.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## 추가 참고 자료

- “[문제 및 끌어오기 요청 템플릿 정보](/articles/about-issue-and-pull-request-templates)”
- “[리포지토리에 대한 단일 문제 템플릿 수동으로 만들기](/articles/manually-creating-a-single-issue-template-for-your-repository)”
