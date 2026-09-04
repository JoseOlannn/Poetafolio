import glob

for file in glob.glob('src/components/*.tsx'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if '"use client";' in content or "'use client';" in content:
        # Remove all instances of use client
        content = content.replace('"use client";\n', '').replace("'use client';\n", '')
        
        # Put it at the very top
        content = '"use client";\n' + content
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {file}")
