# coworking-meetup-bl-serverless-demo

This is a demo application boilerplate on how to start using [serverless](https://serverless.com/) 
framework, in 2 different lambda runtimes integrated trough API gateway on aws. It will be used for presentation purposes.

Usage:
General Requirements: nodejs
for C# [dotnet core SDK](https://www.microsoft.com/net/download/core), 
After that have to make sure that ```dotnet``` command available in shell

1. ```npm install serverless -g``` installs serverless CLI
2. ```serverless config credentials ...``` configures appropriate credentials

deploying node project

1. ```cd nodejs```
2. ```serverless deploy```

compile and deploy C# project

1. ```cd csharp```
2. ```.\build.ps1``` (for win) or ```./build.sh``` (for Linux and OS)
3. ```serverless deploy```

We are set up.

Possible follow up topics:
  - Using existing serverless services
  - Using other aws services from withing lambda
  - Using external APIs/DBs
  - Authorizer Micro Service (lambda authorizer based on jwt)
  - Configuring VPC
  - TDD approach
  - Other Integration Types for different workloads (S3, SNS, SQS...)
  - 
  - APIG specifics:
    - Handling Stages
    - Handling Secrets
    - Data Flow
  - 
  - Module development
  - Plugin development

Advanced: 
   - serverless architecture and interaction with CF
   - best practices
