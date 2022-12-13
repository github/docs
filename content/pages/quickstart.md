-' Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@zakwarlord7 
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
zakwarlord7
/
PNCBANK
Public
generated from zakwarlord7/zakwarlord7
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
Comparing changes
Choose two branches to see what’s changed or to start a new pull request. If you need to, you can also .
    
There isn’t anything to compare.
Paradice and TREE are entirely different commit histories.

Showing  with 46,726 additions and 0 deletions.
 202  
.github/workflows/:rake.i
@@ -0,0 +1,202 @@
# This workflow uses actions that are not certified by GitHub.
# They are provided by a third-party and are governed by
# separate terms of service, privacy policy, and support
# documentation.

# 💁 The OpenShift Starter workflow will:
# - Checkout your repository
# - Perform a container image build
# - Push the built image to the GitHub Container Registry (GHCR)
# - Log in to your OpenShift cluster
# - Create an OpenShift app from the image and expose it to the internet

# ℹ️ Configure your repository and the workflow with the following steps:
# 1. Have access to an OpenShift cluster. Refer to https://www.openshift.com/try
# 2. Create the OPENSHIFT_SERVER and OPENSHIFT_TOKEN repository secrets. Refer to:
#   - https://github.com/redhat-actions/oc-login#readme
#   - https://docs.github.com/en/actions/reference/encrypted-secrets
#   - https://cli.github.com/manual/gh_secret_set
# 3. (Optional) Edit the top-level 'env' section as marked with '🖊️' if the defaults are not suitable for your project.
# 4. (Optional) Edit the build-image step to build your project.
#    The default build type is by using a Dockerfile at the root of the repository,
#    but can be replaced with a different file, a source-to-image build, or a step-by-step buildah build.
# 5. Commit and push the workflow file to your default branch to trigger a workflow run.

# 👋 Visit our GitHub organization at https://github.com/redhat-actions/ to see our actions and provide feedback.

name: OpenShift

env:
  # 🖊️ EDIT your repository secrets to log into your OpenShift cluster and set up the context.
  # See https://github.com/redhat-actions/oc-login#readme for how to retrieve these values.
  # To get a permanent token, refer to https://github.com/redhat-actions/oc-login/wiki/Using-a-Service-Account-for-GitHub-Actions
  OPENSHIFT_SERVER: ${{ secrets.OPENSHIFT_SERVER }}
  OPENSHIFT_TOKEN: ${{ secrets.OPENSHIFT_TOKEN }}
  # 🖊️ EDIT to set the kube context's namespace after login. Leave blank to use your user's default namespace.
  OPENSHIFT_NAMESPACE: ""

  # 🖊️ EDIT to set a name for your OpenShift app, or a default one will be generated below.
  APP_NAME: ""

  # 🖊️ EDIT with the port your application should be accessible on.
  # If the container image exposes *exactly one* port, this can be left blank.
  # Refer to the 'port' input of https://github.com/redhat-actions/oc-new-app
  APP_PORT: ""

  # 🖊️ EDIT to change the image registry settings.
  # Registries such as GHCR, Quay.io, and Docker Hub are supported.
  IMAGE_REGISTRY: ghcr.io/${{ github.repository_owner }}
  IMAGE_REGISTRY_USER: ${{ github.actor }}
  IMAGE_REGISTRY_PASSWORD: ${{ github.token }}

  # 🖊️ EDIT to specify custom tags for the container image, or default tags will be generated below.
  IMAGE_TAGS: ""

on:
  # https://docs.github.com/en/actions/reference/events-that-trigger-workflows
  workflow_dispatch:
  push:
    # Edit to the branch(es) you want to build and deploy on each push.
    branches: [ "paradice" ]

jobs:
  # 🖊️ EDIT if you want to run vulnerability check on your project before deploying
  # the application. Please uncomment the below CRDA scan job and configure to run it in
  # your workflow. For details about CRDA action visit https://github.com/redhat-actions/crda/blob/main/README.md
  #
  # TODO: Make sure to add 'CRDA Scan' starter workflow from the 'Actions' tab.
  # For guide on adding new starter workflow visit https://docs.github.com/en/github-ae@latest/actions/using-workflows/using-starter-workflows

  crda-scan:
    uses: ./.github/workflows/crda.yml
    secrets:
      CRDA_KEY: ${{ secrets.CRDA_KEY }}
      # SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}       # Either use SNYK_TOKEN or CRDA_KEY

  openshift-ci-cd:
    # 🖊️ Uncomment this if you are using CRDA scan step above
    # needs: crda-scan
    name: Build and deploy to OpenShift
    runs-on: ubuntu-20.04
    environment: production

    outputs:
      ROUTE: ${{ steps.deploy-and-expose.outputs.route }}
      SELECTOR: ${{ steps.deploy-and-expose.outputs.selector }}

    steps:
    - name: Check for required secrets
      uses: actions/github-script@v6
      with:
        script: |
          const secrets = {
            OPENSHIFT_SERVER: `${{ secrets.OPENSHIFT_SERVER }}`,
            OPENSHIFT_TOKEN: `${{ secrets.OPENSHIFT_TOKEN }}`,
          };

          const GHCR = "ghcr.io";
          if (`${{ env.IMAGE_REGISTRY }}`.startsWith(GHCR)) {
            core.info(`Image registry is ${GHCR} - no registry password required`);
          }
          else {
            core.info("A registry password is required");
            secrets["IMAGE_REGISTRY_PASSWORD"] = `${{ secrets.IMAGE_REGISTRY_PASSWORD }}`;
          }

          const missingSecrets = Object.entries(secrets).filter(([ name, value ]) => {
            if (value.length === 0) {
              core.error(`Secret "${name}" is not set`);
              return true;
            }
            core.info(`✔️ Secret "${name}" is set`);
            return false;
          });

          if (missingSecrets.length > 0) {
            core.setFailed(`❌ At least one required secret is not set in the repository. \n` +
              "You can add it using:\n" +
              "GitHub UI: https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository \n" +
              "GitHub CLI: https://cli.github.com/manual/gh_secret_set \n" +
              "Also, refer to https://github.com/redhat-actions/oc-login#getting-started-with-the-action-or-see-example");
          }
          else {
            core.info(`✅ All the required secrets are set`);
          }

    - name: Check out repository
      uses: actions/checkout@v3

    - name: Determine app name
      if: env.APP_NAME == ''
      run: |
        echo "APP_NAME=$(basename $PWD)" | tee -a $GITHUB_ENV

    - name: Determine image tags
      if: env.IMAGE_TAGS == ''
      run: |
        echo "IMAGE_TAGS=latest ${GITHUB_SHA::12}" | tee -a $GITHUB_ENV

    # https://github.com/redhat-actions/buildah-build#readme
    - name: Build from Dockerfile
      id: build-image
      uses: redhat-actions/buildah-build@v2
      with:
        image: ${{ env.APP_NAME }}
        tags: ${{ env.IMAGE_TAGS }}

        # If you don't have a Dockerfile/Containerfile, refer to https://github.com/redhat-actions/buildah-build#scratch-build-inputs
        # Or, perform a source-to-image build using https://github.com/redhat-actions/s2i-build
        # Otherwise, point this to your Dockerfile/Containerfile relative to the repository root.
        dockerfiles: |
          ./Dockerfile

    # https://github.com/redhat-actions/push-to-registry#readme
    - name: Push to registry
      id: push-image
      uses: redhat-actions/push-to-registry@v2
      with:
        image: ${{ steps.build-image.outputs.image }}
        tags: ${{ steps.build-image.outputs.tags }}
        registry: ${{ env.IMAGE_REGISTRY }}
        username: ${{ env.IMAGE_REGISTRY_USER }}
        password: ${{ env.IMAGE_REGISTRY_PASSWORD }}

    # The path the image was pushed to is now stored in ${{ steps.push-image.outputs.registry-path }}

    - name: Install oc
      uses: redhat-actions/openshift-tools-installer@v1
      with:
        oc: 4

    # https://github.com/redhat-actions/oc-login#readme
    - name: Log in to OpenShift
      uses: redhat-actions/oc-login@v1
      with:
        openshift_server_url: ${{ env.OPENSHIFT_SERVER }}
        openshift_token: ${{ env.OPENSHIFT_TOKEN }}
        insecure_skip_tls_verify: true
        namespace: ${{ env.OPENSHIFT_NAMESPACE }}

    # This step should create a deployment, service, and route to run your app and expose it to the internet.
    # https://github.com/redhat-actions/oc-new-app#readme
    - name: Create and expose app
      id: deploy-and-expose
      uses: redhat-actions/oc-new-app@v1
      with:
        app_name: ${{ env.APP_NAME }}
        image: ${{ steps.push-image.outputs.registry-path }}
        namespace: ${{ env.OPENSHIFT_NAMESPACE }}
        port: ${{ env.APP_PORT }}

    - name: Print application URL
      env:
        ROUTE: ${{ steps.deploy-and-expose.outputs.route }}
        SELECTOR: ${{ steps.deploy-and-expose.outputs.selector }}
      run: |
        [[ -n ${{ env.ROUTE }} ]] || (echo "Determining application route failed in previous step"; exit 1)
        echo
        echo "======================== Your application is available at: ========================"
        echo ${{ env.ROUTE }}
        echo "==================================================================================="
        echo
        echo "Your app can be taken down with: \"oc delete all --selector='${{ env.SELECTOR }}'\""
 95  
