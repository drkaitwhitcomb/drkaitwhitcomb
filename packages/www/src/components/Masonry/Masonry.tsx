import { MasonryContainer } from "@/components/Masonry/MasonryContainer";
import { MasonryGrid } from "@/components/Masonry/MasonryGrid";
import Templates from "@/components/Masonry/MasonryTemplates";
import type { MasonryData, MasonryGridProps, MasonryItem } from "@/typings";

function RenderItems(items: MasonryItem[] | undefined) {
  if (!items) {
    return null;
  } else {
    return (
      <>
        {items.map((item, idx) => {
          const SelectedTemplate = Templates[item.type as keyof typeof Templates] as any;
          if (!SelectedTemplate) return null;
          return <SelectedTemplate key={`item-${idx}-${item.type}-${(item as any).title ?? (item as any).content ?? (item as any).src ?? idx}`} item={item as any} />
        })}
      </>
    );
  }
}

function RenderGrids(grids: MasonryGridProps[] | undefined) {
  if (!grids) {
    return <></>;
  } else {
    return (
      <>
        {grids.map((grid, idx) => {
          return (
            <MasonryGrid key={`grid-${idx}-${grid.name ?? "unnamed"}`} options={grid}>
              {grid?.grids ? RenderGrids(grid.grids) : RenderItems(grid?.items)}
            </MasonryGrid>
          );
        })}
      </>
    );
  }
}

export default function Masonry({ masonry }: { masonry?: MasonryData }) {
  if (masonry != undefined) {
    const { grids = [], items = [], container = {} } = masonry

    return (
      <MasonryContainer container={container}>
        {RenderItems(items)}
        {RenderGrids(grids)}
      </MasonryContainer>
    );
  } else {
    return <>NADA</>
  }
}
