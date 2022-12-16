---
title: 작업에 행렬 사용
shortTitle: Matrixes
intro: 각 작업에 대한 변형을 정의하는 행렬을 만듭니다.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /actions/using-jobs/using-a-build-matrix-for-your-jobs
ms.openlocfilehash: 77eee0cad601e4c871149837d098670d459b7371
ms.sourcegitcommit: 7b86410fc3bc9fecf0cb71dda4c7d2f0da745b85
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/05/2022
ms.locfileid: '148009458'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 행렬 전략 정보

{% data reusables.actions.jobs.about-matrix-strategy %}

## 행렬 전략 사용

{% data reusables.actions.jobs.using-matrix-strategy %}

### 예: 1차원 행렬 사용

{% data reusables.actions.jobs.single-dimension-matrix %}

### 예: 다차원 행렬 사용

{% data reusables.actions.jobs.multi-dimension-matrix %}

### 예제: 컨텍스트를 사용하여 행렬 만들기

{% data reusables.actions.jobs.matrix-from-context %}

## 행렬 구성 확장 또는 추가

{% data reusables.actions.jobs.matrix-include %}

### 예: 구성 확장

{% data reusables.actions.jobs.matrix-expand-with-include %}

### 예: 구성 추가

{% data reusables.actions.jobs.matrix-add-with-include %}

## 행렬 구성 제외

{% data reusables.actions.jobs.matrix-exclude %}

## 오류 처리

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-failfast %}

## 최대 동시 작업 수 정의

{% data reusables.actions.jobs.section-using-a-build-matrix-for-your-jobs-max-parallel %}
