//github.ioのリンクを新しいタブで開く
function openGitHubIOLinks() {
  const links = document.querySelectorAll('a');

  links.forEach((link) => {
    const href = link.getAttribute('href');

    if (href && href.includes('github.io')) {
      link.setAttribute('target', '_blank');
    }
  });
}

window.addEventListener('load', openGitHubIOLinks);
