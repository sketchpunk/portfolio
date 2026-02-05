// #region IMPORTS
    import { html }                 from '@tp/preact/htm_preact.mjs';
    import { useEffect, useRef }    from '@tp/preact/hooks.mjs';
    // import { useSignal }            from '@tp/preact/signals.mjs';

    import ActivityBar  from '@com/ActivityBar.js';
    import SidePanel    from '@com/SidePanel.js';
    import MainPanel    from '@com/MainPanel.js';
    import FooterBar    from '@com/FooterBar.js';
    import PanelSection from '@com/PanelSection.js';
    import TreeNode     from '@com/TreeNode.js';

    import Router       from '@lib/Router.js';

    import * as store   from '@data/store.js';
    import TREE         from '@data/tree.json' with { type:'json' };
    import ROUTES       from '@data/routes.json' with { type:'json' }
// #endregion



export default function App(){
    useEffect( ()=>{
        Router.instance.loadJson( ROUTES );
        if( !Router.instance.check() ) Router.instance.goto( '/README.md' );
        // Router.instance.goto( '/src/resume.txt' );
        // Router.instance.goto( '/src/demos.tsx' );
        // Router.instance.goto( '/src/projects.tsx' );
    }, []);

    return html`
    <div class="layout-container">
        <${ActivityBar} />
        <${SidePanel} title="Explorer">
            <${PanelSection} title="Project">
                ${TREE.map(i=>html`<${TreeNode} json=${i} depth="0" />`)}
            <//>
        <//>
        <${MainPanel} />
    </div>
    <${FooterBar} />`;
}
