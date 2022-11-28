---
ms.openlocfilehash: 40ae6bf1d1c0f6726bcf171e8a642ac4da6c9ba1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: "145137615"
---
| 작업 | 설명
|------------------|-------------------
| `external_identity.deprovision` | 사용자가 OKTA 그룹에서 제거되고 이후에 {% data variables.product.prodname_ghe_managed %}에서 프로비전 해제되었을 때 트리거됩니다. 자세한 내용은 “[팀에 OKTA 그룹 매핑](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”을 참조하세요.
| `external_identity.provision` | OKTA 사용자가 OKTA 그룹에 추가되고 이후에 {% data variables.product.prodname_ghe_managed %}에서 매핑된 팀에 프로비저닝되었을 때 트리거됩니다. 자세한 내용은 “[팀에 OKTA 그룹 매핑](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”을 참조하세요.
| `external_identity.update` | OKTA 사용자의 설정이 업데이트될 때 트리거됩니다. 자세한 내용은 “[팀에 OKTA 그룹 매핑](/admin/authentication/configuring-authentication-and-provisioning-with-your-identity-provider/mapping-okta-groups-to-teams)”을 참조하세요.
