import os, glob, re

for file in glob.glob('src/components/*.tsx'):
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if 'useReducedMotion' in content:
        # First, add the import at the top
        content = 'import { useSafeReducedMotion } from "@/hooks/useSafeReducedMotion";\n' + content
        
        # Remove useReducedMotion from framer-motion imports
        content = re.sub(r'useReducedMotion\s*,\s*', '', content)
        content = re.sub(r',\s*useReducedMotion', '', content)
        content = re.sub(r'import\s*\{\s*useReducedMotion\s*\}\s*from\s*[\'"]framer-motion[\'"];?\n?', '', content)
        
        # Replace remaining usages
        content = content.replace('useReducedMotion', 'useSafeReducedMotion')
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file}")
