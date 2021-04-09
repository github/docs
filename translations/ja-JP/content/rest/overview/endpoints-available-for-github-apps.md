---
title: GitHub App で利用可能なエンドポイント
intro: アプリケーションでは、次の REST エンドポイントにリクエストを送信できます。
redirect_from:
  - /v3/apps/available-endpoints
  - /rest/reference/endpoints-available-for-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---

{% data variables.product.prodname_github_app %} を使用してエンドポイントにアクセスするには、インストールアクセストークンを使用する必要があります。 詳しい情報については、「[{% data variables.product.prodname_github_apps %} で認証する](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)」を参照してください。

{% for thing in rest.operationsEnabledForGitHubApps[currentVersion] %}
{% assign category = thing[0] %}
{% assign operations = thing[1] %}
{% if operations.size > 0 %}
  <h3 id="{{category}}">
    <a href="#{{category}}">{{ category }}</a>
  </h3>  
  <ul>
  {% for operation in operations %}
  <li><a href="/{{currentLanguage}}/rest/reference/{{operation.category}}#{{operation.slug}}"><code><span style="text-transform: uppercase">{{operation.verb}}</span> {{operation.requestPath}}</code></a></li>
  {% endfor %}
  </ul>
{% endif %}
{% endfor %}
