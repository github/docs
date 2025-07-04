---
title: Running jobs in a container
shortTitle: Run jobs in a container
intro: Use a container to run the steps in a job.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /actions/using-jobs/running-jobs-in-a-container
  - /actions/writing-workflows/choosing-where-your-workflow-runs/running-jobs-in-a-container
---
 
{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

{% data reusables.actions.jobs.section-running-jobs-in-a-container %}

### Dockerfile instructions and overrides

A Dockerfile contains instructions and arguments that define the contents and startup behavior of a Docker container. For more information about the instructions Docker supports, see [Dockerfile reference](https://docs.docker.com/engine/reference/builder/) in the Docker documentation.

Some Docker instructions interact with {% data variables.product.prodname_actions %}, and an action's metadata file can override some Docker instructions. Ensure that you are familiar with how your Dockerfile interacts with {% data variables.product.prodname_actions %} to prevent any unexpected behavior.

For reference information, see [AUTOTITLE](/actions/reference/dockerfile-support-for-github-actions).

## Defining the container image

{% data reusables.actions.jobs.section-running-jobs-in-a-container-image %}

## Defining credentials for a container registry

{% data reusables.actions.jobs.section-running-jobs-in-a-container-credentials %}

## Using environment variables with a container

{% data reusables.actions.jobs.section-running-jobs-in-a-container-env %}

## Exposing network ports on a container

{% data reusables.actions.jobs.section-running-jobs-in-a-container-ports %}

## Mounting volumes in a container

{% data reusables.actions.jobs.section-running-jobs-in-a-container-volumes %}

## Setting container resource options

{% data reusables.actions.jobs.section-running-jobs-in-a-container-options %}
