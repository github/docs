配置负载均衡器以检查以下 URL 之一：
 - `https://HOSTNAME/status`，如果 HTTPS 已启用（默认）
 - `http://HOSTNAME/status`，如果 HTTPS 被禁用

如果节点运行正常并且可为最终用户的请求提供服务，则检查将返回状态代码 `200` (OK)。
