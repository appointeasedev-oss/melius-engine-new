async function listFiles(folderPath) {
  const repo = detectGitHubRepo();

  if (repo) {
    const apiUrl = `https://api.github.com/repos/${repo.owner}/${repo.repo}/contents/${folderPath}`;
    const response = await fetch(apiUrl);
    if (!response.ok) return [];

    const payload = await response.json();
    return Array.isArray(payload)
      ? payload.filter((item) => item.type === "file").map((item) => ({
          name: item.name,
          path: item.path,
          size: item.size,
          downloadUrl: item.download_url,
        }))
      : [];
  }

  const fallback = ["1.json", "2.json", "3.json"];
  return fallback.map((name) => ({
    name,
    path: `${folderPath}/${name}`,
    size: 0,
    downloadUrl: `../${folderPath}/${name}`,
  }));
}