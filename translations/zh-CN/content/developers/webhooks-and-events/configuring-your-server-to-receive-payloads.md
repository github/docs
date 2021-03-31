---
title: 配置服务器以接收有效负载
intro: 了解如何设置服务器来管理传入的 web 挂钩有效负载。
redirect_from:
  - /webhooks/configuring
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - web 挂钩
---



现在，我们的 web 挂钩已准备好传递消息，我们将设置一个基本的 Sinatra 服务器 来处理传入的有效负载。

{% note %}

**注意：**你可以[从平台示例库][platform samples]下载此项目的完整源代码。

{% endnote %}

### 编写服务器

我们希望服务器在 `/payload` 处侦听 `POST` 请求，因为这是我们告诉 GitHub 我们的 web 挂钩 URL 所在位置。 由于我们使用 ngrok 暴露我们的本地环境，因此我们无需在线上某个位置设置真正的服务器，就可以在本地愉快地测试我们的代码。

让我们设置一个小 Sinatra 应用程序来处理信息。 我们的初始设置可能如下所示：

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  push = JSON.parse(request.body.read)
  puts "I got some JSON: #{push.inspect}"
end
```

（如果您不熟悉 Sinatra 的工作方式，建议您阅读 [ Sinatra 指南][Sinatra]）。

启动此服务器。

我们已经设置了 web 挂钩来侦听涉及 `Issues` 的事件，现在，我们在要测试的仓库上创建一个新议题。 创建后，切换回终端。 您应该会在输出中看到以下内容：

```shell
$ ~/Developer/platform-samples/hooks/ruby/configuring-your-server $ ruby server.rb
> == Sinatra/1.4.4 has taken the stage on 4567 for development with backup from Thin
> >> Thin web server (v1.5.1 codename Straight Razor)
> >> Maximum connections set to 1024
> >> Listening on localhost:4567, CTRL+C to stop
> I got some JSON: {"action"=>"opened", "issue"=>{"url"=>"...
```

成功！ 您已成功配置服务器以侦听 web 挂钩。 您的服务器现在可以按照您认为合适的任何方式处理此信息。 例如，如果要设置“真实的” Web 应用程序，则可能需要将一些 JSON 输出记录到数据库中。

有关使用 web 挂钩的乐趣和好处的更多信息，请参阅[测试 web 挂钩](/webhooks/testing)指南。

[platform samples]: https://github.com/github/platform-samples/tree/master/hooks/ruby/configuring-your-server
[Sinatra]: http://www.sinatrarb.com/
