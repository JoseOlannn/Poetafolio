import os
import shutil

public_dir = r"c:\Users\jose.olan\Documents\Portafolio\public"

folders = {
    "images": ["Infocod.png", "Jose_Olan.jpeg"],
    "certs": [
        "oci-data-science.jpg",
        "oci-ai.jpg",
        "oci-foundations.jpg",
        "microsoft-certified-fundamentals-badge.svg",
        "github-foundations.svg",
        "data-fundamentals.png"
    ],
    "badges": [
        "core-skills-learning-path.png",
        "data-science-essentials-with-python.png",
        "from-relational-model-sql-to-mongodbs-document-mode.1.png",
        "google-cloud-computing-foundations-certificate.png",
        "google-cloud-data-analytics-certificate.png",
        "google-cloud-engineering-certificate.png",
        "google-data-analytics-professional-certificate-v-3-Photoroom.png",
        "lfs162-introduction-to-devops-and-site-reliability-.png",
        "red-hat-ai-foundations-executive-skills-badge.png"
    ],
    "pdfs": []  # Empty folder for user to upload PDFs
}

for folder, files in folders.items():
    folder_path = os.path.join(public_dir, folder)
    os.makedirs(folder_path, exist_ok=True)
    
    for file in files:
        src = os.path.join(public_dir, file)
        dst = os.path.join(folder_path, file)
        if os.path.exists(src):
            shutil.move(src, dst)
            print(f"Moved {file} to {folder}/")

print("Done organizing.")
