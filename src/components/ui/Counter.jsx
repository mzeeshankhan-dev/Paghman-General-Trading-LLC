import useCountUp from "../../hooks/useCountUp";

/** Displays a number that counts up from 0 when scrolled into view. */
export default function Counter({ value, suffix = "", className = "" }) {
  const { ref, value: current } = useCountUp(value);
  return (
    <span ref={ref} className={className}>
      {current.toLocaleString()}
      {suffix}
    </span>
  );
}
