import { html } from '@tp/preact/htm_preact.mjs';

export default function SidePanel( { title, children, isRight=false } ){
    return html`
    <div class="side-panel ${isRight?'right':'left'}">
        <header>
            <span>${title}</span>
            <div></div>
        </header>
        <main>${children}</main>
    </div>`;
}
