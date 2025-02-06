export class Polygon {
    constructor(scene) {
        this.scene = scene;
        this.geometry = new THREE.BufferGeometry();
        this.material = new THREE.LineBasicMaterial({ color: 0xff0000 });
        this.vertices = [];
        this.mesh = null;
    }

    addVertex(point) {
        this.vertices.push(point.x, point.y, point.z);
        this.updateGeometry();
    }

    updateGeometry() {
        this.geometry.setAttribute('position', new THREE.Float32BufferAttribute(this.vertices, 3));
        if (this.mesh) {
            this.scene.remove(this.mesh);
        }
        this.mesh = new THREE.LineLoop(this.geometry, this.material);
        this.scene.add(this.mesh);
    }

    complete() {
        this.updateGeometry();
    }

    clone() {
        const newPolygon = new Polygon(this.scene);
        newPolygon.vertices = [...this.vertices];
        newPolygon.updateGeometry();
        return newPolygon;
    }

    remove() {
        this.scene.remove(this.mesh);
    }
}