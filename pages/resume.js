import { html } from '@tp/preact/htm_preact.mjs';

function genNum( a, b ){
    let rtn = '';
    for( let i = a; i <= b; i++ ) rtn += i.toString().padStart( 3, '0' ) + ' ';
    return rtn;
}

export default function content(){
    return html`
<a class="btn" style="position: absolute; right:5px; top:10px;"
    href="https://docs.google.com/document/d/1ka0awd1_lzaMTcWVXT7ZzR-bzeJH3yOEITAfI_GU3NQ/edit?usp=sharing" target="_blank">Download</a>

<div class="resume-code">
<code>${genNum(0,60)}</code>
<code><pre>

<h1><i>■</i> Zonda — Senior 3D Web Developer <i>///</i> MAR 2026 - Current</h1>
<h2><i>│</i> *** TechStack ::: Web Components, BabylonJS, WebGL, GLSL, JavaScript, HTML, CSS ***<br/><i>│</i></h2>
<p><i>└─</i> • Maintain & Add features to their 3D Architectural Layout Viewer.</p>
<br/>

<h1><i>■</i> Cartwheel — Frontend & 3D Developer <i>///</i> MAR 2025 - JAN 2026</h1>
<h2><i>│</i> *** TechStack ::: React, React Fiber, Threejs, WebGL, GLSL, Python, TypeScript, Tailwind ***<br/><i>│</i></h2>
<p><i>├─</i> • Developed a 3D Character posing tool to work with Google's Nano Banana AI to
<br/><i>│</i>    generate prompted images using the exact mannequin pose & camera angles the
<br/><i>│</i>    user set in the 3D scene.
<br/><i>│</i></p>
<p><i>└─</i> • Port my IK Animation library to python to be used in backend use. First being
     to handle IK retargeting of AI generated animations onto rigged characters.</p>

<br/>
<h1><i>■</i> Anectotal @ Meta — Software Engineer <i>///</i> JUN 2021 - FEB 2025</h1>
<h2><i>│</i> *** TechStack ::: React, Threejs, WebGL, GLSL, Flow, PHP ***<br/><i>│</i></h2>
<p><i>├─</i> • Build various internal tooling apps using maplibre for employees to perform various tasks.</p>
<p><i>├─</i> • Created a 3D point cloudf viewing & annotation web app.</p>
<p><i>├─</i> • Made a tool to review horizon world AI generated skyboxes & ambient sounds.</p>
<p><i>├─</i> • Prototyped WebXR experience of walking over map tiles rendered with heightmaps.</p>
<p><i>├─</i> • Prototyped basic webbased 3D mesh editor.</p>
<p><i>├─</i> • Prototyped 3D Tiles libary that can stream & render content of various LOD.</p>
<p><i>└─</i> • Prototyped switch to WebGL powered rendering for iD, fork of RapID Opensource Project.</p>

<br/>
<h1><i>■</i> FD Software — Integration Engineer <i>///</i> OCT 2020 - JUN 2021 <i>///</i> Army - DoD Secret Clearance</h1>
<h2><i>│</i> *** TechStack ::: C++, Java ***<br/><i>│</i></h2>
<p><i>├─</i> • Maintaining 3D Map Engine.</p>
<p><i>└─</i> • Start development of new OpenGL Rendering Engine for Android App.</p>

<br/>
<h1><i>■</i> Probus Test Systems — Software Engineer <i>///</i> JAN 2019 - OCT 2020 <i>///</i> Navy - DoD Clearance</h1>
<h2><i>│</i> *** TechStack ::: Threejs, WebGL, GLSL, JavaScript, Java, MySQL ***<br/><i>│</i></h2>
<p><i>├─</i> • Create restful web services using websockets.</p>
<p><i>├─</i> • Developed 3D Simulation of Navy crafts in the ocean using mock data.</p>
<p><i>└─</i> • Developed a web based 3D helicopter using Hotus Flight stick input for taversal in ocean sim.</p>

<br/>
<h1><i>■</i> Z2 Technologies — Senior Software Engineer <i>///</i> JAN 2010 - APR 2018 <i>///</i> Army DoD Non-Secret Clearance</h1>
<h2><i>│</i> *** TechStack ::: C++, C#, WPF, Asp.net, Coldfusion, Java, Android, JavaScript, CSS ***<br/><i>│</i></h2>
<p><i>├─</i> • Help build web based inventory management & cloud services.</p>
<p><i>├─</i> • Created desktop application with BlueTooth barcode scanner for offline inventory work.</p>
<p><i>├─</i> • Created android app with a camera barcode scanner as a portable alternative.</p>
<p><i>├─</i> • Created repairs help desk android app to handle rapid response for soldier enquiries.</p>
<p><i>├─</i> • Managed SVN & Dev Servers for the company.</p>
<p><i>└─</i> • Prototyped dropbox like application for miltary use to handle secure data backups.</p>

<br/>
<h1><i>■</i> Maher & Maher — Web Developer / IT Support <i>///</i> DEC 2003 - DEC 2009 <i>///</i> DOL No Clearance</h1>
<h2><i>│</i> *** TechStack ::: Coldfusion, Asp.net, JavaScript, CSS, SQL ***<br/><i>│</i></h2>
<p><i>├─</i> • Developed an LMS ( Learning Managment System ) to facilitate training material.</p>
<p><i>├─</i> • Developed a CMS ( Content Management System ) for President Bush’s Workforce Initiative.</p>
<p><i>├─</i> • Developed & Maintain various DOL sponsored websites.</p>
<p><i>├─</i> • Was the company's Database Administrator.</p>
<p><i>└─</i> • Managed interal and external servers of various types, along tech support for company hardware.</p>
</pre></code></div>`;
}

content.title = 'Resume';

/*
└─
°  º Ø • ■
├─
┌
│
»
*/
