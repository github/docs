---
title: 可用于 GitHub 应用程序的端点
intro: 您的应用程序可以向以下 REST 端点发出请求。
redirect_from:
  - /v3/apps/available-endpoints
  - /rest/reference/endpoints-available-for-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

您必须使用安装访问令牌通过 {% data variables.product.prodname_github_app %} 访问端点。 更多信息请参阅“[向 {% data variables.product.prodname_github_apps %} 验证](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)”。

{% for thing in rest.operationsEnabledForApps[currentVersion] %}
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
