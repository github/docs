---
title: Authentication in a workflow
intro: '{% data variables.product.prodname_dotcom %} provides a token that you can use to authenticate on behalf of {% data variables.product.prodname_actions %}.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token
  - /actions/configuring-and-managing-workflows/authenticating-with-the-github_token
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
  github-ae: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}
{% data reusables.actions.ae-beta %}

### About the `GITHUB_TOKEN` secret

{% data variables.product.prodname_dotcom %} automatically creates a `GITHUB_TOKEN` secret to use in your workflow. You can use the `GITHUB_TOKEN` to authenticate in a workflow run.

When you enable {% data variables.product.prodname_actions %}, {% data variables.product.prodname_dotcom %} installs a {% data variables.product.prodname_github_app %} on your repository. The `GITHUB_TOKEN` secret is a {% data variables.product.prodname_github_app %} installation access token. You can use the installation access token to authenticate on behalf of the {% data variables.product.prodname_github_app %} installed on your repository. The token's permissions are limited to the repository that contains your workflow. For more information, see "[Permissions for the `GITHUB_TOKEN`](#permissions-for-the-github_token)."

Before each job begins, {% data variables.product.prodname_dotcom %} fetches an installation access token for the job. The token expires when the job is finished.

The token is also available in the `github.token` context. For more information, see "[Context and expression syntax for {% data variables.product.prodname_actions %}](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)."

### Using the `GITHUB_TOKEN` in a workflow

You can use the `GITHUB_TOKEN` by using the standard syntax for referencing secrets: {%raw%}`${{ secrets.GITHUB_TOKEN }}`{% endraw %}. Examples of using the `GITHUB_TOKEN` include passing the token as an input to an action, or using it to make an authenticated {% data variables.product.prodname_dotcom %} API request.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
{% note %}

**Important:** An action can access the `GITHUB_TOKEN` through the `github.token` context even if the workflow does not explicitly pass the `GITHUB_TOKEN` to the action. As a good security practice, you should always make sure that actions only have the minimum access they require by limiting the permissions granted to the `GITHUB_TOKEN`. For more information, see "[Permissions for the `GITHUB_TOKEN`](#permissions-for-the-github_token)."

{% endnote %}
{% endif %}

{% data reusables.github-actions.actions-do-not-trigger-workflows %} 

#### Example 1: passing the `GITHUB_TOKEN` as an input

