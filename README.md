 :::: Project: “Supreme Court Kiosk – End-to-End DevOps CI/CD with AWS, Docker, Jenkins & Kubernetes (Helm)” ::::

  ===> Project Overview :-
              - This project demonstrates an end-to-end DevOps implementation for a full-stack Kiosk application (Backend + Frontend) using modern DevOps tools and best practices.
              
  ===> objective of this project :-
              - The main objective of this project is to understand real-world DevOps workflows, infrastructure setup, containerization, automated builds, and Kubernetes deployment.

  ===> The project covers :-
                 .Infrastructure provisioning
                 .CI/CD pipeline
                 .Containerization
                 .Kubernetes deployment using Helm
                 .Centralized monitoring with Prometheus & Grafana
                 
                                                            ==> FRONTEND <==
  <img width="1783" height="1056" alt="Screenshot 2025-12-12 at 12 18 19 PM" src="https://github.com/user-attachments/assets/8a233eae-c8be-49f6-8b5b-57e85f859a68" />
                                                             ==> BACKEND <==
  <img width="1790" height="1066" alt="backend" src="https://github.com/user-attachments/assets/fb7f9327-180d-4ee5-967f-858036d34f23" />

   ===> Architecture Overview :-
                                   Developer
                                     ↓
                             GitHub (Source Code)
                                     ↓
                             Jenkins (CI Pipeline)                    
                                     ↓
                          Docker Build & Push (DockerHub)
                                     ↓
                       Kubernetes Cluster (Helm Deployment)
                                     ↓
                        Monitoring (Prometheus + Grafana)

      ===> Application Details :- 
                    Backend (Node.js – Port 4000)
                    Frontend (React + Nginx – Port 3000)
                                   

                                                         ::::====> 2. Tools & Technologies Used <====::::
										                           |----------------------------------------------------------------|
                                                           Category                        Tools                                
                                               |----------------------------- | --------------------------------|
                                                   | Source Control           | Git, GitHub                          
                                                   | CI/CD                    | Jenkins (Master + Agent)             
                                                   | Containers               | Docker, DockerHub                    
                                                   | Cloud                    | AWS EC2, Elastic IP, Security Groups 
                                                   | IaC                      | Terraform                            
                                                   | Configuration Management | Ansible                              
                                                   | Orchestration            | Kubernetes              
                                                   | Packaging                | Helm                                 
                                                   | Monitoring               | Prometheus, Node Exporter, Grafana   
                                                   | OS                       | Ubuntu & MacOS                   

          ===> Repository Structure :-
                                     supreme-court-kiosk-devops-project/
                                                                       ├── Jenkinsfile              # CI/CD pipeline
                                                                       ├── terraform/               # AWS infrastructure
                                                                       ├── ansible/                 # Server configuration
                                                                       ├── docker/                  # Docker related files
                                                                       ├── app/
                                                                       │      ├── backend/          # Node.js backend
                                                                       │      └── frontend/         # React frontend + Nginx
                                                                       ├── k8s/
                                                                       │   └── helm/
                                                                       │       └── kiosk-helm/      # Helm chart
                                                                               └── README.md

           ===> Infrastructure Setup (Terraform) :-
                                   Infrastructure includes:
                                           Jenkins Master
                                           Jenkins Node
                                           Kubernetes Master Initially, the plan was to create a multi-node Kubernetes cluster:
                                           1 Master node
                                           1 Worker node
                                           Monitoring Server
                                           AWS,VPC, Subnet,Eip,Security Groups, Key Pair
                                           - All resources are provisioned using Terraform.

          



                                                                               


         
                                                                               


                    
