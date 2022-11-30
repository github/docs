---
title: 配置服务器以接收有效负载
intro: 了解如何设置服务器来管理传入的 web 挂钩有效负载。
redirect_from:
  - /webhooks/configuring
  - /developers/webhooks-and-events/configuring-your-server-to-receive-payloads
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
shortTitle: Configure server for webhooks
ms.openlocfilehash: c306cadf4dd8d9cd573d694419a51179c8995797
ms.sourcegitcommit: 6b1c6174d0df40c90edfd7526496baabb1dd159d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/04/2022
ms.locfileid: '148132978'
---
现在，我们的 Webhook 已准备好传递消息，我们将设置一个基本的 Sinatra 服务器来处理传入的有效负载。

{% note %}

注意：可以[从 platform-samples 存储库][platform samples]中下载此项目的完整源代码。

{% endnote %}

## 编写服务器

我们希望我们的服务器在 `/payload` 处侦听 `POST` 请求，因为这是我们告诉 GitHub 我们的 Webhook URL 所在的位置。 由于我们使用 `ngrok` 来公开本地环境，因此不需要在某个在线位置设置一个真实的服务器，并且可以轻松在本地测试我们的代码。

让我们设置一个小 Sinatra 应用程序来处理信息。 我们的初始设置可能如下所示：

``` ruby
require 'sinatra'
require 'json'

post '/payload' do
  push = JSON.parse(request.body.read)
  puts "I got some JSON: #{push.inspect}"
end
```

（如果你不熟悉 Sinatra 的工作原理，建议你阅读 [Sinatra 指南][Sinatra]。）

启动此服务器。

由于我们设置了 Webhook 来侦听处理 `Issues` 的事件，因此请继续操作，并在正在测试的存储库上创建一个新问题。 创建后，切换回终端。 您应该会在输出中看到以下内容：

```shell
$ ~/Developer/platform-samples/hooks/ruby/configuring-your-server $ ruby server.rb
> == Sinatra/1.4.4 has taken the stage on 4567 for development with backup from Thin
> >> Thin web server (v1.5.1 codename Straight Razor)
> >> Maximum connections set to 1024
> >> Listening on localhost:4567, CTRL+C to stop
> I got some JSON: {"action"=>"opened", "issue"=>{"url"=>"...
```

成功！ 您已成功配置服务器以侦听 web 挂钩。 你的服务器现在可以按照你认为合适的任何方式处理此信息。 例如，如果要设置“真实的”Web 应用程序，则可能需要将一些 JSON 输出记录到数据库中。

有关使用 Webhook 获得乐趣和利润的更多信息，请参阅[测试 Webhook](/webhooks/testing) 指南。

[platform samples]: https://github.com/github/platform-samples/tree/master/hooks/ruby/configuring-your-server
[Sinatra]: http://www.sinatrarb.com/
