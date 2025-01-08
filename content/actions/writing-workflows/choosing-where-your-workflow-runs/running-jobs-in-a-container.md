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
---
 
{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview

{% data reusables.actions.jobs.section-running-jobs-in-a-container %}

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
