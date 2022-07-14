---
title: コンテナ内でのジョブの実行
shortTitle: コンテナ内でのジョブの実行
intro: Use a container to run the steps in a job.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## 概要

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

