import { Ground } from './classes/Ground.js';
import { Polygon } from './classes/Polygon.js';

export class SceneManager {
    constructor(container) {
        this.container = container;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.container.appendChild(this.renderer.domElement);

        this.camera.position.z = 5;

        this.ground = new Ground(this.scene);
        this.polygons = [];
        this.currentPolygon = null;

        this.initEventListeners();
        this.animate();
    }

    initEventListeners() {
        this.container.addEventListener('click', (event) => this.onMouseClick(event));
    }

    onMouseClick(event) {
        const mouse = new THREE.Vector2();
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, this.camera);
        const intersects = raycaster.intersectObjects([this.ground.mesh]);

        if (intersects.length > 0) {
            const point = intersects[0].point;
            if (!this.currentPolygon) {
                this.currentPolygon = new Polygon(this.scene);
                this.polygons.push(this.currentPolygon);
            }
            this.currentPolygon.addVertex(point);
        }
    }

    completePolygon() {
        if (this.currentPolygon) {
            this.currentPolygon.complete();
            this.currentPolygon = null;
        }
    }

    copyPolygon() {
        if (this.polygons.length > 0) {
            const lastPolygon = this.polygons[this.polygons.length - 1];
            const newPolygon = lastPolygon.clone();
            this.polygons.push(newPolygon);
        }
    }

    resetScene() {
        this.polygons.forEach(polygon => polygon.remove());
        this.polygons = [];
        this.currentPolygon = null;
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.renderer.render(this.scene, this.camera);
    }
}