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

回想一下，我们专门将 web 挂钩 URL 设置为 `http://localhost:4567/payload`。 由于我们在本地进行开发，因此我们需要将本地开发环境暴露给互联网，以便 GitHub 可以发送消息，而我们的本地服务器可以处理它们。

注：您可以[从平台样本仓库][platform samples]下载此项目的完整源代码。

### 使用 ngrok

首先，我们将安装一个程序，将本地主机暴露给互联网。 我们将使用 ngrok 实现此目的。 [ngrok 可免费下载](https://ngrok.com/download)，适用于所有主流操作系统。

完成此工作后，您可以在命令行上运行 `./ngrok http 4567` 以暴露本地主机。 您应该会看到如下所示的行：

```shell
$ Forwarding    http://7e9ea9dc.ngrok.io -> 127.0.0.1:4567
```

复制那个不寻常的 `*.ngrok.io` URL！ 现在，我们将*回到*有效负载 URL，并将此服务器粘贴到该字段中。 它应该如下所示：`http://7e9ea9dc.ngrok.io/payload`。

通过这些设置，我们就将路径 `/payload` 上的本地主机暴露给了互联网。

### 编写服务器

有趣的来了！ 我们希望服务器在 `/payload` 处侦听 `POST` 请求，因为这是我们告诉 GitHub 我们的 web 挂钩 URL 所在位置。 由于 ngrok 在暴露我们的本地环境，因此我们无需在线上某个位置设置真正的服务器，就可以在本地愉快地测试我们的代码。

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
