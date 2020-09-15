//点的实现
var Dots = function(speed, alpha) {
        //画布相关
        this.canvas; //canvas节点
        this.ctx; //canvas绘制上下文

        //绘制点相关
        this.x; //横向坐标
        this.y; //纵向坐标
        this.r; //dot半径
        this.a = alpha && alpha > 0 && alpha <= 1 ? alpha : 0.8; //透明度

        //移动相关
        this.speed = speed && speed > 0 ? speed : 2;
        this.sx; //单位时间水平移动距离
        this.sy; //单位时间纵向移动距离
        this.isMouseDot = 0;
    }
    //原型链
Dots.prototype = {
    //初始化
    init: function(canvas, x, y, isMouseDot) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.x = x || Math.random() * this.canvas.width;
        this.y = y || Math.random() * this.canvas.height;
        //this.r = 8;
        this.r = Math.random() * 8; //随机生成小于6的半径值

        if (isMouseDot) this.isMouseDot = 1;

        //随机确定点的移动速度与方向，速度值在[-this.speed, this.speed]之间，提高数值可加快速度
        this.sx = isMouseDot ? 0 : Math.random() * this.speed * 2 - this.speed;
        this.sy = isMouseDot ? 0 : Math.random() * this.speed * 2 - this.speed;

        //绘制点
        this.ctx.beginPath(); //开启绘制路径
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI); //绘制圆
        //this.ctx.fillStyle = 'rgba(255, 255, 255, ' + this.a + ')';
        this.ctx.fillStyle = 'rgba(182, 226, 241, ' + this.a + ')';
        //this.ctx.fillStyle = 'rgba('+ (0+Math.floor(Math.random()*255))+', '+ (0+Math.floor(Math.random()*255))+', '+ (0+Math.floor(Math.random()*255))+', ' + this.a + ')';
        this.ctx.fill(); //填充颜色
        this.ctx.closePath(); //关闭绘制路径
    },
    //调整dot的位置，通过调用update()产生运动效果
    update: function() {
        if (this.isMouseDot) return;
        this.x = this.x + this.sx;
        this.y = this.y + this.sy;
        //点超出canvas范围时另其重生
        if (this.x < 0 || this.x > this.canvas.width) {
            this.init(this.canvas);
        }
        if (this.y < 0 || this.y > this.canvas.height) {
            this.init(this.canvas);
        }
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r + 0.5, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'rgba(182, 226, 241, ' + this.a + ')';
        //this.ctx.fillStyle = 'rgba(255, 255, 255,' + this.a + ')';
        //this.ctx.fillStyle = 'rgba('+ (0+Math.floor(Math.random()*255))+', '+ (0+Math.floor(Math.random()*255))+', '+ (0+Math.floor(Math.random()*255))+', ' + this.a + ')';
        this.ctx.fill();
        this.ctx.closePath();
    },
    //鼠标效果
    mouseDot: function(x, y) {
        this.x = x * 2;
        this.y = y * 2;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r + 0.5, 0, 2 * Math.PI);
        this.ctx.fillStyle = "rgba(255,0,0,.8)";
        this.ctx.fill();
        this.ctx.closePath();
    }
}

