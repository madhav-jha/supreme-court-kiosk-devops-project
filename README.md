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
														 
 <img width="1790" height="320" alt="backend" src="https://github.com/user-attachments/assets/627966ff-f7af-4625-9658-a8423b582fd3" />

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

   ===>	Phase 1: Local Application Validation :-
         -Before introducing Docker or Kubernetes, the application was first tested locally to ensure correctness.
		 
              ::-> Backend (Local)
			         cd app/backend
                     npm install
                     npm start
              - Backend API tested on http://localhost:4000
			  
<img width="1792" height="1120" alt="Screenshot 2025-12-12 at 11 48 00 AM" src="https://github.com/user-attachments/assets/bbb495b3-e2a5-41d1-b801-61572055d2d1" />
<img width="1790" height="320" alt="backend" src="https://github.com/user-attachments/assets/4a0b1d88-1e1b-42a7-9224-08793c819511" />
<img width="1781" height="385" alt="Screenshot 2025-12-12 at 11 56 49 AM" src="https://github.com/user-attachments/assets/3e04223d-fec1-41ea-9d94-502612c9ba96" />

               ::-> Frontend (Local)
                        cd app/frontend
                        npm install
                        npm start
	          - Frontend UI tested on http://localhost:3000	
(This step ensured that the application works correctly without any infrastructure complexity)

<img width="1792" height="1064" alt="Screenshot 2025-12-12 at 12 18 33 PM" src="https://github.com/user-attachments/assets/f19ddedd-add1-418d-91ab-cbaab48d535a" />


 ===> Phase 2: Docker Compose Validation :-
 
            - To ensure frontend ↔ backend integration works in containers
			- Docker Compose Run (docker compose up -d)
			- Backend container exposed on 4000
            - Frontend container exposed on 3000
            - API communication verified successfully
			
<img width="1792" height="1120" alt="Screenshot 2025-12-14 at 8 30 26 AM" src="https://github.com/user-attachments/assets/d57d57f1-9efd-4911-a2ab-7811394b6fb6" />			
<img width="1792" height="1120" alt="Screenshot 2025-12-13 at 10 49 26 AM" src="https://github.com/user-attachments/assets/164d3ba7-ebeb-43ce-ae9a-6d6dcdd4257a" />
<img width="1792" height="1120" alt="Screenshot 2025-12-13 at 10 56 07 AM" src="https://github.com/user-attachments/assets/d411cbe8-595e-4dad-9d27-2b4d4486e521" />
<img width="1781" height="1078" alt="Screenshot 2025-12-13 at 10 49 44 AM" src="https://github.com/user-attachments/assets/c5e447ce-2b35-475d-b70a-52d8d190eac5" />
<img width="1784" height="258" alt="Screenshot 2025-12-13 at 10 56 21 AM" src="https://github.com/user-attachments/assets/7e3a6be0-6eea-425b-b0e8-a3941810a9e2" />
<img width="1792" height="1120" alt="Screenshot 2025-12-08 at 2 54 55 PM" src="https://github.com/user-attachments/assets/757cf133-202a-4204-b25b-10e0391394c5" />
<img width="1792" height="1120" alt="Screenshot 2025-12-14 at 8 32 42 AM" src="https://github.com/user-attachments/assets/4a63f81a-6b58-4c6a-85f9-ee89380000a1" />



                                             ::::====> Devops Tools & Technologies Used <====::::
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
                                                                       ├── Jenkinsfile          # CI/CD pipeline
                                                                       ├── terraform/           # AWS infrastructure
                                                                       ├── ansible/             # Server configuration
                                                                       ├── docker/              # Docker related files
                                                                       ├── app/
                                                                       │      ├── backend/      # Node.js backend
                                                                       │      └── frontend/     # React frontend + Nginx
                                                                       ├── k8s/
                                                                       │   └── helm/
                                                                       │       └── kiosk-helm/   # Helm chart
                                                                               └── README.md

     ===> Phase 3: Infrastructure Setup (Terraform) :-
                             Infrastructure includes:
                                    Jenkins Master
                                    Jenkins Node
                                    Kubernetes Master Initially, the plan was to create a multi-node Kubernetes cluster:
                                         1 Master node
                                         1 Worker node
                                    Monitoring Server
                                    AWS,VPC, Subnet,Eip,Security Groups, Key Pair
									last Destroy all infra
                                        - All resources are provisioned using Terraform.

