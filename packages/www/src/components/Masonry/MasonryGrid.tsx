import type { MasonryGridProps } from "@/typings";
import { rowsClass, gapClass, orderClass, columnsClass, columnSpanClass } from "@/utils/styles";

export function MasonryGrid({
  options,
  children,
}: { options: MasonryGridProps, children?: any }) {

  const { columns = 0, rows = 0, gap = 0, span = 0, order = 0 } = options;

  return (
    <div
      className={`grid ${rowsClass(rows)} ${gapClass(gap)} ${orderClass(order)} ${columnSpanClass(span)} ${columnsClass(columns)}`}
    >
      {children ? children : <></>}
    </div>
  );
}
