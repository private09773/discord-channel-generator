const maps = {
    Typewriter: {'a':'𝚊','b':'𝚋','c':'𝚌','d':'𝚍','e':'𝚎','f':'𝚏','g':'𝚐','h':'𝚑','i':'𝚒','j':'𝚓','k':'𝚔','l':'𝚕','m':'𝚖','n':'𝚗','o':'𝚘','p':'𝚙','q':'𝚚','r':'𝚛','s':'𝚜','t':'𝚝','u':'𝚞','v':'𝚟','w':'𝚠','x':'𝚡','y':'𝚢','z':'𝚣'},
    Premium: {'a':'𝕒','b':'𝕓','c':'𝕔','d':'𝕕','e':'𝕖','f':'𝕗','g':'𝕘','h':'𝕙','i':'𝕚','j':'𝕛','k':'𝕜','l':'𝕝','m':'𝕞','n':'𝕟','o':'𝕠','p':'𝕡','q':'𝕢','r':'𝕣','s':'𝕤','t':'𝕥','u':'𝕦','v':'𝕧','w':'𝕨','x':'𝕩','y':'𝕪','z':'𝕫'},
    SmallCaps: {'a':'ᴀ','b':'ʙ','c':'ᴄ','d':'ᴅ','e':'ᴇ','f':'ꜰ','g':'ɢ','h':'ʜ','i':'ɪ','j':'ᴊ','k':'ᴋ','l':'ʟ','m':'ᴍ','n':'ɴ','o':'ᴏ','p':'ᴘ','q':'ǫ','r':'ʀ','s':'s','t':'ᴛ','u':'ᴜ','v':'ᴠ','w':'ᴡ','x':'x','y':'ʏ','z':'ᴢ'}
};

const decorations = [
    '│', '┃', '╽', '╿', '╏', '║', '╎', '┇', '︱', '┊', '︳', '┋', '┆', '〡',
    '✨', '📌', '⭐', '✦', '✧', '❖', '❄️', '🔥', '🌊', '⚡', '🌙', '🌸'
];

function populateDecorations() {
    const select = document.getElementById('sepSelect');
    decorations.forEach(deco => {
        const opt = document.createElement('option');
        opt.value = deco;
        opt.textContent = deco;
        select.appendChild(opt);
    });
}

function updateAll() {
    const input = document.getElementById('input').value;
    const container = document.getElementById('generator-list');
    const selectedSep = document.getElementById('sepSelect').value;
    container.innerHTML = '';

    for (let style in maps) {
        // Convert text character by character
        const converted = input.split('').map(char => {
            const lowerChar = char.toLowerCase();
            return maps[style][lowerChar] || char;
        }).join('');
        
        const result = `${selectedSep} ${converted} ${selectedSep}`;
        
        const div = document.createElement('div');
        div.className = 'font-card';
        div.innerHTML = `<span>${style}</span><div class="result">${result}</div>`;
        div.onclick = () => {
            navigator.clipboard.writeText(result).then(() => {
                alert("Copied: " + result);
            });
        };
        container.appendChild(div);
    }
}
