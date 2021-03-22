---
title: Article with broken images and links
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Images

This image is broken on all versions because the file is not in assets: ![missing image](/assets/images/foo.png)

This image is OK on all versions because the file is in assets: ![missing image](/assets/images/site/logo.png)

### Anchors
This anchor is broken on all versions because it points to a heading that does not exist: [Non-existent Heading](#this-anchor-goes-nowhere)

This anchor is broken on all versions because it points to a heading that does not exist: [Non-existent Heading](/github/setting-up-and-managing-your-github-user-account/permission-levels-for-a-user-account-repository#this-anchor-goes-nowhere)

### Links

This link is broken on Enterprise versions because it points to a Dotcom-only article: [GitHub's Products](/github/getting-started-with-github/githubs-products)

This link is OK because it points to a Dotcom-only article with the `dotcom-only` class: <a href="/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies" class="dotcom-only">About alerts for vulnerable dependencies</a>."

This link is broken on Dotcom because it points to an Enterprise-only article: [Working with Pre-Receive Hooks](/github/collaborating-with-issues-and-pull-requests/working-with-pre-receive-hooks)

This link is broken on all versions because it points to an article that does not exist: [Non-existent Article](/articles/foo)
