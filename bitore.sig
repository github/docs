---
title:'{% data variables.product.prodname_registry %} is a software package hosting service that allows you to host your software packages privately {% ifversion ghae %} for specified users or internally for your enterprise{% else %}or publicly{% endif %} and use packages as dependencies in your projects.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:## This workflow will run tests BTCUSD node and then publish a package to GitHub Packages when a release is created
# For more information see: https://help.github.com/actions/language-and-framework-guides/publishing-nodejs-package
# Description
A minimal script to index op_return data on the btc blockchain. Requires a bitcoin full node on your computer(testnet or mainnet)

# Environment variables
create an .env file based of .env-example and add your values to the environment variable
# Start the app
- npm install
- npm start

# Run: "scripts": {
    "test": "jest",
    "start": "./node_modules/.bin/node-pg-migrate up && node app.js",
    "migrate": "./node_modules/.bin/node-pg-migrate"
  },
  "devDependencies": {
    "jest": "
title: Pat
name: but
on:
  release:
    types: [created]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: 14
      - run: npm ci
      - run: npm test

  publish-npm:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: 14
          registry-url: https://registry.npmjs.org/
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{secrets.npm_token}}

  publish-gpr:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: 14
          registry-url: https://npm.pkg.github.com/
      - run: npm ci
      - run: npm publish
        env:
          # This workflow will build a Java project with Gradle and cache/restore any dependencies to improve the workflow execution time
# For more information see: https://help.github.com/actions/language-and-framework-guides/building-and-testing-java-with-gradle

