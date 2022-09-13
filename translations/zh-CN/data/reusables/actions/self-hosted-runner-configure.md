---
ms.openlocfilehash: 27ed9d55b8199298dc1cfdf8b4d3da925e08aa8d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145065868"
---
1. 选择自托管运行器计算机的操作系统映像和体系结构。
1. 您将看到指示您如何下载运行器应用程序并安装到自托管运行器机器上的说明。

   在自托管运行器机器上打开 shell，并按显示的顺序运行每个 shell 命令。

   {% note %}

   注意：在 Windows 上，如果要将自托管运行器应用程序安装为服务，必须打开具有管理员权限的 shell。 我们还建议你使用 `C:\actions-runner` 作为自托管运行器应用程序的目录，以便 Windows 系统帐户可以访问运行器目录。

   {% endnote %}

   这些说明将指导您完成以下任务：
   - 下载并提取自托管运行器应用程序。
   - 运行 `config` 脚本配置自托管运行器应用程序，并将其注册到 {% data variables.product.prodname_actions %}。 `config` 脚本需要目标 URL 和自动生成的时间限制令牌对请求进行身份验证。
     - 在 Windows 上，`config` 脚本还会询问你是否想将自托管运行器应用程序安装为服务。 对于 Linux 和 macOS，您可以在完成添加运行器后安装服务。 有关详细信息，请参阅“[将自托管运行应用程序配置为服务](/actions/automating-your-workflow-with-github-actions/configuring-the-self-hosted-runner-application-as-a-service)”。
   - 运行自托管运行器应用程序以将机器连接到 {% data variables.product.prodname_actions %}。
