Skip to content
 
Search…
All gists
Back to GitHub
@zakwarlord7 
Your account has been flagged.
Because of that, your profile is hidden from the public. If you believe this is a mistake, contact support to have your account status reviewed.
@yokawasa
yokawasa/ghcr.md
Last active yesterday • Report abuse
8
1
Code
Revisions
6
Stars
8
Forks
1
<script src="https://gist.github.com/yokawasa/841b6db379aa68b2859846da84a9643c.js"></script>
ghcr (GitHub Container Registry)
ghcr.md
ghcr (GitHub Container Registry) quickstart
CLI
To push container images to ghcr, you need peronal access token (PAT) - see how to create PAT

Get PAT (personal access token)
Personal Settings > Developer settings > Personal access tokens

ghcr login test
# echo $PAT | docker login ghcr.io -u <githubユーザ名> --password-stdin
echo $PAT | docker login ghcr.io -u yokawasa --password-stdin

Login Succeeded
push
docker tag mycontainer ghcr.io/yokawasa/myrepo/mycontainer:0.0.1
docker push ghcr.io/yokawasa/myrepo/mycontainer:0.0.1
inspect
docker inspect ghcr.io/yokawasa/myrepo/mycontainer:0.0.1
GitHub Actions
you can do seamless access to containers from Actions workflows via the GITHUB_TOKEN

The Container registry supports the GITHUB_TOKEN for easy and secure authentication in your workflows. If your workflow is using a personal access token (PAT) to authenticate to ghcr.io, then we highly recommend you update your workflow to use the GITHUB_TOKEN.

     - name: Log in to registry
        # This is where you will update the PAT to GITHUB_TOKEN
        run: echo "${{ secrets.GITHUB_TOKEN }}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin
See Upgrading a workflow that accesses ghcr.io for more detail

Associate a certain package to a repository
Connecting a repository to a package
REFERENCES
https://github.com/features/packages
Upgrading a workflow that accesses ghcr.io
@yokawasa
Author
yokawasa commented on Oct 17, 2021
memo:
there are a couple of other public registries. for instances, trivy uses dockerhub, public.ecr.aws as well as ghcr.io

docker pull aquasec/trivy:0.19.2
docker pull ghcr.io/aquasecurity/trivy:0.19.2
docker pull public.ecr.aws/aquasecurity/trivy:0.19.2
docker pull aquasec/trivy:latest
docker pull ghcr.io/aquasecurity/trivy:latest
docker pull public.ecr.aws/aquasecurity/trivy:latest
https://github.com/aquasecurity/trivy/releases

@timothyclarke
timothyclarke commented on Nov 15
What permissions do you need in the PAT ? Ticking ALL for a never expire token is bad practise

@yokawasa
Author
yokawasa commented on Nov 21
What permissions do you need in the PAT ? Ticking ALL for a never expire token is bad practise

@timothyclarke write:packages permission is needed in the PAT. Regarding the expiration, I agree upon you. Expiration should be set for the token.

@zakwarlord7
 
Add heading textAdd bold text, <Ctrl+b>Add italic text, <Ctrl+i>
Add a quote, <Ctrl+Shift+.>Add code, <Ctrl+e>Add a link, <Ctrl+k>
Add a bulleted list, <Ctrl+Shift+8>Add a numbered list, <Ctrl+Shift+7>Add a task list, <Ctrl+Shift+l>
Directly mention a user or team
Reference an issue or pull request
Leave a comment
No file chosen
Attach files by dragging & dropping, selecting or pasting them.
Styling with Markdown is supported
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
