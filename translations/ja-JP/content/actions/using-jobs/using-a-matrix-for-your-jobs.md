---
title: ジョブにマトリックスを使用する
shortTitle: Using a matrix
intro: マトリックスを作成して、各ジョブのバリエーションを定義します。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /actions/using-jobs/using-a-build-matrix-for-your-jobs
ms.openlocfilehash: 2dd53fd8810e2ca5dcfc74ff8a6e45b46477d55f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145121014'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## マトリックス戦略について

{% data reusables.actions.jobs.about-matrix-strategy %}

## マトリックス戦略の使用

{% data reusables.actions.jobs.using-matrix-strategy %}

### 例: 1 次元マトリックスの使用

{% data reusables.actions.jobs.single-dimension-matrix %}

### 例: 多次元マトリックスの使用

{% data reusables.actions.jobs.multi-dimension-matrix %}

### 例: コンテキストを使ったマトリックスの作成

{% data reusables.actions.jobs.matrix-from-context %}

## マトリックス構成の展開または追加

{% data reusables.actions.jobs.matrix-include %}

### 例: 構成の展開

{% data reusables.actions.jobs.matrix-expand-with-include %}

### 例: 構成の追加

{% data reusables.actions.jobs.matrix-add-with-include %}

## マトリックス構成の除外

{% data reusables.actions.jobs.matrix-exclude %}

## エラー処理

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

## 同時ジョブの最大数の定義

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}
