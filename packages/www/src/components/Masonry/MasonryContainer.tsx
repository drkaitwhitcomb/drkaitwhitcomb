import { rowsClass, gapClass, columnsClass } from "@/utils/styles";
import type { MasonryContainerProps } from "@/typings";

function defaultClass() {
  return `relative grid mt-8 w-full max-w-screen-xl mx-auto px-2 sm:px-4 object-scale-down`
}

export function MasonryContainer(
  { container, children }: { container: MasonryContainerProps, children: any }
) {

  const { columns = 0, rows = 0, gap = 0 } = container || {};

  return (
    <div className={`${defaultClass()} ${rowsClass(rows)} ${gapClass(gap)} ${columnsClass(columns)}`}>
      {children}
    </div>
  );
}
