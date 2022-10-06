---
ms.openlocfilehash: 8a86f408128b56cc31c0e8876e962994edf7cdc4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145282834"
---
デフォルトでは、ワークフローによって生成された成果物とログファイルは、90日間保持された後自動的に削除されます。

{%- ifversion fpt or ghec %} 保持期間は、リポジトリの種類によって調整できます。

- パブリックリポジトリの場合: この保持時間を1日から90日の間で変更できます。
- プライベート{% ifversion ghec %}と内部{% endif %}のリポジトリの場合: この保持期間を 1 から 400 日の間で変更できます。
{%- else %} この保持時間を 1 から 400 日の間で変更できます。
{%- endif %}

保持期間をカスタマイズした場合、適用されるのは新しい成果物とログファイルに対してであり、既存のオブジェクトにさかのぼっては適用されません。 管理されたリポジトリ及びOrganizationについては、最大の保持期間は管理するOrganizationあるいはEnterpriseによって設定された上限を超えることはできません。
