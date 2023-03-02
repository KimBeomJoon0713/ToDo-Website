const content = document.querySelector('h2#content');
const author = document.querySelector('h4#autor');

async function get_wise_sying() {
    const wise_saying_api = await fetch('https://api.quotable.io/random');
    const result = await wise_saying_api.json();
    content.innerHTML = result.content;
    author.innerHTML = result.author;
}

get_wise_sying();
