import sys
import zipfile
import os
import shutil

def rezip_pptx(filepath):
    if not os.path.exists(filepath):
        print(f"Error: File {filepath} not found.")
        sys.exit(1)
        
    temp_dir = "temp_pptx_extract"
    if os.path.exists(temp_dir):
        shutil.rmtree(temp_dir)
    
    # Extract the original zip
    with zipfile.ZipFile(filepath, 'r') as zip_ref:
        zip_ref.extractall(temp_dir)
        
    # Rezip it
    os.remove(filepath)
    with zipfile.ZipFile(filepath, 'w', zipfile.ZIP_DEFLATED) as zip_ref:
        for root, dirs, files in os.walk(temp_dir):
            for file in files:
                abs_path = os.path.join(root, file)
                rel_path = os.path.relpath(abs_path, temp_dir)
                zip_ref.write(abs_path, rel_path)
                
    shutil.rmtree(temp_dir)
    print(f"Successfully rezipped {filepath}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python rezip.py <file.pptx>")
    else:
        rezip_pptx(sys.argv[1])
