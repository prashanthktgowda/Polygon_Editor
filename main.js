import { SceneManager } from './SceneManager.js';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const sceneManager = new SceneManager(container);

    document.getElementById('completeButton').addEventListener('click', () => sceneManager.completePolygon());
    document.getElementById('copyButton').addEventListener('click', () => sceneManager.copyPolygon());
    document.getElementById('resetButton').addEventListener('click', () => sceneManager.resetScene());
});