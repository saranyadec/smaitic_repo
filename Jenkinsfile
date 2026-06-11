pipeline {
    agent any

    environment {
        AWS_REGION = 'ap-south-1'
        ECR_REPO = '850451907464.dkr.ecr.ap-south-1.amazonaws.com/demo'
        IMAGE_TAG = "${BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t demo:${BUILD_NUMBER} .'
            }
        }

        stage('Tag Image') {
            steps {
                sh 'docker tag demo:${BUILD_NUMBER} ${ECR_REPO}:${BUILD_NUMBER}'
            }
        }

        stage('Push Image to ECR') {
            steps {
                sh '''
                aws ecr get-login-password --region ${AWS_REGION} | \
                docker login --username AWS --password-stdin 850451907464.dkr.ecr.ap-south-1.amazonaws.com

                docker push ${ECR_REPO}:${BUILD_NUMBER}
                '''
            }
        }

        stage('Deploy to EKS') {
            steps {
                sh '''
                kubectl set image deployment/node-app \
                node-app=${ECR_REPO}:${BUILD_NUMBER}

                kubectl rollout status deployment/node-app
                '''
            }
        }
    }
}
