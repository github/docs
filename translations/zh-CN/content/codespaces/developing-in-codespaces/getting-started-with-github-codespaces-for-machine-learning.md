---
title: 用于机器学习的 GitHub Codespaces 入门
shortTitle: Machine learning
intro: '了解如何使用 {% data variables.product.prodname_github_codespaces %} 及其现成工具处理机器学习项目。'
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Codespaces
  - Developer
ms.openlocfilehash: 905d5b14bfba5e47d1fdfdd7f0be75b16750652d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158915'
---
## 简介

本指南介绍使用 {% data variables.product.prodname_github_codespaces %} 进行机器学习。 你将生成简单的图像分类器，了解 {% data variables.product.prodname_github_codespaces %} 中预安装的一些工具，为 NVIDIA CUDA 配置开发环境，并在 JupyterLab 中打开 codespace。

## 生成简单的图像分类器

我们将使用 Jupyter 笔记本生成简单的图像分类器。 

Jupyter 笔记本是一组可以逐个执行的单元。 我们将使用的笔记本包括许多单元，它们使用 [PyTorch](https://pytorch.org/) 生成图像分类器。 每个单元都是该过程的不同阶段：下载数据集，设置神经网络，训练模型，然后测试该模型。

我们将按顺序运行所有单元，以执行生成图像分类器的所有阶段。 当我们执行此操作时，Jupyter 会将输出保存回笔记本，以便可以检查结果。

### 创建 codespace

1. 转到 [github/codespaces-jupyter](https://github.com/github/codespaces-jupyter) 模板存储库。
{% data reusables.codespaces.open-template-in-codespace-step %}

此模板的 codespace 会在基于 Web 的 {% data variables.product.prodname_vscode %} 版本中打开。

### 打开图像分类器笔记本 

{% data variables.product.prodname_github_codespaces %} 使用的默认容器映像包括一组预安装在 codespace 中的机器学习库。 例如，Numpy、pandas、SciPy、Matplotlib、seaborn、scikit-learn、Keras、PyTorch、Requests 和 Plotly。 有关默认映像的详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)”和 [`devcontainers/images` 存储库](https://github.com/devcontainers/images/tree/main/src/universal)。

1. 在 {% data variables.product.prodname_vscode_shortname %} 编辑器中，关闭显示的任何“入门”选项卡。
1. 打开 `notebooks/image-classifier.ipynb` 笔记本文件。

### 生成图像分类器

图像分类器笔记本包含下载数据集、训练神经网络以及评估其性能所需的所有代码。

1. 单击“全部运行”以执行所有笔记本单元。

   ![“全部运行”按钮的屏幕截图](/assets/images/help/codespaces/jupyter-run-all.png)

1. 向下滚动以查看每个单元的输出。

   ![编辑器中步骤 3 的屏幕截图](/assets/images/help/codespaces/jupyter-notebook-step3.png)

## 为 codespace 配置 NVIDIA CUDA

某些软件要求安装 NVIDIA CUDA 才能使用 codespace 的 GPU。 在这种情况下，可以使用 `devcontainer.json` 文件创建自己的自定义配置，并指定应安装 CUDA。 有关创建自定义配置的详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#creating-a-custom-dev-container-configuration)”。

{% note %}

注意：有关在添加 `nvidia-cuda` 功能时运行的脚本的完整详细信息，请参阅 [devcontainers/features 存储库](https://github.com/devcontainers/features/tree/main/src/nvidia-cuda)。

{% endnote %}

1. 在 cpdespace 内的编辑器中打开 `.devcontainer/devcontainer.json` 文件。
1. 添加包含以下内容的顶级 `features` 对象：

   ```json{:copy}
     "features": {
       "ghcr.io/devcontainers/features/nvidia-cuda:1": { 
         "installCudnn": true
       }
     }
   ```

   有关 `features` 对象的详细信息，请参阅[开发容器规范](https://containers.dev/implementors/features/#devcontainer-json-properties)。

   如果使用为本教程创建的图像分类器存储库中的 `devcontainer.json` 文件，则 `devcontainer.json` 文件现在会如下所示：

   ```json
   {
     "customizations": {
       "vscode": {
         "extensions": [
           "ms-python.python",
           "ms-toolsai.jupyter"
         ]
       }
     },
     "features": {
       "ghcr.io/devcontainers/features/nvidia-cuda:1": { 
         "installCudnn": true
       }
     }
   }
   ```

1. 保存更改。
{% data reusables.codespaces.rebuild-command %}将重新生成 codespace 容器。 这需要几分钟。 重新生成完成后，codespace 会自动重新打开。
1. 将更改发布到存储库，以便在将来从此存储库创建的任何新 codespace 中安装 CUDA。 有关详细信息，请参阅“[通过模板创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-from-vs-code)”。

## 在 JupyterLab 中打开 codespace

可以在 JupyterLab ([github.com/codespaces](https://github.com/codespaces)) 的“你的 codespace”页或使用 {% data variables.product.prodname_cli %} 打开 codespace。 有关详细信息，请参阅“[打开现有 codespace](/codespaces/developing-in-codespaces/opening-an-existing-codespace)”。

{% data reusables.codespaces.jupyterlab-installed-in-codespace %}
