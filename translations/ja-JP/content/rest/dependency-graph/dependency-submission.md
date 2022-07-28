---
title: 依存関係のサブミット
intro: Dependency submission APIを使うと、プロジェクトのビルドあるいはコンパイル時に解決される依存関係などをプロジェクトにサブミットできます。
versions:
  feature: dependency-submission-api
miniTocMaxHeadingLevel: 3
---

## Dependency submission APIについて

{% data reusables.dependency-submission.dependency-submission-api-beta %}

{% data reusables.dependency-submission.about-dependency-submission %}

依存関係は、スナップショットの形でDependency submission APIにサブミットされます。 スナップショットは、コミットSHAに関連づけられた依存関係のセット及び他のメタデータで、コミットに対するリポジトリの現在の状態を反映します。  プロジェクトがビルドされるたびに、必要な形式でDependency submission APIに依存関係をサブミットするために、事前作成されたアクションを使うか、独自のアクションを作成するかは選択できます。 Dependency submission APIの利用に関する詳しい情報については「[Dependency submission APIの利用](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)」を参照してください。

依存関係グラフに含める依存関係の複数のセットをDependency submission APIにサブミットできます。 このAPIは、スナップショットの`job.correlator`プロパティと`detector.name`カテゴリを使い、示された各ワークフローに対する最新のサブミットを保証します。 `correlator`自体は、独立したサブミットを区別するために使用する主要なフィールドです。 `correlator`の例としては、アクションの実行で利用できる`<GITHUB_WORKFLOW> <GITHUB_JOB>`という2つの変数のシンプルな組み合わせがあります。
