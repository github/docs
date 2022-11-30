---
title: 连接问题故障排除
intro: '如果您在连接到 {% data variables.product.prodname_dotcom %} 时遇到问题，可以对您的连接进行故障排除，然后使用 {% data variables.product.prodname_debug %} 工具诊断问题。'
redirect_from:
  - /articles/troubleshooting-connectivity-problems
  - /github/getting-started-with-github/troubleshooting-connectivity-problems
versions:
  free-pro-team: '*'
---

通常，出现连接问题是因为防火墙、代理服务器、公司网络或其他网络配置为阻止 {% data variables.product.prodname_dotcom %} 的方式。

### 允许 {% data variables.product.prodname_dotcom %} 的 IP 地址

确保您的网络配置为允许 {% data variables.product.prodname_dotcom %} 的 IP 地址。 更多信息请参阅“[关于 {% data variables.product.prodname_dotcom %} 的 IP 地址](/articles/about-github-s-ip-addresses)”。

### 使用公司或组织的网络

如果您的公司或组织的网络中出现连接问题，请咨询网络管理员以了解网络是否存在阻止某些流量的规则。 如果存在规则，请求网络管理员允许流量进入 {% data variables.product.prodname_dotcom %}。

### 验证码故障排除

如果您无法使用验证码进行验证：
- 确保您的浏览器中已启用 JavaScript。
- 确保您的浏览器受支持。 如果浏览器不受支持，请升级您的浏览器或安装支持的浏览器。 有关支持的浏览器列表，请参阅“[支持的浏览器](/articles/supported-browsers)”。
- 确保您的网络配置没有阻止 https://octocaptcha.com/ 或 https://arkoselabs.com/。 如果您位于公司防火墙背后，请与 IT 管理员联系以允许这些域。 要验证域对这些域的访问权限，请访问 https://octocaptcha.com/test 并确保显示“Connection successfully made!（连接成功！）”文本，然后访问 https://client-demo.arkoselabs.com/github 并确保您能够加载验证码。
- 确保您的浏览器没有可能会干扰 GitHub 的插件或扩展。 如果有，请在验证码进行验证期间暂时禁用该插件或扩展。

### 切换克隆方法

从通过 SSH 克隆切换到通过 HTTPS 克隆可改善连接，反之亦然。 更多信息请参阅“[从 {% data variables.product.prodname_dotcom %} 克隆仓库](/articles/cloning-a-repository-from-github)”。

如果您遇到 SSH 超时，请参阅“[错误：文件编号错误](/articles/error-bad-file-number)”。

### 下载缓慢和间歇性连接缓慢故障排除

{% data variables.product.prodname_dotcom %} 不会限制每个用户的带宽。

如果您遇到一天中的某些时间连接缓慢而其他时间没有，则速度缓慢很可能是由于网络拥塞。 由于 {% data variables.product.prodname_dotcom %} 无法解决网络拥塞，因此您应该向互联网服务提供商上报该问题。

### 使用 {% data variables.product.prodname_debug %} 进行故障排除

如果您已按照上述所有故障排除建议进行操作而仍有连接问题，则可以按照 {% data variables.product.prodname_debug %} 站点上的说明操作以运行测试并将报告发送给 {% data variables.product.prodname_dotcom %} 支持。 更多信息请参阅 [{% data variables.product.prodname_debug %}](https://github-debug.com/)。
