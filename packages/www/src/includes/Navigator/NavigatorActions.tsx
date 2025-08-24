import { NavigatorAction } from "./NavigatorAction";

export function NavigatorActions({ actions, open }: any) {
  if (!actions || actions.length === 0 || !open) return null;

  return (
    <div className="flex flex-col items-center mb-4 space-y-2">
      {actions.map((action: any, idx: number) => (
        <NavigatorAction key={action.label ?? action.url ?? idx} open={open} {...action} />
      ))}
    </div>
  );
}
