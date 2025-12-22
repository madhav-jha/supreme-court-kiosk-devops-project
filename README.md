::: Project: “Supreme Court Kiosk – End-to-End DevOps CI/CD with AWS, Docker, Jenkins & Kubernetes (Helm)” :::

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


    (DevOps Phase)
	
	After GitHub push:
	
### Step 1 — Dockerfile
### Step 2 — Build & Push Docker Image
### Step 3 — Jenkins CI Pipeline
### Step 4 — Deployment on Kubernetes
### Step 5 — Helm chart
### Step 6 — Monitoring (Prometheus + Grafana)

 
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


 ===> Phase 5: CI/CD Pipeline (Jenkins):-
 
 - Pipeline Stages
   
       1.SCM Checkout
       2.Docker Image Build
       3.DockerHub Login
       4.Push Images to DockerHub
       5.Deploy to Kubernetes using Helm

  - Jenkinsfile Highlights
    
      .Uses Jenkins agent node
      .Secure credentials handling
      .Fully automated CI + CD

<img width="1778" height="1065" alt="jenkins 0" src="https://github.com/user-attachments/assets/587624f8-7b62-4939-ab3b-69da1676448a" />
<img width="1787" height="1071" alt="after ansible plabook node pic" src="https://github.com/user-attachments/assets/1db10a93-765c-461f-bea1-0ddb69ca9b30" />
<img width="1777" height="1062" alt="jenkins node" src="https://github.com/user-attachments/assets/cd32605c-8774-493a-934b-7f72df9d2894" />
<img width="1784" height="1071" alt="jenkins -1" src="https://github.com/user-attachments/assets/dc2a9a04-3a5a-4e1f-981a-334e476d7a8b" />
<img width="1792" height="820" alt="creditnal" src="https://github.com/user-attachments/assets/d047ca16-0974-481b-95f0-6acff508bbbd" />
<img width="1784" height="1065" alt="Email notification" src="https://github.com/user-attachments/assets/a08ac973-7dd7-4d74-a66b-23a0de1e9e92" />
<img width="1782" height="1074" alt="wavehook" src="https://github.com/user-attachments/assets/365a36c3-752d-4a77-bf25-9d4ec712d52d" />
<img width="1776" height="1057" alt="Screenshot 2025-12-16 at 3 39 21 PM" src="https://github.com/user-attachments/assets/c263250e-7f62-402f-85ec-cec722083d7a" />
<img width="1782" height="1065" alt="Screenshot 2025-12-16 at 4 14 54 PM" src="https://github.com/user-attachments/assets/c42a4fe3-08e0-41b7-999b-da51527a7899" />
<img width="1786" height="1069" alt="Screenshot 2025-12-17 at 10 41 30 AM" src="https://github.com/user-attachments/assets/d1139eab-32ba-4e84-8124-a84507f6553a" />
<img width="1792" height="1120" alt="Screenshot 2025-12-17 at 11 08 01 AM" src="https://github.com/user-attachments/assets/27857af3-67c4-411f-9467-ed8668c9a1a1" />
<img width="1792" height="1120" alt="Screenshot 2025-12-17 at 11 08 50 AM" src="https://github.com/user-attachments/assets/58b4ab4b-4135-458b-9d82-e06cbdb2563c" />
<img width="1766" height="1068" alt="Screenshot 2025-12-18 at 2 46 28 PM" src="https://github.com/user-attachments/assets/5e635043-6434-4613-a682-00fc12b2eca5" />
<img width="1788" height="1055" alt="Screenshot 2025-12-17 at 11 05 04 AM" src="https://github.com/user-attachments/assets/150e2cec-0903-470b-98c4-8fb76413e5bc" />
<img width="1779" height="1075" alt="Screenshot 2025-12-18 at 2 46 28 PM" src="https://github.com/user-attachments/assets/1d48cbbd-c1ca-48a6-bcc3-caa0f66253ab" />

 ===> Phase 6: Docker Implementation :-
 
	      .Separate Dockerfiles for backend and frontend
          .Multi-stage build for frontend
		  
          .Images pushed to DockerHub:
		  
               - jhmadhav2025/kiosk-backend
               - jhmadhav2025/kiosk-frontend

