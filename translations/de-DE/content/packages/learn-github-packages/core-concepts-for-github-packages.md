---
title: Core concepts for GitHub Packages
intro: 'Below is a list of common {% data variables.product.prodname_registry %} terms we use across our sites and documentation.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /packages/getting-started-with-github-container-registry/core-concepts-for-github-container-registry
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.package_registry.packages-ghes-release-stage %}

### Package

A package is a self-contained and reusable piece of software that includes code and metadata that a developer bundles together in a common place for others to use. A package's metadata may include the version number, name, and the code's dependencies. Packages simplify using and distributing solutions to common problems such as needing frameworks for developing or testing a project, linters to improve code quality, or industry-standard machine learning tools to power your application. Packages exist in many ecosystems. For example, you can package Node.js and Java code or container images.

### Container

A container is a unit of software designed to reliably deploy software in a standardized way on any platform. A container operates as an isolated virtual environment or instance that can run various software packages and components on the same host kernel as your operating system. Containers use fewer resources than virtual machines because they don't need to include their own virtual hardware to run. Containers are created using a container image file, such as a Dockerfile, and a container client or runtime program.

### Container image

A container image is a type of package archive that specifies the software requirements to run an app from a container. A container image typically includes the app's code, libraries, and runtime instructions. To ensure that the same image details are used wherever an image is deployed and run, a container image is automatically versioned and cannot be changed once a container image is built in a container.

### Docker-Container

A Docker container is a type of open source container built on the Docker platform. Docker's original image format has become the OCI (Open Container Initiative) Image Specification. For more information, see the "[Docker documentation](https://docs.docker.com/get-started/overview/)."
