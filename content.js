// GitHubのリンクを監視し、github.ioのリンクを新しいタブで開く
function openGitHubIOLinks() {
  const links = document.querySelectorAll('a');

  links.forEach((link) => {
    const href = link.getAttribute('href');

    if (href && href.includes('github.io')) {
      link.setAttribute('target', '_blank');
    }
  });
}

// ページの読み込みが完了した時にopenGitHubIOLinks関数を実行
window.addEventListener('load', openGitHubIOLinks);
