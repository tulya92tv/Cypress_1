pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                bat 'npm install'
            }
        }
        stage('parallel') {
            parallel {
                // start several test jobs in parallel, and they all
                // will use Cypress Dashboard to load balance any found spec files
				
                stage('Run tests in parallel A') {
                    steps {
                        bat 'npx cypress run --record --key 8ddfd5f2-344f-4da7-a857-f4d99408cce6 --parallel'
                    }
                }
                stage('Run tests in parallel B') {
                    steps {
                        bat 'npx cypress run --record --key 8ddfd5f2-344f-4da7-a857-f4d99408cce6 --parallel'
                    }
                }
            }
        }
    }
}