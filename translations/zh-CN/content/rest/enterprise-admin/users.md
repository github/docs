---
title: 用户
intro: '用户管理 API 允许您暂停{% ifversion ghes %}、取消暂停、升级和降级{% endif %}{% ifversion ghae %} 以及取消暂停{% endif %} 企业上的用户。'
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

*它只适用于[经过身份验证的](/rest/overview/resources-in-the-rest-api#authentication)站点管理员。*普通用户尝试访问它时会收到 `403` 响应。
