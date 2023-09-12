import Counter from "./components/Counter";
import Posts from "./components/Posts";
import Star from "./components/Star";
import ReactState from "./components/State";
import Toggle from "./components/Toggle";

export default function HomePage(){
  return(
    <div>
      <h1>In The Name Of Allah</h1>
      <ReactState/>
      <hr />
      <Toggle/>
      <hr />
      <Counter/>
      <hr />
      <Star/>
      <hr />
      <Posts/>
      </div>
  )
}