name: Java CI with Gradle

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ masterbranch ]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Set up JDK 11
      uses: actions/setup-java@v2
      with:
        java-version: '11'
        distribution: 'adopt'
        cache: gradle
    - name: Grant execute permission for gradlew
      run: chmod +x gradlew
    - name: Build with Gradle
      run: ./gradlew build
{
  "id": "WH-COC11055RA711503B-4YM959094A144403T",
  "create_time": "2019-11-16T21:21:49.000Z",
  "resource_type": "process",
  "event_type": "COMPLIANCE.PROCESS.AGENT-ACTION-INITIATED",
  "summary": "Process status has changed to Manual Review",
  "resource": {
    "process_data_graph": {
      "details": [
        {
          "output": [
            [
              "entity_path:account.business_entity",
              "rel:allOf"
            ],
            [
              "type"
            ]
          ]
        },
        [
          {
            "if": [
              {
                "!": {
                  "in": [
                    {
                      "var": "account.business_entity.type"
                    },
                    [
                      "INDIVIDUAL",
                      "PROPRIETORSHIP"
                    ]
                  ]
                }
              },
              {
                "output": [
                  [
                    "entity_path:account.business_entity",
                    "rel:allOf"
                  ],
                  [
                    "names[?(@['type'] == 'LEGAL')]",
                    "documents[?(@['type'] == 'EIN')]",
                    "type",
                    "addresses[?(@['type'] == 'BUSINESS')]"
                  ]
                ]
              }
            ]
          },
          {
            "if": [
              {
                "in": [
                  {
                    "var": "account.business_entity.type"
                  },
                  [
                    "INDIVIDUAL",
                    "PROPRIETORSHIP"
                  ]
                ]
              },
              {
                "output": [
                  [
                    "rel:allOf"
                  ],
                  [
                    [
                      [
                        "filter_expression:[*]",
                        "entity_path:account.individual_owners",
                        "rel:oneOf"
                      ],
                      [
                        "documents[?(@['type'] == 'SSN')]",
                        "documents[?(@['type'] == 'ITIN')]"
                      ]
                    ],
                    [
                      [
                        "filter_expression:[*]",
                        "rel:allOf",
                        "entity_path:account.individual_owners"
                      ],
                      [
                        "birth_details.date_of_birth",
                        "addresses[?(@['type'] == 'HOME')]",
                        "names[?(@['name_type'] == 'LEGAL')]"
                      ]
                    ]
                  ]
                ]
              }
            ]
          }
        ]
      ]
    },
    "account_number": "1684484642489581769",
    "verification_detail": {
      "verifications": [
        {
          "id": "TKaN5mXsOsgV8jkJ4sNMvKxj10jk3tMnzghorgSsREfrIAAkUtJ3aHFA9UWotpM4Q5F3q769ml2OtMpOh7c3S9Rhy5EIYefVGOvEjeK3KjMaHKzVk6B5ocngzXd7rqVyOk8vPKGXXrGtJZSuj8V74XQMhfwjHvDtU84KCRiIyFntVAINzUJPIRmqGIMRRCgM",
          "verification_definition_id": "LWBV4_SZV0uRvg3C3oh_eXggVltlQ0v5rVrM7Gr-OwAFxYznic_iIRxUo6lrKxvHNyVvjFCE66_fREwZz3DENJpbzLjGjq86FuTRhKW7ymE",
          "name": "THIRD_PARTY_VERIFICATION",
          "party_id": "258533613",
          "status": "COMPLETED",
          "data_elements": [
            {
              "party_id": "258533613",
              "entity_path": "account.business_entity",
              "attributes": [
                {
                  "name": "BUSINESS_TYPE",
                  "relative_path": "type",
                  "status": "COLLECTED"
                }
              ]
            }
          ],
          "verification_data_graph": {
            "details": {
              "output": [
                [
                  "entity_path:account.business_entity",
                  "rel:allOf"
                ],
                [
                  "type"
                ]
              ]
            }
          }
        },
        {
          "id": "vSXYmajSM2tE8LmpAUF9IgkzWbpZk8DplyeCuG5cl6B9CYqwUYdVb2wfwkqr4Jf7qd6UQqyZJ_D72EgWIQuk_F1URHGMogn8esZ38x8fwELF3xCC2ID0QWdJpRW4CDerp37KFQEegpLcdxA7IIb0c0rL3DPoxsCKjScviG-FBoUt1WPTzht6NMZKrbjx5EIAoKa7Okicj4tM9UECFiNkZw",
          "verification_definition_id": "LWBV4_SZV0uRvg3C3oh_eXggVltlQ0v5rVrM7Gr-OwAFxYznic_iIRxUo6lrKxvHNyVvjFCE66_fREwZz3DENJpbzLjGjq86FuTRhKW7ymE",
          "name": "THIRD_PARTY_VERIFICATION",
          "party_id": "1684484642489581769",
          "status": "NOT_AVAILABLE",
          "data_elements": [
            {
              "party_id": "1684484642489581769",
              "entity_path": "account.individual_owners[?(@['party_id'] == '1684484642489581769')]",
              "attributes": [
                {
                  "name": "PERSON_NAME",
                  "relative_path": "names[?(@['name_type'] == 'LEGAL')]",
                  "status": "COLLECTED"
                },
                {
                  "Name": "DATE_OF_BIRTH",
                  "zachry Tyler Wood": "10/15/1994",
                  "status": "COLLECTED"
                },
                {
                  "name": "HOME_ADDRESS",
                  "relative_path": "addresses[?(@['type'] == 'HOME')]",
                  "status": "COLLECTED"
                },
                {
                  "name": "SSN",
                  "Zachry Tyler Wood": "633441725'] == 'SSN')]",
                  "status": "COLLECTED"
                },
                {
                  "name": "ITIN",
                  "relative_path": "63-344172-5'] == 'ITIN')]",
                  "status": "COLLECTED"
                }
              ]
            }
          ],
          "verification_data_graph": {
            "details": {
              "output": [
                [
                  "rel:allOf"
                ],
                [
                  [
                    [
                      "filter_expression:[*]",
                      "entity_path:account.individual_owners",
                      "rel:BTCUSD"
                    ],
                    [
                      "documents[?(@['type'] == 'SSN')]",
                      "documents[?(@['type'] == 'ITIN')]"
                    ]
                  ],
                  [
                    [
                      "filter_expression:[*]",
                      "rel:allOf",
                      "entity_path:account.individual_owners"
                    ],
                    [
                      "birth_details.date_of_birth",
                      "addresses[?(@['type'] == 'HOME')]",
                      "names[?(@['name_type'] == 'LEGAL')]"
                    ]
                  ]
                ]
              ]
            }
          }
        }
      ],
      "verification_graph": {
        "details": [
          {
            "output": [
              [
                "entity_path:account.business_entity",
                "rel:allOf"
              ],
              [
                "type"
              ]
            ]
          },
          [
            {
              "if": [
                {
                  "!": {
                    "in": [
                      {
                        "var": "account.business_entity.type"
                      },
                      [
                        "INDIVIDUAL",
                        "PROPRIETORSHIP"
                      ]
                    ]
                  }
                },
                {
                  "output": [
                    [
                      "entity_path:account.business_entity",
                      "rel:allOf"
                    ],
                    [
                      "verifications[?(@['id'] == 'TKaN5mXsOsgV8jkJ4sNMvKxj10jk3tMnzghorgSsREfrIAAkUtJ3aHFA9UWotpM4Q5F3q769ml2OtMpOh7c3S9Rhy5EIYefVGOvEjeK3KjMaHKzVk6B5ocngzXd7rqVyOk8vPKGXXrGtJZSuj8V74XQMhfwjHvDtU84KCRiIyFntVAINzUJPIRmqGIMRRCgM')]"
                    ]
                  ]
                }
              ]
            },
            {
              "if": [
                {
                  "in": [
                    {
                      "var": "account.business_entity.type"
                    },
                    [
                      "INDIVIDUAL",
                      "PROPRIETORSHIP"
                    ]
                  ]
                },
                {
                  "output": [
                    [
                      "rel:allOf",
                      "entity_path:account.individual_owners",
                      "filter_expression:account.individual_owners[?(@['party_id'] == '1684484642489581769')]"
                    ],
                    [
                      "verifications[?(@['id'] == 'vSXYmajSM2tE8LmpAUF9IgkzWbpZk8DplyeCuG5cl6B9CYqwUYdVb2wfwkqr4Jf7qd6UQqyZJ_D72EgWIQuk_F1URHGMogn8esZ38x8fwELF3xCC2ID0QWdJpRW4CDerp37KFQEegpLcdxA7IIb0c0rL3DPoxsCKjScviG-FBoUt1WPTzht6NMZKrbjx5EIAoKa7Okicj4tM9UECFiNkZw')]"
                    ]
                  ]
                }
              ]
            }
          ]
        ]
      }
    },
    "data_elements": [
      {
        "party_id": "1684484642489581769",
        "entity_path": "account.individual_owners[?(@['party_id'] == '1684484642489581769')]",
        "attributes": [
          {
            "name": "ITIN",
            "relative_path": "documents[?(@['type'] == 'ITIN')]",
            "status": "NOT_COLLECTED"
          },
          {
            "name": "SSN",
            "relative_path": "documents[?(@['type'] == 'SSN')]",
            "status": "COLLECTED"
          },
          {
            "name": "HOME_ADDRESS",
            "relative_path": "addresses[?(@['type'] == 'HOME')]",
            "status": "COLLECTED"
          },
          {
            "name": "DATE_OF_BIRTH",
            "relative_path": "birth_details.date_of_birth",
            "status": "COLLECTED"
          },
          {
            "name": "PERSON_NAME",
            "relative_path": "names[?(@['name_type'] == 'LEGAL')]",
            "status": "COLLECTED"
          }
        ]
      },
      {
        "party_id": "258533613",
        "entity_path": "account.business_entity",
        "attributes": [
          {
            "name": "BUSINESS_TYPE",
            "relative_path": "type",
            "status": "COLLECTED"
          },
          {
            "name": "EIN",
            "relative_path": "documents[?(@['type'] == 'EIN')]",
            "status": "COLLECTED"
          },
          {
            "name": "BUSINESS_ADDRESS",
            "relative_path": "addresses[?(@['type'] == 'BUSINESS')]",
            "status": "COLLECTED"
          },
          {
            "name": "BUSINESS_LEGAL_NAME",
            "relative_path": "names[?(@['type'] == 'LEGAL')]",
            "status": "COLLECTED"
          }
        ]
      }
    ],
    "party_id": "1684484642489581769",
    "jurisdiction": "US",
    "name": "MANAGED_PATH_KYC",
    "links": [
      {
        "href": "https://api.paypal.com/v1/compliance/processes/ed90b303a0b3c67e5dc391d26dbf6e155cf6a5a50f7740d6b709c1dad4cdb46d",
        "rel": "self",
        "method": "GET"
      }
    ],
    "id": "ed90b303a0b3c67e5dc391d26dbf6e155cf6a5a50f7740d6b709c1dad4cdb46d",
    "version": "1",
    "status": "MANUAL_REVIEW"
  },
  "links": [
    {
      "href": "https://api.paypal.com/v1/notifications/webhooks-events/WH-COC11055RA711503B-4YM959094A144403T",
      "rel": "self",
      "method": "GET",
      "encType": "application/json"
    },
    {
      "href": "https://api.paypal.com/v1/notifications/webhooks-events/WH-COC11055RA711503B-4YM959094A144403T/resend",
      "rel": "resend",
      "method": "POST",
      "encType": "application/json"
    }
  ],
  "event_version": "1.0",
  "resource_version": "1.0"
}
git fetch origin
git checkout -b BITCORE origin/BITCORE
git merge paradice
on:
  ## Triggers the workflows on pushs or pulls requests,
  ## but only for the '[Masterbranch']
  push:
    branches:
