import os
import re
import sys

def fix_details_tags(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Match <details> and <summary> tags and ensure they are on new lines
    # Also ensure there is a blank line after <summary>...</summary> and before </details>
    
    # 1. Handle <details><summary>...</summary>... </details> (single line or mixed)
    def replace_details(match):
        summary = match.group(1).strip()
        body = match.group(2).strip()
        return f"\n<details>\n<summary>{summary}</summary>\n\n{body}\n\n</details>\n"

    # Regex to find <details> blocks. This is a bit simplistic but should work for the current files.
    # It looks for <details>, then <summary>...</summary>, then everything until </details>
    pattern = re.compile(r'<details>\s*<summary>(.*?)</summary>(.*?)</details>', re.DOTALL)
    new_content = pattern.sub(replace_details, content)

    if content != new_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed: {file_path}")
    else:
        print(f"No changes: {file_path}")

def process_directory(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.md'):
                fix_details_tags(os.path.join(root, file))

if __name__ == "__main__":
    if len(sys.argv) > 1:
        target = sys.argv[1]
        if os.path.isdir(target):
            process_directory(target)
        else:
            fix_details_tags(target)
    else:
        print("Usage: python3 fix_details.py <file_or_directory>")
