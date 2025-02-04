$baseDir = ".."

# Get all directories (ignoring hidden folders)
$dirs = Get-ChildItem -Path $baseDir -Directory | Where-Object { $_.Name -notmatch "^\." } | Select-Object -ExpandProperty Name

# Get all files inside each directory (ignoring hidden files)
$output = @("cell00")  # Start with "cell00" as the base directory name
foreach ($dir in $dirs) {
    $output += $dir  # Add the folder name
    $files = Get-ChildItem -Path "$baseDir\$dir" -File | Where-Object { $_.Name -notmatch "^\." } | Select-Object -ExpandProperty Name
    $output += $files  # Add files inside the folder
}

# Print output in required format (comma-separated)
$output -join ","