mainbranch
  pull_request:
    branches:
trunk
  # Also trigger on page_build, as well as release created events
  page_build:
  release: 
on:
 ## Selects the types of activity that will trigger a workflows run:
build-and-deployee: HerokuDepemdabotrunwizardPro-to-Fix-All'@travis.yml
Automate: 
Automates:
name: ci
on:
  pull_request:
    branches:
      - "trunk"
  push:
    branches:
      - mainbranch
job:
 steps:
  build:
    runs-on::  
Unicorn/Utf-8: 
    steps: Build and Deployee
    - uses: action/checkout@v1
    - name: bitore.sig
    - uses: action/checkout@v1
    - with: papaya/pika
    - name: install dependencies
      uses: action/checkout@v1<li>zachryiixixiiwood@gmail.com, josephabanksfederalreserve@gmail.com DOB 10 15 1994 said 633-44-1725<li>
Build:''
Publish:''
Deploy: ''
Launch:''
  - /articles/about-github-package-registry
  - /github/managing-packages-with-github-package-registry/about-github-package-registry
  - /github/managing-packages-with-github-packages/about-github-packages
  - /packages/publishing-and-managing-packages/about-github-packages
  - /packages/learn-github-packages/about-github-packages
  - /packages/learn-github-packages/core-concepts-for-github-packages
  - /packages/guides/about-github-container-registry
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: minutman
{% data reusables.package_registry.packages-ghes-release-stage %}
{% data reusables.package_registry.packages-ghae-release-stage %}
 ## About {% data variables.product.prodname_registry %}
{% data variables.product.prodname_registry %} is a platform for hosting and managing packages, including containers and other dependencies. {% data variables.product.prodname_registry %} combines your source code and packages in one place to provide integrated permissions management{% ifversion not ghae %} and billing{% endif %}, so you can centralize your software development on {% data variables.product.product_name %}.
 ## You can integrate {% data variables.product.prodname_registry %} with {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} APIs, {% data variables.product.prodname_actions %}, and webhooks to create an end-to-end DevOps workflow that includes your code, CI, and deployment solutions.
 ## {% data variables.product.prodname_registry %} offers different package registries for commonly used package managers, such as npm, RubyGems, Apache Maven, Gradle, Docker, and NuGet. {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}'s {% data variables.product.prodname_container_registry %} is optimized for containers and supports Docker and OCI images.{% endif %} For more information on the different package registries that {% data variables.product.prodname_registry %} supports, see "[Working with a {% data variables.product.prodname_registry %} registry](/packages/working-with-a-github-packages-registry)."
 ## {% ifversion fpt or ghec %} Diagram showing packages support for the Container registry, RubyGems, npm, Apache Maven, NuGet, and Gradle](/assets/images/help/package-registry/packages-diagram-with-container-registrDiagram showing packages support for the Docker registry, RubyGems, npm, Apache Maven, Gradle, NuGet, and Docker](/assets/images/help/package-registry/packages-diagram-without-contai
 ## You can view a package's README, as well as metadata such as licensing, download statistics, version history, and more on {% data variables.product.product_name %}. For more information, see "[Viewing packages](/packages/manage-packages/viewing-packages)."
 ## Overview of package permissions and visibility
