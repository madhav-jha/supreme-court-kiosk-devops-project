pipeline {
    agent {
        label 'docker'
    }

    environment {
        DOCKERHUB_USER = "jhamadhav2025"
        BACKEND_IMAGE  = "kiosk-backend"
        FRONTEND_IMAGE = "kiosk-frontend"
        TAG            = "latest"
    }

    stages {

        stage('SCM Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/madhav-jha/supreme-court-kiosk-devops-project.git'
            }
        }

        stage('Application Build') {
            steps {
                echo "Application already validated locally using Docker Compose"
            }
        }

        stage('Docker Image Build') {
            steps {
                dir('app/backend') {
                    sh "docker build -t $DOCKERHUB_USER/$BACKEND_IMAGE:$TAG ."
                }
                dir('app/frontend') {
                    sh "docker build -t $DOCKERHUB_USER/$FRONTEND_IMAGE:$TAG ."
                }
            }
        }

        stage('Login to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                      echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin
                    '''
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                sh '''
                  docker push $DOCKERHUB_USER/$BACKEND_IMAGE:$TAG
                  docker push $DOCKERHUB_USER/$FRONTEND_IMAGE:$TAG
                '''
            }
        }
    }

    post {
        success {
            emailext(
                subject: "Jenkins Build SUCCESS",
                body: "Build successful. Job: ${env.JOB_NAME} Build: ${env.BUILD_NUMBER}",
                to: "jhamadhav2025@gmail.com"
            )
        }
        failure {
            emailext(
                subject: "Jenkins Build FAILED",
                body: "Build failed. Check Jenkins logs.",
                to: "jhamadhav2025@gmail.com"
            )
        }
    }
}