
import './index.scss'
export default function Count(props) {
  return (
    <div className="Count">
      {
        props.count > 0 ? (
          <>
            <div className="btn sub">-</div>
            <span>{props.count}</span>
          </>
        ) : null
      }
      <div className="btn add">+</div>
    </div>
  )
}