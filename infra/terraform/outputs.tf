output "jenkins_master_ip" {
  value = aws_eip.jenkins_master.public_ip
}

output "jenkins_node_ip" {
  value = aws_eip.jenkins_node.public_ip
}

output "app_docker_ip" {
  value = aws_eip.app_docker.public_ip
}

output "k8s_node_ip" {
  value = aws_eip.k8s_node.public_ip
}

output "monitoring_ip" {
  value = aws_eip.monitoring.public_ip
}
