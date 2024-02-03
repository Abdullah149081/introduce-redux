import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../features/counter/counterSlice";

const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <span className="text-2xl font-bold">{count}</span>
      <div className="space-x-2 mt-6">
        <button
          onClick={() => dispatch(increment())}
          aria-label="Increment value"
        >
          Increment
        </button>

        <button
          disabled={count === 0}
          onClick={() => dispatch(decrement())}
          aria-label="Decrement value"
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Home;
