# github-actions

## Description

Strata's centralized repository for internally hosted/managed [GitHub Actions](https://github.com/features/actions) for consumption elsewhere within Strata's GitHub organization.

## Repo Structure

```bash
github-actions
    ├── .github
    │   └── workflows
    │       ├── analyse-code.yml    #CodeQL action to scan your code
    │       └── scan-terraform.yml  #Tfsec action to scan your terraform code
    └── README.md

```

## The Basics

Call the actions in the build stage of your pipeline.

- In your github actions to build the application call this job during the build of the application
- Enter the languages in your repo

Below is a sample call to the Strata Github Actions Code Scanning template

```yaml
jobs:

  call-codeQL-analysis:
    name: CodeQL analysis 
    uses: strataconsulting/github-actions/.github/workflows/analyse-code.yml@be81cb0e64c976e94b88d03a70f592b63ee991f7
    with:
      languages: "[ 'java', 'javascript' ]"      #languages in the current repo
```

## For Terraform scans using [tfsec](https://github.com/aquasecurity/tfsec)

```yaml
jobs:

  tfsec-code-analysis:
    name: Tfsec Terraform code analysis  
    uses: strataconsulting/github-actions/.github/workflows/scan-terraform.yml@be81cb0e64c976e94b88d03a70f592b63ee991f7
```

## Reference

- [Stratafied GitHub Advanced Security](https://strataconsulting.atlassian.net/l/cp/sNt3DDM9)
- [Stratafied GHAS - Best practices](https://strataconsulting.atlassian.net/l/cp/1qcDTPv1)

## Contributors

- [Kris Pandey](https://github.com/kris-pandey)
- [Todd Michael Bushnell](https://github.com/toddmichael)

## License

```text
Copyright (c) 2023 Strata Consulting, Inc., All Rights Reserved.
```
