A **workflow** is a configurable automated process that will run one or more jobs. Workflows are defined by a YAML file checked in to your repository and will run when triggered by an event in your repository, or they can be triggered manually, or at a defined schedule.

Workflows are defined in the `.github/workflows` directory in a repository. A repository can have multiple workflows, each which can perform a different set of tasks such as:
* Building and testing pull requests.
* Deploying your application every time a release is created.
* Adding a label whenever a new issue is opened.
