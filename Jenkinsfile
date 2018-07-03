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
                sh 'ls -la'
            }
        }
        stage('install') {
            steps {
                sh 'NODE_ENV=development npm ci'
                sh 'ls -la node_modules/'
            }
        }
        stage('test') {
            steps {
                sh 'npm test'
            }
        }
        stage('prune') {
            steps {
                sh 'npm prune --production'
            }
        }
    }
}