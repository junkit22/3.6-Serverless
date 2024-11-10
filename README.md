# 3.6-Serverless

1. Create a new repo in Github and clone it to your local computer
.gitignore template -> Terraform
Add README.md

2. Create a lambda.tf file with below content:
https://github.com/jaezeu/terraform-serverless/blob/main/apigateway-lambda/lambda.tf

3. Create a lambda_function.py file with below content:

import boto3
def lambda_handler(event, context):
    result = "Hello World"
    return {
        'statusCode' : 200,
        'body': result
    }


4. Create a provider.tf file with below content:

provider "aws" {
  region = "ap-southeast-1"
}



5. Create a variables.tf file with below content:

variable "your_name" {
  type = string
  default = "jaz"  #Replace with your name here
}


6. Once all 6 files above have been created, Run the following commands:
terraform init
terraform plan
terraform apply