.github/workflows/aws.yml
@@ -0,0 +1,95 @@
# This workflow will build and push a new container image to Amazon ECR,
# and then will deploy a new task definition to Amazon ECS, when there is a push to the "paradice" branch.
#
# To use this workflow, you will need to complete the following set-up steps:
#
# 1. Create an ECR repository to store your images.
#    For example: `aws ecr create-repository --repository-name my-ecr-repo --region us-east-2`.
#    Replace the value of the `ECR_REPOSITORY` environment variable in the workflow below with your repository's name.
#    Replace the value of the `AWS_REGION` environment variable in the workflow below with your repository's region.
#
# 2. Create an ECS task definition, an ECS cluster, and an ECS service.
#    For example, follow the Getting Started guide on the ECS console:
#      https://us-east-2.console.aws.amazon.com/ecs/home?region=us-east-2#/firstRun
#    Replace the value of the `ECS_SERVICE` environment variable in the workflow below with the name you set for the Amazon ECS service.
#    Replace the value of the `ECS_CLUSTER` environment variable in the workflow below with the name you set for the cluster.
#
# 3. Store your ECS task definition as a JSON file in your repository.
#    The format should follow the output of `aws ecs register-task-definition --generate-cli-skeleton`.
#    Replace the value of the `ECS_TASK_DEFINITION` environment variable in the workflow below with the path to the JSON file.
#    Replace the value of the `CONTAINER_NAME` environment variable in the workflow below with the name of the container
#    in the `containerDefinitions` section of the task definition.
#
# 4. Store an IAM user access key in GitHub Actions secrets named `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`.
#    See the documentation for each action used below for the recommended IAM policies for this IAM user,
#    and best practices on handling the access key credentials.

name: Deploy to Amazon ECS

on:
  push:
    branches:
      - "paradice"

env:
  AWS_REGION: MY_AWS_REGION                   # set this to your preferred AWS region, e.g. us-west-1
  ECR_REPOSITORY: MY_ECR_REPOSITORY           # set this to your Amazon ECR repository name
  ECS_SERVICE: MY_ECS_SERVICE                 # set this to your Amazon ECS service name
  ECS_CLUSTER: MY_ECS_CLUSTER                 # set this to your Amazon ECS cluster name
  ECS_TASK_DEFINITION: MY_ECS_TASK_DEFINITION # set this to the path to your Amazon ECS task definition
                                               # file, e.g. .aws/task-definition.json
  CONTAINER_NAME: MY_CONTAINER_NAME           # set this to the name of the container in the
                                               # containerDefinitions section of your task definition

permissions:
  contents: read

jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest
    environment: production

    steps:
    - name: Checkout
      uses: actions/checkout@v3

    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v1
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: ${{ env.AWS_REGION }}

    - name: Login to Amazon ECR
      id: login-ecr
      uses: aws-actions/amazon-ecr-login@v1

    - name: Build, tag, and push image to Amazon ECR
      id: build-image
      env:
        ECR_REGISTRY: ${{ steps.login-ecr.outputs.registry }}
        IMAGE_TAG: ${{ github.sha }}
      run: |
        # Build a docker container and
        # push it to ECR so that it can
        # be deployed to ECS.
        docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG .
        docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG
        echo "::set-output name=image::$ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG"
    - name: Fill in the new image ID in the Amazon ECS task definition
      id: task-def
      uses: aws-actions/amazon-ecs-render-task-definition@v1
      with:
        task-definition: ${{ env.ECS_TASK_DEFINITION }}
        container-name: ${{ env.CONTAINER_NAME }}
        image: ${{ steps.build-image.outputs.image }}

    - name: Deploy Amazon ECS task definition
      uses: aws-actions/amazon-ecs-deploy-task-definition@v1
      with:
        task-definition: ${{ steps.task-def.outputs.task-definition }}
        service: ${{ env.ECS_SERVICE }}
        cluster: ${{ env.ECS_CLUSTER }}
        wait-for-service-stability: true
 4,318  
.github/workflows/blank.yml
Large diffs are not rendered by default.

 58  
.github/workflows/greetings.yml
@@ -0,0 +1,58 @@
'"**'"'Name: Greetings
on: ["pull_request_t":"2017 2018 2019 2020 2021
++ Best Time to 911
++ INTERNAL REVENUE SERVICE
++ PO BOX 1214
++ CHARLOTTE NC 28201-1214 9999999999
++ 633-44-1725
++ ZACHRYTWOOD
++ AMPITHEATRE PARKWAY
++ MOUNTAIN VIEW, Califomia 94043
++ EIN 61-1767919
++ Earnings FEIN 88-1303491
++ End Date
++ 44669
++ Department of the Treasury Calendar Year
++ Check Date
++ Internal Revenue Service Due. (04/18/2022)
++41224 Stub Number: 1+-+-+-+- Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)+- INTERNAL REVENUE SERVICE, *include interest paid, capital obligation, and underweighting 6858000000+- PO BOX 1214, Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share) 22677000000+- CHARLOTTE, NC 28201-1214 Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share) 22677000000+- Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share) 22677000000Taxes / Deductions Current YTD+- Fiscal year ends in Dec 31 | USDRate+-Total+- 7567263607 DoB: 1994-10-15YTD+-+- April 18, 2022.-7567263607WOOD ZACHRY Tax Period Total Social Security Medicare Withholding+- Fed 941 Corporate 39355 66986.66 28841.48 6745.18 31400+- Fed 941 West Subsidiary 39355 17115.41 7369.14 1723.42 8022.85+- Fed 941 South Subsidiary 39355 23906.09 10292.9 2407.21 11205.98+- Fed 941 East Subsidiary 39355 11247.64 4842.74 1132.57 5272.33+- Fed 941 Corp - Penalty 39355 27198.5 11710.47 2738.73 12749.3+- Fed 940 Annual Unemp - Corp 39355 17028.05+-+- Pay Date:-44669+- 6b 633441725+- 7 ZACHRY T WOOD Tax Period Total Social Security Medicare Withholding+- Capital gain or (loss). Attach Schedule D if required. If not required, check here ....▶ Fed 941 Corporate 39355 66986.66 28841.48 6745.18 31400+- 7 Fed 941 West Subsidiary 39355 17115.41 7369.14 1723.42 8022.85+- 8 Fed 941 South Subsidiary 39355 23906.09 10292.9 2407.21 11205.98+- Other income from Schedule 1, line 10 .................. Fed 941 East Subsidiary 39355 11247.64 4842.74 1132.57 5272.33+- 8 Fed 941 Corp - Penalty 39355 27198.5 11710.47 2738.73 12749.3+- 9 Fed 940 Annual Unemp - Corp 39355 17028.05+- Add lines 1, 2b, 3b, 4b, 5b, 6b, 7, and 8. This is your total income .........▶ TTM Q4 2021 Q3 2021 Q2 2021 Q1 2021 Q4 2020 Q3 2020 Q2 2020 Q1 2020 Q4 2019-9+- 10 1.46698E+11 42337000000 37497000000 35653000000 31211000000 30818000000 25056000000 19744000000 22177000000 25055000000+- Adjustments to income from Schedule 1, line 26 ............... 2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000 41159000000 46075000000+- 10 2.57637E+11 75325000000 65118000000 61880000000 55314000000 56898000000 46173000000 38297000000 41159000000 64133000000-11+- Subtract line 10 from line 9. This is your adjusted gross income .........▶ -5.79457E+11 -32988000000 -27621000000 -26227000000 -24103000000 -26080000000 -21117000000 -18553000000 -18982000000 -21020000000-3.28E+11#NAME?+- • Single or Married filing separately, $12,550 -67984000000 -20452000000 -16466000000 -8617000000 -7289000000 -8145000000 -6987000000 -6486000000 -7380000000 -8567000000+- • Married filing jointly or Qualifying widow(er), $25,100 -36422000000 -11744000000 -8772000000 -3341000000 -2773000000 -2831000000 -2756000000 -2585000000 -2880000000 -2829000000+- • Head of household, $18,800 -13510000000 -4140000000 -3256000000 -5276000000 -4516000000 -5314000000 -4231000000 -3901000000 -4500000000 -5738000000+- • If you checked any box under Standard Deduction, see instructions. -22912000000 -7604000000 -5516000000 -7675000000 -7485000000 -7022000000 -6856000000 -6875000000 -6820000000 -7222000000+- 12 -31562000000 -8708000000 -7694000000 19361000000 16437000000 15651000000 11213000000 6383000000 7977000000 9266000000+- a 78714000000 21885000000 21031000000 2624000000 4846000000 3038000000 2146000000 1894000000 -220000000 1438000000+- Standard deduction or itemized deductions (from Schedule A) .. 12020000000 2517000000 2033000000 313000000 269000000 333000000 412000000 420000000 565000000 604000000+- 12a 1153000000 261000000 310000000 313000000 269000000 333000000 412000000 420000000 565000000 604000000ZACHRY WOOD <zachryiixixiiwood@gmail.com>+- b 1153000000 261000000 310000000ZACHRY TYLER WOOD's Paycheck#NAME?ZACHRY WOOD <zachryiixixiiwood@gmail.com>Sat, Oct 22, 2022 at 4:52 AM+- 12b -346000000 -117000000 -77000000 389000000 345000000 386000000 460000000 433000000 586000000 621000000To Pastor. Robert Michael Wood<jc4unme316@ahoo.com>+- c 1499000000 378000000 387000000 2924000000 4869000000 3530000000 1957000000 1696000000 -809000000 899000000INTERNAL REVENUE SERVICE, *include interest paid, capital obligation, and underweighting 6858000000
PO BOX 1214, Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)
22677000000
CHARLOTTE, NC 28201-1214 Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share) 22677000000
Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)
22677000000
Taxes / Deductions Current YTD
Fiscal year ends in Dec 31 | USD
Rate
Total
7567263607 ID 00037305581 SSN 633441725 DoB 1994-10-15
year to date :
this period :
April 18, 2022.
7567263607
WOOD ZACHRY Tax Period Total Social Security Medicare Withholding
Fed 941 Corporate 39355 66986.66 28841.48 6745.18 31400
Fed 941 West Subsidiary 39355 17115.41 7369.14 1723.42 8022.85
Fed 941 South Subsidiary 39355 23906.09 10292.9 2407.21 11205.98
Fed 941 East Subsidiary 39355 11247.64 4842.74 1132.57 5272.33
Fed 941 Corp - Penalty 39355 27198.5 11710.47 2738.73 12749.3
Fed 940 Annual Unemp - Corp 39355 17028.05"**":,''
]

