# ![Strata Github Advanced Security actions ]


> ### This is a central repo to store all the templatized Re-usuable Github Actions for Code Scanning



# *NEW* GraphQL Support  


# How it works

Call the actions in the build stage of your pipeline 

* In your github actions to build the application call this job during the build of the application
* Enter the languages in your repo
* Here is a sample call to the Strata Github Actions Code Scanning template 

```
jobs:

  call-codeQL-analysis:
    name: CodeQL analysis 
    uses: strataconsulting/github-actions/.github/workflows/security/actions-codeql/analyse-code.yml@main
    with:
      languages: "[ 'java', 'javascript' ]"
```


* Repo structure:

```
github-actions
├── .github
│   └── workflows
│       └── security
│           ├── actions-codeql
│           │   └── analyse-code.yml            #CodeQL action to scan your code
│           └── actions-terraform
│               └── strata-scan-terraform.yml   #Tfsec action to scan your terraform code
└── README.md

```

# References

![Stratafied GitHub Advanced Security](https://strataconsulting.atlassian.net/l/cp/sNt3DDM9)
![Stratafied GHAS - Best practices](https://strataconsulting.atlassian.net/l/cp/1qcDTPv1)
