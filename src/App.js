
import 'scss/app.scss'
import Goods from 'components/Goods'
import Search from 'components/Search';

// 设置移动端的适配
document.querySelector('html').style.fontSize = 100 / 750 + 'vw'

function App() {
  return (
    <div className="App">
      <Search></Search>
      <Goods></Goods>
    </div>
  );
}

export default App;
