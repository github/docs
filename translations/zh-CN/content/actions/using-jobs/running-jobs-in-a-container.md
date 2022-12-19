---
title: 在容器中运行作业
shortTitle: Running jobs in a container
intro: 使用容器运行作业中的步骤。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
ms.openlocfilehash: 1ccae14ba6d242bd05dd3c8375375ef83b6c01cf
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '145100151'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 概述

{% data reusables.actions.jobs.section-running-jobs-in-a-container %}

## 定义容器映像

{% data reusables.actions.jobs.section-running-jobs-in-a-container-image %}

## 定义容器注册表的凭据

{% data reusables.actions.jobs.section-running-jobs-in-a-container-credentials %}

## 将环境变量与容器一起使用

{% data reusables.actions.jobs.section-running-jobs-in-a-container-env %}

## 公开容器上的网络端口

{% data reusables.actions.jobs.section-running-jobs-in-a-container-ports %}

## 在容器中装载卷

{% data reusables.actions.jobs.section-running-jobs-in-a-container-volumes %}

## 设置容器资源选项

{% data reusables.actions.jobs.section-running-jobs-in-a-container-options %}

