---
title: アクセシビリティ設定の管理
shortTitle: Manage accessibility settings
intro: '{% data variables.product.product_name %} のユーザー インターフェイスは、視覚、聴覚、モーター、コグニティブ、または学習のニーズに適応できます。'
versions:
  feature: keyboard-shortcut-accessibility-setting
redirect_from:
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-accessibility-settings
type: how_to
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d4811368ab825f0b24864283f8be54672f72a787
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614320'
---
## アクセシビリティ設定について

ニーズに合った {% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} でエクスペリエンスを作成するには、ユーザー インターフェイスをカスタマイズできます。 ユーザー補助の設定は、障碍のあるユーザーにとって不可欠ですが、すべてのユーザーに役に立つ可能性があります。 たとえば、キーボード ショートカットのカスタマイズは、音声コントロールを使ってナビゲーションを行うユーザーにとって不可欠ですが、{% data variables.product.product_name %} のキーボード ショートカットが別のアプリケーションのショートカットと競合するときは、すべてのユーザーに役立ちます。

## アクセシビリティ設定の管理

{% ifversion fpt or ghec %}{% data variables.product.product_location %}{% elsif ghes or ghae %}{% data variables.product.product_location %}の Web サイト{% endif %}のキーボード ショートカットの一部を使用するか、またはすべてを使用するかを決定できます。また、アニメーション画像の表示を制御できます。

### キーボード ショートカットの管理

キーボードだけを使って、{% data variables.product.product_name %} の Web サイト全体でアクションを実行できます。 キーボード ショートカットは時間の節約に役立ちますが、誤ってアクティブにしたり、支援技術を妨げたりする可能性があります。

{% data variables.product.product_name %} では、既定ですべてのキーボード ショートカットが有効になっています。 詳細については、「[Keyboard shortcuts](/get-started/using-github/keyboard-shortcuts)」 (キーボード ショートカット) を参照してください。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.accessibility_settings %}
1. [キーボード ショートカット] で、キーボード ショートカットの設定を管理します。

   - <kbd>Ctrl</kbd> や <kbd>Command</kbd> などの修飾キーを使わないショートカット キーを無効にするには、[全般] で **[文字キー]** をオフにします。
     - 文字キーを無効にした場合でも、引き続き Web ブラウザーのショートカットをトリガーでき、修飾子キーを使用する {% data variables.product.product_name %} のショートカットをトリガーできます。
   {%- ifversion command-palette %}
   - コマンド パレットをトリガーするためのキーボード ショートカットをカスタマイズするには、[コマンド パレット] のドロップダウン メニューを使って、キーボード ショートカットを選びます。 詳細については、「[{% data variables.product.company_short %} コマンド パレット](/get-started/using-github/github-command-palette)」を参照してください。
   {%- endif %}

{% ifversion motion-management %}

### モーションの管理

{% data variables.product.product_name %} によるアニメーション _.gif_ 画像の表示方法を制御できます。

既定で {% data variables.product.product_name %} は、縮小されたモーションに対するシステム レベルの基本設定と同期されます。 詳細については、お使いのオペレーティング システムのドキュメントまたは設定を参照してください。

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.accessibility_settings %}
1. [モーション] で、モーションの設定を管理します。

   - {% data variables.product.product_name %} によるアニメーション画像の表示方法を制御するには、[アニメーション画像の自動再生] で **[システムとの同期]** 、 **[有効]** 、または **[無効]** を選択します。

{% endif %}