<img width="1769" height="1078" alt="Screenshot 2025-12-18 at 3 57 36 PM" src="https://github.com/user-attachments/assets/4bc2fd9f-322c-4fb4-9228-8f6f914fd5cd" />
<img width="1792" height="1120" alt="Screenshot 2025-12-17 at 11 01 38 AM" src="https://github.com/user-attachments/assets/3a138c0e-2289-4039-b79a-db191edaebc5" />
<img width="1784" height="935" alt="Screenshot 2025-12-18 at 3 57 48 PM" src="https://github.com/user-attachments/assets/7be0e38c-6593-4950-ad73-2afc1f80798e" />
<img width="1792" height="1120" alt="Screenshot 2025-12-17 at 11 06 51 AM" src="https://github.com/user-attachments/assets/b0837d44-2849-4cfc-a8e3-b0958a708bf1" />
<img width="1792" height="1120" alt="Screenshot 2025-12-17 at 11 04 54 AM" src="https://github.com/user-attachments/assets/4f233c32-8776-4eb7-8b58-abb988b848c2" />
<img width="1788" height="1055" alt="Screenshot 2025-12-17 at 11 05 04 AM" src="https://github.com/user-attachments/assets/27e977b9-518b-4962-b6bd-2405c51caada" />
<img width="1792" height="348" alt="Screenshot 2025-12-17 at 11 05 14 AM" src="https://github.com/user-attachments/assets/78d1bc19-ef97-48d5-8531-423dd4d8137b" />

 ===> Phase 7 : Kubernetes Implementation :-
 
      -  initial Plan
            -Initially, the plan was to create a multi-node Kubernetes cluster:
                1 Master node
                1 Worker node

	 - Challenges Faced	
	 
	       - During the multi-node setup, the following issues were encountered:
		       .kubelet bootstrap failures
               .Worker node join timeout
               .CNI networking instability
               .API server connectivity issues (port 6443) 
			   .Configuration mismatch during repeated provisioning
			   
     - These issues were mainly due to:
	 
	          .Learning-phase environment
              .Limited production-grade networking setup
              .Self-managed Kubernetes complexity

<img width="1792" height="1120" alt="Screenshot 2025-12-16 at 12 43 01 PM" src="https://github.com/user-attachments/assets/f3a34c93-224a-452e-8461-ddeba022ee19" />
<img width="1792" height="1120" alt="Screenshot 2025-12-16 at 11 52 08 AM" src="https://github.com/user-attachments/assets/4f1e80bc-42d6-4e54-a09a-9ff7b6e181a3" />
<img width="1792" height="1120" alt="2" src="https://github.com/user-attachments/assets/a8f4e86d-7fe8-444a-a215-c29f84f7dbe4" />
<img width="1792" height="1120" alt="3" src="https://github.com/user-attachments/assets/2d5b442d-2281-4abb-9b0e-3c62781cf725" />
<img width="1792" height="1120" alt="error" src="https://github.com/user-attachments/assets/b596ec06-b7e3-4b3e-bbed-b09332d173bb" />

     ===> Final Approach (Stable Solution) :-
	 
	      - To ensure stability and successful deployment, the architecture was simplified:
                 .Switched to single-node Kubernetes cluster
                 .Used kubeadm for cluster initialization
                 .Deployed application using Helm charts
                 .Focused on:
                    Pod lifecycle
                    Services (ClusterIP & NodePort)
                    Helm-based deployments
					
     ===> Phase 7 :Helm Deployment :-
	 
	       - Custom Helm chart created under:
		          # k8s/helm/kiosk-helm
		   - Helm manages:
		         Backend Deployment & Service
                 Frontend Deployment & NodePort Service
           - Values are configurable via values.yaml
		        Deployment command:
				  # helm install kiosk ./k8s/helm/kiosk-helm
                  #helm upgrade kiosk ./k8s/helm/kiosk-helm

				  
