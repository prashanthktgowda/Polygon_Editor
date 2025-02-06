export class Ground {
    constructor(scene) {
        const geometry = new THREE.PlaneGeometry(20, 20);
        const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
        this.mesh = new THREE.Mesh(geometry, material);
        scene.add(this.mesh);
    }
}