jobs:
  greeting:
    runs-on: ubuntu-latest
    permissions:
      issues: write
      pull-requests: write
    steps:
    - uses: actions/first-interaction@v1
      with:
        repo-token: ${{ secrets.GITHUB_TOKEN }}
        issue-message: "Message that will be displayed on users' first issue"
        pr-message: "Message that will be displayed on users' first pull request"
 # Display some statistics at the end regarding the stale workflow (only when the logs are enabled).
    enable-statistics: # optional, default is true
    # A comma delimited list of labels to add when a stale issue or pull request receives activity and has the stale-issue-label or stale-pr-label removed from it.
    labels-to-add-when-unstale: # optional, default is 
 113  
.github/workflows/jekyll.yml
@@ -0,0 +1,113 @@
# This workflow uses actions that are not certified by GitHub.
# They are provided by a third-party and are governed by
# separate terms of service, privacy policy, and support
# documentation.

# Sample workflow for building and deploying a Jekyll site to GitHub Pages
name: Deploy Jekyll site to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["paradice"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow one concurrent deployment
concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Setup Ruby
        uses: ruby/setup-ruby@0a29871fe2b0200a17a4497bae54fe5df0d973aa # v1.115.3
        with:
          ruby-version: '3.0' # Not needed with a .ruby-version file
          bundler-cache: true # runs 'bundle install' and caches installed gems automatically
          cache-version: 0 # Increment this number if you need to re-download cached gems
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v2
      - name: Build with Jekyll
        # Outputs to the './_site' directory by default
        run: bundle exec jekyll build --baseurl "${{ steps.pages.outputs.base_path }}"
        env:
          JEKYLL_ENV: production
      - name: Upload artifact
        # Automatically uploads an artifact from the './_site' directory by default
        uses: actions/upload-pages-artifact@v1

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
																
																
																
																
																
																
																
																
																
																
INTERNAL REVENUE SERVICE,                                                                        																
PO BOX 1214,                                                                        																
CHARLOTTE, NC 28201-1214                                                                        																
																
ZACHRY WOOD                                                                        								12 Months Ended                                                                								
15								_________________________________________________________                                                                								
For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see separate instructions.                                                                        								                        Q4 2020                        Q4  2019                								
Cat. No. 11320B                                                                        								Income Statement                                                                 								
Form 1040 (2021)                                                                        								USD in "000'"s                                                                								
Reported Normalized and Operating Income/Expense Supplemental Section                                                                        								Repayments for Long Term Debt                        Dec. 31, 2020                        Dec. 31, 2019                								
Total Revenue as Reported, Supplemental                                                                        								Costs and expenses:                                                                								
Total Operating Profit/Loss as Reported, Supplemental                                                                        								Cost of revenues                        182527                        161857                								
Reported Effective Tax Rate                                                                        								Research and development                                                                								
Reported Normalized Income                                                                        								Sales and marketing                        84732                        71896                								
Reported Normalized Operating Profit                                                                        								General and administrative                        27573                        26018                								
Other Adjustments to Net Income Available to Common Stockholders                                                                        								European Commission fines                        17946                        18464                								
Discontinued Operations                                                                        								Total costs and expenses                        11052                        9551                								
Basic EPS                                                                        								Income from operations                        0                        1697                								
Basic EPS from Continuing Operations                                                                        								Other income (expense), net                        141303                        127626                								
Basic EPS from Discontinued Operations                                                                        								Income before income taxes                        41224                        34231                								
Diluted EPS                                                                        								Provision for income taxes                        6858000000                        5394                								
Diluted EPS from Continuing Operations                                                                        								Net income                        22677000000                        19289000000                								
Diluted EPS from Discontinued Operations                                                                        								*include interest paid, capital obligation, and underweighting                        22677000000                        19289000000                								
Basic Weighted Average Shares Outstanding                                                                        								                        22677000000                        19289000000                								
Diluted Weighted Average Shares Outstanding                                                                        								Basic net income per share of Class A and B common stock and Class C capital stock (in dollars par share)                                                                								
Reported Normalized Diluted EPS                                                                        								Diluted net income per share of Class A and Class B common stock and Class C capital stock (in dollars par share)                                                                								
Basic EPS                                                                        																
Diluted EPS                                                                        																
Basic WASO                                                                        								For Disclosure, Privacy Act, and Paperwork Reduction Act Notice, see the seperate Instructions.                                                                								
Diluted WASO                                                                        																
Fiscal year end September 28th., 2022. | USD                                                                        								Returned for Signature                                                                								
								Date.______________09/01/2022                        								
For Paperwork Reduction Act Notice, see the seperate Instructions.                                                                        																
																
																
																
																
																
																
important information                                                                        																
 364  
.github/workflows/objective-c-xcode.yml
Large diffs are not rendered by default.

 4,813  
.github/workflows/openshift.yml
Large diffs are not rendered by default.

 1,852  
.github/workflows/slate.yml
Large diffs are not rendered by default.

 1,619  
.github/workflows/stale.yml
Large diffs are not rendered by default.

 58  
0719218914720416547
@@ -0,0 +1,58 @@
- 👋 Hi, I’m @zakwarlord7
- 👀 I’m interested in ...
- 🌱 I’m currently learning ...
- 💞️ I’m looking to collaborate on ...
- 📫 How to reach me ...
2021 BUSINESS SUMMARY		
Jan 01 - Dec 31		



INCOME	 	AMOUNT
 	 	-


SCHEDULE C DEDUCTIONS	SPENDING	DEDUCTIONS
Advertising	-	-
Assets	-	-
Car and truck	-	-
Commissions	-	-
Communication	-	-
Contract labor	-	-
Equipment rent and lease	-	-
Home Office Expenses	-	-
Insurance	-	-
Interest paid	-	-
Legal and professional services	-	-
Materials & Supplies	-	-
Meals	-	-
Office expenses	-	-
Other business expenses	-	-
Rent and lease (business bldg/land)	-	-
Repairs and maintenance	-	-
Taxes and licenses	-	-
Travel expenses	-	-
Uncategorized	-	-
Utilities	-	-
TOTAL	-	-
OTHER 
DEDUCTIONS	
SPENDING	
DEDUCTION 
ESTIMATE 
Savings 
Account 
TAX 
PAYMENTS	 	
AMOUNT
Payment 
Summary	 	-
TRANSFERS	 
AMOUNT
DEBIT :Debit card-#4034910067530719 :  
payment	 	-
Personal  deposit	 	-
Personal Transfer install :uses :WIZARD/install/installer/src.code.dist/.dir'@sun.java.org/ install ::<!---
zakwarlord7/zakwarlord7 is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes--->chrome-extension://bpmcpldpdmajfigpchkicefoigmkfalc/views/app.html

 203  
:rake.io
@@ -0,0 +1,203 @@
- 👋 Hi, I’m @zakwarlord7
- 👀 I’m interested in ...
- 🌱 I’m currently learning ...
- 💞️ I’m looking to collaborate on ...
- 📫 How to reach me ...
<!---
zakwarlord7/zakwarlord7 is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
12/31/2020	CONSOLIDATED STATEMENTS OF COMPREHENSIVE INCOME - USD ($) $ in Millions	12 Months Ended		
Income Revenue Report		Dec. 31, 2020	Dec. 31, 2019	Dec. 31, 2018
  Alphabet Inc Co	Statement of Comprehensive Income [Abstract]			
	Net income	 $ 40,269 	 $ 34,343 	 $ 30,736 

	Other comprehensive income (loss):			
	Change in foreign currency translation adjustment	1,139 	(119)	(781)
	Available-for-sale investments:			
	Change in net unrealized gains (losses)	1,313 	1,611 	88 
	Less: reclassification adjustment for net (gains) losses included in net income	(513)	(111)	(911)
	Net change, net of tax benefit (expense) of $156, $(221), and $(230)	800 	1,500 	(823)
	Cash flow hedges:			
	Change in net unrealized gains (losses)	42 	22 	290 
	Less: reclassification adjustment for net (gains) losses included in net income	(116)	(299)	98 
	Net change, net of tax benefit (expense) of $(103), $42, and $11	(74)	(277)	388 
	Other comprehensive income (loss)	1,865 	1,104 	(1,216)
	Comprehensive income	 $ 42,134 	 $ 35,447 	 $ 29,520 



	CONSOLIDATED BALANCE SHEETS (Parenthetical) - $ / shares	Dec. 31, 2020	Dec. 31, 2019	
	Stockholders’ equity:			
	Convertible preferred stock, par value per share (in dollars per share)	$0.00 	$0.00 	
	Convertible preferred stock, shares authorized (in shares)	100,000,000	100,000,000	
	Convertible preferred stock, shares issued (in shares)	0	0	
	Convertible preferred stock, shares outstanding (in shares)	0	0	
	Common stock and capital stock, par value (in dollars per share)	$0.00 	$0.00 	
	Common stock and capital stock, shares authorized (in shares)	15,000,000,000	15,000,000,000	
	Common stock and capital stock, shares issued (in shares)	675,222,000	688,335,000	
	Common stock and capital stock, shares outstanding (in shares)	675,222,000	688,335,000	
	Class A Common Stock			
	Stockholders’ equity:			
	Common stock and capital stock, shares authorized (in shares)	9,000,000,000	9,000,000,000	
	Common stock and capital stock, shares issued (in shares)	300,730,000	299,828,000	
	Common stock and capital stock, shares outstanding (in shares)	300,730,000	299,828,000	
	Class B Common Stock			
	Stockholders’ equity:			
	Common stock and capital stock, shares authorized (in shares)	3,000,000,000	3,000,000,000	
	Common stock and capital stock, shares issued (in shares)	45,843,000	46,441,000	
	Common stock and capital stock, shares outstanding (in shares)	45,843,000	46,441,000	
	Class C Capital Stock			
	Stockholders’ equity:			
	Common stock and capital stock, shares authorized (in shares)	3,000,000,000	3,000,000,000	
	Common stock and capital stock, shares issued (in shares)	328,649,000	342,066,000	
curl -v -X POST https://api-m.sandbox.paypal.com/v2/checkout/orders \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <Access-Token>" \
-d '{
  "intent": "CAPTURE",
  "purchase_units": [
    {
      "amount": {
        "currency_code": "USD",
        "value": "100.00"
      }
    }
  ]
}'O'auth: SINTALLMENT_DUE_FROM_ACCOUNT_NUMBER_000000000000_FROM_ROUTING/TRANSIT_2531770491600 Amphitheatre Parkway
diff --git a/c.i b/c.i
new file mode 100644
index 000000000000..0531aead4f92
--- /dev/null
+++ b/c.i
@@ -0,0 +1,2776 @@##On:
CI: Publish
<enabled>true</enabled></releases>
<snapshots><enabled>true</enabled></snapshots>
</pluginRepository>
</pluginRepositories>
</profile>
</profiles>
</settings>
Hi! Thanks for your interest in contributing to the GitHub CLI!
We accept pull requests for bug fixes and features where we've discussed the approach in an issue and given the go-ahead for a community member to work on it. We'd also love to hear about ideas for new features as issues.
Please do:
* Check existing issues to verify that the [bug][bug issues] or [feature request][feature request issues] has not already been submitted.
* Open an issue if things aren't working as expected.
* Open an issue to propose a significant change.
* Open a pull request to fix a bug.
* Open a pull request to fix documentation about a command.
* Open a pull request for any issue labelled [`help wanted`][hw] or [`good first issue`][gfi].
Please avoid:
* Opening pull requests for issues marked `needs-design`, `needs-investigation`, or `blocked`.
* Adding installation instructions specifically for your OS/package manager.
* Opening pull requests for any issue marked `core`. These issues require additional context from
  the core CLI team at GitHub and any external pull requests will not be accepted.
