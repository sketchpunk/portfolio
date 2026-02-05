// #region IMPORTS
    import { html } from '@tp/preact/htm_preact.mjs';
// #endregion

export default function content(){
    const imgPath = globalThis.ROOTPATH + '/pages/img/demos';

    return html`<div class="projects">
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
    </div>`;
}

content.title = 'Projects';
