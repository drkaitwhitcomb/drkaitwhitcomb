import { orderClass, columnSpanClass } from "@/utils/styles";
function defaultClass() {
  return `z-10 h-full w-auto flex bg-[#C8C8C8] flex-grow justify-stretch
  flex flex-col duration-500 ease-in-out hover:opacity-80 rounded-sm shadow-black`;
}


export default function Item({
  item,
  children,
  sx
}: { item: any, children?: any, sx?: string }) {


  const { span, order } = item

  return (
    <div
      className={`${defaultClass()} ${sx} ${orderClass(order)} ${columnSpanClass(span)}`}
    >
      {children}
    </div>
  );
}
