"use client";

import { useEffect, useRef } from "react";
import "./IconSphere.css";

type IconItem = {
    icon: string;
    label: string;
};

const icons: IconItem[] = [
    { icon: "⚛️", label: "React" },
    { icon: "▲", label: "Next.js" },
    { icon: "🟦", label: "TypeScript" },
    { icon: "🌿", label: "Node.js" },
    { icon: "🐍", label: "Python" },
    { icon: "🔷", label: "Docker" },
    { icon: "🗄️", label: "PostgreSQL" },
    { icon: "🔥", label: "Firebase" },
    { icon: "☁️", label: "AWS" },
    { icon: "🎨", label: "Tailwind" },
    { icon: "📦", label: "NPM" },
    { icon: "⚙️", label: "DevOps" },
    { icon: "📊", label: "Analytics" },
    { icon: "🔐", label: "Security" },
    { icon: "📱", label: "Mobile" },
    { icon: "💻", label: "Frontend" },
    { icon: "🧠", label: "AI" },
    { icon: "🚀", label: "Startup" },
    { icon: "🧪", label: "Testing" },
    { icon: "🧩", label: "Architecture" },
    { icon: "📡", label: "API" },
    { icon: "🛠️", label: "Tools" },
    { icon: "📚", label: "Docs" },
    { icon: "🐳", label: "Containers" },
    { icon: "🔍", label: "Search" },
    { icon: "📁", label: "Storage" },
    { icon: "🖥️", label: "Systems" },
    { icon: "💾", label: "Data" },
];

const RADIUS = 140;

export default function IconSphere() {

    const containerRef = useRef<HTMLDivElement>(null);

    const rotation = useRef({ x: 0, y: 0 });

    const velocity = useRef({
        x: 0.002,
        y: 0.003
    });

    const isDragging = useRef(false);

    const lastMouse = useRef({
        x: 0,
        y: 0
    });

    const positions = useRef(
        icons.map((_, i) => {

            const phi = Math.acos(-1 + (2 * i) / icons.length);
            const theta = Math.sqrt(icons.length * Math.PI) * phi;

            return {
                x: RADIUS * Math.cos(theta) * Math.sin(phi),
                y: RADIUS * Math.sin(theta) * Math.sin(phi),
                z: RADIUS * Math.cos(phi)
            };

        })
    );

    useEffect(() => {

        const container = containerRef.current;
        if (!container) return;

        const items = Array.from(
            container.querySelectorAll(".sphere-item")
        ) as HTMLDivElement[];

        const animate = () => {

            rotation.current.x += velocity.current.x;
            rotation.current.y += velocity.current.y;

            velocity.current.x *= 0.98;
            velocity.current.y *= 0.98;

            if (Math.abs(velocity.current.x) < 0.002) {
                velocity.current.x = 0.002;
            }

            if (Math.abs(velocity.current.y) < 0.003) {
                velocity.current.y = 0.003;
            }

            const sinX = Math.sin(rotation.current.x);
            const cosX = Math.cos(rotation.current.x);
            const sinY = Math.sin(rotation.current.y);
            const cosY = Math.cos(rotation.current.y);

            positions.current.forEach((p, i) => {

                let y = p.y * cosX - p.z * sinX;
                let z = p.y * sinX + p.z * cosX;

                let x = p.x * cosY - z * sinY;
                z = p.x * sinY + z * cosY;

                const scale = (z + RADIUS) / (2 * RADIUS);

                const item = items[i];

                item.style.transform =
                    `translate3d(${x}px, ${y}px, 0) scale(${scale})`;

                item.style.opacity = `${0.4 + scale}`;

                item.style.zIndex = `${Math.floor(scale * 100)}`;

                item.style.filter =
                    `blur(${(1 - scale) * 2}px) brightness(${0.8 + scale * 0.4})`;

                if (scale > 0.92) {
                    item.style.boxShadow =
                        "0 0 12px rgba(139,92,246,0.6)";
                } else {
                    item.style.boxShadow = "none";
                }

            });

            requestAnimationFrame(animate);
        };

        animate();

        const onMouseDown = (e: MouseEvent) => {
            isDragging.current = true;

            lastMouse.current = {
                x: e.clientX,
                y: e.clientY
            };
        };

        const onMouseMove = (e: MouseEvent) => {

            if (!isDragging.current) return;

            const dx = e.clientX - lastMouse.current.x;
            const dy = e.clientY - lastMouse.current.y;

            rotation.current.y += dx * 0.005;
            rotation.current.x += dy * 0.005;

            velocity.current.y = dx * 0.0003;
            velocity.current.x = dy * 0.0003;

            lastMouse.current = {
                x: e.clientX,
                y: e.clientY
            };
        };

        const onMouseUp = () => {
            isDragging.current = false;
        };

        container.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);

        return () => {
            container.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };

    }, []);

    return (

        <div className="sphere-wrapper">

            <div className="sphere" ref={containerRef}>

                {icons.map((item, i) => (
                    <div key={i} className="sphere-item">

                        {item.icon}

                        <span className="tooltip">
                            {item.label}
                        </span>

                    </div>
                ))}

            </div>

        </div>
    );
}