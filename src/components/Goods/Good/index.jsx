
import './index.scss'
import Count from './Count'
export default function Good() {
  return (
    <div className="Good">
      <div className="img">
        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F19%2F20210719230328_5d77f.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1674295274&t=421a39471a302b4a09f2d94a5674dc25" alt="" />
      </div>
      <div className="good-info">
        <h2>汉堡包</h2>
        <span>还在圆面包的第二层中涂以黄油、芥末、番茄酱、沙拉酱等，再夹入番茄片、洋葱、酸黄瓜等食物，可以同时吃到主副食</span>
        <div className="bottom-box">
          <span className='price'>￥28</span>
          <Count count={3}></Count>
        </div>
      </div>
    </div>
  )
}