<img width="1792" height="1120" alt="apply" src="https://github.com/user-attachments/assets/17261022-52f0-424b-ae5c-9243b8d8f6b0" />
<img width="1792" height="1120" alt="issue" src="https://github.com/user-attachments/assets/a9851721-0699-4983-9d12-cd8a125371c4" />
<img width="1792" height="1120" alt="console output" src="https://github.com/user-attachments/assets/f777b2c9-eb79-4269-bfdb-9761355d3b15" />
<img width="1792" height="1053" alt="console home" src="https://github.com/user-attachments/assets/cc288daa-4a02-4bb8-9610-3d17368fbd5a" />
<img width="1792" height="1120" alt="output" src="https://github.com/user-attachments/assets/23e2ddd0-5923-4ce6-9c6a-649a28a15763" />
<img width="1776" height="1075" alt="instance pic" src="https://github.com/user-attachments/assets/b2d193a5-01a2-4c63-9930-70d9513cc2a3" />
<img width="1790" height="1062" alt="key pair" src="https://github.com/user-attachments/assets/ce456e0d-b2d5-491a-91fd-03d59fef269f" />
<img width="1792" height="1074" alt="subnet" src="https://github.com/user-attachments/assets/2771d47d-ec52-4560-8752-7e6d065f110d" />
<img width="1791" height="1057" alt="Security group" src="https://github.com/user-attachments/assets/108dd39a-ebd8-4365-9f41-f939fd4b05de" />
<img width="1792" height="1076" alt="vpc" src="https://github.com/user-attachments/assets/62df005e-6cce-43f5-83cb-39a1d3d918b3" />
<img width="1792" height="1120" alt="Screenshot 2025-12-15 at 3 26 58 PM" src="https://github.com/user-attachments/assets/c051bbed-2cce-46e6-b8c7-b5820141ef7b" />
<img width="1792" height="1120" alt="Screenshot 2025-12-15 at 3 28 03 PM" src="https://github.com/user-attachments/assets/a83e0f49-8bfd-4353-a9d1-005036012fb8" />
<img width="1792" height="1120" alt="Screenshot 2025-12-15 at 3 28 32 PM" src="https://github.com/user-attachments/assets/9be86de3-524d-4464-a96c-9214bc461c33" />


     ===> Phase 4: Configuration Management (Ansible):-
	 
	- Ansible is used to:
            .Install Docker
            .Install Jenkins
            .Configure Kubernetes prerequisites
            .Install monitoring tools

    - Playbooks are organized per role:
            .Jenkins Master
            .Jenkins Node
            .Kubernetes Master
            .Monitoring Server

<img width="1792" height="1120" alt="ansible pong" src="https://github.com/user-attachments/assets/51cfa074-59ca-489e-b32d-9fe3d9aa7103" />
<img width="1792" height="1120" alt="jenkins master ansible" src="https://github.com/user-attachments/assets/ba921c4b-e175-4c08-8804-adf6245df011" />
<img width="1792" height="1120" alt="kb-2" src="https://github.com/user-attachments/assets/2f8a188d-1c2b-49cb-b69f-f4bffcbb0014" />
<img width="1792" height="1120" alt="k81" src="https://github.com/user-attachments/assets/95b58d08-507f-48f2-a8be-76ae5ae20711" />
<img width="1792" height="1120" alt="k83" src="https://github.com/user-attachments/assets/6dbb3241-86d0-4427-8f89-e8fc7cacf170" />
<img width="1792" height="1120" alt="Screenshot 2025-12-16 at 12 56 31 PM" src="https://github.com/user-attachments/assets/aab2ad33-9e33-4d48-8c70-a0cffdc0cdae" />

       -  After playbook Run:-

<img width="1792" height="1068" alt="jenkins" src="https://github.com/user-attachments/assets/32c3787d-de80-4da3-a990-59a1b08f1493" />
<img width="1792" height="1120" alt="Screenshot 2025-12-15 at 4 25 21 PM" src="https://github.com/user-attachments/assets/512e1ec5-84b4-4e42-aa29-ce00f5ed2d87" />
<img width="1786" height="1066" alt="grafana" src="https://github.com/user-attachments/assets/4bf98b9e-2b0a-42b0-816d-69f9a6c3119c" />
<img width="1792" height="992" alt="prome" src="https://github.com/user-attachments/assets/bb86f8ec-31ff-4256-ba2f-af15adfccc5a" />






										

          



                                                                               


         
                                                                               


                    
