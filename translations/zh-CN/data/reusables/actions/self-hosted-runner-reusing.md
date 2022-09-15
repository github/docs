---
ms.openlocfilehash: a92a36101675ea033048f97465a87571b23ee9ef
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145087260"
---
或者，如果无权访问 {% data variables.product.product_name %} 上的存储库{% ifversion fpt %}或组织{% elsif ghes or ghec or ghae %}、组织或企业{% endif %} 来删除运行器，但想重新使用运行器计算机，则可以删除自托管运行器应用程序目录中的 `.runner` 文件。 这允许将运行器注册，而无需重新下载自托管的运行器应用程序。
