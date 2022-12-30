---
ms.openlocfilehash: 40ae6bf1d1c0f6726bcf171e8a642ac4da6c9ba1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "145137612"
---
| アクション | 説明
|------------------|-------------------
| `external_identity.deprovision` | ユーザーが Okta グループから削除され、その後、{% data variables.product.prodname_ghe_managed %} からプロビジョニング解除されたときにトリガーされます。 詳細については、「[チームへの Okta グループのマッピング](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)」を参照してください。
| `external_identity.provision` | Okta ユーザーが Okta グループに追加され、その後、{% data variables.product.prodname_ghe_managed %} で、マッピングされているチームにプロビジョニングされたときにトリガーされます。 詳細については、「[チームへの Okta グループのマッピング](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)」を参照してください。
| `external_identity.update` | Okta ユーザの設定が更新されたときにトリガーされます。 詳細については、「[チームへの Okta グループのマッピング](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)」を参照してください。