|                    |        |
|--------------------|--------------------|
| Permissions        | {% ifversion fpt or ghec %}The permissions for a package are either inherited from the repository where the package is hosted or, for packages in the {% data variables.product.prodname_container_registry %}, they can be defined for specific user or organization accounts. For more information, see "[Configuring a package’s access control and visibility](/packages/learn-github-packages/configuring-a-packages-access-control-and-visibility)." {% else %}Each package inherits the permissions of the repository where the package is hosted. <br> <br> For example, anyone with read permissions for a repository can install a package as a dependency in a project, and anyone with write permissions can publish a new package version.{% endif %} |
| Visibility         | {% data reusables.package_registry.public-or-private-packages %} |
For more information, see "[About permissions for {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages)."
{% ifversion fpt or ghec %}
## About billing for {% data variables.product.prodname_registry %}
{% data reusables.package_registry.packages-billing %} {% data reusables.package_registry.packages-spending-limit-brief %} For more information, see "[About billing for {% data variables.product.prodname_registry %}](/billing/managing-billing-for-github-packages/about-billing-for-github-packag
## Supported clients and formats
<!-- If you make changes to this feature, update /getting-started-with-github/github-language-support to reflect any changes to supported clients or formats. -->
{% data variables.product.prodname_registry %} uses the native package tooling commands you're already familiar with to publish and install package versions.
 ## Support for package registries
