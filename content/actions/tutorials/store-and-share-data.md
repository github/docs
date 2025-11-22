---
title: Store and share data with workflow artifacts
shortTitle: Store and share data
intro: Use artifacts to share data between jobs in a workflow and store data once that workflow has completed.
redirect_from:
  - /articles/persisting-workflow-data-using-artifacts
  - /github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
  - /actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
  - /actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts
  - /actions/guides/storing-workflow-data-as-artifacts
  - /actions/advanced-guides/storing-workflow-data-as-artifacts
  - /actions/using-workflows/storing-workflow-data-as-artifacts
  - /actions/writing-workflows/choosing-what-your-workflow-does/storing-workflow-data-as-artifacts
  - /actions/writing-workflows/choosing-what-your-workflow-does/storing-and-sharing-data-from-a-workflow
  - /actions/how-tos/writing-workflows/choosing-what-your-workflow-does/storing-and-sharing-data-from-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
allowTitleToDifferFromFilename: true
---

## Prerequisites

Before you can complete this tutorial, you need to understand workflow artifacts. See [AUTOTITLE](/actions/concepts/workflows-and-actions/workflow-artifacts).

## Uploading build and test artifacts

The output of building and testing your code often produces files you can use to debug test failures and production code that you can deploy. You can configure a workflow to build and test the code pushed to your repository and report a success or failure status. You can upload the build and test output to use for deployments, debugging failed tests or crashes, and viewing test suite coverage.

