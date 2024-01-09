import { Link } from "react-router-dom";

interface ButtonProps {
  to?: string;
  text: string;
  onClick?: () => void;
  className?: string;
}

export const Button = (props: ButtonProps) => {
  const { text, onClick } = props;
  return (
    <div>
      {props.to ? (
        <Link
          to={`/${props.to}`}
          className={
            props.className
              ? props.className
              : "w-36 bg-zinc-900 rounded-lg p-2 text-white hover:bg-white hover:text-zinc-900 border-2 border-zinc-900 transition duration-200 ease-in-out flex justify-center"
          }
        >
          {text}
        </Link>
      ) : (
        <button
          className={
            props.className
              ? props.className
              : "w-36 bg-zinc-900 rounded-lg p-2 text-white hover:bg-white hover:text-zinc-900 border-2 border-zinc-900 transition duration-200 ease-in-out flex justify-center"
          }
          onClick={onClick ? onClick : () => {}}
        >
          {text}
        </button>
      )}
    </div>
  );
};
