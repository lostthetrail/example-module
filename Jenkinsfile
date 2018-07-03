pipeline {
    agent {
        docker {
            image 'lostthetrail/node-build-agent:latest'
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
        stage('install') {
            steps {
                sh 'npm ci'
            }
        }
    }
}