This example workflow uses the [labeler action](https://github.com/actions/labeler), which requires the `GITHUB_TOKEN` as the value for the `repo-token` input parameter:

  
```yaml
name: Pull request labeler

on: [ pull_request_target ]

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}permissions:
  contents: read
  pull-requests: write

{% endif %}
jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/labeler@v2
      with:
        repo-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```
  

#### Example 2: calling the REST API

You can use the `GITHUB_TOKEN` to make authenticated API calls. This example workflow creates an issue using the {% data variables.product.prodname_dotcom %} REST API:

```yaml
name: Create issue on commit

on: [ push ]

jobs:
  create_commit:
    runs-on: ubuntu-latest {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
    permissions:
      issues: write {% endif %}    
    steps:
    - name: Create issue using REST API
      run: {% raw %}|
        curl --request POST \
        --url https://api.github.com/repos/${{ github.repository }}/issues \
        --header 'authorization: Bearer ${{ secrets.GITHUB_TOKEN }}' \
        --header 'content-type: application/json' \
        --data '{
          "title": "Automated issue for commit: ${{ github.sha }}",
          "body": "This issue was automatically created by the GitHub Action workflow **${{ github.workflow }}**. \n\n The commit hash was: _${{ github.sha }}_."
          }' \
        --fail{% endraw %}
```

### Permissions for the `GITHUB_TOKEN`

For information about the API endpoints {% data variables.product.prodname_github_apps %} can access with each permission, see "[{% data variables.product.prodname_github_app %} Permissions](/rest/reference/permissions-required-for-github-apps)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
The following table shows the permissions granted to the `GITHUB_TOKEN` by default. People with admin permissions to an enterprise, organization, or repository can set the default permissions to be either permissive or restricted. For information on how to set the default permissions for the `GITHUB_TOKEN` for your enterprise, organization, or repository, see "[Enforcing {% data variables.product.prodname_actions %} policies in your enterprise account](/github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account#setting-the-permissions-of-the-github_token-for-your-enterprise)," "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/github/setting-up-and-managing-organizations-and-teams/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)," or "[Disabling or limiting {% data variables.product.prodname_actions %} for a repository](/github/administering-a-repository/disabling-or-limiting-github-actions-for-a-repository#setting-the-permissions-of-the-github_token-for-a-repository)."

| Scope         | Default access<br>(permissive) | Default access<br>(restricted) | Maximum access<br>by forked repos |
|---------------|-----------------------------|-----------------------------|--------------------------------|
| actions       | read/write  | none | read |
| checks        | read/write  | none | read |
| contents      | read/write  | read | read |
| deployments   | read/write  | none | read |
| issues        | read/write  | none | read |
| metadata      | read        | read | read |
| packages      | read/write  | none | read |
| pull requests | read/write  | none | read |
| repository projects | read/write | none | read |
| security events     | read/write | none | read |
| statuses      | read/write  | none | read |
{% else %}
| Scope    | Access type | Access by forked repos |
|----------|-------------|--------------------------|
| actions  | read/write  | read |
| checks   | read/write  | read |
| contents | read/write  | read |
| deployments | read/write | read |
| issues   | read/write  | read |
| metadata | read        | read |
| packages | read/write  | read |
| pull requests | read/write | read |
| repository projects | read/write | read |
| statuses | read/write  | read |
{% endif %}

{% data reusables.actions.workflow-runs-dependabot-note %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
#### Modifying the permissions for the `GITHUB_TOKEN`

You can modify the permissions for the `GITHUB_TOKEN` in individual workflow files. If the default permissions for the `GITHUB_TOKEN` are restrictive, you may have to elevate the permissions to allow some actions and commands to run successfully. If the default permissions are permissive, you can edit the workflow file to remove some permissions from the `GITHUB_TOKEN`. As a good security practice, you should grant the `GITHUB_TOKEN` the least required access.

You can see the permissions that `GITHUB_TOKEN` had for a specific job in the "Set up job" section of the workflow run log. For more information, see "[Using workflow run logs](/actions/managing-workflow-runs/using-workflow-run-logs)."

You can use the `permissions` key in your workflow file to modify permissions for the `GITHUB_TOKEN` for an entire workflow or for individual jobs. This allows you to configure the minimum required permissions for a workflow or job. When the `permissions` key is used, all unspecified permissions are set to no access, with the exception of the `metadata` scope, which always gets read access.

{% data reusables.github-actions.forked-write-permission %}

The two workflow examples earlier in this article show the `permissions` key being used at the workflow level, and at the job level. In [Example 1](#example-1-passing-the-github_token-as-an-input) the two permissions are specified for the entire workflow. In [Example 2](#example-2-calling-the-rest-api) write access is granted for one scope for a single job. 

For full details of the `permissions` key, see "[Workflow syntax for {% data variables.product.prodname_actions %}](/actions/reference/workflow-syntax-for-github-actions#permissions)."

##### How the permissions are calculated for a workflow job

The permissions for the `GITHUB_TOKEN` are initially set to the default setting for the enterprise, organization, or repository. If the default is set to the restricted permissions at any of these levels then this will apply to the relevant repositories. For example, if you choose the restricted default at the organization level then all repositories in that organization will use the restricted permissions as the default. The permissions are then adjusted based on any configuration within the workflow file, first at the workflow level and then at the job level. Finally, if the workflow was triggered by a pull request from a forked repository, and the **Send write tokens to workflows from pull requests** setting is not selected, the permissions are adjusted to change any write permissions to read only.

#### Granting additional permissions
{% endif %}

If you need a token that requires permissions that aren't available in the `GITHUB_TOKEN`, you can create a personal access token and set it as a secret in your repository:

1. Use or create a token with the appropriate permissions for that repository. For more information, see "[Creating a personal access token](/github/authenticating-to-github/creating-a-personal-access-token)."
1. Add the token as a secret in your workflow's repository, and refer to it using the {%raw%}`${{ secrets.SECRET_NAME }}`{% endraw %} syntax. For more information, see "[Creating and using encrypted secrets](/github/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."{"app_name":"AirPort","timestamp":"2021-04-21 21:27:01.00 -0700","app_version":"1.3.6","slice_uuid":"fbf5b1ab-7209-382d-9b4b-4b3816a641eb","adam_id":427276530,"build_version":"136.3","platform":2,"bundleID":"com.apple.airport.mobileairportutility","share_with_app_devs":1,"is_first_party":0,"bug_type":"109","os_version":"iPhone OS 14.4.2 (18D70)","incident_id":"509AD07D-B77A-4F46-BB8E-553BC2B4DC77","name":"AirPort"}
Incident Identifier: 509AD07D-B77A-4F46-BB8E-553BC2B4DC77
CrashReporter Key:   dd2f2c5995f10b3feff86fcefe5981340ae8eec0
Hardware Model:      iPhone9,3
Process:             AirPort [245]
Path:                /private/var/containers/Bundle/Application/8CD1FFF7-A7B0-4947-ACD8-A77D39896A10/AirPort.app/AirPort
Identifier:          com.apple.airport.mobileairportutility
Version:             136.3 (1.3.6)
AppStoreTools:       11A1002b
AppVariant:          1:iPhone9,3:10
Code Type:           ARM-64 (Native)
Role:                Foreground
Parent Process:      launchd [1]
Coalition:           com.apple.airport.mobileairportutility [375]


Date/Time:           2021-04-21 21:27:00.7245 -0700
Launch Time:         2021-04-21 21:26:13.3475 -0700
OS Version:          iPhone OS 14.4.2 (18D70)
Release Type:        User
Baseband Version:    5.01.01
Report Version:      104

Exception Type:  EXC_BAD_ACCESS (SIGSEGV)
Exception Subtype: KERN_INVALID_ADDRESS at 0x000000034d697220
VM Region Info: 0x34d697220 is not in any region.  Bytes after previous region: 2909368865  Bytes before following region: 53462076896
      REGION TYPE                 START - END      [ VSIZE] PRT/MAX SHRMOD  REGION DETAIL
      MALLOC_NANO              280000000-2a0000000 [512.0M] rw-/rwx SM=PRV  
--->  GAP OF 0xd20000000 BYTES
      commpage (reserved)      fc0000000-1000000000 [  1.0G] ---/--- SM=NUL  ...(unallocated)

Termination Signal: Segmentation fault: 11
Termination Reason: Namespace SIGNAL, Code 0xb
Terminating Process: exc handler [245]
Triggered by Thread:  0

Thread 0 name:  Dispatch queue: com.apple.main-thread
Thread 0 Crashed:
0   libobjc.A.dylib               	0x00000001b1888474 0x1b1886000 + 9332
1   AirPort                       	0x0000000102850650 0x102788000 + 820816
2   MobileWiFi                    	0x00000001bde04650 0x1bddfd000 + 30288
3   MobileWiFi                    	0x00000001bde16ff4 0x1bddfd000 + 106484
4   MobileWiFi                    	0x00000001bde178c0 0x1bddfd000 + 108736
5   MobileWiFi                    	0x00000001bde01374 0x1bddfd000 + 17268
6   MobileWiFi                    	0x00000001bde00c18 0x1bddfd000 + 15384
7   CoreFoundation                	0x000000019d466b54 0x19d3ef000 + 490324
8   CoreFoundation                	0x000000019d48a420 0x19d3ef000 + 635936
9   CoreFoundation                	0x000000019d489834 0x19d3ef000 + 632884
10  CoreFoundation                	0x000000019d4839f4 0x19d3ef000 + 608756
11  CoreFoundation                	0x000000019d482ba0 0x19d3ef000 + 605088
12  GraphicsServices              	0x00000001b41e8598 0x1b41e5000 + 13720
13  UIKitCore                     	0x000000019fd742f4 0x19f246000 + 11723508
14  UIKitCore                     	0x000000019fd79874 0x19f246000 + 11745396
15  AirPort                       	0x00000001027ddf78 0x102788000 + 352120
16  libdyld.dylib                 	0x000000019d161568 0x19d160000 + 5480

Thread 1 name:  com.apple.uikit.eventfetch-thread
Thread 1:
0   libsystem_kernel.dylib        	0x00000001c9422644 0x1c941e000 + 17988
1   libsystem_kernel.dylib        	0x00000001c9421a48 0x1c941e000 + 14920
2   CoreFoundation                	0x000000019d4890fc 0x19d3ef000 + 631036
3   CoreFoundation                	0x000000019d483570 0x19d3ef000 + 607600
4   CoreFoundation                	0x000000019d482ba0 0x19d3ef000 + 605088
5   Foundation                    	0x000000019e6a27f8 0x19e69b000 + 30712
6   Foundation                    	0x000000019e6a26d8 0x19e69b000 + 30424
7   UIKitCore                     	0x000000019fe20054 0x19f246000 + 12427348
8   Foundation                    	0x000000019e7ff4bc 0x19e69b000 + 1459388
9   libsystem_pthread.dylib       	0x00000001e5d2bc9c 0x1e5d23000 + 35996
10  libsystem_pthread.dylib       	0x00000001e5d30880 0x1e5d23000 + 55424

Thread 2 name:  com.apple.CFSocket.private
Thread 2:
0   libsystem_kernel.dylib        	0x00000001c9445b00 0x1c941e000 + 162560
1   CoreFoundation                	0x000000019d495400 0x19d3ef000 + 680960
2   libsystem_pthread.dylib       	0x00000001e5d2bc9c 0x1e5d23000 + 35996
3   libsystem_pthread.dylib       	0x00000001e5d30880 0x1e5d23000 + 55424

Thread 3:
0   libsystem_kernel.dylib        	0x00000001c9445b00 0x1c941e000 + 162560
1   AirPort                       	0x0000000102834bc4 0x102788000 + 707524
2   AirPort                       	0x00000001028340e0 0x102788000 + 704736
3   AirPort                       	0x000000010284380c 0x102788000 + 768012
4   AirPort                       	0x0000000102843d48 0x102788000 + 769352
5   AirPort                       	0x0000000102844360 0x102788000 + 770912
6   libsystem_pthread.dylib       	0x00000001e5d2bc9c 0x1e5d23000 + 35996
7   libsystem_pthread.dylib       	0x00000001e5d30880 0x1e5d23000 + 55424

Thread 4:
0   libsystem_pthread.dylib       	0x00000001e5d3086c 0x1e5d23000 + 55404

Thread 5:
0   libsystem_pthread.dylib       	0x00000001e5d3086c 0x1e5d23000 + 55404

Thread 6:
0   libsystem_pthread.dylib       	0x00000001e5d3086c 0x1e5d23000 + 55404

Thread 7:
0   libsystem_pthread.dylib       	0x00000001e5d3086c 0x1e5d23000 + 55404

Thread 0 crashed with ARM Thread State (64-bit):
    x0: 0x0000000282fa7210   x1: 0x00000001e8faf617   x2: 0x0000000282fbbe10   x3: 0x0000000280bfd8b0
    x4: 0x0000000102850614   x5: 0x0000000102be8a40   x6: 0x000000000000175c   x7: 0x00000000000007ff
    x8: 0x0000000282fbbe10   x9: 0x0000000000000000  x10: 0x0000000ffffffff8  x11: 0x0000000200012880
   x12: 0x0000000000000000  x13: 0x000035834d697210  x14: 0x0000000000000000  x15: 0x000000034d697210
   x16: 0x000000034d697210  x17: 0x000000019d3f6d84  x18: 0x0000000000000000  x19: 0x0000000280bfd8b0
   x20: 0x000000000000d21a  x21: 0x0000000102fcc000  x22: 0x000000000000002d  x23: 0x0000000102b17e40
   x24: 0xad64bc269596bb3d  x25: 0x0000000000000000  x26: 0x0000000282fbbde0  x27: 0x0000000102c16a50
   x28: 0x0000000282fbbe10   fp: 0x000000016d675950   lr: 0x0000000102850650
    sp: 0x000000016d675940   pc: 0x00000001b1888474 cpsr: 0x20000000
   esr: 0x92000006 (Data Abort) byte read Translation fault

Binary Images:
0x102788000 - 0x1028c7fff AirPort arm64  <fbf5b1ab7209382d9b4b4b3816a641eb> /var/containers/Bundle/Application/8CD1FFF7-A7B0-4947-ACD8-A77D39896A10/AirPort.app/AirPort
0x10292c000 - 0x102997fff dyld arm64  <b92286197bbb32eeb90d689ac449aa60> /usr/lib/dyld
0x102ad4000 - 0x102adffff libobjc-trampolines.dylib arm64  <80646a348ec63d15a5642731a0a01eaa> /usr/lib/libobjc-trampolines.dylib
0x102f08000 - 0x102f1bfff GAXClient arm64  <037d49c67b5a3a6d8bae77ecca296a76> /System/Library/AccessibilityBundles/GAXClient.bundle/GAXClient
0x102f40000 - 0x102f47fff SiriTTSSpeechBundle arm64  <d8d2061492883e9c9b6e82c797343c6f> /System/Library/TTSPlugins/SiriTTSSpeechBundle.speechbundle/SiriTTSSpeechBundle
0x102f58000 - 0x102f5ffff TTSSpeechBundle arm64  <a9513c051687325e85544867d954fa5a> /System/Library/TTSPlugins/TTSSpeechBundle.speechbundle/TTSSpeechBundle
0x106c48000 - 0x106d53fff MacinTalk arm64  <09c65ee9e9693eaaa4a471aead4809f5> /System/Library/TTSPlugins/MacinTalk.speechbundle/MacinTalk
0x19d0e1000 - 0x19d15ffff libdispatch.dylib arm64  <af27e74cbe4a3364bb27aed9916ce02d> /usr/lib/system/libdispatch.dylib
0x19d160000 - 0x19d196fff libdyld.dylib arm64  <0b475c783c123121b7f82b95b83daf44> /usr/lib/system/libdyld.dylib
0x19d197000 - 0x19d3eefff libicucore.A.dylib arm64  <92f2f395bfe9387994a8c015489a3af4> /usr/lib/libicucore.A.dylib
0x19d3ef000 - 0x19d798fff CoreFoundation arm64  <f3021642e3c033f89911dd303a6056d0> /System/Library/Frameworks/CoreFoundation.framework/CoreFoundation
0x19d799000 - 0x19d933fff CoreServices arm64  <21cf36fcc45436728228b93d58ff00c8> /System/Library/Frameworks/CoreServices.framework/CoreServices
0x19d97d000 - 0x19d9f6fff SystemConfiguration arm64  <25b9e2ed36593ef487cf2e7a3270883f> /System/Library/Frameworks/SystemConfiguration.framework/SystemConfiguration
0x19d9f7000 - 0x19dae1fff CoreTelephony arm64  <2c92b898bf6a397eab4d409588151ca4> /System/Library/Frameworks/CoreTelephony.framework/CoreTelephony
0x19dae2000 - 0x19df63fff CFNetwork arm64  <9d46b4f5cd9e31edba2d28f8bdc5e810> /System/Library/Frameworks/CFNetwork.framework/CFNetwork
0x19df64000 - 0x19e629fff libnetwork.dylib arm64  <bfa95fff721f35b3aff7a1e3aeea068b> /usr/lib/libnetwork.dylib
0x19e62a000 - 0x19e69afff Accounts arm64  <1e2fba4c0dc03f4d89338072bfe04f16> /System/Library/Frameworks/Accounts.framework/Accounts
0x19e69b000 - 0x19e935fff Foundation arm64  <712a564e50583eacaf3a43bbd43d0d7e> /System/Library/Frameworks/Foundation.framework/Foundation
0x19e936000 - 0x19ec9cfff ImageIO arm64  <7517393d394b3426a85f09eff1764832> /System/Library/Frameworks/ImageIO.framework/ImageIO
0x19ec9d000 - 0x19ecb5fff libCGInterfaces.dylib arm64  <940a76a4a65032709a1c714594adb838> /System/Library/Frameworks/Accelerate.framework/Frameworks/vImage.framework/Libraries/libCGInterfaces.dylib
0x19ecb6000 - 0x19f245fff CoreGraphics arm64  <57b3d61e4cd130dfb7b476d1ac5c4a16> /System/Library/Frameworks/CoreGraphics.framework/CoreGraphics
0x19f246000 - 0x1a060ffff UIKitCore arm64  <cc6e5ac7824835f68b422e25c93dcf0a> /System/Library/PrivateFrameworks/UIKitCore.framework/UIKitCore
0x1a0610000 - 0x1a062dfff libAccessibility.dylib arm64  <62a9b592f12437b5b040338f4d6e54a7> /usr/lib/libAccessibility.dylib
0x1a062e000 - 0x1a08a3fff QuartzCore arm64  <461501dd204f35169f5dbdd0ba19fda1> /System/Library/Frameworks/QuartzCore.framework/QuartzCore
0x1a08a4000 - 0x1a0909fff BackBoardServices arm64  <ede04d70146a375ab026b0de23c64900> /System/Library/PrivateFrameworks/BackBoardServices.framework/BackBoardServices
0x1a090a000 - 0x1a0991fff TextInput arm64  <e039c6aadcf7351892c13176eae7626e> /System/Library/PrivateFrameworks/TextInput.framework/TextInput
0x1a09fa000 - 0x1a0d99fff AppleMediaServices arm64  <8bdaee10df1f3b50ac4017ccd82da9f5> /System/Library/PrivateFrameworks/AppleMediaServices.framework/AppleMediaServices
0x1a12ae000 - 0x1a12c5fff UIKitServices arm64  <cbf3581d49eb30c094cc56467af4e402> /System/Library/PrivateFrameworks/UIKitServices.framework/UIKitServices
0x1a12c6000 - 0x1a1410fff Preferences arm64  <fb3b30abc4953fe6b1fe7269e67279e0> /System/Library/PrivateFrameworks/Preferences.framework/Preferences
0x1a1620000 - 0x1a17d9fff CoreText arm64  <6655bf5d06f232b2bf2356e7208c415d> /System/Library/Frameworks/CoreText.framework/CoreText
0x1a17da000 - 0x1a17f3fff ExtensionKit arm64  <68e3b55e8dae34f6bdf03f6e5bddbb28> /System/Library/PrivateFrameworks/ExtensionKit.framework/ExtensionKit
0x1a1808000 - 0x1a1885fff BaseBoard arm64  <835e9ff531943e978e9aa0d159f2f547> /System/Library/PrivateFrameworks/BaseBoard.framework/BaseBoard
0x1a1886000 - 0x1a1a9bfff CoreDuet arm64  <747f915812903af3b819f7b83a49798b> /System/Library/PrivateFrameworks/CoreDuet.framework/CoreDuet
0x1a1a9c000 - 0x1a1be7fff Contacts arm64  <ccf0dc813dcf33cd9ac9734d165e26d7> /System/Library/Frameworks/Contacts.framework/Contacts
0x1a1be8000 - 0x1a3059fff GeoServices arm64  <2d9af4d7d362343a9293c51aa460338a> /System/Library/PrivateFrameworks/GeoServices.framework/GeoServices
0x1a305a000 - 0x1a30ecfff CoreLocation arm64  <45cea69167423034a070baf95767f548> /System/Library/Frameworks/CoreLocation.framework/CoreLocation
0x1a30ed000 - 0x1a3289fff CloudKit arm64  <515356c956e1384ea39b0c01b5d0bee4> /System/Library/Frameworks/CloudKit.framework/CloudKit
0x1a328a000 - 0x1a35f2fff CoreData arm64  <418ea9f61e9b3dd4bb1737c8fc35365a> /System/Library/Frameworks/CoreData.framework/CoreData
0x1a41ed000 - 0x1a422bfff AppSupport arm64  <1b30489e0af63febb04b645b0f9e60b4> /System/Library/PrivateFrameworks/AppSupport.framework/AppSupport
0x1a422c000 - 0x1a4349fff ManagedConfiguration arm64  <631f9e9983a53c21be7af91099ef8b80> /System/Library/PrivateFrameworks/ManagedConfiguration.framework/ManagedConfiguration
0x1a434a000 - 0x1a43b6fff IMFoundation arm64  <9f009545d7a23a63b7ed3a11120266eb> /System/Library/PrivateFrameworks/IMFoundation.framework/IMFoundation
0x1a43b7000 - 0x1a44b9fff IDS arm64  <b7325747e4e2341f9afff0fc2b645584> /System/Library/PrivateFrameworks/IDS.framework/IDS
0x1a44ba000 - 0x1a45f8fff Security arm64  <8a534c875a613c3182a1a9a0a302a205> /System/Library/Frameworks/Security.framework/Security
0x1a49f7000 - 0x1a4a0efff AudioSession arm64  <a0ee017de0b93f0c83959361e8a2b1f2> /System/Library/PrivateFrameworks/AudioSession.framework/AudioSession
0x1a4a0f000 - 0x1a4b89fff AVFCore arm64  <1a7ee7dd3f5b38ee9f6e091afae55d42> /System/Library/PrivateFrameworks/AVFCore.framework/AVFCore
0x1a4b8a000 - 0x1a50f4fff Intents arm64  <b90c3d75d6f8348b98ebf6c36e005438> /System/Library/Frameworks/Intents.framework/Intents
0x1a5141000 - 0x1a5440fff CoreImage arm64  <0b613f10d8e33ccf97e4cc6c9c74c3a2> /System/Library/Frameworks/CoreImage.framework/CoreImage
0x1a5441000 - 0x1a54fbfff ColorSync arm64  <e9bc0a8306a63d6f81605257fa33b69a> /System/Library/PrivateFrameworks/ColorSync.framework/ColorSync
0x1a54fc000 - 0x1a5534fff CoreVideo arm64  <e26f74b884203134a417c900e4afd212> /System/Library/Frameworks/CoreVideo.framework/CoreVideo
0x1a5535000 - 0x1a5c5afff MediaToolbox arm64  <7f9b709ae3393200a588943837dede90> /System/Library/Frameworks/MediaToolbox.framework/MediaToolbox
0x1a5c5b000 - 0x1a5d4dfff CoreMedia arm64  <b4ac6b091d4934748d2806a8862da40a> /System/Library/Frameworks/CoreMedia.framework/CoreMedia
0x1a5d4e000 - 0x1a5fb9fff AudioToolbox arm64  <7403032b46d63f9e838404339c7ef367> /System/Library/Frameworks/AudioToolbox.framework/AudioToolbox
0x1a5fba000 - 0x1a6009fff CoreHaptics arm64  <e53f5a5f9f6337999d57c7c9471248f1> /System/Library/Frameworks/CoreHaptics.framework/CoreHaptics
0x1a6067000 - 0x1a616afff UIFoundation arm64  <95d74bf6d60f3d0b939af6b614e4ac3f> /System/Library/PrivateFrameworks/UIFoundation.framework/UIFoundation
0x1a616b000 - 0x1a6190fff libsystem_info.dylib arm64  <3d3b0c9a516331658eba2b97fa3e3090> /usr/lib/system/libsystem_info.dylib
0x1a6191000 - 0x1a620dfff libsystem_c.dylib arm64  <a07a482ae889392a8c66c328cf5320c9> /usr/lib/system/libsystem_c.dylib
0x1a620e000 - 0x1a6256fff RunningBoardServices arm64  <ddd773981a773f39ac9cc36fa221d870> /System/Library/PrivateFrameworks/RunningBoardServices.framework/RunningBoardServices
0x1a6257000 - 0x1a730bfff JavaScriptCore arm64  <5bd82887c23e3e37b0f21f9bf23321f5> /System/Library/Frameworks/JavaScriptCore.framework/JavaScriptCore
0x1a78a4000 - 0x1a7929fff ContactsFoundation arm64  <df4fbe44f4113496a14fe399634d91b1> /System/Library/PrivateFrameworks/ContactsFoundation.framework/ContactsFoundation
0x1a7b58000 - 0x1a7b79fff ProactiveEventTracker arm64  <2dbdc4b0d2d2394b995e79a2330c6747> /System/Library/PrivateFrameworks/ProactiveEventTracker.framework/ProactiveEventTracker
0x1a7b7a000 - 0x1a7bc4fff Lexicon arm64  <eba3592c5d903cafa3ace5a726a75566> /System/Library/PrivateFrameworks/Lexicon.framework/Lexicon
0x1a7c2e000 - 0x1a7c7afff CoreDuetContext arm64  <5974c36a40953694baa36b8110d34414> /System/Library/PrivateFrameworks/CoreDuetContext.framework/CoreDuetContext
0x1a7c7b000 - 0x1a7d21fff IOKit arm64  <ab855ed1eb833c9eb5de293735aba7e9> /System/Library/Frameworks/IOKit.framework/Versions/A/IOKit
0x1a7d22000 - 0x1a7d31fff DataMigration arm64  <552910a7ae173403ba35a59209aa3ee6> /System/Library/PrivateFrameworks/DataMigration.framework/DataMigration
0x1a7d32000 - 0x1a7d8afff SpringBoardServices arm64  <ab3e74131e2c3a22bf819dd981e92af7> /System/Library/PrivateFrameworks/SpringBoardServices.framework/SpringBoardServices
0x1a7d9d000 - 0x1a8003fff CoreMotion arm64  <a95bceffd01733c4aeeeeccb7b70343b> /System/Library/Frameworks/CoreMotion.framework/CoreMotion
0x1a8004000 - 0x1a813afff EventKit arm64  <aa6c4c56721d354c9deb3dd66aafcbc0> /System/Library/Frameworks/EventKit.framework/EventKit
0x1a865b000 - 0x1a88d4fff MediaRemote arm64  <e4aa2fb7ec183feda1303869684d6fa8> /System/Library/PrivateFrameworks/MediaRemote.framework/MediaRemote
0x1a88d5000 - 0x1a8a6dfff CoreUtils arm64  <44a8e8eefc9638959c6f8feca7273b3c> /System/Library/PrivateFrameworks/CoreUtils.framework/CoreUtils
0x1a8a84000 - 0x1a8af0fff CoreSpotlight arm64  <ba37870857b23498933918b8ad618b5d> /System/Library/Frameworks/CoreSpotlight.framework/CoreSpotlight
0x1a8ed6000 - 0x1a906efff AssistantServices arm64  <a3df9f51ca773d24b2d7947e345f1422> /System/Library/PrivateFrameworks/AssistantServices.framework/AssistantServices
0x1a906f000 - 0x1a9130fff CoreUI arm64  <79ecf5d18f4a3c349f87d72dfbee8b84> /System/Library/PrivateFrameworks/CoreUI.framework/CoreUI
0x1a9b32000 - 0x1ac3dafff WebCore arm64  <c5adbb516bc738bbad0f4a09ed2a41ec> /System/Library/PrivateFrameworks/WebCore.framework/WebCore
0x1ac3db000 - 0x1ac439fff libMobileGestalt.dylib arm64  <7ccc7cb306dc3abfb86172ba8fe12175> /usr/lib/libMobileGestalt.dylib
0x1ac43a000 - 0x1ac455fff CommonUtilities arm64  <759200c8b57e3a46887bb474f4392784> /System/Library/PrivateFrameworks/CommonUtilities.framework/CommonUtilities
0x1ac456000 - 0x1ac5bbfff IDSFoundation arm64  <d3637b85a6dd31708dfc54c39c71d6f1> /System/Library/PrivateFrameworks/IDSFoundation.framework/IDSFoundation
0x1ac6bb000 - 0x1ac75bfff CoreSuggestions arm64  <4d4f41ccb6a639d9a7cdb5c70cb4bbf2> /System/Library/PrivateFrameworks/CoreSuggestions.framework/CoreSuggestions
0x1ac75c000 - 0x1ac7f5fff AddressBookLegacy arm64  <349428ab796b32beb90f311cb47d3129> /System/Library/PrivateFrameworks/AddressBookLegacy.framework/AddressBookLegacy
0x1ac7f6000 - 0x1ac826fff UserNotifications arm64  <53727fddc6043fa08871a6697500970d> /System/Library/Frameworks/UserNotifications.framework/UserNotifications
0x1ac827000 - 0x1ac8a8fff FrontBoardServices arm64  <e42fbc3b619c32aba2104a25f8b5373f> /System/Library/PrivateFrameworks/FrontBoardServices.framework/FrontBoardServices
0x1ac8a9000 - 0x1ac8cbfff libsystem_malloc.dylib arm64  <8979fb06a3173c57afea2732627a08e5> /usr/lib/system/libsystem_malloc.dylib
0x1ad354000 - 0x1ad3ddfff AuthKit arm64  <a9915ac1507c316ba1a3e34f758721f7> /System/Library/PrivateFrameworks/AuthKit.framework/AuthKit
0x1ad3de000 - 0x1ad46cfff AppleAccount arm64  <242996fac30b32e2b851b415c50d63ea> /System/Library/PrivateFrameworks/AppleAccount.framework/AppleAccount
0x1ad46d000 - 0x1ad572fff AVFAudio arm64  <b31e053142ae36e2814285398a9687ad> /System/Library/Frameworks/AVFoundation.framework/Frameworks/AVFAudio.framework/AVFAudio
0x1ad573000 - 0x1ad7d2fff AudioToolboxCore arm64  <c498629445da3d4da0651ae13ab9eba2> /System/Library/PrivateFrameworks/AudioToolboxCore.framework/AudioToolboxCore
0x1ada9b000 - 0x1adc11fff Sharing arm64  <41eb92837591324aab739e0f14fa4172> /System/Library/PrivateFrameworks/Sharing.framework/Sharing
0x1adc12000 - 0x1adcb2fff ShareSheet arm64  <75bdaae974073dfb89d3d4e21253f4a5> /System/Library/PrivateFrameworks/ShareSheet.framework/ShareSheet
0x1ae7b0000 - 0x1ae7fffff MobileBackup arm64  <dd231c1dd126340f9cca670f38dce8c8> /System/Library/PrivateFrameworks/MobileBackup.framework/MobileBackup
0x1ae800000 - 0x1ae813fff MSUDataAccessor arm64  <7b35955407f6351c95226c24c1a941dd> /System/Library/PrivateFrameworks/MSUDataAccessor.framework/MSUDataAccessor
0x1ae814000 - 0x1ae839fff MobileAsset arm64  <10e354c09e6b387ebece24aa36daa320> /System/Library/PrivateFrameworks/MobileAsset.framework/MobileAsset
0x1ae83a000 - 0x1ae849fff libsystem_networkextension.dylib arm64  <cbedb2f58d9d3daaa677620746c058bf> /usr/lib/system/libsystem_networkextension.dylib
0x1ae84a000 - 0x1aea87fff NetworkExtension arm64  <6f0b7bec69ad3e5dad05d06c24709f4c> /System/Library/Frameworks/NetworkExtension.framework/NetworkExtension
0x1aeabc000 - 0x1aee7dfff CoreML arm64  <b6b01a27efc83e4db905e7915d3a3c05> /System/Library/Frameworks/CoreML.framework/CoreML
0x1aee7e000 - 0x1af6a6fff Espresso arm64  <4c74ae79125931afa8c7e612c471d344> /System/Library/PrivateFrameworks/Espresso.framework/Espresso
0x1af6a7000 - 0x1af79ffff VideoToolbox arm64  <8bc9932004bb395695da4707de68cc3e> /System/Library/Frameworks/VideoToolbox.framework/VideoToolbox
0x1af7a0000 - 0x1af7e9fff OnBoardingKit arm64  <04a0704243503fed9c89b3b9f15a27c7> /System/Library/PrivateFrameworks/OnBoardingKit.framework/OnBoardingKit
0x1af7ea000 - 0x1af8dcfff AccessibilityUtilities arm64  <e97196e63e92321a8b2b9c298a2376f7> /System/Library/PrivateFrameworks/AccessibilityUtilities.framework/AccessibilityUtilities
0x1af8dd000 - 0x1af8ecfff AXCoreUtilities arm64  <4e7719479e4b3a7ca1ad3e492d6a3c7a> /System/Library/PrivateFrameworks/AXCoreUtilities.framework/AXCoreUtilities
0x1b072a000 - 0x1b0899fff Montreal arm64  <1858d0f1ff7d36fdb57e8d3992e5e40d> /System/Library/PrivateFrameworks/Montreal.framework/Montreal
0x1b089a000 - 0x1b09a6fff LanguageModeling arm64  <1db8707b18983b48a0525e7e7049919f> /System/Library/PrivateFrameworks/LanguageModeling.framework/LanguageModeling
0x1b09a7000 - 0x1b09affff InternationalSupport arm64  <466a73016cc730a8a3980d37b563e281> /System/Library/PrivateFrameworks/InternationalSupport.framework/InternationalSupport
0x1b0d37000 - 0x1b0dd9fff CalendarDatabase arm64  <ad233efa69373d4c960ebfa568339167> /System/Library/PrivateFrameworks/CalendarDatabase.framework/CalendarDatabase
0x1b1073000 - 0x1b1084fff UniformTypeIdentifiers arm64  <0d4ae481279b38be9efccc4c01ed8c00> /System/Library/Frameworks/UniformTypeIdentifiers.framework/UniformTypeIdentifiers
0x1b1085000 - 0x1b1101fff CloudDocs arm64  <0bd19be9432e3a83b3cc75747cfb333d> /System/Library/PrivateFrameworks/CloudDocs.framework/CloudDocs
0x1b15ec000 - 0x1b1627fff MediaServices arm64  <7c9e21e5fee53a9c83f0833e36eb5500> /System/Library/PrivateFrameworks/MediaServices.framework/MediaServices
0x1b1886000 - 0x1b18bbfff libobjc.A.dylib arm64  <316491e870633cd0993b96f8b8ac54d4> /usr/lib/libobjc.A.dylib
0x1b18bc000 - 0x1b191bfff LoggingSupport arm64  <23a8ad01b41e3766a91c8f85fb233a99> /System/Library/PrivateFrameworks/LoggingSupport.framework/LoggingSupport
0x1b191c000 - 0x1b1975fff libc++.1.dylib arm64  <0be75e2f3ed538c2839715f168ce0a24> /usr/lib/libc++.1.dylib
0x1b1976000 - 0x1b198efff libc++abi.dylib arm64  <d5ca7f692cc13501aff22b5e6b74668e> /usr/lib/libc++abi.dylib
0x1b198f000 - 0x1b19cdfff SetupAssistant arm64  <9bc49587dfbe3af790bd37aa297aef49> /System/Library/PrivateFrameworks/SetupAssistant.framework/SetupAssistant
0x1b19ce000 - 0x1b19e7fff OctagonTrust arm64  <aff408e5aaa83193adae04e8dad631d7> /System/Library/PrivateFrameworks/OctagonTrust.framework/OctagonTrust
0x1b1b00000 - 0x1b1b40fff CoreAutoLayout arm64  <011f5ca5d31b3cdc83c2c7cb66064075> /System/Library/PrivateFrameworks/CoreAutoLayout.framework/CoreAutoLayout
0x1b1b41000 - 0x1b1c99fff Network arm64  <f3cce4bd736d3a908705dc657249a3a9> /System/Library/Frameworks/Network.framework/Network
0x1b1c9a000 - 0x1b1ccefff MobileKeyBag arm64  <dc6e0009179231fd818209dd2b7d2309> /System/Library/PrivateFrameworks/MobileKeyBag.framework/MobileKeyBag
0x1b1f0a000 - 0x1b1fa4fff libvDSP.dylib arm64  <97ce479c5c9337f7a5deb208f15bb80a> /System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/libvDSP.dylib
0x1b1fa5000 - 0x1b1fd7fff libAudioToolboxUtility.dylib arm64  <8913e5a358c93ad2a8ed30f32ef60ff1> /usr/lib/libAudioToolboxUtility.dylib
0x1b2193000 - 0x1b221bfff CoreNLP arm64  <f87509aa92fc3814911285cfd89abd2b> /System/Library/PrivateFrameworks/CoreNLP.framework/CoreNLP
0x1b221c000 - 0x1b2328fff FileProvider arm64  <9fca752e2e8f3a52bef865acd263d21c> /System/Library/Frameworks/FileProvider.framework/FileProvider
0x1b2351000 - 0x1b2386fff DataDetectorsCore arm64  <3ee31e3c1bfa341999523dabd62c2c8b> /System/Library/PrivateFrameworks/DataDetectorsCore.framework/DataDetectorsCore
0x1b2387000 - 0x1b2412fff Symbolication arm64  <ce4e42651b1d3069b44c65ef4a7681c7> /System/Library/PrivateFrameworks/Symbolication.framework/Symbolication
0x1b2413000 - 0x1b2430fff CrashReporterSupport arm64  <66920d9e89183f7f95f83ec09fe19b17> /System/Library/PrivateFrameworks/CrashReporterSupport.framework/CrashReporterSupport
0x1b258a000 - 0x1b2771fff MPSNeuralNetwork arm64  <2ddb7920ccce3fa89ab61e0604cfe34a> /System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNeuralNetwork.framework/MPSNeuralNetwork
0x1b2772000 - 0x1b27c5fff MPSCore arm64  <0288a499f1c93e2da2c0eab4895596be> /System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSCore.framework/MPSCore
0x1b2918000 - 0x1b2980fff CalendarFoundation arm64  <b5b7223fd5a8366590b6c297b587fbb6> /System/Library/PrivateFrameworks/CalendarFoundation.framework/CalendarFoundation
0x1b29df000 - 0x1b2accfff NLP arm64  <71486dbf3d053dbca7e02a91d351f6b2> /System/Library/PrivateFrameworks/NLP.framework/NLP
0x1b2b51000 - 0x1b2bfdfff libboringssl.dylib arm64  <b0aebbb9a3823b7a8385ff81e39d30b9> /usr/lib/libboringssl.dylib
0x1b2bfe000 - 0x1b2c14fff ProtocolBuffer arm64  <2e5031f669533959b8d9033f1b73109f> /System/Library/PrivateFrameworks/ProtocolBuffer.framework/ProtocolBuffer
0x1b2e7b000 - 0x1b2e89fff AssertionServices arm64  <d9ae3f1476a6308dbe748d10877867bc> /System/Library/PrivateFrameworks/AssertionServices.framework/AssertionServices
0x1b2e8a000 - 0x1b2eb1fff CloudServices arm64  <e33da063feb436ba9113527263f1e1f5> /System/Library/PrivateFrameworks/CloudServices.framework/CloudServices
0x1b2f04000 - 0x1b2fddfff Metal arm64  <41df550eaeb23ad28370a0e6d8e51186> /System/Library/Frameworks/Metal.framework/Metal
0x1b2fde000 - 0x1b3116fff MediaExperience arm64  <2734505d74c530b7ab63f2a51113827b> /System/Library/PrivateFrameworks/MediaExperience.framework/MediaExperience
0x1b3515000 - 0x1b352bfff libsystem_trace.dylib arm64  <3b5f5d25a59c3d7e90bef8d6481d1ca9> /usr/lib/system/libsystem_trace.dylib
0x1b352c000 - 0x1b355cfff CoreServicesInternal arm64  <0219058001383d699625491e9d0270b4> /System/Library/PrivateFrameworks/CoreServicesInternal.framework/CoreServicesInternal
0x1b4106000 - 0x1b41a0fff SAObjects arm64  <8312f76344813d059317ac544b767429> /System/Library/PrivateFrameworks/SAObjects.framework/SAObjects
0x1b41a1000 - 0x1b41e4fff VoiceServices arm64  <848ad3c04fc9303c8b6dbb4bcd78017c> /System/Library/PrivateFrameworks/VoiceServices.framework/VoiceServices
0x1b41e5000 - 0x1b41edfff GraphicsServices arm64  <cd6a7e8664ba3ae9883bde938bf72ddc> /System/Library/PrivateFrameworks/GraphicsServices.framework/GraphicsServices
0x1b43aa000 - 0x1b43befff PowerLog arm64  <0abaa5ff17d53a0ca91cc0fcb1f80af4> /System/Library/PrivateFrameworks/PowerLog.framework/PowerLog
0x1b43bf000 - 0x1b43e6fff DuetActivityScheduler arm64  <50c073e701a6369f875dd154ec5707ce> /System/Library/PrivateFrameworks/DuetActivityScheduler.framework/DuetActivityScheduler
0x1b5d7d000 - 0x1b5de7fff ProactiveSupport arm64  <27fe1c6ca9ae33278e59fd7853deeb9b> /System/Library/PrivateFrameworks/ProactiveSupport.framework/ProactiveSupport
0x1b5e13000 - 0x1b5e30fff ApplePushService arm64  <db969d5ef09f38f2b5efe6ea10b6f53d> /System/Library/PrivateFrameworks/ApplePushService.framework/ApplePushService
0x1b5e31000 - 0x1b5e58fff BoardServices arm64  <64149608191932deadb6334d43352aba> /System/Library/PrivateFrameworks/BoardServices.framework/BoardServices
0x1b5fa8000 - 0x1b5fd7fff libncurses.5.4.dylib arm64  <45c7427247ec38be8f88584d9c979828> /usr/lib/libncurses.5.4.dylib
0x1b5fd8000 - 0x1b6025fff OSAnalytics arm64  <06cdb58103b037bd9623f2788c93bec0> /System/Library/PrivateFrameworks/OSAnalytics.framework/OSAnalytics
0x1b6026000 - 0x1b6081fff CoreBluetooth arm64  <069814f8d9f43907a038a13a0fa694dd> /System/Library/Frameworks/CoreBluetooth.framework/CoreBluetooth
0x1b6293000 - 0x1b62c5fff MobileInstallation arm64  <ffbf6a24d93c374c95705163d9c10301> /System/Library/PrivateFrameworks/MobileInstallation.framework/MobileInstallation
0x1b62c6000 - 0x1b6354fff libTelephonyUtilDynamic.dylib arm64  <d3ceb02492f5309fa5904898682cb14d> /usr/lib/libTelephonyUtilDynamic.dylib
0x1b6355000 - 0x1b63bdfff NanoRegistry arm64  <bca7195fc86d3006bbf6267ed1daa1ab> /System/Library/PrivateFrameworks/NanoRegistry.framework/NanoRegistry
0x1b6499000 - 0x1b64b6fff CoreMaterial arm64  <9004dec242eb3daaa32e9c8a672e3a2d> /System/Library/PrivateFrameworks/CoreMaterial.framework/CoreMaterial
0x1b6527000 - 0x1b66a9fff libsqlite3.dylib arm64  <b527dcac5745350191cf49fc9654e1a7> /usr/lib/libsqlite3.dylib
0x1b66aa000 - 0x1b6768fff AVFCapture arm64  <083b23eb2dc83813817b6f1a40c9ec24> /System/Library/PrivateFrameworks/AVFCapture.framework/AVFCapture
0x1b6769000 - 0x1b6ab1fff CMCapture arm64  <bd2c0fd0b1f9374f9d592b5266446eff> /System/Library/PrivateFrameworks/CMCapture.framework/CMCapture
0x1b6bfc000 - 0x1b6e54fff MobileSpotlightIndex arm64  <aedbc0ccc55c3cef8a03071deeacca89> /System/Library/PrivateFrameworks/MobileSpotlightIndex.framework/MobileSpotlightIndex
0x1b6f15000 - 0x1b6f59fff AccessibilityUIUtilities arm64  <e48445585e663efa9b8d03fb51a111b0> /System/Library/PrivateFrameworks/AccessibilityUIUtilities.framework/AccessibilityUIUtilities
0x1b7269000 - 0x1b7273fff libsystem_notify.dylib arm64  <70ff494d1cc33fcabadd1c308d560be4> /usr/lib/system/libsystem_notify.dylib
0x1b7274000 - 0x1b72b6fff CryptoTokenKit arm64  <6b436ed2f863383d8a9c0e092ad509c8> /System/Library/Frameworks/CryptoTokenKit.framework/CryptoTokenKit
0x1b731e000 - 0x1b7391fff libcorecrypto.dylib arm64  <71eb44aa30653ab783db3c46f4579aba> /usr/lib/system/libcorecrypto.dylib
0x1b7392000 - 0x1b73b4fff UserManagement arm64  <d39a0e5f367e3e589bfd2581a678151f> /System/Library/PrivateFrameworks/UserManagement.framework/UserManagement
0x1b7485000 - 0x1b749bfff libsystem_asl.dylib arm64  <727b6ce7a069389bbe9bbabaa54a6a80> /usr/lib/system/libsystem_asl.dylib
0x1b7707000 - 0x1b773dfff DataAccessExpress arm64  <844e2d8b48aa336f862d35d8ebafc52a> /System/Library/PrivateFrameworks/DataAccessExpress.framework/DataAccessExpress
0x1b773e000 - 0x1b7774fff CoreServicesStore arm64  <3b63de3682393849a845078109be9bc8> /System/Library/PrivateFrameworks/CoreServicesStore.framework/CoreServicesStore
0x1b7775000 - 0x1b7799fff CoreAnalytics arm64  <d100cc918f123448878ee0530486ea6e> /System/Library/PrivateFrameworks/CoreAnalytics.framework/CoreAnalytics
0x1b779a000 - 0x1b77a5fff SymptomAnalytics arm64  <f12bd910f3843b63a0b0fee4f62f157a> /System/Library/PrivateFrameworks/Symptoms.framework/Frameworks/SymptomAnalytics.framework/SymptomAnalytics
0x1b7981000 - 0x1b7990fff NanoPreferencesSync arm64  <35588eb093e033f28619db72e46b13fa> /System/Library/PrivateFrameworks/NanoPreferencesSync.framework/NanoPreferencesSync
0x1b8151000 - 0x1b817bfff IconServices arm64  <6817ef4a91f0384a9ef1fb083e565d6f> /System/Library/PrivateFrameworks/IconServices.framework/IconServices
0x1b8bd8000 - 0x1b8e73fff vImage arm64  <959df3bb96723cd7b5f9fb93a5c7623e> /System/Library/Frameworks/Accelerate.framework/Frameworks/vImage.framework/vImage
0x1b9d42000 - 0x1b9d97fff ktrace arm64  <be11e473ae0a3498bc8a896f919e03ff> /System/Library/PrivateFrameworks/ktrace.framework/ktrace
0x1b9d98000 - 0x1b9d9afff libAXSafeCategoryBundle.dylib arm64  <a045699f2d5e37e9929b8921ce4abdf9> /usr/lib/libAXSafeCategoryBundle.dylib
0x1ba080000 - 0x1ba08dfff Celestial arm64  <878660a5b83a39059539e45b73904dbd> /System/Library/PrivateFrameworks/Celestial.framework/Celestial
0x1ba177000 - 0x1ba2fafff WebKitLegacy arm64  <c376e15a66523294abee29906115d82f> /System/Library/PrivateFrameworks/WebKitLegacy.framework/WebKitLegacy
0x1ba369000 - 0x1ba3dafff ClassKit arm64  <4b7cbe895a353a239e026ca1c29da47d> /System/Library/Frameworks/ClassKit.framework/ClassKit
0x1bb19d000 - 0x1bb1a7fff IOMobileFramebuffer arm64  <7b0b01095440339ea8627dce97bc123e> /System/Library/PrivateFrameworks/IOMobileFramebuffer.framework/IOMobileFramebuffer
0x1bb6fa000 - 0x1bb75efff CallKit arm64  <8bef8304d42131ff97c6e5335fe009da> /System/Library/Frameworks/CallKit.framework/CallKit
0x1bb797000 - 0x1bb7fdfff AXRuntime arm64  <28b3648c432437f78b500ba84b306d7c> /System/Library/PrivateFrameworks/AXRuntime.framework/AXRuntime
0x1bb7fe000 - 0x1bb81cfff PrototypeTools arm64  <6c5b57c08ade33fdbeac79b4e6bfc7ca> /System/Library/PrivateFrameworks/PrototypeTools.framework/PrototypeTools
0x1bb81d000 - 0x1bb848fff PersistentConnection arm64  <c5618aedf8e03be188cb5a1a053668a1> /System/Library/PrivateFrameworks/PersistentConnection.framework/PersistentConnection
0x1bc257000 - 0x1bc272fff TextToSpeech arm64  <9696ace8db0330db8558297c64cf2137> /System/Library/PrivateFrameworks/TextToSpeech.framework/TextToSpeech
0x1bc293000 - 0x1bc2a9fff CoreFollowUp arm64  <85c0e813b8893365b8521e93e85225ba> /System/Library/PrivateFrameworks/CoreFollowUp.framework/CoreFollowUp
0x1bc2aa000 - 0x1bc31efff Rapport arm64  <20a8df4a602e3447a7e7a891171115cb> /System/Library/PrivateFrameworks/Rapport.framework/Rapport
0x1bc6cd000 - 0x1bc6f4fff LocationSupport arm64  <6cd5daba139e3ae29ce10ebeddabb1f6> /System/Library/PrivateFrameworks/LocationSupport.framework/LocationSupport
0x1bc6f5000 - 0x1bc727fff iCalendar arm64  <c764fbd53b8b377fb21a89cfd69eeed6> /System/Library/PrivateFrameworks/iCalendar.framework/iCalendar
0x1bc728000 - 0x1bc751fff CoreAccessories arm64  <aac7f3b1ff073c1693188a35d1907f80> /System/Library/PrivateFrameworks/CoreAccessories.framework/CoreAccessories
0x1bca41000 - 0x1bca43fff OSAServicesClient arm64  <be6b47816dfb3c40a033940f9593bf4e> /System/Library/PrivateFrameworks/OSAServicesClient.framework/OSAServicesClient
0x1bca47000 - 0x1bca9ffff ProtectedCloudStorage arm64  <fde7d5b9f4743fa3ba9f9acf1bb4e138> /System/Library/PrivateFrameworks/ProtectedCloudStorage.framework/ProtectedCloudStorage
0x1bcaa0000 - 0x1bcad6fff C2 arm64  <39450f97cb1b3c4cb3dc1e20446c3c7f> /System/Library/PrivateFrameworks/C2.framework/C2
0x1bd4bc000 - 0x1bd538fff SiriInstrumentation arm64  <6e650b2079de34ab9718072a70070f56> /System/Library/PrivateFrameworks/SiriInstrumentation.framework/SiriInstrumentation
0x1bd539000 - 0x1bd57afff BiometricKit arm64  <3d8fb7ac1b9234af91fd4bbfc2ea1cd4> /System/Library/PrivateFrameworks/BiometricKit.framework/BiometricKit
0x1bd5ba000 - 0x1bd669fff CoreSymbolication arm64  <c6ef8c41fc6f392f8fc82a529fc43c13> /System/Library/PrivateFrameworks/CoreSymbolication.framework/CoreSymbolication
0x1bddeb000 - 0x1bddfcfff IOSurface arm64  <7fda963ffbea30cbb159fa2e6b31a4db> /System/Library/Frameworks/IOSurface.framework/IOSurface
0x1bddfd000 - 0x1bde5dfff MobileWiFi arm64  <103854cf9c3731678ef32bd552daf091> /System/Library/PrivateFrameworks/MobileWiFi.framework/MobileWiFi
0x1be388000 - 0x1be3c1fff libGLImage.dylib arm64  <75799714ceba33b0bb27c252aad3bab5> /System/Library/Frameworks/OpenGLES.framework/libGLImage.dylib
0x1be3c2000 - 0x1be3c9fff libsystem_symptoms.dylib arm64  <a8784ea9ecb939fabdac695877fc2b4b> /usr/lib/system/libsystem_symptoms.dylib
0x1be40f000 - 0x1be9bdfff CoreAudio arm64  <fa62c18234d03964b331be7d6d1ccb66> /System/Library/Frameworks/CoreAudio.framework/CoreAudio
0x1bf068000 - 0x1bf078fff CoreAUC arm64  <771693f7b44e33849049097763f88231> /System/Library/PrivateFrameworks/CoreAUC.framework/CoreAUC
0x1bf88f000 - 0x1bf89ffff SettingsFoundation arm64  <a313bc4b100a356ca9f4ce21342fdd22> /System/Library/PrivateFrameworks/SettingsFoundation.framework/SettingsFoundation
0x1bffbb000 - 0x1c01f9fff RawCamera arm64  <62ca957502d0391686f710d6236faa24> /System/Library/CoreServices/RawCamera.bundle/RawCamera
0x1c0aca000 - 0x1c0ad7fff MediaSafetyNet arm64  <cd283425ee4c3211bcb52517201e51b4> /System/Library/PrivateFrameworks/MediaSafetyNet.framework/MediaSafetyNet
0x1c0ad8000 - 0x1c0b13fff TimeSync arm64  <f8d3ba933f1f332ba9dbf285d0570f31> /System/Library/PrivateFrameworks/TimeSync.framework/TimeSync
0x1c0ba4000 - 0x1c0be6fff ExposureNotification arm64  <2c02287b207b3c1fba903d6bdc1fdd5a> /System/Library/Frameworks/ExposureNotification.framework/ExposureNotification
0x1c1240000 - 0x1c1249fff CoreTime arm64  <c52a0364da873cde8c749272eec9229f> /System/Library/PrivateFrameworks/CoreTime.framework/CoreTime
0x1c1dc9000 - 0x1c1dd2fff ContextKitExtraction arm64  <b7440c0081233e78a888c8f18644d520> /System/Library/PrivateFrameworks/ContextKitExtraction.framework/ContextKitExtraction
0x1c33da000 - 0x1c345bfff CoreDAV arm64  <0cd9f84f3127366f853b1598a093b0a0> /System/Library/PrivateFrameworks/CoreDAV.framework/CoreDAV
0x1c3629000 - 0x1c3637fff MobileIcons arm64  <81d53e0ca7143cf9b0ce9b4c760e6e58> /System/Library/PrivateFrameworks/MobileIcons.framework/MobileIcons
0x1c4bfe000 - 0x1c4c3ffff TextToSpeechBundleSupport arm64  <8edd25ba92be361bab0355ffb6b5fd2c> /System/Library/PrivateFrameworks/TextToSpeech.framework/Frameworks/TextToSpeechBundleSupport.framework/TextToSpeechBundleSupport
0x1c4c40000 - 0x1c4c96fff AccessibilitySharedSupport arm64  <35c53565f3843fff9336734458485035> /System/Library/PrivateFrameworks/AccessibilitySharedSupport.framework/AccessibilitySharedSupport
0x1c4c97000 - 0x1c4ca1fff MallocStackLogging arm64  <1e7b19595ad235ab8db3d24853f509d0> /System/Library/PrivateFrameworks/MallocStackLogging.framework/MallocStackLogging
0x1c4ec3000 - 0x1c4f0dfff MetadataUtilities arm64  <cff738ccb48b3f9f8cb1b3e8ac54f670> /System/Library/PrivateFrameworks/MetadataUtilities.framework/MetadataUtilities
0x1c55d5000 - 0x1c5631fff CoreLocationProtobuf arm64  <f991f00c59a330a2b5cf85341dfcd1e0> /System/Library/PrivateFrameworks/CoreLocationProtobuf.framework/CoreLocationProtobuf
0x1c5836000 - 0x1c5868fff Bom arm64  <f784f41ea458324a8993f2e22980b8d0> /System/Library/PrivateFrameworks/Bom.framework/Bom
0x1c589d000 - 0x1c58a3fff PushKit arm64  <629d513afd1d39948e9baa7bef62158c> /System/Library/Frameworks/PushKit.framework/PushKit
0x1c5a99000 - 0x1c5b2afff Quagga arm64  <4bc295814b4d3775ab2f096a900a0170> /System/Library/PrivateFrameworks/Quagga.framework/Quagga
0x1c5b2b000 - 0x1c5b32fff StudyLog arm64  <f3949f772ab633519faf861338e6a54e> /System/Library/PrivateFrameworks/StudyLog.framework/StudyLog
0x1c7c30000 - 0x1c7c3efff libAXSpeechManager.dylib arm64  <9c9d50a4f41e382cbbceb335699d9ee4> /usr/lib/libAXSpeechManager.dylib
0x1c8b14000 - 0x1c8b1ffff AppleIDAuthSupport arm64  <2a9bb26d66e233538e40004f17d7f566> /System/Library/PrivateFrameworks/AppleIDAuthSupport.framework/AppleIDAuthSupport
0x1c8b2e000 - 0x1c8b45fff LocalAuthentication arm64  <3927c90dbfea3d4ea7b8abf9efeb9c0e> /System/Library/Frameworks/LocalAuthentication.framework/LocalAuthentication
0x1c8bc1000 - 0x1c8bc7fff IOAccelerator arm64  <621e849c8e2c3c6db49982f3b41e651b> /System/Library/PrivateFrameworks/IOAccelerator.framework/IOAccelerator
0x1c941e000 - 0x1c944efff libsystem_kernel.dylib arm64  <782e667e18a23b98b53dbfc9a4a701b7> /usr/lib/system/libsystem_kernel.dylib
0x1c9678000 - 0x1c977ffff ResponseKit arm64  <318164e5c0113eef913bae9a7dd3d180> /System/Library/PrivateFrameworks/ResponseKit.framework/ResponseKit
0x1c9dab000 - 0x1c9db7fff FontServices arm64  <7509db1f15513bf0a08f26c1fdad7402> /System/Library/PrivateFrameworks/FontServices.framework/FontServices
0x1c9f4f000 - 0x1c9f5afff MediaAccessibility arm64  <15d00e0f9516358fac1cd9da9765c7d9> /System/Library/Frameworks/MediaAccessibility.framework/MediaAccessibility
0x1c9f9b000 - 0x1ca567fff SiriTTS arm64  <b9f3838de9153c14a9fbddafcf110d99> /System/Library/PrivateFrameworks/SiriTTS.framework/SiriTTS
0x1ca568000 - 0x1ca576fff SetupAssistantSupport arm64  <b0ddb02f39f03789bacf3da6034ad2f6> /System/Library/PrivateFrameworks/SetupAssistantSupport.framework/SetupAssistantSupport
0x1ca6a3000 - 0x1ca6c7fff NetAppsUtilities arm64  <2d1f24c101963e838a0db8123b76bdd4> /System/Library/PrivateFrameworks/NetAppsUtilities.framework/NetAppsUtilities
0x1cbb5a000 - 0x1cbb66fff libdscsym.dylib arm64  <9f5db760c8853a44a97d4e914ff29b7c> /usr/lib/libdscsym.dylib
0x1cbb67000 - 0x1cbb78fff HangTracer arm64  <3d6174a975e235a7ac1b9f32c012fe6e> /System/Library/PrivateFrameworks/HangTracer.framework/HangTracer
0x1cbd28000 - 0x1cbde0fff SampleAnalysis arm64  <86be1bbba79f302db6e00b2331913fb2> /System/Library/PrivateFrameworks/SampleAnalysis.framework/SampleAnalysis
0x1cbde1000 - 0x1cbe0ffff PlugInKit arm64  <f80231d13a083e069f6bb83c1c9b3547> /System/Library/PrivateFrameworks/PlugInKit.framework/PlugInKit
0x1cbeb6000 - 0x1cbeb7fff libSystem.B.dylib arm64  <e5f9db66e4b23356a77a85581fc5a53b> /usr/lib/libSystem.B.dylib
0x1cc1ab000 - 0x1cc1b6fff MobileActivation arm64  <f1d03af8eb973944be35cfc68cb12b2c> /System/Library/PrivateFrameworks/MobileActivation.framework/MobileActivation
0x1cc1b7000 - 0x1cc20efff CalendarDaemon arm64  <e86ecc263cc239e8a782036383066e33> /System/Library/PrivateFrameworks/CalendarDaemon.framework/CalendarDaemon
0x1cc2fe000 - 0x1cc36cfff libarchive.2.dylib arm64  <18413d66784f300da3c4561400c71387> /usr/lib/libarchive.2.dylib
0x1cc36d000 - 0x1cc390fff libtailspin.dylib arm64  <f3533d550d103fabb9b10eec7dfa4e05> /usr/lib/libtailspin.dylib
0x1cc391000 - 0x1cc7b8fff libBNNS.dylib arm64  <de119b9d804f31278cb31f7112bcb740> /System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/libBNNS.dylib
0x1cc7b9000 - 0x1cc7fbfff SharedUtils arm64  <0768087abd883e2eb569b3c858ba4000> /System/Library/Frameworks/LocalAuthentication.framework/Support/SharedUtils.framework/SharedUtils
0x1ccde0000 - 0x1ccde0fff AVFoundation arm64  <f8002ff211d03465b45f1fc2987a29f5> /System/Library/Frameworks/AVFoundation.framework/AVFoundation
0x1ccde1000 - 0x1ccde1fff Accelerate arm64  <bde1920e04663330981925f223384639> /System/Library/Frameworks/Accelerate.framework/Accelerate
0x1ccde2000 - 0x1cce91fff libBLAS.dylib arm64  <a197cd4937c13706b68f671098eb8715> /System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/libBLAS.dylib
0x1cce92000 - 0x1cd1a4fff libLAPACK.dylib arm64  <1d63ccdb56393c90b5becbbce6f34db2> /System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/libLAPACK.dylib
0x1cd1a5000 - 0x1cd1b9fff libLinearAlgebra.dylib arm64  <13329232954f3fe089cf6e1cdd5d543a> /System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/libLinearAlgebra.dylib
0x1cd1ba000 - 0x1cd1befff libQuadrature.dylib arm64  <b77d93fee773384d9519b20a01b74c7d> /System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/libQuadrature.dylib
0x1cd1bf000 - 0x1cd220fff libSparse.dylib arm64  <a7788c2ef698326e95b4ca8c7948f9c7> /System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/libSparse.dylib
0x1cd221000 - 0x1cd232fff libSparseBLAS.dylib arm64  <f34b469a7df53ae69ab88169d68e2a9a> /System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/libSparseBLAS.dylib
0x1cd233000 - 0x1cd28cfff libvMisc.dylib arm64  <8aec7afc1b8f3dcf9fee134ad2a3770e> /System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/libvMisc.dylib
0x1cd28d000 - 0x1cd28dfff vecLib arm64  <f355034bbf8a3c7fba37476c89a1c65a> /System/Library/Frameworks/Accelerate.framework/Frameworks/vecLib.framework/vecLib
0x1cd28e000 - 0x1cd291fff Accessibility arm64  <bfc9a3158c223118a8ddbb289c779c99> /System/Library/Frameworks/Accessibility.framework/Accessibility
0x1cd4ee000 - 0x1cd558fff CoreMIDI arm64  <89e07f5a8b9e3479841f447393b39608> /System/Library/Frameworks/CoreMIDI.framework/CoreMIDI
0x1cdc6f000 - 0x1cddbbfff MLCompute arm64  <8ba25abc79f43458bc19aebb4d827148> /System/Library/Frameworks/MLCompute.framework/MLCompute
0x1cddfa000 - 0x1cde7ffff MPSImage arm64  <64d5604db9853f08a4e98114f95e492b> /System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSImage.framework/MPSImage
0x1cde80000 - 0x1cdea6fff MPSMatrix arm64  <65e3036d69383594b264f532509489e9> /System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSMatrix.framework/MPSMatrix
0x1cdea7000 - 0x1cdee1fff MPSNDArray arm64  <901774b8dc103b58806943c75ee787c9> /System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSNDArray.framework/MPSNDArray
0x1cdee2000 - 0x1cdf2afff MPSRayIntersector arm64  <b6d08ff4b2be3807b2078a621bcdacbe> /System/Library/Frameworks/MetalPerformanceShaders.framework/Frameworks/MPSRayIntersector.framework/MPSRayIntersector
0x1cdf2b000 - 0x1cdf2bfff MetalPerformanceShaders arm64  <f6806faeb8cf3916a0378198ecdaa2ec> /System/Library/Frameworks/MetalPerformanceShaders.framework/MetalPerformanceShaders
0x1ce2ad000 - 0x1ce2adfff MobileCoreServices arm64  <bfa0b6c247133fb184f5de951ae3fbba> /System/Library/Frameworks/MobileCoreServices.framework/MobileCoreServices
0x1cee9b000 - 0x1ceea3fff OpenGLES arm64  <2d29ed359118362883d70bdf25a9e51e> /System/Library/Frameworks/OpenGLES.framework/OpenGLES
0x1ceea4000 - 0x1ceea5fff libCVMSPluginSupport.dylib arm64  <f66d35163e3e35c983ca87c4c8273fc9> /System/Library/Frameworks/OpenGLES.framework/libCVMSPluginSupport.dylib
0x1ceea6000 - 0x1ceeacfff libCoreFSCache.dylib arm64  <6cbb64ef7d82358bbd575e7a81b01d15> /System/Library/Frameworks/OpenGLES.framework/libCoreFSCache.dylib
0x1ceead000 - 0x1ceeb2fff libCoreVMClient.dylib arm64  <e44e37af31953c17a2a761afcb749a0d> /System/Library/Frameworks/OpenGLES.framework/libCoreVMClient.dylib
0x1ceeb3000 - 0x1ceebbfff libGFXShared.dylib arm64  <4a8cb86b485d30d895b71b31037f27a9> /System/Library/Frameworks/OpenGLES.framework/libGFXShared.dylib
0x1cf138000 - 0x1cf173fff QuickLookThumbnailing arm64  <6d444c79b7a23bde9a1dea12ce37059f> /System/Library/Frameworks/QuickLookThumbnailing.framework/QuickLookThumbnailing
0x1cfa63000 - 0x1cfa63fff UIKit arm64  <47bbaf689ec535c19be50cff5e4c117a> /System/Library/Frameworks/UIKit.framework/UIKit
0x1d0c46000 - 0x1d0c49fff AFKUser arm64  <7d097be2f1903de8bc8a1232e31fe72e> /System/Library/PrivateFrameworks/AFKUser.framework/AFKUser
0x1d0d09000 - 0x1d0f88fff ANECompiler arm64  <537d2cd0f1493152b7fbf3543a3f149d> /System/Library/PrivateFrameworks/ANECompiler.framework/ANECompiler
0x1d0f89000 - 0x1d0f9cfff ANEServices arm64  <f5d90acd9dd93dd0b83d866123302eae> /System/Library/PrivateFrameworks/ANEServices.framework/ANEServices
0x1d0fa1000 - 0x1d105dfff APFS arm64  <40d24862c7d53be8add0ccd931a09d8d> /System/Library/PrivateFrameworks/APFS.framework/APFS
0x1d105e000 - 0x1d1064fff ASEProcessing arm64  <14daea38c3cb3811aef5705c535f6ead> /System/Library/PrivateFrameworks/ASEProcessing.framework/ASEProcessing
0x1d184f000 - 0x1d1854fff AggregateDictionary arm64  <160d27e0b8bf392890d79964209c1598> /System/Library/PrivateFrameworks/AggregateDictionary.framework/AggregateDictionary
0x1d19dd000 - 0x1d1ab6fff AirPlaySync arm64  <19e9b2db396d33acaa0b7e41d566281f> /System/Library/PrivateFrameworks/AirPlaySync.framework/AirPlaySync
0x1d1bbd000 - 0x1d1bd8fff AlgosScoreFramework arm64  <87b80542e8c035aa96fcc05e0d823f54> /System/Library/PrivateFrameworks/AlgosScoreFramework.framework/AlgosScoreFramework
0x1d1cfd000 - 0x1d1e7dfff AppC3D arm64  <c8693892a62e33bbbda152f59d1902aa> /System/Library/PrivateFrameworks/AppC3D.framework/AppC3D
0x1d1e7e000 - 0x1d1e9ffff AppConduit arm64  <48909dbef5db3cdaac09f001a737bd6a> /System/Library/PrivateFrameworks/AppConduit.framework/AppConduit
0x1d303b000 - 0x1d304afff AppleFSCompression arm64  <66fd9b986a0f35a89548af635d08f82e> /System/Library/PrivateFrameworks/AppleFSCompression.framework/AppleFSCompression
0x1d3057000 - 0x1d3064fff AppleIDSSOAuthentication arm64  <7ee049db1242364c90efb23250268da9> /System/Library/PrivateFrameworks/AppleIDSSOAuthentication.framework/AppleIDSSOAuthentication
0x1d3065000 - 0x1d30a9fff AppleJPEG arm64  <0ba0b8a9a23334f5b0826e2d3aba1a73> /System/Library/PrivateFrameworks/AppleJPEG.framework/AppleJPEG
0x1d312a000 - 0x1d313efff AppleNeuralEngine arm64  <01c6a71b88763f18884d2f42eb782349> /System/Library/PrivateFrameworks/AppleNeuralEngine.framework/AppleNeuralEngine
0x1d3142000 - 0x1d3147fff AppleSRP arm64  <b12af43856753d7db23525c550429bf3> /System/Library/PrivateFrameworks/AppleSRP.framework/AppleSRP
0x1d3148000 - 0x1d316bfff AppleSauce arm64  <b9f5e84ad67b34f296e5e0600c6f1b68> /System/Library/PrivateFrameworks/AppleSauce.framework/AppleSauce
0x1d36b7000 - 0x1d36c6fff BluetoothManager arm64  <bdd5938989a73c77be07990f80e2815b> /System/Library/PrivateFrameworks/BluetoothManager.framework/BluetoothManager
0x1d375d000 - 0x1d376dfff BrailleTranslation arm64  <cf0519f620bc37178da24152be80558f> /System/Library/PrivateFrameworks/BrailleTranslation.framework/BrailleTranslation
0x1d3954000 - 0x1d395efff CMCaptureCore arm64  <4d06b990b5b03e7cad76affda59f88c8> /System/Library/PrivateFrameworks/CMCaptureCore.framework/CMCaptureCore
0x1d3978000 - 0x1d3987fff CPMS arm64  <67f02bba4ea830908e4da26d63a0e2e1> /System/Library/PrivateFrameworks/CPMS.framework/CPMS
0x1d3c9b000 - 0x1d3ca6fff CaptiveNetwork arm64  <c8de13a5aee7337e9428da1ec3d628ee> /System/Library/PrivateFrameworks/CaptiveNetwork.framework/CaptiveNetwork
0x1d3e21000 - 0x1d3e42fff CellularPlanManager arm64  <0d28ad67792931c481a9764a4bfa7c10> /System/Library/PrivateFrameworks/CellularPlanManager.framework/CellularPlanManager
0x1d3e6c000 - 0x1d3ebafff ChunkingLibrary arm64  <ab2bc3e0369c3774a0428430e906ea3a> /System/Library/PrivateFrameworks/ChunkingLibrary.framework/ChunkingLibrary
0x1d4373000 - 0x1d4376fff ConstantClasses arm64  <1f00f281b08c30d6992cf2ee62aa8436> /System/Library/PrivateFrameworks/ConstantClasses.framework/ConstantClasses
0x1d45b2000 - 0x1d46a6fff CoreBrightness arm64  <2532db24c7ab363184c06139be8c4221> /System/Library/PrivateFrameworks/CoreBrightness.framework/CoreBrightness
0x1d4710000 - 0x1d471ffff CoreDuetDaemonProtocol arm64  <59a2e9bb08353105a9b7b9a10dae962c> /System/Library/PrivateFrameworks/CoreDuetDaemonProtocol.framework/CoreDuetDaemonProtocol
0x1d4722000 - 0x1d4724fff CoreDuetDebugLogging arm64  <98e92a87390133ef9e58de5ceea05f6b> /System/Library/PrivateFrameworks/CoreDuetDebugLogging.framework/CoreDuetDebugLogging
0x1d4733000 - 0x1d4745fff CoreEmoji arm64  <b4e09d4d1f2d307d8f9040dd1d15b7a7> /System/Library/PrivateFrameworks/CoreEmoji.framework/CoreEmoji
0x1d4e07000 - 0x1d4e0ffff CorePhoneNumbers arm64  <3d0bf6c8aeed3a2f8a67ef6f007fd0f9> /System/Library/PrivateFrameworks/CorePhoneNumbers.framework/CorePhoneNumbers
0x1d57ef000 - 0x1d5817fff CoreSVG arm64  <5627aa5fc04b33b3964bd022911d935f> /System/Library/PrivateFrameworks/CoreSVG.framework/CoreSVG
0x1d5a1f000 - 0x1d5a5bfff DataDetectorsNaturalLanguage arm64  <dae18bb9f72f313ab0eaf2ebde31f6da> /System/Library/PrivateFrameworks/DataDetectorsNaturalLanguage.framework/DataDetectorsNaturalLanguage
0x1d5abe000 - 0x1d5aebfff DeviceIdentity arm64  <6d1af53e8b693e288468631fbd00b950> /System/Library/PrivateFrameworks/DeviceIdentity.framework/DeviceIdentity
0x1d5d69000 - 0x1d5da3fff DocumentManager arm64  <1771c51062f13f279ae6897e82c74e98> /System/Library/PrivateFrameworks/DocumentManager.framework/DocumentManager
0x1d5da4000 - 0x1d5dc2fff DocumentManagerCore arm64  <1fcbb774e3bf3f9aab928be0c8f8c0f7> /System/Library/PrivateFrameworks/DocumentManagerCore.framework/DocumentManagerCore
0x1d5e45000 - 0x1d5e47fff DragUI arm64  <3cc91d51bb12388798d573a258a3fe62> /System/Library/PrivateFrameworks/DragUI.framework/DragUI
0x1d5e76000 - 0x1d5ea6fff EAP8021X arm64  <09e38332fc803a56a2d549515b513438> /System/Library/PrivateFrameworks/EAP8021X.framework/EAP8021X
0x1d5ed5000 - 0x1d5ee9fff Engram arm64  <4fc44ec8d76538a7975845ace2acb0f8> /System/Library/PrivateFrameworks/Engram.framework/Engram
0x1d6022000 - 0x1d6029fff ExtensionFoundation arm64  <3ebbdfefbba9305281c1500985d40a31> /System/Library/PrivateFrameworks/ExtensionFoundation.framework/ExtensionFoundation
0x1d61cf000 - 0x1d65e1fff FaceCore arm64  <a383e5cc791a35f79b37228880430bab> /System/Library/PrivateFrameworks/FaceCore.framework/FaceCore
0x1d65ea000 - 0x1d65effff FeatureFlagsSupport arm64  <32727b32730c30ac9b1cc7c66a65d115> /System/Library/PrivateFrameworks/FeatureFlagsSupport.framework/FeatureFlagsSupport
0x1d6786000 - 0x1d68c2fff libFontParser.dylib arm64  <b73b77070b9c3e1e932130c80b2865c4> /System/Library/PrivateFrameworks/FontServices.framework/libFontParser.dylib
0x1d68c3000 - 0x1d68cbfff libGSFont.dylib arm64  <2ef6a22edd0f3841b9231adb6238eaaa> /System/Library/PrivateFrameworks/FontServices.framework/libGSFont.dylib
0x1d68cc000 - 0x1d6909fff libGSFontCache.dylib arm64  <78f92f58984e330ab9e833f45e117a1a> /System/Library/PrivateFrameworks/FontServices.framework/libGSFontCache.dylib
0x1d696c000 - 0x1d6979fff libhvf.dylib arm64  <043252185d81311bae37520f37b4c220> /System/Library/PrivateFrameworks/FontServices.framework/libhvf.dylib
0x1d7505000 - 0x1d7505fff libmetal_timestamp.dylib arm64  <0043ab06bbfd37e8a9638477dc4fbebd> /System/Library/PrivateFrameworks/GPUCompiler.framework/Libraries/libmetal_timestamp.dylib
0x1d75e3000 - 0x1d7601fff GenerationalStorage arm64  <4efd79617a053e558ec72998ce9f3b54> /System/Library/PrivateFrameworks/GenerationalStorage.framework/GenerationalStorage
0x1d7602000 - 0x1d760ffff GraphVisualizer arm64  <47e41fb3df39361780aa876f8c79992d> /System/Library/PrivateFrameworks/GraphVisualizer.framework/GraphVisualizer
0x1d763c000 - 0x1d7647fff HID arm64  <0f1120a7a4eb3be6b5967fee586fe8df> /System/Library/PrivateFrameworks/HID.framework/HID
0x1d8074000 - 0x1d8092fff IOGPU arm64  <86cf905e07663916b47d4eb584a3ddbd> /System/Library/PrivateFrameworks/IOGPU.framework/IOGPU
0x1d8094000 - 0x1d809dfff IOKitten arm64  <a897be5491b5328a8ce30733e7aae3b1> /System/Library/PrivateFrameworks/IOKitten.framework/IOKitten
0x1d809e000 - 0x1d80a0fff IOSurfaceAccelerator arm64  <53b6e7225abe3aed8c511498043e9a83> /System/Library/PrivateFrameworks/IOSurfaceAccelerator.framework/IOSurfaceAccelerator
0x1d80c9000 - 0x1d80d0fff IdleTimerServices arm64  <635fedb6cdd53dbc982fe7874475a0a4> /System/Library/PrivateFrameworks/IdleTimerServices.framework/IdleTimerServices
0x1d819c000 - 0x1d81a8fff IntentsFoundation arm64  <434df45e86903166b50db613ce4fc253> /System/Library/PrivateFrameworks/IntentsFoundation.framework/IntentsFoundation
0x1d81c2000 - 0x1d81c5fff InternationalTextSearch arm64  <f5f3c04464833759becb23a3c9017a2b> /System/Library/PrivateFrameworks/InternationalTextSearch.framework/InternationalTextSearch
0x1d81c6000 - 0x1d81e2fff IntlPreferences arm64  <c200865b4dab3fe1897f43b1a18a8e3e> /System/Library/PrivateFrameworks/IntlPreferences.framework/IntlPreferences
0x1d8444000 - 0x1d844afff LinguisticData arm64  <6df0f7029cf83ab78e2974667fa344bb> /System/Library/PrivateFrameworks/LinguisticData.framework/LinguisticData
0x1d868e000 - 0x1d868efff Marco arm64  <25e28d1a0ad03263b1430ae76108a01f> /System/Library/PrivateFrameworks/Marco.framework/Marco
0x1d9106000 - 0x1d91cefff MetalTools arm64  <862bc9f3d56036708ba61f3e9968f691> /System/Library/PrivateFrameworks/MetalTools.framework/MetalTools
0x1d9259000 - 0x1d926dfff MobileBluetooth arm64  <b8a53279dc9b37b68bcdbf1a3b83a8d4> /System/Library/PrivateFrameworks/MobileBluetooth.framework/MobileBluetooth
0x1d92ee000 - 0x1d92f4fff MobileSystemServices arm64  <750000f9b53b32aab0829926b3db8a72> /System/Library/PrivateFrameworks/MobileSystemServices.framework/MobileSystemServices
0x1d9687000 - 0x1d968dfff Netrb arm64  <29c4389d7cfd34e5b99703cefcd9dcc0> /System/Library/PrivateFrameworks/Netrb.framework/Netrb
0x1d9749000 - 0x1d9762fff NetworkStatistics arm64  <aa622e390c17326d809568719bae2e16> /System/Library/PrivateFrameworks/NetworkStatistics.framework/NetworkStatistics
0x1d983a000 - 0x1d987afff OTSVG arm64  <d86e3d10ea8b398c9d4d3c1090ad4283> /System/Library/PrivateFrameworks/OTSVG.framework/OTSVG
0x1d9e87000 - 0x1d9eaffff Pasteboard arm64  <b1c5f78d24be3091bf6553489d59ca0a> /System/Library/PrivateFrameworks/Pasteboard.framework/Pasteboard
0x1d9ede000 - 0x1d9ee9fff PersonaKit arm64  <6d5252a8d94733f3a05f088b1b93a3e2> /System/Library/PrivateFrameworks/PersonaKit.framework/PersonaKit
0x1d9f2e000 - 0x1d9f2efff PhoneNumbers arm64  <033646e6657b384da25bb574ad670d33> /System/Library/PrivateFrameworks/PhoneNumbers.framework/PhoneNumbers
0x1da131000 - 0x1da17cfff PhysicsKit arm64  <e5dd8ff53ce6340387dda862db33072a> /System/Library/PrivateFrameworks/PhysicsKit.framework/PhysicsKit
0x1da232000 - 0x1da23dfff PointerUIServices arm64  <52f228f35cfd393b8db1fe2dac17a76d> /System/Library/PrivateFrameworks/PointerUIServices.framework/PointerUIServices
0x1db6a7000 - 0x1db6b1fff RTCReporting arm64  <0cd8532917a73d30829400c610178428> /System/Library/PrivateFrameworks/RTCReporting.framework/RTCReporting
0x1db9dd000 - 0x1db9eefff RemoteTextInput arm64  <1ac5e291220c336dbe1334e563edb33c> /System/Library/PrivateFrameworks/RemoteTextInput.framework/RemoteTextInput
0x1dbf8c000 - 0x1dbfbffff ScreenReaderCore arm64  <b4df9c6fc120309ebfc0dc45722634ab> /System/Library/PrivateFrameworks/ScreenReaderCore.framework/ScreenReaderCore
0x1dbfc0000 - 0x1dc004fff ScreenReaderOutput arm64  <a784f9d42bab3d34983b5851babbfbf0> /System/Library/PrivateFrameworks/ScreenReaderOutput.framework/ScreenReaderOutput
0x1dd2a5000 - 0x1dd2aefff SignpostCollection arm64  <0c0d6de66e303f9eb166daccb6234d82> /System/Library/PrivateFrameworks/SignpostCollection.framework/SignpostCollection
0x1dd2af000 - 0x1dd2affff SignpostMetrics arm64  <fc1c6c2fe12e35b180c4b3d19254f5c8> /System/Library/PrivateFrameworks/SignpostMetrics.framework/SignpostMetrics
0x1dd2b1000 - 0x1dd2f0fff SignpostSupport arm64  <8bed968fb1af3ababc53f1e70012017c> /System/Library/PrivateFrameworks/SignpostSupport.framework/SignpostSupport
0x1ddd40000 - 0x1ddd40fff SoftLinking arm64  <c6f60c337d6a346887633bc0533fffe8> /System/Library/PrivateFrameworks/SoftLinking.framework/SoftLinking
0x1de229000 - 0x1de266fff StreamingZip arm64  <6fe0c0f46555332a9a757cc720fb19f2> /System/Library/PrivateFrameworks/StreamingZip.framework/StreamingZip
0x1de26e000 - 0x1de278fff SymptomDiagnosticReporter arm64  <e9978768b054338e98036a6ae96fa632> /System/Library/PrivateFrameworks/SymptomDiagnosticReporter.framework/SymptomDiagnosticReporter
0x1de2a8000 - 0x1de2c3fff SymptomPresentationFeed arm64  <0a07c9952a7a3e4d9c84dedf7388a5ab> /System/Library/PrivateFrameworks/Symptoms.framework/Frameworks/SymptomPresentationFeed.framework/SymptomPresentationFeed
0x1de2ff000 - 0x1de30efff TCC arm64  <0d0d2d7395a93c9a8b373fd5213a4599> /System/Library/PrivateFrameworks/TCC.framework/TCC
0x1debc2000 - 0x1dec74fff TextureIO arm64  <fcc0fb2034333a79a92eb71bf4e450c4> /System/Library/PrivateFrameworks/TextureIO.framework/TextureIO
0x1dee8f000 - 0x1dee96fff URLFormatting arm64  <b1f9795ed4533685b7adf32e1669c9c9> /System/Library/PrivateFrameworks/URLFormatting.framework/URLFormatting
0x1dff2b000 - 0x1dff64fff VoiceOverServices arm64  <6e56230d59e63a3db13a61c12802893c> /System/Library/PrivateFrameworks/VoiceOverServices.framework/VoiceOverServices
0x1e00f2000 - 0x1e00f3fff WatchdogClient arm64  <ad902dfa3b0534f89ac361090eb939f8> /System/Library/PrivateFrameworks/WatchdogClient.framework/WatchdogClient
0x1e03b9000 - 0x1e0ae2fff libwebrtc.dylib arm64  <2f61036ba2c13fbdbf7a598219d01655> /System/Library/PrivateFrameworks/WebCore.framework/Frameworks/libwebrtc.dylib
0x1e107a000 - 0x1e107dfff XCTTargetBootstrap arm64  <9b53382f09623e469ec4309c770d8e9b> /System/Library/PrivateFrameworks/XCTTargetBootstrap.framework/XCTTargetBootstrap
0x1e10fb000 - 0x1e111afff caulk arm64  <29c23553b07138da822512e4c786fd0b> /System/Library/PrivateFrameworks/caulk.framework/caulk
0x1e3551000 - 0x1e3556fff kperf arm64  <a87b47b31c453edcbc06608aad4e1f2f> /System/Library/PrivateFrameworks/kperf.framework/kperf
0x1e3557000 - 0x1e355ffff kperfdata arm64  <29c8351426e8352286f38721ac110583> /System/Library/PrivateFrameworks/kperfdata.framework/kperfdata
0x1e3560000 - 0x1e3576fff libEDR arm64  <248a440c345c371eb4d96cee0454c5ed> /System/Library/PrivateFrameworks/libEDR.framework/libEDR
0x1e3592000 - 0x1e35a2fff perfdata arm64  <6c420d6e89063f4d8b578abe010aadce> /System/Library/PrivateFrameworks/perfdata.framework/perfdata
0x1e35a3000 - 0x1e35d1fff vCard arm64  <3c88448f18f53483875d27897aa1a0e5> /System/Library/PrivateFrameworks/vCard.framework/vCard
0x1e3ed6000 - 0x1e3f0ffff libAWDSupport.dylib arm64  <5d0c5a9028643e759ed595483b16d443> /usr/lib/libAWDSupport.dylib
0x1e443e000 - 0x1e444dfff libAudioStatistics.dylib arm64  <4d9a4f00a6ea3b789692b1dc1daf0581> /usr/lib/libAudioStatistics.dylib
0x1e45ee000 - 0x1e4620fff libCRFSuite.dylib arm64  <9941a443e4f838ae8681ead891f70bcd> /usr/lib/libCRFSuite.dylib
0x1e4621000 - 0x1e4622fff libCTGreenTeaLogger.dylib arm64  <9704e9662824353db456ba507dbe2918> /usr/lib/libCTGreenTeaLogger.dylib
0x1e4623000 - 0x1e462dfff libChineseTokenizer.dylib arm64  <39db8a7343503bffabf6ab549ece9f36> /usr/lib/libChineseTokenizer.dylib
0x1e46b1000 - 0x1e4866fff libFosl_dynamic.dylib arm64  <7c485c4206c439f2a4408239c39b1cf9> /usr/lib/libFosl_dynamic.dylib
0x1e48cb000 - 0x1e48d2fff libIOReport.dylib arm64  <745c23f071253c0786f2aab106092cc0> /usr/lib/libIOReport.dylib
0x1e4949000 - 0x1e4950fff libMatch.1.dylib arm64  <22c1f3bf3d613b67836be8fad9e315f1> /usr/lib/libMatch.1.dylib
0x1e4a6f000 - 0x1e4a74fff libThaiTokenizer.dylib arm64  <cc481b9eba013ea79b077e09a5326728> /usr/lib/libThaiTokenizer.dylib
0x1e4cde000 - 0x1e4ce0fff libapp_launch_measurement.dylib arm64  <2dfc3dd9565a3b978c47548f95b07930> /usr/lib/libapp_launch_measurement.dylib
0x1e4ce1000 - 0x1e4cf7fff libapple_nghttp2.dylib arm64  <5d86842d169c33a89224b69e440a3c3b> /usr/lib/libapple_nghttp2.dylib
0x1e4cf8000 - 0x1e4d89fff libate.dylib arm64  <55c9e37f4ef53b538887395a557d66a2> /usr/lib/libate.dylib
0x1e4e1a000 - 0x1e4e2afff libbsm.0.dylib arm64  <52fca02e09b9327aa20070b0aa390d6f> /usr/lib/libbsm.0.dylib
0x1e4e2b000 - 0x1e4e37fff libbz2.1.0.dylib arm64  <a4bef41eaf2d3096b10e03543215e590> /usr/lib/libbz2.1.0.dylib
0x1e4e38000 - 0x1e4e38fff libcharset.1.dylib arm64  <d1407b956f813959adeb1916c10d0246> /usr/lib/libcharset.1.dylib
0x1e4e39000 - 0x1e4e4afff libcmph.dylib arm64  <cd8b8030074433459087efbcda7cf3c9> /usr/lib/libcmph.dylib
0x1e4e4b000 - 0x1e4e62fff libcompression.dylib arm64  <b1091ad13282317ab94c5f10b27bc38b> /usr/lib/libcompression.dylib
0x1e4e63000 - 0x1e4e78fff libcoretls.dylib arm64  <fd453c0f190235fa927f26074a321f94> /usr/lib/libcoretls.dylib
0x1e4e79000 - 0x1e4e7afff libcoretls_cfhelpers.dylib arm64  <e6a8fbb7cc9a3765b3d5d221473ec61b> /usr/lib/libcoretls_cfhelpers.dylib
0x1e4e9e000 - 0x1e4ea4fff libcupolicy.dylib arm64  <c3a259ce6cd738ab8cb07006e453f368> /usr/lib/libcupolicy.dylib
0x1e4ea5000 - 0x1e4eacfff libdns_services.dylib arm64  <5cc5a34dda1d386d942f3e0c6f2646a2> /usr/lib/libdns_services.dylib
0x1e4ead000 - 0x1e4ec9fff libedit.3.dylib arm64  <272002fc1f6d3f378b34b0c563e21a7d> /usr/lib/libedit.3.dylib
0x1e4eca000 - 0x1e4ecafff libenergytrace.dylib arm64  <46735b4c5f63362d85a954ed4d7e2ec5> /usr/lib/libenergytrace.dylib
0x1e4ecb000 - 0x1e4ee2fff libexpat.1.dylib arm64  <12c25f34e3e23564a23d18c6e3436959> /usr/lib/libexpat.1.dylib
0x1e4f0f000 - 0x1e4f13fff libgermantok.dylib arm64  <c9eb0c8a1ff83c4d8cd4cf4639dcefb2> /usr/lib/libgermantok.dylib
0x1e4f14000 - 0x1e4f19fff libheimdal-asn1.dylib arm64  <68eb7e8d5b5b3b699bb87be9bfcbfd73> /usr/lib/libheimdal-asn1.dylib
0x1e4f1a000 - 0x1e500bfff libiconv.2.dylib arm64  <fc828c3175243d09947fd18cc3e533dd> /usr/lib/libiconv.2.dylib
0x1e5029000 - 0x1e502afff liblangid.dylib arm64  <489b3d68c72e3f548460346addb44ab9> /usr/lib/liblangid.dylib
0x1e502b000 - 0x1e5036fff liblockdown.dylib arm64  <6d709be7308d3b6cb53407f33f38cae9> /usr/lib/liblockdown.dylib
0x1e5037000 - 0x1e504ffff liblzma.5.dylib arm64  <0b23d81e57c4385a9913f37227928f1f> /usr/lib/liblzma.5.dylib
0x1e507d000 - 0x1e50d0fff libmecab.dylib arm64  <6f0eca87b67d3174a210e4eb5cb07801> /usr/lib/libmecab.dylib
0x1e52fa000 - 0x1e530cfff libmis.dylib arm64  <813ef02a17183c11a18754d6d6a9af8e> /usr/lib/libmis.dylib
0x1e530d000 - 0x1e5322fff libnetworkextension.dylib arm64  <97a62716f2b33820a6e29a3594671e3a> /usr/lib/libnetworkextension.dylib
0x1e56c3000 - 0x1e56f6fff libpcap.A.dylib arm64  <01703bd2e1ec36b0abcd18525e2ef324> /usr/lib/libpcap.A.dylib
0x1e56f7000 - 0x1e5704fff libperfcheck.dylib arm64  <5dd71703dd22376f9dcbf6a7aadb9e3f> /usr/lib/libperfcheck.dylib
0x1e570c000 - 0x1e571dfff libprequelite.dylib arm64  <81b60574ae623d7b8171cebe82ca4714> /usr/lib/libprequelite.dylib
0x1e571e000 - 0x1e572ffff libprotobuf-lite.dylib arm64  <a527bca9c8bf3d5ba0c04a8ea7eb52c8> /usr/lib/libprotobuf-lite.dylib
0x1e5730000 - 0x1e578efff libprotobuf.dylib arm64  <140a54c11a673b7aa770b96d6481a403> /usr/lib/libprotobuf.dylib
0x1e57ed000 - 0x1e5804fff libresolv.9.dylib arm64  <9773b08718c33a99ac4b15845c8f298e> /usr/lib/libresolv.9.dylib
0x1e5805000 - 0x1e5807fff libsandbox.1.dylib arm64  <cdf2d744d04f39c28489f3d37dd3661c> /usr/lib/libsandbox.1.dylib
0x1e584f000 - 0x1e5852fff libutil.dylib arm64  <70719b73b88237f4845bba0cfd47d0b8> /usr/lib/libutil.dylib
0x1e5853000 - 0x1e5938fff libxml2.2.dylib arm64  <9582604ace4f37ceaf1b82e09802c758> /usr/lib/libxml2.2.dylib
0x1e5966000 - 0x1e5977fff libz.1.dylib arm64  <b092ede41efe3c449945692ce1ae0330> /usr/lib/libz.1.dylib
0x1e5ba4000 - 0x1e5ba9fff libcache.dylib arm64  <30242f393dfc3ff0895dd44af38c0144> /usr/lib/system/libcache.dylib
0x1e5baa000 - 0x1e5bb6fff libcommonCrypto.dylib arm64  <2a0ee79a584035948139f436f5a54a6f> /usr/lib/system/libcommonCrypto.dylib
0x1e5bb7000 - 0x1e5bbbfff libcompiler_rt.dylib arm64  <46cd45524d2f31e69b0254e7e576df05> /usr/lib/system/libcompiler_rt.dylib
0x1e5bbc000 - 0x1e5bc4fff libcopyfile.dylib arm64  <acb48771dc88397aa68a726bf75940db> /usr/lib/system/libcopyfile.dylib
0x1e5caa000 - 0x1e5caafff liblaunch.dylib arm64  <ac7e574f727a3707a3324343b867bdd4> /usr/lib/system/liblaunch.dylib
0x1e5cab000 - 0x1e5cb0fff libmacho.dylib arm64  <128a2b0392743d6ba667ad41272431df> /usr/lib/system/libmacho.dylib
0x1e5cb1000 - 0x1e5cb3fff libremovefile.dylib arm64  <183025eaf37f382a807c0f093eb64763> /usr/lib/system/libremovefile.dylib
0x1e5cb4000 - 0x1e5cb5fff libsystem_blocks.dylib arm64  <f56d3126f752364e9279c1ffefd4caa9> /usr/lib/system/libsystem_blocks.dylib
0x1e5cb6000 - 0x1e5cb8fff libsystem_collections.dylib arm64  <a40362865b223915805e584bdf7e0340> /usr/lib/system/libsystem_collections.dylib
0x1e5cb9000 - 0x1e5cbdfff libsystem_configuration.dylib arm64  <22243418a82c37ef8b87485b1729b7d4> /usr/lib/system/libsystem_configuration.dylib
0x1e5cbe000 - 0x1e5cd0fff libsystem_containermanager.dylib arm64  <10a4edbfecdd36f7ae8f29014d50852c> /usr/lib/system/libsystem_containermanager.dylib
0x1e5cd1000 - 0x1e5cd2fff libsystem_coreservices.dylib arm64  <773e2e00690533499d66a10059933ded> /usr/lib/system/libsystem_coreservices.dylib
0x1e5cd3000 - 0x1e5cdcfff libsystem_darwin.dylib arm64  <a453301a5572313fac30531deae896f8> /usr/lib/system/libsystem_darwin.dylib
0x1e5cdd000 - 0x1e5ce5fff libsystem_dnssd.dylib arm64  <f18dcdedb893302eb8bb71c8a42741cc> /usr/lib/system/libsystem_dnssd.dylib
0x1e5ce6000 - 0x1e5ce8fff libsystem_featureflags.dylib arm64  <d00a671cf5623df68441f169da31255b> /usr/lib/system/libsystem_featureflags.dylib
0x1e5ce9000 - 0x1e5d16fff libsystem_m.dylib arm64  <47a923f776ad3214bc1f34051c03b2ee> /usr/lib/system/libsystem_m.dylib
0x1e5d17000 - 0x1e5d21fff libsystem_platform.dylib arm64  <3a71914ac2a73514b519df319e7a6e02> /usr/lib/system/libsystem_platform.dylib
0x1e5d22000 - 0x1e5d22fff libsystem_product_info_filter.dylib arm64  <2e2a22f0761b3e62b35376926358512e> /usr/lib/system/libsystem_product_info_filter.dylib
0x1e5d23000 - 0x1e5d32fff libsystem_pthread.dylib arm64  <cd2075ff948b313a8a02e2ad1e676a74> /usr/lib/system/libsystem_pthread.dylib
0x1e5d33000 - 0x1e5d36fff libsystem_sandbox.dylib arm64  <638b844721573f9a88c922612525e4ca> /usr/lib/system/libsystem_sandbox.dylib
0x1e5d37000 - 0x1e5d40fff libunwind.dylib arm64  <07bd6c4f43053e0191dc30c05754da0c> /usr/lib/system/libunwind.dylib
0x1e5d41000 - 0x1e5d73fff libxpc.dylib arm64  <9b754030d4b638148840d3dac9c54212> /usr/lib/system/libxpc.dylib
0x1e5e22000 - 0x1e5e3afff AccessibilitySettingsLoader arm64  <681f9452ef7134f494752a42ce4606a9> /System/Library/AccessibilityBundles/AccessibilitySettingsLoader.bundle/AccessibilitySettingsLoader
0x1e6ce3000 - 0x1e6de2fff AGXMetalA10 arm64  <65afa27898903cacb76aa744e81ae0b7> /System/Library/Extensions/AGXMetalA10.bundle/AGXMetalA10
0x1e7b1e000 - 0x1e7b30fff SpotlightLinguistics arm64  <8d5151c3bcb131158c230645e5af4066> /System/Library/PrivateFrameworks/SpotlightLinguistics.framework/SpotlightLinguistics

EOF{"app_name":"AirPort","timestamp":"2021-04-17 02:47:54.00 -0700","app_version":"1.3.6","slice_uuid":"FBF5B1AB-7209-382D-9B4B-4B3816A641EB","adam_id":427276530,"build_version":"136.3","bundleID":"com.apple.airport.mobileairportutility","share_with_app_devs":1,"is_first_party":0,"bug_type":"202","os_version":"iPhone OS 14.4.2 (18D70)","incident_id":"F6616980-3455-4A1C-909B-B4E1094B76C0","name":"AirPort"}
Date/Time:        2021-04-17 02:45:17.497 -0700
End time:         2021-04-17 02:47:53.309 -0700
OS Version:       iPhone OS 14.4.2 (Build 18D70)
Architecture:     arm64
Report Version:   32
Incident Identifier: F6616980-3455-4A1C-909B-B4E1094B76C0
Share With Devs:  Yes

Data Source:      Microstackshots
Shared Cache:     A1B49F5A-B8C8-32A5-BD8D-EB936DFCE5CB slid base address 0x1975c4000, slide 0x175c4000

Command:          AirPort
Path:             /private/var/containers/Bundle/Application/8CD1FFF7-A7B0-4947-ACD8-A77D39896A10/AirPort.app/AirPort
Identifier:       com.apple.airport.mobileairportutility
Version:          1.3.6 (136.3)
Adam ID:          427276530
Is First Party:   No
Beta Identifier:  02A490E5-C46B-48D4-9044-BC75D8566997
Parent:           UNKNOWN [1]
PID:              251

Event:            cpu usage
Action taken:     none
CPU:              90 seconds cpu time over 156 seconds (58% cpu average), exceeding limit of 50% cpu over 180 seconds
CPU limit:        90s
Limit duration:   180s
CPU used:         90s
CPU duration:     156s
Duration:         155.81s
Duration Sampled: 147.65s
Steps:            38

Hardware model:   iPhone9,3
Active cpus:      2


Heaviest stack for the target process:
  27  ??? (libdyld.dylib + 5480) [0x197689568]
  27  ??? (AirPort + 352120) [0x102abdf78]
  27  ??? (UIKitCore + 11745396) [0x19a2a1874]
  27  ??? (UIKitCore + 11723508) [0x19a29c2f4]
  27  ??? (GraphicsServices + 13720) [0x1ae710598]
  27  ??? (CoreFoundation + 605088) [0x1979aaba0]
  25  ??? (CoreFoundation + 607200) [0x1979ab3e0]
  25  ??? (CoreFoundation + 630328) [0x1979b0e38]
  25  ??? (CoreFoundation + 633584) [0x1979b1af0]
  25  ??? (CoreFoundation + 633840) [0x1979b1bf0]
  24  ??? (Foundation + 1459732) [0x198d27614]
  24  ??? (Foundation + 24736) [0x198bc90a0]
  24  ??? (CoreFoundation + 508704) [0x197993320]
  24  ??? (CoreFoundation + 510248) [0x197993928]
  24  ??? (CoreFoundation + 512816) [0x197994330]
  24  ??? (CoreFoundation + 512880) [0x197994370]
  24  ??? (AirPort + 924536) [0x102b49b78]
  24  ??? (AirPort + 971360) [0x102b55260]
  24  ??? (UIKitCore + 13788624) [0x19a4945d0]
  24  ??? (UIKitCore + 13788356) [0x19a4944c4]
  24  ??? (UIKitCore + 13686572) [0x19a47b72c]
  24  ??? (UIKitCore + 13718520) [0x19a4833f8]
  24  ??? (UIKitCore + 16962312) [0x19a79b308]
  24  ??? (UIKitCore + 16961080) [0x19a79ae38]
  22  ??? (UIKitCore + 13722704) [0x19a484450]
  22  ??? (UIKitCore + 16927920) [0x19a792cb0]
  22  ??? (QuartzCore + 1426328) [0x19acb2398]
  22  ??? (QuartzCore + 1400308) [0x19acabdf4]
  22  ??? (UIKitCore + 17007512) [0x19a7a6398]
  12  ??? (AirPort + 564228) [0x102af1c04]
  12  ??? (UIKitCore + 16256704) [0x19a6eeec0]
  12  ??? (UIKitCore + 16891864) [0x19a789fd8]
  12  ??? (UIKitCore + 16355988) [0x19a707294]
  12  ??? (UIKitCore + 16355744) [0x19a7071a0]
  12  ??? (UIKitCore + 16356052) [0x19a7072d4]
  12  ??? (QuartzCore + 1375372) [0x19aca5c8c]
  12  ??? (QuartzCore + 1373764) [0x19aca5644]
  10  ??? (QuartzCore + 1445404) [0x19acb6e1c]
  10  ??? (UIKitCore + 16759856) [0x19a769c30]
  10  ??? (UIKitCore + 16761180) [0x19a76a15c]
  8   ??? (UIKitCore + 16762020) [0x19a76a4a4]
  8   ??? (Foundation + 28504) [0x198bc9f58]
  5   ??? (CoreFoundation + 782680) [0x1979d6158]
  2   ??? (CoreFoundation + 787096) [0x1979d7298]


Powerstats for:   AirPort [251]
UUID:             FBF5B1AB-7209-382D-9B4B-4B3816A641EB
Adam ID:          427276530
Is First Party:   No
Beta Identifier:  02A490E5-C46B-48D4-9044-BC75D8566997
App Version:      1.3.6
Build Version:    136.3
Path:             /private/var/containers/Bundle/Application/8CD1FFF7-A7B0-4947-ACD8-A77D39896A10/AirPort.app/AirPort
Architecture:     arm64
Parent:           UNKNOWN [1]
UID:              501
Footprint:        14.11 MB -> 21.09 MB (+7152 KB) (max 27.47 MB )
Start time:       2021-04-17 02:46:39.876 -0700
End time:         2021-04-17 02:47:52.307 -0700
Num samples:      27 (71%)
Primary state:    26 samples Frontmost App, Non-Suppressed, User mode, Effective Thread QoS User Interactive, Requested Thread QoS User Interactive, Override Thread QoS Unspecified
User Activity:    0 samples Idle, 27 samples Active
Power Source:     27 samples on Battery, 0 samples on AC
  27  ??? (libdyld.dylib + 5480) [0x197689568]
    27  ??? (AirPort + 352120) [0x102abdf78]
      27  ??? (UIKitCore + 11745396) [0x19a2a1874]
        27  ??? (UIKitCore + 11723508) [0x19a29c2f4]
          27  ??? (GraphicsServices + 13720) [0x1ae710598]
            27  ??? (CoreFoundation + 605088) [0x1979aaba0]
              25  ??? (CoreFoundation + 607200) [0x1979ab3e0]
                25  ??? (CoreFoundation + 630328) [0x1979b0e38]
                  25  ??? (CoreFoundation + 633584) [0x1979b1af0]
                    25  ??? (CoreFoundation + 633840) [0x1979b1bf0]
                      24  ??? (Foundation + 1459732) [0x198d27614]
                        24  ??? (Foundation + 24736) [0x198bc90a0]
                          24  ??? (CoreFoundation + 508704) [0x197993320]
                            24  ??? (CoreFoundation + 510248) [0x197993928]
                              24  ??? (CoreFoundation + 512816) [0x197994330]
                                24  ??? (CoreFoundation + 512880) [0x197994370]
                                  24  ??? (AirPort + 924536) [0x102b49b78]
                                    24  ??? (AirPort + 971360) [0x102b55260]
                                      24  ??? (UIKitCore + 13788624) [0x19a4945d0]
                                        24  ??? (UIKitCore + 13788356) [0x19a4944c4]
                                          24  ??? (UIKitCore + 13686572) [0x19a47b72c]
                                            24  ??? (UIKitCore + 13718520) [0x19a4833f8]
                                              24  ??? (UIKitCore + 16962312) [0x19a79b308]
                                                24  ??? (UIKitCore + 16961080) [0x19a79ae38]
                                                  22  ??? (UIKitCore + 13722704) [0x19a484450]
                                                    22  ??? (UIKitCore + 16927920) [0x19a792cb0]
                                                      22  ??? (QuartzCore + 1426328) [0x19acb2398]
                                                        22  ??? (QuartzCore + 1400308) [0x19acabdf4]
                                                          22  ??? (UIKitCore + 17007512) [0x19a7a6398]
                                                            12  ??? (AirPort + 564228) [0x102af1c04]
                                                              12  ??? (UIKitCore + 16256704) [0x19a6eeec0]
                                                                12  ??? (UIKitCore + 16891864) [0x19a789fd8]
                                                                  12  ??? (UIKitCore + 16355988) [0x19a707294]
                                                                    12  ??? (UIKitCore + 16355744) [0x19a7071a0]
                                                                      12  ??? (UIKitCore + 16356052) [0x19a7072d4]
                                                                        12  ??? (QuartzCore + 1375372) [0x19aca5c8c]
                                                                          12  ??? (QuartzCore + 1373764) [0x19aca5644]
                                                                            10  ??? (QuartzCore + 1445404) [0x19acb6e1c]
                                                                              10  ??? (UIKitCore + 16759856) [0x19a769c30]
                                                                                10  ??? (UIKitCore + 16761180) [0x19a76a15c]
                                                                                  8   ??? (UIKitCore + 16762020) [0x19a76a4a4]
                                                                                    8   ??? (Foundation + 28504) [0x198bc9f58]
                                                                                      5   ??? (CoreFoundation + 782680) [0x1979d6158]
                                                                                        2   ??? (CoreFoundation + 787096) [0x1979d7298]
                                                                                        1   ??? (libsystem_platform.dylib + 30900) [0x1e02468b4]
                                                                                        1   ??? (CoreFoundation + 778216) [0x1979d4fe8]
                                                                                          1   ??? (Foundation + 1415436) [0x198d1c90c]
                                                                                            1   ??? (libobjc.A.dylib + 23896) [0x1abdb3d58]
                                                                                        1   ??? (CoreFoundation + 776980) [0x1979d4b14]
                                                                                          1   ??? (libsystem_c.dylib + 260988) [0x1a06f8b7c]
                                                                                            1   ??? (libsystem_c.dylib + 303312) [0x1a07030d0]
                                                                                              1   ??? (libsystem_c.dylib + 405920) [0x1a071c1a0]
                                                                                                1   ??? (libsystem_c.dylib + 268640) [0x1a06fa960]
                                                                                      2   ??? (CoreFoundation + 782696) [0x1979d6168]
                                                                                        1   ??? (CoreFoundation + 763336) [0x1979d15c8]
                                                                                          1   ??? (CoreFoundation + 765056) [0x1979d1c80]
                                                                                        1   ??? (CoreFoundation + 762980) [0x1979d1464]
                                                                                      1   ??? (CoreFoundation + 782752) [0x1979d61a0]
                                                                                        1   ??? (CoreFoundation + 640768) [0x1979b3700]
                                                                                          1   ??? (CoreFoundation + 227028) [0x19794e6d4]
                                                                                  2   ??? (UIKitCore + 16762060) [0x19a76a4cc]
                                                                                    1   ??? (QuartzCore + 1385096) [0x19aca8288]
                                                                                    1   ??? (QuartzCore + 1384504) [0x19aca8038]
                                                                            2   ??? (QuartzCore + 1445352) [0x19acb6de8]
                                                                              2   ??? (QuartzCore + 1408656) [0x19acade90]
                                                                                2   ??? (QuartzCore + 1382604) [0x19aca78cc]
                                                                                  2   ??? (UIKitCore + 17049308) [0x19a7b06dc]
                                                                                    2   ??? (UIKitCore + 16941952) [0x19a796380]
                                                                                      1   ??? (UIKitCore + 16769164) [0x19a76c08c]
                                                                                        1   ??? (UIKitCore + 16766952) [0x19a76b7e8]
                                                                                          1   ??? (QuartzCore + 1384492) [0x19aca802c]
                                                                                      1   ??? (UIKitCore + 16769088) [0x19a76c040]
                                                                                        1   ??? (UIKitCore + 16765724) [0x19a76b31c]
                                                                                          1   ??? (UIKitCore + 16765216) [0x19a76b120]
                                                                                            1   ??? (UIKitCore + 16766796) [0x19a76b74c]
                                                                                              1   ??? (QuartzCore + 1384928) [0x19aca81e0]
                                                                                                1   ??? (CoreFoundation + 21852) [0x19791c55c]
                                                                                                  1   ??? (CoreFoundation + 1248092) [0x197a47b5c]
                                                                                                    1   ??? (CoreFoundation + 1208808) [0x197a3e1e8]
                                                                                                      1   ??? (libobjc.A.dylib + 111452) [0x1abdc935c]
                                                                                                        1   ??? (libsystem_malloc.dylib + 76452) [0x1a6de3aa4]
                                                                                                          1   ??? (libsystem_malloc.dylib + 27720) [0x1a6dd7c48]
                                                                                                            1   ??? (libsystem_platform.dylib + 31160) [0x1e02469b8]
                                                            10  ??? (AirPort + 564200) [0x102af1be8]
                                                              9   ??? (AirPort + 562180) [0x102af1404]
                                                                9   ??? (UIKitCore + 16256704) [0x19a6eeec0]
                                                                  9   ??? (UIKitCore + 16891864) [0x19a789fd8]
                                                                    9   ??? (UIKitCore + 16355988) [0x19a707294]
                                                                      9   ??? (UIKitCore + 16355744) [0x19a7071a0]
                                                                        9   ??? (UIKitCore + 16356052) [0x19a7072d4]
                                                                          9   ??? (QuartzCore + 1375372) [0x19aca5c8c]
                                                                            9   ??? (QuartzCore + 1373764) [0x19aca5644]
                                                                              7   ??? (QuartzCore + 1445404) [0x19acb6e1c]
                                                                                7   ??? (UIKitCore + 16759856) [0x19a769c30]
                                                                                  7   ??? (UIKitCore + 16761180) [0x19a76a15c]
                                                                                    5   ??? (UIKitCore + 16762020) [0x19a76a4a4]
                                                                                      5   ??? (Foundation + 28504) [0x198bc9f58]
                                                                                        4   ??? (CoreFoundation + 782680) [0x1979d6158]
                                                                                          1   ??? (CoreFoundation + 778472) [0x1979d50e8]
                                                                                            1   ??? (CoreFoundation + 838224) [0x1979e3a50]
                                                                                              1   ??? (libsystem_malloc.dylib + 86060) [0x1a6de602c]
                                                                                          1   ??? (CoreFoundation + 777020) [0x1979d4b3c]
                                                                                            1   ??? (CoreFoundation + 839836) [0x1979e409c]
                                                                                              1   ??? (CoreFoundation + 861316) [0x1979e9484]
                                                                                          1   ??? (CoreFoundation + 776980) [0x1979d4b14]
                                                                                            1   ??? (libsystem_c.dylib + 260988) [0x1a06f8b7c]
                                                                                              1   ??? (libsystem_c.dylib + 303312) [0x1a07030d0]
                                                                                                1   ??? (libsystem_c.dylib + 405920) [0x1a071c1a0]
                                                                                                  1   ??? (libsystem_c.dylib + 267344) [0x1a06fa450]
                                                                                          1   ??? (CoreFoundation + 772264) [0x1979d38a8]
                                                                                        1   ??? (CoreFoundation + 782752) [0x1979d61a0]
                                                                                          1   ??? (CoreFoundation + 639968) [0x1979b33e0]
                                                                                            1   ??? (CoreFoundation + 763544) [0x1979d1698]
                                                                                              1   ??? (libsystem_malloc.dylib + 5484) [0x1a6dd256c]
                                                                                    2   ??? (UIKitCore + 16762060) [0x19a76a4cc]
                                                                                      1   ??? (libobjc.A.dylib + 9424) [0x1abdb04d0]
                                                                                      1   ??? (QuartzCore + 1384504) [0x19aca8038]
                                                                              2   ??? (QuartzCore + 1445352) [0x19acb6de8]
                                                                                2   ??? (QuartzCore + 1408656) [0x19acade90]
                                                                                  2   ??? (QuartzCore + 1382604) [0x19aca78cc]
                                                                                    2   ??? (UIKitCore + 17049308) [0x19a7b06dc]
                                                                                      2   ??? (UIKitCore + 16941952) [0x19a796380]
                                                                                        2   ??? (UIKitCore + 16769088) [0x19a76c040]
                                                                                          2   ??? (UIKitCore + 16765724) [0x19a76b31c]
                                                                                            2   ??? (UIKitCore + 16765216) [0x19a76b120]
                                                                                              1   ??? (libobjc.A.dylib + 9368) [0x1abdb0498]
                                                                                              1   ??? (UIKitCore + 16766952) [0x19a76b7e8]
                                                                                                1   ??? (CoreFoundation + 762008) [0x1979d1098]
                                                              1   ??? (AirPort + 561824) [0x102af12a0]
                                                                1   ??? (UIFoundation + 7584) [0x1a0590da0]
                                                                  1   ??? (UIFoundation + 607940) [0x1a06236c4]
                                                                    1   ??? (UIFoundation + 626620) [0x1a0627fbc]
                                                                      1   ??? (UIFoundation + 624836) [0x1a06278c4]
                                                                        1   ??? (CoreText + 298644) [0x19bb90e94]
                                                                          1   ??? (CoreText + 128336) [0x19bb67550]
                                                                            1   ??? (CoreText + 730692) [0x19bbfa644]
                                                                              1   ??? (CoreText + 738300) [0x19bbfc3fc]
                                                                                1   ??? (CoreText + 671588) [0x19bbebf64]
                                                                                  1   ??? (CoreText + 34896) [0x19bb50850]
                                                  2   ??? (UIKitCore + 13721388) [0x19a483f2c]
                                                    2   ??? (UIKitCore + 16955140) [0x19a799704]
                                                      2   ??? (UIKitCore + 16927920) [0x19a792cb0]
                                                        2   ??? (QuartzCore + 1426328) [0x19acb2398]
                                                          2   ??? (QuartzCore + 1400308) [0x19acabdf4]
                                                            2   ??? (UIKitCore + 17007512) [0x19a7a6398]
                                                              2   ??? (AirPort + 564228) [0x102af1c04]
                                                                1   ??? (UIKitCore + 16256704) [0x19a6eeec0]
                                                                  1   ??? (UIKitCore + 16892348) [0x19a78a1bc]
                                                                    1   ??? (UIKitCore + 16867776) [0x19a7841c0]
                                                                      1   ??? (UIKitCore + 16969724) [0x19a79cffc]
                                                                        1   ??? (UIKitCore + 17049044) [0x19a7b05d4]
                                                                          1   ??? (QuartzCore + 1480356) [0x19acbf6a4]
                                                                            1   ??? (libsystem_platform.dylib + 18392) [0x1e02437d8]
                                                                1   ??? (AirPort + 559008) [0x102af07a0]
                                                                  1   ??? (libobjc.A.dylib + 9344) [0x1abdb0480]
                      1   ??? (Foundation + 1459840) [0x198d27680]
                        1   ??? (CoreFoundation + 1205176) [0x197a3d3b8]
                          1   ??? (libobjc.A.dylib + 152656) [0x1abdd3450]
                            1   ??? (libobjc.A.dylib + 152948) [0x1abdd3574]
                              1   ??? (CoreFoundation + 640768) [0x1979b3700]
                                1   ??? (libsystem_malloc.dylib + 6532) [0x1a6dd2984]
              2   ??? (CoreFoundation + 608904) [0x1979aba88]
                2   ??? (CoreFoundation + 632288) [0x1979b15e0]
                  2   ??? (libdispatch.dylib + 65628) [0x19761905c]
                    2   ??? (libdispatch.dylib + 397952) [0x19766a280]
                      1   ??? (QuartzCore + 1477320) [0x19acbeac8]
                        1   ??? (QuartzCore + 1662136) [0x19acebcb8]
                          1   ??? (libsystem_malloc.dylib + 6700) [0x1a6dd2a2c]
                            1   ??? (libsystem_malloc.dylib + 8648) [0x1a6dd31c8]
                              1   ??? (libsystem_kernel.dylib + 169324) [0x1c396f56c]
                                1   <Kernel mode>
                      1   ??? (QuartzCore + 1477312) [0x19acbeac0]
                        1   ??? (UIKitCore + 16781868) [0x19a76f22c]
                          1   ??? (UIKitCore + 16780888) [0x19a76ee58]
                            1   ??? (UIKitCore + 16785068) [0x19a76feac]
                              1   ??? (CoreFoundation + 20780) [0x19791c12c]
                                1   ??? (QuartzCore + 1662100) [0x19acebc94]
                                  1   ??? (QuartzCore + 903564) [0x19ac3298c]
                                    1   ??? (CoreFoundation + 639816) [0x1979b3348]

  Binary Images:
           0x102a68000 -                ???  com.apple.airport.mobileairportutility 1.3.6 (136.3) <FBF5B1AB-7209-382D-9B4B-4B3816A641EB>  /private/var/containers/Bundle/Application/8CD1FFF7-A7B0-4947-ACD8-A77D39896A10/AirPort.app/AirPort
           0x197609000 -        0x197687fff  libdispatch.dylib                                    <AF27E74C-BE4A-3364-BB27-AED9916CE02D>  /usr/lib/system/libdispatch.dylib
           0x197688000 -        0x1976befff  libdyld.dylib                                        <0B475C78-3C12-3121-B7F8-2B95B83DAF44>  /usr/lib/system/libdyld.dylib
           0x197917000 -        0x197cc0fff  CoreFoundation                                       <F3021642-E3C0-33F8-9911-DD303A6056D0>  /System/Library/Frameworks/CoreFoundation.framework/CoreFoundation
           0x198bc3000 -        0x198e5dfff  Foundation                                           <712A564E-5058-3EAC-AF3A-43BBD43D0D7E>  /System/Library/Frameworks/Foundation.framework/Foundation
           0x19976e000 -        0x19ab37fff  UIKitCore                                            <CC6E5AC7-8248-35F6-8B42-2E25C93DCF0A>  /System/Library/PrivateFrameworks/UIKitCore.framework/UIKitCore
           0x19ab56000 -        0x19adcbfff  QuartzCore                                           <461501DD-204F-3516-9F5D-BDD0BA19FDA1>  /System/Library/Frameworks/QuartzCore.framework/QuartzCore
           0x19bb48000 -        0x19bd01fff  CoreText                                             <6655BF5D-06F2-32B2-BF23-56E7208C415D>  /System/Library/Frameworks/CoreText.framework/CoreText
           0x1a058f000 -        0x1a0692fff  UIFoundation                                         <95D74BF6-D60F-3D0B-939A-F6B614E4AC3F>  /System/Library/PrivateFrameworks/UIFoundation.framework/UIFoundation
           0x1a06b9000 -        0x1a0735fff  libsystem_c.dylib                                    <A07A482A-E889-392A-8C66-C328CF5320C9>  /usr/lib/system/libsystem_c.dylib
           0x1a6dd1000 -        0x1a6df3fff  libsystem_malloc.dylib                               <8979FB06-A317-3C57-AFEA-2732627A08E5>  /usr/lib/system/libsystem_malloc.dylib
           0x1abdae000 -        0x1abde3fff  libobjc.A.dylib                                      <316491E8-7063-3CD0-993B-96F8B8AC54D4>  /usr/lib/libobjc.A.dylib
           0x1ae70d000 -        0x1ae715fff  GraphicsServices                                     <CD6A7E86-64BA-3AE9-883B-DE938BF72DDC>  /System/Library/PrivateFrameworks/GraphicsServices.framework/GraphicsServices
           0x1c3946000 -        0x1c3976fff  libsystem_kernel.dylib                               <782E667E-18A2-3B98-B53D-BFC9A4A701B7>  /usr/lib/system/libsystem_kernel.dylib
           0x1e023f000 -        0x1e0249fff  libsystem_platform.dylib                             <3A71914A-C2A7-3514-B519-DF319E7A6E02>  /usr/lib/system/libsystem_platform.dylib


Powerstats for:   com.apple.siri.ClientFlow.ClientScripter
UUID:             95136A1B-3BB9-3820-8D02-C218A7C5C068
App Version:      1.0
Build Version:    1
Path:             /System/Library/PrivateFrameworks/AssistantServices.framework/XPCServices/com.apple.siri.ClientFlow.ClientScripter.xpc/com.apple.siri.ClientFlow.ClientScripter
Architecture:     arm64
Start time:       2021-04-17 02:45:24.656 -0700
End time:         2021-04-17 02:45:38.449 -0700
Num samples:      3 (8%)
Primary state:    3 samples Non-Frontmost App, Non-Suppressed, User mode, Effective Thread QoS Background, Requested Thread QoS Background, Override Thread QoS Unspecified
User Activity:    0 samples Idle, 3 samples Active
Power Source:     3 samples on Battery, 0 samples on AC
  3  ??? (libsystem_pthread.dylib + 42404) [0x1e02555a4]
    3  ??? (libdispatch.dylib + 82744) [0x19761d338]
      3  ??? (libdispatch.dylib + 43176) [0x1976138a8]
        3  ??? (libdispatch.dylib + 40396) [0x197612dcc]
          3  ??? (libdispatch.dylib + 397952) [0x19766a280]
            3  ??? (libdispatch.dylib + 393880) [0x197669298]
              3  ??? (com.apple.siri.ClientFlow.ClientScripter + 26264) [0x104f9e698]
                3  ??? (com.apple.siri.ClientFlow.ClientScripter + 153928) [0x104fbd948]
                  3  ??? (com.apple.siri.ClientFlow.ClientScripter + 82616) [0x104fac2b8]
                    3  ??? (com.apple.siri.ClientFlow.ClientScripter + 154064) [0x104fbd9d0]
                      3  ??? (com.apple.siri.ClientFlow.ClientScripter + 26420) [0x104f9e734]
                        3  ??? (com.apple.siri.ClientFlow.ClientScripter + 27212) [0x104f9ea4c]
                          3  ??? (CoreFoundation + 9068) [0x19791936c]
                            3  ??? (CoreFoundation + 647632) [0x1979b51d0]
                              3  ??? (com.apple.siri.ClientFlow.ClientScripter + 27780) [0x104f9ec84]
                                3  ??? (com.apple.siri.ClientFlow.ClientScripter + 153560) [0x104fbd7d8]
                                  3  ??? (com.apple.siri.ClientFlow.ClientScripter + 154232) [0x104fbda78]
                                    3  ??? (JavaScriptCore + 2186080) [0x1a0994b60]
                                      2  ??? (JavaScriptCore + 2189156) [0x1a0995764]
                                        2  ??? (JavaScriptCore + 10420700) [0x1a116f1dc]
                                          2  ??? (JavaScriptCore + 10175464) [0x1a11333e8]
                                            2  ??? (JavaScriptCore + 10295328) [0x1a1150820]
                                              1  ??? (JavaScriptCore + 10295860) [0x1a1150a34]
                                                1  ??? (JavaScriptCore + 10295328) [0x1a1150820]
                                                  1  ??? (JavaScriptCore + 10295832) [0x1a1150a18]
                                                    1  ??? (JavaScriptCore + 4264724) [0x1a0b90314]
                                                      1  ??? (JavaScriptCore + 4267612) [0x1a0b90e5c]
                                                        1  ??? (JavaScriptCore + 9175336) [0x1a103f128]
                                                          1  ??? (JavaScriptCore + 9173676) [0x1a103eaac]
                                              1  ??? (JavaScriptCore + 10295832) [0x1a1150a18]
                                                1  ??? (JavaScriptCore + 4265068) [0x1a0b9046c]
                                                  1  ??? (JavaScriptCore + 4268360) [0x1a0b91148]
                                                    1  ??? (JavaScriptCore + 4287164) [0x1a0b95abc]
                                                      1  ??? (JavaScriptCore + 4631900) [0x1a0be9d5c]
                                                        1  ??? (JavaScriptCore + 4599940) [0x1a0be2084]
                                                          1  ??? (JavaScriptCore + 4599684) [0x1a0be1f84]
                                                            1  ??? (JavaScriptCore + 4599940) [0x1a0be2084]
                                                              1  ??? (JavaScriptCore + 4619488) [0x1a0be6ce0]
                                                                1  ??? (JavaScriptCore + 4599172) [0x1a0be1d84]
                                                                  1  ??? (JavaScriptCore + 4586812) [0x1a0bded3c]
                                                                    1  ??? (JavaScriptCore + 4474188) [0x1a0bc354c]
                                                                      1  ??? (JavaScriptCore + 4454212) [0x1a0bbe744]
                                                                        1  ??? (JavaScriptCore + 4331180) [0x1a0ba06ac]
                                                                          1  ??? (JavaScriptCore + 3898760) [0x1a0b36d88]
                                      1  ??? (JavaScriptCore + 2188840) [0x1a0995628]
                                        1  ??? (JavaScriptCore + 10421084) [0x1a116f35c]
                                          1  ??? (JavaScriptCore + 10175600) [0x1a1133470]
                                            1  ??? (JavaScriptCore + 10296088) [0x1a1150b18]
                                              1  ??? (JavaScriptCore + 11206920) [0x1a122f108]
                                                1  ??? (JavaScriptCore + 10297504) [0x1a11510a0]
                                                  1  ??? (JavaScriptCore + 9182168) [0x1a1040bd8]
                                                    1  ??? (JavaScriptCore + 9195420) [0x1a1043f9c]
                                                      1  ??? (JavaScriptCore + 9560944) [0x1a109d370]
                                                        1  ??? (JavaScriptCore + 9564336) [0x1a109e0b0]
                                                          1  ??? (JavaScriptCore + 9507660) [0x1a109034c]
                                                            1  ??? (JavaScriptCore + 9351628) [0x1a106a1cc]
                                                              1  ??? (JavaScriptCore + 9410628) [0x1a1078844]
                                                                1  ??? (JavaScriptCore + 9412068) [0x1a1078de4]
                                                                  1  ??? (JavaScriptCore + 9419112) [0x1a107a968]
                                                                    1  ??? (JavaScriptCore + 9444892) [0x1a1080e1c]
                                                                      1  ??? (JavaScriptCore + 9419048) [0x1a107a928]
                                                                        1  ??? (JavaScriptCore + 9443168) [0x1a1080760]
                                                                          1  ??? (JavaScriptCore + 9410628) [0x1a1078844]
                                                                            1  ??? (JavaScriptCore + 9412068) [0x1a1078de4]
                                                                              1  ??? (JavaScriptCore + 9419168) [0x1a107a9a0]
                                                                                1  ??? (JavaScriptCore + 9455968) [0x1a1083960]
                                                                                  1  ??? (JavaScriptCore + 9389968) [0x1a1073790]
                                                                                    1  ??? (JavaScriptCore + 9484152) [0x1a108a778]
                                                                                      1  ??? (JavaScriptCore + 9378996) [0x1a1070cb4]
                                                                                        1  ??? (JavaScriptCore + 9484152) [0x1a108a778]
                                                                                          1  ??? (JavaScriptCore + 9385876) [0x1a1072794]
                                                                                            1  ??? (JavaScriptCore + 9477864) [0x1a1088ee8]
                                                                                              1  ??? (JavaScriptCore + 9054652) [0x1a10219bc]

  Binary Images:
           0x104f98000 -                ???  com.apple.siri.ClientFlow.ClientScripter 1.0 (1) <95136A1B-3BB9-3820-8D02-C218A7C5C068>  /System/Library/PrivateFrameworks/AssistantServices.framework/XPCServices/com.apple.siri.ClientFlow.ClientScripter.xpc/com.apple.siri.ClientFlow.ClientScripter
           0x197609000 -        0x197687fff  libdispatch.dylib                                <AF27E74C-BE4A-3364-BB27-AED9916CE02D>  /usr/lib/system/libdispatch.dylib
           0x197917000 -        0x197cc0fff  CoreFoundation                                   <F3021642-E3C0-33F8-9911-DD303A6056D0>  /System/Library/Frameworks/CoreFoundation.framework/CoreFoundation
           0x1a077f000 -        0x1a1833fff  JavaScriptCore                                   <5BD82887-C23E-3E37-B0F2-1F9BF23321F5>  /System/Library/Frameworks/JavaScriptCore.framework/JavaScriptCore
           0x1e024b000 -        0x1e025afff  libsystem_pthread.dylib                          <CD2075FF-948B-313A-8A02-E2AD1E676A74>  /usr/lib/system/libsystem_pthread.dylib


Powerstats for:   aggregated
UUID:             D6896364-7B06-3472-A6A7-8EDB6DABB33B
Path:             /System/Library/PrivateFrameworks/AggregateDictionary.framework/Support/aggregated
Architecture:     arm64
Start time:       2021-04-17 02:45:56.764 -0700
End time:         2021-04-17 02:47:43.238 -0700
Num samples:      2 (5%)
Primary state:    1 samples Non-Frontmost App, Non-Suppressed, Kernel mode, Effective Thread QoS Background, Requested Thread QoS Background, Override Thread QoS Unspecified
User Activity:    0 samples Idle, 2 samples Active
Power Source:     2 samples on Battery, 0 samples on AC
  1  ??? (libsystem_pthread.dylib + 55404) [0x1e025886c]
  1  ??? (libsystem_pthread.dylib + 42404) [0x1e02555a4]
    1  ??? (libdispatch.dylib + 82744) [0x19761d338]
      1  ??? (libdispatch.dylib + 43224) [0x1976138d8]
        1  ??? (libdispatch.dylib + 40084) [0x197612c94]
          1  ??? (libdispatch.dylib + 43224) [0x1976138d8]
            1  ??? (libdispatch.dylib + 40084) [0x197612c94]
              1  ??? (libdispatch.dylib + 112696) [0x197624838]
                1  ??? (libdispatch.dylib + 40084) [0x197612c94]
                  1  ??? (libdispatch.dylib + 109616) [0x197623c30]
                    1  ??? (libdispatch.dylib + 398144) [0x19766a340]
                      1  ??? (IOKit + 202492) [0x1a21d46fc]
                        1  ??? (IOKit + 202672) [0x1a21d47b0]
                          1  ??? (IOKit + 279888) [0x1a21e7550]
                            1  ??? (IOKit + 168212) [0x1a21cc114]
                              1  ??? (IOKit + 178948) [0x1a21ceb04]
                                1  ??? (libdyld.dylib + 21904) [0x19768d590]
                                  1  ??? (libdyld.dylib + 74388) [0x19769a294]
                                    1  ??? (libdyld.dylib + 66856) [0x197698528]
                                      1  ??? (libdyld.dylib + 176576) [0x1976b31c0]
                                        1  ??? (libdyld.dylib + 7708) [0x197689e1c]
                                          1  ??? (libdyld.dylib + 6696) [0x197689a28]
                                            1  <User mode>

  Binary Images:
           0x102a8c000 -                ???  aggregated              <D6896364-7B06-3472-A6A7-8EDB6DABB33B>  /System/Library/PrivateFrameworks/AggregateDictionary.framework/Support/aggregated
           0x197609000 -        0x197687fff  libdispatch.dylib       <AF27E74C-BE4A-3364-BB27-AED9916CE02D>  /usr/lib/system/libdispatch.dylib
           0x197688000 -        0x1976befff  libdyld.dylib           <0B475C78-3C12-3121-B7F8-2B95B83DAF44>  /usr/lib/system/libdyld.dylib
           0x1a21a3000 -        0x1a2249fff  IOKit                   <AB855ED1-EB83-3C9E-B5DE-293735ABA7E9>  /System/Library/Frameworks/IOKit.framework/Versions/A/IOKit
           0x1e024b000 -        0x1e025afff  libsystem_pthread.dylib <CD2075FF-948B-313A-8A02-E2AD1E676A74>  /usr/lib/system/libsystem_pthread.dylib