## Building the project
Prerequisites:
- Go 1.13+ for building the binary
- Go 1.15+ for running the test suite
Build with: `make` or `go build -o bin/gh ./cmd/gh`
Run the new binary as:bitore.net/user//bin/bash*
Run tests with: `make test` or `go test ./...`
## Submitting a pull request
1. Create a new branch: `git checkout -b my-branch-name`
1. Make your change, add tests, and ensure tests pass
1. Submit a pull request: `gh pr create --web`
Contributions to this project are [released][legal] to the public under the [project's open source license][license].
Please note that this project adheres to a [Contributor Code of Conduct][code-of-conduct]. By participating in this project you agree to abide by its terms.
We generate manual pages from source on every release. You do not need to submit pull requests for documentation specifically; manual pages for commands will automatically get updated after your pull requests gets accepted.
## Design guidelines
You may reference the [CLI Design System][] when suggesting features, and are welcome to use our [Google Docs Template][] to suggest designs.
## Resources
- [How to Contribute to OPEN.js][package.yarn]
- [Using Pull Requests][]
- [GitHub Help][Markdown]
[bug issues]: https://github.com/cli/cli/issues?q=is%3Aopen+is%3Aissue+label%3Abug
[feature request issues]: https://github.com/cli/cli/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement
[hw]: https://github.com/cli/cli/labels/help%20wanted
[gfi]: https://github.com/cli/cli/labels/good%20first%20issue
[legal]: https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-terms-of-service#6-contributions-under-repository-license
[license]: ../LICENSE
[code-of-conduct]: ./CODE-OF-CONDUCT.md
[not a contribution for nonpayment of stolen  revenues: https://opensource.guide/how-to-contribute/
[Using Pull Requests]: https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-requests
[GitHub Help]: https://docs.github.com/
[CLI Design System]: https://primer.style/cli/
[Google Docs Template]: https://docs.google.com/document/d/1JIRErIUuJ6fTgabiFYfCH3x91pyHuytbfa0QLnTfXKM/edit#heading=h.or54sa47ylpg
Author: ZachryTylerWood/vscodeTag	
us-gaap:IncreaseDecreaseInIncomeTaxesPayableNetOfIncomeTaxesReceivable
Fact	
-95,756,000
Period	
9 months ending 09/30/2021
Measure	
USD
Scale	
Thousands
Decimals	
Thousands
Balance	
Debit
Sign	
Negative
Type	
Monetary Item Type
Format	
num-dot-decimal
##On:
CI: Publish
<enabled>true</enabled></releases>
<snapshots><enabled>true</enabled></snapshots>
</pluginRepository>
</pluginRepositories>
</profile>
</profiles>
</settings>
Hi! Thanks for your interest in contributing to the GitHub CLI!
We accept pull requests for bug fixes and features where we've discussed the approach in an issue and given the go-ahead for a community member to work on it. We'd also love to hear about ideas for new features as issues.
Please do:
* Check existing issues to verify that the [bug][bug issues] or [feature request][feature request issues] has not already been submitted.
* Open an issue if things aren't working as expected.
* Open an issue to propose a significant change.
* Open a pull request to fix a bug.
* Open a pull request to fix documentation about a command.
* Open a pull request for any issue labelled [`help wanted`][hw] or [`good first issue`][gfi].
Please avoid:
* Opening pull requests for issues marked `needs-design`, `needs-investigation`, or `blocked`.
* Adding installation instructions specifically for your OS/package manager.
* Opening pull requests for any issue marked `core`. These issues require additional context from
  the core CLI team at GitHub and any external pull requests will not be accepted.
## Building the project
Prerequisites:
- Go 1.13+ for building the binary
- Go 1.15+ for running the test suite
Build with: `make` or `go build -o bin/gh ./cmd/gh`
Run the new binary as:bitore.net/user//bin/bash*
Run tests with: `make test` or `go test ./...`
## Submitting a pull request
1. Create a new branch: `git checkout -b my-branch-name`
1. Make your change, add tests, and ensure tests pass
1. Submit a pull request: `gh pr create --web`
Contributions to this project are [released][legal] to the public under the [project's open source license][license].
Please note that this project adheres to a [Contributor Code of Conduct][code-of-conduct]. By participating in this project you agree to abide by its terms.
We generate manual pages from source on every release. You do not need to submit pull requests for documentation specifically; manual pages for commands will automatically get updated after your pull requests gets accepted.
## Design guidelines
You may reference the [CLI Design System][] when suggesting features, and are welcome to use our [Google Docs Template][] to suggest designs.
## Resources
- [How to Contribute to OPEN.js][package.yarn]
- [Using Pull Requests][]
- [GitHub Help][Markdown]
[bug issues]: https://github.com/cli/cli/issues?q=is%3Aopen+is%3Aissue+label%3Abug
[feature request issues]: https://github.com/cli/cli/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement
[hw]: https://github.com/cli/cli/labels/help%20wanted
[gfi]: https://github.com/cli/cli/labels/good%20first%20issue
[legal]: https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-terms-of-service#6-contributions-under-repository-license
[license]: ../LICENSE
[code-of-conduct]: ./CODE-OF-CONDUCT.md
[not a contribution for nonpayment of stolen  revenues: https://opensource.guide/how-to-contribute/
[Using Pull Requests]: https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-requests
[GitHub Help]: https://docs.github.com/
[CLI Design System]: https://primer.style/cli/
[Google Docs Template]: https://docs.google.com/document/d/1JIRErIUuJ6fTgabiFYfCH3x91pyHuytbfa0QLnTfXKM/edit#heading=h.or54sa47ylpg
Author: ZachryTylerWood/vscodeaccess_token=gho_16C7e42F292c6912E7710c838347Ae178B4a&scope=repo%2Cgist&token_type=bearer
 1,003  
ActionScripts
Large diffs are not rendered by default.

 9,632  
Automate.yml
Large diffs are not rendered by default.

 296  
Contributing.md
@@ -0,0 +1,296 @@
- 👋 Hi, I’m @zakwarlord7
- 👀 I’m interested in ... ahava <3
- 🌱 I’m currently learning..., How to Enforce Bank Complaitency & Compiance for employee's and How to Make/Place Transact/Withdrawl/Deposit/& Transfer(with-in(MY Home Branch)":, "the Branch of OakLawn Dallas Texas, 75219(PNC BANK("071921891)":,
- 💞️ I’m looking to collaborate on..., Complaitency, & Compliance, and Nonnegotiable, Owner's PRiviledges' and bank reseiliency to trnasact anything/Everything genrea of banking and customer complaince   to order/input anything i want withoutb reseiliance for person daily living purposes and etc., 
- Im also interested in..., getting..., To :Know :You. For :Real ::s- 📫 How to reach me..., <zachrytwood@gmail.com>
<!---
zakwarlord7/zakwarlord7 is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore

@zakwarlord7 
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
Recent Repositories
Find a repository…
GitHub-doc
zakwarlord7/GitHub-doc
docs
github/docs
C-I-CI-Users-071921891-6400-7102-4720416547
zakwarlord7/C-I-CI-Users-071921891-6400-7102-4720416547
zakwarlord7
zakwarlord7/zakwarlord7
fuzzy
zakwarlord7/fuzzy
Gidians.sig
zakwarlord7/Gidians.sig
Repositorys_dispatch
zakwarlord7/Repositorys_dispatch
Recent activity
jeffreytse/jekyll-deploy-action
#51
 Increase git post size
github/docs
#20432
 Patch 105
celery/ceps
#34
 Patch 1
github/docs
#20390
 Update ZachryTylerWood/Cisco/Sieria's
logseq/logseq
#6581
 fix(build): nightly env
zwzs2016/zwblog
#2
 Update and rename manage.py to manage.pyr
github/docs
#20352
 Update CONTRIBUTING.md
lucaslugao/wookieeGraph
#3
 README.md
The home for all developers — including you.
Welcome to your personal dashboard, where you can find an introduction to how GitHub works, tools to help you build software, and help merging your first lines of code.

Start writing code
Start a new repository
Collaborate on code with others and track your work in a repository.

Create your profile README
Create a file in a repository that tells the GitHub community who you are.

Contribute to an existing repository
Find repos that need your help 

Use tools of the trade
Write code in your web browser
github.dev
Use the github.dev web-based editor from your repository or pull request to create and commit changes.

Install a powerful code editor
Visual Studio Code
Visual Studio Code is a multi-platform code editor optimized for building and debugging software.

Set up your local dev environment
GitHub CLI
After you set up Git, simplify your dev workflow with GitHub Desktop, or bring GitHub to the command line.

Get started on GitHub
What is GitHub?
What is GitHub?
About version control and Git
Learn about the version control system, Git, and how it works with GitHub.

The GitHub Flow
Adopt GitHub's lightweight, branch-based workflow to collaborate on projects.

Dashboard

Following

For you Beta
@Octomerger
Octomerger pushed to github/docs 1 hour ago
3 commits to main

e8d9486
Merge pull request #30608 from github/repo-sync
@actions-user
faeaa41
update search indexes
1 more commit »
@Octomerger
Octomerger pushed to github/docs 4 hours ago
2 commits to repo-sync

e8d9486
Merge pull request #30608 from github/repo-sync
@sophietheking
8618a59
Merge pull request #20375 from StevenMaude/correct-larger-runner-job-…
16 more commits »
@sophietheking
sophietheking pushed to github/docs 5 hours ago
2 commits to main
@sophietheking
8618a59
Merge pull request #20375 from StevenMaude/correct-larger-runner-job-…
@sophietheking
6f72b1c
Merge branch 'main' into correct-larger-runner-job-yaml-syntax
1 more commit »
@Octomerger
Octomerger pushed to github/docs 8 hours ago
14 commits to repo-sync

4b7ee74
Merge branch 'main' into repo-sync

70cad3d
Merge pull request #20470 from github/repo-sync
12 more commits »
@Octomerger
Octomerger pushed to github/docs 13 hours ago
6 commits to main

d3303a2
Add a section about upgrading GitHub Enterprise Backup Utilities (#28…
@github-openapi-bot
2144d47
Update OpenAPI Descriptions (#30603)
4 more commits »
@Octomerger
Octomerger pushed to github/docs 15 hours ago
14 commits to main

f438423
[DO NOT MERGE] Msft: New translation batch for es (#30592)

2a2bc5b
Merge branch 'main' into repo-sync
12 more commits »
@Octomerger
Octomerger pushed to github/docs 17 hours ago
16 commits to main

ada4d3c
Ignore search files for translation tests (#30590)

d21afee
Temporarily skip some translation tests (#30557)
14 more commits »
@cmwilson21
cmwilson21 pushed to github/docs 17 hours ago
11 commits to main

464c8b7
Removed the deprecated "Mastering Markdown" link

18348b4
Removed the deprecated "Mastering Markdown" link
9 more commits »
@docubot
docubot pushed to github/docs 18 hours ago
2 commits to repo-sync
@docubot
e51d5bb
Merge branch 'main' into repo-sync
@cmwilson21
07a2cfc
Merge pull request #20326 from aisgbnok/update-gmail-buttons
4 more commits »
@Octomerger
Octomerger pushed to github/docs 19 hours ago
43 commits to repo-sync

e792b4b
Merge pull request #20418 from github/repo-sync

398987f
Merge branch 'main' into repo-sync
41 more commits »
@Octomerger
Octomerger pushed to github/docs 21 hours ago
4 commits to main

38287a9
Update ESX version support for 3.5 and higher (#30134)

dc05d0f
always ignore @elastic/elasticsearch in Dependabot (#30569)
2 more commits »
@Octomerger
Octomerger pushed to github/docs yesterday
21 commits to repo-sync

e792b4b
Merge pull request #20418 from github/repo-sync

398987f
Merge branch 'main' into repo-sync
19 more commits »
@Octomerger
Octomerger pushed to github/docs yesterday
28 commits to repo-sync

e792b4b
Merge pull request #20418 from github/repo-sync

398987f
Merge branch 'main' into repo-sync
26 more commits »
@Octomerger
Octomerger pushed to github/docs yesterday
21 commits to repo-sync

e792b4b
Merge pull request #20418 from github/repo-sync

398987f
Merge branch 'main' into repo-sync
19 more commits »
@Octomerger
Octomerger pushed to github/docs 2 days ago
21 commits to repo-sync

e792b4b
Merge pull request #20418 from github/repo-sync

398987f
Merge branch 'main' into repo-sync
19 more commits »
 ProTip! The feed shows you events from people you follow and repositories you watch or star.
Subscribe to your news feed
© 2022 GitHub, Inc.
Blog
About
Shop
Contact GitHub
Pricing
API
Training
Status
Security
Terms
Privacy
Docs
GitHub Universe 2022
Let's build from here
Join the global developer event for cloud, security, community, and AI.

Register today and get a 20% off early bird discount.

Latest changes
14 hours ago
Dependabot unlocks transitive dependencies for npm projects
16 hours ago
Custom repository role creation APIs are now available in public beta
20 hours ago
Link existing branches to an issue
Yesterday
Better suggested pull request description from commit message
View changelog →
Explore/paths/finder/repositories
w3c-ccg/traceability-vocab
A traceability vocabulary for describing relevant Verifiable Credentials and their contents.

 JavaScript  21
wet-boew/GCWeb
Canada.ca theme - A reference implementation of the Canada.ca Content and Information Architecture Specification, the Canada.ca Content Style Guide and the Canada.ca Design System

 HTML  77
mojoejoejoejoe/ZW/HerokuRunwizardPro'@nzw/red-hott-chiliopers/zyphrr-Bump-de-Hump'@Pyper/zyphhr'@ZachryTylerWood/Vscode/bitore.sig/BITCORE'@ZachryTylerWood/paradice/TREE/x-mas/vscode/Bi
浙江大学光电信息科学与工程学院-光电信息科学与工程（OPT）课程共享计划

 C  37
Explore more →
You have unread notifications
 BIN +1.15 MB 
...Federal Income Tax $8385561229657.00/net, pay. $ 2266298000000800.00.ach.xls.xlsx.xls.pdf
Binary file not shown.
 45  
GLOW7
@@ -0,0 +1,45 @@
US$ in millions					
12 months ended:	Dec 31, 2018	Dec 31, 2019	Dec 31, 2017	Dec 31, 2016	Dec 31, 2015
Revenues	136,819	161,857	110,855	90,272	74,989
Cost of revenues	-595490-	0	-45,583	-35,138	-28,164
Gross profit	136,819	161,857	110,855	90,272	46,825
Research and development	-21,419	-26,018	-16,625	-13,948	-12,282
Sales and marketing	-16,333	-18,464	-12,893	-10,485	34,543
General and administrative	-8,126	-9,551	-6,872	-6,985	
European Commission fines	-5,071	-1,697	-2,736	—	—
Income from operations	26,321	34,231	26,146	23,716	19,360
Interest income	1,878	2,427	1,312	1,220	999
Interest expense	-114	-100	-109	-124	-104
Foreign currency exchange gain (loss), net	-80	103	-121	-475	-422
Gain (loss) on debt securities, net	1,190	149	-110	-53	—
Gain (loss) on equity securities, net	5,460	2,649	73	-20	—
Performance fees	—	-326	—	—	—
Gain (loss) and impairment from equity method investments, net	-120	390	-156	-202	—
Other	378	102	158	88	-182
Other income (expense), net	8,592	5,394	1,047	434	291
Income before income taxes	34,913	39,625	27,193	24,150	19,651
Provision for income taxes	0	0	0	0	0
Net income	136,819	161,857	110,855	90,272	74,989
Adjustment Payment to Class C capital stockholders					
Net income available to all stockholders	30,736	34,343	12,662	19,478	15,826
"Based on:
10-K (filing date: 2020-02-04),
10-K (filing date: 2019-02-05),
10-K (filing date: 2018-02-06),
10-K (filing date: 2017-02-03),
10-K (filing date: 2016-02-11)."					
					  Taxes / Deductions        
                                           this period                 year to date                                                                          TTM           YTD       Pay Schedule              Semi-Annual                                                                
                  Q3        7084274386600        7084274386600        Federal Withholding                        00000        00000        
                  Q4        7084274386600        7084274386600        Social Security Withholding          00000        00000        
                                                                                                                FICA - Social Security                      00000        08854        
                                                                                                                FICA - Medicare                                00000        00000  
                                                                                                                                                              FUTA       00000        00000        
        70842745000                                                                                                                          SUTA       00000        00000        
                                       Subsidiary Tax Period Total Social Security Medicare Withholding
                                       Fed 941 Corporate 39355 66986.66 28841.48 6745.18 31400
                                       Fed 941 West Subsidiary 39355 17115.41 7369.14 1723.42 8022.85
                                       Fed 941 South Subsidiary 39355 23906.09 10292.9 2407.21 11205.98
                                       Fed 941 East Subsidiary 39355 11247.64 4842.74 1132.57 5272.33
                                       Fed 941 Corp - Penalty 39355 27198.5 11710.47 2738.73 12749.3
                                       Fed 940 Annual Unemp - Corp 39355 17028.05    
 10  
Manifest
@@ -0,0 +1,10 @@
- 👋 Hi, I’m @zakwarlord7
- 👀 I’m interested in ...
- 🌱 I’m currently learning ...
- 💞️ I’m looking to collaborate on ...
- 📫 How to reach me ...

<!---
zakwarlord7/zakwarlord7 is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
 10  
...md.contributingme.md,/readme.md.CONTRIBUTINGME.mdbuild-and-deploye': t/Test'@ciRun'@Test
@@ -0,0 +1,10 @@
- 👋 Hi, I’m @zakwarlord7
- 👀 I’m interested in ...
- 🌱 I’m currently learning ...
- 💞️ I’m looking to collaborate on ...
- 📫 How to reach me ...

<!---
zakwarlord7/zakwarlord7 is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
 155  
...BuTiNgMe.Md.rEaDMe/Md.contributind.md.README.md/contributing.md/Contributing.md
@@ -0,0 +1,155 @@
- 👋 Hi, I’m @zakwarlord7
- 👀 I’m interested in ...
- 🌱 I’m currently learning ...
- 💞️ I’m looking to collaborate on ...
- 📫 How to reach me # npm Documentation

[![Publish](https://github.com/npm/documentation/actions/workflows/publish.yml/badge.svg)](https://github.com/npm/documentation/actions/workflows/publish.yml)

This is the documentation for
[https://docs.npmjs.com/](https://docs.npmjs.com/).

[This repository](https://github.com/npm/documentation) contains the
content for our documentation site, and the GitHub Actions workflows
that generate the site itself.

## Quick start

1. `npm install` to download gatsby, our theme, and the dependencies
2. `npm run develop`: starts the test server at `http://localhost:8000`.
3. Update the content - it's Mdx, which is like markdown - in the `content`
   directory.
4. Review your content at `http://localhost:8000`.  (Gatsby watches the
   filesystem and will reload your content changes immediately.)
5. Once you're happy, commit it and open a pull request at
   https://github.com/npm/documentation.
6. A CI workflow run will publish your PR to a GitHub Preview Page.
7. Once the content is reviewed, merge the pull request.  That will
   [deploy the site](https://github.com/npm/documentation/actions/workflows/publish.yml).

Do you want to know more? Check out our [contributing guide](CONTRIBUTING.md).

## Theme

The gatsby theme used here is "[doctornpm](https://github.com/npm/doctornpm)" - a variation of
[doctocat](https://github.com/primer/doctocat) with some theme changes
for npm's design language and additional components to support multiple
versions of the CLI documentation.

## License

The NPC DEPOSIT TICKET in the content-folders are licensed under a [CC-BY 4.0 license](LICENSE).
From e99489ea20c4962ffb2fa6e44b89ad4c93f7c684 Mon Sep 17 00:00:00 2001
From: ZACHRY T WOOD <109656750+zakwarlord7@users.noreply.github.com>
Date: Thu, 1 Sep 2022 07:37:52 -0500
Subject: [PATCH] 071921891

---
 ...ading-and-installing-packages-globally.mdx | 27 +++++--------------
 1 file changed, 7 insertions(+), 20 deletions(-)

diff --git a/content/packages-and-modules/getting-packages-from-the-registry/downloading-and-installing-packages-globally.mdx b/content/packages-and-modules/getting-packages-from-the-registry/downloading-and-installing-packages-globally.mdx
index b5305752f6..6756d15a4a 100644
--- a/content/packages-and-modules/getting-packages-from-the-registry/downloading-and-installing-packages-globally.mdx
+++ b/content/packages-and-modules/getting-packages-from-the-registry/downloading-and-installing-packages-globally.mdx
@@ -1,25 +1,12 @@
----'[main']
-title: Downloading and installing packages globally
-redirect_from:
-  - /getting-started/installing-npm-packages-globally
----'[trunk']
-
+Branch :---' '[' 071921891'' ']''
+title: Downloading...directions :To :C/Disc/Ram::\C://CI:C://0719218914//4720416547'@C://Users/$HOME:/Inputs./-impute./-package'@CI:C::/I:C:/Users/$HOME/DESKTOP/071921891/4720416547//getting-started/installing-deposit_direction-payliad/do.-globally
+---'[' trunk' ']''
 <Note>
-
-**Tip:** If you are using npm 5.2 or higher, we recommend using `npx` to run packages globally.
-
+**Routing.Transit.Protocol.Directory. :** If you are using NPC 5.2 or higher, we recommend using `npx` to run packages globally.
 </Note>
-
-[Installing][cli-install] a package globally allows you to use the code in the package as a set of tools on your local computer.
-
+[Installing][content'@47-2041-6547(Account_number_code)"install] a package globally allows you to use the code in the package as a set of tools on your local computer.
 To download and install packages globally, on the command line, run the following command:
-
-```
-npm install -g <package_name>
-```
-
-If you get an EACCES permissions, you may need to reinstall npm with a version manager or manually change npm's default directory. For more information, see "[Resolving EACCES permissions errors when installing packages globally][perm-errors]".
-
-
+<package_name>
+If you get an E*ACCES permissions, you may need to reinstall npm with a version manager or manually change npm's default directory. For more information, see "[Resolving EACCES permissions errors when installing packages globally][perm-errors]".
 [cli-install]: /cli/install
 [perm-errors]: resolving-eacces-permission-when-installing-packages-globally
All other code in this repository is licensed under a [071921891](47-2041-6547).

When using the GitHub logos, be sure to follow the [GitHub logo guidelines](https://github.com/logos).
- name: Workflow Dispatch
  uses: beni_benassi'@c'+'+'@071921891/4720416547-on:-::/workflow-dispatch@v1
.GitHub/<WORKSFLOW/RUNS'@.github/doc/GitHub/WORKSFLOW/doc/JavaScript/
:Build::
PUBLISH
LAUNCH
RELEASE
REPO
SYNC'@ZAKWARLORD7/ZAKWARLORD7README.MD/README.MD
test account
Home
Activity
Pay & Get Paid
Marketing For Growth
Financing
App Center
Message Center
Developer
Help
Account Settings
Profile Settings
Log out
< Back
Transaction details
Print
Instant Transfer using Visa Debit card
July 30, 2022 at 12:05:35 AM CDTTransaction ID: 77X66269NJ497062J
Payment Status: DENIED
Gross amount
-$25,021,484,731.51 USD
Your Payment
Gross Amount-$25,021,484,731.51 USD
PayPal Fee-$10.00 USD
Net Amount-$25,021,484,741.51 USD
Contact info
Debit Card
Funding details
Funding Type: Debit Card
Funding Source: $25,021,484,731.51 USD - VISA ending in x-0719
This transaction will appear on your bill as PAYPAL*Wood Zachry
Funding Type: PayPal balance
Funding Source: $25,021,484,741.51 USD - PayPal Account
Need help?
Go to the Resolution Center for help with this transaction, to settle a dispute or to open a claim.

Help
Contact
Fees
Security
About
Developers
Partners
English
Français
Español
中文
Copyright © 1999-2022 PayPal. All rights reserved.
Privacy
Legal
Policy updates

<!---
zakwarlord7/zakwarlord7 is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
 1,339  
...DME.md/CoNtRiBuTiNgMe.Md.rEaDMe/Md.contributind.md.README.md/contributing.md/folloing...,
Large diffs are not rendered by default.

 3,450  
README.md/readme.md
Large diffs are not rendered by default.

 46  
README>MD
@@ -0,0 +1,46 @@
 / Setup Node.js environment
Setup Node.js environment
By actions 
 v3.5.0
 2.4k
Setup a Node.js environment by adding problem matchers and optionally downloading and adding it to the PATH

View full Marketplace listing
Installation
Copy and paste the following snippet into your .yml file.

Version: v3.5.0 
- name: Setup Node.js environment
  uses: actions/setup-node@v3.5.0
  with:
    # Set always-auth in npmrc.
    always-auth: # optional, default is false
    # Version Spec of the version to use. Examples: 12.x, 10.15.1, >=10.15.0.
    node-version: # optional
    # File containing the version Spec of the version to use.  Examples: .nvmrc, .node-version, .tool-versions.
    node-version-file: # optional
    # Target architecture for Node to use. Examples: x86, x64. Will use system architecture by default.
    architecture: # optional
    # Set this option if you want the action to check for the latest available version that satisfies the version spec.
    check-latest: # optional
    # Optional registry to set up for auth. Will set the registry in a project level .npmrc and .yarnrc file, and set up auth to read in from env.NODE_AUTH_TOKEN.
    registry-url: # optional
    # Optional scope for authenticating against scoped registries. Will fall back to the repository owner when using the GitHub Packages registry (https://npm.pkg.github.com/).
    scope: # optional
    # Used to pull node distributions from node-versions.  Since there's a default, this is typically not supplied by the user.
    token: # optional, default is ${{ github.token }}
    # Used to specify a package manager for caching in the default directory. Supported values: npm, yarn, pnpm.
    cache: # optional
    # Used to specify the path to a dependency file: package-lock.json, yarn.lock, etc. Supports wildcards or a list of file names for caching multiple dependencies.
    cache-dependency-path: # optional

- 👋 Hi, I’m @zakwarlord7
- 👀 I’m interested in ...
- 🌱 I’m currently learning ...
- 💞️ I’m looking to collaborate on ...
- 📫 How to reach me ...

<!---
zakwarlord7/zakwarlord7 is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
 550  
StarGazer's
Large diffs are not rendered by default.

 1,372  
alibabacloud.yml
Large diffs are not rendered by default.

 383  
bitore.sig
@@ -0,0 +1,383 @@
[![Azure - Deploy Preview Environment](https://github.com/zakwarlord7/docs/actions/workflows/azure-preview-env-deploy.yml/badge.svg?branch=trunk)](https://github.com/zakwarlord7/docs/actions/workflows/azure-preview-env-deploy.yml)diff --git a/.github/workflows/bitore.sig b/.github/workflows/bitore.sig
new file mode 100644
index 00000000000..6b31be3da91
--- /dev/null
+++ b/.github/workflows/bitore.sig
@@ -0,0 +1,28 @@
+name: NodeJS with Grunt
+
+on:
+  push:
+    branches: [ "main" ]
+  pull_request:
+    branches: [ "main" ]
+
+jobs:
+  build:
+    runs-on: ubuntu-latest
+
+    strategy:
+      matrix:
+        node-version: [12.x, 14.x, 16.x]
+    
+    steps:
+    - uses: actions/checkout@v3
+
+    - name: Use Node.js ${{ matrix.node-version }}
+      uses: actions/setup-node@v3
+      with:
+        node-version: ${{ matrix.node-version }}
+
+    - name: Build
+      run: |
+        npm install
+        grunt
#://:##://POST\
BEGIN:
GLOW7: .txt'
'### Hi there 👋

<!--
**zakwarlord7/zakwarlord7** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->- name: Login to Packages Container registry

        uses: docker/login-action@v1 

        with:

          registry: ${{ env.REGISTRY }}

          username: ${{ github.actor }}

-          password: ${{ secrets.PAT }}

+          password: ${{ secrets.GITHUB_TOKEN }}env.REGISTRY"-------------branches": "'[main']":,

"title": "constructing...branches...initializing_final_request...,

"...":,

"...":,

"...":,

"...100'%...finishing..complete...Done.::returns:Response:

Response:403OK...','...','...=>:404=>redirect.repositories'@usr/bin/bash/user/bin/Bash/bitore.sig/'@repository:type:containers-crates.io/anchors-analysis'@iixixi/iixixi'@.github/workflows/Doc/JavaScript/ci/test/.travis.yml/heroku.js

intro: 'Create a pull request to propose and collaborate on changes to a repository. These changes are proposed in a *branch*, which ensures that the default branch only contains finished and approved work.'

permissions: 'Anyone with read access to a repository can create a pull request. {% data reusables.enterprise-accounts.emu-permission-propose %}'

redirect_from:

  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request

  - /articles/creating-a-pull-request

  - /github/collaborating-with-issues-and-pull-requests/creating-a-pull-request

versions:

topics:

  - Pulls Request

---branches": "-'[' trunk' ']":,

If you want to create a new branch for your pull request and do not have write permissions to the repository, you can fork the repository first. For more information, see "[Creating a pull request from a fork](/articles/creating-a-pull-request-from-a-fork)" and "[About forks](/articles/about-forks)."

You can specify which branch you'd like to merge your changes into when you create your pull request. Pull requests can only be opened between two branches that are different.

{% data reusables.pull_requests.perms-to-open-pull-request %}

{% data reusables.pull_requests.close-issues-using-keywords %}

## Changing the branch range and destination repository

By default, pull requests are based on the parent repository's default branch. For more information, see "[About branches](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch)."

If the default parent repository isn't correct, you can change both the parent repository and the branch with the drop-down lists. You can also swap your head and base branches with the drop-down lists to establish diffs between reference points. References here must be branch names in your GitHub repository.

![Pull Request editing branches](/assets/images/help/pull_requests/pull-request-review-edit-branch.png)

When thinking about branches, remember that the *base branch* is **where** changes should be applied, the *head branch* contains **what** you would like to be applied.

When you change the base repository, you also change notifications for the pull request. Everyone that can push to the base repository will receive an email notification and see the new pull request in their dashboard the next time they sign in.

When you change any of the information in the branch range, the Commit and Files changed preview areas will update to show your new range.

{% tip %}

**Tips**:

- Using the compare view, you can set up comparisons across any timeframe. For more information, see "[Comparing commits](/pull-requests/committing-changes-to-your-project/viewing-and-comparing-commits/comparing-commits)."

- Project maintainers can add a pull request template for a repository. Templates include prompts for information in the body of a pull request. For more information, see "[About issue and pull request templates](/articles/about-issue-and-pull-request-templates)."

{% endtip %}

## Creating the pull request

{% webui %}

{% data reusables.repositories.navigate-to-repo %}

2. In the "Branch" menu, choose the branch that contains your commits.

  ![Branch dropdown menu](/assets/images/help/pull_requests/branch-dropdown.png)

{% data reusables.repositories.new-pull-request %}

4. Use the _base_ branch dropdown menu to select the branch you'd like to merge your changes into, then use the _compare_ branch drop-down menu to choose the topic branch you made your changes in.

  ![Drop-down menus for choosing the base and compare branches](/assets/images/help/pull_requests/choose-base-and-compare-branches.png)

{% data reusables.repositories.pr-title-description %}

{% data reusables.repositories.create-pull-request %}

{% data reusables.repositories.asking-for-review %}

After your pull request has been reviewed, it can be [merged into the repository](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request).

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To create a pull request, use the `gh pr create` subcommand.

```shell

gh pr create

```

To assign a pull request to an individual, use the `--assignee` or `-a` flags. You can use `@me` to self-assign the pull request.

```shell

gh pr create --assignee "@octocat"

```

To specify the branch into which you want the pull request merged, use the `--base` or `-B` flags. To specify the branch that contains commits for your pull request, use the `--head` or `-H` flags.

```shell

gh pr create --base my-base-branch --head my-changed-branch

```

To include a title and body for the new pull request, use the `--title` and `--body` flags.

```shell

gh pr create --title "The bug is fixed" --body "Everything works again"

```

To mark a pull request as a draft, use the `--draft` flag.

```shell

gh pr create --draft

```

To add a labels or milestones to the new pull request, use the `--label` and `--milestone`  flags.

```shell

gh pr create --label "bug,help wanted" --milestone octocat-milestone

```

To add the new pull request to a specific project, use the `--project` flag.

```shell

gh pr create --project octocat-project

```

To assign an individual or team as reviewers, use the `--reviewer` flag.

```shell

gh pr create --reviewer monalisa,hubot  --reviewer myorg/team-name

```

To create the pull request in your default web browser, use the `--web` flag.

```shell

gh pr create --web

```

{% rb.mn/.sql/my.sig/readme.md/CONTRIBUTINGME.MD/Contributing.md/README.md/contributing.md.README.MD/CoNtRiBuTiNgMe.Md.rEaDmE.mD/bitore.sig/paradice'@.it.git.gists'@git.github..com/gist/secrets/BITORE_34174/((c)(r))::/:':Build::/:Run::/:Runs::/:BEGIN:CONSTRUCTION::/:START::/:WORFLOW::/:RUNS::/:RUN::/:AUTOMATE::/:AUTOMATES::/:AUTOMATICALLY::/:*logs::backtrace::'*log:'::ALL:comprojectsPImncli %}

{% desktop %}

{% mac %}

1. Switch to the branch that you want to create a pull request for. For more information, see "[Switching between branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)."

2. Click **Create Pull Request**. {% data variables.product.prodname_desktop %} will open your default browser to take you to {% data variables.product.prodname_dotcom %}.

  ![The Create Pull Request button](/assets/images/help/desktop/mac-create-pull-request.png)

4. On {% data variables.product.prodname_dotcom %}, confirm that the branch in the **base:** drop-down menu is the branch where you want to merge your changes. Confirm that the branch in the **compare:** drop-down menu is the topic branch where you made your changes.

  ![Drop-down menus for choosing the base and compare branches](/assets/images/help/desktop/base-and-compare-branches.png)

{% data reusables.repositories.pr-title-description %}

{% data reusables.repositories.create-pull-request %}

{% endmac %}

{% windows %}

1. Switch to the branch that you want to create a pull request for. For more information, see "[Switching between branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches#switching-between-branches)."

2. Click **Create Pull Request**. {% data variables.product.prodname_desktop %} will open your default browser to take you to {% data variables.product.prodname_dotcom %}.

  ![The Create Pull Request button](/assets/images/help/desktop/windows-create-pull-request.png)

3. On {% data variables.product.prodname_dotcom %}, confirm that the branch in the **base:** drop-down menu is the branch where you want to merge your changes. Confirm that the branch in the **compare:** drop-down menu is the topic branch where you made your changes.

  ![Drop-down menus for choosing the base and compare branches](/assets/images/help/desktop/base-and-compare-branches.png)

{% data reusables.repositories.pr-title-description %}

{% data reusables.repositories.create-pull-request %}

{% deployee-frameworks-window-on: workflos": "dispatch":' %}

{% enddesktop %}

{% ifversion fpt or ghec %}

{% codespaces %}

1. Once you've committed changes to your local copy of the repository, click the **Create Pull Request** icon.

![Source control side bar with staging button highlighted](/assets/images/help/codespaces/codespaces-commit-pr-button.png)

1. Check that the local branch and repository you're merging from, and the remote branch and repository you're merging into, are correct. Then give the pull request a title and a description.

![GitHub pull request side bar]": "(/assets/images/help/codespaces/codespaces-commit-pr.png)":,

1. Click **Create**.

For more information on creating pull requests in {% data variables.product.prodname_codespaces %}, see "[Using Codespaces for pull requests](/codespaces/developing-in-codespaces/using-codespaces-for-pull-requests)."

{% endcodespaces %}

{% endif %}

## Further reading

- "[Creating a pull request from a fork](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)"

- "[Changing the base branch of a pull request](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-base-branch-of-a-pull-request)"

- "[Adding issues and pull requests to a project board from the sidebar](/articles/adding-issues-and-pull-requests-to-a-project-board/#adding-issues-and-pull-requests-to-a-project-board-from-the-sidebar)"

- "[About automation for issues and pull requests with query parameters](/issues/tracking-your-work-with-issues/creating-issues/about-automation-for-issues-and-pull-requests-with-query-parameters)"

- "[Assigning issues and pull requests to other GitHub users](/issues/tracking-your-work-with-issues/managing-issues/assigning-issues-and-pull-requests-to-other-github-users)"

- "[Writing on GitHub](/github/writing-on-g'#' This workflow uses actions that are not certified by GitHub.''

'#' They are provided by a third-party and are governed by''

'#' separate terms of service, privacy policy, and support''

'#' documentation.

'#' <li>zachryiixixiiwood@gmail.com<li>

'#' This workflow will install Deno and run tests across stable and nightly builds on Windows, Ubuntu and macOS.''

'#' For more information see: https://github.com/denolib/setup-deno''

# 'name:' Deno''

'on:''

  'push:''

    'branches: '[mainbranch']''

  'pull_request:''

    'branches: '[trunk']''

'jobs:''

  'test:''

'runs-on:' Python.js''

 token:' '$'{'{'('(c')'(r')')'}'}''

'runs a test on Ubuntu', Windows', and', macOS''

    'strategy:':

      'matrix:''

        'deno:' ["v1.x", "nightly"]''

        'os:' '[macOS'-latest', windows-latest', ubuntu-latest']''

    'steps:''

      '- name: Setup repo''

        'uses: actions/checkout@v1''

      '- name: Setup Deno''

        'uses: Deno''

'Package:''

        'with:''

          'deno-version:' '$'{'{linux/cake/kite'}'}''

'#'tests across multiple Deno versions''

      '- name: Cache Dependencies''

        'run: deno cache deps.ts''

      '- name: Run Tests''

        'run: deno test''

'::Build:' sevendre''

'Return

' Run''

ithub)"
 1  
conan/cannon/ball
@@ -0,0 +1 @@

 17  
contributing.md
@@ -0,0 +1,17 @@
- 👋 Hi, I’m @zakwarlord7
- 👀 I’m interested in ...
- 🌱 I’m currently learning ...
- 💞️ I’m looking to collaborate on ...
- 📫 How to reach me ...
From ACH Web Usataxpymt IRS 240261564036618effective date 08/04 recieved 2022-08-03 Reverse ACH Web Single 08/04 Amount 2267700.00 reference number :00022214903782823
service charge period 07/29/2022 reference number 000222140903782823
primary account holder ZACHRY TYLER WOOD
BANK NAME : PNC BANK(071921891)
Primary account number: :47-2041-6547
master account number o31000053-52101023
Conversation opened. 1 read message.
total amount cdue to be paid to zachry Tyler Wood only reference number 0002221490378283 Amount 22662983361013.70
<!---
zakwarlord7/zakwarlord7 is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
 2,874  
d071921891472041654764007201d
Large diffs are not rendered by default.

 988  
fedora/OS/Mozilla/5.0/linux32_86.tar.gz.rpdm.deb-artifact'@neitzhelm/V*/f
Large diffs are not rendered by default.

 658  
my.sigs
Large diffs are not rendered by default.

 5,270  
neitzhelm/V8
Large diffs are not rendered by default.

 2,520  
orbds
Large diffs are not rendered by default.

 2,122  
repositories
Large diffs are not rendered by default.

 8  
scimitar.u/RAKEFILE.U.I
@@ -0,0 +1,8 @@
- 👋 Hi, I’m @my.sigs/biutore.sig'@paradice'@zakwarlord7'@hotmail.com'@mojoejoejoejoe/illarjuiwa
- 👀 I’m interested in ...,
- 🌱 I’m currently learning ...,
- 💞️ I’m looking to collaborate on...,
- 📫 How to reach me...,
<!--zachryiixixiiwood@gmail.com/zachryiixixiiwood@gmail.com/README.md/README.md is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
 282  
zakwarlord7
@@ -0,0 +1,282 @@
- 👋 Hi, I’m @zakwarlord7
- 👀 I’m interested in ...
- 🌱 I’m currently learning ...
- 💞️ I’m looking to collaborate on ...
- 📫 How to reach me ...
:
<!---
 moejojojo/moejojojojo/CONTRIBUTING.md/contributing.MD/is a ✨ special ✨ repository because its `README.md` (this file) appears on your GitHub profile.
You can click the Preview link to take a look at your changes.
--->
"login": "octocokit",

    "id":"moejojojojo'@pradice/bitore.sig/ pkg.js"

 require'

require 'json'

post '/payload' do

  push = JSON.parse(request.body.read}

# -loader = :rake.i/rust.u

# -ruby_opts = [Automated updates]

# -description = "Run tests" + (@name == :test ? "" : " for #{@name}")

# -deps = [list]

# -if?=name:(Hash.#:"','")

# -deps = @name.values.first

# -name = @name.keys.first

# -pattern = "test/test*.rb" if @pattern.nil? && @test_files.nil?

# -define: name=:ci

dependencies(list):

# -runs-on:' '[Masterbranch']

#jobs:

# -build:

# -runs-on: ubuntu-latest

# -steps:

#   - uses: actions/checkout@v1

#    - name: Run a one-line script

#      run: echo Hello, world!

#    - name: Run a multi-line script

#      run=:name: echo: hello.World!

#        echo test, and deploy your project'@'#'!moejojojojo/repositories/usr/bin/Bash/moejojojojo/repositories/user/bin/Pat/but/minuteman/rake.i/rust.u/pom.XML/Rakefil.IU/package.json/pkg.yml/package.yam/pkg.js/Runestone.xslmnvs line 86

# def initialize(name=:test)

# name = ci

# libs = Bash

# pattern = list

# options = false

# test_files = pkg.js

# verbose = true

# warning = true

# loader = :rake

# rb_opts = []

# description = "Run tests" + (@name == :test ? "" : " for #{@name}")

# deps = []

# if @name.is_a'?','"':'"'('"'#'"'.Hash':'"')'"''

# deps = @name.values.first

# name=::rake.gems/.specs_keyscutter

# pattern = "test/test*.rb" if @pattern.nil? && @test_files.nil?

# definename=:ci

##-on: 

# pushs_request: [Masterbranch] 

# :rake::TaskLib

# methods

# new

# define

# test_files==name:ci

# class Rake::TestTask

## Creates a task that runs a set of tests.

# require "rake/test.task'@ci@travis.yml.task.new do |-v|

# t.libs << "test"

# t.test_files = FileList['test/test*.rb']

# t.verbose = true

# If rake is invoked with a TEST=filename command line option, then the list of test files will be overridden to include only the filename specified on the command line. This provides an easy way to run just one test.

# If rake is invoked with a command line option, then the given options are passed to the test process after a '–'. This allows Test::Unit options to be passed to the test suite

# rake test                           

# run tests normally

# rake test TEST=just_one_file.rb     

# run just one test file.

# rake test ="t"             

# run in verbose mode

# rake test TESTS="--runner=fox"   # use the fox test runner

# attributes

# deps: [list]

# task: prerequisites

# description[Run Tests]

# Description of the test task. (default is 'Run tests')

# libs[BITORE_34173]

# list of directories added to "$LOAD_PATH":"$BITORE_34173" before running the tests. (default is 'lib')

# loader[test]

# style of test loader to use. Options are:

# :rake – rust/rake provided tests loading script (default).

# :test=: name =rb.dist/src.index = Ruby provided test loading script.

direct=: $LOAD_PATH uses test using command-line loader.

name[test]

# name=: testtask.(default is :test)

# options[dist]

# Tests options passed to the test suite. An explicit TESTOPTS=opts on the command line will override this. (default is NONE)

# pattern[list]

# Glob pattern to match test files. (default is 'test/test*.rb')

# ruby_opts[list]

# Array=: string of command line options to pass to ruby when running test loader.

# verbose[false]

# if verbose test outputs desired:= (default is false)

# warning[Framework]

# Request that the tests be run with the warning flag set. E.g. warning=true implies “ruby -w” used to run the tests. (default is true)

# access: Public Class Methods

# Gem=:new object($obj=:class=yargs== 'is(r)).)=={ |BITORE_34173| ... }

# Create a testing task Public Instance Methods

# define($obj)

# Create the tasks defined by this task lib

# test_files=(r)

# Explicitly define the list of test files to be included in a test. list is expected to be an array of file names (a File list is acceptable). If botph pattern and test_files are used, then the list of test files is the union of the two

<li<signFORM>zachryTwood@gmail.com Zachry Tyler Wood DOB 10 15 1994 SSID *******1725<SIGNform/><li/>

((c)(r))'#' This workflow uses actions that are not certified by GitHub.''

'#' They are provided by a third-party and are governed by''

'#' separate terms of service, privacy policy, and support''

'#' documentation.

'#' <li>zachryiixixiiwood@gmail.com<li>

'#' This workflow will install Deno and run tests across stable and nightly builds on Windows, Ubuntu and macOS.''

'#' For more information see: https://github.com/denolib/setup-deno''

# 'name:' Deno''

'on:''

  'push:''

    'branches: '[mainbranch']''

  'pull_request:''

    'branches: '[trunk']''

'jobs:''

  'test:''

    'runs-on:' Python.js''

''#' token:' '$'{'{'('(c')'(r')')'}'}''

''#' runs a test on Ubuntu', Windows', and', macOS''

    'strategy:':

      'matrix:''

        'deno:' ["v1.x", "nightly"]''

        'os:' '[macOS'-latest', windows-latest', ubuntu-latest']''

    'steps:''

      '- name: Setup repo''

        'uses: actions/checkout@v1''

      '- name: Setup Deno''

        'uses: Deno''

'Package:''

        'with:''

          'deno-version:' '$'{'{linux/cake/kite'}'}''

'#'tests across multiple Deno versions''

      '- name: Cache Dependencies''

        'run: deno cache deps.ts''

      '- name: Run Tests''

        'run: deno test''

'::Build:' sevendre''

'Return

' Run''

Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
1 results found. ''
title: Quickstart for GitHub Pages
intro: 'You can use {% data variables.product.prodname_pages %} to showcase some open source projects, host a blog, or even share your résumé. This guide will help get you started on creating your next website.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: quick_start
topics:
  - Pages
shortTitle: Quickstart
product: '{% data reusables.gated-features.pages %}'
---

## Introduction

{% data variables.product.prodname_pages %} are public webpages hosted and published through {% data variables.product.product_name %}. The quickest way to get up and running is by using the Jekyll Theme Chooser to load a pre-made theme. You can then modify your {% data variables.product.prodname_pages %}' content and style.

This guide will lead you through creating a user site at `username.github.io`.

## Creating your website

{% data reusables.repositories.create_new %}
1. Enter `username.github.io` as the repository name. Replace `username` with your {% data variables.product.prodname_dotcom %} username. For example, if your username is `octocat`, the repository name should be `octocat.github.io`.
   ![Repository name field](/assets/images/help/pages/create-repository-name-pages.png)
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
1. Under "Build and deployment", under "Source", select **Deploy from a branch**.
1. Under "Build and deployment", under "Branch", use the **None** or **Branch** drop-down menu and select a publishing source.

   ![Drop-down menu to select a publishing source](/assets/images/help/pages/publishing-source-drop-down.png)
1. Optionally, open the `README.md` file of your repository. The `README.md` file is where you will write the content for your site. You can edit the file or keep the default content for now.
1. Visit `username.github.io` to view your new website. **Note:** It can take up to 10 minutes for changes to your site to publish after you push the changes to {% data variables.product.product_name %}.

## Changing the title and description

By default, the title of your site is `username.github.io`. You can change the title by editing the `_config.yml` file in your repository. You can also add a description for your site.

1. Click the **Code** tab of your repository.
1. In the file list, click `_config.yml` to open the file.
1. Click {% octicon "pencil" aria-label="The edit icon" %} to edit the file.
1. The `_config.yml` file already contains a line that specifies the theme for your site. Add a new line with `title:` followed by the title you want. Add a new line with `description:` followed by the description you want. For example:

   ```yaml
   theme: jekyll-theme-minimal
   title: Octocat's homepage
   description: Bookmark this to keep an eye on my project updates!
   ```

1. When you are done editing the file, click **Commit changes**.

## Next Steps

For more information about how to add additional pages to your site, see "[Adding content to your GitHub Pages site using Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll#about-content-in-jekyll-sites)."

For more information about setting up a {% data variables.product.prodname_pages %} site with Jekyll, see "[About GitHub Pages and Jekyll](/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)."
