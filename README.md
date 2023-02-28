# [Strata Github Advanced Security actions ]


> ### This is a central repo to store all the templatized Re-usuable Github Actions for Code Scanning


# How it works

Call the actions in the build stage of your pipeline 

* In your github actions to build the application call this job during the build of the application
* Enter the languages in your repo
* Here is a sample call to the Strata Github Actions Code Scanning template 

```
jobs:

  call-codeQL-analysis:
    name: CodeQL analysis 
    uses: strataconsulting/github-actions/.github/workflows/strata-analyse-code.yml@a3056e057796e46dd71f834badf8aa3292915311
    with:
      languages: "[ 'java', 'javascript' ]"      #languages in the current repo
```


* Repo structure:

```
github-actions
    ├── .github
    │   └── workflows
    │       ├── strata-analyse-code.yml    #CodeQL action to scan your code
    │       └── strata-scan-terraform.yml  #Tfsec action to scan your terraform code
    └── README.md

```

# For Terraform scans using tfsec:

```
jobs:

  tfsec-code-analysis:
    name: Tfsec Terraform code analysis  
    uses: strataconsulting/github-actions/.github/workflows/strata-scan-terraform.yml@a3056e057796e46dd71f834badf8aa3292915311

```

# References

![Stratafied GitHub Advanced Security](https://strataconsulting.atlassian.net/l/cp/sNt3DDM9)

![Stratafied GHAS - Best practices](https://strataconsulting.atlassian.net/l/cp/1qcDTPv1)