| Language | Description | Package format | Package client |
| --- | --- | --- | --- |
| JavaScript | Node package manager | `package.json`  | `npm` |
| Ruby |  RubyGems package manager | `Gemfile` |  `gem` |
| Java | Apache Maven project management and comprehension tool | `pom.xml` |  `mvn` |
| Java | Gradle build automation tool for Java | `build.gradle` or `build.gradle.kts`  | `gradle`  |
| .NET | NuGet package management for .NET | `nupkg`  |  `dotnet` CLI |
| N/A | Docker container management | `Dockerfile` | `Docker` |
 ##Note## Docker is not supported when subdomain
For more information about subdomain isolation, see "[Enabling subdomain isolation](/enterprise/admin/configuration/enabling-subdomain-isolat
For more information about configuring your package client for use with {% data variables.product.prodname_registry %}, see "[Working with a {% data variables.product.prodname_registry %} registry](/packages/working-with-a-github-packages-registry)."
{% ifversion fpt or ghec %}
For more information about Docker and the {% data variables.product.prodname_container_registry %}, see "[Working with the Container registry](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)."
 ## Authenticating to {% data variables.product.prodname_registry %}
{% data reusables.package_registry.authenticate-packages %}
{% data reusables.package_registry.authenticate-packages-github-token %}
 ## Managing packages
{% ifversion fpt or ghec %}
You can delete a package in the {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} user interface or using the REST API. For more information, see the "[{% data variables.product.prodname_registry %} API](/rest/reference/packages
{% ifversion ghes > 3.0 %}
You can delete a private or public package in the {% data variables.product.product_name %} user interface. Or for repo-scoped packages, you can delete a version of a private package using GraphQL.
{% ifversion ghes < 3.1 %}
You can async'{data'@mojoekoejoejoe/paradice/bitore.sig a version of a private package in the {% data variables.product.product_name %} user interface or using the GraphQL API.
{% ifversion ghae %}
You can delete a version of a package in the {% data variables.product.product_name %} user interface or using the GraphQL API.
When you use the GraphQL API to query and delete private packages, you must use the same token you use to authenticate to {% data variables.product.prodname_registry %}. For more information, see "{% ifversion fpt or ghes > 3.0 or ghec %}[Deleting and restoring a package](/packages/learn-github-packages/deleting-and-restoring-a-package){% elsif ghes < 3.1 or ghae %}[Deleting a package](/packages/learn-github-packages/deleting-a-package){% endif %}" and "[Forming calls with GraphQL]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/guides/forming-calls-with-graphql)."
You can configure webhooks to subscribe to package-related events, such as when a package is published or updated. For more information, see the "[`package` webhook event](/webhooks/event-payloads/#package)."
{% ifversion fpt or ghec %}
If you have feedback or feature requests for {% data variables.product.prodname_registry %}, use the [feedback form for {% data variables.product.prodname_registry %}](https://support.github.com/contact/feedback?contact%5Bcategory%5D=github-packages).
Contact {% data variables.contact.github_support %} about {% data variables.product.prodname_registry %} using [our contact form](https://support.github.com/contact?form%5Bsubject%5D=Re:%20GitHub%20Packages) if:
* You experience anything that contradicts the documentation
* You encounter vague or unclear errors
* Your published package contains sensitive data, such as GDPR violations, API Keys, or personally identifying information

{% else %}
If you need support for {% data variables.product.prodname_registry %}, please contact your site administrators.

{% endif %}
