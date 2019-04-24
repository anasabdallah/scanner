Get-Content -Path .\targetGroups.txt | ForEach-Object {
    aws elbv2 describe-target-health --target-group-arn $_ >> final.txt
}