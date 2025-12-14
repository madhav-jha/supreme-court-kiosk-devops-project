output "jenkins_master_ip" {
  value = aws_eip.jenkins_master_eip.public_ip
}

output "jenkins_node_public_ip" {
  value = aws_eip.jenkins_node_eip.public_ip
}

output "k8s_master_ip" {
  value = aws_eip.k8s_master_eip.public_ip
}


output "k8s_worker_public_ip" {
  value = aws_eip.k8s_worker_eip.public_ip
}

output "monitoring_ip" {
  value = aws_eip.monitoring_eip.public_ip
}
