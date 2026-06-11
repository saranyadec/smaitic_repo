**Career Objective**

To build my career as a DevOps Engineer by applying my knowledge of AWS, Kubernetes, CI/CD, and cloud technologies to deliver secure, scalable, and efficient solutions while continuously learning and improving my technical skills.

**Project Overview**

This project demonstrates the deployment of a Node.js application on Amazon EKS using Kubernetes. The application is containerized using Docker and deployed through a Jenkins CI/CD pipeline. Monitoring is implemented using Prometheus and Grafana, and ELK architecture is proposed for centralized logging.

**Technologies Used**
Node.js
Docker
Amazon ECR
Amazon EKS
Kubernetes
Jenkins
Prometheus
Grafana

**Architectural Decisions**

Amazon EKS was chosen to manage Kubernetes workloads efficiently.
Amazon ECR was used to store Docker images securely.
Jenkins was used to automate the build and deployment process.
Kubernetes manifests were used instead of Helm charts.
Prometheus and Grafana were selected for monitoring because they are widely used open-source tools.


**Setup Instructions**
**1. Create EKS Cluster**
eksctl create cluster -f cluster.yaml

Verify the cluster:

kubectl get nodes

**2. Build Docker Image**
docker build -t demo:v1 .

**3. Push Docker Image to Amazon ECR**
<img width="1920" height="1008" alt="Screenshot 2026-06-11 124336" src="https://github.com/user-attachments/assets/2d64bcc8-fb23-4d9b-a7ba-a903237b039f" />

docker tag demo:v1 <ACCOUNT_ID>.dkr.ecr.ap-south-1.amazonaws.com/demo:v1

docker push <ACCOUNT_ID>.dkr.ecr.ap-south-1.amazonaws.com/demo:v1

**4. Deploy the Application to EKS**
kubectl apply -f deployment.yaml

kubectl apply -f service.yaml

kubectl apply -f ingress.yaml

**5. Verify the Deployment**

Check pods:

kubectl get pods

Check services:

kubectl get svc

Check deployments:

kubectl get deployments

Accessing the Application

kubectl get svc
<img width="1920" height="1008" alt="Screenshot 2026-06-11 123256" src="https://github.com/user-attachments/assets/ba6dd88a-1a76-4f43-a3a2-10606cb74e68" />


Open the Load Balancer DNS name in the browser to access the Node.js application.

Jenkins Pipeline Stages
<img width="1920" height="1008" alt="Screenshot 2026-06-11 171822" src="https://github.com/user-attachments/assets/11f7f4ad-c36d-40a1-bf6f-acc7fd8f82e8" />

<img width="1920" height="1008" alt="Screenshot 2026-06-11 180610" src="https://github.com/user-attachments/assets/b0ab6455-5e95-42da-866c-4d90c3faa3c8" />


The Jenkins pipeline performs the following steps:

Checkout source code from GitHub.
Build the Docker image.
Tag the Docker image.
Push the Docker image to Amazon ECR.
Deploy the updated application to Amazon EKS.
Verify the deployment rollout.
Monitoring

Prometheus and Grafana configurations were created to monitor the Kubernetes environment and application metrics.

**Security Best Practices**
Containers run as non-root users.
Liveness and readiness probes are configured.
Resource requests and limits are defined.
Sensitive information is excluded from the GitHub repository.

**Project Structure**
.
├── Dockerfile
├── Jenkinsfile
├── cluster.yaml
├── deployment.yaml
├── service.yaml
├── ingress.yaml
├── prometheus-config.yaml
├── prometheus-deployment.yaml
├── prometheus-service.yaml
├── grafana-deployment.yaml
├── grafana-service.yaml
├── app.js
├── package.json
└── README.md
**Conclusion**

This project demonstrates the implementation of a complete DevOps workflow, including containerization, Kubernetes deployment, CI/CD automation and monitoring using AWS services and industry best practices.
