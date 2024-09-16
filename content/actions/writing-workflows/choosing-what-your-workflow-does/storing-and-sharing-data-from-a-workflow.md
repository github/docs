---
title: Storing and sharing data from a workflow
shortTitle: Store artifacts
intro: Artifacts allow you to share data between jobs in a workflow and store data once that workflow has completed.
redirect_from:
  - /articles/persisting-workflow-data-using-artifacts
  - /github/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
  - /actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts
  - /actions/configuring-and-managing-workflows/persisting-workflow-data-using-artifacts
  - /actions/guides/storing-workflow-data-as-artifacts
  - /actions/advanced-guides/storing-workflow-data-as-artifacts
  - /actions/using-workflows/storing-workflow-data-as-artifacts
  - /actions/writing-workflows/choosing-what-your-workflow-does/storing-workflow-data-as-artifacts
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## About workflow artifacts

Artifacts allow you to persist data after a job has completed, and share that data with another job in the same workflow. An artifact is a file or collection of files produced during a workflow run. For example, you can use artifacts to save your build and test output after a workflow run has ended. {% data reusables.actions.reusable-workflow-artifacts %}

{% data reusables.actions.artifact-log-retention-statement %} The retention period for a pull request restarts each time someone pushes a new commit to the pull request.

These are some of the common artifacts that you can upload:

* Log files and core dumps
* Test results, failures, and screenshots
* Binary or compressed files
* Stress test performance output and code coverage results

{% ifversion fpt or ghec %}

Storing artifacts uses storage space on {% data variables.product.product_name %}. {% data reusables.actions.actions-billing %} For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-actions)."

{% else %}

Artifacts consume storage space on the external blob storage that is configured for {% data variables.product.prodname_actions %} on {% data variables.location.product_location %}.

{% endif %}

Artifacts are uploaded during a workflow run, and you can view an artifact's name and size in the UI. When an artifact is downloaded using the {% data variables.product.product_name %} UI, all files that were individually uploaded as part of the artifact get zipped together into a single file. This means that billing is calculated based on the size of the uploaded artifact and not the size of the zip file.

{% data variables.product.product_name %} provides two actions that you can use to upload and download build artifacts. For more information, see the {% ifversion fpt or ghec %}[upload-artifact](https://github.com/actions/upload-artifact) and [download-artifact](https://github.com/actions/download-artifact) actions{% else %} `upload-artifact` and `download-artifact` actions on {% data variables.location.product_location %}{% endif %}.

To share data between jobs:

* **Uploading files**: Give the uploaded file a name and upload the data before the job ends.
* **Downloading files**: You can only download artifacts that were uploaded during the same workflow run. When you download a file, you can reference it by name.

The steps of a job share the same environment on the runner machine, but run in their own individual processes. To pass data between steps in a job, you can use inputs and outputs. For more information about inputs and outputs, see "[AUTOTITLE](/actions/creating-actions/metadata-syntax-for-github-actions)."

{% ifversion actions-caching %}

{% data reusables.actions.comparing-artifacts-caching %}

For more information on dependency caching, see "[AUTOTITLE](/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching)."

{% endif %}

## Uploading build and test artifacts

You can create a continuous integration (CI) workflow to build and test your code. For more information about using {% data variables.product.prodname_actions %} to perform CI, see "[AUTOTITLE](/actions/automating-builds-and-tests/about-continuous-integration)."

The output of building and testing your code often produces files you can use to debug test failures and production code that you can deploy. You can configure a workflow to build and test the code pushed to your repository and report a success or failure status. You can upload the build and test output to use for deployments, debugging failed tests or crashes, and viewing test suite coverage.

You can use the `upload-artifact` action to upload artifacts. When uploading an artifact, you can specify a single file or directory, or multiple files or directories. You can also exclude certain files or directories, and use wildcard patterns. We recommend that you provide a name for an artifact, but if no name is provided then `artifact` will be used as the default name. For more information on syntax, see the {% ifversion fpt or ghec %}[actions/upload-artifact](https://github.com/actions/upload-artifact) action{% else %} `actions/upload-artifact` action on {% data variables.location.product_location %}{% endif %}.

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

{% ifversion artifact-attestations %}

## Generating artifact attestations for builds

{% data reusables.actions.about-artifact-attestations %}

You can access attestations after a build run, underneath the list of the artifacts the build produced.

For more information, see "[AUTOTITLE](/actions/security-guides/using-artifact-attestations-to-establish-provenance-for-builds)."

{% endif %}

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

## Downloading or deleting artifacts

During a workflow run, you can use the [`download-artifact`](https://github.com/actions/download-artifact) action to download artifacts that were previously uploaded in the same workflow run.

After a workflow run has been completed, you can download or delete artifacts on {% data variables.product.prodname_dotcom %} or using the REST API. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/downloading-workflow-artifacts)," "[AUTOTITLE](/actions/managing-workflow-runs/removing-workflow-artifacts)," and "[AUTOTITLE](/rest/actions/artifacts)."

### Downloading artifacts during a workflow run

The [`actions/download-artifact`](https://github.com/actions/download-artifact) action can be used to download previously uploaded artifacts during a workflow run.

{% note %}

**Note:** You can only download artifacts in a workflow that were uploaded during the same workflow run.

{% endnote %}

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

For more information on syntax, see the {% ifversion fpt or ghec %}[actions/download-artifact](https://github.com/actions/download-artifact) action{% else %} `actions/download-artifact` action on {% data variables.location.product_location %}{% endif %}.

## Passing data between jobs in a workflow

You can use the `upload-artifact` and `download-artifact` actions to share data between jobs in a workflow. This example workflow illustrates how to pass data between jobs in the same workflow. For more information, see the {% ifversion fpt or ghec %}[actions/upload-artifact](https://github.com/actions/upload-artifact) and [download-artifact](https://github.com/actions/download-artifact) actions{% else %} `actions/upload-artifact` and `download-artifact` actions on {% data variables.location.product_location %}{% endif %}.

Jobs that are dependent on a previous job's artifacts must wait for the dependent job to complete successfully. This workflow uses the `needs` keyword to ensure that `job_1`, `job_2`, and `job_3` run sequentially. For example, `job_2` requires `job_1` using the `needs: job_1` syntax.

Job 1 performs these steps:
* Performs a math calculation and saves the result to a text file called `math-homework.txt`.
* Uses the `upload-artifact` action to upload the `math-homework.txt` file with the artifact name {% ifversion artifacts-v3-deprecation %}`homework_pre`{% else %}`homework`{% endif %}.

Job 2 uses the result in the previous job:
* Downloads the {% ifversion artifacts-v3-deprecation %}`homework_pre`{% else %}`homework`{% endif %} artifact uploaded in the previous job. By default, the `download-artifact` action downloads artifacts to the workspace directory that the step is executing in. You can use the `path` input parameter to specify a different download directory.
* Reads the value in the `math-homework.txt` file, performs a math calculation, and saves the result to `math-homework.txt` again, overwriting its contents.
* Uploads the `math-homework.txt` file. {% ifversion artifacts-v3-deprecation %}As artifacts are considered immutable in `v4`, the artifact is passed a different input, `homework_final`, as a name.{% else %}This upload overwrites the previously uploaded artifact because they share the same name.{% endif %}

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

The workflow run will archive any artifacts that it generated. For more information on downloading archived artifacts, see "[AUTOTITLE](/actions/managing-workflow-runs/downloading-workflow-artifacts)."

{% ifversion fpt or ghec %}

## Further reading

* "[AUTOTITLE](/billing/managing-billing-for-github-actions)".

{% endif %}
