pipeline {
    agent {
        docker {
            image 'node:8.11.3-alpine'
        }
    }
    options {
        timestamps()
    }
    stages {
        stage('debug') {
            steps {
                sh 'printenv'
                sh 'node -v'
                sh 'npm -v'
            }
        }
    }
}