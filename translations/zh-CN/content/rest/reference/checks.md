---
title: 检查
redirect_from:
  - /v3/checks
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

检查 API 使您能够构建 GitHub 应用程序，以针对仓库中的代码更改运行强大的检查。 您可以创建应用程序以执行持续集成 、代码分析或代码扫描服务，并提供有关提交的详细反馈。 更多信息请参阅“[检查 API 入门指南](/rest/guides/getting-started-with-the-checks-api)”和“[使用检查 API 创建 CI 测试](/apps/quickstart-guides/creating-ci-tests-with-the-checks-api/)”。

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## 检查运行

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'runs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## 检查套件

{% note %}

  **注：**GitHub 应用程序针对每个提交 SHA 只接收一个 [`check_suite`](/webhooks/event-payloads/#check_suite) 事件，即使您将提交 SHA 推送到多个分支。 要了解提交 SHA 何时推送到分支，您可以订阅分支 [`create`](/webhooks/event-payloads/#create) 事件。

{% endnote %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'suites' %}{% include rest_operation %}{% endif %}
{% endfor %}