<img width="1792" height="1078" alt="Screenshot 2025-12-18 at 11 02 51 AM" src="https://github.com/user-attachments/assets/e6a33f68-b03a-42a9-b137-0e1cec5ec332" />
<img width="1792" height="1120" alt="Screenshot 2025-12-18 at 12 13 56 PM" src="https://github.com/user-attachments/assets/b510d8be-a3a8-45e7-ac33-cdd073d7b922" />
<img width="1792" height="1120" alt="Screenshot 2025-12-18 at 12 31 19 PM" src="https://github.com/user-attachments/assets/c436e5f7-6f06-47bf-a498-77c3a6623794" />
<img width="1792" height="1120" alt="Screenshot 2025-12-18 at 3 57 10 PM" src="https://github.com/user-attachments/assets/b643551e-5c3f-4f8e-8a90-5cb182e04841" />
<img width="1784" height="1061" alt="Screenshot 2025-12-18 at 3 51 14 PM" src="https://github.com/user-attachments/assets/b84113d5-9c73-433c-941d-b18be4adfc07" />
<img width="1769" height="1069" alt="Screenshot 2025-12-18 at 3 52 36 PM" src="https://github.com/user-attachments/assets/767ed1d8-5cb4-4fa6-8756-db41387e398b" />
<img width="1779" height="1062" alt="Screenshot 2025-12-18 at 3 52 50 PM" src="https://github.com/user-attachments/assets/47583d1d-cdce-4de7-ba29-57bd434e8bd9" />
<img width="1792" height="1120" alt="Screenshot 2025-12-18 at 3 57 10 PM" src="https://github.com/user-attachments/assets/14b8a20a-da9e-4f6f-a7e0-f98e4d2393d9" />

    ===> Phase 8 : Monitoring Setup:-
	
           . Prometheus & Grafana deployed using Helm
           .Metrics collected for:
                  .Node
                  .Pods
                  .Kubernetes components
           .Grafana dashboards accessible via NodePort

		   .Validation Commands:
		        kubectl get nodes
                kubectl get pods
                 kubectl get svc
	   
<img width="1792" height="1120" alt="Screenshot 2025-12-18 at 12 31 19 PM" src="https://github.com/user-attachments/assets/b67450c9-c10c-4ea9-beb8-c37c751d8e7c" />
<img width="1792" height="1120" alt="Screenshot 2025-12-18 at 4 01 39 PM" src="https://github.com/user-attachments/assets/898567bc-320a-4b08-8920-b7e634e2b607" />
<img width="1792" height="1120" alt="Screenshot 2025-12-18 at 4 01 39 PM" src="https://github.com/user-attachments/assets/b8c325c5-3000-45de-bdb6-23d1b445252b" />
<img width="1792" height="1120" alt="Screenshot 2025-12-18 at 4 04 11 PM" src="https://github.com/user-attachments/assets/512a1462-0a00-49e8-b79c-410bdde71bbf" />
<img width="1786" height="1062" alt="Screenshot 2025-12-18 at 4 06 12 PM" src="https://github.com/user-attachments/assets/73125012-462f-45fe-8bef-6b3cefc46e92" />
<img width="1785" height="1010" alt="Screenshot 2025-12-18 at 4 06 08 PM" src="https://github.com/user-attachments/assets/88fd68fd-86c6-4d7f-be05-9b00290f54cf" />


 ===> Phase 9: Infra Destroyed:

<img width="1792" height="1120" alt="Screenshot 2025-12-18 at 4 23 14 PM" src="https://github.com/user-attachments/assets/46f6e279-4ce0-42fb-8ed7-2fdeabb4d570" />
<img width="1792" height="1120" alt="Screenshot 2025-12-18 at 4 23 23 PM" src="https://github.com/user-attachments/assets/7fa5867b-c414-4958-b8bf-ad9ece04e7c2" />


   ===> Key Learnings

        Practical understanding of CI/CD pipelines
        Docker image lifecycle and registry management
        Kubernetes fundamentals (Pods, Services, Deployments)
        Helm for application packaging and deployment
        Importance of simplifying architecture during learning phase
        Real-world troubleshooting mindset


   - Note on Kubernetes Scope:

      This project focuses on basic and stable Kubernetes deployment.
      Advanced setups like:
          Multi-node clusters
          Managed Kubernetes (EKS)
          are planned as future improvements.

 - Future Enhancements:

    Migrate to AWS EKS
    Add worker nodes & autoscaling
    GitOps using ArgoCD
    Centralized logging
    Secure secret management
		   



👤 Author
Madhav Jha
DevOps Learner
Hands-on with Linux, Docker, Jenkins, Kubernetes, Helm, AWS & Monitoring





										

          



                                                                               


         
                                                                               


                    
