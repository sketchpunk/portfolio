// #region IMPORTS
    import { html } from '@tp/preact/htm_preact.mjs';
// #endregion

export default function content(){
    const imgPath = globalThis.ROOTPATH + '/pages/img/demos';

    return html`<div class="projects">
        <section>
            <header>
                <i class="fa-solid fa-person"></i>
                <div>
                    <h1>The Linkle Project</h1>
                    <a href="https://sketchpunk.gitlab.io/linkle/" target="_blank">https://sketchpunk.gitlab.io/linkle/</a>
                    <h2>
                        <div><i class="bg_cyan"></i><span>Blender 3D</span></div>
                        <div><i class="bg_yellow"></i><span>JavaScript</span></div>
                        <div><i class="bg_lime"></i><span>Three.js</span></div>
                    </h2>
                </div>
            </header>
            <main>
                <p>
                    Project main focus is to prototype an animation system akin to what exists in game engines but are not available in web libraries.
                    From there build a rebust traversal & combat system that can be used by anyone to build action adventure / RPGs using only web technologies.
                </p>

                <p>
                    The star of the show is "Linkle", a character that was modded into Zelda: Breath of the wild game. I learned how to rip the contents out
                    of the mod to get access to the mesh & animation assets. These ripped assets needed a bit of TLC in blender 3D to get them into a usable
                    state to work together and on the web. Not only does it provide all the assets needed to make a nice looking prototype but its fun to
                    try to rebuilt pieces of the game into a web project.
                </p>

                <h4>Features:</h4>
                <ul>
                    <li>System for Attaching & Animation Character Assets</li>
                    <li>1D / 2D Blend spaces</li>
                    <li>Animation Clip Event Triggers</li>
                    <li>State Machines</li>
                    <li>Blend Trees</li>
                    <li>Building custom tools & UIs</li>
                    <li>Most likely many many more</li>
                </ul>

                <br/><h4>Milestones:</h4>
                <ul>
                    <li>Phase 1: Hack & Slash Combat System</li>
                    <li>Phase 2: FreeFlow Comabt System</li>
                    <li>Phase 3: Swim, Flying & Climbing System</li>
                    <li>Phase 4: Procedural Dungeon Generation & Exploration</li>
                </ul>
            </main>
        </section>

        <section>
            <header>
                <i class="fa-solid fa-person"></i>
                <div>
                    <h1>Ossos - IK Animation Library</h1>
                    <a href="https://github.com/sketchpunklabs/ossos" target="_blank">https://github.com/sketchpunklabs/ossos</a>
                    <h2>
                        <div><i class="bg_yellow"></i><span>TypeScript</span></div>
                        <div><i class="bg_cyan"></i><span>GLSL</span></div>
                        <div><i class="bg_lime"></i><span>Three.js</span></div>
                    </h2>
                </div>
            </header>
            <main>
                <p>
                    A renderer agnostic library build for animating 3D characters. Contains various
                    skinning solutions, animation systems, inverse kinematrics and character rigs.
                </p>

                <h4>Skinning Methods:</h4>
                <ul>
                    <li>Matrices</li>
                    <li>Transform to Matrices</li>
                    <li>Dual Quaternions</li>
                    <li>DQ Transforms</li>
                    <li>SQT ( Scale, Quaternions, Translations )</li>
                </ul>

                <br/><h4>Analytical IK Solvers:</h4>
                <blockquote>
                    Aim, SwingTwist, Limb, Arc, ArcSin, Piston, Spring, Trapezoid, Z and Catenary.
                </blockquote>

                <br/><h4>Iterative Solvers:</h4>
                <blockquote>
                    CCD, FABRIK, SplineIK and Joint Springs.
                </blockquote>
            </main>
        </section>

        <section>
            <header>
                <i class="fa-solid fa-calculator"></i>
                <div>
                    <h1>Oito - Math Library</h1>
                    <a href="https://github.com/sketchpunklabs/oito" target="_blank">https://github.com/sketchpunklabs/oito</a>
                    <h2>
                        <div><i class="bg_yellow"></i><span>TypeScript</span></div>
                        <div><i class="bg_lime"></i><span>Three.js</span></div>
                    </h2>
                </div>
            </header>
            <main>
                <p>
                    A math library built to support all my more ambitions 3D projects. Built as a collection of sub packages of various feature sets.
                </p>

                <h4>Sub Packages:</h4>
                <ul>
                    <li><b>Core</b> - fundimental math objects that deal with lerping, gradients, waves, hashes, bitsets, etc,</li>
                    <li><b>Curves</b> - Collection of 2D & 2D curves / splines along with utilities useful for animation.</li>
                    <li><b>Geo</b> - Collection of procedural 2D & 3D shapes.</li>
                    <li><b>Half Edge</b> - Mesh data structure.</li>
                    <li><b>Oop</b> - Object oriented math objects like Vec3, Quat, Mat4, etc.</li>
                    <li><b>Ray</b> - Ray intersection library.</li>
                    <li><b>Voxel</b> - Manage voxel data and triangulation</li>
                </ul>
            </main>
        </section>

        <section>
            <header>
                <i class="fa-solid fa-book"></i>
                <div>
                    <h1>Learning WebGPU</h1>
                    <a href="https://sketchpunklabs.github.io/learn_webgpu" target="_blank">https://sketchpunklabs.github.io/learn_webgpu</a>
                </div>
            </header>
            <main>
                <p>Ebook on learning how to build a rendering engine from scratch using raw webgpu api calls.</p>
            </main>
        </section>

        <section>
            <header>
                <i class="fa-solid fa-book"></i>
                <div>
                    <h1>IK Wonderland</h1>
                    <a href="https://sketchpunklabs.github.io/ikwonderland" target="_blank">https://sketchpunklabs.github.io/ikwonderland</a>
                </div>
            </header>
            <main>
                <p>Ebook teaching all the maths for building skinning and animation systems. Plus how various IK solvers are implemented.</p>
            </main>
        </section>
    </div>`;
}

content.title = 'Projects';
