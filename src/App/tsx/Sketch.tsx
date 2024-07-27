import p5 from 'p5';

const technologies = [
    { name: 'CSS', color: '#264de4' },
    { name: 'HTML', color: '#e44b23' },
    { name: 'TS', color: '#007acc' },
    { name: 'JS', color: '#f7e018' },
    { name: 'React', color: '#61dafb' },
    { name: 'Vue', color: '#41b883' },
    { name: 'Angular', color: '#dd0031' },
    { name: 'Unity', color: '#ffffff' },
];

const sketch = (p: p5) => {
    const circleDiameter = 80;
    const margin = 10;
    const columns = 4;
    const rows = Math.ceil(technologies.length / columns);

    p.setup = () => {
        p.createCanvas(p.windowWidth / 3, p.windowHeight / 3);
        p.ellipseMode(p.CENTER); // Set ellipse mode to center
        p.noLoop(); // Draw once, then stop looping
    };

    p.draw = () => {
        p.background(220);

        const canvasWidth = p.width;
        const canvasHeight = p.height;
        const totalCircles = technologies.length;
        const totalColumns = Math.min(columns, totalCircles); // Adjust to fit the number of circles
        const totalRows = Math.ceil(totalCircles / totalColumns);

        // Calculate the starting position for centering
        const totalWidth = totalColumns * (circleDiameter + margin) - margin;
        const totalHeight = totalRows * (circleDiameter + margin) - margin;
        const startX = (canvasWidth - totalWidth) / 2;
        const startY = (canvasHeight - totalHeight) / 2;

        for (let i = 0; i < totalCircles; i++) {
            const tech = technologies[i];
            const x = startX + (i % totalColumns) * (circleDiameter + margin);
            const y = startY + Math.floor(i / totalColumns) * (circleDiameter + margin);

            // Draw circle
            p.fill(tech.color);
            p.noStroke();
            p.ellipse(x, y, circleDiameter, circleDiameter);

            // Draw text
            p.fill(0);
            p.textSize(14);
            p.textAlign(p.CENTER, p.CENTER);
            p.text(tech.name, x, y);
        }
    };

    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth / 3, p.windowHeight / 3);
    };
};

export default sketch;