function Wonder(opts) {
    var part = document.querySelector(opts.el),
        canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        partStyle = window.getComputedStyle(part, null),
        width = parseInt(partStyle.width),
        height = parseInt(partStyle.height),
        area = width * height,
        cssText = 'width: ' + width + 'px;height: ' + height + 'px';
    canvas.setAttribute('style', cssText);
    canvas.width = (width * 2).toString();
    canvas.height = (height * 2).toString();
    part.appendChild(canvas);
    var dotsArr = [],
        dotsNum = opts.dotsNumber || parseInt(area / 5000),
        maxDotsNum = dotsNum * 2,
        overNum = 0,
        dotDistance = opts.lineMaxLength || 250; //点之间产生连线的最大距离
    //生成点
    for (var i = 0; i < dotsNum; i++) {
        var dot = new Dots(opts.speed, opts.dotsAlpha);
        if (i < dotsNum - 1) {
            dot.init(canvas);
        } else {
            dot.init(canvas, 0, 0, 1);
        }
        dotsArr.push(dot);
    }

    //鼠标事件
    var clickWithNew = opts.clickWithDotsNumber || 5;
    document.addEventListener('click', createDot);

    function createDot(e) {
        var tx = e.pageX,
            ty = e.pageY;
        // 判断是不是在canvas内 width和height为canvas宽高
        if ((tx > 0 && tx < width) && (ty > 0 && ty < height)) {
            for (var i = 0; i < clickWithNew; i++) {
                var dot = new Dots(opts.speed, opts.dotsAlpha);
                dotsArr.push(dot);
                dotsNum += 1;
                dot.init(canvas, tx, ty);
            } // 循环创建5个点 并添加到数组中
        }
    };
    canvas.addEventListener('mouseenter', mouseDotEnter);
    canvas.addEventListener('mouseleave', mouseDotLeave);

    function mouseDotEnter(e) {
        var tx = e.pageX,
            ty = e.pageY;
        dot.init(canvas, tx, ty, 1);
    };

    function mouseDotLeave(e) {
        dot.init(canvas);
    }

    canvas.addEventListener('mousemove', mouseDotMove);

    function mouseDotMove(e) {
        var tx = e.pageX,
            ty = e.pageY;
        if ((tx > 0 && tx < width) && (ty > 0 && ty < height)) {
            dot.mouseDot(tx, ty); // 更新跟踪点的位置
        }
    };

    //动画与连线
    var requestAnimFrame = requestAnimationFrame || webkitRequestAnimationFrame || oRequestAnimationFrame || msRequestAnimationFrame;
    requestAnimFrame(animateUpdate); // 兼容不同浏览器的requestAnimationFrame

    //dot移动效果
    function animateUpdate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空canvas中原有的内容
        var dotsNum = opts.dotsNumber || parseInt(area / 5000),
            maxDotsNum = dotsNum * 2,
            overNum = 0; // 超出最大数量的点的数量

        // 更新点的位置 数量超出最大值时舍弃旧的点
        if (dotsNum > maxDotsNum) {
            overNum = dotsNum - maxDotsNum;
        }
        for (var i = overNum; i < dotsNum; i++) {
            // if (dotsArr[i].isMouseDot) console.log('aaa')
            if (dotsArr[i]) dotsArr[i].update();
        }
        // ...绘制连线
        //绘制点与点之间的连线
        for (var i = overNum; i < dotsNum; i++) {
            for (var j = i + 1; j < dotsNum; j++) {
                var tx = dotsArr[i].x - dotsArr[j].x,
                    ty = dotsArr[i].y - dotsArr[j].y,
                    s = Math.sqrt(Math.pow(tx, 2) + Math.pow(ty, 2));
                //当点与点之间的距离达到预先设置的临街之时，即可绘制连线
                if (s < dotDistance) {
                    ctx.beginPath();
                    ctx.moveTo(dotsArr[i].x, dotsArr[i].y); //设置线的起始位置
                    ctx.lineTo(dotsArr[j].x, dotsArr[j].y); //设置线的结束位置
                    //透明计算方式(临界值距离 - 实际距离) / 临界值距离
                    ctx.strokeStyle = 'rgba(182, 226, 241, .6)';
                    //ctx.strokeStyle = 'rgba(255, 255, 255, ' + (dotDistance - s) / dotDistance + ')';
                    //ctx.strokeStyle = 'rgba('+ (0+Math.floor(Math.random()*255))+', '+ (0+Math.floor(Math.random()*255))+', '+ (0+Math.floor(Math.random()*255))+', ' + (dotDistance - s) / dotDistance + ')';
                    ctx.strokeWidth = 1;
                    ctx.stroke();
                    ctx.closePath();
                }
            }
        }
        requestAnimFrame(animateUpdate);
    }
}

export default Wonder;

/*定时器setTimeout或者setInterval的方式,当有耗时任务时，定时器任务会等待耗时任务结束，js引擎空闲时再去执行
当设定时间非常短时，可能会出现掉帧现象，产生动画不连贯的感受
那么有什么方法可以解决这个问题呢？答案是使用全局函数requestAnimFrame()*/