You can use the `upload-artifact` action to upload artifacts. When uploading an artifact, you can specify a single file or directory, or multiple files or directories. You can also exclude certain files or directories, and use wildcard patterns. We recommend that you provide a name for an artifact, but if no name is provided then `artifact` will be used as the default name. For more information on syntax, see the {% ifversion fpt or ghec %}[actions/upload-artifact](https://github.com/actions/upload-artifact) action{% else %} `actions/upload-artifact` action on {% data variables.product.prodname_ghe_server %}{% endif %}.

### Example

For example, your repository or a web application might contain SASS and TypeScript files that you must convert to CSS and JavaScript. Assuming your build configuration outputs the compiled files in the `dist` directory, you would deploy the files in the `dist` directory to your web application server if all tests completed successfully.

```text
|-- hello-world (repository)
|   └── dist
|   └── tests
|   └── src
|       └── sass/app.scss
|       └── app.ts
|   └── output
|       └── test
|
```

This example shows you how to create a workflow for a Node.js project that builds the code in the `src` directory and runs the tests in the `tests` directory. You can assume that running `npm test` produces a code coverage report named `code-coverage.html` stored in the `output/test/` directory.

The workflow uploads the production artifacts in the `dist` directory, but excludes any markdown files. It also uploads the `code-coverage.html` report as another artifact.

```yaml copy
name: Node CI

on: [push]

jobs:
  build_and_test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}
      - name: npm install, build, and test
        run: |
          npm install
          npm run build --if-present
          npm test
      - name: Archive production artifacts
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: dist-without-markdown
          path: |
            dist
            !dist/**/*.md
      - name: Archive code coverage results
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: code-coverage-report
          path: output/test/code-coverage.html
```

## Configuring a custom artifact retention period

You can define a custom retention period for individual artifacts created by a workflow. When using a workflow to create a new artifact, you can use `retention-days` with the `upload-artifact` action. This example demonstrates how to set a custom retention period of 5 days for the artifact named `my-artifact`:

```yaml copy
  - name: 'Upload Artifact'
    uses: {% data reusables.actions.action-upload-artifact %}
    with:
      name: my-artifact
      path: my_file.txt
      retention-days: 5
```

The `retention-days` value cannot exceed the retention limit set by the repository, organization, or enterprise.

## Downloading artifacts during a workflow run

You can use the [`actions/download-artifact`](https://github.com/actions/download-artifact) action to download previously uploaded artifacts during a workflow run.

> [!NOTE]
> {% ifversion fpt or ghec %}If you want to download artifacts from a different workflow or workflow run, you need to supply a token and run identifier. See [Download Artifacts from other Workflow Runs or Repositories](https://github.com/actions/download-artifact?tab=readme-ov-file#download-artifacts-from-other-workflow-runs-or-repositories) in the documentation for the `download-artifact` action.
{% elsif ghes %}You can only download artifacts in a workflow that were uploaded during the same workflow run.{% endif %}

Specify an artifact's name to download an individual artifact. If you uploaded an artifact without specifying a name, the default name is `artifact`.

```yaml
- name: Download a single artifact
  uses: {% data reusables.actions.action-download-artifact %}
  with:
    name: my-artifact
```

You can also download all artifacts in a workflow run by not specifying a name. This can be useful if you are working with lots of artifacts.

```yaml
- name: Download all workflow run artifacts
  uses: {% data reusables.actions.action-download-artifact %}
```

If you download all workflow run's artifacts, a directory for each artifact is created using its name.

For more information on syntax, see the {% ifversion fpt or ghec %}[actions/download-artifact](https://github.com/actions/download-artifact) action{% else %} `actions/download-artifact` action on {% data variables.product.prodname_ghe_server %}{% endif %}.

## Passing data between jobs in a workflow

You can use the `upload-artifact` and `download-artifact` actions to share data between jobs in a workflow. This example workflow illustrates how to pass data between jobs in the same workflow. For more information, see the {% ifversion fpt or ghec %}[actions/upload-artifact](https://github.com/actions/upload-artifact) and [download-artifact](https://github.com/actions/download-artifact) actions{% else %} `actions/upload-artifact` and `download-artifact` actions on {% data variables.product.prodname_ghe_server %}{% endif %}.

Jobs that are dependent on a previous job's artifacts must wait for the dependent job to complete successfully. This workflow uses the `needs` keyword to ensure that `job_1`, `job_2`, and `job_3` run sequentially. For example, `job_2` requires `job_1` using the `needs: job_1` syntax.

Job 1 performs these steps:
* Performs a math calculation and saves the result to a text file called `math-homework.txt`.
* Uses the `upload-artifact` action to upload the `math-homework.txt` file with the artifact name {% ifversion artifacts-v3-deprecation %}`homework_pre`{% else %}`homework`{% endif %}.

Job 2 uses the result in the previous job:
* Downloads the {% ifversion artifacts-v3-deprecation %}`homework_pre`{% else %}`homework`{% endif %} artifact uploaded in the previous job. By default, the `download-artifact` action downloads artifacts to the workspace directory that the step is executing in. You can use the `path` input parameter to specify a different download directory.
* Reads the value in the `math-homework.txt` file, performs a math calculation, and saves the result to `math-homework.txt` again, overwriting its contents.
* Uploads the `math-homework.txt` file. {% ifversion artifacts-v3-deprecation %}As artifacts are considered immutable in `v5`, the artifact is passed a different input, `homework_final`, as a name.{% else %}This upload overwrites the previously uploaded artifact because they share the same name.{% endif %}

Job 3 displays the result uploaded in the previous job:
* Downloads the {% ifversion artifacts-v3-deprecation %}`homework_final` artifact from Job 2.{% else %}`homework` artifact.{% endif %}
* Prints the result of the math equation to the log.

The full math operation performed in this workflow example is `(3 + 7) x 9 = 90`.

```yaml copy
name: Share data between jobs

on: [push]

jobs:
  job_1:
    name: Add 3 and 7
    runs-on: ubuntu-latest
    steps:
      - shell: bash
        run: |
          expr 3 + 7 > math-homework.txt
      - name: Upload math result for job 1
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: {% ifversion artifacts-v3-deprecation %}homework_pre{% else %}homework{% endif %}
          path: math-homework.txt

  job_2:
    name: Multiply by 9
    needs: job_1
    runs-on: windows-latest
    steps:
      - name: Download math result for job 1
        uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: {% ifversion artifacts-v3-deprecation %}homework_pre{% else %}homework{% endif %}
      - shell: bash
        run: |
          value=`cat math-homework.txt`
          expr $value \* 9 > math-homework.txt
      - name: Upload math result for job 2
        uses: {% data reusables.actions.action-upload-artifact %}
        with:
          name: {% ifversion artifacts-v3-deprecation %}homework_final{% else %}homework{% endif %}
          path: math-homework.txt

  job_3:
    name: Display results
    needs: job_2
    runs-on: macOS-latest
    steps:
      - name: Download math result for job 2
        uses: {% data reusables.actions.action-download-artifact %}
        with:
          name: {% ifversion artifacts-v3-deprecation %}homework_final{% else %}homework{% endif %}
      - name: Print the final result
        shell: bash
        run: |
          value=`cat math-homework.txt`
          echo The result is $value
```

The workflow run will archive any artifacts that it generated. For more information on downloading archived artifacts, see [AUTOTITLE](/actions/managing-workflow-runs/downloading-workflow-artifacts).

{% ifversion fpt or ghec %}

## Validating artifacts

Every time the upload-artifact action is used it returns an output called `digest`. This is a SHA256 digest of the Artifact you uploaded during a workflow run.

When the download-artifact action is then used to download that artifact, it automatically calculates the digest for that downloaded artifact and validates that it matches the output from the upload-artifact step.

If the digest does not match, the run will display a warning in the UI and in the job logs.

To view the SHA256 digest, open the logs for the upload-artifact job or check in the Artifact output that appears in the workflow run UI.

{% endif %}
