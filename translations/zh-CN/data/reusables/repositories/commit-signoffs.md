---
ms.openlocfilehash: 1b3e7f64c7507fde4a126cddaca3c4a97247d967
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108222"
---
强制提交签字仅适用于通过 Web 界面进行的提交。 对于通过 Git 命令行接口进行的提交，提交作者必须使用 `--signoff` 选项签字提交。 有关详细信息，请参阅 [Git 文档](https://git-scm.com/docs/git-commit)。


可通过检查正在编辑的文件底部的提交表单的标题，来确定正在创建的存储库是否启用了强制提交签字。 启用强制提交签字后，标题将显示“签字并提交所做的更改”。

![启用了强制签字的提交表单的屏幕截图](/assets/images/help/commits/commit-form-with-signoff-enabled.png)

在签字提交之前，应确保提交符合有关管理所提交的存储库的规则和许可。 存储库可使用签字协议，例如来自 Linux 基金会的开发者来源证书。 有关详细信息，请参阅[开发者来源证书](https://developercertificate.org/)。

签字提交与签名提交不同。 有关签名提交的详细信息，请参阅“[关于提交签名验证](/authentication/managing-commit-signature-verification/about-commit-signature-verification)”。
