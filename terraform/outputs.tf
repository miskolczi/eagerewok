output "ip_public_eagerewok" {
  value = ["${aws_instance.eagerewok.*.public_ip}"]
}
