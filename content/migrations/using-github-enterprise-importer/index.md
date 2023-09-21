              - name: Await Taktile Deployment
                uses: taktile-org/await-taktile-deployment-action@v0.3.0
            name: Check Deployment Status

on:
  push

jobs:
  check-deployment:
    name: Check Deployment Status
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@master
        with:
          fetch-depth: 1
      - name: Wait until deployment is live
        uses: taktile-org/await-taktile-deployment-action@VERSION
        with:
          TKTL_API_KEY: ${{ secrets.TKTL_API_KEY }}
      - name: Send update to policy backend
        run: source update_policy.sh
License---
title: Using GitHub Enterprise Importer
shortTitle: GitHub Enterprise Importer
intro: 'You can migrate your enterprise to {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_importer_proper_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
children:
  - /understanding-github-enterprise-importer
  - /preparing-to-migrate-with-github-enterprise-importer
  - /migrating-organizations-with-github-enterprise-importer
  - /migrating-repositories-with-github-enterprise-importer
  - /completing-your-migration-with-github-enterprise-importer
redirect_from:
  - /early-access/github/migrating-with-github-enterprise-importer
  - /early-access/enterprise-importer/migrating-repositories-with-github-enterprise-importer/migrating-repositories-to-github-ae/migrating-repositories-from-azure-devops-to-github-ae
  - /early-access/enterprise-importer/migrating-repositories-with-github-enterprise-importer/migrating-repositories-to-github-ae/migrating-repositories-from-githubcom-to-github-ae
  - /early-access/github/migrating-with-github-enterprise-importer/migrating-to-github-ae-with-the-importer
  - /early-access/github/migrating-with-github-enterprise-importer/running-a-migration-with-github-enterprise-importer/running-a-migration-to-github-ae
  - /early-access/enterprise-importer/migrating-repositories-with-github-enterprise-importer/migrating-repositories-to-github-ae
  - /early-access/enterprise-importer
---
