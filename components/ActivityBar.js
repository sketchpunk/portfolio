import { html } from '@tp/preact/htm_preact.mjs';

export default function ActivityBar(){
    return html`
    <div class="activity-bar">
        <header>
            <button class="active"><i class="fa-regular fa-copy"></i></button>
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
            <button><i class="fa-solid fa-code-branch"></i></button>
        </header>

        <footer>
            <button title='Goto Repo' onClick="${()=>openUrl('https://github.com/sketchpunk/portfolio')}"><i class="fa-brands fa-github"></i></button>
        </footer>
    </div>`;
}

function openUrl( url ){ window.open( url, '_blank', 'noreferrer' ); }
