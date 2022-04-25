---
title: 用户
intro: 用户 API 允许获取有关经过验证的用户的公共和私人信息。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

用户 API 上的许多资源提供了快捷方式，可用于获取有关当前经过身份验证的用户的信息。 如果请求 URL 不含 `{username}` 参数，则响应将是登录用户的响应（您必须随请求传递[身份验证信息](/rest/overview/resources-in-the-rest-api#authentication)）。{% ifversion fpt or ghes or ghec %} 在通过基本身份验证或作用域为 `user` 的 OAuth 进行身份验证时，将包含其他私有信息，例如用户是否启用双重身份验证。{% endif %}
