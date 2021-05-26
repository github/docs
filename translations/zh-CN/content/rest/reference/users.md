---
title: 用户
redirect_from:
  - /v3/users
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - API
---

用户 API 上的许多资源提供了快捷方式，可用于获取有关当前经过身份验证的用户的信息。 如果请求 URL 不含 `{username}` 参数，则响应将是登录用户的响应（您必须随请求传递[身份验证信息](/rest/overview/resources-in-the-rest-api#authentication)）。{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %} 在通过基本身份验证或作用域为 `user` 的 OAuth 进行身份验证时，将包含其他私有信息，例如用户是否启用双重身份验证。{% endif %}

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

{% if currentVersion == "free-pro-team@latest" %}
## 阻止用户

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'blocking' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
## Emails

通过 API 管理电子邮件地址要求您通过基本身份验证进行验证，或者使用端点的正确范围通过 OAuth 进行身份验证。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'emails' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

## 关注者

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'followers' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Git SSH 密钥

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'keys' %}{% include rest_operation %}{% endif %}
{% endfor %}

## GPG keys

在 `public_key` 响应字段中返回的数据不是 GPG 格式化的密钥。 当用户上传 GPG 密钥时，将对密钥进行剖析，然后提取并存储加密公钥。 此加密密钥是本页面上的 API 所返回的密钥。 此密钥不适合直接用于 GPG 等程序。

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'gpg-keys' %}{% include rest_operation %}{% endif %}
{% endfor %}
