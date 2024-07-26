
import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import Sketch from './Sketch';

const P5Wrapper: React.FC = () => {
    const canvasRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const p5Instance = new p5(Sketch, canvasRef.current as HTMLDivElement);

        return () => {
            p5Instance.remove(); // Clean up the p5 instance on component unmount
        };
    }, []);

    return <div className="d-flex justify-content-center" ref={canvasRef} />;
};

export default P5Wrapper;
