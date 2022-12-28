---
title: 기계 학습을 위한 GitHub Codespaces 시작
shortTitle: Machine learning
intro: '{% data variables.product.prodname_github_codespaces %} 및 기본 제공 도구를 사용한 기계 학습 프로젝트 작업에 대해 알아봅니다.'
versions:
  fpt: '*'
  ghec: '*'
type: tutorial
topics:
  - Codespaces
  - Developer
ms.openlocfilehash: 905d5b14bfba5e47d1fdfdd7f0be75b16750652d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158919'
---
## 소개

이 가이드에서는 {% data variables.product.prodname_github_codespaces %}를 사용한 기계 학습을 소개합니다. 간단한 이미지 분류자를 빌드하고, {% data variables.product.prodname_github_codespaces %}에 미리 설치된 도구 중 일부에 대해 알아보고, NVIDIA CUDA에 대한 개발 환경을 구성하고, JupyterLab에서 codespace를 엽니다.

## 간단한 이미지 분류자 빌드

Jupyter Notebook을 사용하여 간단한 이미지 분류자를 빌드합니다. 

Jupyter Notebook은 하나씩 실행할 수 있는 셀 집합입니다. 사용할 Notebook에는 [PyTorch](https://pytorch.org/)를 사용하여 이미지 분류자를 빌드하는 셀이 여러 개 포함되어 있습니다. 각 셀은 데이터 세트를 다운로드하고, 신경망을 설정하고, 모델을 학습시킨 다음, 해당 모델을 테스트하는 프로세스의 각 단계입니다.

모든 셀을 순서대로 실행하여 이미지 분류자를 빌드하는 모든 단계를 수행합니다. 이 작업을 수행할 때 Jupyter는 결과를 검사할 수 있도록 출력을 Notebook에 다시 저장합니다.

### codespace 만들기

1. [github/codespaces-jupyter](https://github.com/github/codespaces-jupyter) 템플릿 리포지토리로 이동합니다.
{% data reusables.codespaces.open-template-in-codespace-step %}

이 템플릿의 codespace는 웹 기반 버전의 {% data variables.product.prodname_vscode %}에서 열립니다.

### 이미지 분류자 Notebook 열기 

{% data variables.product.prodname_github_codespaces %}에서 사용하는 기본 컨테이너 이미지에는 codespace에 미리 설치된 기계 학습 라이브러리 집합이 포함되어 있습니다. 예를 들어 Numpy, pandas, SciPy, Matplotlib, seaborn, scikit-learn, Keras, PyTorch, Requests 및 Plotly가 있습니다. 기본 이미지에 대한 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#using-the-default-dev-container-configuration)” 및 [리포지토리`devcontainers/images`를 참조하세요](https://github.com/devcontainers/images/tree/main/src/universal).

1. {% data variables.product.prodname_vscode_shortname %} 편집기에서 표시되는 “시작” 탭을 닫습니다.
1. `notebooks/image-classifier.ipynb` Notebook 파일을 엽니다.

### 이미지 분류자 빌드

이미지 분류자 Notebook에는 데이터 세트를 다운로드하고 신경망을 학습시키고 성능을 평가하는 데 필요한 모든 코드가 포함되어 있습니다.

1. **모두 실행** 을 클릭하여 Notebook 셀을 실행합니다.

   ![모두 실행 단추의 스크린샷](/assets/images/help/codespaces/jupyter-run-all.png)

1. 아래로 스크롤하여 각 셀의 출력을 봅니다.

   ![편집기의 3단계 스크린샷](/assets/images/help/codespaces/jupyter-notebook-step3.png)

## codespace에 대한 NVIDIA CUDA 구성

일부 소프트웨어에서는 codespace의 GPU를 사용하기 위해 NVIDIA CUDA를 설치해야 합니다. 이 경우 `devcontainer.json` 파일을 사용하여 사용자 지정 구성을 만들고 CUDA를 설치해야 한다고 지정할 수 있습니다. 사용자 지정 구성에 대한 자세한 내용은 “[개발 컨테이너 소개](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#creating-a-custom-dev-container-configuration)”를 참조하세요.

{% note %}

**참고**: `nvidia-cuda` 기능을 추가할 때 실행되는 스크립트에 대한 자세한 내용은 [devcontainers/features 리포지토리](https://github.com/devcontainers/features/tree/main/src/nvidia-cuda)를 참조하세요.

{% endnote %}

1. codespace 내에서 편집기 `.devcontainer/devcontainer.json` 에서 파일을 엽니다.
1. 다음 내용이 포함된 최상위 `features` 개체를 추가합니다.

   ```json{:copy}
     "features": {
       "ghcr.io/devcontainers/features/nvidia-cuda:1": { 
         "installCudnn": true
       }
     }
   ```

   `features` 개체에 대한 자세한 내용은 [개발 컨테이너 사양](https://containers.dev/implementors/features/#devcontainer-json-properties)을 참조하세요.

   이 자습서에 대해 만든 이미지 분류자 리포지토리의 `devcontainer.json` 파일을 사용하는 경우 이제 `devcontainer.json` 파일은 다음과 같이 표시됩니다.

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

1. 변경 내용을 저장합니다.
{% data reusables.codespaces.rebuild-command %} codespace 컨테이너가 다시 빌드됩니다. 이 작업은 몇 분 정도 걸립니다. 다시 빌드하는 작업이 완료되면 codespace가 자동으로 다시 열립니다.
1. 나중에 이 리포지토리에서 만든 새 codespace에 CUDA가 설치되도록 리포지토리에 변경 내용을 게시합니다. 자세한 내용은 "[템플릿에서 codespace 만들기"를 참조하세요](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template#publishing-from-vs-code).

## JupyterLab에서 codespace 열기

github.com/codespaces "사용자 codespaces" 페이지에서 또는 {% data [variables.product.prodname_cli](https://github.com/codespaces) %}를 사용하여 JupyterLab에서 codespace를 열 수 있습니다. 자세한 내용은 "[기존 codespace 열기"를 참조하세요](/codespaces/developing-in-codespaces/opening-an-existing-codespace).

{% data reusables.codespaces.jupyterlab-installed-in-codespace %}
