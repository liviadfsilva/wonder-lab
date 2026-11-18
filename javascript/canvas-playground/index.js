class Ball {
  constructor({ x, y, dx, dy, speed, radius, color } = {}) {
    this.x = x ?? 320;
    this.y = y ?? 240;
    this.dx = dx ?? 0;
    this.dy = dy ?? 0;
    this.speed = speed ?? 2;
    this.radius = radius ?? 8;
    this.color = color ?? 'white';
  }

  draw(context) {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fill();
  }

  move(width, height) {
    this.x += this.dx * this.speed;
    this.y += this.dy * this.speed;

    if (this.x - this.radius < 0) {
      this.x = this.radius;
      this.dx = -this.dx;
    } else if (this.x + this.radius > width) {
      this.x = width - this.radius;
      this.dx = -this.dx;
    }

    if (this.y - this.radius < 0) {
      this.y = this.radius;
      this.dy = -this.dy;
    } else if (this.y + this.radius > height) {
      this.y = height - this.radius;
      this.dy = -this.dy;
    }
  }
}

window.onload = () => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  canvas.style.background = "#c9e4f6";

  const colors = ['#f7c6d9', '#f9d2b3', '#fbe9a5', '#d8c8f2',
     '#cfeccf', '#aecbef', '#e6daf5', '#d8e8d0', '#f3cce9'];
  const radius = 8;
  const balls = [];

  for (let i = 0; i < 100; i++) {
    const angle = Math.random() * 2 * Math.PI;
    balls.push(new Ball({
      x: Math.random() * (canvas.width - 2 * radius) + radius,
      y: Math.random() * (canvas.height - 2 * radius) + radius,
      dx: Math.cos(angle),
      dy: Math.sin(angle),
      radius: radius,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
  }

  const frame = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    balls.forEach((ball) => {
      ball.move(canvas.width, canvas.height);
      ball.draw(context);
    });

    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
};