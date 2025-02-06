# 📂 Cloud-Based File Storage System

## 🚀 Overview
This project is a cloud-based file storage system that enables users to securely store and manage their files. The system leverages AWS services for authentication, storage, and processing, following best practices in cloud architecture.

## 🏗 Architecture
The system consists of the following AWS components:

- **Amazon Cognito**: Handles user authentication and access management.
- **EC2 Instance**: Manages user requests and integrates with GitLab for version control.
- **S3 Bucket**: Stores user-uploaded files securely.
- **API Gateway**: Routes API requests to the backend services.
- **AWS Lambda**: Processes API requests and interacts with the database.
- **DynamoDB**: Stores metadata and user-related information.
- **CloudFormation**: Provides Infrastructure as Code (IaC) for deployment automation.

## 🖼️ Architecture Diagram
![Cloud-Based File Storage Architecture](https://github.com/Shakti242/Cloud-Based-File-Storage-/blob/main/Image)

The above diagram illustrates the architecture of the cloud-based file storage system:
- Users authenticate via **Amazon Cognito**.
- An **EC2 instance** handles requests and integrates with **GitLab**.
- Uploaded files are stored in **S3**.
- Requests are routed through **API Gateway** to **AWS Lambda** for processing.
- File metadata and user data are stored in **DynamoDB**.
- **CloudFormation** is used for managing infrastructure as code (IaC).

## 🛠️ Technologies Used
- **AWS** (EC2, S3, API Gateway, Lambda, DynamoDB, Cognito, CloudFormation)
- **GitLab** for CI/CD
- **Infrastructure as Code (IaC)** with AWS CloudFormation

## 🏁 Getting Started

### 1️⃣ Prerequisites
- AWS account with permissions to deploy resources
- GitLab account for source code management
- AWS CLI installed and configured
- Terraform (optional for infrastructure management)

### 2️⃣ Installation
#### Clone the repository:
```sh
git clone https://gitlab.com/your-repo/cloud-storage.git
cd cloud-storage
```

#### Deploy infrastructure using AWS CloudFormation:
```sh
aws cloudformation deploy --template-file cloudformation.yml --stack-name cloud-storage-stack
```

#### Configure authentication in Amazon Cognito.
#### Deploy the backend and frontend services.

## 3️⃣ Usage
- Users authenticate using **Amazon Cognito**.
- Files are uploaded to **S3** via the **EC2 instance**.
- **API Gateway** routes requests to **AWS Lambda**.
- File metadata is stored in **DynamoDB**.

## 📌 Future Enhancements
- Implement **file versioning**.
- Introduce **AI-based content analysis**.
- Enhance **security with fine-grained IAM policies**.
