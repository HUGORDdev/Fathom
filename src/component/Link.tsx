import { ComponentPropsWithRef } from "react"

interface LinkProps extends ComponentPropsWithRef<'li'> {
  name: string;

}
const Link = ({name,...rest}:LinkProps) => {
  return (
    <li className="group relative font-hanken font-light text-base hover:font-bold  text-white cursor-pointer" {...rest}>
      {name}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-3/4"></span>
    </li>
  )
}

export default Link