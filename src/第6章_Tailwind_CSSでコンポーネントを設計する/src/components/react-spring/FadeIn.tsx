import { useSpring, animated } from "@react-spring/web";

export function FadeIn() {
  const [props] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    [],
  );

  return <animated.div style={props}>Hello World</animated.div>;
}
