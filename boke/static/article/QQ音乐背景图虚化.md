## 起源

在PC听QQ音乐的时候，  
发现在播放器的界面存在一个绚丽的随机变换而且颜色不均的背景色，  
如梦如幻，于是，我打开控制台审查了一下其中的缘由。 

## 高斯模糊

原来是CSS3的filter(滤镜)属性里面可以写一个blur函数来给图像设置高斯模糊。  
```css
.bg_player {
    -webkit-filter: blur(65px);
    filter: blur(65px);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    opacity: .6;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
```
而只通过js在内联中来控制background-image就可以达到变换，  
```
background-image: url("https://y.gtimg.cn/music/photo_new/T002R300x300M000003Pa11R3P22Vc.jpg?max_age=2592000");
```
一方面是色调要随着歌曲的唱片封面的色调来变，所以背景图其实就是唱片封面，  
唱片封面普遍都是一些小图，比较低清，利用高斯模糊恰恰能化腐朽为神奇，如梦如幻。  
demo：https://getharry.github.io/demo/filter.html
